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


function getData(dataId){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("sucess");
    },2000);
});
}

async function getAllDAta(){
    console.log("Fetching data1...");    
    await getData(1);
    console.log("Fetching data2...");
    await getData(2);
    console.log("Fetching data3...");
    await getData(3);
}

//IIFE :Immediately Invoked Function Experation .. we can use IIFE only one time.
//IIFE is a funtion that is called immediately as soon as it is defined.

(async function (){
    console.log("Fetching data1...");    
    await getData(1);
    console.log("Fetching data2...");
    await getData(2);
    console.log("Fetching data3...");
    await getData(3);
})();