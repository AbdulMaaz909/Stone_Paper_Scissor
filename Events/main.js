// let bt1=document.querySelector("#bt1");

// bt1.onclick = () => {
//     console.log("button was clicked");
//     let a=25;
//     a++;
//     console.log(a);
// };

// bt1.addEventListener("click",(evt)=>{
//     console.log("Button one was clicked");
//     console.log(evt);
//     console.log(evt.type);
    
    
// })

// bt1.addEventListener("click",()=>{
//     console.log("Button one was clicked--handler 2");
// })

// const handler3= ()=>{
//     console.log("Button one was clicked--handler 2");
// };
// bt1.addEventListener("click",handler3);

// bt1.addEventListener("click",()=>{
//     console.log("Button one was clicked--handler 3");
// })

// bt1.addEventListener("click",()=>{
//     console.log("Button one was clicked--handler 4");
// })

// const handler4= ()=>{
//     console.log("this will remove after some time ");  
// }
// bt1.addEventListener("click",handler4);


// bt1.removeEventListener("click",handler3);

// let div=document.querySelector("div");

let btnmode=document.querySelector("#mode");
let body=document.querySelector("body")
let currmode="light"

btnmode.addEventListener("click",() =>{
    if (currmode === "light"){
        currmode="dark";
        body.classList.add("dark");
        body.classList.remove("light");

    }
    else{
        currmode="light";
        body.classList.add("light");
    }
    console.log(currmode);
    
    
});