import { render } from '@/vitest.setup'
import ExampleCard from '~/components/ExampleCard.vue'

describe('ExampleCard.vue', () => {
  it('should render component', () => {
    const component = render(ExampleCard, {
      props: {
        title: 'Title',
        content: 'Content',
        actionLabel: 'Action',
        id: 1,
      },
    })

    expect(component).toBeTruthy()

    // Validate if can query by text
    expect(component.queryByText('Title')).toBeTruthy()
    expect(component.queryByText('Content')).toBeTruthy()
    expect(component.queryByText('Action')).toBeTruthy()

    // Validate if is visible on screen
    expect(component.getByText('Title')).toBeVisible()
    expect(component.getByText('Content')).toBeVisible()
    expect(component.getByText('Action')).toBeVisible()
  })
})
