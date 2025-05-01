document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".hover-image");
    images.forEach((img) => {
      img.style.opacity = "1"; // Reset opacity to default on page load
    });
  });
    document.addEventListener("DOMContentLoaded", function () {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        document.querySelector('.content').style.paddingTop = navbarHeight + "px";
    });

  