let str = "worled hello name is my"

function revers(str){
    let strArr = str.split(" ")
    let newArr=[];
    for(let i=strArr.length-1;i>=0;i--){
        newArr.push(strArr[i])
    }
    return newArr.join(" ");
}
console.log(revers(str))

// Question:
// Write a JavaScript function that
// takes a sentence as input, reverses
// the order of the words, and returns
// the new sentence.