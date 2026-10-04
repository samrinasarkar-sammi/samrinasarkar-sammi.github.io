const menu=document.querySelector('.menu');const nav=document.querySelector('nav');menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');nav.classList.remove('open')}));const buttons=document.querySelectorAll('[data-filter]');buttons.forEach(button=>button.addEventListener('click',()=>{buttons.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));const filter=button.dataset.filter;let count=0;document.querySelectorAll('.project[data-category]').forEach(p=>{p.hidden=filter!=='all'&&!p.dataset.category.split(' ').includes(filter);if(!p.hidden)count++});document.querySelector('.project-note').hidden=filter!=='all';document.querySelector('#filter-status').textContent=`${count} projects shown`;}));
// Progressive enhancement: content stays visible if observers are unavailable.
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
let revealObserver;
function setupMotion(){
 if(revealObserver)revealObserver.disconnect();
 document.body.classList.remove('motion-ready');
 if(!reducedMotion.matches&&'IntersectionObserver' in window){
  const items=document.querySelectorAll('.reveal');
  items.forEach((el,i)=>{if(el.classList.contains('project'))el.style.setProperty('--reveal-delay',`${(i%3)*70}ms`)});
  revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target)}})},{threshold:0.06,rootMargin:'0px 0px -20px 0px'});
  items.forEach(el=>{if(el.getBoundingClientRect().top<innerHeight)el.classList.add('visible');revealObserver.observe(el)});
  document.body.classList.add('motion-ready');
 }
}
setupMotion();reducedMotion.addEventListener('change',setupMotion);
const progress=document.querySelector('.scroll-progress');const portrait=document.querySelector('.portrait-frame');let framePending=false;
function updateScroll(){const max=document.documentElement.scrollHeight-innerHeight;progress.style.transform=`scaleX(${max>0?Math.min(1,Math.max(0,scrollY/max)):0})`;if(portrait){portrait.style.transform=reducedMotion.matches?'none':`translateY(${Math.min(scrollY*.045,22)}px) rotate(${2-Math.min(scrollY*.004,2)}deg)`}framePending=false;}
addEventListener('scroll',()=>{if(!framePending){framePending=true;requestAnimationFrame(updateScroll)}},{passive:true});addEventListener('resize',updateScroll);updateScroll();
