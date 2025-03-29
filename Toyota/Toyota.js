const container = document.querySelector(".ToyotaPage")


const renderToyotaDes = async () => {
    let uri = 'http://localhost:3000/ToyotaDes';   

    const res = await fetch(uri);

    const ToyotaDes = await res.json();

    

    let template = '';
    ToyotaDes.forEach(ToyotaDes=> {
        template += `
    <div class = "ToyotaDes">
    <h2>${ToyotaDes.Header}</h2>
    <img src= "${ToyotaDes.Img}">
    <p id = "ToyotaDes">${ToyotaDes.Des}</p>
    <p id = "ToyotaLikes>${ToyotaDes.HighWheels}likes</p>
    </div>
    `
    })
     
    container.innerHTML = template;
}

   

window.addEventListener('DOMContentLoaded',() => renderToyotaDes());