import { icons, images } from "./";

const myProfile = {
    name: "Usuario",
    profile_image: images.taco,
    address: "No. 88, Jln Padungan, Kuching"
}

const categories = [
    {
        id: 1,
        name: "Fast Food",
        icon: icons.burger
    },
    {
        id: 2,
        name: "Fruit Item",
        icon: icons.cherry
    },
    {
        id: 3,
        name: "Rice Item",
        icon: icons.rice
    }
]

const hamburger = {
    id: 1,
    name: "Tacos 1ñ",
    description: "Tacos al pastor 1",
    categories: [1, 2],
    price: 15.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/hot_tacos.png")
}

const hotTacos = {
    id: 2,
    name: "Tacos 2",
    description: "Tacos al pastor 2",
    categories: [1, 3],
    price: 10.99,
    calories: 78,
    isFavourite: false,
    image: require("../assets/dummyData/hot_tacos.png")
}

const vegBiryani = {
    id: 3,
    name: "Tacos al pastor 3",
    description: "Tacos al pastor 3",
    categories: [1, 2, 3],
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/hot_tacos.png")
}

const wrapSandwich = {
    id: 4,
    name: "Tacos al pastor 4",
    description: "Tacos al pastor 4",
    categories: [1, 2],
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/hot_tacos.png")
}

const menu = [
    {
        id: 1,
        name: "Destacados",
        list: [
            hamburger, hotTacos, vegBiryani,
        ]
    },
    {
        id: 2,
        name: "Cerca de tu ubicacion",
        list: [
            hamburger, vegBiryani, wrapSandwich,
        ]
    },
    {
        id: 3,
        name: "Popular",
        list: [
            hamburger, hotTacos, wrapSandwich,
        ]
    },
    {
        id: 4,
        name: "Nuevos",
        list: [
            hamburger, hotTacos, vegBiryani,
        ]
    },
    {
        id: 5,
        name: "Principales",
        list: [
            hamburger, vegBiryani, wrapSandwich,
        ]
    },
    {
        id: 6,
        name: "Recomendacion",
        list: [
            hamburger, hotTacos, wrapSandwich,
        ]
    },

]


export default {
    myProfile,
    categories,
    menu,
}