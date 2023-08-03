const colorsname=new Array("pink","blue","purple","black","white","gray","red","orange");

let  listall=()=>
{
    let gettingcolors="";

    colorsname.map((data)=>
    {
        gettingcolors+="<tr><td>"+data+"</td></tr>"
    })
    document.getElementById("mycolors").innerHTML="<table align='center'><thead><tr><th>Colors Names</th></tr></thead><tbody>"+gettingcolors+"</tbody></table>"
}

const creating=()=>
{
    let newvalue=document.getElementById("userid").value;

    // colorsname.unshift(newvalue);
    colorsname.push(newvalue);
    alert(newvalue+" this color is added in my database")
    listall()
}