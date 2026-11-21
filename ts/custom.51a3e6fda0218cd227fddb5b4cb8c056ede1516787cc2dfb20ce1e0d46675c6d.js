(()=>{(function(){var a=document.querySelector(".article-content");if(!a)return;var n=document.createElement("div");n.id="reading-progress",n.setAttribute("aria-hidden","true"),document.body.appendChild(n);var r=!1;function t(){r=!1;var i=document.documentElement,o=i.scrollHeight-i.clientHeight,l=o>0?Math.min(100,Math.max(0,window.scrollY/o*100)):0;n.style.width=l+"%"}function e(){r||(r=!0,requestAnimationFrame(t))}window.addEventListener("scroll",e,{passive:!0}),window.addEventListener("resize",e),t(),document.addEventListener("copy",i=>{var o=window.getSelection();if(o){var l=o.anchorNode;if(!(!l||!a.contains(l))){var d=o.toString();if(!(d.length<50)){var c=i.clipboardData;if(c){var s=document.documentElement.lang.indexOf("zh")===0?`

\u2014\u2014 \u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\uFF1A\u039A\u03B1\u03B9\u03C1\u03CC\u03C2 Lab `+window.location.href:`

\u2014\u2014 Source: \u039A\u03B1\u03B9\u03C1\u03CC\u03C2 Lab `+window.location.href;c.setData("text/plain",d+s),i.preventDefault()}}}}})})();(function(){var a=document.getElementById("TableOfContents");if(a){var n=a.closest("section.widget");if(n){n.classList.add("toc-widget");var r=document.body,t=document.createElement("button");t.type="button",t.className="toc-expand-tab",t.setAttribute("aria-label","\u5C55\u5F00\u76EE\u5F55"),t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg><span>\u76EE\u5F55</span>',t.addEventListener("click",function(){r.classList.remove("toc-collapsed")}),r.appendChild(t);var e=document.createElement("button");e.type="button",e.className="toc-collapse-btn",e.setAttribute("aria-label","\u6536\u8D77\u76EE\u5F55"),e.innerHTML='<span>\u6536\u8D77</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>',e.addEventListener("click",function(){r.classList.add("toc-collapsed")}),n.appendChild(e)}}})();})();
/*!
 * Kairos Lab — custom scripts (loaded by Stack via layouts/_partials/footer/components/script.html)
 * Reading progress bar: thin bar fixed to the top of article pages,
 * width = how far the reader has scrolled through the article.
 * Copy attribution (2026-11-15): copying a passage from the article
 * appends the source (Kairos Lab + article URL) to the clipboard.
 * Only runs on article pages; uses the theme's --accent-color so it
 * follows light/dark mode and any future colour scheme.
 */
