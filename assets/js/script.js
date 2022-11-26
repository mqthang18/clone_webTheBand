


var eles = document.getElementsByClassName('res');

// console.log(eles)
// console.log(eles.length)
function OpenNavigation() {
    for (let i = 0; i < eles.length; i++) {
        // console.log(eles[i].getAttribute('class'))
        if (eles[i].getAttribute('class').includes('hide')) {
            eles[i].setAttribute('class', 'res show');
            if (i == eles.length-1) {
                eles[i].setAttribute('class', 'initHide res show');
            }
        } else {
            eles[i].setAttribute('class', 'res hide');
            if (i == eles.length-1) {
                eles[i].setAttribute('class', 'initHide res hide');
            }
        }
    }
}

var slides = document.getElementsByClassName('wrapbanner');

function SliderChange(slides, j) {
    // console.log(2)
    var slides = document.getElementsByClassName('wrapbanner');
    for (let i = 0; i < slides.length; i++) {
        if (i != j) {
            slides[i].setAttribute('class', 'wrapbanner');
        } else {
            slides[i].setAttribute('class', 'wrapbanner show');
        }
    }
}

var j = 0;

setInterval(function() {

    if (j < 2) {
        SliderChange(slides, j)
        j++;
    }
    else {
        SliderChange(slides, j);
        j = 0
    }
}, 2000)
