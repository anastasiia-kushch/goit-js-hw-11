(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const u="https://pixabay.com/api/",m="41741201-12a642cf53882fe64e8e82723",d=document.querySelector(".search-form"),c=document.querySelector(".img-container");d.addEventListener("submit",r=>{r.preventDefault();const t=d.querySelector(".search-input").value;t.trim()!==""?(c.innerHTML='<p class="loading-message">Loading images, please wait...</p>',f(t)):alert("Please enter a search query.")});const f=r=>{const t=`${u}?key=${m}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`;fetch(t).then(n=>{if(!n.ok)throw new Error(`Response is not success: ${n.status}`);return n.json()}).then(n=>{p(n.hits)}).catch(n=>{console.error(n)})},p=r=>{c.innerHTML="",r.length>0?r.forEach(t=>{const n=document.createElement("div");n.classList.add("img-item");const s=document.createElement("img");s.src=t.webformatURL,s.alt=t.tags;const e=document.createElement("div");e.classList.add("image-info");const o=document.createElement("p");o.textContent=`Likes: ${t.likes}`;const i=document.createElement("p");i.textContent=`Views: ${t.views}`;const a=document.createElement("p");a.textContent=`Comments: ${t.comments}`;const l=document.createElement("p");l.textContent=`Downloads: ${t.downloads}`,e.appendChild(o),e.appendChild(i),e.appendChild(a),e.appendChild(l),n.appendChild(s),n.appendChild(e),c.appendChild(n)}):c.innerHTML="<p>Sorry, there are no images matching your search query. Please try again!</p>"};
//# sourceMappingURL=commonHelpers.js.map
