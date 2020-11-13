const sum = (total, item) => {
    total + item;
}

const calculator = (() => {
    
    const add = (...args) => {
        let result = args.reduce(function(total, item) {
            return total + item;
        },0);
        return result;
    }

    const subtract = (a, b) => {
        let result = a - b;
        return result;
    }

    const multiply= (...args) => {
        let result = args.reduce(function(total, item) {
            return total * item;
        });
        return result;
    }

    const divide = (a, b) => {
        if (b==0) {return 'Error: No division by zero'}
        let result = a/b
        return result
    }



    return {add, subtract, multiply, divide};

})();


module.exports = calculator;
