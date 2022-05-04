//map filter , reduce
//they are known as one linear functions
//map,filter,reduce never modifies the original array...
//map,filter,reduce returns/creates anew array.

let numbers = [2,3,4,5,6,7];
numbers.map((item)=>{console.log(item)})

let res=numbers.filter((item)=>{
    return item > 3
})
console.log(res);

let res1 = numbers.reduce((acc,cur)=>  //accumulator current
    acc = acc*cur,1)
    console.log(res1)

    let res2 = numbers.reduce((acc,cur)=>  //accumulator current
    acc = acc-cur,1)
    console.log(res2)

    let res3 = numbers.reduce((acc,cur)=>  //accumulator current
    acc = acc/cur,1)
    console.log(res3)

//CharAt,
let str = "smily rao";
console.log(str.length);
console.log(str.charAt(2));
console.log(str.endsWith("y"));

//includes
let sentence="Hello World";
console.log(sentence.includes("World"));

//indexOf - Always gives the 1st value
//lastIndexOf
console.log(sentence.lastIndexOf("o"));
console.log(sentence.indexOf("o"));

//length
console.log(str.length)

//replace

//not going to manipulate the original string
console.log(str.replace("smily","sun"));

//search-used to know index for a word..
console.log(str.search("rao"));

//substr
console.log(sentence.substr(0,4)); //first value is the index position
//and second value is the no of characters from the index position mentioned in the first value

console.log(sentence.substr(0,7));//first index value is inclusive,Last index value is exclusive

//for substring always the lower value is the starting index and higher value is the
//ending index, irrespective of the position of the value mentioned
console.log(sentence.substr(7,0));

let email = "ss@gmail.com";
let values = email.split("@");
console.log(values);

