function randomNumberGen(){ 
    console.log(Math.floor(Math.random()*10))
}

let vertical = ["    | |    "];
let horizontal = ["-----------"];


for (var i = 1; i < 13; i++){
    console.log(vertical);
    if (i%3 == 0){ 
        console.log(horizontal);
    }
}

// the difference between let and const is that let can be changed, whereas const cannot
// % sign operator returns the remaindertouch