// Min to Front

// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

arr = [4,2,1,3,5]

function lowesttofront(arr){
    newarr = []
    temp = arr[0]
    ph = 0
    for(var i=1;i<arr.length;i++){
        if(temp>arr[i]){
            temp=arr[i]
            ph = i
        }
    }
    newarr[0] = temp
    for(var i=0;i<ph;i++){
        newarr[i+1] = arr[i]
    }
    for(var i=ph+1;i<arr.length;i++){
        newarr[i] = arr[i]
    }
    return newarr
}

console.log(lowesttofront(arr))