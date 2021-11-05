const express= require('express')
const app = express()
let PORT = 8080
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
let arr=[
    {
        name:"tijeras",
        price:"25",
        url:"https://www.officedepot.com.mx/medias/75879.jpg-1200ftw?context=bWFzdGVyfHJvb3R8OTQ0MTh8aW1hZ2UvanBlZ3xoNGMvaGY5Lzk3MzU3NTMyMDM3NDIuanBnfGNhNmUzMGE1YmIyNTJlODVjZjFjMzM2Mzk0MGRlZTI0MmRiODBmNDA0OTdiZDYzNmQyMGQ3NDRiODk0MzQxNmM"
    },
    {
        name:"lapices",
        price:"25",
        url:"https://www.officedepot.com.mx/medias/45607.jpg-1200ftw?context=bWFzdGVyfHJvb3R8MjIzOTIwfGltYWdlL2pwZWd8aDZjL2gwMC85NzM0OTg1Mjg1NjYyLmpwZ3w0Y2M5MDk3MWIyYmQ2ZTFiNTAzNzJkZDY2Y2RmYTFlMzA2MDBmNzBiZmI4YTQxZjY4NjA5MjAyM2I1MWY3ZDBm"
    }
]
app.set("view engine","pug")
app.set("views","./views")



 
app.get("/products",(req,res)=>{
    res.render("index",{data:arr})
})
app.post("/products",(req,res)=>{
    console.log(req.body)
    arr.push(req.body)
    res.redirect("/products")
})
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})