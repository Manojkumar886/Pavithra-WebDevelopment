let Initial=()=>
{
    clothtypes={"Cloths":["Silk","Wool","Cotton","Nylon","Polyestar"]}

    localStorage.setItem("ClothsMENU",JSON.stringify(clothtypes));
    alert("Local storage is created")
}


let NewvalueAdding=()=>
{
    let newvalue=document.getElementById("uservalue").value;
    
    let gettingoldvalue=localStorage.getItem("ClothsMENU");

    let convertingobject=JSON.parse(gettingoldvalue);

    convertingobject["Cloths"].push(newvalue);

    alert(convertingobject);

    localStorage.setItem("ClothsMENU",JSON.stringify(convertingobject));

    alert(convertingobject["Cloths"]+" your value is added successfully")
}

let clearall=()=>
{
    localStorage.clear();
}

let deleteoneLS=()=>
{
    let removekey=document.getElementById("uservalue").value;
    localStorage.removeItem(removekey);
}