import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'sou_tag',
  description:
    'todoooo',
  href: '',
  author: 'sou_tag',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/myWebsite/blog',
    label: 'blog',
  },

  {
    href: '/myWebsite/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/tagsou',
    label: 'GitHub',
  },
  {
    href: '',
    label: 'Twitter',
  },
 

]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  Twitter: 'lucide:twitter',
}
