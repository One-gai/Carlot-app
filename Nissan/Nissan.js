const container = document.querySelector(".NissanPage")


const renderNissanDes = async () => {
    let uri = 'http://localhost:3000/NissanDes';   

    const res = await fetch(uri);

    const NissanDes = await res.json();

    

    let template = '';
    NissanDes.forEach(NissanDes => {
        template += `
    <div class = "NissanDes">
    <h2>${NissanDes.Header}</h2>
    <img src= "${NissanDes.Img}">
    <p id = "Des">${NissanDes.Des}</p>
    <p id = "Likes>${NissanDes.HighWheels}likes</p>
    </div>
    `
    })
     
    container.innerHTML = template;
}

   

window.addEventListener('DOMContentLoaded',() => renderNissanDes());