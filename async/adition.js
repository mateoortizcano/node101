module.exports = {
    syncSum : (num1, num2) => {
        return num1 + num2;
    },

    //async sum with callback
    asyncSum : (num1, num2, calback) => {
        setTimeout(() => {
            calback(num1 + num2);
        }, 5000);
    },

    //async sum with promises
    asyncSumPromises : (num1, num2) => {
        return new Promise( resolve => {
            setTimeout(() => {
                resolve(num1 + num2);
            }, 5000);
        })
    }

}