// let name = "Ahmed";
// let age = "Ahmed";
// let favouriteDrink = "Ahmed";

// console.log(`Hi my name is ${name}. My favourite drink is ${favouriteDrink}. I am ${age}`);

// let breakfast = "Eggs"
// let lunch = "Tesco Meal Deal"
// let dinner = "Steak"

// console.log(`I had ${breakfast} this morning, then i had ${lunch} and I ended the day eating ${dinner}`);

// let today = new Date('September 21 2021');
// let birthday = new Date('October 05 2021');

// const days = birthday.getTime() - today.getTime()
// const msInDay = 1000*3600*24
// //how many ms in a seconds 
// //How many seconds in an hour
// //how many hours in a day

// const result = days/msInDay
// console.log(result);

// let age = 15;
// let country = "UK"
// if (age > 17 && country == "UK"){ 
//     console.log("Yes, i can serve you.");
// } else { 
//     console.log("You arent old enough")
// }

// let topping = "pepperoni"

// switch (topping){
//     case "pepperoni":
//         console.log(`${topping} is HARAM`)
//         break;
//     case "cheese":
//         console.log(`we love ${topping}`)
//         break;
//     case "pineapple":
//         console.log(`${topping} is grim on pizza`)
//         break;
//     default:
//         console.log("whats goin on")
//         break
// }

// let password = "password"

// switch (true){
//     case password.length < 8:
//         console.log("password is too short")
//         break;
//     default:
//         console.log("good to go");
// }


// let num = 10

// switch (true){
//     case num%5 == 0:
//         console.log("this number is divisble by 3 or 5")
//         break;
//     case num%3 == 0:
//         console.log("this number is divisble by 3 or 5")
//         break;
//     default:
//         console.log("this number is not divisble by 3 or 5")
// }

// if (num%5 == 0 || num%3 == 0){ 
//     console.log("this number is divisble by 3 or 5")
// } else { 
//     console.log("this number is not divisble by 3 or 5")
// }

// let num = 15

// if (num%3==0 && num%5==0){
//     console.log("fizz buzz")
// }
// else if (num%3==0) {
//     console.log("fizz")
// } 
// else if (num%5==0) { 
//     console.log("buzz")
// } else {
//     console.log(num);
// }

// let num = "2020"
// let plaindrome = num.split('').reverse().join('')

// if (plaindrome == num) { 
//     console.log("num is a plindrome.");
// } else { 
//     console.log("it is not a palindrome");
// }

// (plaindrome == num) ? console.log("num is a palindrome") : console.log("it is not a palindrome.")

// let placeOfWork = "Dota2"
// let townOfHome = "Preston"
// let timeOfDay = 5

// if (timeOfDay == 1){
//     console.log("lunch")
// } else if (timeOfDay == 2){ 
//     console.log("coding")
// } else {
//     console.log("Dota2")
// }

// let string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"

// //console.log(string.lastIndexOf('a','e','i','o','u'));

// let splitString = string.split('');
// let positions = [];

// positions.push(splitString.lastIndexOf('a'))
// positions.push(splitString.lastIndexOf('e'))
// positions.push(splitString.lastIndexOf('i'))
// positions.push(splitString.lastIndexOf('o'))
// positions.push(splitString.lastIndexOf('u'))

// let largest = Math.max.apply(Math, positions);
// console.log(largest + 1);

// let word = "naan"

// if (word.charAt(0) == word.charAt(word.length-1)){ 
//     return true
// } else { 
//     return false
// }

// let num1 = 5
// let num2 = 5

// let result = num1 + num2
// if (result%2 == 0){ 
//     console.log(num1, num2)
// } else { 
//     console.log(result)
// }