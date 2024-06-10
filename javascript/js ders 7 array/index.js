let array = ["kütahya", "ankara", "erzurum"];
let array2=["istanbul","adana","artvin"]
let result;
result = array.length;
// result=array.join(" ");/*join metodu stringe çevirir aynı Tostring gibi*/
// result = array.shift();dizideki ilk elemanı siler
// result=array.pop();dizideki son elemanı sildirir
// result=array.push("kars");diziye eleman ekleme
// result=array.unshift("kars");dizinin başına yeni eleman ekleme
// result=array.concat(array2);//iki diziyi birleştirmek için contect metodu kullanılır
// result=array.splice(0,2,array2);//splice() metodu yanda ayzmış olduğum indexlerdeki berileri  siler ve yeni arrayimizi ekler
// result=array.splice(0,2,"elma");
//splice() metodu sildiği verileri resulta atar sonra yeni diziyi yazdırır
// result=array.splice(0,2);
// delete array[0]; delete metodu dizden eleman silmemize yarar
// array=array2.flat();
// result=array.slice(1); slice metodu belirttiğimiz dizi elemınından itibaren keser ve ondan sonrasını yazdırır
console.log(result);
console.log(array);