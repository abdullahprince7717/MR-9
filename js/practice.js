//const 

{
    const var1 = "str1"
    console.log(var1)
    {
        const var1 = "str2"
        console.log(var1)
        // const var1 = "str2" // error
    }
    console.log(var1)
}

console.log("=====================================")
//let

{
    let var1 = "str1"
    console.log(var1)
    {
        let var1 = "str2"
        console.log(var1)
        // const var1 = "str2" // error
    }
    console.log(var1)
}

console.log("=====================================")

// var

{
    var var1 = "str1"
    console.log(var1)
    {
        var var1 = "str2"
        console.log(var1)
        // const var1 = "str2"
    }
    console.log(var1)
}

console.log("=====================================")

// Operator Precedence

let a = 6 + 7 * 8 / 9
console.log(a)

a = 6 + 7 / 9 * 8
console.log(a)

a = 6 + 7 * (8 / 9)
console.log(a)


console.log("=====================================")

// Ternary Operator

let age = 18
let result = (age > 18) ? "Adult" : "Child"
console.log(result)

console.log("=====================================")

// Switch Case

let day = 1
switch (day) {
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("Invalid")
}

console.log("=====================================")

// For Loop

for (let i = 0; i < 10; i++) {
    console.log(i)
}

console.log("=====================================")

// While Loop