const container = document.getElementById("container")
const kotakElement = document.getElementsByClassName("kotak")
const btnReset = document.getElementById("reset")
const btnHapus = document.getElementById("hapus")
const btnRainbow = document.getElementById("rainbow")
const btnHitam = document.getElementById("hitam")
const slider = document.getElementById("slider")
const value = document.getElementById("value")


const grid = () => {
    for(let i = 0; i < 256; i++){
        const kotak = document.createElement('div');
        kotak.classList.add('kotak', 'bg-white', 'border-solid', 'border-black', )
        kotak.addEventListener('mouseover', (e) =>{
            e.target.style.backgroundColor = 'red';
        })
        container.appendChild(kotak)
    }
}

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

const reset = () => {
    btnReset.addEventListener('click', () =>{
        for (let i = 0; i < kotakElement.length; i++){
            kotakElement[i].style.backgroundColor = 'white';
        }
    })
}



btnHitam.addEventListener('click', () => {
    let kotak = container.children
    Array.from(kotak).forEach((kotakEl) => {
        kotakEl.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black'
        })
    })
})


const rainbow = () => {
    btnRainbow.addEventListener('click', () => {
        let kotak = kotakElement
        for(const divKotak of kotak){
            const randomR = Math.floor(Math.random() * 256)
            const randomG = Math.floor(Math.random() * 256)
            const randomB = Math.floor(Math.random() * 256)
            divKotak.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
            })
        }
    })
}


const hapus = () => {
    btnHapus.addEventListener('click', () => {
        let kotak = kotakElement
        for (const kotakDiv of kotak){
            kotakDiv.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = 'white'
            })
        }
    })
}

slider.addEventListener('input', () => {
    let val = document.getElementById("slider").value;
    value.textContent = val
    removeAllChildNodes(container)
    container.style.gridTemplateColumns = `repeat(${val}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${val}, 1fr)`;
    for(let i = 0; i < val*val; i++){
        const div = document.createElement('div');
        div.classList.add('kotak','bg-white', 'border-solid', 'border-black', )
        div.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'red'
        })
        container.appendChild(div)
    }
})


grid();
reset();
rainbow();
hapus();
