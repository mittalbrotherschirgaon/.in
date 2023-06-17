document.addEventListener("DOMContentLoaded", function() {
  const slideshow1 = document.getElementById("slideshow1");
  const slideshow2 = document.getElementById("slideshow2");

  // Initialize the first slideshow
  const slides1 = slideshow1.querySelectorAll(".slide");
  let currentIndex1 = 0;

  slides1[currentIndex1].classList.add("active");

  function showNextSlide1() {
    slides1[currentIndex1].classList.remove("active");
    currentIndex1 = (currentIndex1 + 1) % slides1.length;
    slides1[currentIndex1].classList.add("active");
  }

  setInterval(showNextSlide1, 3000);

  // Initialize the second slideshow
  const slides2 = slideshow2.querySelectorAll(".slide");
  let currentIndex2 = 0;

  slides2[currentIndex2].classList.add("active");

  function showNextSlide2() {
    slides2[currentIndex2].classList.remove("active");
    currentIndex2 = (currentIndex2 + 1) % slides2.length;
    slides2[currentIndex2].classList.add("active");
  }

  setInterval(showNextSlide2, 4000);
});



// document.addEventListener("DOMContentLoaded", function() {
//   const slides = document.querySelectorAll(".slide");
//   let currentIndex = 0;

//   // Show the first slide initially
//   slides[currentIndex].classList.add("active");

//   // Function to show the next slide
//   function showNextSlide() {
//     slides[currentIndex].classList.remove("active");
//     currentIndex = (currentIndex + 1) % slides.length;
//     slides[currentIndex].classList.add("active");
//   }

//   // Automatically switch to the next slide every 3 seconds
//   setInterval(showNextSlide, 3000);

 
// });

document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll(".question");
  
    questions.forEach(function(question) {
      question.addEventListener("click", function() {
        this.classList.toggle("active");
        const answer = this.nextElementSibling;
        if (answer.style.display === "block") {
          answer.style.display = "none";
        } else {
          answer.style.display = "block";
        }
      });
    });
  });
  