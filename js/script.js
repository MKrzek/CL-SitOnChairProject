document.addEventListener('DOMContentLoaded', function (){


var menuMain=document.querySelector('#menu1>ul>li:first-of-type');
var hoverMenu=document.querySelector('#hoverMenu');
menuMain.addEventListener('mouseover', showMenu);
menuMain.addEventListener ('mouseout', hideMenu);
function showMenu(e){
    hoverMenu.style.display='block';
};
function hideMenu(e){
    hoverMenu.style.display='none';
};

var pictures=document.querySelectorAll('.transparent');

for (var i=0;i<pictures.length;i++){
    pictures[i].addEventListener ('mouseover', hideBand);
    pictures[i].addEventListener ('mouseout', showBand);
};
function hideBand(e){
    this.querySelector('p').style.display='none';
};
function showBand(e){
    this.querySelector('p').style.display='block';
};

//slider//


var guzik1=document.getElementById('nextPicture');
var guzik2=document.getElementById('prevPicture');
var obrazki=document.querySelectorAll('.slider>ul li');
var licznik=0;
obrazki[licznik].classList.add('visible');
guzik1.addEventListener ('click', function (){
    console.log ('guzik1 was clicked');
    obrazki[licznik].classList.remove('visible');
    licznik++;
    if (licznik==obrazki.length){
        licznik=0;}
    obrazki[licznik].classList.add('visible');

});
guzik2.addEventListener ('click', function(){
    console.log ('guzik2 was clicked');
    obrazki[licznik].classList.remove('visible');
    licznik--;
        if (licznik==-1){
            licznik=obrazki.length-1;}
    obrazki[licznik].classList.add('visible');
    

});

/*kalkulator*/
var btns=document.querySelectorAll('.tytul li');

for (var i=0; i<btns.length;i++){
    btns[i].addEventListener('click', addValues);
};
function addValues(e){
    document.querySelector('.panel_left .title').innerHTML=this.innerHTML;
    document.querySelector('.panel_right h4').innerHTML='200';
    var suma=parseInt(titVal.innerHTML); 
    document.querySelector('div.sum').innerHTML= suma + ' zl';
};

var btnsCol=document.querySelectorAll('ul.kolor li');
for (var i=0;i<btnsCol.length;i++){
    btnsCol[i].addEventListener('click', addColor);
};
function addColor(e){
    document.querySelector('.panel_left span.color').innerHTML=this.innerHTML;
    if (this.innerHTML=='Czarny'){
    document.querySelector('.panel_right span.color.value').innerHTML='60';
    };
    if (this.innerHTML=='Czerwony'){
    document.querySelector('.panel_right span.color.value').innerHTML='80';    
    };
    if (this.innerHTML=='Pomarańczowy'){
    document.querySelector('.panel_right span.color.value').innerHTML='100';   
    };
    var suma=(parseInt(titVal.innerHTML) + parseInt(colVal.innerHTML));
    document.querySelector('div.sum').innerHTML= suma + ' zl';
}
var btnsPat=document.querySelectorAll('ul.wzor li');
for (var i=0;i<btnsPat.length;i++){
    btnsPat[i].addEventListener('click', addPattern);
}
function addPattern(e){
    document.querySelector('.panel_left span.pattern').innerHTML=this.innerHTML;
    document.querySelector('.panel_right span.pattern.value').innerHTML='100';
    var suma=(parseInt(titVal.innerHTML) + parseInt(colVal.innerHTML) + parseInt(patVal.innerHTML));
    document.querySelector('div.sum').innerHTML= suma + ' zl';
}
var titVal=document.querySelector('.panel_right  h4.title.value');

var colVal=document.querySelector('.panel_right  span.color.value');

var patVal=document.querySelector('.panel_right   span.pattern.value');
var transVal=document.querySelector('.panel_right span.transport.value');

var checkbox=document.querySelector('#transport');
checkbox.addEventListener('click', addCheck);
function addCheck(e){
    document.querySelector('.panel_left span.transport').innerHTML='Transport';
    document.querySelector('.panel_right span.transport.value').innerHTML='200';
    
    var suma=(parseInt(transVal.innerHTML) + parseInt(colVal.innerHTML) + parseInt(patVal.innerHTML) + parseInt(transVal.innerHTML));
    document.querySelector('div.sum').innerHTML= suma + ' zl';
}


});