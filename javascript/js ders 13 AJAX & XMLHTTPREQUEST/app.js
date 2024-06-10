function yorumlar(url,id){
    if(id===null){
        return(url)
    }
    return`${url}?postId=${id}`
}



function yorumlarigetir(url,id){
    let newurl=yorumlar(url,id)
    const xhl=new XMLHttpRequest();
    xhl.addEventListener("readystatechange" , ()=>{
        if(xhl.readyState===4 && xhl.status===200){
            console.log(JSON.parse(xhl.responseText))
        }
    })
    xhl.open("GET",newurl)
    xhl.send()
}
yorumlarigetir("https://jsonplaceholder.typicode.com/comments",50)