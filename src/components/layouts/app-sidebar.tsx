'use client'

import React from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import {
  CheckSquare,
  Coffee,
  Settings2,
  SquareTerminal,
  Users2,
} from 'lucide-react'
import { NavMain } from './nav-main'
import Link from 'next/link'

const navItems = [
  {
    title: 'Main',
    groupItems: [
      {
        title: 'Dashboard',
        url: '/',
        icon: SquareTerminal,
      },
      {
        title: 'Users',
        url: '/users',
        icon: Users2,
        roles: ['Superadmin', 'Admin'],
      },
      {
        title: 'Access',
        icon: Settings2,
        prefix: '/access',
        roles: ['Superadmin'],
        items: [
          {
            title: 'Roles',
            url: '/access/roles',
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
    groupItems: [
      {
        title: 'Todo',
        url: '/todos',
        icon: CheckSquare,
      },
    ],
  },
]

export default function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} variant="floating">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-sidebar-primary-foreground">
                  <Coffee className="size-5" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold uppercase">Todo App</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={navItems} />
      </SidebarContent>

      <SidebarFooter>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-sidebar-secondary-foreground">
              Version
            </span>
            <span className="text-xs text-sidebar-primary/40">1.0.0</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
