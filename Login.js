function DisplayFlex(){
    document.querySelector("#SignUpTxt1").style.display = "flex";
    document.querySelector("#SignUpTxt").style.display = "none";
}

document.querySelector("#Log").setAttribute("onclick","DisplayFlex()")

function DisplayFlex1(){
    document.querySelector("#SignUpTxt").style.display = "flex";
    document.querySelector("#SignUpTxt1").style.display = "none";
}
