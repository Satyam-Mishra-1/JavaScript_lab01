const stringsArray = [
    "apple",
    "banana",
    "orange",
    "strawberry",
    "kiwi",
    "pineapple",
    "grape",
    "watermelon",
    "blueberry",
    "raspberry"
];

function findLongestString(arr) {
    let longestString = "";

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestString.length) {
            longestString = arr[i];
        }
    }

    return longestString;
}

const longestString = findLongestString(stringsArray);
console.log("Longest string:", longestString);
