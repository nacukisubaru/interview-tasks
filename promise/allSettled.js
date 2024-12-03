//Написать полифил allSettled

function test1() {
    return new Promise((_, rejected) => {
        setTimeout(() => rejected('hello error'), 1000)
    })
}

function test2() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('hello'), 1000)
    })
}

function test3() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('hello2'), 1000)
    })
}

const promises = [
    test1,
    test2,
    test3
];

//Решение первое
async function allSettled(promises) {
    const results = [];
    return new Promise((resolve) => {

        function executeResolve(results) {
            if (results.length === promises.length) {
                resolve(results);
            }
        }

        promises.map(async (promise) => {
            promise().then((res) => {
                results.push({ status: "fullfilled", value: res });
                executeResolve(results);
            }).catch((err) => {
                results.push({ status: "rejected", reson: err });
                executeResolve(results);
            })
        });
    })
}

//Решение через promise all
async function allSettled2(promises) {
    const results = [];
    return new Promise(async (resolve) => {
        await Promise.all(promises.map(async (promise) => {
            try {
                const value = await promise();
                results.push({ status: "fullfilled", value });
            } catch (error) {
                results.push({ status: "rejected", reason: error });
            }
        }));
        resolve(results);

    })

}

allSettled2(promises).then((res) => {console.log(res)});