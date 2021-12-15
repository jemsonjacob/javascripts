
let lightTheme = "styles/light.css";
let darkTheme = "styles/dark.css";



// Swaps the style sheet in order to  achieve dark mode.
function changeTheme() {
  let darkMode = document.getElementById("dark-mode");
  let theme = document.getElementById("theme");
  if (theme.getAttribute("href") == lightTheme) {
    theme.href = darkTheme;
    darkMode.innerHTML = "Light Mode 🌞";
  } else {
    theme.href = lightTheme;
    darkMode.innerHTML = "Dark Mode 🌙";
  }
}



//for display num
// function displayValue(num){
//     document.querySelector("#result").value += num
// }
var displayValue=(num)=>result.value += num

//for clear

// function clearBox(){
//     document.querySelector('#result').value = ""

// }
var clearBox=()=>result.value=""

// function evalExpr(){
//     let val=document.querySelector("#result").value
//     let res=eval(val)
//     document.querySelector("#result").value=res
// }
var evalExpr = ()=>result.value=eval(result.value)