
export interface IProducts {
    id: number,
    title: string,
    price: number,
    year: number,
    image?: string,
    quantity: number,
    configure: IProductsConfig;
}

export interface IProductsConfig {
    chip: string,
    ssd: string,
    memory: string,
    display: string,
}
