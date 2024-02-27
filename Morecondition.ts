let car = 'subaru';
let course ='GIAIC';
let number =101;
let string = "I am motivated";
let percentage=95.5;
let arr=["chips","chocolate","biscuit","cake"];

console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'Subaru')
console.log("Is course == 'GIAIC'? I predict True. ")
console.log(course == 'GIAIC')
console.log("Is number == 101? I predict True. ")
console.log("number<=101 ",number<=101);
console.log("number>=101 ",number>=101);
console.log("number<101 ",number<101);
console.log("number>101 ",number>101);
console.log("Is string is in lowercase== 'I am motivated'? I predict True. ")
console.log(string.toLowerCase() == "I am motivated")
console.log("Is percentage == '95.5'? I predict True. ")
console.log(percentage==95.5);
console.log("The cake is present in Array?");
for(let i=0;i<arr.length;i++){
    if(arr[i]=="cake"){
    console.log("yes, cake is present!");
    break;
    }

}
console.log("is bunty is present in array?")
for(let i=0;i<arr.length;i++){
    if(arr[i]=="bunty"){
    console.log("yes, cake is present!");
    
    }
else{
    console.log("no, its not!");
    break;
}
}

console.log("And condition for string: ",string.toUpperCase()=="I am motivated"&&string.toLowerCase()=="I am motivated")
console.log("Or condition for course: ",course.toUpperCase()=="GIAIC"||course.toLowerCase()=="GIAIC")
console.log("Is car == 'honda civic'? I predict False.")
console.log(car=='honda civic')
console.log("Is course == 'PIAIC'? I predict False. ")
console.log(course == 'PIAIC')
console.log("Is number == 100? I predict False. ")
console.log(number==100);
console.log("Is string == 'I am not motivated'? I predict False ")
console.log(string == "I am not motivated")
console.log("Is percentage == '99.5'? I predict False. ")
console.log(percentage==99.5);