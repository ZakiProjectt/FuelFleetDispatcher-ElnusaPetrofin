/* ===== ASET GAMBAR: ganti path di bawah dengan file Anda (taruh di folder img/) ===== */
const IMG={logo:'img/logo.png',logoWatermark:'img/logo-watermark.png',avatar:'img/avatar-zaki.png',driver:'img/driver.png',refresh:'img/ic-refresh.svg',bell:'img/ic-bell.svg',home:'img/ic-home.svg',fleet:'img/ic-fleet.svg',inspect:'img/ic-inspect.svg',reroute:'img/ic-reroute.svg',pump:'img/ic-pump.svg',nozzle:'img/ic-nozzle.svg',chat:'img/ic-chat.svg',pin:'img/ic-pin.svg',spbu:'img/spbu.jpg',truckRed:'img/truck-red.png',truckBlue:'img/truck-blue.png',truckWhite:'img/truck-mini-white.png',truckCompart:'img/truck-compartment.png',truckMini:'img/truck-marker.png',truckFront:'img/truck-front.png',truckBack:'img/truck-back.png',cap32:'img/kapasitas-32000l.png',cap24:'img/kapasitas-24000l.png',cap16:'img/kapasitas-16000l.png',tr0:'img/truck-red-hino340.png',tr1:'img/truck-red-volvo.png',tr2:'img/truck-red-isuzu.png',tr3:'img/truck-red-hino500.png',tb0:'img/truck-blue-hino340.png',tb1:'img/truck-blue-volvo.png',tb2:'img/truck-blue-isuzu.png',tb3:'img/truck-blue-hino500.png',terminal:'img/ic-terminal.svg',finishPump:'img/ic-finish-pump.svg',truckRoute:'img/truck-route.png',pinSpbu:'img/pin-spbu.png',spbuUnika:'img/spbu-unika.jpg',truckTop:'img/truck-top.png',truckSpec:'img/truck-spec.png',truckPertalite:'img/truck-pertalite.png',map:'img/map-semarang.png'};
function hydrate(){document.querySelectorAll('img[data-img]').forEach(i=>{const u=IMG[i.dataset.img];if(i.getAttribute('src')!==u){i.classList.remove('miss');i.onerror=()=>i.classList.add('miss');i.src=u}})}
const FUELS=[["Pertamax Turbo","RON 90","#e0231b"],["Pertalite","RON 90","#3f8a0a"],["Dex","CN 53","#0f4d12"],["Pertamax","RON 92","#0a6bc8"],["Pertamax Green","RON 95","#c000b8"],["Biosolar","CN 48","#6b4522"]];
const S=[
["gombel","Gombel","Jl. Setia Budi, Tinjomoyo, Banyumanik",'u',[21,40,20,35,18,50],908,845],
["sampangan","Sampangan","Jl. Menoreh Timur IV, Gajahmungkur",'u',[3,3,6,9,4,11],792,486],
["banjardowo","Banjardowo","Jl. Kaligawe Raya, Banjardowo, Genuk",'u',[21,40,11,35,18,19],1114,266],
["pemuda","Pemuda","Jl. Pemuda No.59-63, Semarang Tengah",'u',[9,12,8,15,6,10],882,336],
["kalibanteng","Kalibanteng","Jl. Siliwangi No.440, Semarang Barat",'u',[7,10,9,13,5,12],764,377],
["ahmadyani","Ahmad Yani","Jl. Ahmad Yani No.157-159, Semarang Sel.",'u',[12,9,10,14,8,13],918,405],
["krasak","Krasak","Jl. Krasak, Gajahmungkur",'u',[8,11,7,10,6,9],730,570],
["pamularsih","Pamularsih","Jl. Pamularsih Raya No.50, Semarang Barat",'n',[62,70,58,66,60,64],856,350],
["gajahmungkur","Gajahmungkur","Jl. Letnan Jenderal S. Parman No.29a",'n',[55,60,52,63,58,61],851,519],
["srondol","Srondol","Jl. Setia Budi No.205, Srondol Kulon",'n',[66,71,60,59,62,68],862,440],
["undip","UNDIP","Jl. Prof. Soedarto, Tembalang",'n',[72,64,61,70,66,69],878,621],
["unika","Unika","Jl. Pawiyatan Luhur, Bendan Duwur",'n',[75,85,70,72,68,77],974,434],
["syariah","Syariah","Jl. Kaligawe Raya, Trimulyo, Genuk",'n',[58,63,60,67,61,65],1060,330],
["untung","Untung Suropati","Jl. Untung Suropati, Manyaran",'f',[96,98,95,97,99,96],690,470],
["patemon","Patemon","Jl. Mr. Koesbiyono, Patemon",'f',[94,97,98,95,96,99],830,720],
["butuh","Butuh","Jl. Raya Salatiga-Solo, Kaligandu",'f',[97,95,96,98,94,97],1100,700]];
const CL={u:"#d32f2f",n:"#7ab51d",f:"#0057b8"},LB={u:"Urgent",n:"Normal",f:"Full"};
const FLEET=[["Volvo FH16, Gender 6×4",32000,"Pertamax Turbo, Pertalite, Pertamax, Dex","Volvo FH16 (16.000 cc), 780 HP"],["Hino 500 Series, FM 260",16000,"Pertamax, Dex","Hino FM 260, Mesin J08E"],["Isuzu Giga FVR 245 PS 4×2",24000,"Pertamax Green, Biosolar, Pertalite, Dex","Isuzu Giga FVR 245 PS"]];
const BLUEU=[8,10,9,10];
/* Lebar tiap truk (px) di "Pilih Armada" - samakan dengan nilai W di Figma */
const TW=[178,159,125,94];
/* Ukuran gambar layar 3 (Inspeksi): side/top/spec = % lebar area, fb = px (tampak depan & belakang) */
const SZ={side:88,top:88,spec:88,fb:110};
const TRUCKS=[["Hino FM 340 TH (Tractor Head)","40.000 L",15,4],["Volvo FH16, Gender 6×4","32.000 L",30,5],["Isuzu Giga FVR 245 PS 4×2","24.000 L",20,2],["Hino 500 Series, FM 260","16.000 L",20,2]];
const CCOL=["#7fb8ea","#c07cbf","#8fb27e","#f2807a"],CN=[["Pertamax","RON 92"],["Pertamax Green","RON 95"],["Dex","CN 53"],["Pertamax Turbo","RON 90"]];
const CHECKS=["Kesehatan kendaraan dan 4 kompartemen serta driver sudah dicek","Bahan bakar untuk armada cukup sampai titik tujuan","Waktu pengantaran dan kedatangan armada sesuai jadwal","Kelengkapan truk, driver dan tablet agar pusat dapat memantau GPS secara real time","Konfirmasi 4 kompartemen dengan berat murni 10.000 L masing-masing"];
const MCHK=["Kondisi tangki dan isi muatan aman terdokumentasi","Driver telah memverifikasi dan mendapatkan update rute baru (darurat) via chat","Rute telah divalidasi terbebas dari zona padat penduduk","Rute telah divalidasi melewati jalur tercepat","Driver sudah konfirmasi mengantar ke SPBU Urgent (Sampangan) dan ke SPBU tujuan asli (Unika) dengan status: delay 1 jam","Saya mengonfirmasi pengiriman dilakukan di jam operasional yang diizinkan untuk tipe truck tangki ini dengan status darurat supply"];
const st={ftk:0,view:'dash',sel:'banjardowo',insp:'gombel',truck:0,ch:[],fleet:0,chat:false,msgs:[],mchk:[],active:false};
const $=(s)=>document.querySelector(s),get=(id)=>S.find(s=>s[0]===id);
const World=$('#world'),Map=$('#map');
let cam={x:-180,y:-60,k:1},baseUi=null;

/* ---------- map ---------- */
const MW=1420,MH=954; /* ukuran peta = ukuran gambar peta dibagi 2 (ekspor 2x: 2840x1908) */
const BAKED_PINS=true; /* true = pin hitam SPBU sudah ada di gambar peta; false = pin digambar dari img/pin-spbu.png */
const BAKED_IDS=['kalibanteng','pamularsih','pemuda','ahmadyani','unika','srondol','sampangan','gajahmungkur','undip','gombel'];
function mapSvg(){
 const roads=["M0 520 C300 480 500 560 800 500 S1300 440 1600 480","M600 0 C640 300 560 600 620 1000","M900 0 C940 250 860 500 940 1000","M0 780 C400 760 900 820 1600 700","M300 200 C600 300 1000 260 1500 380","M1200 0 C1180 300 1260 600 1220 1000","M780 450 C900 420 1050 360 1160 330"];
 const lb=[[60,90,"Dam Semarang"],[160,420,"Bandara Ahmad Yani"],[880,320,"QUEEN CITY MALL"],[740,520,"Semarang"],[1080,620,"Masjid Agung Jawa Tengah"],[1300,610,"Pasar Waru"],[400,900,"Pagoda Avalokitesvara"],[1100,900,"Pinusia Park"],[1380,780,"Jati Park"],[500,640,"Kali Gentok"]];
 let h=`<svg width="${MW}" height="${MH}" viewBox="0 0 ${MW} ${MH}"><g transform="scale(${MW/1600} ${MH/1000})"><rect width="1600" height="1000" fill="var(--land)"/><path d="M0 0H1600V190C1500 230 1400 170 1260 230C1150 280 1050 250 960 260C820 270 700 300 520 250C380 200 200 280 0 230Z" fill="var(--water)"/>`;
 roads.forEach(d=>h+=`<path d="${d}" fill="none" stroke="var(--roadL)" stroke-width="12"/><path d="${d}" fill="none" stroke="var(--road)" stroke-width="7"/>`);
 lb.forEach(l=>h+=`<text x="${l[0]}" y="${l[1]}" fill="var(--lbl)" font-size="15">${l[2]}</text>`);
 h+=`</g><image href="${IMG.map}" width="${MW}" height="${MH}" preserveAspectRatio="none"/><g id="routes"></g><g id="pins"></g></svg>`;return h}
/* Posisi 3 truk di peta (koordinat peta, di daratan). Truk 1 = posisi marker truk di desain Anda (dekat Unissula) */
const TPOS=[[1006,300],[814,596],[1054,516]];
function ftPos(s,i){return TPOS[i]}
function ftInfo(s,i){const d=Math.hypot(TPOS[i][0]-s[5],TPOS[i][1]-s[6]),km=(d*0.03).toFixed(1);return {km,min:Math.round(km*2.4)}}
function pins(){
 const g=$('#pins');if(!g)return;
 const v=st.view;let h='';const P=get('sampangan').slice(5,7),U=get('unika').slice(5,7),T=[P[0]-60,P[1]+260];
 S.forEach(s=>{
  if((v==='reroute'||v==='active')&&!['sampangan','unika','krasak'].includes(s[0]))return;
  const on=s[0]===((v==='reroute'||v==='active')?'sampangan':st.sel),c=CL[s[3]],r=on?26:15;
  h+=`<g class="pin" data-id="${s[0]}" transform="translate(${s[5]} ${s[6]})">${on?`<circle r="${r}" fill="#c62828" stroke="#fff" stroke-width="2"/><image href="${IMG.pump}" x="${-r*.6}" y="${-r*.6}" width="${r*1.2}" height="${r*1.2}"/>`:`${BAKED_PINS&&BAKED_IDS.includes(s[0])?`<circle r="22" fill="transparent"/>`:`<circle r="5" fill="#2b2b2b"/><circle r="18" fill="transparent"/><image href="${IMG.pinSpbu}" x="-18" y="-18" width="36" height="36"/>`}`}${on&&v==='fleet'?`<g transform="translate(${r+6} 0)"><rect y="-17" rx="17" width="190" height="34" fill="#b71c1c"/><text x="14" y="-2" fill="#fff" font-size="12" font-weight="700">SPBU Pertamina, ${s[1]}</text><text x="14" y="12" fill="#fff" font-size="10" font-style="italic">Jawa Tengah</text></g>`:''}</g>`});
 if(v==='fleet'){const s0=get(st.sel);FLEET.forEach((f,i)=>{const p=ftPos(s0,i),on=st.ftk===i,q=ftInfo(s0,i);h+=`<g class="tkpin" data-i="${i}" style="cursor:pointer" transform="translate(${p[0]} ${p[1]})"><circle r="${on?26:20}" fill="#c00" stroke="#111" stroke-width="${on?6:4}"/><circle r="30" fill="transparent"/><image href="${IMG.truckMini}" x="-14" y="-14" width="28" height="28"/>${on?`<g transform="translate(34 0)"><rect y="-14" rx="14" width="116" height="28" fill="#111"/><text x="12" y="5" fill="#fff" font-size="11" font-weight="700">${q.km} km · ${q.min} mnt</text></g>`:''}</g>`})}
 if(v==='reroute'||v==='active'){const a=get('sampangan'),u=get('unika');h+=`<circle cx="${u[5]}" cy="${u[6]}" r="22" fill="#e6d21a" stroke="#fff" stroke-width="3"/><image href="${IMG.pump}" x="${u[5]-12}" y="${u[6]-12}" width="24" height="24"/><g transform="translate(${T[0]} ${T[1]})"><circle r="22" fill="#c00" stroke="#111" stroke-width="4"/><image href="${IMG.truckMini}" x="-14" y="-14" width="28" height="28"/></g>`}
 g.innerHTML=h;
 let r='';if(v==='fleet'){const s0=get(st.sel),p=ftPos(s0,st.ftk);r=`<path d="M${p[0]} ${p[1]} Q${(p[0]+s0[5])/2+40} ${(p[1]+s0[6])/2-40} ${s0[5]} ${s0[6]}" fill="none" stroke="#111" stroke-width="5" stroke-dasharray="12 9" stroke-linecap="round"/>`}
 if(v==='reroute')r=`<path d="M${T[0]} ${T[1]} C${T[0]-20} ${T[1]-110} ${P[0]-30} ${P[1]+120} ${P[0]} ${P[1]}" fill="none" stroke="#111" stroke-width="9" stroke-linecap="round"/><path d="M${P[0]} ${P[1]} C${P[0]+80} ${P[1]-70} ${U[0]-90} ${U[1]+60} ${U[0]} ${U[1]}" fill="none" stroke="#111" stroke-width="8" stroke-linecap="round"/>`;
 if(v==='active')r=`<path d="M${T[0]} ${T[1]} C${T[0]-20} ${T[1]-110} ${P[0]-30} ${P[1]+120} ${P[0]} ${P[1]}" fill="none" stroke="#111" stroke-width="9" stroke-linecap="round"/><path d="M${P[0]} ${P[1]} C${P[0]+80} ${P[1]-70} ${U[0]-90} ${U[1]+60} ${U[0]} ${U[1]}" fill="none" stroke="#0a2fd0" stroke-width="6" stroke-dasharray="14 10" stroke-linecap="round"/>`;
 $('#routes').innerHTML=r}
function minK(){const m=Map.getBoundingClientRect();return Math.max(m.width/MW,m.height/MH)}
function clamp(){const m=Map.getBoundingClientRect();cam.x=Math.min(0,Math.max(m.width-MW*cam.k,cam.x));cam.y=Math.min(0,Math.max(m.height-MH*cam.k,cam.y))}
function applyCam(){clamp();World.style.transform=`translate(${cam.x}px,${cam.y}px) scale(${cam.k})`}
function center(x,y){const m=$('#main').getBoundingClientRect();cam.x=m.width*.62-x*cam.k;cam.y=m.height/2-y*cam.k;World.style.transition='transform .5s';applyCam();setTimeout(()=>World.style.transition='',520)}
function zoom(f,cx,cy){const m=Map.getBoundingClientRect();cx=cx??m.width/2;cy=cy??m.height/2;const k=Math.min(2,Math.max(minK(),cam.k*f)),r=k/cam.k;cam.x=cx-(cx-cam.x)*r;cam.y=cy-(cy-cam.y)*r;cam.k=k;applyCam()}
let dr=null;
Map.addEventListener('pointerdown',e=>{if(e.target.closest('.pin,.tkpin'))return;dr={x:e.clientX-cam.x,y:e.clientY-cam.y};Map.classList.add('drag');Map.setPointerCapture(e.pointerId)});
Map.addEventListener('pointermove',e=>{if(!dr)return;cam.x=e.clientX-dr.x;cam.y=e.clientY-dr.y;applyCam()});
Map.addEventListener('pointerup',()=>{dr=null;Map.classList.remove('drag')});
Map.addEventListener('wheel',e=>{e.preventDefault();const b=Map.getBoundingClientRect();zoom(e.deltaY<0?1.1:.9,e.clientX-b.left,e.clientY-b.top)},{passive:false});
$('#zi').onclick=()=>zoom(1.2);$('#zo').onclick=()=>zoom(.83);
World.innerHTML=mapSvg();
World.addEventListener('click',e=>{const t=e.target.closest('.tkpin');if(t&&st.view==='fleet'){st.ftk=+t.dataset.i;st.scroll=true;render();return}const p=e.target.closest('.pin');if(p&&st.view==='dash'||p&&st.view==='fleet')openFleet(p.dataset.id)});

/* ---------- components ---------- */
const pct=(v)=>v<=20?'#c00':v<=40?'#a5c10c':'#3f9a1a';
function fuel(i,v){const f=FUELS[i];return `<div class="fuel" style="border-color:${f[2]}"><div class="c" style="background:${f[2]}"><img data-img="nozzle" alt=""></div><div class="b"><div class="n"><span>${f[0]}<i>${f[1]}</i></span><span>${v}%</span></div><div class="bar"><u style="width:${v}%;background:${pct(v)}"></u></div></div></div>`}
function row(s,act,txt){return `<button class="row ${s[3]==='n'?'normal':s[3]==='f'?'full':''}" data-act="${act}" data-id="${s[0]}"><span class="ib"><img data-img="pump" alt=""></span><span class="t">SPBU Pertamina, ${s[1]}${txt?`<small>${s[2]}</small>`:''}</span><em class="${s[3]==='u'?'urgent':s[3]==='n'?'normal':'full'}">${txt?'● '+LB[s[3]]:'View'}</em></button>`}
function truck(c,w=190){const k=IMG[c]?c:c==='#fff'?'truckWhite':c==='#1b4fd8'?'truckBlue':'truckRed';return `<img data-img="${k}" alt="Truk" style="width:${w}px;height:auto">`}
function nav(){const it=[["dash","Dashboard","home"],["fleet","Filter Peta dan Armada","fleet"],["inspect","Inspeksi Kompartemen","inspect"],["reroute","Pengalihan Rute","reroute"]];
 const cur=st.view==='active'?'reroute':st.view;
 $('#nav').innerHTML='<input placeholder="Search" aria-label="Search">'+it.map(i=>`<button class="${i[0]===cur?'on':''}" data-nav="${i[0]}"><img data-img="${i[2]}" alt="">${i[1]}</button>`).join('')}
function toasts(){
 if(st.view==='reroute'||st.view==='active')return `<div class="ov toasts"><button class="toast r" data-act="alert" data-id="krasak"><span class="badge" style="background:#e00">!</span><span class="s"><b>Urgent Stock</b>SPBU Pertamina, Krasak</span><em>View</em></button></div>`;
 return `<div class="ov toasts"><button class="toast y" data-act="alert" data-id="gombel"><span class="badge" style="background:#f0b400">!</span><span class="s"><b>Urgent Stock</b>SPBU Pertamina, Gombel</span><em>View</em></button><button class="toast r" data-act="alert" data-id="sampangan"><span class="badge" style="background:#e00">!</span><span class="s"><b>Urgent Stock</b>SPBU Pertamina, Sampangan</span><em>View</em></button></div>`}
const loc=`<div class="ov loc"><img data-img="pin" alt="" style="width:18px;height:18px">Semarang, Jawa Tengah</div>`;

/* ---------- screens ---------- */
function vDash(){const s=get(st.sel);
 return loc+`<div class="ov panel"><h3 class="urgent"><span class="dot" style="background:var(--red)"></span>Urgent Stock</h3>
 <div class="big"><div class="top"><img class="photo" data-img="spbu" alt="SPBU"><div><b style="font-size:14px">SPBU Pertamina, ${s[1]}</b><div style="font-size:9px;color:var(--mut);margin:4px 0 10px">${s[2]}</div><div style="display:flex;gap:6px"><div class="sq"><img data-img="chat" alt="Chat"></div><div class="sq p"><img data-img="pin" alt="Lokasi"></div></div></div></div><div style="margin-top:10px">${s[4].map((v,i)=>fuel(i,v)).join('')}</div></div>
 ${S.filter(x=>x[3]==='u'&&x[0]!==st.sel).slice(0,2).map(x=>row(x,'open')).join('')}
 <h3 class="normal" style="margin-top:14px"><span class="dot" style="background:var(--grn)"></span>Normal Stock</h3>${S.filter(x=>x[3]==='n').slice(0,5).map(x=>row(x,'open')).join('')}</div>`+toasts()}
function vFleet(){const s=get(st.sel);
 return loc+`<div class="ov panel"><div style="font-size:16px;font-weight:700;padding-bottom:10px;border-bottom:1px solid var(--line)">SPBU Pertamina, ${s[1]}</div>
 <div style="display:flex;gap:10px;padding:10px 0"><img class="photo" data-img="spbu" alt="SPBU" style="width:80px;height:80px"><div style="font-size:10px;color:var(--mut);font-style:italic;flex:1">${s[2]}<div style="display:flex;justify-content:space-between;margin-top:14px;align-items:center"><div class="sq"><img data-img="chat" alt="Chat"></div><b class="urgent" style="font-style:normal;font-size:12px">● ${LB[s[3]]}</b></div></div></div>
 ${FLEET.map((f,i)=>`<div class="route">((•)) ${['Jl. Raya Semarang - Demak','Jl. Arteri Utara, Pantura','Jl. Kaligawe Raya'][i]}</div><div class="truckcard ${st.ftk===i?'sel':''}" data-act="ftk" data-i="${i}"><img data-img="cap${f[1]/1000}" alt="Kapasitas ${f[1].toLocaleString('id')}L" style="width:100%;max-width:280px;height:auto;min-height:36px"><div style="margin-top:8px;font-weight:700">Jenis Muatan</div><div style="font-size:11px"><b class="normal">FULL</b> ${f[2]}</div><div style="margin-top:6px;font-weight:700">Tipe Armada</div><div style="font-size:11px;font-style:italic">${f[3]}</div><div class="eta">Posisi truk: ±${ftInfo(s,i).km} km dari SPBU · ETA ±${ftInfo(s,i).min} menit</div><div class="rt"><div class="rl"><b>Start</b><i>Fuel Terminal</i><img data-img="terminal" alt="Terminal" class="ri"></div><div class="rm"><img data-img="truckRoute" alt="" class="rtk"></div><div class="rr"><b>Finish</b><i>SPBU Pertamina, ${s[1]}</i><img data-img="finishPump" alt="SPBU" class="ri"></div></div><div style="display:flex;justify-content:space-between;align-items:center"><div style="display:flex;gap:6px"><button class="sq" data-act="chat"><img data-img="chat" alt="Chat"></button><button class="sq p" data-act="route" data-i="${i}"><img data-img="pin" alt="Lokasi"></button></div><img data-img="truckRed" alt="Truk" style="width:162px;height:39px;flex:none"></div></div>`).join('')}</div>`+toasts()}
function vReroute(){const act=st.view==='active',a=get('sampangan');
 const left=`<div class="ov panel wide"><h3 class="urgent"><span class="dot" style="background:var(--red)"></span>Urgent Stock</h3>
 <div class="big" style="padding:0"><div style="display:flex"><div class="ib badge" style="width:34px;height:56px;border-radius:0;background:var(--red)">!</div><div style="padding:8px"><b>SPBU Pertamina, Sampangan</b><div style="font-size:9px;color:var(--mut)">${a[2]}</div></div></div><div style="padding:8px"><b>Jenis Bensin</b><div style="margin:6px 0">${fuel(1,3)}</div><b>Armada dalam jangkauan</b></div>
 ${FLEET.map((f,i)=>`<button class="fleet ${st.fleet===i?'sel':''}" data-act="fl" data-i="${i}" ${act?'disabled':''}><img data-img="cap${f[1]/1000}" alt="Kapasitas ${f[1].toLocaleString('id')}L" style="width:100%;max-width:280px;height:auto;min-height:36px"><small>${f[0]}</small></button>`).join('')}</div>
 ${['pemuda','kalibanteng','ahmadyani','krasak'].map(i=>row(get(i),'noop')).join('')}
 <h3 class="normal" style="margin-top:12px"><span class="dot" style="background:var(--grn)"></span>Normal Stock</h3>${['pamularsih','gajahmungkur','srondol'].map(i=>row(get(i),'noop')).join('')}</div>`;
 const hdr=`<div style="background:var(--grey);border-radius:3px;padding:6px;margin-bottom:8px"><img data-img="truckPertalite" class="bigimg" alt="Truk Pertalite" style="width:100%;height:auto"></div>`;
 const mid=act?`<div class="ov mid">${hdr}<b>Status</b><label class="chk" style="color:var(--blu);font-style:italic"><input type="checkbox" checked disabled>Pengalihan rute berhasil</label><label class="chk" style="color:var(--blu);font-style:italic"><input type="checkbox" checked disabled>8000L Pertalite Kompartemen 3 sedang menuju SPBU Pertamina, Sampangan</label>
 <div style="background:var(--grey);padding:10px;border-radius:3px;margin:8px 0"><div style="display:flex;gap:10px;align-items:center;font-weight:700"><span class="sq" style="background:#fff"><img data-img="driver" alt=""></span>Driver Adit Fauzan</div><label class="chk" style="color:var(--blu);font-style:italic"><input type="checkbox" checked disabled>Supir telah menerima rute baru melalui gps mereka</label><div style="text-align:right;color:var(--blu);font-style:italic">Status: Terkirim</div></div>
 <b>Ket. Tujuan Asli</b><p style="color:var(--mut);font-style:italic">Rute asli ke SPBU Unika akan tertunda selama <span style="color:var(--blu)">→ 1 jam 30 menit dari jadwal asli.</span></p><button class="btn" data-act="home">Kembali ke Dashboard</button></div>`
 :`<div class="ov mid">${hdr}<b>Status Muatan</b><ul class="kv"><li>Jenis BBM : Pertalite <i>RON 90</i></li><li>Volume : 8000 L</li><li>Status : <i class="normal">Siap dialihkan</i></li></ul><b>Informasi SPBU tujuan asli</b>
 <div class="ik"><b class="nm">SPBU Pertamina, Unika</b><div class="ad">Jl. Pawiyatan Luhur, Bendan Duwur, Kec. Gajahmungkur, Kota Semarang, Jawa Tengah</div><div class="ir"><img data-img="spbuUnika" class="ph" alt="SPBU Unika"><div class="it"><div class="f"><b>Tujuan Asli</b><span>SPBU Pertamina, Unika</span></div><div class="f"><b>Perkiraan Waktu Sampai</b><span>4 Jam 30 Menit - <i style="color:var(--blu)">Delay</i> 1 Jam</span></div><div class="f"><b>Stock Saat ini</b><span>7500 L - Status: <i class="normal">Normal</i></span></div><div class="f"><b>Prediksi Habis</b><span>5 Hari</span></div><div class="f"><b>Informasi Mitigasi</b><span class="normal">Jadwal pengisian ulang: 4 hari dari sekarang</span></div></div></div><div class="f"><b>Presentase Kapasitas Pertalite</b></div>${fuel(1,85)}<div class="f"><b>Analisis Dampak</b><span class="normal">Aman untuk dialihkan</span></div></div>
 <button class="btn lt" data-act="chat" aria-label="Buka chat driver"><img data-img="chat" alt="Chat" style="margin:auto;width:22px"></button><button class="btn" data-act="confirm">Konfirmasi Pengalihan Kompartemen 3</button></div>`;
 const chat=st.chat?`<div class="ov chat"><header><img data-img="driver" alt="" style="width:26px;height:26px;display:inline-block;vertical-align:middle;margin-right:8px">Adit - Driver</header><div class="msgs" id="msgs">${st.msgs.map(m=>`<div class="m ${m.me?'me':''}">${m.t}</div>`).join('')}</div><form class="cin" id="cf"><input id="ci" placeholder="Pesan..." autocomplete="off" aria-label="Pesan"><button aria-label="Kirim">➤</button></form></div>`:'';
 return loc+left+mid+chat+toasts()}
function vInspect(){const s=get(st.insp),t=TRUCKS[st.truck%4];
 const list=['u','n','f'].map(k=>S.filter(x=>x[3]===k).map(x=>`<button class="row ${k==='n'?'normal':k==='f'?'full':''} ${x[0]===st.insp?'sel':''}" data-act="ins" data-id="${x[0]}" style="border-color:${CL[k]}"><span class="ib"><img data-img="pump" alt=""></span><span class="t">SPBU Pertamina, ${x[1]}<small>${x[2]}</small></span><em class="${k==='u'?'urgent':k==='n'?'normal':'full'}">● ${LB[k]}</em></button>`).join('')).join('');
 const col=(c)=>st.truck%2?'#1b4fd8':'#c80f0f';
 return `<div id="inspect"><div class="lst"><div style="border:1px solid var(--line);padding:8px;border-radius:3px;margin-bottom:10px">📍 Jawa Tengah</div>${list}</div><div class="mn">
 <div class="hd"><img class="photo" data-img="spbu" alt="SPBU"><div style="flex:1"><h2>SPBU Pertamina, ${s[1]}</h2><div style="font-size:11px;color:var(--mut)">📍 ${s[2]}, Kota Semarang</div><b style="color:${CL[s[3]]};font-size:15px">● ${LB[s[3]]}</b></div><button class="sq" style="width:40px;height:40px" data-act="chat2"><img data-img="chat" alt="Chat"></button></div>
 <div class="grid3">${s[4].map((v,i)=>fuel(i,v)).join('')}</div><h3 style="font-size:17px;border-top:1px solid var(--line);padding-top:10px">Pilih Armada</h3>
 <div class="fl2">${[0,1,2,3,4,5,6,7].map(i=>{const x=TRUCKS[i%4],b=i>3,u=b?BLUEU[i%4]:x[2];return `<button class="${st.truck===i?'sel':''}" data-act="trk" data-i="${i}"><span class="tkw"><img data-img="${b?'tb':'tr'}${i%4}" alt="${x[0]}" class="tk" style="width:${TW[i%4]}px"></span><span class="tt"><b>${x[0]}</b><span class="tm"><i>${x[1]}</i><em>Unit Tersedia: ${u}<br>Kompartemen: ${x[3]}</em></span></span></button>`}).join('')}</div>
 <h3 style="font-size:17px;margin-top:16px;border-top:1px solid var(--line);padding-top:10px">${t[0]}</h3>
 <div class="stage"><img data-img="truckCompart" class="bigimg" alt="Truk tampak samping" style="width:${SZ.side}%;height:auto;margin:0 auto"><div class="comp" style="width:${SZ.side}%;margin:6px auto">${CN.map((c,i)=>`<div style="background:${CCOL[i]}">${c[0]}<br><small>${c[1]} · 10.000 L</small></div>`).join('')}</div><img data-img="truckTop" class="bigimg" alt="Truk tampak atas" style="width:${SZ.top}%;height:auto;margin:12px auto"><div style="display:flex;gap:24px;align-items:center;justify-content:space-between;flex-wrap:wrap;width:${SZ.top}%;margin:0 auto"><div style="display:flex;gap:16px;flex:none"><img data-img="truckFront" alt="Tampak depan" style="width:${SZ.fb}px;height:auto"><img data-img="truckBack" alt="Tampak belakang" style="width:${SZ.fb}px;height:auto"></div><label class="chk" style="flex:0 1 46%;min-width:240px"><input type="checkbox" checked disabled><span>Armada ${t[0]} dengan 4 kompartemen, 3 sekat berisi Pertamax RON 92, Pertamax Green RON 95, Dex CN53 dan Pertamax Turbo RON 90 dengan berat masing-masing 10.000 L.<br>→ Dengan tujuan SPBU Pertamina ${s[1]}, Kota Semarang, Jawa Tengah</span></label></div></div>
 <h3 style="font-size:17px">Spesifikasi &amp; Kesiapan Armada</h3><div class="stage"><img data-img="truckSpec" class="bigimg" alt="Spesifikasi truk" style="width:${SZ.spec}%;height:auto;margin:0 auto 12px"><div class="chks" style="width:${SZ.spec}%;margin:0 auto">${CHECKS.map((c,i)=>`<label class="chk"><input type="checkbox" data-ck="${i}" ${st.ch[i]?'checked':''}>${c}</label>`).join('')}</div><button class="btn" id="vf" data-act="verify" style="width:auto;margin-left:auto;padding:14px 36px;border-radius:8px" ${CHECKS.every((_,i)=>st.ch[i])?'':'disabled'}>Verifikasi Selesai</button></div></div></div>`}
function modal(){const m=$('#modal');if(!st.modal){m.className='';m.innerHTML='';return}
 const ok=MCHK.every((_,i)=>st.mchk[i]);
 const ck=(i,t)=>`<label class="chk"><input type="checkbox" data-mk="${i}" ${st.mchk[i]?'checked':''}><span>${t}</span></label>`;
 m.className='on';
 m.innerHTML=`<div class="dlg" role="dialog" aria-modal="true" aria-label="Urgent destination"><h2><span class="badge" style="width:54px;height:54px;font-size:30px;background:#e00">!</span><span>URGENT <b>DESTINATION</b></span></h2><div class="cols"><div class="lc"><div style="display:flex;gap:18px"><div class="drv"><img data-img="driver" alt="Driver"></div><dl><dt>Nama :</dt><dd>Adit Fauzan</dd><dt>Plat Unit :</dt><dd>B 1111 EP</dd><dt>Tipe Unit</dt><dd>Volvo FH16, Gender 6×4</dd><dt>Muatan :</dt><dd>Premium Unleaded</dd><dt>Destinasi Awal:</dt><dd>SPBU Pertamina, Unika</dd><dt>Destinasi Darurat :</dt><dd>SPBU Pertamina, Sampangan</dd></dl></div><h4 style="margin-top:44px">Informasi rute muatan Hazardous Materials</h4><div class="hz">Rute terbaru → Pertigaan dari Jl. Dewi Sartika, <b>Lurus</b> kearah Jl. Menoreh Raya</div>${ck(5,MCHK[5])}<img class="wm" data-img="logoWatermark" alt="eInusa petrofin"></div><div class="rc"><h4>Status Driver dan Kendaraan (Safety Check)</h4>${ck(0,MCHK[0])}${ck(1,MCHK[1])}<div class="gap"></div>${ck(2,'Rute telah divalidasi terbebas dari zona <b>padat penduduk</b>')}${ck(3,'Rute telah divalidasi melewati <b>jalur tercepat</b>')}${ck(4,'Driver sudah konfirmasi mengantar ke SPBU <b style="color:#e00">Urgent (Sampangan)</b> dan ke SPBU <b style="color:var(--grn)">tujuan asli</b> <b>(Unika)</b> dengan status → <b style="color:var(--blu)">Delay 1 Jam</b>')}<button class="btn go" id="mok" ${ok?'':'disabled'}>Konfirmasi</button></div></div></div>`;hydrate()}
function render(){nav();const v=st.view,pn=document.querySelector('.panel'),sc=pn&&st.lv===v?pn.scrollTop:0;
 $('#ui').innerHTML=v==='dash'?vDash():v==='fleet'?vFleet():v==='inspect'?vInspect():vReroute();
 modal();pins();hydrate();
 {const p2=document.querySelector('.panel');if(p2)p2.scrollTop=sc;st.lv=v;const cd=document.querySelector('.truckcard.sel');if(cd&&st.scroll){cd.scrollIntoView({block:'nearest',behavior:'smooth'});st.scroll=false}}
 const ms=$('#msgs');if(ms)ms.scrollTop=ms.scrollHeight}
function snack(t){const s=$('#snack');s.textContent=t;s.classList.add('on');setTimeout(()=>s.classList.remove('on'),2200)}
function openFleet(id){st.sel=id;st.ftk=0;st.view='fleet';const s=get(id);render();center(s[5],s[6])}
function go(v){st.view=v;st.modal=false;if(v==='reroute'){st.chat=false;center(800,560)}if(v==='dash'){st.sel='banjardowo';center(980,430)}render()}

/* ---------- events ---------- */
document.addEventListener('click',e=>{
 const n=e.target.closest('[data-nav]');if(n){const v=n.dataset.nav;if(v==='fleet')openFleet(st.sel);else go(v);return}
 const b=e.target.closest('[data-act]');if(!b)return;const a=b.dataset.act,id=b.dataset.id;
 if(a==='open'||a==='alert'){openFleet(id)}
 else if(a==='chat'&&st.view==='fleet'){snack('Chat dengan driver dibuka dari menu Pengalihan Rute')}
 else if(a==='chat'){st.chat=!st.chat;if(st.chat&&!st.msgs.length)st.msgs=[{t:'Izin merubah destinasi tujuan ke SPBU Urgent ya pak Adit, saya kirim gps update ke tablet',me:1},{t:'Ok, Baik'},{t:'<b><img data-img="pin" alt="" style="width:14px;display:inline-block;vertical-align:middle"> Terupdate</b><br>Rute sedang di perbarui menuju SPBU urgent Sampangan',me:1},{t:'Ok, Baik'}];render()}
 else if(a==='ftk'){st.ftk=+b.dataset.i;render()}
 else if(a==='route'){st.ftk=+b.dataset.i;const s=get(st.sel),p=ftPos(s,st.ftk);render();center(p[0],p[1]);snack('Peta diarahkan ke truk '+(st.ftk+1)+' ('+ftInfo(s,st.ftk).km+' km dari SPBU)')}
 else if(a==='ins'){st.insp=id;render()}
 else if(a==='trk'){st.truck=+b.dataset.i;render()}
 else if(a==='verify'){st.ch=[];snack('Verifikasi selesai');go('reroute')}
 else if(a==='fl'){st.fleet=+b.dataset.i;render()}
 else if(a==='confirm'){st.modal=true;st.mchk=[];render()}
 else if(a==='home'){go('dash')}
 else if(a==='chat2'){snack('Chat dibuka dari menu Pengalihan Rute')}
});
document.addEventListener('change',e=>{const t=e.target;
 if(t.dataset.ck!==undefined){st.ch[+t.dataset.ck]=t.checked;$('#vf').disabled=!CHECKS.every((_,i)=>st.ch[i])}
 if(t.dataset.mk!==undefined){st.mchk[+t.dataset.mk]=t.checked;$('#mok').disabled=!MCHK.every((_,i)=>st.mchk[i])}});
document.addEventListener('click',e=>{if(e.target.id==='mok'&&!e.target.disabled){st.modal=false;st.view='active';render();snack('Pengalihan rute berhasil')}});
document.addEventListener('submit',e=>{if(e.target.id!=='cf')return;e.preventDefault();const i=$('#ci');if(!i.value.trim())return;st.msgs.push({t:i.value.replace(/</g,'&lt;'),me:1});render();setTimeout(()=>{st.msgs.push({t:'Ok, Baik'});if(st.chat)render()},700);setTimeout(()=>{const x=$('#ci');x&&x.focus()},0)});
$('#tg').onclick=()=>document.body.classList.toggle('hideui');
addEventListener('resize',()=>{cam.k=Math.max(cam.k,minK());applyCam()});
cam.k=minK();cam.x=-234*cam.k;cam.y=0;applyCam();render();