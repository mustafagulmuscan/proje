// let sehirler=["kütahya","adana","mersin","istanbul","ankara","uşak","erzurum"]
// for(let i=0;i<sehirler.length;i++){
//     console.log(sehirler[i]);
// }
// let sayilar=[10,20,5,100,200]
// let toplam=0;
// // for(let i=0;i<sayilar.length;i++){
    
// //     console.log(toplam=toplam+sayilar[i]);
// // }
// // for(let i in sayilar){
    
// //     console.log(toplam=toplam+sayilar[i]);
// // }
// for(let i of sayilar){
    
//     console.log(toplam=toplam+i);
// }
let person=[
    {
        "id":"1",
        "ad":"mustafa",
        "soyad":"gulmuscan",
        "yas":"20",
        "memleket":"kutahya"
    },
    {
        "id":"2",
        "ad":"mehemt",
        "soyad":"gulmuscan",
        "yas":"50",
        "memleket":"kutahya"
    },
    {
        "id":"3",
        "ad":"emine",
        "soyad":"gulmuscan",
        "yas":"45",
        "memleket":"kutahya"
    }
]
for(let i=0;i<person.length;i++){
    console.log(person[i].ad);
}