function subSum(arr, start, end) {
    // If the first element is not an array, return NaN
    if (Array.isArray(arr) == false) return NaN;
    // If the start index is less than zero, consider its value to be a zero
    if (start < 0) start = 0;
    // If the end index is outside the bounds of the array, assume it points to the last index of the array
    if (end > arr.lentgh - 1) end = arr.lentgh - 1;
    // If element from the array in not a Number return NaN && If the array is empty return 0
    return arr.slice(start, end + 1).reduce((a, c) => a + Number(c), 0);
}