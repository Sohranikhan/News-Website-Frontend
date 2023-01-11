const PORT = process.env.PORT||8000
const express = require('express')
const axios = require('axios')
const cheerio= require('cheerio')
const { request, response } = require('express')
const cors = require('cors')


const app=express();
app.use(cors())


const nwe = []

const news =[]
const health1=[]
const earth1 =[]
const animals1 =[]
const space1=[]
const strange1 =[]
const technology1=[]


const technews =[{
    name : "the news",
    address:"https://www.thenews.com.pk/latest-stories"
}
]

const newspapers=[{
    name:"venturebeat",
    address:"https://www.livescience.com/news",
    base:""
},
{
    name:"venturebeat",
    address:"https://www.livescience.com/news/2",
    base:""
},
{
    name:"venturebeat",
    address:"https://www.livescience.com/news/3",
    base:""
},
{
    name:"venturebeat",
    address:"https://www.livescience.com/news/4",
    base:""
}
]
const health =[{
    name :"health",
    address:"https://www.livescience.com/health"
},
{
    name :"health",
    address:"https://www.livescience.com/health/2"
},
{
    name :"health",
    address:"https://www.livescience.com/health/3"
},
{
    name :"health",
    address:"https://www.livescience.com/health/4"
}]

const earth =[{
    name :"earth",
    address:"https://www.livescience.com/planet-earth"
},
{
    name :"earth",
    address:"https://www.livescience.com/planet-earth/2"
},
{
    name :"earth",
    address:"https://www.livescience.com/planet-earth/3"
},
{
    name :"earth",
    address:"https://www.livescience.com/planet-earth/4"
}]

const animals =[{
    name :"animals",
    address:"https://www.livescience.com/animals"
},
{
    name :"animals",
    address:"https://www.livescience.com/animals/2"
},
{
    name :"animals",
    address:"https://www.livescience.com/animals/3"
},
{
    name :"animals",
    address:"https://www.livescience.com/animals/4"
}]

const space =[{
    name :"space",
    address:"https://www.livescience.com/space"
},
{
    name :"space",
    address:"https://www.livescience.com/space/2"
},
{
    name :"space",
    address:"https://www.livescience.com/space/3"
},
{
    name :"space",
    address:"https://www.livescience.com/space/4"
}]

const strange =[{
    name :"strange",
    address:"https://www.livescience.com/strange-news"
},
{
    name :"strange",
    address:"https://www.livescience.com/strange-news/2"
},
{
    name :"strange",
    address:"https://www.livescience.com/strange-news/3"
},
{
    name :"strange",
    address:"https://www.livescience.com/strange-news/4"
}]

const technology =[{
    name :"technology",
    address:"https://www.livescience.com/technology"
},
{
    name :"technology",
    address:"https://www.livescience.com/technology/2"
},
{
    name :"technology",
    address:"https://www.livescience.com/technology/3"
},
{
    name :"technology",
    address:"https://www.livescience.com/technology/4"
}]


technews.forEach(news=>{
    axios.get(news.address)

    .then(response=>{
        const html=response.data
        const $=cheerio.load(html)
        $('.writter-list-item-story',html).each(function(){
            
            const src=$(this).find('img').attr('src')
            const parag= $(this).find('p').text();
            const head= $(this).find('.latest-right').text();
           
           


            nwe.push({
                src,
                parag,
                head               
            })
            
            
        })
       
    })
})

newspapers.forEach(newspaper=>{
    axios.get(newspaper.address)

    .then(response=>{
        const html=response.data
        const $=cheerio.load(html)
        $('.listingResult',html).each(function(){
           
            const imgurl = $(this).find('source').attr('data-pin-media')
            const hed=$(this).find('h3').text()
            const p =$(this).find('p').text()
            const link = $(this).find('a').attr('href')
            news.push({
                imgurl,  
                hed,
                p,
                link
           })
           
        })
    })
})



health.forEach(newspaper=>{
    axios.get(newspaper.address)

    .then(response=>{
        const html=response.data
        const $=cheerio.load(html)
        $('.listingResult',html).each(function(){
           
            const imgurl = $(this).find('source').attr('data-pin-media')
            const hed=$(this).find('h3').text()
            const p =$(this).find('p').text()
            const link = $(this).find('a').attr('href')
            health1.push({
                imgurl,  
                hed,
                p,
                link
           })
           
        })
    })
})

earth.forEach(newspaper=>{
    axios.get(newspaper.address)

    .then(response=>{
        const html=response.data
        const $=cheerio.load(html)
        $('.listingResult',html).each(function(){
           
            const imgurl = $(this).find('source').attr('data-pin-media')
            const hed=$(this).find('h3').text()
            const p =$(this).find('p').text()
            const link = $(this).find('a').attr('href')
            earth1.push({
                imgurl,  
                hed,
                p,
                link
           })
           
        })
    })
})

animals.forEach(newspaper=>{
    axios.get(newspaper.address)

    .then(response=>{
        const html=response.data
        const $=cheerio.load(html)
        $('.listingResult',html).each(function(){
           
            const imgurl = $(this).find('source').attr('data-pin-media')
            const hed=$(this).find('h3').text()
            const p =$(this).find('p').text()
            const link = $(this).find('a').attr('href')
            animals1.push({
                imgurl,  
                hed,
                p,
                link
           })
          
        })
    })
})

space.forEach(newspaper=>{
    axios.get(newspaper.address)

    .then(response=>{
        const html=response.data
        const $=cheerio.load(html)
        $('.listingResult',html).each(function(){
           
            const imgurl = $(this).find('source').attr('data-pin-media')
            const hed=$(this).find('h3').text()
            const p =$(this).find('p').text()
            const link = $(this).find('a').attr('href')
            space1.push({
                imgurl,  
                hed,
                p,
                link
           })
          
        })
    })
})

strange.forEach(newspaper=>{
    axios.get(newspaper.address)

    .then(response=>{
        const html=response.data
        const $=cheerio.load(html)
        $('.listingResult',html).each(function(){
           
            const imgurl = $(this).find('source').attr('data-pin-media')
            const hed=$(this).find('h3').text()
            const p =$(this).find('p').text()
            const link = $(this).find('a').attr('href')
            strange1.push({
                imgurl,  
                hed,
                p,
                link
           })
           
        })
    })
})

technology.forEach(newspaper=>{
    axios.get(newspaper.address)

    .then(response=>{
        const html=response.data
        const $=cheerio.load(html)
        $('.listingResult',html).each(function(){
           
            const imgurl = $(this).find('source').attr('data-pin-media')
            const hed=$(this).find('h3').text()
            const p =$(this).find('p').text()
            const link = $(this).find('a').attr('href')
            technology1.push({
                imgurl,  
                hed,
                p,
                link
           })
           
        })
    })
})


app.get('/', (req, res) => {
    res.json(nwe)
  });
  

  app.get('/news',(req, res)=>{
    res.json(news)
   })

   app.get('/health', (req, res) => {
    res.json(health1)
  });

  app.get('/earth', (req, res) => {
    res.json(earth1)
  });

  app.get('/animals', (req, res) => {
    res.json(animals1)
  });

  app.get('/space', (req, res) => {
    res.json(space1)
  });

  app.get('/strange', (req, res) => {
    res.json(strange1)
  });

  app.get('/technology', (req, res) => {
    res.json(technology1)
  });




   app.listen(PORT,()=>console.log(`server is running on ${PORT}`));