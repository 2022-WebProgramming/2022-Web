function resultCard(element) {
   //중복이 있는지 확인
   var search = false;
   var ptable = new Array();
   ptable = document.getElementById("resultTable").getElementsByTagName("p")
   for (var i = 0; i < ptable.length; i++) {
      if (document.getElementById("resultTable").getElementsByTagName("p")[i].innerHTML == element.alt) {
         search = true;
      }
   }

   //중복이 없다면
   if (!search) {
      if (element.selected == "true") {
         var table = document.getElementById("resultTable");
         //바깥 div card
         let card = document.createElement('div');
         card.classList.add("card")
         //img
         let img = document.createElement('img');
         img.classList.add("img-circle");
         img.id = element.id;
         img.src = element.src;
         img.width = 100;
         img.height = 100;
         img.alt = element.alt;

         //안쪽 div
         let innerdiv = document.createElement('div');
         innerdiv.classList.add("text-center");

         let p = document.createElement('p')
         p.innerHTML = element.alt;

         //button
         let btn = document.createElement('button');
         btn.innerHTML = "Remove";
         btn.onclick = function () {
            card.parentNode.removeChild(card);
            var id = element.id;
            var getData = JSON.parse(localStorage.getItem(id));
            getData.selected = "false";
            localStorage.setItem(id, JSON.stringify(getData));
         }

         innerdiv.appendChild(p);
         card.appendChild(img);
         card.appendChild(innerdiv);
         card.appendChild(btn);

         table.appendChild(card);

      }
      else {

         console.log("selected is false");
      }
   }
}


//Food
function selectFood1() {
   var getData = JSON.parse(localStorage.getItem('pork'));
   if (getData.selected == "false") {
      getData.selected = "true";
      localStorage.setItem("pork", JSON.stringify(getData));
   }
   else if (getData.selected == "true") {
      getData.selected = "false";
      localStorage.setItem("pork", JSON.stringify(getData));
   }
   resultCard(getData);
}

function selectFood2() {
   var getData = JSON.parse(localStorage.getItem('chicken'));
   if (getData.selected == "false") {
      getData.selected = "true";
      localStorage.setItem("chicken", JSON.stringify(getData));
   }
   else if (getData.selected == "true") {
      getData.selected = "false";
      localStorage.setItem("chicken", JSON.stringify(getData));
   }
   resultCard(getData);
}

function selectFood3() {
   var getData = JSON.parse(localStorage.getItem('beef'));
   if (getData.selected == "false") {
      getData.selected = "true";
      localStorage.setItem("beef", JSON.stringify(getData));
   }
   else if (getData.selected == "true") {
      getData.selected = "false";
      localStorage.setItem("beef", JSON.stringify(getData));
   }

   resultCard(getData);
}

function selectFood4() {
   var getData = JSON.parse(localStorage.getItem('greenOnion'));
   if (getData.selected == "false") {
      getData.selected = "true";
      localStorage.setItem("greenOnion", JSON.stringify(getData));
   }
   else if (getData.selected == "true") {
      getData.selected = "false";
      localStorage.setItem("greenOnion", JSON.stringify(getData));
   }
   resultCard(getData);
}

function selectFood5() {
   var getData = JSON.parse(localStorage.getItem('onion'));
   if (getData.selected == "false") {
      getData.selected = "true";
      localStorage.setItem("onion", JSON.stringify(getData));
   }
   else if (getData.selected == "true") {
      getData.selected = "false";
      localStorage.setItem("onion", JSON.stringify(getData));
   }
   resultCard(getData);
}

function selectFood6() {
   var getData = JSON.parse(localStorage.getItem('garlic'));
   if (getData.selected == "false") {
      getData.selected = "true";
      localStorage.setItem("garlic", JSON.stringify(getData));
   }
   else if (getData.selected == "true") {
      getData.selected = "false";
      localStorage.setItem("garlic", JSON.stringify(getData));
   }
   resultCard(getData);
}

function selectFood7() {
   var getData = JSON.parse(localStorage.getItem('carrot'));
   if (getData.selected == "false") {
      getData.selected = "true";
      localStorage.setItem("carrot", JSON.stringify(getData));
   }
   else if (getData.selected == "true") {
      getData.selected = "false";
      localStorage.setItem("carrot", JSON.stringify(getData));
   }
   resultCard(getData);
}

function selectFood8() {
   var getData = JSON.parse(localStorage.getItem('potato'));
   if (getData.selected == "false") {
      getData.selected = "true";
      localStorage.setItem("potato", JSON.stringify(getData));
   }
   else if (getData.selected == "true") {
      getData.selected = "false";
      localStorage.setItem("potato", JSON.stringify(getData));
   }
   resultCard(getData);
}

function selectFood9() {
   var getData = JSON.parse(localStorage.getItem('cabbage'));
   if (getData.selected == "false") {
      getData.selected = "true";
      localStorage.setItem("cabbage", JSON.stringify(getData));
   }
   else if (getData.selected == "true") {
      getData.selected = "false";
      localStorage.setItem("cabbage", JSON.stringify(getData));
   }
   resultCard(getData);
}

function selectFood10() {
   var getData = JSON.parse(localStorage.getItem('lettuce'));
   if (getData.selected == "false") {
      getData.selected = "true";
      localStorage.setItem("lettuce", JSON.stringify(getData));
   }
   else if (getData.selected == "true") {
      getData.selected = "false";
      localStorage.setItem("lettuce", JSON.stringify(getData));
   }
   resultCard(getData);
}

function selectFood11() {
   var getData = JSON.parse(localStorage.getItem('cabbage2'));
   if (getData.selected == "false") {
      getData.selected = "true";
      localStorage.setItem("cabbage2", JSON.stringify(getData));
   }
   else if (getData.selected == "true") {
      getData.selected = "false";
      localStorage.setItem("cabbage2", JSON.stringify(getData));
   }
   resultCard(getData);
}

function selectFood12() {
   var getData = JSON.parse(localStorage.getItem('mushroom'));
   if (getData.selected == "false") {
      getData.selected = "true";
      localStorage.setItem("mushroom", JSON.stringify(getData));
   }
   else if (getData.selected == "true") {
      getData.selected = "false";
      localStorage.setItem("mushroom", JSON.stringify(getData));
   }
   resultCard(getData);
}


function selectFood13() {
   var getData = JSON.parse(localStorage.getItem('egg'));
   if (getData.selected == "false") {
      getData.selected = "true";
      localStorage.setItem("egg", JSON.stringify(getData));
   }
   else if (getData.selected == "true") {
      getData.selected = "false";
      localStorage.setItem("egg", JSON.stringify(getData));
   }
   resultCard(getData);
}

function selectFood14() {
   var getData = JSON.parse(localStorage.getItem('cheese'));
   if (getData.selected == "false") {
      getData.selected = "true";
      localStorage.setItem("cheese", JSON.stringify(getData));
   }
   else if (getData.selected == "true") {
      getData.selected = "false";
      localStorage.setItem("cheese", JSON.stringify(getData));
   }
   resultCard(getData);
}

function selectFood15() {
   var getData = JSON.parse(localStorage.getItem('tofu'));
   if (getData.selected == "false") {
      getData.selected = "true";
      localStorage.setItem("tofu", JSON.stringify(getData));
   }
   else if (getData.selected == "true") {
      getData.selected = "false";
      localStorage.setItem("tofu", JSON.stringify(getData));
   }
   resultCard(getData);
}

function selectFood16() {
   var getData = JSON.parse(localStorage.getItem('shrimp'));
   if (getData.selected == "false") {
      getData.selected = "true";
      localStorage.setItem("shrimp", JSON.stringify(getData));
   }
   else if (getData.selected == "true") {
      getData.selected = "false";
      localStorage.setItem("shrimp", JSON.stringify(getData));
   }
   resultCard(getData);
}



//Condiment
function selectCondiment1() {
   var getData = JSON.parse(localStorage.getItem('salt'));
   if (getData.selected == "false") {
      getData.selected = "true";
      localStorage.setItem("salt", JSON.stringify(getData));
   }
   else if (getData.selected == "true") {
      getData.selected = "false";
      localStorage.setItem("salt", JSON.stringify(getData));
   }
   resultCard(getData);
}

function selectCondiment2() {
   var getData = JSON.parse(localStorage.getItem('sugar'));
   if (getData.selected == "false") {
      getData.selected = "true";
      localStorage.setItem("sugar", JSON.stringify(getData));
   }
   else if (getData.selected == "true") {
      getData.selected = "false";
      localStorage.setItem("sugar", JSON.stringify(getData));
   }
   resultCard(getData);
}

function selectCondiment3() {
   var getData = JSON.parse(localStorage.getItem('gochutgaryu'));
   if (getData.selected == "false") {
      getData.selected = "true";
      localStorage.setItem("gochutgaryu", JSON.stringify(getData));
   }
   else if (getData.selected == "true") {
      getData.selected = "false";
      localStorage.setItem("gochutgaryu", JSON.stringify(getData));
   }
   resultCard(getData);
}

function selectCondiment4() {
   var getData = JSON.parse(localStorage.getItem('ganjang'));
   if (getData.selected == "false") {
      getData.selected = "true";
      localStorage.setItem("ganjang", JSON.stringify(getData));
   }
   else if (getData.selected == "true") {
      getData.selected = "false";
      localStorage.setItem("ganjang", JSON.stringify(getData));
   }
   resultCard(getData);
}

function selectCondiment5() {
   var getData = JSON.parse(localStorage.getItem('doenjang'));
   if (getData.selected == "false") {
      getData.selected = "true";
      localStorage.setItem("doenjang", JSON.stringify(getData));
   }
   else if (getData.selected == "true") {
      getData.selected = "false";
      localStorage.setItem("doenjang", JSON.stringify(getData));
   }
   resultCard(getData);
}

function selectCondiment6() {
   var getData = JSON.parse(localStorage.getItem('gochujang'));
   if (getData.selected == "false") {
      getData.selected = "true";
      localStorage.setItem("gochujang", JSON.stringify(getData));
   }
   else if (getData.selected == "true") {
      getData.selected = "false";
      localStorage.setItem("gochujang", JSON.stringify(getData));
   }
   resultCard(getData);
}

function selectCondiment7() {
   var getData = JSON.parse(localStorage.getItem('vinegar'));
   if (getData.selected == "false") {
      getData.selected = "true";
      localStorage.setItem("vinegar", JSON.stringify(getData));
   }
   else if (getData.selected == "true") {
      getData.selected = "false";
      localStorage.setItem("vinegar", JSON.stringify(getData));
   }
   resultCard(getData);
}

function selectCondiment8() {
   var getData = JSON.parse(localStorage.getItem('matsool'));
   if (getData.selected == "false") {
      getData.selected = "true";
      localStorage.setItem("matsool", JSON.stringify(getData));
   }
   else if (getData.selected == "true") {
      getData.selected = "false";
      localStorage.setItem("matsool", JSON.stringify(getData));
   }
   resultCard(getData);
}

function selectCondiment9() {
   var getData = JSON.parse(localStorage.getItem('chamgirum'));
   if (getData.selected == "false") {
      getData.selected = "true";
      localStorage.setItem("chamgirum", JSON.stringify(getData));
   }
   else if (getData.selected == "true") {
      getData.selected = "false";
      localStorage.setItem("chamgirum", JSON.stringify(getData));
   }
   resultCard(getData);
}

function selectCondiment10() {
   var getData = JSON.parse(localStorage.getItem('gulsauce'));
   if (getData.selected == "false") {
      getData.selected = "true";
      localStorage.setItem("gulsauce", JSON.stringify(getData));
   }
   else if (getData.selected == "true") {
      getData.selected = "false";
      localStorage.setItem("gulsauce", JSON.stringify(getData));
   }
   resultCard(getData);
}

function selectCondiment11() {
   var getData = JSON.parse(localStorage.getItem('cookingoil'));
   if (getData.selected == "false") {
      getData.selected = "true";
      localStorage.setItem("cookingoil", JSON.stringify(getData));
   }
   else if (getData.selected == "true") {
      getData.selected = "false";
      localStorage.setItem("cookingoil", JSON.stringify(getData));
   }
   resultCard(getData);
}

function selectCondiment12() {
   var getData = JSON.parse(localStorage.getItem('ketchup'));
   if (getData.selected == "false") {
      getData.selected = "true";
      localStorage.setItem("ketchup", JSON.stringify(getData));
   }
   else if (getData.selected == "true") {
      getData.selected = "false";
      localStorage.setItem("ketchup", JSON.stringify(getData));
   }
   resultCard(getData);
}

function selectCondiment13() {
   var getData = JSON.parse(localStorage.getItem('mayonnaise'));
   if (getData.selected == "false") {
      getData.selected = "true";
      localStorage.setItem("mayonnaise", JSON.stringify(getData));
   }
   else if (getData.selected == "true") {
      getData.selected = "false";
      localStorage.setItem("mayonnaise", JSON.stringify(getData));
   }
   resultCard(getData);
}

function selectCondiment14() {
   var getData = JSON.parse(localStorage.getItem('starchsyrup'));
   if (getData.selected == "false") {
      getData.selected = "true";
      localStorage.setItem("starchsyrup", JSON.stringify(getData));
   }
   else if (getData.selected == "true") {
      getData.selected = "false";
      localStorage.setItem("starchsyrup", JSON.stringify(getData));
   }
   resultCard(getData);
}

function selectCondiment15() {
   var getData = JSON.parse(localStorage.getItem('pepper'));
   if (getData.selected == "false") {
      getData.selected = "true";
      localStorage.setItem("pepper", JSON.stringify(getData));
   }
   else if (getData.selected == "true") {
      getData.selected = "false";
      localStorage.setItem("pepper", JSON.stringify(getData));
   }
   resultCard(getData);
}

function selectCondiment16() {
   var getData = JSON.parse(localStorage.getItem('anchovy'));
   if (getData.selected == "false") {
      getData.selected = "true";
      localStorage.setItem("anchovy", JSON.stringify(getData));
   }
   else if (getData.selected == "true") {
      getData.selected = "false";
      localStorage.setItem("anchovy", JSON.stringify(getData));
   }
   resultCard(getData);
}
