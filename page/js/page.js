
// Select img in product details 

var mainImage = document.getElementById('mainImage');
var smallImage = document.querySelectorAll('.small-img');

const changeIMG = function () {
    smallImage.forEach((img) => {
        img.onclick = function () {
            mainImage.src = img.src;
        }
    })
}
changeIMG();