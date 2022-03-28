var divs = document.querySelectorAll('whomBlock__button'), i = 0;
   change.onclick = function() {
        divs[i].style.display="none";
        i = (i < (divs.length - 1))?i+1:0;
        divs[i].style.display="block";
   }