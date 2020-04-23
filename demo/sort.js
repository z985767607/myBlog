let count = 0

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

//冒泡排序
function bubble_sort(arr) {

    let length = arr.length

    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            count += 1
            if (arr[i] > arr[j]) {
                swap(arr, i, j)
            }
        }
    }
    console.log(arr)
}

//选择排序
function select_sort(arr) {
    let length = arr.length;
    for (let i = 0; i < length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        swap(arr, i, minIndex);
    }
    console.log(arr)
}

//快排
function quick_sort(arr, l, h) {

    if (l < 0 || h > arr.length || l >= h) {
        return
    }
    let temp = arr[l];
    let right = h, left = l + 1;

    while (true) {
        while (left < right) {
            if (arr[right] > temp) {
                right--
            } else {
                break
            }
        }

        while (left < right) {
            if (arr[left] <= temp) {
                left++
            } else {
                break
            }
        }

        if (left < right) {
            swap(arr, left, right)
        } else {
            break
        }
    }
    if (arr[l] > arr[left]) {
        swap(arr, l, left)
    }
    quick_sort(arr, l, left - 1)
    quick_sort(arr, left + 1, h)
}

//归并排序

function mergeSort(arr) {
    let len = arr.length;
    if (len <= 1) {
        return arr;
    }
    let middle = Math.floor(len / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    return mergeFn(mergeSort(left), mergeSort(right))

}

function mergeFn(left, right) {
    let result = [];
    while (left.length && right.length) {

        if (left[0] <= right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }

    while (left.length) {
        result.push(left.shift())
    }
    while (right.length) {
        result.push(right.shift())
    }

    return result;
}



function main() {
    let arr = [4, 5, 7, 6, 3, 9, 2, 8, 1]
    // bubble_sort(arr)
    // select_sort(arr)
    // quick_sort(arr, 0, arr.length - 1)
}
main()