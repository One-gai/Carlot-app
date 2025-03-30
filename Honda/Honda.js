const container = document.querySelector(".HondaPage")

const renderHondaDes = async () => {
    let uri = 'http://localhost:3000/HondaDes'

    const res = await fetch(uri);

    const HondaDes = await res.json();

    let template = '';
    HondaDes.forEach(HondaDes => {
        template +=`
        <div class = "HondaDes">
            <h2>${HondaDes.Header}</h2>
            <img src = "${HondaDes.Img}">
            <p id = "Des">${HondaDes.Des.slice(0, 50)}...</p>
            <p id = "Likes">${HondaDes.HighWheels}Likes</p>
            <a href="/details/details.html?id=${HondaDes.id}">Read more...</a>
        </div>
        `
    })
    container.innerHTML = template;
}
window.addEventListener('DOMContentLoaded', () => renderHondaDes())