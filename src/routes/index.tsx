import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@mantine/core'
import { createServerFn } from '@tanstack/react-start'

export const getServerTime = createServerFn().handler(async () => {
  // This runs only on the server
  return new Date().toISOString()
})

export const Route = createFileRoute('/')({
  component: App,
  loader: async () => getServerTime(),
})

function App() {
  const data = Route.useLoaderData()

  console.log(data)

  return (
    <main>
      <Button variant="filled">Button Test</Button>
    </main>
  )
}
