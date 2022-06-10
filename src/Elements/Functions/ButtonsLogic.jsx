
function isHigher(a, b, c) {
    if (a < b) {
    //    count();
       c.shift();
    } else window.location.href = "/gameover";
};

function isLower(a, b, c) {
    if (a > b) {
        // count();
        c.shift();
    } else window.location.href = "/gameover";
};

function isEven(a, b, c) {
    if (a === b) {
        // count();
        c.shift();
    } else window.location.href = "/gameover";
};

export {isHigher, isLower, isEven}







