import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
} from '@/components/ui/sidebar'
import { LucideIcon } from 'lucide-react'
import NavLink from './nav-link'
import NavCollapsibleLink from './nav-collapsible-link'

export function NavMain({
  items,
}: {
  items: {
    title: string
    groupItems: {
      title: string
      url?: string
      prefix?: string
      icon?: LucideIcon
      items?: {
        title: string
        url: string
      }[]
    }[]
  }[]
}) {
  return items.map((group) => (
    <SidebarGroup key={group.title}>
      <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
      <SidebarMenu>
        {group.groupItems.map((item) =>
          item.items ? (
            <NavCollapsibleLink key={item.title} item={item} />
          ) : (
            <NavLink key={item.title} item={item} />
          )
        )}
      </SidebarMenu>
    </SidebarGroup>
  ))
}
