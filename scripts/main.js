var myImage=document.querySelector('img'); //先讓myImage去取得img物件

myImage.onclick=function(){
    let mySrc=myImage.getAttribute('src'); //用mySrc得到其中的src屬性，路徑
    if(mySrc==='images/test.jpg'){
        myImage.setAttribute('src','images/test2.jpg');
    }else{
        myImage.setAttribute('src','images/test.jpg');
    }
}

var myButton=document.querySelector('button');
var myHeading=document.querySelector('h1');

function setUserName(){
    let myName=prompt('Please enter your name');
    localStorage.setItem('name',myName);
    myHeading.innerHTML='Welcome, '+ myName;
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName=localStorage.getItem('name');
    myHeading.innerHTML='Welcome, '+storedName;
}

myButton.onclick=function(){
    setUserName();
}