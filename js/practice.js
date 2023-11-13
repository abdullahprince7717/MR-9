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