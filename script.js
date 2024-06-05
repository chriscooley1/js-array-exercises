function loop1() {
    let fruits = ["apple", "banana", "cherry"];
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }
}

const loop2 = () => {
    const items = [];

    for (let i = 0; i < 3; i++) {
        const item = prompt("Enter item");
        items.push(item);
    }

    for (let i = 0; i < 3; i++){
        console.log(items[i]);
    }
};

const loop3 = () => {
    const itemString = prompt("Enter 3 times, separated by comma");
    let items = itemString.split(",", 3);
    for (let i = 0; i < items.length; i++) {
        console.log(items[i]);
    }
};

const map1 = () => {
    const numString = prompt("Enter comma separated numbers (e.g. 3,1,9):");
    const numArrayAsStrings = numString.split(",");

    // Version 1
        // const numArray = [];
        // for (let i = 0; i < numArrayAsStrings.length; i++) {
        //     const s = numArrayAsStrings[i];
        //     const num = Number(s);
        //     numArray.push(num);
        // }

    // Version 2
    // const numArray = numArrayAsStrings.map((s) => {
    //     return Number(s);
    // });

    // Version 3
    function convertToNumber(str) {
        return Number(str);
    }
    const numArray = numArrayAsStrings.map(convertToNumber);

    // Version 4
    // const numArray = numArrayAsStrings.map(Number);

    console.log(numArray);
};

const map2 = () => {
    const numbers = [1, 2, 3, 4, 5];

    const doubleNumber = (num) => {
    // const doubleNumber = function (num) {
    // function doubleNumber(num) {
        return num * 2;
    }
    
    const doubled = numbers.map(doubleNumber);
    // const doubled = numbers.map((num) => num * 2);

    console.log(doubled);
}

const map3 = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const changed = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            changed.push(numbers[i] * 2);
        } else {
            changed.push(numbers[i] * 3);
        }
    }

    console.log(changed);

    for (let i = 0; i < changed.length; i++) {
        console.log(`Original: ${numbers[i]}, changed: ${changed[i]}`);
    }
}

const testNumberFilter = () => {
    const nums = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8];
    const filteredNumbers = numberFilter(nums);
    console.log(filteredNumbers);
};

const numberFilter = (numbers) => {
    const result = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 0 && numbers[i] <=5) {
            result.push(numbers[i]);
        }
    }
    return result;
};

const filter1 = () => {
    const numberListStr = prompt("Enter a list of numbers");
    const odds = [];
    const numArray = numberListStr.split(",");
    for (let i = 0; i < numArray.length; i++) {
        const num = Number(numArray[i]);
        if (num % 2 !== 0) {
            odds.push(num);
        } 
    }

    for (let i = 0; i < odds.length; i++) {
        console.log(odds[i]);
    }
}

const filterModifyArray = () => {
    const randomArray = [0, 2, 76, 8, 2, 1, 5, 2, 6, 9, 9, 11, 0, 15, 2, 8, 9];
    filter2(randomArray);

    console.log(randomArray);
};

const filter2 = (numbersToFilter) => {
    let i = 0;
    while (i < numbersToFilter.length) {
        if (numbersToFilter[i] < 8 || numbersToFilter[i] > 15) {
            numbersToFilter.splice(i, 1);
        } else {
            i++;
        }
    }
};

const filter3 = () => {
    const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    const odds = numArray.filter((number) => number % 2 !== 0);

    console.log(odds);
};

function arraySum() {
    const myNumbers = [1, 2, 3, 4, 5];
    let total = 0;
    for (let i = 0; i < myNumbers.length; i++) {
        total += myNumbers[i];
    }
    console.log(total);
    return total;
};