let input = document.querySelectorAll('input');
let btn =document.querySelector('button');
let div =document.querySelector('div');
btn.onclick =function(){
let width = input[0].value;
let height = input[1].value;
let background = input[2].value;
let margin = input[3].value;
let border = input[4].value;




div.style.width=width + "px";
div.style.height=height + "px";
div.style.background=background;
div.style.margin=margin + "px";
div.style.border=border;




}
