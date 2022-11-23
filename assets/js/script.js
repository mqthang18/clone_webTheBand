


var eles = document.getElementsByClassName('res');

console.log(eles)
console.log(eles.length)
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
