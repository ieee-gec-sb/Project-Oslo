// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("top").style.display = "block";
    } else {
        document.getElementById("top").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    scrollTo(document.body, document.body.offsetTop, 500);
    scrollTo(document.documentElement, document.documentElement.offsetTop, 30);
}

/**
 * Adapted from https://stackoverflow.com/questions/41571310/scroll-to-top-link-for-website-using-pure-javascript-withoutjquery
 * @param {document.element} element Element to scrool to
 * @param {Number} pos Relative offset to element
 * @param {Number} duration total time of animation
 */
function scrollTo( element, pos, duration) {
    if (duration < 0) return
    
    let distance = pos - element.scrollTop;
    let perTick  = distance / duration * 2;

    setTimeout( () => {
        element.scrollTop = element.scrollTop + perTick;
        scrollTo(element, pos , duration - 2);
    }, 10);
}

