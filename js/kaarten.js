var modal = document.querySelector(".modal");
var previews = document.querySelectorAll(".list img");
var original = document.querySelector(".full-img");
//var imgText = document.querySelector(".caption");

previews.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add("open");
        original.classList.add("open");
        var originalSrc = preview.getAttribute("data-original");
        original.src = originalSrc;
    });
});

modal.addEventListener("click", (e) => {
    if(e.target.classList.contains("modal")) {
        modal.classList.remove("open");
             original.classList.remove("open");
    }
});



//var knop = document.getElementById("toggle");
//
//toggle.addEventListener("change", () => {
//    document.header.classList.toggle("dark");
//});


