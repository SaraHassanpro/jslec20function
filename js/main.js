//********task one ***********/

let counter=0;
function increment(){
    counter++;
    document.getElementById("demo").innerHTML=counter;
}
function decrement(){
    counter--;
    document.getElementById("demo").innerHTML=counter;
}

//*********8task two ************/
function convertData() {
    var myValue = document.getElementById("myInput").value;
    var myResult = document.getElementById("result");
    myResult.innerHTML = myValue * 50 ;
    console.log(myResult);
    return false;
}