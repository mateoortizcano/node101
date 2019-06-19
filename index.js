const greeting = require("./hello");
const cowsay = require("cowsay");
const adition = require("./async/adition")

console.log(greeting.hello("Mateo"));
console.log(cowsay.say({
    text: "I'm a moooodule",
    e: "oO",
    T: "U "
}));

//proceso de suma de 1,2,3,4,5 de manera asíncrona usando callbacks
let funcion =  async () => {
    adition.asyncSum(1, 2, sum => {
        console.log("-*" + sum);
        adition.asyncSum(sum, 3, sum => {
            console.log("--*" + sum);
            adition.asyncSum(sum, 4, sum => {
                console.log("----*" + sum);
                console.log("----*" + parseInt(result + 5));
            })
        })
    });
}


let funcion2 = async () => {
    //proceso de adición con promesas
    adition.asyncSumPromises(1, 2)
    .then(result => {
        console.log("-*" + result);
        adition.asyncSumPromises(result, 3)
            .then(result => {
                console.log("--*" + result);
                adition.asyncSumPromises(result, 4)
                    .then(result => {
                        console.log("---*" + result);
                        console.log("----*" + parseInt(result + 5))
                    })
            })
    })
}

// ahora ejecutar con async y await
let execAwaitAsync = async () => {
    let ans = await adition.asyncSumPromises(1, 2);
    console.log("-*" + ans);
    ans = await adition.asyncSumPromises(ans, 3);
    console.log("--*" + ans);
    ans = await adition.asyncSumPromises(ans, 4);
    console.log("---*" + ans);
    ans = await adition.asyncSumPromises(ans, 5);
    console.log("----*" + ans);
}

// funcion();
funcion2();
// execAwaitAsync();
