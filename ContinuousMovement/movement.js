        window.onload = function () {
            var oBtn1 = document.getElementById("btn1");
            var oBtn2 = document.getElementById("btn2");
            var oDiv1 = document.getElementById("div1");
            var oUl  = oDiv1.getElementsByTagName("ul")[0];
            var oLi  = oUl.getElementsByTagName("li");
            var oImg = oUl.getElementsByTagName("img");
            var speed = 2;
            oUl.innerHTML += oUl.innerHTML;

            oUl.style.width = oLi[0].offsetWidth * oLi.length + 'px';
            function move() {
                if (oUl.offsetLeft < -oUl.offsetWidth / 2) {
                    oUl.style.left = '0';
                }
                if (oUl.offsetLeft > 0 ){
                    oUl.style.left = -oUl.offsetWidth / 2 + 'px';
                }
                oUl.style.left=oUl.offsetLeft + speed + 'px';
            }
            var timer = setInterval(move, 30);
            oBtn1.onclick = function () {
                speed = 2;
            };
            oBtn2.onclick = function () {
                speed = -2;
            }
            for(var i = 0; i < oImg.length; ++i){
                oImg[i].style.zIndex = 1;
                oImg[i].onmouseover = function(){
                    clearInterval(timer);
                    this.style.marginLeft = '-50px';
                    this.style.marginTop = '0px';
                    this.style.width = '400px';
                    this.style.height = '300px';
                    this.style.zIndex = 999;
                }
                oImg[i].onmouseout = function(){
                    timer = setInterval(move,30);
                    this.style.width = oLi[0].offsetWidth;
                    this.style.height = '200px';
                    this.style.marginLeft = '0';
                    this.style.marginTop = '50px';
                    this.style.zIndex = 1;
                }
            }


        }