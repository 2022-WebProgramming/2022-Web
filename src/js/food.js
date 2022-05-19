
function select(element){
    
    function changeCondiment(){
        alert("hi");
        document.getElementById("htmlSrc").setAttribute("data-include-path")="./CONDIMENT.html"
    }

    classN=element.className; 
    src = element.src;
    alt = element.alt;

    var table = document.getElementById("resultTable");
    var row = table.insertRow();
    var cell = row.insertCell();

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
        var row=document.getElementById("resultTable").getElementsByTagName('tr');
        var table=document.getElementById("resultTable");
        console.log(row);
        //for(var i=0;i<row.length;i++){
          //생각중  
        //}
    }

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(btn);

    cell.appendChild(div);
}

function remove(){
    var table=document.getElementById("resultTable");
    var row=document.getElementById("resultTable").getElementsByTagName('tr');
    for(var i=0;i<row.length;i++){
        table.deleteRow(0);
    }
    table.deleteRow(0);
}
