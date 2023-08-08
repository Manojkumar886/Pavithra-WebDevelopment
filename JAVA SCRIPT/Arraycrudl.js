const colorsname=new Array("pink","blue","purple","black","white","gray","red","orange");

let  listall=()=>
{
    let gettingcolors="";

    colorsname.map((data)=>
    {
        gettingcolors+="<tr><td>"+data+"</td></tr>"
    })
    document.getElementById("mycolors").innerHTML="<table align='center' cellspacing='20px'><thead><tr><th>Colors Names</th></tr></thead><tbody >"+gettingcolors+"</tbody></table>"
}

const creating=()=>
{
    let newvalue=document.getElementById("userid").value;

    // colorsname.unshift(newvalue);
    colorsname.push(newvalue);
    alert(newvalue+" this color is added in my database")
    listall()
}


let updating=()=>
{
    let index=document.getElementById("userid").value;


    let newvalue=prompt("please tell us your replace color name"+colorsname[index])

    colorsname[index]=newvalue;
    alert(colorsname[index]+" value replaced by "+newvalue)
    listall()
}

let removing=()=>
{
    var deletedvalue=document.getElementById("userid").value;
    alert("your value is deleted"+colorsname[deletedvalue])
    delete colorsname[deletedvalue];
   
    // colorsname=colorsname.filter((colorsq)=>
    // {
    //     return colorsq!==deletedvalue;
    // })
    listall()
}

let searching=()=>
{
    let mycolor=document.getElementById("userid").value;

    for(let pos=0;pos<colorsname.length;pos++)
    {
        if(colorsname[pos]==mycolor)
        {
            return pos;
        }
    }
}

function sorting()
{
    colorsname.sort();
    listall()
}