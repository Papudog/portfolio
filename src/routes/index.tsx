import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index(): React.JSX.Element {
  return (
    <></>
  )
}