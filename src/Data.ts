export interface Product {
    id: string;
    slug: string;
    name: string;
    images: string[];
}

export const mockedProducts: Product[] = [
    {
        id: "1",
        slug: "lamp1",
        name: "&Tradition",
        images: [
         "https://media.royaldesign.se/1/tradition-flowerpot-vp9-bordslampa-portabel-4?quality=80&w=1366",   
        ]
    },
    {
        id: "2",
        slug: "lamp2",
        name: "Lamp2",
        images: [
         "https://media.royaldesign.se/1/flos-snoopy-bordslampa-58?quality=80&w=1366",
         "https://media.royaldesign.se/1/flos-snoopy-bordslampa-90?quality=80&w=1920 "
        ]
    },
    {
        id: "3",
        slug: "lamp3",
        name: "Lamp3",
        images: ["https://media.royaldesign.se/1/new-works-kizu-portable-bordslampa-63?quality=80&w=1366",]
    },
    {
        id: "4",
        slug: "lamp4",
        name: "Lamp4",
        images: ["https://media.royaldesign.se/1/gubi-1967-pendel-canvas-6?quality=80&w=1366",]
    },
    {
        id: "5",
        slug: "lamp5",
        name: "Lamp5",
        images: ["https://media.royaldesign.se/1/decotique-lake-plad-kashmirblandning-180x130-grey-light-grey-0?quality=80&w=1366",]
    },
    {
        id: "6",
        slug: "lamp6",
        name: "Lamp6",
        images: ["https://media.royaldesign.se/1/decotique-grand-3-sits-loungesoffa-h-hunter-brown-24?quality=80&w=1366",]
    },
    {
        id: "7",
        slug: "lamp7",
        name: "Lamp7",
        images: ["https://media.royaldesign.se/1/frama-aml-pall-oljad-tall-4?quality=80&w=1366",]
    },
    {
        id: "8",
        slug: "lamp8",
        name: "Lamp8",
        images: ["https://media.royaldesign.se/1/ernst-kakfat-porslin-vanilj-0?quality=80&w=1366",]
    },
];