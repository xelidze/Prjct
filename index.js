let Aris = true;
function DisplayFlex(){
    if(Aris == true){
    document.querySelector("#FirstColection1").style.display = "flex";
    Aris = false;
    return;
   }
   if( Aris == false){
    document.querySelector("#FirstColection1").style.display = "none";
    Aris = true;
    return;
   }
}

document.querySelector("#View").setAttribute("onclick","DisplayFlex()")