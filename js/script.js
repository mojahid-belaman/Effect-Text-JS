let myPara = document.getElementById('para');
let data = myPara.getAttribute('data-para');

(function Effect_Text() {
    let i = 0;
    window.onload = function () {
        var myVar = setInterval(function () {
            myPara.textContent += data[i];
            i++;
            if (i > data.length - 1)
                clearInterval(myVar);
        }, 50)
    }

})()