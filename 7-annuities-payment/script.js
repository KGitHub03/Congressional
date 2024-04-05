function get(x)
{
    return document.querySelector(x);
}
function add()
{
    let x = get("#num1").value;
    let y = get("#num2").value/100;
    let z = get("#num3").value;
    let frq = get("#num4").value;
    let type = get("#due").value;
    let m = 0;
    
    if(type == 1)
    {
        m = (x * (y/frq))/((1-(1+(y/frq))**(-(z*frq))));
    }
    else if(type == 2)
    {
        m = (x * (y/frq))/((1-(1+(y/frq))**(-(z*frq)))*(1+(y/frq)));
    }
    m = m.toFixed(2);

    get("#SI").innerText = "$" + m;

    table = get(".table");
    table.innerHTML="<tr><th>Period</th><th>Present Value</th></tr>";
    if(type == '1')//anniuty    
    {
        for(i = 1; i < Math.ceil(z*frq)+1; i++)
        {
            x = x -(m-x*(y/frq));
            if(x < 0 || i == Math.ceil(z*frq))
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
        for(i = 1; i < Math.ceil(z*frq)+1; i++)
        {
            if(i == 1)
            {
                x = x -m;
            }
            else
            {
                x = x -(m-x*(y/frq));
            }
            if(x < 0 || i == Math.ceil(z*frq))
            {
                x = 0;
            }
            x = x.toFixed(2);
            row = document.createElement("tr");
            row.innerHTML = `<td>${i} period(s)</td><td>$${x}</td>`;
            table.appendChild(row);
        }
    }
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