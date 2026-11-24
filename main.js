(() => {
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const saved=localStorage.getItem('portfolio-theme'); if(saved) document.documentElement.dataset.theme=saved;
$$('.theme').forEach(b=>b.addEventListener('click',()=>{const t=document.documentElement.dataset.theme==='light'?'dark':'light';document.documentElement.dataset.theme=t;localStorage.setItem('portfolio-theme',t)}));
$('.menu')?.addEventListener('click',()=> $('nav').classList.toggle('open'));
$('#filters')?.addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;$$('#filters button').forEach(x=>x.classList.toggle('active',x===b));$$('.project').forEach(p=>p.classList.toggle('hide',b.dataset.filter!=='all'&&p.dataset.type!==b.dataset.filter));});
const details={
digilibrary:['DigiLibrary — Perpustakaan Digital','Konsep website perpustakaan digital dengan katalog, pencarian, filter kategori, detail koleksi, dan bookmark yang disimpan pada browser.',['HTML','CSS','JavaScript','LocalStorage']],
edusmart:['EduSmart — Platform Pembelajaran','Konsep website pembelajaran untuk menyajikan materi, latihan soal, dan kuis interaktif.',['HTML','CSS','JavaScript','DOM']],
visitor:['Visitor Registration','Prototipe formulir pendaftaran pengunjung bertahap dengan rancangan pencatatan ke Google Spreadsheet.',['HTML','CSS','JavaScript','Google Apps Script']],
siapcheck:['SiapCheck GA','Konsep aplikasi checklist untuk mencatat aktivitas dan status pemeriksaan area.',['Google Apps Script','JavaScript','Spreadsheet']],
servicedesk:['IT ServiceDesk','Perancangan konsep website layanan informasi IT dan panduan penanganan kendala umum.',['Web Design','UI/UX','HTML','CSS']]
};
const modal=$('#modal');const close=()=>modal?.classList.add('hidden');
$$('[data-detail]').forEach(b=>b.addEventListener('click',()=>{const d=details[b.dataset.detail];$('#modalTitle').textContent=d[0];$('#modalText').textContent=d[1];$('#modalTags').innerHTML=d[2].map(x=>`<span>${x}</span>`).join('');modal.classList.remove('hidden')}));
$('#close')?.addEventListener('click',close);modal?.addEventListener('click',e=>{if(e.target===modal)close()});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
$('#contactForm')?.addEventListener('submit',e=>{e.preventDefault();const n=$('#name').value.trim(),mail=$('#email').value.trim(),topic=$('#topic').value,msg=$('#message').value.trim(),f=$('#feedback');if(n.length<2||! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)||!topic||msg.length<10){f.textContent='Periksa nama, format email, topik, dan pesan (minimal 10 karakter).';f.className='feedback error';return}f.textContent='Validasi berhasil! Ini formulir demo; pesan belum dikirim ke server.';f.className='feedback success';e.target.reset()});
})();