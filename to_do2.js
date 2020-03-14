// 1. Reverse
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working ‘in-place’ means that you cannot use a second array – move values within the array that you are given.

// arr = [1,2,3,4]

// function reverse(arr){
//     temp = 0
//     for (var i=0;i<arr.length/2;i++){
//         temp = arr[i]
//         arr[i] = arr[arr.length-i-1]
//         arr[arr.length-i-1] = temp
//     }
//     console.log(arr)
// }

// reverse(arr)

// 2. Rotate

// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr’s values to the right by that amount. ‘Wrap-around’ any values that shift off array’s end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don’t use built-in functions.

// arr = [1,2,3]

// function rotateArr(arr, shiftBy){
//     newarr = []
//     if (shiftBy<0){
//         shiftBy = Math.abs(shiftBy);
//         for (var i=shiftBy; i<arr.length; i++){
//             newarr.push(arr[i])
//         }
//         for (var x = arr.length - i;x<shiftBy;x++){
//             newarr.push(arr[x])
//         }
//     }
//     else 
//     {
//         for(var x=arr.length-shiftBy;x<arr.length; x++){
//             newarr.push(arr[x])
//         }
//         for(var i=0;i<arr.length-shiftBy; i++){
//             newarr.push(arr[i])
//         }
//     }
//    console.log(newarr)
// }

// rotateArr(arr, 2)

// 3. Filter Range

// Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. Given arr and values min and max, retain only the array values between min and max. 

// arr = [1,2,3,4,5]

// function range(arr, min, max){
//     newarr = []
//     for(var i=min;i<max;i++){
//         newarr.push(arr[i])
//     }
//     console.log(newarr)
// }

// range(arr,1,3)

// 4. Concat

// Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array’s elements, followed by the second array’s elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

// arr1 = ['a','b']
// arr2 = [1,2]

// function arrConcat(arr1, arr2){
//     newarr = []
//     for(var i=0;i<arr1.length; i++){
//         newarr.push(arr1[i])
//     }
//     for(var i=0;i<arr2.length; i++){
//         newarr.push(arr2[i])
//     }
//     console.log(newarr)
// }

// arrConcat(arr1, arr2)