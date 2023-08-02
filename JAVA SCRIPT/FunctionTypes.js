// function syntex:
// function function(udf)()
// {

// }

function noarg()
{
    // keyword variablename=value;
    let a=10
    alert("a values is "+a+"\n this value datatype is "+typeof(a))
}

function witharg(username,userid)
{
    var employeeeid=userid;
    const employeename=username;
    document.write("employee ID :"+"\t "+employeeeid+"\n employee NAME :"+"\t"+employeename);
}
// fat arrow =>

let noarg1=()=>
{
    alert("Arrow functions allow us to use the fat arrow => operator to quickly define JavaScript functions, with or without parameters.")
}

const witharg1=(a,b)=>
{
    return a*b;
}