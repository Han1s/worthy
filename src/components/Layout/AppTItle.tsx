import { Text } from '@mantine/core'

const AppTitle = () => {
  return (
    <Text
      component="span"
      variant="gradient"
      gradient={{ from: 'cyan', to: 'lightgreen', deg: 90 }}
      fw={900}
      size="xl"
      lts={1.2}
      style={{
        fontFamily: 'Georgia, serif',
        textShadow: '0 0 18px rgba(34, 211, 238, 0.35)',
      }}
    >
      Worthy
    </Text>
  )
}

export default AppTitle
