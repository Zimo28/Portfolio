// Github Profile Redirection
function myGithub() {

  var choice = confirm("Do you want to continue?");

  if(choice){
      alert("Thank You For Visiting My GitHub.");
      window.location.href = "https://github.com/Zimo28";
  }else{
      alert("Action Cancelled.");
  }

}

// Explore More Redirection
function exploreMore() {
  window.location.href = "pages/about.html";
}

// Footer Year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
