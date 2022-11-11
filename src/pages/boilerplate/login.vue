<route>
name: Login
meta:
  layout: alternative
</route>

<script setup lang="ts">
import { useMutation } from 'vue-query'

import { partnerService, userService } from '~/services'
import type { Company, User } from '~/types'
import { managerInfoKey, partnerKey } from '~/types'

const companies = ref<Company[]>([])
const user = ref<User | null>(null)
const showSelectCompanies = ref(false)
const selectedCompany = ref<Company | null>(null)
const isPopulating = ref(false)

const token = useStorage('@seller-token', '')
const managerInfo = inject(managerInfoKey)
const partner = inject(partnerKey)
const router = useRouter()

const form = reactive({
  email: '',
  password: '',
})

const {
  mutateAsync: login,
  isError: isLoginError,
  isLoading: isLoggingIn,
} = useMutation(userService.login)

const {
  mutateAsync: getCompanies,
  isError: isErrorCompanies,
  isLoading: isLoadingCompanies,
} = useMutation(userService.listCompany)

const {
  mutateAsync: getPartner,
  isError: isErrorPartner,
  isLoading: isLoadingPartner,
} = useMutation(partnerService.getPartnerInfo)

const isLoading = computed(
  () =>
    isLoggingIn.value
    || isLoadingCompanies.value
    || isLoadingPartner.value
    || isPopulating.value,
)

const populateData = async() => {
  if (!managerInfo || !partner || !user.value || !selectedCompany.value) return
  isPopulating.value = true
  managerInfo.value = {
    companyExternalId: selectedCompany.value.externalId,
    companyId: selectedCompany.value.id,
    email: user.value.email,
    lastName: user.value.lastName,
    name: user.value.name,
    userId: user.value.userId,
    claims: [],
    isCompanyAdmin: true,
  }
  partner.value = await getPartner()
  useStorage('@seller-manager', managerInfo.value, sessionStorage)
  useStorage('@seller-partner', partner.value, sessionStorage)

  router.push({ name: 'Boilerplate' })
  isPopulating.value = false
}

const submit = async() => {
  try {
    const loginResponse = await login(form)
    token.value = loginResponse.token
    user.value = loginResponse.user
    const companiesResponse = await getCompanies(loginResponse.user.userId)
    companies.value = companiesResponse
    if (companiesResponse.length > 1) {
      showSelectCompanies.value = true
      return
    }
    selectedCompany.value = companiesResponse[0]
    await populateData()
  }
  catch (err) {
    console.error(err)
  }
}
</script>

<template>
  <main w="full" min-h="screen" display="flex" justify="center" align="items-center">
    <SFTransition transition="appear" w="6/12">
      <SFCard v-if="showSelectCompanies">
        <h3 text="center primary h3" font="bold">
          Select your company
        </h3>

        <section display="flex" align="items-center" justify="between" my="10">
          <div
            v-for="company in companies"
            :key="company.id"
            display="flex"
            flex="col"
            align="items-center"
          >
            <SFIcon name="far fa-building" color="primary" text="h3" />
            <button
              text="neutral-white"
              bg="primary"
              p="2"
              @click="
                () => {
                  selectedCompany = company
                  populateData()
                }
              "
            >
              {{ company.businessLegalName }}
            </button>
          </div>
        </section>
      </SFCard>
      <SFCard v-else>
        <h1 text="center primary h3" font="bold">
          Login
        </h1>
        <form @submit.prevent="submit">
          <SFInputField
            v-model="form.email"
            label="Email"
            placeholder="Email"
            data-testid="input-email"
          />
          <SFInputField
            v-model="form.password"
            label="Password"
            type="password"
            placeholder="Password"
            data-testid="input-password"
            mt="4"
          />
          <div display="flex" align="items-center" justify="end" mt="8">
            <SFButton label="Login" type="submit" />
          </div>
          <span
            v-if="isLoginError"
            text="danger"
          >Error! please verify credentials</span>
          <span
            v-if="isErrorCompanies"
            text="danger"
          >Error getting your companies</span>
          <span
            v-if="isErrorPartner"
            text="danger"
          >Error getting your partner config</span>
        </form>
        <SFLoader v-if="isLoading" />
      </SFCard>
    </SFTransition>
  </main>
</template>
