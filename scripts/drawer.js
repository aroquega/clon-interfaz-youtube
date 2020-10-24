const drawer = document.getElementById('drawer');
const faded = document.getElementById('faded');

const drawerButtons = document.getElementsByClassName('drawer-button');

for(let button of drawerButtons){
    button.addEventListener('click', toggle);
}

function toggle(){
    console.log('fdsajfdsa')
    drawer.classList.toggle('open');
    faded.classList.toggle('dark');
}