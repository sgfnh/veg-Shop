function handle(event){
    event.preventDefault()
    const user={
        "nam":event.target.nam.value,
        "qua":event.target.qua.value,
        "pri":event.target.pri.value,
    }
    axios.post("https://crudcrud.com/api/826853e76ff141c88f23269d43b588df/vegShop",user)
    .then((res)=>{
        showscr(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
    
}
window.addEventListener('DOMContentLoaded',()=>{
    axios.get("https://crudcrud.com/api/826853e76ff141c88f23269d43b588df/vegShop")
    .then((res)=>{
        console.log(res)
        for(var i=0;i<res.data.length;i++){
            showscr(res.data[i])
        }
    })
    .catch((err)=>{
        console.log(err)
    })
}) 
function showscr(user){
    const lu=document.getElementById('po')
    const to=document.getElementById("hea")
    const h=lu.children.length;
    const jk=lu.children.length+1;
    to.textContent="Total:"+jk;

    //create Paragraph
    const li=document.createElement('p')
    li.id="uj";

    //create input
    const hj=document.createElement('input')
    hj.type="number"
    hj.placeholder="0"
    hj.id="io"

    //paragraph text content
    li.textContent=user.nam+"     Rs:"+user.pri+"     "+user.qua+"Kg"+"     ";
    li.appendChild(hj)
    lu.appendChild(li)

    //creating button
    const buy =document.createElement('button');
    buy.textContent="buy"
    buy.id="yu"
    li.append(buy)
    var del=document.createElement('button')
    del.textContent="delete"
    del.id="de"
    li.appendChild(del)

    //buy functionality
    buy.addEventListener("click",()=>{
        
        user.qua=Math.floor(user.qua)-Math.floor(hj.value)

        li.textContent=user.nam+"     Rs:"+user.pri+"     "+user.qua+"Kg"+"     ";
        li.appendChild(hj)
        li.appendChild(buy)
        li.appendChild(del)
        const newd={
            nam:user.nam,
            qua:user.qua,
            pri:user.pri
        }
        //edit functionality
        axios.put(`https://crudcrud.com/api/826853e76ff141c88f23269d43b588df/vegShop/${user._id}`,newd)
        
            
       .then((res)=>{
        console.log(res.data)
        })
       .catch((err)=>{
        console.log(err)
        })
       
    })

    //delete functionality
    del.addEventListener("click",()=>{
        axios.delete(`https://crudcrud.com/api/826853e76ff141c88f23269d43b588df/vegShop/${user._id}`)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
        lu.removeChild(li)
        const w=lu.children.length;
        to.textContent="Total:"+w;
    })
    
}
