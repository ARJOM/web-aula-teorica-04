const content = document.getElementById("content")

// fetch("https://dog.ceo/api/breeds/image/random")
//     .then(res => res.json())
//     .then(res => {
//         const img = document.createElement("img");
//         img.src = res.message
//         content.appendChild(img)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// fetch("https://cataas.com/cat")
//     .then(res => res.blob())
//     .then(res => {
//         const url = URL.createObjectURL(res)
//         const img = document.createElement("img");
//         img.src = url
//         content.appendChild(img)
//     })
//     .catch(err => {
//         console.log(err)
//     })


fetch("https://api.kanye.rest")
.then(res => res.json())
.then(res => {
    const h1 = document.createElement("h1");
    h1.innerText = res.quote
    content.appendChild(h1)
})