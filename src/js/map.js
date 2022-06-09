function googleMapSearch() {
  let search = document.getElementById("search");
  let string = search.value;
  if (string === "") {
    alert("검색어를 입력해주세요.");
  }
  else {
    window.open('https://www.google.co.kr/maps/search/' + string + '/hl=ko');
  }
}