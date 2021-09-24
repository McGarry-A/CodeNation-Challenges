
// Activity 1:

// let person = { 
//     name: "Ahmed",
//     age: 24,
//     hello(){
//         console.log(`hello my name is ${this.name}`)
//     }
// }

// person.hello();

// Activity 2:

// let pet = {
//     name: "Juno",
//     typeOfPet: "Cat",
//     age: 2,
//     color: "white and brown",
//     eat(){
//         console.log(`${this.name} is eating`)
//     },
//     drink(){
//         console.log(`${this.name} is drinking`)
//     }
// }

// pet.drink()
// pet.eat()

// Activity 3:

// let coffeeShop = {
//     branch: "Preston",
//     drinksWithPrices: [
//         ["water", 1],
//         ["coke", 2],
//         ["fanta", 3]
//     ],
//     foodWithPrices: [
//         ["sausage roll", 1],
//         ["sandwitches", 2],
//         ["pizza", 3]
//     ],
    
//     drinkOrdered(...drink){
//         drink.forEach((drinkItem)=>{
//             coffeeShop.drinksWithPrices.forEach((row) => {
//                 const correctIndex = row.findIndex(n => n == drinkItem)
//                 if (correctIndex == 0){ 
//                     console.log(`the price for ${drinkItem} is £${row[1]}`);
//                 }
//             })
//         })
//     },
    
//     foodOrdered(...food){ 
//         food.forEach((foodItem) => {
//             coffeeShop.foodWithPrices.forEach((row) => {
//                 const correctIndex = row.findIndex(n => n == foodItem)
//                 if (correctIndex == 0){ 
//                     console.log(`the price for ${foodItem} is £${row[1]}`)
//                 }
//             })
//         })
//     }
// }

// coffeeShop.drinkOrdered("water", "fanta");
// coffeeShop.foodOrdered("pizza", "sausage roll");


// Clean up code
// Simplify the logic
const searchAndMatch = (row, foodOrDrink) => {
    const correctIndex = row.findIndex((n) => n == foodOrDrink)
    if (correctIndex == 0) {
        return console.log(`${foodOrDrink} costs ${row[1]}`)
    }
}

let coffeeShop = {
    branch: "Preston",
    drinksWithPrices: [
        ["water", 1],
        ["coke", 2],
        ["fanta", 3]
    ],
    foodWithPrices: [
        ["sausage roll", 1],
        ["sandwitches", 2],
        ["pastie", 3]
    ],
    drinksOrdered(...drinks){
        drinks.forEach((drink)=>{
            coffeeShop.drinksWithPrices.forEach((row)=>{
                searchAndMatch(row, drink);
            })
        })
    },
    foodOrdered(...foods){
        foods.forEach((food)=>{
            coffeeShop.foodWithPrices.forEach((row)=>{
                searchAndMatch(row, food);
            })
        })
    }
}

coffeeShop.drinksOrdered("water", "fanta");
coffeeShop.foodOrdered("sausage roll", "pastie");
