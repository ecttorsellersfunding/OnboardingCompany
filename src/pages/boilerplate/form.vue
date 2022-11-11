<script setup lang="ts">
import { useForm } from 'sellers-funding-design-system-vite'
import { number, object, string } from 'yup'

const {
  formRef,
  setFormRef,
} = useForm<{
  email: string
  phone: string
  password: string
  currency: string
}>()
const validationSchema = computed(() => object().shape({
  email: string().email('Please insert a valid email').required(),
  phone: string().test('phone', 'Phone number is not valid', value => (value?.length || 0) >= 8).required(),
  password: string().min(8, 'Password must be at least 8 characters').required(),
  currency: number().min(-10000, 'Min value is -10000').max(10000, 'Max value is 10000').required(),
}))

const onSubmit = (values: any) => {
  // eslint-disable-next-line no-alert
  alert(JSON.stringify(values))
}

</script>

<route>
    name: Form Page
    navlinks: true
</route>

<template>
  <SFCard w="full">
    <p text="h2" font="bold" mb="4">
      Form page title
    </p>
    <SFForm :ref="setFormRef as any" :validation-schema="validationSchema" space="y-4" @submit="onSubmit">
      <SFMaterialInput data-testid="email" name="email" label="Email" :error="formRef.errors?.email" />
      <SFMaterialInput data-testid="phone" name="phone" label="Phone" :error="formRef.errors?.phone" />
      <SFMaterialInput data-testid="password" name="password" label="Password" type="password" :error="formRef.errors?.password" />
      <SFMaterialInput data-testid="currency" name="currency" label="Currency" type="currency" :error="formRef.errors?.currency" />
      <SFButton data-testid="submit" type="submit" label="Submit" />
    </SFForm>
  </SFCard>
</template>
