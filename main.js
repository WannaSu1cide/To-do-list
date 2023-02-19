const ul = document.querySelector("#ul");
const input = document.querySelector("#input");
const submit =document.querySelector("#submit");
var close = document.getElementsByClassName("close");
var myNodelist = document.getElementsByTagName("LI");
var finish = document.getElementsByClassName("finish");


submit.addEventListener("click", () => {
    
         let li = document.createElement("li");
         let value = input.value;
        let inner = document.createTextNode(value);
        li.appendChild(inner);
        if(input.value === ""){
            alert("you must write something");
        }else {
            ul.appendChild(li);
        }
        input.value = "";
        
    for (let i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
         var txt = document.createTextNode("\u00D7");
         span.className = "close";
         span.appendChild(txt);
         myNodelist[i].appendChild(span);
}

    for (let i=0;i<myNodelist.length;i++){
         let finisedSpan = document.createElement("SPAN");
         let iconFinished = document.createTextNode("\u2713");
        finisedSpan.className="finish";
        finisedSpan.appendChild(iconFinished);
        myNodelist[i].appendChild(finisedSpan);

}

    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function() {
         let div = this.parentElement;
          let check = prompt("bạn có muốn xóa k? nếu có thì ấn có hoặc ghi không");
         if(check = "có"){
           div.style.display = "none";
         }else {
         
      }
      
    }
  }
    for (i=0;i<finish.length;i++) {
    
        finish[i].onclick = function (event){
           let div = this.parentElement;
         div.classList.toggle("finishClick");
      
    }

   
}

        
    
   
    }
    


) 



// add close btn


// add finish tick  btn 





// remove when we click it 




// finish when we click it 



for (i=0;i<finish.length;i++) {
    
    finish[i].onclick = function (event){
        let div = this.parentElement;
        div.classList.toggle("finishClick");
      
    }

   
}


