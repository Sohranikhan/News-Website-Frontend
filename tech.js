
let main = document.querySelector(".main");
 
let getdat = async()=>{ 

 let data = await fetch('http://localhost:8000/technology')
let response = await data.json()

resimgall(response)
}
const resimgall=(response)=>{
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
    main.appendChild(card);
});}
    

getdat()
