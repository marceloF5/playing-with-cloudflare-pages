import type { ComponentStory, ComponentMeta } from "@storybook/react"
import Button from "../app/components/Button"

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>

export const Regular: ComponentStory<typeof Button> = () => (
  <Button text="Hello!" />
)