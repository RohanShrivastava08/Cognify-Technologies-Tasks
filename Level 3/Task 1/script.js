let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function changeSlide(n) {
    showSlides((slideIndex += n));
}

showSlides();

let modal = document.getElementById("myModal");
let modalImg = document.getElementById("modalImg");
let thumbnails = document.getElementsByClassName("thumbnail");
let closeBtn = document.getElementsByClassName("close")[0];

for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.getElementsByTagName("img")[0].src;
    });
}

closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
