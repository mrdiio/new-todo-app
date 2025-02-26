'use client'

import { usePathname } from 'next/navigation'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../ui/collapsible'
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '../ui/sidebar'
import { ChevronRight, LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function NavCollapsibleLink({
  item,
}: {
  item: {
    title: string
    url?: string
    prefix?: string
    icon?: LucideIcon
    items?: {
      title: string
      url: string
    }[]
  }
}) {
  const pathname = usePathname()

  const [manualOpen, setManualOpen] = useState(false)
  const isOpenByPathname = item.prefix ? pathname.includes(item.prefix) : false

  useEffect(() => {
    if (!isOpenByPathname) {
      setManualOpen(false)
    }
  }, [pathname, isOpenByPathname])

  return (
    <Collapsible
      asChild
      className="group/collapsible"
      open={isOpenByPathname || manualOpen}
      onOpenChange={(open) => setManualOpen(open)}
    >
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton tooltip={item.title}>
            {item.icon && <item.icon />}
            <span>{item.title}</span>
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {item.items?.map((subItem) => {
              const isActive = pathname === subItem.url

              return (
                <SidebarMenuSubItem key={subItem.title}>
                  <SidebarMenuSubButton asChild isActive={isActive}>
                    <Link
                      href={subItem.url !== '#' ? subItem.url : '#'}
                      className={isActive ? 'font-medium' : ''}
                    >
                      <span>{subItem.title}</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              )
            })}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  )
}
