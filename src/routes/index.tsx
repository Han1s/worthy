import { createFileRoute } from '@tanstack/react-router'
import {
  NumberInput,
  Paper,
  Stack,
  Title,
  Text,
  Container,
} from '@mantine/core'
import { createServerFn } from '@tanstack/react-start'
import { useState } from 'react'

export const getServerTime = createServerFn().handler(async () => {
  // This runs only on the server
  return new Date().toISOString()
})

export const Route = createFileRoute('/')({
  component: App,
  loader: async () => getServerTime(),
})

function App() {
  const [cash, setCash] = useState<number | string>('')

  const totalNetWorth = typeof cash === 'number' ? cash : 0

  return (
    <Container>
      <Paper p="lg" maw={420} mx="auto" mt="xl" withBorder>
        <Stack>
          <Title order={1}>Your total net worth is</Title>
          <Text size="lg" c={'green.4'} fw={700}>
            ${totalNetWorth.toLocaleString()}
            {/*  TODO: add daily change */}
            {/*  TODO: add monthly change */}
            {/*  TODO: add yearly change */}
          </Text>

          {/*<NumberInput*/}
          {/*  label="Current cash"*/}
          {/*  description="Enter your current cash in dollars"*/}
          {/*  placeholder="0"*/}
          {/*  prefix="$"*/}
          {/*  min={0}*/}
          {/*  value={cash}*/}
          {/*  onChange={setCash}*/}
          {/*/>*/}
        </Stack>
      </Paper>
    </Container>
  )
}
