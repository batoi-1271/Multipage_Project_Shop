const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

function start() {
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
            window.location.href='s-product.html';
        }
    })
}

start();