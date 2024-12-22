document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash");
  const mainContent = document.querySelector("main");
  const isFirstVisit = !localStorage.getItem("visited"); 

  if (isFirstVisit) {
    localStorage.setItem("visited", "true");

    document.body.style.overflow = "hidden";

    setTimeout(() => {
      splash.classList.add("hidden"); 

      setTimeout(() => {
        splash.style.display = "none"; 
        mainContent.classList.add("visible"); 
        document.body.style.overflow = "auto"; 
      }, 1000); 
    }, 5500); 
  } else {

    splash.style.display = "none"; 
    mainContent.classList.add("visible"); 
    document.body.style.overflow = "auto"; 
  }
});