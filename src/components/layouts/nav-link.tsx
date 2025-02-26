'use client'

import React from 'react'
import { SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar'
import { usePathname } from 'next/navigation'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

export default function NavLink({
  item,
}: {
  item: {
    title: string
    icon?: LucideIcon
    url?: string
  }
}) {
  const pathname = usePathname()

  const isActive = pathname === item.url

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild isActive={isActive} tooltip={item.title}>
        <Link href={item.url !== '#' ? item.url! : '#'}>
          {item.icon && <item.icon />}
          <span>{item.title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}
