const ul = document.querySelector("#ul");
const input = document.querySelector("#input");
const submit =document.querySelector("#submit");
// add close btn
var myNodelist = document.getElementsByTagName("LI");
for (let i = 0; i < myNodelist.length; i++) {
     var span = document.createElement("SPAN");
     var txt = document.createTextNode("\u00D7");
     span.className = "close";
     span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// add finish tick  btn 
const finishedList = document.getElementsByTagName("LI");
for (let i=0;i<finishedList.length;i++){
    let finisedSpan = document.createElement("SPAN");
    let iconFinished = document.createTextNode("\u2713");
    finisedSpan.className="finish";
    finisedSpan.appendChild(iconFinished);
    finishedList[i].appendChild(finisedSpan);

}




submit.onclick =function submit() {



}


// remove when we click it 
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// finish when we click it 
var finish = document.getElementsByClassName("finish");
for (i=0;i<finish.length;i++) {
    finish[i].onclick = function (event){
        let div = this.parentElement;
        div.style.background = "green";
        // event.stopPropgation();
    }
}


