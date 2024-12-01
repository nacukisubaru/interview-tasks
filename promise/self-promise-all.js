//реализовать свой аналог promise all
class MyPromiseAll {
    promises = [];
    constructor(array) {
        if (Array.isArray(array)) {
            this.promises = array.map(async item => {
                await new Promise((resolve) => {
                    resolve(item);
                });
            });
        }
    }

    then = () => {
        return this.promises;        
    }
}