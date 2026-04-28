import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@mantine/core'
import { createServerFn } from '@tanstack/react-start'

export const Route = createFileRoute('/')({ component: App })

const serverLoader = createServerFn({ method: 'GET' }).handler(() => {
  return { name: 'test' }
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
