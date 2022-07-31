let btnsplus = document.querySelectorAll(".plus");
let btnsminus = document.querySelectorAll(".minus");
let qtes = document.querySelectorAll(".qte");
let  heart=document.querySelectorAll(".heart");
let remove = document.querySelectorAll(".remove");
let total_price=document.querySelector("#totall")
let price=document.querySelectorAll(".prix")
let some=0;


for ( let i = 0; i< btnsplus.length; i++) {
    btnsplus[i].addEventListener("click", function(){
        qtes[i].innerHTML++;
        calcul();
     
    }
) 

  remove[i].addEventListener("click",function(event ) { 
    event.target.parentElement.parentElement.parentElement.remove()
    qtes[i].innerHTML=0
   })

   heart[i].addEventListener("click",function(){
    if (heart[i].style.color!="red")
    {
        heart[i].style.color="red"
    }
    else{
        heart[i].style.color="black"
    }
   }
   )
  
}
 for (let i = 0;i< btnsplus.length;i++  ){
    btnsminus[i].addEventListener("click", function(){
        if(qtes[i].innerHTML>0){
            qtes[i].innerHTML--;
        calcul()
        }
        
    })
 }

    function calcul(){
        var some = 0;
        for (let i = 0;i<price.length;i++  ){
            some=some+ Number(qtes[i].innerHTML)*Number(price[i].innerHTML)
            console.log(some)
        }
 total_price.innerHTML=some
 console.log(total_price,some)
}
