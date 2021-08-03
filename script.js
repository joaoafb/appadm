var divmenu = document.getElementById("menu");
var btn = document.getElementById("btn");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btnfechar = document.getElementById("btnfechar");
var btnmenu = document.getElementById("btnmenu")
btnfechar.style.display = 'none'
divmenu.style.display = 'none'





function menu() {



    divmenu.style.display = 'block'
    btn.style.display = 'none'
    btn2.style.display = 'none'
    btn3.style.display = 'none'
    btnmenu.style.display = 'none'
    btnfechar.style.display = 'block'
    document.getElementById("titulo").style.filter = "blur(2px)"
    document.getElementById("box").style.filter = "blur(2px)"

}

function fechar() {
    divmenu.style.display = 'none'
    btn.style.display = 'block'
    btn2.style.display = 'block'
    btn3.style.display = 'block'
    btnfechar.style.display = 'none'
    btnmenu.style.display = 'block'
    document.getElementById("titulo").style.filter = "blur(0px)"
    document.getElementById("box").style.filter = "blur(0px)"
}



document.getElementById("switch-shadow").onclick = function() {

    document.getElementById("titulomenu").innerText = "Modo Simples"


}

function modonormal() {
    document.getElementById("switch-shadow").onclick = function() {

        document.getElementById("titulomenu").innerText = "Modo Normal"

    }
}