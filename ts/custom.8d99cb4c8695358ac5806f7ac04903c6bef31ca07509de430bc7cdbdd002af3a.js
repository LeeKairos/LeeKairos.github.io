(()=>{(function(){var i=document.querySelector(".article-content");if(!i)return;var n=document.createElement("div");n.id="reading-progress",n.setAttribute("aria-hidden","true"),document.body.appendChild(n);var a=!1;function o(){a=!1;var t=document.documentElement,e=t.scrollHeight-t.clientHeight,r=e>0?Math.min(100,Math.max(0,window.scrollY/e*100)):0;n.style.width=r+"%"}function d(){a||(a=!0,requestAnimationFrame(o))}window.addEventListener("scroll",d,{passive:!0}),window.addEventListener("resize",d),o(),document.addEventListener("copy",t=>{var e=window.getSelection();if(e){var r=e.anchorNode;if(!(!r||!i.contains(r))){var c=e.toString();if(!(c.length<50)){var l=t.clipboardData;if(l){var u=document.documentElement.lang.indexOf("zh")===0?`

\u2014\u2014 \u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\uFF1AKairos Lab `+window.location.href:`

\u2014\u2014 Source: Kairos Lab `+window.location.href;l.setData("text/plain",c+u),t.preventDefault()}}}}})})();})();
/*!
 * Kairos Lab — custom scripts (loaded by Stack via layouts/_partials/footer/components/script.html)
 * Reading progress bar: thin bar fixed to the top of article pages,
 * width = how far the reader has scrolled through the article.
 * Copy attribution (2026-11-15): copying a passage from the article
 * appends the source (Kairos Lab + article URL) to the clipboard.
 * Only runs on article pages; uses the theme's --accent-color so it
 * follows light/dark mode and any future colour scheme.
 */
