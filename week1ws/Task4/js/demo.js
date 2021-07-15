const click=document.getElementById('colors');
function clickfun(){
    const color=click.options[click.selectedIndex].value;
    div1.style.backgroundColor=color;
}

function radiofun(){
    const a=document.getElementById('one').value;
    const b=document.getElementById('two').value;
    const c=document.getElementById('three').value;
    if(one.checked==true){
        text1.style.color=a;
    }
    else if(two.checked==true){
        text1.style.color=b;
    }
    else if(three.checked==true){
        text1.style.color=c;
    }
}

function checkfun(){
    let a=document.getElementById('checkbox1').value;
    let b=document.getElementById('checkbox2').value;
    let c=document.getElementById('checkbox3').value;
    if(checkbox1.checked==true){
        text2.style.fontFamily=a;
    }
    else if(checkbox2.checked==true){
        text2.style.fontFamily=b;
    }
    else if(checkbox3.checked==true){
        text2.style.fontFamily=c;
    }
}
