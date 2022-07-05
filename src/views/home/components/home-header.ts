interface Item {
  label: string
}

export interface MenuList {
  label: string,
  children?: Item[]
}

export const menuLists = [{
  label: 'Free',
},
{
  label: 'Popular',
  children: [{
    label: 'Agency',
  },
  {
    label: 'Blog',
  },
  {
    label: 'Designer',
  },
  {
    label: 'Muti Layout',
  }],
},
{
  label: 'Categories',
},
{
  label: 'CMS',
},
{
  label: 'Ecommerce',
}];
