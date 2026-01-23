
console.clear();

// 1: alternate  element of an array

// {
//  Input: arr[] = [10, 20, 30, 40, 50]
// Output: 10 30 50
// Explanation: Print the first element (10), skip the second element (20), print the third element (30), skip the fourth element(40) and print the fifth element(50).

// Input: arr[] = [-5, 1, 4, 2, 12]
// Output: -5 4 12
// }

// let arr=[10,20,30,40,50]

// for(let i=0; i<arr.length;i++){
//     if(i%2==0){
//         console.log(arr[i])
//     }
// }

// let newArr=[]
// for(let i=0; i<arr.length;i+=2){
//    newArr.push(arr[i])
// }
// console.log(newArr.join(" "))


// 2: Linear Search Algorithm
// {
// Given an array, arr[] of n integers, and an integer element x, find whether element x is present in the array. Return the index of the first occurrence of x in the array, or -1 if it doesn't exist.

// Input: arr[] = [1, 2, 3, 4], x = 3
// Output: 2
// Explanation: There is one test case with array as [1, 2, 3 4] and element to be searched as 3. Since 3 is present at index 2, the output is 2.

// Input: arr[] = [10, 8, 30, 4, 5], x = 5
// Output: 4
// Explanation: For array [10, 8, 30, 4, 5], the element to be searched is 5 and it is at index 4. So, the output is 4.

// Input: arr[] = [10, 8, 30], x = 6
// Output: -1
// Explanation: The element to be searched is 6 and its not present, so we return -1.
// }

// let arr=[1,2,3,4,5]

// function LS(arr,element){
// for(let i=0; i<arr.length;i++){
//     if(arr[i]==element){
//         return i;
//     }
// }
// return -1;
// }

// console.log(LS([10, 8, 30, 4, 5],30))


// 3: largest element

// {
//     Input: arr[] = [10, 20, 4]
// Output: 20
// Explanation: Among 10, 20 and 4, 20 is the largest. 

// Input: arr[] = [20, 10, 20, 4, 100]
// Output: 100
// }

// function large(arr){
//     if(arr.length<0){
//         return -1;
//     }

//     let large=arr[0]
//     for(let i=0; i<arr.length;i++){
//         if(large<arr[i]){
//             large=arr[i]
//         }
//     }

//     return large;

// }


// console.log(large([20, 10, 20, 4, 100,100.1]))

// // or
// console.log(Math.max(...[20,10,30,30.1,4]))

// 4 : second largest

// {
//Given an array of positive integers arr[] of size n, the task is to find second largest distinct element in the array.

// Note: If the second largest element does not exist, return -1.

// Examples:

// Input: arr[] = [12, 35, 1, 10, 34, 1]
// Output: 34
// Explanation: The largest element of the array is 35 and the second largest element is 34.

// Input: arr[] = [10, 5, 10]
// Output: 5
// Explanation: The largest element of the array is 10 and the second largest element is 5.

// Input: arr[] = [10, 10, 10]
// Output: -1
// Explanation: The largest element of the array is 10 there is no second largest element.
// }

// function check(arr){
// let newArr=new Set([...arr])
// const check=[...newArr].sort((a,b)=>b-a)
// console.log(arr)
// if(check[1]){
//     return check[1]
// }else{
//     return -1;
// }
// }
// console.log(check([12, 35, 1, 10, 34, 1]))
// console.log(check([10, 5, 10]))
// console.log(check([10, 10, 10]))
// console.log(check([]))


// 5 : remove duplicate from sorted array

// {
// Input: arr[] = [2, 2, 2, 2, 2]
// Output: [2]
// Explanation: All the elements are 2, So only keep one instance of 2.

// Input: arr[] = [1, 2, 2, 3, 4, 4, 4, 5, 5]
// Output: [1, 2, 3, 4, 5]

// Input: arr[] = [1, 2, 3]
// Output: [1, 2, 3]
// Explanation : No change as all elements are distinct.
// }

// let arr=[2, 2, 2, 2, 2];
// let arr=[1, 2, 2, 3, 4, 4, 4, 5, 5];
// let arr=[1,2,3];
// let arrSet=[...new Set([...arr])]
// console.log(arrSet)

// need better approach for this and above code

// let newArr=[]

// arr.forEach((elem)=>{
//     if(!newArr.includes(elem)){
//     newArr.push(elem)
//     } 
// })
// console.log(newArr)


// 6: Generating All Subarrays





