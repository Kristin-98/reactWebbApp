export interface Product {
    id: string;
    slug: string;
    name: string;
    imageUrl: string;
}

export const mockedProducts: Product[] = [
    {
        id: "1",
        slug: "lamp1",
        name: "Lamp1",
        imageUrl: "https://media.royaldesign.se/1/tradition-flowerpot-vp9-bordslampa-portabel-4?quality=80&w=1366",
    },
    {
        id: "2",
        slug: "lamp2",
        name: "Lamp2",
        imageUrl: "https://media.royaldesign.se/1/tradition-flowerpot-vp9-bordslampa-portabel-4?quality=80&w=1366",
    },
    {
        id: "3",
        slug: "lamp3",
        name: "Lamp3",
        imageUrl: "https://media.royaldesign.se/1/tradition-flowerpot-vp9-bordslampa-portabel-4?quality=80&w=1366",
    },
];