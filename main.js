document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("back-to-top");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 200) {
            btn.style.display = "block";
            btn.style.opacity = 1;
        } else {
            btn.style.display = "none";
            btn.style.opacity = 0;
        }
    });

    btn.addEventListener("click", function(event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

document.querySelectorAll('#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        top: 100,
        behavior: 'smooth'
      });
    });
  });

// document.addEventListener('DOMContentLoaded', function() {
//     const video = document.getElementById('floatingVideo');
//     const content1 = document.getElementById('content1');

//     function isElementInViewport(el) {
//         const rect = el.getBoundingClientRect();
//         const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
//         const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    
//         const yOffset = 0.9* viewportHeight; // 10% 的裕量
//         const xOffset = 0.9 * viewportWidth;  // 10% 的裕量

//         return (
//             rect.top + yOffset <= viewportHeight &&
//             rect.left + xOffset <= viewportWidth &&
//             rect.bottom - yOffset >= 0 &&
//             rect.right - xOffset >= 0
//         );
//     }

//     window.addEventListener('scroll', function() {
//         if (isElementInViewport(content1)) {
//             video.style.display = 'block';
//         } else {
//             video.style.display = 'none';
//         }
//     });
// });

// document.addEventListener("DOMContentLoaded", function() {
//     let video1 = document.getElementById("video1");
//     video1.addEventListener("click", function() {
//       window.location.hash = "content1";
//     });
  
//     let video2 = document.getElementById("video2");
//     video2.addEventListener("click", function() {
//       window.location.hash = "content2";
//     });
  
//     // ... repeat for other videos
//   });


// var e_count = 3; // set number of examples included;

// function showexample(n) {

//     for (let i = 1; i < e_count + 1; i++) {
//         if (n == i) {
//             document.getElementById("example" + i).style.display = "flex";
//             document.getElementById("show" + i).className = "active";
//         } else {
//             document.getElementById("example" + i).style.display = "none";
//             document.getElementById("show" + i).className = "";
//         }
//     }
// };

// showexample(1);

// document.addEventListener('DOMContentLoaded', function() {
//     const gifs = document.querySelectorAll('img');

//     gifs.forEach(gif => {
//         gif.addEventListener('click', function(event) {
//             // Remove 'active' class from all content sections
//             document.querySelectorAll('.content-section').forEach(section => {
//                 section.classList.remove('active');
//             });

//             // Find the target content section using the href of the clicked gif's parent <a> tag
//             const targetSectionId = gif.parentElement.getAttribute('href');
//             const targetSection = document.querySelector(targetSectionId);

//             // Add 'active' class to the target content section
//             if (targetSection) {
//                 targetSection.classList.add('active');
//             }
//         });
//     });
// });