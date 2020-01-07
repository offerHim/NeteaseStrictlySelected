export interface ItemType {
    path?: string,
    component?: any,
    from?: string,
    to?: any,
    children?: ItemType[]
}

export interface propsType {
    routes: ItemType[]
} 