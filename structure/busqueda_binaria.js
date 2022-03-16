const x = 72;

const arrayNumber = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];

function binarySearch(arr, l, r, x) {
    if (l > r) return -1;

    const m = Math.floor((l + r) / 2);

    // console.log(arr[m])

    if (arr[m] == x) return m;

    console.log(arr[m], x)

    if (arr[m] > x) return binarySearch(arr, l, m - 1, x);

    return binarySearch(arr, m + 1, r, x);
}

console.log(binarySearch(arrayNumber, 0, arrayNumber.length - 1, x));