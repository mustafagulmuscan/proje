// let check=false;

// function firstPromise(){
//     return new Promise((resolve,reject)=>{
//         if(check){
//             resolve("Sikinti yok")
//         }else{
//             reject("sikinti var")
//         }
//     })
// }
// firstPromise()
// .then((Response)=>{
//     console.log(Response);
// })
// .catch((error)=>{
//     console.log(error);
// })


//Promise+XMLHttpRequest

function ogrenci(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        try {
            xhr.addEventListener("readystatechange", () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
            })
        } catch (error) {
            reject(error);
        }
        xhr.open("GET", url);
        xhr.send();
    })
}
ogrenci("https://jsonplaceholder.typicode.com/comments",null)
    .then((data) => console.log(data))
    .catch((err) => console.log(err))