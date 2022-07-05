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
