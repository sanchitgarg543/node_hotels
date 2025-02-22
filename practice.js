// console.log("server file is runing");

// one way of making function
// function add(a,b){
//     return a+b;

// }

//another way of making it
// var add = function(a,b){
//     return a+b;
// }
// var result = add(288,7);
// console.log(result);

//another way of making it array function

// var add = (a,b) => {return a+b};

// // var add = (a,b) => a+b;



// (function(){                                        // start with(  )
//     console.log("prince is ");
// })();





// function callback() {
//     console.log("prince is calling a callback function");
//   }
  
//   const add = function (a, b, callback) {
//     callback();
//       return a + b; 
      
       
//   };
  
//   var result = add(3, 4, callback);
//   console.log("result is " + result);
  
//************************************************************************************** */
// function callback() {
//   console.log("prince is calling a callback functiin");
// }



// const add = function (a, b, callback) {
//     var result = a+b;
//     console.log("result is " + result);

//     callback();
// };
// add(3,4,callback);

//********************************************************************************** */

// const add = function(a,b,sanchit){
//     var result = a+b;
//     console.log("result is :"+ result);
//     sanchit();
// }

// //add(2,3,function(){                 // if only this output will be result is :5 
//     add(2,43,function  (){
//         console.log("complete")
        
    
// }); 

// add(2,3,()=>console.log("add complete"))
// defining
// var fs = require('fs');
// var os = require('os');
// var _ = require('lodash');

// var user = os.userInfo();
// console.log(user);
// console.log(user.username);
// fs.appendFile('greeting.txt',"Hi"+user.username+"!"+"\n",()=>{
//     console.log("File is created");
// });
// console.log(fs)


// const notdf = require("./notes.js")

// console.log("server file is avaialble")

// var ages = notdf.age;
// var results = notdf.addNumber(ages+12,3)
// console.log(ages);
// console.log(results);




// var data = ["person","person",1,2,1,2,"name","age","2"];
// var filter = _.uniq(data);
// console.log(filter);

// console.log(_.isString("prince"));
// console.log(_.isString(false));


// var resul = "prinyyce";
// var fil = _.isString(resul);
// console.log(fil);

//const jsonstring = '{"name":"john","age":30,"city":"New York"}';   //"" outside and inside changing string format so use ' '

// const jsonstring = '{"name":"john","age":30,"city":"New York"}';
// const jsonobject = JSON.parse(jsonstring);
// console.log(jsonobject);
// console.log(jsonstring);

// console.log(jsonobject.age);


// const objectTOstring = {
//     name :'ashush',
//     age:30
// };
// const json = JSON.stringify(objectTOstring);
// console.log(json);
// console.log(typeof json);





