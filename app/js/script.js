"use strict";

document.addEventListener('DOMContentLoaded', function (e) {
  var botNav = document.getElementById('bot-nav'),
      navMenu = document.querySelectorAll('#top-nav > div'),
      banner = document.querySelector('.banner'),
      bannerPrev = document.querySelector('.banner__arrow.prev'),
      bannerNext = document.querySelector('.banner__arrow.next');
  var bannerLet = 0;
  console.log(bannerPrev);
  setTimeout(function () {
    banner.className = "banner ban0";
  }, 999); // Events

  Array.from(navMenu).map(function (el) {
    // Nav menu slider
    el.addEventListener('mouseover', function (e) {
      var dataNav = el.getAttribute('data-nav');
      botNav.className = dataNav;

      if (botNav.classList.contains(el.getAttribute('data-nav'))) {
        if (document.querySelectorAll('.colored')[0]) {
          document.querySelectorAll('.colored')[0].classList.remove('colored');
        }

        el.classList.add('colored');
      }
    });
  });
  bannerPrev.addEventListener('click', function (e) {
    bannerLet = bannerLet > 0 ? bannerLet - 1 : 2;
    console.log(bannerLet);
    banner.className = "banner ban".concat(bannerLet);
  });
  bannerNext.addEventListener('click', function (e) {
    bannerLet = bannerLet < 2 ? bannerLet + 1 : 0;
    console.log(bannerLet);
    banner.className = "banner ban".concat(bannerLet);
  }); // Functions
  // const wrapper = new Vue({
  //     el: '#wrapper',
  //     data: {
  //       botNavClass: 'first',
  //       bannerCompare: 0
  //     },
  //     methods: {
  //         changeBotNavClass(arg) {
  //             this.botNavClass = arg;
  //         },
  //         changeBannerPrev() {
  //             if(this.bannerCompare === 0) {
  //                 this.bannerCompare = 2
  //             } else {
  //                 this.bannerCompare--;
  //             }
  //             setTimeout(()=> {
  //                 startMatrix();
  //             },0)
  //         },
  //         changeBannerNext() {
  //             if(this.bannerCompare === 2) {
  //                 this.bannerCompare = 0
  //             } else {
  //                 this.bannerCompare++;
  //             }
  //             setTimeout(()=> {
  //                 startMatrix();
  //             },0)
  //         }
  //     }
  // }) 
  // window.addEventListener('scroll', ()=> {
  //     let scrolled = window.pageYOffset || document.scrollTop;
  //     if (scrolled > 150) {
  //     }
  // });
  // '.top-nav__first'
  // '.top-nav__second'
  // '.top-nav__third'
  // '.top-nav__forth'
  // '.top-nav__fifth'
  // bubbles
  // var cont = document.querySelector(".banner__cont1");  
  // function Ball (cn) { 
  //   this.cn = cn; 
  //   let x = 150; 
  //   let y = 0; 
  //   ((cn) => { 
  //   var div = document.createElement("div"); 
  //      cont.appendChild(div); 
  //      div.className = this.cn; 
  //   })(); 
  //   this.g = function () {    
  //     let ob = document.querySelector("."+this.cn);  
  //     x +=  Math.floor(Math.random()*51-25);   
  //     y += Math.floor(Math.random()*51-25); 
  //     ob.style.left = x + "px"; 
  //     ob.style.top = y + "px"; 
  //   }; 
  // }  
  // var zero = new Ball ("zero");   
  // var one = new Ball ("one"); 
  // var two = new Ball ("two");   
  // var three = new Ball ("three"); 
  // var four = new Ball ("four");   
  // var five = new Ball ("five");   
  // var six = new Ball ("six");   
  // var seven = new Ball ("seven"); 
  // var eight = new Ball ("eight");   
  // var nine = new Ball ("nine"); 
  // var ten = new Ball ("ten");   
  // var zero1 = new Ball ("zero1");   
  // var one1 = new Ball ("one1"); 
  // var two1 = new Ball ("two1");   
  // var three1 = new Ball ("three1"); 
  // var four1 = new Ball ("four1");   
  // var five1 = new Ball ("five1");   
  // var six1 = new Ball ("six1");   
  // var seven1 = new Ball ("seven1"); 
  // var eight1 = new Ball ("eight1");   
  // var nine1 = new Ball ("nine1"); 
  // var ten1 = new Ball ("ten1");   
  // wrapper.bubbles.push
  // console.log(wrapper.bubbles)
  // setInterval(() => { 
  //   zero.g();one.g();two.g();three.g();four.g();five.g();six.g();seven.g();eight.g();nine.g();ten.g();zero1.g();one1.g();two1.g();three1.g();four1.g();five1.g();six1.g();seven1.g();eight1.g();nine1.g();ten1.g();
  // },50); 
  // bubbles
  // matrix

  var startMatrix = function startMatrix() {
    var c = document.getElementById('c');
    var ctx = c.getContext('2d');
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    var columns_w = c.width / 15;
    var columns_h = c.height / 25.2;
    var index = [];

    for (var i = 0; i < columns_w; ++i) {
      index[i] = 0;
    }

    var timer;
    var randomN = [];

    for (var i = 0; i < columns_w; ++i) {
      randomN[i] = Math.floor(Math.random() * columns_h + 1);

      if (randomN[i] < 6) {
        randomN[i] = getRndInteger(6, columns_h);
      }
    }

    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    function rain() {
      for (var m = 0; m < columns_w; m++) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.9)";
        ctx.fillRect(c.width / columns_w * m, c.height / columns_h * (index[m] - (columns_h - randomN[m])), c.width / columns_w, c.height / columns_h * columns_h * 2);

        for (var x = 2; x < columns_h; x++) {
          ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
          ctx.fillRect(c.width / columns_w * m, c.height / randomN[m] - c.height / randomN[m] * x, c.width / columns_w, c.height / columns_h * index[m]);
        }

        if (c.height / columns_h * (index[m] - (columns_h - randomN[m])) > c.height * 1.2) {
          randomN[m] = getRndInteger(6, columns_h);
          index[m] = 0;
        }
      }
    }

    ctx.fillRect(0, 0, c.width, c.height);
    ctx.font = "20px 'Press Start 2P'";

    function drawMatrix() {
      ctx.fillStyle = "rgba(0, 0, 0, 1)";
      ctx.fillRect(0, 0, c.width / columns_w * columns_w, c.height / columns_h * columns_h);

      for (var i = 0; i < columns_w; i++) {
        for (var j = 0; j < columns_h + 25.2; j++) {
          ctx.fillStyle = "rgb(0, 255, 0, 1)";
          ctx.fillText(Math.floor(Math.random() * 10), 15 * i, 25.2 * j);
        }
      }

      rain();

      for (var l = 0; l < columns_w; l++) {
        index[l]++;
      }
    }

    timer = setInterval(function () {
      if (document.querySelector('.banner__cont1') != null) {
        drawMatrix();
      } else {
        clearInterval(timer);
        console.log('wow');
      }
    }, 40);
  }; // matrix
  // const startMatrix = () => {      
  //   var c = document.getElementById('c');
  //   var ctx = c.getContext('2d');
  //   c.width = window.innerWidth;
  //   c.height = window.innerHeight;
  //   var columns_w = c.width / 15;
  //   var columns_h = c.height / 25.2;
  //   var randomN = [];
  //   var index = [];
  //   var timer;
  //   for (var i = 0; i < columns_w; ++i) {
  //       index[i] = 0;
  //   }
  //   for (var i = 0; i < columns_w; ++i) {
  //       randomN[i] = (Math.floor(Math.random() * columns_h + 1));
  //       if (randomN[i] < 6) {
  //         randomN[i] = getRndInteger(6, columns_h);
  //       }
  //   }
  //   function getRndInteger(min, max) {
  //     return Math.floor(Math.random() * (max - min)) + min;
  //   }
  //   function rain() {
  //   for (var m = 0; m < columns_w; m++) {
  //     ctx.fillStyle = "rgba(0, 0, 0, 0.9)";
  //     ctx.fillRect((c.width / columns_w * m), c.height / columns_h * ( index[m] -  (columns_h-randomN[m])) , c.width / columns_w, c.height / columns_h * columns_h*2);
  //     for (var x = 2; x < columns_h; x++) {
  //       ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  //       ctx.fillRect((c.width / columns_w * m), (c.height / randomN[m])-((c.height / randomN[m])*x), (c.width / columns_w), (c.height / columns_h * index[m]));
  //     }
  //     if ( c.height / columns_h * (index[m]  -  (columns_h-randomN[m])) > c.height*1.2) {
  //       randomN[m] = getRndInteger(6, columns_h);
  //       index[m]=0;
  //     } 
  //   }  
  //   }
  //   ctx.fillRect(0,0,c.width,c.height);
  //   ctx.font = "15px 'Press Start 2P'";
  //   function drawMatrix() {
  //     ctx.fillStyle = "rgba(0, 0, 0, 1)";
  //     ctx.fillRect(0,0, c.width / columns_w * columns_w, c.height / columns_h * columns_h);
  //           for (var i = 0; i < columns_w; i++) {
  //             for (var j = 0; j < columns_h + 25.2; j++) {
  //               ctx.fillStyle = "rgb(0, 255, 0, 1)";
  //               ctx.fillText(Math.floor(Math.random()*10), 15 * i, 25.2 * j);
  //             }
  //           }
  //   rain();
  //   for (var l = 0; l < columns_w; l++) {
  //     index[l]++;
  //   }
  //   } 
  //   timer = setInterval(() => {
  //       if(document.querySelector('.banner__cont1') != null) {
  //       drawMatrix()
  //       }else {
  //           clearInterval(timer);
  //           console.log('wow')
  //       }
  //   },100);
  // }

});