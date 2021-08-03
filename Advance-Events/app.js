//events binding
function disp3(){
    alert('hello world');
}
document.getElementById('app').onclick=disp3;

//over writing event handler
function disp1(){
    alert('hello!');
}
function disp2(){
    alert('bye world');
}
document.getElementById('app').onclick=disp1;
document.getElementById('app').onclick=disp2;

//Dom event flow or event propagation
