let incre=document.querySelector(".btn1");
let decre=document.querySelector(".btn2");
let reset=document.querySelector(".btn3");
let start=document.querySelector(".btn4");
let counter=document.querySelector(".number");

let id=0;
start.addEventListener("click",()=>{
    let count=Number(counter.textContent);
    id=setInterval(() => {
       
        if(count>0){
            count--;
            counter.textContent=count;
        }
        
        
        if(count<=0){
            clearInterval(id);
        }

    }, 1000);

})

let increase=1;
incre.addEventListener("click",()=>{
  counter.textContent=Number(counter.textContent)+increase;

})

let decrease=1;
decre.addEventListener("click",()=>{
  counter.textContent=Number(counter.textContent)-decrease;

})

reset.addEventListener("click",()=>{
    clearInterval(id);
    counter.textContent=0;
    
})
