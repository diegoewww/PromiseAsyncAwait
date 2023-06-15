//Make an api request using async await
async function getACuteDogPhoto(){
    const res = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await res.json()
    console.log(res)
    console.log(data)
    document.querySelector("img").src = data.message
}

document.querySelector("button").addEventListener("click", getACuteDogPhoto)