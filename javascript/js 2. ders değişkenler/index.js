/*------------string-----------------*/
/*let ogrenciisim = "mustafa"
/*tyupeof verinin türünü öğrenmemizi sağlar ve hemen alt satırdaki gibi yazılır*/
// console.log(typeof ogrenciisim);
/*ctrl ö yorum satırına almamızı sağlar*/
/*aşağıda yazmış olduğum kod matematiksel toplama işlemi yazpmaz vrdiğim sayıları yanyana koya bunun nedeni sstring bir değer olmasıdır eğe toplamak istiyorsam şu şekilde yazmam gerek toplam=number(sayi1)+number(sayi2) şeklide yazmam gerekiyor number kodu bu işlevi görür*/
/*let sayi1="10";
let sayi2="15";
let toplam=sayi1+sayi2;
console.log(toplam);*/
/*Hemen aşağıda yazdığım kod normal bir şekilde matematiksel toplama işlemi yapar eğer matematiksel toplama değide yanyana yazmasını istiyorsak şu şekilde stringe çevirebiliriz=toplam=sayi1.tostring()+sayi2.tostring()*/
/*let sayi1= 10;
let sayi2=4;
let toplam=sayi1+sayi2;
console.log(toplam)*/
/************BOOLEAN***********/
// let sayi1 = 3;
// let sayi2 = 4;
// console.log(sayi1 < sayi2);
/*---------undefiend-----------*/
// let ogrenci;
// console.log(ogrenci);

/*öğrenci yaş ve not ortalama hesaplama*/
//Date().getFullYear() yapısı bilgisayarda kayıtlı olan tarihi alır
// let suankiyil = new Date().getFullYear();
 let ogr1="mustafa";
 let ogr2="ayşe";
// let ogr1dogum=2003;
// let ogr2dogum=2004;
// let ogr1yas=suankiyil-ogr1dogum;
// let ogr2yas=suankiyil-ogr2dogum;
// console.log(ogr1yas);
// console.log(ogr2yas);
let ogr1not1=90;
let ogr1not2=40;
let ogr1not3=50;
let ogr2not1=70;
let ogr2not2=20;
let ogr2not3=100;
let ogr1ort=(ogr1not1+ogr1not2+ogr1not3)/3;
let ogr2ort=(ogr2not1+ogr2not2+ogr2not3)/3;
/*parseInt() yapısı ondalıklı kısmı atar sadece tam sayı olan kısmı bize yazar*/
console.log(parseInt (ogr1ort));
console.log(parseInt (ogr2ort));

