
var number=0;
 var o=null;
function sum()
{
    debugger
   number=parseInt(document.getElementById('m').innerText) + number
   document.getElementById('m').innerText=null
    o="+"

}

function zarb()
{
    debugger
    if (number==0) {
        number=1
        
    }
   number=parseInt(document.getElementById('m').innerText) * number
   document.getElementById('m').innerText=null
   var o="*"

}


function show(a){
    document.getElementById('m').innerText=document.getElementById('m').innerText+a
}

function test()
{
    debugger
    if (o == "+") {
        number=parseInt(document.getElementById('m').innerText) + number
    }
    if (o == "*") {
        number=parseInt(document.getElementById('m').innerText) * number
    }
    document.getElementById('m').innerText=number
}