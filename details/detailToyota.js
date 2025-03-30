const id = new URLSearchParams(window.location.search).get('id')
const container = document.querySelector('.detailToyota')



const renderDetails = async () => {
    const res = await fetch('http://localhost:3000/ToyotaDes/' + id);
    const ToyotaDes = await res.json();
    
    const template =`
    <h1>${ToyotaDes.Header}</h1>
    <p>${ToyotaDes.Des}</p>

    `
    container.innerHTML =  template;
}
 

window.addEventListener('DOMContentLoaded', () => renderDetails())  