// b4 start
var signupbox = document.getElementById("signupbox");
var loginbox = document.getElementById("loginbox");

function signpart() {
    signupbox.style.display = "none";
    loginbox.style.display = "flex";
  }
function loginpart() {
    signupbox.style.display = "flex";
    loginbox.style.display = "none";
  }
// b4 end            