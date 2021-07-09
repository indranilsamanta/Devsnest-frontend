console.log("Question - 1");
function is_array(inp){
    if(Array.isArray(inp))
        return true
    return false
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));




console.log("Question - 2");
function array_Clone(arr){
    return [...arr]
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));



console.log("Question - 3");
function first(arr, num = 1){
    return arr.slice(0, num)
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));



console.log("Question - 4");
myColor = ["Red", "Green", "White", "Black"];

console.log(myColor.join(","))
console.log(myColor.join(","))
console.log(myColor.join("+"))

console.log("Question - 5");
 array=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
        let x=1;
        let y=0;
        let item;
        for(let i=0; i<array.length; i++)
        {
            for(let j=i; j<array.length; j++)
            {
                if (array[i]===array[j])
                y++;
                if(x<y)
                {
                    x=y;
                    item = array[i];

                }
            
        }
        y=0;
    }
    console.log(item +"("+ x +" times"+")");