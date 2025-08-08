const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const filterButtons = document.querySelectorAll(".filter-btn");

let currentIndex = 0;
galleryImages.forEach((img, index) =>{
  img.addEventListener("click",()=>{
    currentIndex = index;
    showImage();
    lightbox.classList.remove("hidden");
  });

});

function showImage() {
    const imgSrc = galleryImages[currentIndex].src;
    lightboxImg.src = imgSrc;
}

 prevBtn.addEventListener("click" , () => {
     currentIndex= (currentIndex -1 + galleryImages.length) % galleryImages.length;
     showImage();

 });

 nextBtn.addEventListener("click" , ()=>{
 currentIndex = (currentIndex + 1) % galleryImages.length; 
 showImage();
 });
closeBtn.addEventListener("click" ,()=>{
  lightbox.classList.add("hidden");
});

filterButtons.forEach(btn =>{
  btn.addEventListener("click" ,() =>{
    const filter = btn.getAttribute("data-filter");
    galleryImages.forEach(img =>{
      const parent = img.parentElement;
      const category = parent.getAttribute("data-category");
      if (filter === "all" || category === filter) {
        parent.style.display = "block";
      }
      else {
        parent.style.display = "none";
      }
    });
  });
});