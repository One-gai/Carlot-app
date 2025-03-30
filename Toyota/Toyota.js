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
    <p id = "ToyotaDes">${ToyotaDes.Des.slice(0, 50)}...</p>
    <p id = "ToyotaLikes">${ToyotaDes.HighWheels}likes</p>
    <a href="/details/details.html?id=${ToyotaDes.id}">Read more...</a>
    </div>
    `
    })
     
    container.innerHTML = template;
}

   

window.addEventListener('DOMContentLoaded',() => renderToyotaDes());