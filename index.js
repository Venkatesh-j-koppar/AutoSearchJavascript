const searchbar = document.querySelector(".search-input");
const inputbox = document.querySelector("input");
const suggestionbox = document.querySelector(".autocom-box");

inputbox.onkeyup = (e) => {
  let inputvalue = e.target.value;
  let array = [];
  if (inputvalue) {
    array = suggestions.filter((data1) => {
      return data1
        .toLocaleLowerCase()
        .startsWith(inputvalue.toLocaleLowerCase());
    });
    array = array.map((data) => {
      return (data = "<li>" + data + "</li>");
    });
    console.log(array);
    searchbar.classList.add("active");
    showSuggestions(array);
    let alllist = suggestionbox.querySelectorAll("li");
    for (let i = 0; i < alllist.length; i++) {
      alllist[i].setAttribute("onclick", "select(this)");
    }
  } else {
    searchbar.classList.remove("active");
  }
};

function select(element) {
  let selectedUserData = element.textContent;
  inputbox.value = selectedUserData;
}

function showSuggestions(list) {
  let listData;
  if (!list.length) {
    userValue = inputbox.value;
    listData = "<li>" + userValue + "</li>";
  } else {
    listData = list.join("");
  }
  suggestionbox.innerHTML = listData;
}
