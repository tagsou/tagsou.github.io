import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'sou_tag',
  description:
    'todoooo',
  href: '',
  author: 'sou_tag',
  locale: 'en-US',
  featuredPostCount: 3,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },

  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/tagsou',
    label: 'GitHub',
  },
  {
    href: 'https://x.com/soutagx86',
    label: 'Twitter',
  },
 

]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  Twitter: 'lucide:twitter',
}
