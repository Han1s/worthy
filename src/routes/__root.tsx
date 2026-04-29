import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import Header from '../components/Header'
import '@mantine/core/styles.css'
import {
  AppShell,
  Burger,
  ColorSchemeScript,
  Group,
  mantineHtmlProps,
  MantineProvider,
  Text,
} from '@mantine/core'
import { mantineTheme } from '#/lib/theme.ts'
import { useDisclosure } from '@mantine/hooks'
import AppTitle from '#/components/Layout/AppTItle.tsx'

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Worthy - Portfolio',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure()

  return (
    <html lang="en" {...mantineHtmlProps}>
      <body>
        <MantineProvider theme={mantineTheme} defaultColorScheme="dark">
          <AppShell
            header={{ height: 60 }}
            navbar={{
              width: 300,
              breakpoint: 'sm',
              collapsed: { mobile: !opened },
            }}
            padding="md"
          >
            <AppShell.Header>
              <Group h="100%" px="md">
                <Burger
                  opened={true}
                  onClick={toggle}
                  hiddenFrom="sm"
                  size="sm"
                />
                <AppTitle />
                <script
                  dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
                />
                <HeadContent />
                <ColorSchemeScript />
              </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">TODO:</AppShell.Navbar>
            <AppShell.Main>
              {children}
              <TanStackDevtools
                config={{
                  position: 'bottom-right',
                }}
                plugins={[
                  {
                    name: 'Tanstack Router',
                    render: <TanStackRouterDevtoolsPanel />,
                  },
                ]}
              />
              <Scripts />
            </AppShell.Main>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  )
}
