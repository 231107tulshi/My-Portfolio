window.addEventListener("scroll", function () {
    let sections = document.querySelectorAll("section");
    let links = document.querySelectorAll("nav a");
  
    sections.forEach(function (section, index) {
      if (window.scrollY >= section.offsetTop - 50 && window.scrollY < section.offsetTop + section.offsetHeight) {
        links[index].classList.add("active");
      } else {
        links[index].classList.remove("active");
      }
    });
  });
  