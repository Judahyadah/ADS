const header = document.getElementsByClassName('header'); //menubar
const navBar = document.getElementsByClassName('navbar'); // overlay
const navBar = document.getElementsByClassName()
const navBar = document.getElementsByClassName()
const navBar = document.getElementsByClassName()
const navBar = document.getElementsByClassName()
const navBar = document.getElementsByClassName()

function toggle(){
    header.classList.toggle('change');

    navbar.classList.toggle('overlay-active');
}

if(navBar.classList.toggle('overlay-active')){
    navBar.classList.remove(overlay-slide-left);
    navBar.classList.add(overlay-slide-right);
    navbar1.classList.remove('slide-out-1');
    navbar1.classList.add('slide-in-1');
    navbar2.classList.remove('slide-out-2');
    navbar2.classList.add('slide-in-2');
    navbar3.classList.remove('slide-out-3');
    navbar3.classList.add('slide-in-3');
    navbar4.classList.remove('slide-out-4');
    navbar4.classList.add('slide-in-4');
} else{
    navBar.classList.remove(overlay-slide-right);
    navBar.classList.add(overlay-slide-left);
    navbar1.classList.remove('slide-in-1');
    navbar1.classList.add('slide-out-1');
    navbar2.classList.remove('slide-in-2');
    navbar2.classList.add('slide-out-2');
    navbar3.classList.remove('slide-in-3');
    navbar3.classList.add('slide-out-3');
    navbar4.classList.remove('slide-in-4');
    navbar4.classList.add('slide-out-4');
}