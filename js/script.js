let myPara = document.getElementById('para'),
    data = myPara.getAttribute('data-para'),
    myDiv = document.querySelector('.container'),
    myArr = ["class-one", "class-two", "class-three", "class-four"],
    randomKey = Math.floor(Math.random() * myArr.length);

    
    (function Effect_Text() {
        let i = 0;
        window.onload = function () {
            
            myDiv.classList.toggle(myArr[randomKey]);
            var myVar = setInterval(function () {
                myPara.textContent += data[i];
                i++;
                if (i > data.length - 1)
                    clearInterval(myVar);
        }, 50)
    }

})()