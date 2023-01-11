
let main = document.querySelector(".main");
let english = document.querySelector(".english");
let getdat = async()=>{ 

 let data = await fetch('http://localhost:8000')
let response = await data.json()

resimgall(response)
}
const resimgall=(response)=>{
    response.forEach(element => {
        
    let card = document.createElement("div");
    card.classList.add('card')
    card.innerHTML=`
    <img src="${element.src}" alt="">
    <div class="flex">
    <h2>${element.parag}</h2>
    <p class="para">${element.head}</p>
</div>
   `
    main.appendChild(card);
});}
  


let getdat2 = async()=>{ 

    let data = await fetch('http://localhost:8000/news')
   let response = await data.json()
   
   resimgall2(response)
   }
   const resimgall2=(response)=>{
       response.forEach(element => {
           
       let card = document.createElement("div");
       card.classList.add('card')
       card.innerHTML=`
       <img src="${element.imgurl}" alt="">
       <div class="flex">
       <h2>${element.hed}</h2>
       <p class="para">${element.p}</p>
       <a href="${element.link}">Read More</a>
   
   </div>
      `
       english.appendChild(card);
   });}
       
   
   getdat2()

getdat()
