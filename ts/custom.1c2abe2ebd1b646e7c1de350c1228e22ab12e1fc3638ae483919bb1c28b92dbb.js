(()=>{(function(){var d=document.querySelector(".article-content");if(!d)return;var e=document.createElement("div");e.id="reading-progress",e.setAttribute("aria-hidden","true"),document.body.appendChild(e);var t=!1;function n(){t=!1;var i=document.documentElement,a=i.scrollHeight-i.clientHeight,o=a>0?Math.min(100,Math.max(0,window.scrollY/a*100)):0;e.style.width=o+"%"}function r(){t||(t=!0,requestAnimationFrame(n))}window.addEventListener("scroll",r,{passive:!0}),window.addEventListener("resize",r),n()})();})();
/*!
 * Kairos Lab — custom scripts (loaded by Stack via layouts/_partials/footer/components/script.html)
 * Reading progress bar: thin bar fixed to the top of article pages,
 * width = how far the reader has scrolled through the article.
 * Only runs on article pages; uses the theme's --accent-color so it
 * follows light/dark mode and any future colour scheme.
 */
