// Show Food Name seperately
$(document).ready(function()
{
  $(".foodImageFrame").mouseenter(function()
  {
    $(".foodText", this).slideDown("slow");
  });

  $(".foodImageFrame").mouseleave(function()
  {
    $(".foodText", this).slideUp("slow");
  });
});

function foodSearch()
{
  let foodName = document.getElementById("foodSearchText").value;
  let anchor = document.getElementById("searchButton");
  anchor.href = "#" + foodName;
  return;
}

function inputData()
{
  let food =
  [
    "재육볶음"
  ]
  let ingredients = ["돼지고기 600g", "양파 1개", "청양고추 2개", "대파 1뿌리", "설탕 2스푼", "고추장 2스푼", "간장 2스푼"];
  let steps = 
  [
    "재료는 먹기 좋은 크기로 썰어서 준비하기",
    "고추장 2스푼, 간장 2스푼, 고춧가루 2스푼, 다진마늘 1스푼, 굴소스 1스푼, 올리고당 1스푼 넣어서 양념장 만들기",
    "고기가 익어갈 때 설탕을 넣고 더 구워주기",
    "손질해둔 야채와 양념장을 넣고 볶기",
    "모든 재료가 다 익으면 제육볶음 완성"
  ]
  let x = document.getElementById("제육볶음_재료");
  for(let index = 0; index < steps.length; index++)
  {
    $("#재육볶음_요리순서").append("<li>"+steps[index]+"</li>");
  }
  x.innerHTML = ingredients;
  console.log(ingredients)

  document.write("<div class='recipe' id='"+food[0]+"'"+">");
  document.write("<div class='foodImageFrame'>");
  document.write
}


