const soalData = [
{q:"1. わたし adalah…",a:["kamu","saya","dia","mereka"],b:1},
{q:"2. あなた artinya…",a:["saya","Anda","dia","kami"],b:1},
{q:"3. せんせい adalah…",a:["guru","mahasiswa","dokter","pegawai"],b:0},
{q:"4. がくせい artinya…",a:["guru","mahasiswa","dokter","peneliti"],b:1},
{q:"5. かいしゃいん adalah…",a:["pegawai perusahaan","dokter","guru","bankir"],b:0},
{q:"6. ぎんこういん artinya…",a:["dokter","pegawai bank","mahasiswa","guru"],b:1},
{q:"7. いしゃ adalah…",a:["guru","dokter","siswa","pegawai"],b:1},
{q:"8. だいがく artinya…",a:["rumah sakit","universitas","bank","perusahaan"],b:1},
{q:"9. びょういん adalah…",a:["rumah sakit","universitas","bank","kantor"],b:0},
{q:"10. だれ artinya…",a:["apa","siapa","di mana","kapan"],b:1},

{q:"11. なんさい artinya…",a:["umur berapa","siapa","dari mana","berapa harga"],b:0},
{q:"12. はい berarti…",a:["tidak","ya","mungkin","permisi"],b:1},
{q:"13. いいえ berarti…",a:["ya","tidak","permisi","halo"],b:1},
{q:"14. ～さん digunakan untuk…",a:["menyebut umur","menyebut orang sopan","menyebut negara","menyebut benda"],b:1},
{q:"15. ～じん artinya…",a:["orang (warga negara)","guru","siswa","perusahaan"],b:0},
{q:"16. アメリカ adalah…",a:["Inggris","India","Amerika Serikat","Jepang"],b:2},
{q:"17. にほん artinya…",a:["Korea","Jerman","Jepang","Thailand"],b:2},
{q:"18. インドネシア adalah…",a:["Indonesia","India","Inggris","Italia"],b:0},
{q:"19. ちゅうごく artinya…",a:["Thailand","Cina","Korea","India"],b:1},
{q:"20. イギリス adalah…",a:["Inggris","India","Italia","Amerika"],b:0},

{q:"21. わたしは がくせいです。artinya…",a:["Saya guru","Saya mahasiswa","Saya dokter","Saya pegawai"],b:1},
{q:"22. あなたは せんせいですか。artinya…",a:["Apakah Anda guru?","Apakah Anda siswa?","Apakah Anda dokter?","Apakah Anda orang Indonesia?"],b:0},
{q:"23. わたしは インドネシアじんです。",a:["Saya orang India","Saya orang Jepang","Saya orang Indonesia","Saya orang Inggris"],b:2},
{q:"24. ～です adalah pola…",a:["kata kerja","kata sifat","kalimat nominal","kata benda"],b:2},
{q:"25. Kata tanya untuk siapa adalah…",a:["なん","だれ","どこ","いつ"],b:1},

{q:"26. Kata untuk tidak (formal)…",a:["はい","いいえ","です","さん"],b:1},
{q:"27. “Saya dokter” dalam Jepang adalah…",a:["わたしは いしゃです","わたしは がくせいです","あなたは いしゃです","いしゃは わたしです"],b:0},
{q:"28. “Apakah Anda mahasiswa?”",a:["あなたは がくせいです","あなたは がくせいですか","あなたは せんせいですか","がくせいですか"],b:1},
{q:"29. Fungsi partikel は adalah…",a:["penanda objek","penanda topik","penanda tempat","penanda waktu"],b:1},
{q:"30. わたしは せんせい ではありません artinya…",a:["Saya guru","Saya bukan guru","Saya mahasiswa","Saya bukan mahasiswa"],b:1},

{q:"31. Bentuk negatif dari です adalah…",a:["ではありません","でした","ですか","じゃない"],b:0},
{q:"32. そうです artinya…",a:["tidak begitu","benar","mungkin","tidak tahu"],b:1},
{q:"33. そうではありません artinya…",a:["benar","iya","bukan begitu","terima kasih"],b:2},
{q:"34. か di akhir kalimat berfungsi untuk…",a:["perintah","pertanyaan","negatif","lampau"],b:1},
{q:"35. “Dia dokter”",a:["かれは いしゃです","わたしは いしゃです","あなたは いしゃです","いしゃですか"],b:0},

{q:"36. Kata untuk orang Jepang adalah…",a:["にほん","にほんじん","にほんご","にほんさん"],b:1},
{q:"37. Bahasa Jepang adalah…",a:["にほんじん","にほんご","にほん","にほんです"],b:1},
{q:"38. Kata untuk bahasa Inggris…",a:["えいご","えいじん","イギリスご","アメリカご"],b:0},
{q:"39. “Saya orang Amerika”",a:["わたしは アメリカです","わたしは アメリカじんです","アメリカは わたしです","わたしは にほんじんです"],b:1},
{q:"40. Kata untuk mahasiswa asing…",a:["りゅうがくせい","がくせい","せんせい","いしゃ"],b:0},

{q:"41. りゅうがくせい artinya…",a:["guru","mahasiswa asing","dokter","pegawai"],b:1},
{q:"42. “Saya bukan mahasiswa”",a:["わたしは がくせいです","わたしは がくせいではありません","あなたは がくせいです","がくせいですか"],b:1},
{q:"43. せんもん artinya…",a:["jurusan","kelas","umur","negara"],b:0},
{q:"44. “Berapa umur Anda?”",a:["なんさいですか","だれですか","どこですか","なんですか"],b:0},
{q:"45. おいくつ adalah bentuk sopan dari…",a:["なんさい","だれ","なん","どこ"],b:0},

{q:"46. わたしは 19さいです artinya…",a:["Saya 9 tahun","Saya 19 tahun","Saya 29 tahun","Saya 90 tahun"],b:1},
{q:"47. “Itu benar”",a:["そうです","そうではありません","いいえ","はい"],b:0},
{q:"48. “Bukan begitu”",a:["そうです","いいえ","そうではありません","はい"],b:2},
{q:"49. Kata untuk perusahaan…",a:["かいしゃ","びょういん","ぎんこう","だいがく"],b:0},
{q:"50. Kata untuk bank…",a:["だいがく","ぎんこう","びょういん","かいしゃ"],b:1}
];

const container=document.getElementById("soalContainer");

soalData.forEach((s,index)=>{
  const div=document.createElement("div");
  div.className="soal";
  div.innerHTML=`<p><b>${s.q}</b></p>`+
  s.a.map((opt,i)=>
  `<label><input type="radio" name="soal${index}" value="${i}"> ${String.fromCharCode(65+i)}. ${opt}</label><br>`
  ).join("");
  container.appendChild(div);
});

function hitungNilai(){
  let skor=0;
  soalData.forEach((s,index)=>{
    const jawaban=document.querySelector('input[name="soal'+index+'"]:checked');
    if(jawaban && parseInt(jawaban.value)===s.b){
      skor++;
    }
  });
  let nilai = skor*2;
  document.getElementById("hasil").innerHTML=
  "Nilai kamu: "+nilai+" / 100 🔥";
 }
