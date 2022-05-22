
var base=new Array();

function select(element){

    classN=element.className; 
    src = element.src;
    alt = element.alt;
    id=element.id;

    //중복제거
    var search=false;
    var ptable= new Array();
    ptable =document.getElementById("resultTable").getElementsByTagName("p")    
    for(var i=0;i<ptable.length;i++){
        if(document.getElementById("resultTable").getElementsByTagName("p")[i].innerHTML==alt){

            search=true;
        }       
    }
    //중복이 없다면
    if(!search){
    var table = document.getElementById("resultTable");
    var row = table.insertRow();
    var cell = row.insertCell();
    row.id=id;

    base.push(alt);

    var div = document.createElement('div');
    var img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.className = classN;
    
    var p = document.createElement('p');
    p.innerHTML = alt;

    var btn=document.createElement('button');
    btn.innerHTML="Remove";
    btn.onclick=function(){
        row.parentNode.removeChild(row);
        for(let i = 0; i < base.length; i++) {
            if(base[i] === alt)  {
              base.splice(i-1, 1);
              i--;
            }
        }
        
    }

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(btn);

    cell.appendChild(div);
    }
    
}

function result(){
    for(var i=0;i<base.length;i++){

    }
}
