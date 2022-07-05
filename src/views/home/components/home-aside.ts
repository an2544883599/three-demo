interface Item {
  label: string;
  name?: string;
  href?: string
}

export type RouteList = Omit<Item, 'href'> & {
  children?: Item[]
}

export interface ListJson {
  [key: string]: Item[]
}

export const routeLists = [
  {
    label: 'Popular-tags',
    key: 'Popular-tags',
    children: [
      {
        label: 'Agency',
        key: 'Agency',
        href: '/Agency',
      },
      {
        label: 'Blog',
        key: 'Blog',
        href: '/Agency',
      },
    ],
  },
  {
    label: 'Category',
    key: 'Category',
    children: [
      {
        label: 'Design',
        key: 'Design',
        href: '/Agency',
      },
      {
        label: 'Business',
        key: 'Business',
        href: '/Agency',
      },
    ],
  }, {
    label: 'Language',
    key: 'Language',
    children: [
      {
        label: 'Spanish',
        key: 'Spanish',
        href: '/Agency',
      },
      {
        label: 'Italian',
        key: 'Italian',
        href: '/Agency',
      },
    ],
  }, {
    label: 'Style',
    key: 'Style',
    children: [
      {
        label: 'Sidebar',
        key: 'Sidebar',
        href: '/Agency',
      },
      {
        label: 'Organic',
        key: 'Elegant',
        href: '/Agency',
      },
    ],
  },
];
