let arr = [10, 20, 30];

function isCheckSortedArr(arr) {
    let sortedForward = true;
    let sortedBackward = true;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
            sortedBackward = false;
        } else if (arr[i] > arr[i + 1]) {
            sortedForward = false;
        }
    }

    if (sortedForward || sortedBackward) {
        return true
    } else {
        return false
    }
}

// console.log(isCheckSortedArr(arr));