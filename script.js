let div = document.querySelector('.sidebar-navigation')
let resizer = document.createElement('div')
resizer.className = 'resizer'
div.appendChild(resizer)
resizer.style.width = '1px'
resizer.style.borderLeft = '1px solid black'
// resizer.style.background = 'red'
resizer.style.position = 'absolute'
resizer.style.top = "2.65px"
resizer.style.bottom = 
resizer.style.right = "-12px"
resizer.style.cursor = 'e-resize'

resizer.addEventListener('mousedown', initResize, false)

function initResize(e) {
  window.addEventListener('mousemove', Resize, false)
  window.addEventListener('mouseup', stopResize, false)
}

function Resize(e) {
  div.style.width = (e.clientX - div.offsetLeft) + 'px'
}

function stopResize(e) {
  window.removeEventListener('mousemove', Resize, false)
  window.removeEventListener('mouseup', stopResize, false)
}


// Seleciona o elemento que você quer observar
var elemento = document.querySelector('.sidebar-navigation');

// Cria uma nova instância do ResizeObserver e passa uma função callback
var ro = new ResizeObserver(entries => {
  for (let entry of entries) {
    if(entry.contentRect.width <= 418) {
      // document.querySelector(".container").style.width = "84%"
      document.querySelector(".container").classList.remove("container-resizeRestore")
      document.querySelector(".container").classList.add("container-resize")
    }
    if(entry.contentRect.width > 280){
      // document.querySelector(".container").style.width = "1470px"
      document.querySelector(".container").classList.remove("container-resize")
      document.querySelector(".container").classList.add("container-resizeRestore")
    }
  }
});

// Inicia a observação do elemento
ro.observe(elemento);