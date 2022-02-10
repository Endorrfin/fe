export interface IProduct {
    name: string;
    id: number;
    description: string;
    inventoryNumber: string;
    price: number;
    categoryId: number;
}

export interface IInventoryTypeItem {
    id: number;
    displayedName: string;
}

export type ProductWithCategoryName = IProduct & { categoryName: string };
