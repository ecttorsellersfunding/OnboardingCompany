import { mainAPI } from '~/providers'

import { changeRoute, stringCapitalize } from '~/helpers'
import type { MenuResponse, NavbarResponse, SidebarResponse } from '~/types/services'

const getNavbar = async(companyId: string | number) => {
  const { data } = await mainAPI.get<NavbarResponse>('/menu/navbar', {
    params: { companyId },
  })
  return data
}

const getSidebar = async(companyId: string | number) => {
  const { data } = await mainAPI.get<SidebarResponse>('/menu/sidebar', {
    params: { companyId },
  })
  return data
}

const getMenu = async(companyId: string | number, isPartner: boolean): Promise<MenuResponse> => {
  const { pathname } = window.location
  const menu = await Promise.all([getNavbar(companyId), getSidebar(companyId)])
  const [{ result: navbar }, { result: sidebar }] = menu

  const userInfoPath = navbar.userMenus.find(element =>
    element.label.includes('Manage user'),
  )

  const userData = {
    name: stringCapitalize(navbar.userName),
    companyName: stringCapitalize(
      sidebar.company.companyName || 'Your Company',
    ),
    userManagementPath: () => changeRoute(userInfoPath?.url || ''),
  }

  const sidebarProps = {
    openedLogoUrl: navbar.logoUrl,
    closedLogoUrl: navbar.logoSmallUrl,
    isPartner,
    companyOptions: sidebar.company.items.map(item => ({
      ...item,
      path: () => changeRoute(item.url),
    })),
    menuOptions: sidebar.items.map(({ subItems, ...item }) => {
      const path = item.url ? () => changeRoute(item.url) : () => null
      if (!subItems?.length) {
        return {
          ...item,
          active: Boolean(item.url) && pathname.includes(item.url),
          path,
        }
      }
      const content = subItems.map(subItem => ({
        ...subItem,
        path: () => changeRoute(subItem.url),
      }))

      return {
        ...item,
        active: Boolean(item.url) && pathname.includes(item.url),
        path,
        content,
      }
    }),
  }
  const navbarProps = {
    learn: navbar.videos.map(({ videoUrl, ...item }) => {
      if (videoUrl.includes('wistia')) {
        const formattedUrl = videoUrl.split('iframe').join('medias')

        return {
          ...item,
          videoUrl: formattedUrl,
          thumb: `${formattedUrl}/swatch`,
        }
      }
      const videoId = videoUrl.split('=')[1]
      return {
        ...item,
        videoUrl: `https://www.youtube.com/embed/${videoId}`,
        thumb: `https://img.youtube.com/vi/${videoId}/default.jpg`,
      }
    }),
    messages: {
      ...navbar.messages,
      action: () => changeRoute(navbar.messages.url),
    },
  }

  return { userData, sidebarProps, navbarProps }
}

export default { getMenu }
