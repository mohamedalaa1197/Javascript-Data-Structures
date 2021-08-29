function BubbleSort(array) {
    for (let i = array.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

function SelectionSort(array) {
    let min;
    for (let i = 0; i < array.length - 1; i++) {
        min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) min = j;
        }
        if (i !== min) {
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }

    }
    return array;
}

function insertionSort(array) {
    let temp;
    for (let i = 1; i < array.length; i++) {
        temp = array[i];
        for (var j = i - 1; array[j] > temp; j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = temp;
    }
    return array;
}

function merg(array01, array02) {
    let combinedArray = [];
    let i = 0;
    let j = 0;
    while (i < array01.length && j < array02.length) {
        if (array01[i] < array02[j]) {
            combinedArray.push(array01[i]);
            i++;
        } else {
            combinedArray.push(array02[j]);
            j++;
        }
    }

    while (i < array01.length) {
        combinedArray.push(array01[i]);
        i++;
    }

    while (j < array02.length) {
        combinedArray.push(array02[j]);
        j++;
    }

    return combinedArray;

}

function mergSort(array) {
    if (array.length === 1) return array;
    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);
    return merg(mergSort(left), mergSort(right));
}