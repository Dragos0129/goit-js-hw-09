!function(){var t,e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");e.addEventListener("click",(function(){t=setInterval((function(){document.body.style.backgroundColor=function(){for(var t="0123456789ABCDEF",e="#",n=0;n<6;n++)e+=t[Math.floor(16*Math.random())];return e}()}),1e3),e.disabled=!0})),n.addEventListener("click",(function(){clearInterval(t),document.body.style.backgroundColor="",e.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.b7d5dc9e.js.map