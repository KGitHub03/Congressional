function get(x)
{
    return document.querySelector(x);
}
function add()
{
    let x = parseInt(get("#num1").value);
    let y = get("#num3").value/100;
    let z = parseInt(get("#num2").value);
    let frq = get("#num4").value;
    let type = get("#due").value;
    let flag = false;
    let m = 0;
    let g = 0;
    if(z > x)
    {
        flag = true;
    }
    if(type == '1' && flag == false)//anniuty   
    {
        m= -1 * Math.log10(1-(x * (y/frq))/(z))/Math.log10(1+(y/frq))/frq;
    }
    else if(type == '2' && flag == false)//due
    {
        m = -1 * Math.log10(1-(x * (y/frq))/(z * (1+(y/frq))))/Math.log10(1+(y/frq))/frq;
    }
    else
    {
        get("#SI").innerText = "Payment cannot be greater than present value";
        return;
    }
    
    m = m.toFixed(2);
    table = get(".table");
    table.innerHTML="<tr><th>Period</th><th>Present Value</th></tr>";
    if(type == '1')//anniuty    
    {
        for(i = 1; i < Math.ceil(m*frq)+1; i++)
        {
            x = x -(z-x*(y/frq));
            if(x < 0 || i == Math.ceil(m*frq))
            {
                x = 0;
            }
            x = x.toFixed(2);
            row = document.createElement("tr");

            row.innerHTML = `<td>${i} period(s)</td><td>$${x}</td>`;
            table.appendChild(row);
        }
    }
    else if(type == '2')//due
    {
        for(i = 1; i < Math.ceil(m*frq)+1; i++)
        {
            if(i == 1)
            {
                x = x -z;
            }
            else
            {
                x = x -(z-x*(y/frq));
            }
            if(x < 0 || i == Math.ceil(m*frq))
            {
                x = 0;
            }
            x = x.toFixed(2);
            row = document.createElement("tr");
            row.innerHTML = `<td>${i} period(s)</td><td>$${x}</td>`;
            table.appendChild(row);
        }
    }
    get("#SI").innerText = m+ " years";
}