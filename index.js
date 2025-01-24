import{a as F,S as b,i as l}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const w="https://pixabay.com/api/",C="42699555-a78da0bc423c0d9818d6fae0b";async function u(o,t=1,i=15){const{data:a}=await F(`${w}`,{params:{key:C,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:i}});return a}function y(o){return o.map(({webformatURL:t,largeImageURL:i,tags:a,likes:e,views:s,comments:c,downloads:h})=>` <li class="gallery-iteam">
            <a class="gallery-link" href="${i}">
            <img class="gallery-img" src="${t}" alt="${a}" width="360" loading="lazy"></img></a>
              <ul class="inform-list">
                <li class="inform-iteam">
                  <h3 class="inform-title">Likes:</h3>
                  <p class="inform-par">${e}</p>
                </li>
                <li class="inform-iteam">
                  <h3 class="inform-title">Views:</h3>
                  <p class="inform-par">${s}</p>
                </li>
                <li class="inform-iteam">
                  <h3 class="inform-title">Comments:</h3>
                  <p class="inform-par">${c}</p>
                </li>
                <li class="inform-iteam">
                  <h3 class="inform-title">Downloads:</h3>
                  <p class="inform-par">${h}</p>
                </li>
              </ul>
          </li>`).join("")}const L=document.querySelector(".form"),f=document.querySelector(".gallery"),n=document.querySelector(".loader"),r=document.querySelector(".load-more");n.style.display="none";r.style.display="none";let m="",d=1;const p=15,g=new b(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),q=o=>{if(o.preventDefault(),m=o.target.elements.query.value.trim(),f.innerHTML="",!m){l.show({backgroundColor:"#EF4040",message:"Enter the data for the search!",messageColor:"#FFFFFF",position:"topRight"});return}n.style.display="flex",u(m).then(t=>{t.hits.length===0&&l.show({title:"",backgroundColor:"#EF4040",messageColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),d=1,f.insertAdjacentHTML("beforeend",y(t.hits)),g.refresh(),n.style.display="none",d*p<t.totalHits&&(r.style.display="flex")}).catch(t=>{l.show({title:"",backgroundColor:"#EF4040",messageColor:"#FFFFFF",message:`${t.message}`,position:"topRight"})}).finally(()=>o.target.reset())};async function E(){d+=1,r.disabled=!0,r.style.display="none",n.style.display="flex";try{const o=await u(m,d);if(o.hits.length===0){l.info({message:"No results found for your query.",position:"bottomCenter",timeout:5e3}),r.style.display="none",n.style.display="none";return}f.insertAdjacentHTML("beforeend",y(o.hits)),g.refresh(),n.style.display="none",d*p>=o.totalHits?(r.style.display="none",l.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter",timeout:1e4})):r.style.display="flex";const t=document.querySelector(".gallery-iteam");if(t){const i=t.getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"})}}catch(o){l.show({title:"",backgroundColor:"#EF4040",messageColor:"#FFFFFF",message:`${o.message}`,position:"topRight"})}finally{r.disabled=!1}}L.addEventListener("submit",q);r.addEventListener("click",E);
//# sourceMappingURL=index.js.map
