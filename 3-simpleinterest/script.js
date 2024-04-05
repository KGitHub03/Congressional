function get(x)
{
    return document.querySelector(x);
}
function add()
{
    let x = get("#num1").value;
    let y = get("#num2").value;
    let z = get("#num3").value;
    let frq = get("#num4").value;
    let m = 0;

    m = x * (1 + (y / 100) / frq * z);

    m = m.toFixed(2);
    
    get("#SI").innerText = "$" + m;
    get("#principal").innerText = "$" + x;
    get("#interest").innerText = "$" + (m-x).toFixed(2);
}