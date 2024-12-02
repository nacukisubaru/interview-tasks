//Функция принимает в себя два параметра
//ассинхронная функция
//config: { count: number, delay: (count) => number }

//если ассинхронная функция возвращает промис в статусе rejected
//то необходимо перезапустить данную функцию config.count раз с задержкой в config.delay мс
//пока промис не перейдет в статус fullfilled либо количество возможных попыток 
//config.count 6
//функция retry должна возвращать промис

function test() {
    return new Promise((resolve, rejected) => {
        const isExecuteResolve = Math.random() < 0.15;
        if (isExecuteResolve)
            setTimeout(() => resolve('hello'), 1000)
        else
            setTimeout(() => rejected('hello error'), 1000)

    })
}

function retry(promiseFn, config) {
    let retryCounter = 0;

    return new Promise((resolve, rejected) => {
        function excutePromise() {
            promiseFn()
                .then((result) => {
                    resolve(result);
                })
                .catch((error) => {
                    if (retryCounter < config.count) {
                        setTimeout(
                            () => {
                                retryCounter++;
                                excutePromise();
                            },
                            config.delay(config.count)
                        );
                    } else {
                        rejected(new Error(error));
                    }
                });
        }

        excutePromise();
    })
}

retry(test, { count: 5, delay: (retrycount) => retrycount * 1000 })
    .then((res) => console.log('res', res))
    .catch((err) => console.log('err', err))