//Synchronise Function :It is noting but programs run one by one. and block the flow of execution
//Asynchronise Function :It does not wait for anyone.it is not like Synchronise function matlab ye ksii ka wait nahi karega jisse important instruction rah jayenge let i give you wxample 
//Asynchronise allow to run next instruction and when it'' time complete it will execute and print output after it's time line and doesn't block the flow 
// console.log('one');
// console.log('two');

// setTimeout(()=>{
//     console.log("hello");  // remember it will run later because i have no time now 
// },2000);

// console.log('three');
// console.log('four');


//CallBack Funstions :It is a function passed as an argument to another funtion.
// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,sumcallback){
//     sumcallback(a,b);
// }

// calculator(1,2,(a,b)=>{
//     console.log(a+b);    
// });

// const hello = ()=>{
//     console.log("hello");
// }

// setTimeout(hello,3000);


// const calculator = ()=>{
//     console.log("hey how are you");
    
// }
// // console.log(calculator);// this is wrong syntax 
// calculator();


//CallBack Hell :Nested callbacks stack below one another forming a pyramid sturcture.

// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },1000);
// }
// // this is nested callback and callbackhell.
// getData(1,()=>{
//     getData(2, ()=>{
//         getData(3, () =>{
//             getData(4, ()=>{
//                 getData(5);
//             });
//         });
//     });
// });

// Promises :It is for "eventual" completion of task.It is an object in JS.Promises are used for Handling call back hell 
//Means problem should be resolved(succesfull run ) and reject 
//there are 3 stages in promises Fullfilled,reject,pending.


// let promise=new Promise((resolve,reject) =>{
//     console.log("I am a promise");
//     // resolve("succefull.")
//     reject("some error occured");
// })

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("sucess");
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     })
// }

// function getData(dataId,getNextData){
    // return new Promise((resolve,reject) =>{
    //     setTimeout(()=>{
    //         // console.log("data",dataId);
    //         // resolve("sucess");
    //         reject("error")
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     })
// }

// const getPromise = () =>{
//     return new Promise((resolve,reject) =>{
//         console.log("I am a promise");
//         resolve("succefull.")
//         // reject("network Error.")
//     });
// };

// let promise =getPromise();
// promise.then((res)=>{
//     console.log("promise fullfiled",res);
// });

// promise.catch((err)=>{
//     console.log("rejected",err);
// });


// function asynFunc1() {
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("sucess");
//             // reject("error")
//         },4000);
//     });
// }
// function asynFunc2() {
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("sucess");
//             // reject("error")
//         },5000);
//     });
// }

// console.log("fetching data1...");
// asynFunc1().then((res)=>{
//     console.log("Fetching data2");
//     asynFunc2().then((res)=>{}); 
// });
// console.log("fetching data2...");
// let p2=asynFunc2();
// p1.then((res)=>{
//     console.log(res);    
// });


// function getData(dataId,getNextData){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("sucess");
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     })
// }

// getData(1).then((res)=>{
//     return getData(2);
// })
// .then((res)=>{
//     return getData(3);
// })
// .then((res)=>{
//     console.log(res);    
// });


// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Wheater data");
//             resolve(200);            
//         },2000);
//     });
// }


//asuync await
// async function getweatherdata(){
//     await api();
//     await api();
// }


// function getData(dataId){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("sucess");
//     },2000);
// });
// }

// async function getAllDAta(){
//     console.log("Fetching data1...");    
//     await getData(1);
//     console.log("Fetching data2...");
//     await getData(2);
//     console.log("Fetching data3...");
//     await getData(3);
// }

// //IIFE :Immediately Invoked Function Experation .. we can use IIFE only one time.
// //IIFE is a funtion that is called immediately as soon as it is defined.

// (async function (){
//     console.log("Fetching data1...");    
//     await getData(1);
//     console.log("Fetching data2...");
//     await getData(2);
//     console.log("Fetching data3...");
//     await getData(3);
// })();



//Q1. write a function greatuser that take a name and a callback the call back should primt a message.

// function greetUser(name, callback){
//     console.log("hey how are you");
    
// }

// greetUser("Maaz",function(message){
//     console.log(message);
    
// });


//Q2.Create a function sum (a,b,callback) that calculates the sum of 2 numbers and passes the result to the callbacks.
// const sum = (a,b,callback) =>{
//     const  result= a+b;
//     callback(result);
    
// };

// sum(5,5, (result)=>{
//     console.log("the sum of a and b is " , result );
    
// });

//Q3.Simulate 3 tasks that happen one after the other using setTimeout and nested callbacks:
//"Fetching user..."
//"Getting user data..."
//"Displaying data..."

// function  dispaly(fetchdata){
//     setTimeout (()=>{
//         console.log("fetching data...");
//         fetchdata();
//     },2000)
// }

// function  dis_data(getdata){
//     setTimeout (()=>{
//         console.log("getting user data...");
//         getdata();
//     },2000)
// }

// function  data_dispaly(displaydata){
//     setTimeout (()=>{
//         console.log("displaying  data...");
//         displaydata();
//     },2000)
// }

// dispaly(()=>{
//     dis_data(()=>{
//         data_dispaly();
//     });
// });

//Q4. Convert your answer to Q3 into Promises instead of callbacks.
// function fetchdata(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             console.log("fetchingdata..");
//             resolve();
            
//         }, 2000);
//     });
// }
// function data(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             console.log("displayingdata..");
//             resolve();   
//         }, 2000);
//     });
// }

// function getdata(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             console.log("gettingdata..");
//             resolve();     
//         }, 2000);
//     });
// }
// fetchdata()
// .then(data)
// .then(getdata);

//Q5. Write a function fetchData that simulates a delay of 2 seconds using setTimeout and returns "Data loaded".
// async function fetchData(){
//     await new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("this wait for two seconds");
//             resolve();
//         },2000)
//     });
//     return "loaded data"
// }

// fetchData().then((result)=>{
//     console.log(result);
    
// });

//Write an async function delayedGreeting(name) that: 1.Waits for 1 second, 2.Then logs: "Hello, [name]!",
//3.Then returns: "Greeting complete" 4.Call it with your name and print the returned value.

// async function delayedGreeting(name) {
//     await new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("Hello",name,"!");
//             resolve();
//         },1000)
//     });    
//     return ("greetin complete");
// }
// delayedGreeting("maaz").then((name)=>{
//     console.log(name);
    
// })

//Write an async function loadUserProfile(userId) that simulates the following steps: 1.Waits 1 second and logs: "Fetching user with ID: [userId]"

//Waits another 1 second and logs: "User data received"  2.Finally, returns "User profile loaded" 3.Then, call the function and log the returned value.
async function loadUserProfile(userId){
    await new Promise((resolve)=>{
        setTimeout(() => {
            console.log("Fetching user with ID:",userId);
            resolve();            
        }, 1000);
    });

    await new Promise((resolve)=>{
        setTimeout(() => {
            console.log("User data received");
            resolve();
        }, 1000);
    });
    return "User profile loaded"
}
loadUserProfile(1).then((messeage)=>{
    console.log(messeage);    
});