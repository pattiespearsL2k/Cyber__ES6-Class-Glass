
let data = [];
let list;
fetch("https://61d6e2a235f71e0017c2e877.mockapi.io/glasses")
    .then(respon => respon.json())
    .then(respon => {
        console.log(respon);
        data = [...respon]
        showSP(respon)
    })
let showSP = (data) => {
    let content = ''
    data.map(glass => {
        content += `
        <div class="col-4">
        <div class="glass__item" onclick="handleClick('${glass.id}')">
        <img class="glass__img" src="${glass.src}" alt="glass${glass.id}">      
         </div>
         </div>
        `
    })
    document.getElementById("vglassesList").innerHTML = content
}

const render = () => {
    document.getElementById("avatar").innerHTML = `<img src="${list.virtualImg}" alt="">`
    renderDetail()

}

let handleClick = (id) => {
    list = data.find(item => {
        return item.id === id
    })
    render()
}
window.handleClick = handleClick

const renderDetail = () => {
    let content = `
    <h1 class="glass__heading">
    ${list.name} - ${list.brand} (${list.color})
    </h1>
    <span>$${list.price}</span>
    <p>${list.description}</p> 
    `
    document.getElementById("glassesInfo").innerHTML = content
    document.getElementById("glassesInfo").style.display = "block"
}
