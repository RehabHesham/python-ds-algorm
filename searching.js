
// linear search => time Complexity O(n)

// can return index of item
// can return boolean
// can return array of indexs [duplicated data]

// find array max ot min value  => linear search
function linearSearch(arr, value){
    for(let i=0; i<arr.length; i++){
        if(value === arr[i]) return i;
    }
    return -1;
}

function findAllOccurance(arr, value){
    let arrayOfIndexs = [];
    for(let i=0; i< arr.length; i++){
        if(value === arr[i]) arrayOfIndexs.push(i);
    }
    return arrayOfIndexs;
}

let arr = [1,2,5,7,1,5];
let indexs = findAllOccurance(arr,5);   // [2,5]
console.log(indexs)


// Binary search  => sorted array
// divide array into half check where the value can be and repeat

// Example:
// arr [1,2,4,5,8]    => search for 8

// find middle = floor(length/2) = 2
// arr[mid] = 4  < value = 8

// continue searching in right side
//   start = 3     end = 4
// find middle = floor((start + end) /2) = 3
// arr[mid] = 5  ===  value 8   
// 
// continue searching in right side
//   start = 4     end = 4
// find middle = 4
// arr[mid] = 8  === value 8
//value found in index 4

// time complexity O(log n)

function binarySearch(arr, value){
    let start = 0;
    let end = arr.length -1;

    while(start <= end){
        let mid = Math.floor((start + end)/2);

        if(arr[mid] === value) return mid;
        else if(arr[mid] < value){
            start = mid +1;
        }else{
            end = mid -1;
        }
    }
    return -1;
}

