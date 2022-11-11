import type { DefaultResponse } from '~/types'

interface NavbarAPIResponse {
  logoSmallUrl: string
  logoUrl: string
  messages: {
    count: number
    url: string
  }
  userMenus: { icon: string; label: string; url: string }[]
  userName: string
  videos: { name: string; pathname: string; videoUrl: string }[]
}

interface SidebarItem {
  icon: string
  label: string
  sort: number
  subItems: null | Exclude<SidebarItem, 'subItems'>[]
  url: string
}

interface SidebarAPIResponse {
  company: {
    companyName: string
    items: SidebarItem[]
  }
  items: SidebarItem[]
}

export type NavbarResponse = DefaultResponse<NavbarAPIResponse>
export type SidebarResponse = DefaultResponse<SidebarAPIResponse>

export interface UserData {
  name: string
  companyName: string
  userManagementPath: () => void
}

export interface SidebarMenuItem {
  path: () => void
  icon: string
  label: string
  sort: number
  subItems: SidebarItem[] | null
  url: string
}

export interface SidebarProps {
  closedLogoUrl: string
  openedLogoUrl: string
  isPartner: boolean
  companyOptions: SidebarMenuItem[]
  menuOptions: {
    path: () => void
    icon: string
    label: string
    sort: number
    url: string
    content?: SidebarMenuItem[]
  }[]
}

export interface NavbarProps {
  learn: {
    thumb: string
    name: string
    pathname: string
    videoUrl: string
  }[]
  messages: {
    count: number
    url: string
    action(): void
  }
}

export interface MenuResponse {
  userData: UserData
  sidebarProps: SidebarProps
  navbarProps: NavbarProps
}
