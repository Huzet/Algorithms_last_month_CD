//1.  Push Front
//    Given an array and an additional value, insert this value  at the beginning of the array. Do this without using any built-in array methods.
arr = [1,2,3]

function pushfront(a, arr){
    newarr = [a];
    for( i=0; i<arr.length; i++){
        newarr.push(arr[i])
    }
    console.log(newarr)
}

pushfront(0, arr)

//2.  Pop Front
//     Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

arr = [1,2,3]

function poparray(arr){
    return arr[0]
}

console.log(poparray(arr))


//3.  Insert At

// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

arr = [1,2,3]

function insertAt(arr,index,val){
    newarr = []
    for(i=0; i<=index; i++){
        if(i==index){
            newarr.push(val)
        }
        else newarr.push(arr[i])
    }
    for(i=index; i<arr.length; i++){
        newarr.push(arr[i])
    }
    console.log(newarr)
}

insertAt(arr, 4, 9)

//4. Remove At

// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).

arr = [1,2,3,4]

function removeAt(arr,index){
    newarr = []
    for(i=0; i<arr.length; i++){
        if(i != index){
            newarr.push(arr[i])
        }
    }
    console.log(newarr)
}

// removeAt(arr, 5)

// 5. Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.

arr = [1,2,3,4,5]

function swapPosition(arr){
    if(arr.length %2 ==0 ){
        for(x=0; x<arr.length; x=x+2){
            ph = arr[x]
            arr[x] = arr[x+1]
            arr[x+1] = ph
        }
    }
    else{
        for(x=0; x<arr.length-1; x=x+2){
            ph = arr[x]
            arr[x] = arr[x+1]
            arr[x+1] = ph
        }
    return arr
    }
}

console.log(swapPosition(arr))

// Count letters inside of a word]

function countletters(word){
    letters = {}
    for(var c of word){
        if(letters[c]){
            letters[c]++
        }
        else {
            letters[c] = 1;
        }
    }
    console.log(letters)
}

countletters('apple')

// Remove Duplicates

// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.

function removeDupes(arr){
    itemsfound = {}
    for(var i=0;i<arr.length;i++){
        if(itemsfound[arr[i]]){
            arr.splice(i,1)
            i--
        }
        else{
            itemsfound[arr[i]] = 1;
        }
    }
    console.log(itemsfound)
    return arr
}

var array = [1,1,1,2,2,2,3,4,5,6,7,7,7]
console.log(removeDupes(array)) 