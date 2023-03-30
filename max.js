function findMax(numbers) {
    if (numbers.length === 0) {
        throw new Error('Array is empty!');
    }
    var max = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
var numbers = [1, 2, 3, 4, 5];
var max = findMax(numbers);
console.log(max); // Output: 5
