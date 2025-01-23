import{a as b,S as F,i as f}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const L="https://pixabay.com/api/",q="42699555-a78da0bc423c0d9818d6fae0b";async function u(o,t=1,a=15){const{data:r}=await b(`${L}`,{params:{key:q,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:a}});return r}function y(o){return o.map(({webformatURL:t,largeImageURL:a,tags:r,likes:e,views:s,comments:l,downloads:g})=>` <li class="gallery-list">
            <a class="gallery-link" href="${a}">
            <img class="gallery-img" src="${t}" alt="${r}" width="360" loading="lazy"></img></a>
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
                  <p class="inform-par">${l}</p>
                </li>
                <li class="inform-iteam">
                  <h3 class="inform-title">Downloads:</h3>
                  <p class="inform-par">${g}</p>
                </li>
              </ul>
          </li>`).join("")}const w=document.querySelector(".form"),m=document.querySelector(".gallery"),c=document.querySelector(".loader"),i=document.querySelector(".load-more");c.style.display="none";i.style.display="none";let d="",n=1;const p=15,h=new F(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),S=o=>{if(o.preventDefault(),d=o.target.elements.query.value.trim(),m.innerHTML="",!d){f.show({backgroundColor:"#EF4040",message:"Enter the data for the search!",messageColor:"#FFFFFF",position:"topRight"});return}c.style.display="flex",u(d).then(t=>{t.hits.length===0&&f.show({title:"",backgroundColor:"#EF4040",messageColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n=1,m.insertAdjacentHTML("beforeend",y(t.hits)),h.refresh(),c.style.display="none",n*p<t.totalHits&&(i.style.display="flex")}).catch(t=>{console.log(t.message)}).finally(()=>o.target.reset())};async function E(){n+=1,i.disabled=!0,i.style.display="none",c.style.display="flex";try{const o=await u(d,n);m.insertAdjacentHTML("beforeend",y(o.hits)),h.refresh(),c.style.display="none",n*p>=o.totalHits?(btnLM.style.display="none",f.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter",timeout:1e3})):btnLM.style.display="flex";const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}catch(o){console.log(o.message)}finally{i.disabled=!1}}w.addEventListener("submit",S);i.addEventListener("click",E);
//# sourceMappingURL=index.js.map
