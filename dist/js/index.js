// alert('hi')

let dialog = document.getElementById('modal')
let open = document.querySelector('.open')
let close = document.querySelector('.close')

open.onclick = function (){
    dialog.showModal();
    dialog.classList.toggle('showDialog')
}

close.onclick = function (){
    dialog.close();
    dialog.classList.toggle('showDialog')
}
 
