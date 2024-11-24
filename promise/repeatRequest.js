// Принимает три параметра:
// callback — функция, которая возвращает промис (например, имитация запроса к серверу).
// interval — интервал времени в миллисекундах, через который вызывается callback.
// duration — общее время работы в миллисекундах.
// Функция должна каждые interval миллисекунд вызывать callback и логировать результат выполнения (резолв или ошибку).
// Через duration миллисекунд вызовы callback должны прекратиться, и функция должна вернуть промис, который:
// Резолвится массивом всех результатов вызовов callback.
// Реджектится, если хотя бы один из вызовов завершился с ошибкой.

function mockRequest() {
    return new Promise((resolve, reject) => {
        const isSuccess = Math.random() > 0.1// 70% успеха
        setTimeout(() => {
            if (isSuccess) resolve("Success!");
            else reject(new Error("Request failed."));
        }, 500); // Имитация задержки запроса
    });
}

function repeatRequest(callback, interval, duration) {
    const requests = [];
    return new Promise((resolve, reject) => {
        const repeatInterval = setInterval(() => {
            const request = callback().catch((error) => {
                clearInterval(repeatInterval);
                clearTimeout(timeId);
                reject(error);
                
            });
            requests.push(request);
        }, interval);

        const timeId = setTimeout(() => {
            resolve(Promise.all(requests));
            clearInterval(repeatInterval);
            clearTimeout(timeId);
        }, duration);
    })
}

repeatRequest(mockRequest, 1000, 5000)
    .then((results) => console.log("Все результаты:", results))
    .catch((error) => console.error("Ошибка:", error.message));