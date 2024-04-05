function get(x)
{
    return document.querySelector(x);
}
function add()
{
    let x = get("#num1").value;
    let y = get("#num2").value/100;
    let m;

    m = x / y; 
    
    m = m.toFixed(2);

    get("#SI").innerText = "$" + m;
    get("#principal").innerText = "$" + x;
    get("#interest").innerText = (y*100)+"%";   
}
function yearday()
{
    if(get("#num4").value == 1 || get("#num4").value == 365)
    {
        get("#num3").disabled = true;
    }
    else
    {
        get("#num3").disabled = false;
    }
}
function info()
{
    return
}