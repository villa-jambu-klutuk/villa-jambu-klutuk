/* Villa Jambu Klutuk - app.js (tanpa dependensi) */
const CONFIG={
  wa:'6281553334976',
  maps:'https://maps.app.goo.gl/6kj6jm3er1odXguR8',
  ig:'https://www.instagram.com/jambuklutukvillaofficial?mdxt=NDI1bDFkcmZlb2t2',
  tt:'https://www.tiktok.com/@jambuklutuk89?_r=1&_t=ZS-9AanD5Vuq3d',
  // Isi harga per villa di sini (contoh: 'Rp 1.500.000 / malam'). Jika null, tampil 'Tanyakan via WhatsApp'.
  villaPrice:{'villa-1':null,'villa-2':null,'villa-3':null,'villa-4':null}
};
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const I=n=>`assets/img/${n}.webp`,T=I;
const P=(n,a)=>({n,a});
const ALT={"kamar-1": "Kamar tidur dengan TV dan jendela besar", "km-1": "Kamar mandi dalam", "hall-karaoke": "Hall karaoke luas dengan sound system", "dapur": "Dapur, kulkas, dan area makan", "kolam": "Private pool dalam ruangan", "kamar-2": "Kamar dengan balkon view pegunungan", "kamar-3": "Kamar tidur dengan jendela kaca besar", "billiard": "Ruang billiard gratis di lantai 3", "view-1": "Gunung Welirang dari balkon", "balkon-1": "Balkon panjang berlantai marmer", "rooftop-1": "Rooftop luas dengan bangunan A-frame", "rooftop-2": "Balkon rooftop dengan view kebun", "rooftop-3": "Rooftop dengan view gunung", "rooftop-4": "Rooftop berlantai kayu", "view-2": "Panorama Gunung Welirang"};
const PL=l=>l.map(n=>P(n,ALT[n]));
const V1=PL(["kolam", "hall-karaoke", "kamar-1", "kamar-2", "kamar-3", "km-1", "dapur", "billiard", "view-2", "view-1", "balkon-1", "rooftop-1", "rooftop-2", "rooftop-3", "rooftop-4"]);
const VILLAS={
 'villa-1':{t:'Villa Jambu Klutuk 1',h:'Villa Jambu Klutuk 1: kamar luas, kolam pribadi, hall karaoke',live:true,s:V1,
  p:['Villa keluarga di Padusan, Pacet, dengan balkon menghadap Gunung Welirang. Cocok untuk kumpul keluarga besar, acara sekolah, dan rombongan.'],
  c:['Rooftop & view 360°','Free billiard Lt.3','Private pool','Full karaoke & Google TV','WiFi unlimited free','Air panas','Parkir 8 mobil','CCTV 24 jam'],
  g:[['🌐 Akses & Fasilitas Umum',[['Akses & WiFi','Free High-Speed WiFi Unlimited Free'],['Kapasitas Parkir','Muat hingga 8-9 Mobil (3 mobil parkir dalam + 6 mobil parkir luar)'],['Keamanan','Terjaga dengan sistem CCTV 24 Jam'],['Lokasi Strategis','3 Menit ke Wisata Air Panas Padusan & Pusat Kuliner Pacet']]],
   ['🚪 Lantai 1: Kamar & Akses Privat',[['Kamar Tidur 1','Bed 160x200, Kamar Mandi Dalam, Android TV 33 Inci'],['Kamar Tidur 2','Bed 160x200, Kamar Mandi Dalam, LED TV 32 Inci, View Langsung ke Private Pool'],['Parkir Dalam','Garasi / Area Parkir Dalam khusus untuk 3 Mobil']]],
   ['🎤 Lantai 2: Area Utama, Hiburan & Dapur',[['Master Bedroom (36 m²)','TV 40", Kamar Mandi Dalam (Air Panas), Balkon Privat View Pegunungan'],['Kamar Deluxe (30 m²)','TV 40", Kamar Mandi Dalam (Air Panas), Balkon View Pegunungan'],['3 Single Room (20 m²)','Kamar Mandi Dalam (Air Panas), View Kebun Asri Pegunungan'],['Ruang Keluarga','Sofa Santai + Kulkas 2 Pintu (Kapasitas s/d 20 Orang)'],['Hall Karaoke Eksklusif','Kapasitas 35 Orang, Google TV 55", Speaker Premium Behringer, Sofabed, Karpet & Balkon View Gunung Welirang'],['Dapur Lengkap & BBQ','Peralatan masak lengkap (Magiccom, Wajan, Cobek) + Alat Panggang (Grill Pan & Panggangan Ikan)']]],
   ['🎱 Lantai 3: Area billiard & Rooftop 360°',[['Ruang billiard Gratis','Free Bilyard Room eksklusif untuk bersantai bersama rombongan'],['Rooftop Terluas 360°','Pemandangan panorama 360° Gunung Welirang, Gunung Arjuno, & Gunung Penanggungan'],['Citylight View','Pemandangan indah gemerlap lampu kota Pacet di malam hari']]]]},
 'villa-2':{t:'Villa Jambu Klutuk 2',live:false},'villa-3':{t:'Villa Jambu Klutuk 3',live:false},'villa-4':{t:'Villa Jambu Klutuk 4',live:false}
};
const GAL={dalam:{t:'Di Dalam',l:PL(['kamar-1','kamar-2','kamar-3','km-1','hall-karaoke','dapur','kolam','billiard'])},luar:{t:'Luar & View',l:PL(['view-2','view-1','balkon-1','rooftop-1','rooftop-2','rooftop-3','rooftop-4'])}};
const VIDS=['galeri'];
const KILAT=['view-2','kolam','hall-karaoke','rooftop-1','kamar-2','billiard'];
const TABS=[['room','ROOM'],['facility','FACILITY'],['gallery','GALLERY'],['location','LOCATION'],['news','NEWS & REVIEWS']];
const VN=Object.entries(VILLAS).map(([k,v])=>[k,v.t]);
const SUBS={room:VN,facility:VN,gallery:[['dalam','Di Dalam'],['luar','Luar & View'],['video','Video'],['360','Street View & 360°']],location:VN,news:[['tips','Tips & Info'],['ulasan','Ulasan Tamu']]};
const ARTS=[
 ['Menyiapkan gathering keluarga besar di Pacet','Bagi tugas sejak jauh hari: satu keluarga membawa bahan makan, satu lagi mengurus hiburan. Karaoke dan billiard di vila membuat anak-anak, orang tua, dan sepupu punya kegiatan masing-masing. Bawa jaket karena udara Pacet sejuk, terutama malam hari.'],
 ['Acara sekolah dan rombongan: apa yang perlu disiapkan','Beri tahu kami jumlah peserta, tanggal, dan jenis acara lebih dulu agar susunan ruangan bisa disiapkan. Rooftop dan hall karaoke lantai 2 cocok untuk sesi bersama; parkir 8-9 mobil memudahkan rombongan.'],
 ['Cara memesan vila lewat WhatsApp','Isi formulir pemesanan di bawah, lalu tekan kirim. Pesan terisi otomatis ke WhatsApp kami (0815-5333-4976) sehingga kami bisa langsung mengecek ketersediaan tanggal Anda.']
];
const REV=[['Bersih, luas, enak buat acara kumpul-kumpul keluarga / acara sekolah.'],['Kamar semua fasilitas lengkap oke banget, ada karaoke dan kolam renang.'],['Tempatnya sangat nyaman cocok untuk acara keluarga besar dengan pemandangan indah dan sejuk.']];
const REPLY='Terima kasih banyak atas kunjungannya. Kami senang keluarga Anda nyaman di sini. Sampai berjumpa lagi di Pacet. (Pak Agung)';
const SEARCH=[['Kolam renang','facility/villa-1','kolam renang pool air'],['Parkir & keamanan','facility/villa-1','garasi parkir mobil cctv'],['Kamar & balkon','facility/villa-1','kamar tidur balkon welirang'],['Karaoke','facility/villa-1','karaoke nyanyi'],['Rooftop & billiard','facility/villa-1','rooftop billiard billiard atap'],['WiFi & fasilitas','facility/villa-1','wifi fasilitas dapur'],['Galeri foto','gallery/dalam','foto galeri gambar'],['Video','gallery/video','video'],['Lokasi & alamat','location/villa-1','lokasi alamat maps peta padusan'],['Rute ke vila','location/villa-1','rute arah jalan'],['Ulasan tamu','news/ulasan','ulasan review rating bintang'],['Our Rates (tarif)','#/rates','tarif harga sewa rates'],['Pesan sekarang','#booking','booking pesan reservasi check-in'],['Contact Us','#/contact','kontak hubungi telepon whatsapp contact'],['FAQ & aturan','#/rates','faq tanya jawab aturan']];

const WA=t=>`https://wa.me/${CONFIG.wa}?text=${encodeURIComponent(t)}`;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/* ---------- Lightbox ---------- */
const lb=$('#lb');let lbList=[],lbI=0;
function openLB(list,i){lbList=list;lbI=i;showLB();if(!lb.open)lb.showModal()}
function showLB(){const x=lbList[lbI];$('#lb-img').src=I(x.n);$('#lb-img').alt=x.a;$('#lb-cap').textContent=x.a+'  ('+(lbI+1)+'/'+lbList.length+')'}
const stepLB=d=>{lbI=(lbI+d+lbList.length)%lbList.length;showLB()};
$('.lb-x').onclick=()=>lb.close();$('.lb-prev').onclick=()=>stepLB(-1);$('.lb-next').onclick=()=>stepLB(1);
lb.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')stepLB(-1);if(e.key==='ArrowRight')stepLB(1)});
lb.addEventListener('click',e=>{if(e.target===lb)lb.close()});
let lx=0;lb.addEventListener('touchstart',e=>lx=e.touches[0].clientX,{passive:true});
lb.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-lx;if(Math.abs(d)>50)stepLB(d>0?-1:1)});

/* ---------- Carousel ---------- */
let timer;
function slider(slides){
  const el=$('.slider');if(!el)return;const tr=$('.track',el),dots=$$('.dot',el);let i=0,n=slides.length;
  const go=k=>{i=(k+n)%n;tr.style.transform=`translateX(-${i*100}%)`;dots.forEach((d,j)=>d.setAttribute('aria-current',j===i));$('.cap',el).textContent=slides[i].a};
  $('.prev',el).onclick=()=>{go(i-1);rs()};$('.next',el).onclick=()=>{go(i+1);rs()};
  dots.forEach((d,j)=>d.onclick=()=>{go(j);rs()});
  el.tabIndex=0;el.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){go(i-1)}if(e.key==='ArrowRight'){go(i+1)}});
  let sx=null;el.addEventListener('pointerdown',e=>sx=e.clientX);
  el.addEventListener('pointerup',e=>{if(sx===null)return;const d=e.clientX-sx;sx=null;if(Math.abs(d)>45){go(d>0?i-1:i+1);rs()}else if(!e.target.closest('button'))openLB(slides,i)});
  const rs=()=>{clearInterval(timer);if(!matchMedia('(prefers-reduced-motion:reduce)').matches)timer=setInterval(()=>go(i+1),5500)};
  el.onmouseenter=()=>clearInterval(timer);el.onmouseleave=rs;rs();go(0);
}

/* ---------- Render ---------- */
const pgHead=(ic,t)=>`<div class="pg-head"><span class="pg-ic">${ic}</span><h2>${t}</h2></div>`;
const parseHash=()=>{const m=location.hash.match(/^#\/(\w+)\/?([\w-]*)/);return m?[m[1],m[2]]:['room','villa-1']};
function render(){
  clearInterval(timer);
  let [tab,sub]=parseHash();const PG=tab==='contact'||tab==='rates';
  if(PG){$('#hero').hidden=true;$('#tabs').innerHTML=TABS.map(([k,l])=>`<button class="tab" role="tab" aria-selected="false" onclick="location.hash='#/${k}/${SUBS[k][0][0]}'">${l}</button>`).join('');$('#main').innerHTML=`<div class="card page">${tab==='contact'?pageContact():pageRates()}</div>`;return}
  if(!SUBS[tab])tab='room';if(!SUBS[tab].some(s=>s[0]===sub))sub=SUBS[tab][0][0];
  $('#hero').hidden=!(tab==='room'&&sub==='villa-1');
  $('#tabs').innerHTML=TABS.map(([k,l])=>`<button class="tab" role="tab" aria-selected="${k===tab}" onclick="location.hash='#/${k}/${SUBS[k][0][0]}'">${l}</button>`).join('');
  const subs=`<div class="subs" role="tablist" aria-label="Sub-menu">${SUBS[tab].map(([k,l])=>`<button class="sub" role="tab" aria-selected="${k===sub}" onclick="location.hash='#/${tab}/${k}'">${l.replace('Villa Jambu Klutuk','<span class="lg">Villa Jambu Klutuk</span><span class="sh">Villa</span>')}</button>`).join('')}</div>`;
  let body='',after=null;
  if(tab==='room'){
    const f=VILLAS[sub];
    if(!f.live){body=`<div class="info"><h2>${f.t}</h2><div class="note">Informasi, foto, dan fasilitas ${f.t} sedang kami siapkan dan akan tampil di halaman ini.</div><p>Ingin tahu ketersediaan lebih awal? Hubungi kami dan sebutkan lokasi yang Anda minati.</p><div class="row"><a class="btn btn-moss" href="${WA('Halo Villa Jambu Klutuk, saya ingin bertanya tentang '+f.t)}" target="_blank" rel="noopener">Tanya via WhatsApp</a></div></div>`}
    else{
    body=`<div class="slider" role="region" aria-roledescription="carousel" aria-label="Foto ${esc(f.t)}"><div class="track">${f.s.map((s,j)=>`<div class="slide" style="--bg:url('${new URL(I(s.n),document.baseURI).href}')"><img src="${I(s.n)}" alt="${esc(s.a)}" ${j?'loading="lazy"':''}></div>`).join('')}</div><button class="arr prev" aria-label="Foto sebelumnya">‹</button><button class="arr next" aria-label="Foto berikutnya">›</button><span class="cap"></span><div class="dots">${f.s.slice(0,12).map((_,j)=>`<button class="dot" aria-label="Foto ${j+1}"></button>`).join('')}</div></div>
    <div class="info"><h2>${f.h}</h2>${f.p.map(x=>`<p>${x}</p>`).join('')}<ul class="chips">${f.c.map(x=>`<li>${x}</li>`).join('')}</ul>
    <div class="row"><a class="btn btn-moss" href="#booking">Pesan sekarang</a><a class="btn btn-line" href="#/facility/${sub}">Lihat fasilitas lengkap</a><a class="btn btn-line" href="${WA('Halo Villa Jambu Klutuk, saya ingin bertanya tentang '+f.t)}" target="_blank" rel="noopener">Tanya via WhatsApp</a></div></div>`;
    after=()=>slider(f.s)}
  }else if(tab==='facility'){
    const f=VILLAS[sub];
    body=!f.live?`<div class="info"><h2>${f.t}</h2><div class="note">Fasilitas ${f.t} sedang kami siapkan dan akan tampil di halaman ini.</div><div class="row"><a class="btn btn-moss" href="${WA('Halo Villa Jambu Klutuk, saya ingin bertanya fasilitas '+f.t)}" target="_blank" rel="noopener">Tanya via WhatsApp</a></div></div>`
    :`<div class="info"><h2>Fasilitas ${f.t}</h2><div class="fgrid">${f.g.map(([t,l])=>`<section class="fcard"><h3>${t}</h3><ul>${l.map(([k,v])=>`<li><b>${k}:</b> ${v}</li>`).join('')}</ul></section>`).join('')}</div><div class="row"><a class="btn btn-moss" href="#booking">Pesan sekarang</a><a class="btn btn-line" href="#/room/${sub}">Lihat foto kamar</a></div></div>`;
  }else if(tab==='gallery'){
    if(GAL[sub]){const l=GAL[sub].l;body=`<p class="sec-sub">Ketuk foto untuk memperbesar. Geser untuk berpindah foto.</p><div class="pgrid">${l.map((x,j)=>`<button data-i="${j}" aria-label="Perbesar: ${esc(x.a)}"><img src="${T(x.n)}" alt="${esc(x.a)}" loading="lazy"></button>`).join('')}</div>`;after=()=>$$('.pgrid button').forEach(b=>b.onclick=()=>openLB(l,+b.dataset.i))}
    else if(sub==='video')body=`<div class="vgrid">${VIDS.map(n=>`<video controls preload="metadata" playsinline src="assets/video/${n}.mp4#t=0.5"></video>`).join('')}</div><p class="sec-sub">Video Villa Jambu Klutuk 1. Video Villa 2 sampai 4 menyusul.</p>`;
    else body=`<div class="info"><h2>Street View & 360°</h2><p>Lihat sekeliling vila dan jalan menuju lokasi langsung di Google Maps sebelum Anda berangkat.</p><div class="row"><a class="btn btn-moss" href="${CONFIG.maps}" target="_blank" rel="noopener">Buka Google Maps</a></div></div>`;
  }else if(tab==='location'){
    const q='8GFR+4H Padusan, Pacet, Mojokerto',vv=VILLAS[sub];
    body=!vv.live?`<div class="info"><h2>${vv.t}</h2><div class="note">Lokasi ${vv.t} akan ditambahkan di sini. Hubungi kami untuk alamat terbaru.</div><div class="row"><a class="btn btn-moss" href="${WA('Halo, saya ingin menanyakan lokasi '+vv.t)}" target="_blank" rel="noopener">Tanya lokasi via WhatsApp</a></div></div>`
    :`<iframe class="map-frame" title="Peta Villa Jambu Klutuk 1" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=${encodeURIComponent(q)}&output=embed"></iframe>
    <div class="info"><h2>Villa Jambu Klutuk 1, Padusan Pacet</h2><p>Jalan Raya Padusan kavling S1, Padusan, Kec. Pacet, Kabupaten Mojokerto, Jawa Timur 61374.<br>Kode Plus: 8GFR+4H Padusan. Buka setiap hari, tutup pukul 22.00.</p><div class="row"><a class="btn btn-moss" href="${CONFIG.maps}" target="_blank" rel="noopener">Buka di Google Maps</a><a class="btn btn-line" href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(q)}" target="_blank" rel="noopener">Petunjuk arah</a></div>
    <h2 id="rute">Rute</h2><p>Arahkan navigasi ke Padusan, Pacet, lalu ikuti Jalan Raya Padusan sampai kavling S1. Parkir luas muat hingga 8-9 mobil: 3 mobil di dalam villa dan 6 mobil di luar.</p><div class="note">Tips: bagikan pin lokasi dari Google Maps ke seluruh rombongan agar semua kendaraan tiba di titik yang sama.</div></div>`;
  }else{
    body=sub==='tips'?`<div class="info"><h2>Tips & informasi</h2>${ARTS.map((a,j)=>`<details class="art" ${j?'':'open'}><summary>${a[0]}</summary><p>${a[1]}</p></details>`).join('')}</div>`
    :`<div class="info"><h2>Kata mereka yang sudah menginap</h2><div class="score"><b>4.7</b><span class="stars">★★★★★</span><span>39 ulasan Google Maps</span></div>${REV.map(r=>`<div class="rev"><q>${r[0]}</q><small>Ulasan Google Maps</small></div>`).join('')}<div class="reply"><b>Tanggapan pemilik:</b> ${REPLY}</div><div class="row"><a class="btn btn-line" href="${CONFIG.maps}" target="_blank" rel="noopener">Baca semua ulasan</a></div></div>`;
  }
  const IC={room:['⌂','Room'],facility:['✓','Facility'],gallery:['▣','Gallery'],location:['⚲','Location'],news:['✎','News & Reviews']};
  $('#main').innerHTML=`<div class="card">${pgHead(...IC[tab])}${subs}${body}</div>`;
  after&&after();
}

function side(){
  const K=KILAT.map(n=>P(n,ALT[n]));
  $('#side').innerHTML=`<div class="card"><h3>Pernak pernik</h3><div class="thumbs">${K.map((x,j)=>`<button data-i="${j}" aria-label="Perbesar foto ${j+1}"><img src="${T(x.n)}" alt="${esc(x.a)}" loading="lazy"></button>`).join('')}</div></div>
  <div class="card"><h3>Ulasan pengunjung</h3><div class="score"><b>4.7</b><div><span class="stars">★★★★★</span><br><small>39 ulasan Google Maps</small></div></div>${REV.map(r=>`<div class="rev"><q>${r[0]}</q></div>`).join('')}<div class="reply"><b>Pak Agung (pemilik):</b> ${REPLY.replace(' (Pak Agung)','')}</div></div>
  <div class="card"><h3>Terhubung dengan kami</h3><div class="soc"><a class="ig" href="${CONFIG.ig}" target="_blank" rel="noopener">Instagram <small>@jambuklutukvillaofficial</small></a><a class="tt" href="${CONFIG.tt}" target="_blank" rel="noopener">TikTok <small>@jambuklutuk89</small></a><a class="wa" href="${WA('Halo Villa Jambu Klutuk, saya ingin bertanya.')}" target="_blank" rel="noopener">WhatsApp <small>0815-5333-4976</small></a></div></div>`;
  $$('.thumbs button').forEach(b=>b.onclick=()=>openLB(K,+b.dataset.i));
}

const RULES=['Waktu check-in dan check-out disepakati saat pemesanan.','Jaga kebersihan kolam, kamar, dan area bersama.','Karaoke dan musik mohon dihentikan pada jam istirahat agar tetangga nyaman.','Kerusakan fasilitas karena kelalaian akan didiskusikan bersama pemilik.','Jumlah tamu menyesuaikan kapasitas; tanyakan untuk rombongan besar.'];
const FAQ=[['Berapa mobil yang bisa parkir?','Parkir muat hingga 8-9 mobil: 3 mobil di dalam villa lantai 1 dan 6 mobil di luar.'],['Apa saja tipe kamarnya?','Lantai 1 ada 2 kamar. Lantai 2 ada Master Bedroom 36 m², Kamar Deluxe 30 m², dan 3 Single Room 20 m². Semua kamar punya kamar mandi dalam.'],['Apakah ada karaoke, billiard, dan WiFi?','Ya. Karaoke YouTube lengkap dengan audio mixer dan speaker, ruang billiard gratis, serta WiFi unlimited free.'],['Bagaimana cara memesan?','Klik Pesan sekarang atau hubungi WhatsApp 0815-5333-4976. Kami buka setiap hari sampai pukul 22.00.'],['Apakah bisa untuk acara sekolah atau rombongan?','Bisa. Hall karaoke menampung hingga 35 orang dan family room hingga 20 orang. Sebutkan jumlah peserta saat memesan.']];
function pageContact(){
  const q='8GFR+4H Padusan, Pacet, Mojokerto';
  return pgHead('✉','Contact Us')+`<dl class="dl"><dt>Nama</dt><dd>Villa Jambu Klutuk Pacet Mojokerto<br><small>Agen Persewaan Rumah Peristirahatan & Vila Keluarga</small></dd>
  <dt>Alamat</dt><dd>Jalan Raya Padusan kavling S1, Padusan, Kec. Pacet, Kabupaten Mojokerto, Jawa Timur 61374<br><small>Kode Plus: 8GFR+4H Padusan</small></dd>
  <dt>Jam buka</dt><dd>Buka setiap hari, tutup pukul 22.00</dd>
  <dt>Telepon / WA</dt><dd><a href="https://wa.me/${CONFIG.wa}" target="_blank" rel="noopener">0815-5333-4976</a></dd>
  <dt>Instagram</dt><dd><a href="${CONFIG.ig}" target="_blank" rel="noopener">@jambuklutukvillaofficial</a></dd>
  <dt>TikTok</dt><dd><a href="${CONFIG.tt}" target="_blank" rel="noopener">@jambuklutuk89</a></dd>
  <dt>Google Maps</dt><dd><a href="${CONFIG.maps}" target="_blank" rel="noopener">Buka lokasi</a></dd></dl>
  <div class="row"><a class="btn btn-wa" href="${WA('Halo Villa Jambu Klutuk, saya ingin bertanya.')}" target="_blank" rel="noopener">Chat WhatsApp</a><a class="btn btn-moss" href="#booking">Pesan sekarang</a></div>
  <iframe class="map-frame" title="Peta lokasi" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=${encodeURIComponent(q)}&output=embed"></iframe>`}
function pageRates(){
  const L=VILLAS['villa-1'].g;
  return pgHead('Rp','Our Rates')+`<p class="sec-sub">Harga bergantung pada hari dan jumlah tamu. Hubungi kami untuk penawaran terbaik.</p>`+
  Object.entries(VILLAS).map(([k,v])=>`<div class="rt"><div class="rt-h"><b>${v.t}</b><span>${CONFIG.villaPrice[k]||'Tanyakan via WhatsApp'}</span></div>${v.live?`<ul>${['Lantai 1: 2 kamar. Lantai 2: Master Bedroom 36 m², Kamar Deluxe 30 m², 3 Single Room 20 m²','Kamar mandi dalam di semua kamar, air panas di lantai 2','Family Room maks. 20 orang, Hall Karaoke maks. 35 orang','Private pool, free billiard Lt.3, rooftop view 360°, WiFi unlimited free','Parkir 8-9 mobil, CCTV 24 jam'].map(x=>`<li>${x}</li>`).join('')}</ul>`:'<p class="mut">Informasi harga dan fasilitas segera hadir.</p>'}</div>`).join('')+
  `<p class="mut">* Harga pada hari libur besar atau long weekend dapat berbeda. Tanyakan sebelum memesan.</p><div class="row"><a class="btn btn-wa" href="#booking">Pesan sekarang</a></div>
  <h3 class="h3">Aturan singkat</h3><ul class="rules">${RULES.map(x=>`<li>${x}</li>`).join('')}</ul>
  <h3 class="h3">Pertanyaan yang sering diajukan</h3><div class="faq">${FAQ.map(q=>`<details><summary>${q[0]}</summary><p>${q[1]}</p></details>`).join('')}</div>`}
function blocks(){
  $('#bk-wrap').innerHTML=`<div class="bk"><div class="card"><h3>Cek ketersediaan</h3>
   <form class="f" id="bf" novalidate>
    <label class="full">Nama<input name="nama" required autocomplete="name"></label>
    <label class="full">Pilih villa<select name="villa">${VN.map(([k,t])=>`<option>${t}${VILLAS[k].live?'':' (segera hadir)'}</option>`).join('')}</select></label>
    <label>Check-in<input type="date" name="in" required></label>
    <label>Check-out<input type="date" name="out" required></label>
    <label>Jumlah tamu<input type="number" name="tamu" min="1" max="60" value="10" required></label>
    <label>Keperluan<select name="acara"><option>Liburan keluarga</option><option>Gathering / reuni</option><option>Acara sekolah</option><option>Acara kantor</option><option>Lainnya</option></select></label>
    <label class="full">Catatan (opsional)<textarea name="cat" rows="2" placeholder="Contoh: butuh tambahan kasur, datang malam"></textarea></label>
    <p class="err" id="err" role="alert"></p>
    <button class="btn btn-wa full" style="color:#2b1408">Kirim ke WhatsApp</button>
   </form></div>
   <div class="card"><h3>Aturan singkat</h3><ul class="rules">${RULES.map(x=>`<li>${x}</li>`).join('')}</ul><p class="mut">Tarif lengkap ada di halaman <a href="#/rates" onclick="document.getElementById('pesan').close()">Our Rates</a>.</p></div></div>`;
  const f=$('#bf'),d=new Date().toISOString().slice(0,10);f.in.min=d;f.out.min=d;
  f.onsubmit=e=>{e.preventDefault();const v=new FormData(f),err=$('#err');
    if(!v.get('nama').trim()||!v.get('in')||!v.get('out')){err.textContent='Lengkapi nama, tanggal check-in, dan check-out.';return}
    if(v.get('out')<=v.get('in')){err.textContent='Tanggal check-out harus setelah check-in.';return}
    err.textContent='';
    const t=`Halo Villa Jambu Klutuk, saya ${v.get('nama')}.\nSaya ingin cek ketersediaan ${v.get('villa')}:\nCheck-in: ${v.get('in')}\nCheck-out: ${v.get('out')}\nJumlah tamu: ${v.get('tamu')}\nKeperluan: ${v.get('acara')}\nCatatan: ${v.get('cat')||'-'}`;
    window.open(WA(t),'_blank','noopener')};
}

/* ---------- Pencarian ---------- */
const q=$('#q'),res=$('#results');
q.oninput=()=>{const v=q.value.trim().toLowerCase();if(!v){res.hidden=true;return}
  const m=SEARCH.filter(s=>(s[0]+' '+s[2]).toLowerCase().includes(v));
  res.innerHTML=m.length?m.map(s=>`<li><a href="${s[1][0]==='#'?s[1]:'#/'+s[1]}">${s[0]}</a></li>`).join(''):'<li style="padding:8px 10px">Tidak ditemukan. Coba "kolam" atau "rute".</li>';res.hidden=false};
$('#search').onsubmit=e=>{e.preventDefault();const a=$('a',res);a&&a.click()};
res.onclick=()=>{res.hidden=true;q.value=''};
document.addEventListener('click',e=>{if(!e.target.closest('#search'))res.hidden=true});

/* ---------- Jendela Pesan Sekarang ---------- */
const pd=$('#pesan');
function openPesan(id){if(!pd.open)pd.showModal();const t=id&&$(id);setTimeout(()=>{if(t&&id!=='#tarif')t.scrollIntoView({block:'start'});else pd.scrollTo(0,0)},30)}
$('.p-x').onclick=()=>pd.close();
addEventListener('hashchange',()=>pd.open&&pd.close());
pd.addEventListener('click',e=>{if(e.target===pd)pd.close()});
document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a)return;const h=a.getAttribute('href');if(h==='#booking'){e.preventDefault();openPesan('#booking')}});

/* ---------- Init ---------- */
addEventListener('hashchange',()=>{if(/^#\/\w+/.test(location.hash)){render();/^#\/(contact|rates)/.test(location.hash)?scrollTo({top:0,behavior:'smooth'}):$('#tabs').scrollIntoView({block:'start',behavior:'smooth'})}});
$$('[data-home]').forEach(a=>a.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'})));
const tt=$('#totop');tt.onclick=()=>scrollTo({top:0,behavior:'smooth'});
addEventListener('scroll',()=>tt.hidden=scrollY<700,{passive:true});
$('#yr').textContent=new Date().getFullYear();
render();side();blocks();
