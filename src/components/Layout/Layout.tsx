// import { Link } from '@tanstack/react-router'
// import { IconVolume, IconPlus } from '@tabler/icons-react'
// const NAV_ROUTES = [
//   {
//     to: '/',
//     label: 'All noises',
//     icon: IconVolume,
//   },
//   {
//     to: '/add',
//     label: 'Add a noise',
//     icon: IconPlus,
//   },
// ]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <div>
          <h1>Worthy</h1>
        </div>
      </header>

      <div>
        {/*  <aside className="w-64 bg-gray-100 border-r border-gray-200">*/}
        {/*    <nav className="p-4">*/}
        {/*      <ul className="space-y-2">*/}
        {/*        {NAV_ROUTES.map((route) => {*/}
        {/*          const Icon = route.icon*/}

        {/*          return (*/}
        {/*            <li key={route.to}>*/}
        {/*              <Link*/}
        {/*                to={route.to}*/}
        {/*                className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"*/}
        {/*                activeProps={{*/}
        {/*                  className: 'bg-gray-200 font-semibold',*/}
        {/*                }}*/}
        {/*              >*/}
        {/*                <Icon size={20} />*/}
        {/*                {route.label}*/}
        {/*              </Link>*/}
        {/*            </li>*/}
        {/*          )*/}
        {/*        })}*/}
        {/*      </ul>*/}
        {/*    </nav>*/}
        {/*  </aside>*/}

        <main>{children}</main>
      </div>
    </div>
  )
}
