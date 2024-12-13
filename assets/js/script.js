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
let lastScrollTop = 0; // Tracks the last scroll position
const upperBox = document.getElementById('upper-box'); // Select the top section

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY; // Current scroll position

    if (window.innerWidth < 900) { // Only apply for screens below 900px
        if (currentScroll > lastScrollTop) {
            // Scrolling down, hide half of the navbar (50px)
            upperBox.style.transform = 'translateY(-135px)';
        } else {
            // Scrolling up, reset to original position
            upperBox.style.transform = 'translateY(0)';
        }
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevents negative scroll
});
