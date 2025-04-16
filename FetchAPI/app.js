console.log("hey how are you ");
const URL = "https://catfact.ninja/facts";
const factpara=document.querySelector("#fact");
const button=document.querySelector("#btn");

//Async And await
// const getFacts= async ()=>{
//     console.log("geting data ....");
//     let response =await fetch(URL);
//     console.log(response); 
//     let data=await response.json();
//     // factpara.innerText=data[0].text;
//     factpara.innerText = data.data[0].fact;

// };

//Using Promise.
function getFacts(){
    fetch(URL)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            console.log(data);
            factpara.innerText = data.data[2].fact;
        });
}
btn.addEventListener("click",getFacts)

