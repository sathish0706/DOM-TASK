var label=crLab("label","for","firstname","Firstname");
var br=breakLine("br")
var input=inputBox("input","type","firstname")
var br1=breakLine("br")
var label1=crLab("label","for","lastname","Lastname");
var br2=breakLine("br")
var input1=inputBox("input","type","lastname")
var br3=breakLine("br")
var label2=crLab("label","for","email","Email");
var br4=breakLine("br")
var input2=inputBox("input","type","email")
var br5=breakLine("br")
var label3=crLab("label","for","email","Password");
var br6=breakLine("br")
var input3=inputBox("input","type","password")


document.body.append(label,br,input,br1,label1,br2,input1,br3,label2,br4,input2,br5,label3,br6,input3);

function crLab(tnm,atrnm,atrval,cnt){
var label=document.createElement(tnm);
label.setAttribute(atrnm,atrval);
label.innerHTML=cnt;
return label
}


function inputBox(tnm,atrnm,atrval){
var input=document.createElement(tnm);
input.setAttribute(atrnm,atrval);
return input
}

function breakLine(b){
    var br=document.createElement(b)
    return br
}