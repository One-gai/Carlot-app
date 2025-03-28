const container = document.querySelector(".SecondPage")


const renderGTRdes = async () => {
    let uri = 'http://localhost:3000/GTRdes';   

    const res = await fetch(uri);

    const GTRdes = await res.json();

    

    let template = '';
    GTRdes.forEach(GTRdes => {
        template += `
    <div class = "GTRdes">
    <h2>${GTRdes.Header}</h2>
    <img src= "${GTRdes.Img}"
    <p>${GTRdes.Des.slice(0, 100)}</p>
    <p>${GTRdes.HighWheels} Likes</p>
    </div>
    `
    })
     
    
}
container.innerHTML = template;
   

window.addEventListener('DOMContentLoaded',() => renderGTRdes());