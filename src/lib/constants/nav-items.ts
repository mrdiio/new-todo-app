import { SquareTerminal } from 'lucide-react'

export interface NavItemProps {
  title: string
  url?: string
  // icon?: ForwardRefExoticComponent<Omit<LucideProps, 'ref'>>
  prefix?: string
  roles?: string[]
  items?: NavItemProps[] | undefined
}

export interface NavGroupProps {
  title: string
  navItems: NavItemProps[]
}

export const navItems: NavGroupProps[] = [
  {
    title: 'Main',
    navItems: [
      {
        title: 'Dashboard',
        url: '/',
        // icon: SquareTerminal,
      },
      {
        title: 'Users',
        url: '/users',
        // icon: Users2,
        roles: ['Superadmin', 'Admin'],
      },
      {
        title: 'Access',
        // icon: Settings2,
        prefix: '/access',
        roles: ['Superadmin'],
        items: [
          {
            title: 'Roles',
            url: '/roles',
          },
          {
            title: 'Permissions',
            url: '/permissions',
          },
        ],
      },
    ],
  },
  {
    title: 'Platform',
    navItems: [
      {
        title: 'Todo',
        url: '/todos',
        // icon: CheckSquare,
      },
    ],
  },
]
