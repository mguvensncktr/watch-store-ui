export const popularList = [
    {
        id: 0,
        name: "JUNGHANS BLACK",
        image: require('../assets/images/popular/watch-1.png'),
        price: 32.43,
        bgColor: '#000',
        description: "A timeless watch project prestige, confidence, and class. So, if you're planning to add a new watch to your collection, you must shop for top branded watches."
    },
    {
        id: 1,
        name: "VACHERON GENEVE",
        image: require('../assets/images/popular/watch-2.png'),
        price: 42.43,
        bgColor: '#1B2942',
        description: "A timeless watch project prestige, confidence, and class. So, if you're planning to add a new watch to your collection, you must shop for top branded watches."
    },
    {
        id: 2,
        name: "IWC SCHAFFHAUSEN",
        price: 55.43,
        image: require('../assets/images/popular/watch-3.png'),
        bgColor: '#1B2942',
        description: "A timeless watch project prestige, confidence, and class. So, if you're planning to add a new watch to your collection, you must shop for top branded watches."
    }
]

export const categories = [
    {
        id: 0,
        name: "All",
    },
    {
        id: 1,
        name: "Classic",
    },
    {
        id: 2,
        name: "Vintage",
    },
    {
        id: 3,
        name: "Modern",
    },
    {
        id: 4,
        name: "Chosmograph"
    }
]

export const cardList = [
    {
        id: 0,
        name: "Cosmo Chronograph",
        price: 32.43,
        image: require('../assets/images/list/listwatch-1.png'),
        description: "A timeless watch project prestige, confidence, and class. So, if you're planning to add a new watch to your collection, you must shop for top branded watches.",
        sale: '10%'
    },
    {
        id: 1,
        name: "Emperor Watch",
        price: 35.43,
        image: require('../assets/images/list/listwatch-2.png'),
        description: "A timeless watch project prestige, confidence, and class. So, if you're planning to add a new watch to your collection, you must shop for top branded watches.",
        sale: '15%'
    },
    {
        id: 2,
        name: "Emperor IV",
        price: 73.43,
        image: require('../assets/images/list/listwatch-3.png'),
        description: "A timeless watch project prestige, confidence, and class. So, if you're planning to add a new watch to your collection, you must shop for top branded watches.",
        sale: '20%'
    }
]

const dummyData = { popularList, categories, cardList }

export default dummyData;