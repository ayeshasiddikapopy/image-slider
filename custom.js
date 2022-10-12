
let slideIndex = 1;
showSlide(slideIndex);

function showSlide(n){
    //slides
    let slides = document.querySelectorAll(".mySlides");
    let slideArr = Array.from(slides);

        slideArr.map((item) => {
            item.style.display = "none";
        })

        if(n > slideArr.length){
            slideIndex = 1
        }
        if(n < 1){
            slideIndex = slideArr.length
        }

    slideArr[slideIndex - 1].style.display = "block";

    // dots
    let dot = document.querySelectorAll(".demo");
    let dotArr = Array.from(dot);
        dotArr.map((items) => {
            items.className = items.className.replace(" active" , "");
        });
    dot[slideIndex - 1].className += " active";
   //demo[slideIndex - 1].className += " active";  // akhane demo dile slide hoi kintu -- captiotext e demo dile kaj hoi na keno?

    
    //caption
    let captionText = document.getElementById("caption");
    captionText.innerHTML = dot[slideIndex - 1].alt;
    // captionText.innerHTML = demo[slideIndex - 1].alt;
}

function plusSlides(n){
    showSlide(slideIndex += n)
}
function currentSlide(n){
    showSlide(slideIndex = n)
}