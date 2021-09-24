
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
        ["pizza", 3]
    ],
    
    drinkOrdered(...drink){
        drink.forEach((drinkItem)=>{
            coffeeShop.drinksWithPrices.forEach((row) => {
                const correctIndex = row.findIndex(n => n == drinkItem)
                if (correctIndex == 0){ 
                    console.log(`the price for ${drinkItem} is £${row[1]}`);
                }
            })
        })
    },
    
    foodOrdered(...food){ 
        food.forEach((foodItem) => {
            coffeeShop.foodWithPrices.forEach((row) => {
                const correctIndex = row.findIndex(n => n == foodItem)
                if (correctIndex == 0){ 
                    console.log(`the price for ${foodItem} is £${row[1]}`)
                }
            })
        })
    }
}

coffeeShop.drinkOrdered("water", "coke");
coffeeShop.foodOrdered("pizza", "sausage roll");
