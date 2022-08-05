const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

function start() {
    // preloader 
    const templatePreload = `<div id="preloader">
	    <div class="lds-facebook"><div></div><div></div><div></div></div>
    </div>`;
    document.body.insertAdjacentHTML("beforebegin", templatePreload);

    if (bar) {
        bar.onclick = () => {
            nav.classList.add('active');
        }
    }
    if (close) {
        close.onclick = () => {
            nav.classList.remove('active');
        }
    }

    // product to detail product
    const product = document.querySelectorAll('.pro');
    product.forEach((pro) => {
        pro.onclick = () => {
            window.location.href = 's-product.html';
        }
    })

    // Hover zoom img product 
    const imgCover = document.querySelector('.image-cover');
    const imgWrapper = document.querySelector('.img-Wrapper');
    const image = document.getElementById('mainImage');

    if (!imgWrapper) return;
    let imageWrapperWidth = imgWrapper.offsetWidth;
    let imageWrapperHeight = imgWrapper.offsetHeight;

    imgCover.addEventListener('mousemove', handelHoverImage);

    function handelHoverImage(e) {
        const pX = e.pageX;
        const pY = e.pageY;
        image.style = 'width: auto; height: auto; max-height: unset';
        let imageWidth = image.offsetWidth;
        let imageHeight = image.offsetHeight;

        let spaceX = (imageWidth  / 2.5 - imageWrapperWidth) * 2;
        let spaceY = (imageHeight / 2.5 - imageWrapperHeight) * 2;

        imageWidth = imageWidth + spaceX;
        imageHeight = imageHeight + spaceY;

        let ratioX = (imageWidth / imageWrapperWidth) / 2;
        let ratioY = (imageHeight / imageWrapperHeight) / 2;

        let x = pX * ratioX;
        let y = pY * ratioY;

        image.style = `left: ${-x}px; top: ${-y}px; width: auto; height: auto; max-height:unset; transform: none;`;

    }

    imgCover.addEventListener('mouseleave', handelLeaveImage);

    function handelLeaveImage(e) {
        image.style = "";
    }
}

start();

$(window).on('load', function () {
    "use strict";
    /*=========================================================================
            Preloader
    =========================================================================*/
    $("#preloader").delay(750).fadeOut('slow');
});