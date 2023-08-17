console.log(document.cookie);

function fun(event) {
    let code = document.getElementById("code").value;
    if (document.getElementById("txt2").value == 0) {
        document.cookie = "color=rgb(" + code + ");max-age=10800; SameSite=Strict ";
    }
    if (document.getElementById("txt2").value == 1) {
        document.cookie = "color=rgba(" + code + ");max-age=10800; SameSite=Strict ";
    }
    if (document.getElementById("txt2").value == 2) {
        document.cookie = "color=" + code + ";max-age=10800; SameSite=Strict ";
    }

    let contr1;
    let contr2;
    let contr3;
    let contr4;
    let re1 = new RegExp("^[a-zA-Z]+$");

    if (re1.test(document.getElementById("color").value)) {
        contr1 = true;
    }
    else {
        let span1 = document.createElement('span');
        span1.innerText = " ERROR!!!";
        span1.style.color = "red";
        span1.style.marginLeft = "30px";
        let txt1 = document.getElementById("txt1");
        txt1.appendChild(span1);
        contr1 = false;
    }
    let selectRgb = document.getElementById("txt2").value;

    if (selectRgb == 0) {

        let reRgb = new RegExp("(^\\d{1,3}),\\s*(\\d{1,3}),\\s*(\\d{1,3})$");
        if (reRgb.test(code)) {

            contr2 = true;

        }
        else {
            let span2 = document.createElement('span');
            span2.innerText = 'Введите 3 числа от 0 до 255 через ",".';
            span2.style.color = "red";
            let txt3 = document.getElementById("txt3");
            txt3.appendChild(span2);
            contr2 = false;
        }
    }

    if (selectRgb == 1) {
        let reRgba = new RegExp("(^\\d{1,3}),\\s*(\\d{1,3}),\\s*(\\d{1,3}),\\s*(0?\\.\\d|1(\\.0)?|0(\\.0)?)$");
        if (reRgba.test(code)) {
            contr3 = true;
        }
        else {
            let span3 = document.createElement('span');
            span3.innerText = 'Введите 3 числа от 0 до 255 через "," и 4 число от 0 до 1.';
            span3.style.color = "red";
            txt3.appendChild(span3);
            contr3 = false;
        }
    }

    if (selectRgb == 2) {
        let reHex = new RegExp("(^\#([a-fA-F0-9]{6})$)");
        if (reHex.test(code)) {
            contr4 = true;
        }
        else {
            let span4 = document.createElement('span');
            span4.innerText = 'Введите символ # и 6 цифр или букв от A до F.';
            span4.style.color = "red";
            txt3.appendChild(span4);
            contr4 = false;
        }
    }
    if ((contr1 == false) || (contr2 == false) || (contr3 == false) || (contr4 == false)) return false;
    else {
        let colorDiv = document.getElementById("colorDiv");
        let newDiv = document.createElement("div");
        newDiv.id = "nDiv";
        let litlDiv = document.createElement("div");
        let format;
        let bg;
        if (selectRgb == 0) {
            format = "rgb";
            bg = format + "(" + code + ")";
        }
        if (selectRgb == 1) {
            format = "rgba";
            bg = format + "(" + code + ")";
        }
        if (selectRgb == 2) {
            format = "";
            bg = format + code;
        }
        litlDiv.classList.add("div2");
        newDiv.appendChild(litlDiv);
        colorDiv.appendChild(newDiv);
        newDiv.style.backgroundColor = `${bg}`;
        newDiv.classList.add("div1");
        let pColor = document.createElement("p");
        let pFormat = document.createElement("p");
        let pNumber = document.createElement("p");
        pColor.innerText = document.getElementById("color").value;
        if (selectRgb == 2) {
            format = "hex";
        }
        pFormat.innerText = format;
        pNumber.innerText = code;
        litlDiv.append(pColor, pFormat, pNumber);
        pColor.classList.add("info");
        pFormat.classList.add("info");
        pNumber.classList.add("info");                
        return false;
    }
}