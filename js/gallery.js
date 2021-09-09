var y = document.querySelectorAll(".qq")
var imgOfGallary = Array.from(document.querySelectorAll(".img-gallary img"))
var layreOfGallary = document.querySelector('.layre')
var covarOflayre = document.querySelector('.layre .layre-img')
var Allphoto = document.querySelector('.all-img ')
var imgX = document.querySelectorAll("img")
var currantIndex;
var next = document.querySelector(".fa-arrow-alt-circle-right")
var prev = document.querySelector(".fa-arrow-alt-circle-left")
var exit = document.querySelector(".fa-times-circle")
var btnLogOut = document.querySelector("#LogOut-Btn")
next.addEventListener("click", nextSlide)
prev.addEventListener("click", prevSlide)
exit.addEventListener("click", esc)

var ImagesFromApi;
var http = new XMLHttpRequest;
http.open("GET", "https://api.themoviedb.org/3/trending/all/day?api_key=7df7a995a9cb46caad1003dc4c0e0c65")
http.send();
http.addEventListener("readystatechange", function () {

    if (http.readyState == 4 && http.status == 200) {

        ImagesFromApi = JSON.parse(http.response)
        ImagesFromApi = ImagesFromApi.results
        displayImg();
    }
})



function displayImg() {



    var allImg = ""
    for (var i = 0; i < ImagesFromApi.length; i++) {
        allImg +=
            `<div class="col-md-4 p-3 ">
         <div class="img-gallary  shadow-lg">
             <img src="https://image.tmdb.org/t/p/w500${ImagesFromApi[i].poster_path}"   class="img-fluid qq" alt="">
             <h4 class="  original_title  m-1">${ImagesFromApi[i].original_title}</h4>
             <h4 class="  original_title  "> vote_average :- ${ImagesFromApi[i].vote_average}</h4>

         </div>
     </div>
         `
        
    }

    for (let i = 0; i < imgOfGallary.length; i++) {

    }

    Allphoto.innerHTML = allImg

    imgOfGallary = Array.from( document.querySelectorAll(".img-fluid"));
    console.log(imgOfGallary);
    test();


}



// for (var i = 0; i < z.length; i++) {
//     z[i].addEventListener("click", display)
// }
// function display(e) {
//     var currantImg = e.target.src
//     currantIndex = z.indexOf(e.target)
//     layreOfGallary.classList.remove("d-none")
//         covarOflayre.style.backgroundImage = `url(${currantImg})`
// }



function test(){
    
for (var i = 0; i < imgOfGallary.length; i++) {
    imgOfGallary[i].addEventListener("click", display)
}
}

function display(e) {
    var currantImg = e.target.src;
    currantIndex = imgOfGallary.indexOf(e.target)
    layreOfGallary.classList.remove("d-none")
    covarOflayre.style.backgroundImage = `url(${currantImg})`
}


function prevSlide() {


    currantIndex--;

    if (currantIndex < 0) {

        currantIndex = imgOfGallary.length - 1;
    }
    var imgSrc = imgOfGallary[currantIndex].getAttribute('src')
    covarOflayre.style.backgroundImage = `url(${imgSrc})`

}
function nextSlide() {


    currantIndex++;
    if (currantIndex == imgOfGallary.length) {
        currantIndex = 0;
    }
    var imgSrc = imgOfGallary[currantIndex].getAttribute('src')
    covarOflayre.style.backgroundImage = `url(${imgSrc})`

}

function esc() {
    layreOfGallary.classList.add("d-none")
}


function search(val) {
    var allImg = ""
    for (var i = 0; i < x.length; i++) {
        if (x[i].original_title.includes(val)) {
            allImg +=
                `<div class="col-md-4 p-3">
            <div class="img-gallary">
                <img " src="https://image.tmdb.org/t/p/w500${x[i].poster_path}"   class="img-fluid x" alt="">
               
                <h3 class=" py-3 my-3 original_title ">${x[i].original_title}</h3>
            </div>
        </div>
            `
        }
        Allphoto.innerHTML = allImg
    }
}
btnLogOut.addEventListener("click", logOut)
function logOut() {
    window.location.href = "index.html"
}
