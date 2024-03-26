function getUniqueNumbers(arr) {
    return arr.reduce((unique, num) => {
        if (!unique.includes(num)) {
            unique.push(num);
        }
        return unique;
    }, []);
}

const numbersArray = [1, 2, 3, 4, 5, 1, 2, 3, 6, 7, 8, 9, 5];

const uniqueNumbers = getUniqueNumbers(numbersArray);

console.log("Unique numbers in the array:", uniqueNumbers);
