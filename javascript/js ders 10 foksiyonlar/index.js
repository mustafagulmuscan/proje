
// function sayitoplama(sayi1,sayi2){
//     let toplam=sayi1+sayi2;
//     console.log(toplam);
// }
// sayitoplama(10 ,20);

// let toplam=0;
// function sayitoplama(...sayilar) {
//     for(let sayi of sayilar){
//         toplam+=sayi;
//     }
// }
// sayitoplama(10,20,30,40);
// console.log(toplam);
function yashesaplama(dogumyili) {
    return new Date().getFullYear() - dogumyili;
}
const hesapla = yashesaplama(2003);
console.log(hesapla);