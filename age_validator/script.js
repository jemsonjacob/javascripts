function validateAge(){
    let age= txt.value
    let res=""
    if (age<18){
        res='<p style="color:red">not eligible</p>'

    }
    else{
       res='<p style="color:green">eligible</p>'

    }

     result.innerHTML=res


    // document.querySelector("body").append(div)

}