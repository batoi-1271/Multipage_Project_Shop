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

    // // Hover zoom img product 
    // const imgCover = document.querySelector('.image-cover');
    // const imgWrapper = document.querySelector('.img-Wrapper');
    // const image = document.getElementById('mainImage');

    // imgCover.addEventListener('mousemove', handelHoverImage);

    // function handelHoverImage(e) {
    //     const pX = e.pageX;
    //     const pY = e.pageY;
    //     image.style = 'width: auto; height: auto; max-height: unset';
    //     let imageWidth = image.offsetWidth;
    //     let imageHeight = image.offsetHeight;
    //     let imageWrapperWidth = imgWrapper.offsetWidth;
    //     let imageWrapperHeight = imgWrapper.offsetHeight;

    //     let x = pX;

    //     image.style = `left: ${x}px; top: ${0}px; width: auto; height: auto; max-height:unset`;

    // }
}

start();

$(window).on('load', function () {
    "use strict";
    /*=========================================================================
            Preloader
    =========================================================================*/
    $("#preloader").delay(750).fadeOut('slow');
});