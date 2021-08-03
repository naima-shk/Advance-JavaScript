//events binding
/*function disp3(){
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
*/
//Dom event flow or event propagation

//bubbling phase
/*document.getElementById('one').addEventListener('click',function(){
console.log('1');},false);
document.getElementById('two').addEventListener('click',function(){
console.log('2');},false);
document.getElementById('three').addEventListener('click',function(){
console.log('3');},false);
document.getElementById('four').addEventListener('click',function(){
console.log('4');},false);*/

//capture phase
document.getElementById('one').addEventListener('click',function(){
console.log('1');},true);
document.getElementById('two').addEventListener('click',function(){
console.log('2');},true);
document.getElementById('three').addEventListener('click',function(){
console.log('3');},true);
document.getElementById('four').addEventListener('click',function(){
console.log('4');},true);