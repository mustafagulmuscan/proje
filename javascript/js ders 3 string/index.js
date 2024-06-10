// const ad = "mustafa";
// const soyad = "gulmuscan";
// const okul = "hacettepe";
// const yas = 20;
// const memleket = "kütahya";
// /*Aşağıda yamış olduğum kodda arasına dolar işareti koyymamın nedeni kendi kendine boşluk joymasıdır ve çift tırnak arasına değil farklı bir tırnağın arasına yazdım bu yönteme backtick denir ve genellikle bu yöntem kullanılır o yüzden çok önemli*/
// const bio = `Merhaba benim adım ${ad} soyadım ${soyad},${memleket}'lıyım, ${yas} yaşındayım ve ${okul} üniversitesi öğrencisiyim 
// console.log( bio);

/*charat() metodu paarantes içine yazdığımız sayı sırasıında bulunan harfi yazdırır*/
// const a="hello world";
// const b=a.charAt(5);
// console.log(b);

/*charcodeat() metodu seçtiğimiz harfin unikod değerini yazdırır*/
// const a="hello world";
// const b=a.charCodeAt(2);
// console.log(b);

/*concat() metodu iki ayrı yazılmış dizeyi birleştirir*/
// let a="hello";
// let b="world";
// let c=a.concat(" ",b);
// console.log(c);

/*Özellik, constructorString prototipini oluşturan işlevi döndürür*/
//  let a="hello world";
// let b= a.constructor;
// console.log(b);

/*endsWith() metodu, yazdığımız yazıyı parantez içine yazdığımızda aynı ise true farklı ise false dödürür*/
// let text = "Hello World";
// let result = text.endsWith("World");
// console.log(result);

/*fromcharcode() metodu paramtez içine yazdığımız sayıları unikod karşılığındaki harfe dönüştürür*/
// let a=String.fromCharCode(72, 69, 76, 76, 79);
// console.log(a);

/*includes() metodu cümlenin içineki harf dizisiyle aynı harf dizisi girdiğimizde true değilse false verir */
// let text = "Hello world, welcome to the universe.";
// let result = text.includes("ana");
// console.log(result);

/*indexof() metodu yazdığımız kelimenin yada harfin kaçıncı sırada olduğunu bulur */
// let text = "Hello world, welcome to the universe.";
// let b=text.indexOf("the");
// console.log(b);

/*Yöntem lastIndexOf(), bir dizede belirtilen değerin son oluşumunun dizinini (konumunu) döndürür.*/
// let text = "Hello planet earth, you are a great planet.";
// let result = text.lastIndexOf("planet");
// console.log(result);
 
/*bu metot dizeleri karşıalştırır önecemi(1) sonramı(-1) eşitmi(0) değerlerini verir*/
// let text1 = "ab";
// let text2 = "cd";
// let result = text1.localeCompare(text2);
// console.log(result);

/*bu metot yadığımız harhlerin cümle içinde ne akdar tekrar ettiğini bir dizi içine alarak bize ayzar /g küresel aramaiçin kuullanılır /gi ise büyük harf küçük harf kuralını geçresiz kılar tek eğik çizgi ise normal aramadaır*/
// let text = "The rain in SPAIN stays mainly in the plain";
// let b=text.match(/ain/g);
// console.log(b);
