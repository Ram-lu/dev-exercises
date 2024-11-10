/* eslint-disable no-unused-vars */

// ----------- CREACION DE DICCIONARIOS --------------

// Diccionario con el Deck y sus Palos
const DECK = {
    Hearts:[1,2,3,4,5,6,7,8,9,10,11,12,13],
    Diamonds:[1,2,3,4,5,6,7,8,9,10,11,12,13],
    Clubs:[1,2,3,4,5,6,7,8,9,10,11,12,13],
    Spades:[1,2,3,4,5,6,7,8,9,10,11,12,13]
}

// Diccionario de apoyo en caso de querer mostrar el nombre de las cartas con valores especiales en lugar de su valor numerico
const SPECIAL_CARDS = {
    1: "As",
    11: "J",
    12: "Q",
    13: "K"
}

// Diccionario con las posibles jugadas ganadoras, unicamente el RoyalFlush contiene logica en este Diccionario, los demas son descriptivos
const POKER_HANDS = {
    "Royal Flush" : {
        Priority: 1,
        values: [1,10,11,12,13]
    },

    "Straight Flush": {
        Priority: 2,
        Description: "Cinco cartas consecutivas del mismo palo"
    },

    "Four of a Kind": {
        Priority: 3,
        Description: "Cuatro Cartas del mismo valor"
    },

    "Full House": {
        Priority: 4,
        Description: "Tres cartas del mismo valor y 2 mas de otro valor igual"
    },

    "Flush": {
        Priority: 5,
        Description: "Cinco cartas del mismo palo no consecutivas"
    },

    "Straight": {
        Priority: 6,
        Description: "Cinco cartas consecutivas de cualquier palo" 
    },

    "Three of a Kind": {
        Priority: 7,
        Description: "Tres cartas del mismo valor"
    },

    "Two Pairs": {
        Priority: 8,
        Description: "Dos pares de cartas del mismo valor"
    },

    "One Pair": {
        Priority: 9,
        Description: "Un par de cartas del mismo valor"
    },

    "Hight Card": {
        Priority: 10,
        Description: "Sin ninguna jugada solo contando tu carta mas alta"
    }

}

// Diccionario de apoyo para revision de funcion del Royal Flush
const hand = [
    { suit: "Hearts", value: 1 },  // As
    { suit: "Hearts", value: 10 }, // 10
    { suit: "Hearts", value: 11 }, // J
    { suit: "Hearts", value: 12 }, // Q
    { suit: "Hearts", value: 13 }, // K
    { suit: "Diamonds", value: 3 },
    { suit: "Clubs", value: 2 }
];

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Obtenemos los valores de las keys del objeto DECK, recuperandolos en un arreglo tal que [Hearts, Diamond, Clubs, Spades] 
const getSuits = () => Object.keys(DECK)

// Obtenemos aleatoriamente la propiedad Suist de nuestas futuras cartas a traves de la funcion creada anteriormente 
const getRandomSuit = () => getSuits()[Math.floor(Math.random()* getSuits().length)]

// Obtenemos aleatoriamente la propiedad Value de nuestras futuras cartas dentro de un rango de 1...13
const getRandomValue = () => Math.floor(Math.random() * 13) + 1;

// Creamos una carta uniendo las propiedades anteriormente obtenidas
const createCard = () => ({suit: getRandomSuit(), value: getRandomValue()})

// Armamos un arreglo con 2 cartas creando que funcionaran como nuestra mano
const createHand = () => [createCard(), createCard()]

// Armamos un objeto con las propiedades Flow, River y Flow que como valores contendran una carta o un arreglo de cartas
const createBoard = () => ({
    Flow: [createCard(),createCard(),createCard()],
    River: createCard(),
    Flop: createCard()
})

// Armamos nuestro objeto final, con las propiedasdes de Mano y Tablero que nos servira para revisar las jugadas
const createBoardGame = () => ({
    hand: createHand(),
    board: createBoard()
})

// Convertimos nuestro Juego en un objeto plano que nos permita hacer mas sencilla la revision de las jugadas
const getAllCards = (boardGame) => [...boardGame.hand, ...boardGame.board.Flow, boardGame.board.River, boardGame.board.Flop]

// Funcion de revision para una Escalera Real
const isRoyalFlush = cards => {

    // Recorremos el arreglo que se optiene de la funcion getSuits : [Hearts, Diamond, Clubs, Spades]
    // Por cada posicion del arreglo osea cada Palo revisamos nuestro juego completo y filtramos los que son de ese palo
    // Si el resultado del filtro es un arreglo con menor que 5 elementos que significa que poria ser una escalera, no es retornado
    const result = getSuits().map((suit) => cards.filter(card => card.suit === suit)).find(suitCards => suitCards.length >= 5) 

    // Ordenamos el arreglo retornado de 5 elementos por el valor que contiene Value osea el numero de la carta para poder hacer una revision lineal
    const values = !result ? null : result.map(card => card.value).sort((a,b) => a - b)

    // Retornamos el Arreglo obtenido al inicio solo si cumple la condicion de ser igual a nuestro diccionario de Escalera Real en caso contrario, devolvemos nulo
    return JSON.stringify(values) === JSON.stringify(POKER_HANDS["Royal Flush"].values) ? result : null
} 

console.log(getAllCards(createBoardGame()))


