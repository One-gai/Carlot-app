const id = new URLSearchParams(window.location.search).get('id')
const container = document.querySelector('.details')



const renderDetails = async () => {
    const res = await fetch('http://localhost:3000/NissanDes/' + id);
    const NissanDes = await res.json();
    
    const template =`
    <h1>${NissanDes.Header}</h1>
    <p>${NissanDes.Des}</p>

    `
    container.innerHTML =  template;
}


window.addEventListener('DOMContentLoaded', () => renderDetails())  