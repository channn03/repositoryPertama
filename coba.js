
let kaloriDiBakar = 2250;
let kaloriOlahraga = [25, 20, 15, 10, 5, 1];
const olahraga = ["lari", "renang", "basket", "tenis", "lompatTali", "jalan"];

function cari(n) {
  const maksimalOlahraga = 30;
  let waktu;
  for (let i = 0; i < Infinity; i++) {
    
    if (n * maksimalOlahraga > kaloriDiBakar) {
      waktu = kaloriDiBakar / n;
      kaloriDiBakar -= (n * waktu);

      break;

    } else if (n * i === n * maksimalOlahraga) {
      kaloriDiBakar -= (n * maksimalOlahraga);
      waktu = i;
      break;
    }
  }
  return waktu;
}

let totalWaktu = 0;
for (let i = 0; i < olahraga.length; i++) {
  let n = kaloriOlahraga[i];
  let waktu = cari(n);
  let totalKalori = n * waktu;
  const o = olahraga[i];
  totalWaktu += waktu;

  if (kaloriDiBakar === 0) {
    document.writeln(`${o} selama ${waktu} menit = ${totalKalori} kalori`);
    document.writeln(`total waktu olahraga yang diperlukan adalah ${totalWaktu} menit`);
    break;
  }

  document.writeln(`${o} selama ${waktu} menit = ${totalKalori} kalori`);
 
  
}