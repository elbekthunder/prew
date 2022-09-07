var countDowndate = new Date ("september 10  2022 12:30:00").getTime();
    
    var countDownFunction = setInterval (function(){
    
    var now = new Date().getTime();

    var distance = countDowndate - now;

    var days = Math.floor(distance / (1000*60*60*24));
    var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    var secouds = Math.floor((distance % (1000*60)) / 1000);

    document.getElementById("timer").innerHTML =
      days + " : " + hours + " : " + minutes + " : " + secouds + "  ";
      
      if(distance < 0) {
         clearInterval(countDownFunction);
         Document.getElementById("timer").innerHTML = "время истекло";
      }
    },1000)

    let intervalId;
    
    document.querySelectorAll('.dropdown-toggle').forEach(e => {
      e.addEventListener('click',e => {
        const menu = e.currentTarget.dataset.path;
        document.querySelectorAll('.dropdown-menu').forEach(e => {
          if (!document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
             e.classList.remove('menu-active');
             e.classList.remove('open');
             document.querySelector(`[data-target=${menu}]`).classList.add('menu-active');
             intervalId = setTimeout(() => {
              document.querySelector(`[data-target=${menu}]`).classList.add('open');
             }, 0);
            }  

          if (document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
             clearTimeout(intervalId);
             document.querySelector(`[data-target=${menu}]`).classList.remove('menu-active');
             intervalId = setTimeout(() => {
              document.querySelector(`[data-target=${menu}]`).classList.remove('open');
             }, 0);
          } 

          window.onclick = e => {
            if (e.target == document.querySelector(`[data-target=${menu}]`) || e.target == document.querySelector(`[data-path=${menu}]`)) {
              return;
            } 
            else {
              document.querySelector(`[data-target=${menu}]`).classList.remove('menu-active');
              document.querySelector(`[data-target=${menu}]`).classList.remove('open');
            }
          }

        });
      });
    });