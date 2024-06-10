
//aşağıda yaptığım işleme etot denir görüldüğü gibi hızını değiştiridim
// let araba={
//     renk:"siyah",
//     hiz:0,
//     hizlandir:function(){
//         this.hiz+=10;
//     }
// };
// console.log(araba.hiz);
// console.log(araba.renk);
// araba.hizlandir();
// console.log(araba.hiz);


//bu yazdığım constructor metot dur ama ES5 versiyonu
// function Araba(renk) {
//     this.renk = renk;
//     this.hiz = 0;
// }

// Araba.prototype.hizlandir = function() {
//     this.hiz += 10;
// };

// let araba = new Araba("siyah");
// console.log(araba.renk); 
// araba.hizlandir();
// console.log(araba.hiz); 

//ES6 Versiyonu
// class Araba{
//     constructor(renk){
//         this.renk=renk;
//     }
// }
// let araba=new Araba("siyah");
// console.log(araba.renk);

/*CLASS*/
// class Araba{
//     constructor(renk){
//         this.renk=renk;
//         this.hiz=0;
//     }

//     hizlandir(){
//         this.hiz+=10;
//     }
// }
// let araba=new Araba("siyah");
// console.log(araba.renk);
// console.log(araba.hiz);
// araba.hizlandir();
// console.log(araba.hiz);

/*Inheritance (Kalıtım)*/
class Araba
 {
     constructor(renk) {
         this.renk=renk;
         this.hiz=0;
     }
 }
 class Motorluaraba extends Araba
 {
     constructor(renk,hiz){
         super(renk,hiz);
        this.motor="V8";
     }
     hizladir(){
         this.hiz+=150;
     }
 }
 let araba=new Motorluaraba("red","V8");
 console.log(araba.renk);
 console.log(araba.motor);
 araba.hizladir();
 console.log(araba.hiz);

/*Encapsulation (Kapsülleme)*/
// class Araba{
//     #renk
//     constructor(renk){
//         this.#renk=renk;
//         this.hiz=0;
//     }
//     getRenk(){
//         return this.#renk;
//     }
//     setRenk(){
//         this.#renk=renk;
//     }
//     hizlandir(){
//         this.hiz+=200;
//     }
// }
// let araba=new Araba("blue");
// console.log(araba.getRenk());
// araba.hizlandir();
// console.log(araba.hiz);

/*Polymorphism (Çok Biçimlilik)*/
//Aşağıda yazmış olduğum kodda aynı metot adı kullanmama rağmen farklı sınıflarda oldukları için hata almadım
// class Shape {
//     draw() {
//         console.log("şekil çiziliyor");
//     }
// }
// class Circle extends Shape {
//     draw(radius) {
//         console.log(`${radius} radiuslu bir meridyen çiziliyor`);
//     }
// }
// let shape = new Shape();
// let circle = new Circle();
// shape.draw();
// circle.draw(30);


// class Calculator {
//     add(a, b) {
//         return a + b;
//     }
    
// }
// class Calculator2{
//     add(a, b, c) {
//         return a + b + c;
//     }
// }
// let calculator = new Calculator();
// let calculator2 = new Calculator2();
// console.log(calculator.add(1, 2)); 
// console.log(calculator2.add(1, 2, 3)); 