// Объявляет пользовательский тип с помощью интерфейса
interface Product {
    id: number;
    description: string;
}


// Объявляет API как интерфейс
interface IProductService {
    getProducts(): Product[];
    getProductById(id: number): Product
}

class ProductService implements IProductService {
    getProducts(): Product[] {
        // здесь идет код для получения продукта из реального источника данных.
        return [];
    }

    getProductById(id: number): Product {
        // здесь идет код для получения продукта по id.
        return {id: 123, description: 'Good product' };
    }
}


// class MockProductService implements IProductService {
//     // Здесь идет другая конкретная реализация методов интерфейса.
    
// }


// function getProductService(isProduction: boolean): IProductService {
//     if (isProduction) {
//         return new ProductService();
//     } else {
//         return new MockProductService();
//     }
// }

// const productService: IProductService; // Константа, имеющая тип интерфейса
// const isProd = true; // В реальном приложении это бы не кодировалось жестко
// const productService: IProductService = getProductService(isProd); // Получает правильный экземпляр сервиса продукта
// const products = ProductService.getProducts(); // Вызывает метод для сервиса продукта