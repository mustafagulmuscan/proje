let LPG = 10, Benzin = 20, Motorin = 25;
let yeniSatir = "\r\n"
let metin = "1-LPG" + yeniSatir + "2-Benzin" + yeniSatir + "3-Motorin" + yeniSatir;
let yakitTuru = prompt(metin)
if (yakitTuru == 1 || yakitTuru == 2 || yakitTuru == 3) {
    let tutar;
    let yakitmiktar = prompt("Alınacak yakıt miktarını giriniz: ")
    if (yakitTuru == 1) {
        tutar = Math.floor((LPG) * (yakitmiktar))
        alert("Toplam ödenecek tutar: "+tutar)
    } else if (yakitTuru == 2) {
        tutar = Math.floor((Benzin) * (yakitmiktar))
        alert("Toplam ödenecek tutar: "+tutar)
    }
    else if (yakitTuru == 3) {
        tutar = Math.floor((Motorin) * (yakitmiktar))
        alert("Toplam ödenecek tutar: "+tutar)
    }
    document.write(`Ödenecek toplam tutar: ${tutar} TL`)
}
