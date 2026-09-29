const CATS=["Nasional","Ekonomi","Olahraga","Teknologi","Hiburan","Internasional"];
const HUE={Nasional:210,Ekonomi:150,Olahraga:20,Teknologi:265,Hiburan:335,Internasional:190};
const A=[
["Nasional","Jalur MRT Baru Tahap Awal Dibuka untuk Uji Coba Publik","Warga dapat mencoba rute baru secara gratis selama dua pekan sebelum tarif resmi berlaku.","Operator menyebut uji coba dilakukan untuk mengukur kepadatan penumpang dan merapikan jadwal keberangkatan. Warga diminta membawa kartu identitas untuk pendaftaran di stasiun.","45 menit lalu"],
["Nasional","Musim Hujan Datang Lebih Awal, Warga Diminta Waspadai Banjir","Otoritas cuaca memperkirakan curah hujan meningkat dalam sepekan ke depan di sejumlah wilayah.","Pemerintah daerah menyiapkan pompa air dan membersihkan saluran drainase. Warga di bantaran sungai diimbau memantau informasi peringatan dini melalui kanal resmi.","1 jam lalu"],
["Ekonomi","Rupiah Bergerak Stabil di Tengah Data Inflasi Terbaru","Analis menilai pergerakan mata uang masih terjaga seiring meredanya tekanan harga pangan.","Pelaku pasar kini menunggu arah kebijakan suku bunga pada pertemuan berikutnya. Sektor perbankan dan konsumsi menjadi penopang utama pasar saham pekan ini.","2 jam lalu"],
["Ekonomi","UMKM Digital Catat Lonjakan Transaksi Jelang Akhir Tahun","Penjualan daring produk kuliner dan kriya naik seiring musim belanja akhir tahun.","Pelaku usaha memanfaatkan dompet digital dan kanal media sosial untuk menjangkau pembeli baru. Pendamping usaha menyarankan menjaga stok dan layanan pengiriman.","3 jam lalu"],
["Olahraga","Tim Bulu Tangkis Nasional Tatap Turnamen Akhir Tahun dengan Skuad Muda","Pelatih memadukan pemain muda dan senior untuk menjaga peluang meraih gelar.","Pemusatan latihan digelar dengan fokus pada kebugaran dan variasi serangan. Pelatih menilai pengalaman bertanding menjadi kunci di babak-babak awal.","3 jam lalu"],
["Olahraga","Liga Lokal Pekan Ini: Persaingan Papan Atas Kian Ketat","Selisih poin antara empat tim teratas kini tipis menjelang laga-laga penentu.","Sejumlah laga big match dijadwalkan akhir pekan. Panitia meminta suporter tertib dan membeli tiket resmi melalui kanal daring.","4 jam lalu"],
["Teknologi","Startup Lokal Rilis Asisten AI Berbahasa Daerah","Aplikasi baru membantu layanan pelanggan dan pendidikan dengan bahasa daerah.","Pengembang mengaku melatih model dengan data percakapan yang dikumpulkan secara sukarela. Uji coba terbatas dibuka bagi sekolah dan pelaku usaha kecil.","5 jam lalu"],
["Teknologi","Tips Menjaga Keamanan Akun dengan Verifikasi Dua Langkah","Pakar keamanan siber menyarankan pengguna mengaktifkan lapisan pengamanan tambahan.","Gunakan aplikasi autentikator alih-alih pesan singkat jika memungkinkan, dan simpan kode cadangan di tempat aman. Hindari mengklik tautan dari pengirim tak dikenal.","6 jam lalu"],
["Hiburan","Festival Film Pendek Tampilkan 40 Karya Sineas Muda","Program pemutaran dan diskusi dibuka untuk umum selama empat hari.","Panitia menghadirkan kelas penyutradaraan dan sesi temu penonton. Sebagian karya mengangkat isu lingkungan dan kehidupan kota.","6 jam lalu"],
["Hiburan","Konser Akhir Pekan Padukan Musik Tradisional dan Elektronik","Kolaborasi lintas genre menghadirkan gamelan, vokal daerah, dan musik elektronik.","Penyelenggara menyiapkan area terbuka untuk 5.000 penonton. Pengunjung disarankan datang lebih awal karena akan ada pengaturan lalu lintas.","7 jam lalu"],
["Internasional","Pertemuan Regional Bahas Kerja Sama Energi Terbarukan","Para delegasi membahas pendanaan proyek tenaga surya dan angin lintas negara.","Pembahasan mencakup standar jaringan listrik dan alih teknologi. Hasil pertemuan akan dirumuskan dalam pernyataan bersama pekan depan.","8 jam lalu"],
["Internasional","Maskapai Buka Rute Baru Hubungkan Asia Tenggara dan Timur Tengah","Rute langsung diharapkan memangkas waktu tempuh dan mendorong pariwisata.","Penerbangan perdana dijadwalkan bulan depan dengan frekuensi tiga kali sepekan. Calon penumpang bisa memesan tiket mulai hari ini.","9 jam lalu"]
].map((r,i)=>({id:i,c:r[0],t:r[1],s:r[2],b:r[3],w:r[4],h:HUE[r[0]]}));
const POP=[2,0,6,4,9];
const $=id=>document.getElementById(id);
let cat="Semua",kw="";
const th=a=>`<div class="th" style="--h:${a.h}"><span>${a.c}</span></div>`;
const meta=a=>`<div class="meta"><span class="cat">${a.c}</span> &middot; ${a.w}</div>`;

function render(){
  const q=kw.trim().toLowerCase();
  let res=A.filter(a=>(cat==="Semua"||a.c===cat)&&(!q||(a.t+a.s).toLowerCase().includes(q)));
  const home=cat==="Semua"&&!q;
  const hero=$("hero");
  if(home){
    const [h,...s]=res.slice(0,4);
    hero.style.display="";
    hero.innerHTML=`<div class="big" data-id="${h.id}">${th(h)}<h2>${h.t}</h2><p>${h.s}</p>${meta(h)}</div>
    <div class="side">${s.map(a=>`<article data-id="${a.id}">${th(a)}<div><h3>${a.t}</h3>${meta(a)}</div></article>`).join("")}</div>`;
    res=res.slice(4);
    $("jdl").textContent="Berita Terbaru";
  }else{
    hero.style.display="none";
    $("jdl").textContent=q?`Hasil pencarian: ${kw.trim()}`:cat;
  }
  $("list").innerHTML=res.length?res.map(a=>`<article data-id="${a.id}">${th(a)}<div>${meta(a)}<h3>${a.t}</h3><p>${a.s}</p></div></article>`).join(""):"";
  if(!res.length&&!home){const d=document.createElement("div");d.className="empty";d.textContent="Tidak ada berita yang cocok. Coba kata kunci lain atau pilih kategori berbeda.";$("list").appendChild(d)}
  document.querySelectorAll("#nav button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.c===cat));
}
function buka(id){
  const a=A[id];
  $("isi").innerHTML=`${th(a)}<h2>${a.t}</h2>${meta(a)}<p style="margin-top:14px"><b>${a.s}</b></p><p>${a.b}</p><p>Artikel ini adalah contoh konten untuk keperluan tampilan portal berita.</p>`;
  $("dlg").showModal();
}

// navigasi & rubrik
$("nav").innerHTML=["Semua",...CATS].map(c=>`<button type="button" data-c="${c}" aria-pressed="false">${c==="Semua"?"Beranda":c}</button>`).join("");
$("tags").innerHTML=CATS.map(c=>`<button type="button" data-c="${c}">${c}</button>`).join("");
$("pop").innerHTML=POP.map(i=>`<li data-id="${i}"><div><b>${A[i].t}</b><span class="meta">${A[i].c}</span></div></li>`).join("");
document.addEventListener("click",e=>{
  const n=e.target.closest("[data-c]");
  if(n){cat=n.dataset.c;kw="";$("q").value="";render();window.scrollTo({top:0});return}
  const d=e.target.closest("[data-id]");
  if(d){e.preventDefault();buka(+d.dataset.id)}
});
$("home").onclick=e=>{e.preventDefault();cat="Semua";kw="";$("q").value="";render()};
$("cari").onsubmit=e=>{e.preventDefault();kw=$("q").value;cat="Semua";render()};
$("tutup").onclick=()=>$("dlg").close();
$("dlg").addEventListener("click",e=>{if(e.target===$("dlg"))$("dlg").close()});

// ticker
let ti=0;
function tick(){const a=A[ti%A.length];const l=$("tk");l.textContent=a.t;l.dataset.id=a.id;ti++}
tick();setInterval(tick,4500);
$("tk").addEventListener("click",e=>e.preventDefault());

// tanggal
const now=new Date();
$("tgl").textContent=now.toLocaleDateString("id-ID",{weekday:"long",day:"numeric",month:"long",year:"numeric"});
$("thn").textContent=now.getFullYear();

// mode gelap
const root=document.documentElement;
function setMode(m){root.setAttribute("data-theme",m);$("mode").textContent=m==="dark"?"Mode terang":"Mode gelap";try{localStorage.setItem("tema",m)}catch(e){}}
let saved=null;try{saved=localStorage.getItem("tema")}catch(e){}
setMode(saved||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"));
$("mode").onclick=()=>setMode(root.getAttribute("data-theme")==="dark"?"light":"dark");

render();
