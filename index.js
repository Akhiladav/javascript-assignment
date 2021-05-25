// 1 write a function to find maximum and minimum number from an arrey

let myNumbers =[2,4,3,6,8,19];
myNumbers.sort(function(a,b){
    return a-b;
});
console.log('min:'+myNumbers[0]);
console.log('max:'+myNumbers[myNumbers.length-1]);

// 2 write a program to multiply each element of given arrey by 2
  var a = [1, 2, 3,4];
var b = a.map(x => x * 2); 
console.log(b);

// 3 write a program to add and remove elements from an arrey
function addAnElement(arr){
    arr.push(1);
return arr;
}
function removeAnElement(arr){
    arr.pop();
    arr.shift();
    return arr;
}
let arr=[5,4,3,2];
let arr1=addAnElement(arr);
console.log(arr1);
let arr2= removeAnElement(arr);
console.log(arr2);

// 4 write a program to print elements of an arrey
let numbers =[1,2,3,4,5,6];
for(let elements of myNumbers){
    console.log(elements);
}

// 5 write a program to find the total sum of elements in an arrey
function sumArrey(arr4){
    var sum=0;
    for(var i=0; i<arr4.length; i++){
        sum +=arr4[i];

    }
    return sum;
}
var arr4=[2,3,-1,5,7,9,10,15,95];
var sum =sumArrey(arr4);
console.log(sum);


// 6 write a javascript program to join all elements of the arrey into a string
let myColor=["red","green","white","black"];
myColor1=myColor.toString();
console.log(myColor1);

// 7 write a javascript program to sort the items of an arrey.
let number1=[3,8,7,6,5,-3,-4,2,1,3984723,200,400,37864];
number1.sort(function(c,d){return c-d;
});
console.log(number1);

//8 write a function to find details of a perticular book by passing its library id
var library=[
    {author:'bil gates',title:'the road ahead',libraryID:'1254'},
    {author:'steve jobs',title:'walter isaacson',libraryID:'4264'},
    {author:'suzane collins',title:'mockingjay',libraryID:'3245'},
];
for(el of library){
    if (el.libraryID==1254){
        console.log(el);
    }
}

//9 write a function to retrieve falsy and truthy values from all elements in an arrey
     sample= [ -22,null,undefined,false, 0,15, NaN, ""];
     let arrey5=[];
     let arrey6=[];
     for(let el of sample){
         if (el  !== undefined && el !== null && el !== false && el !== 0 && el !== "" && isNaN(el)!=NaN){
             console.log( arrey5=["truthy:"+el]);
         }
         else{
             console.log (arrey6=["falsy;"+el]);
         }
     }
   
  

//10 write a javascript function to merge two arrays and remove all duplicates
var arrey1=[1,2,3,4];
var arrey2=[3,4,5,6];
var ar=mergeArreys(arrey1,arrey2);
console.log(ar);
function mergeArreys(ar1,ar2){
    var arrey3=[];
    for(let el of ar1){
        arrey3.push(el);
    }
    for (let el of ar2 ){
        if(! arrey1.includes(el))
       { arrey3.push(el);
       }
    }
    return arrey3;
}