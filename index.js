let a = 0;

function add(){
    let par1 = Number(document.getElementById("fNumber").value);
    let par2 = Number(document.getElementById("lNumber").value);
    let r1 = document.getElementById("result");
    let a = par1 + par2;
    r1.textContent = a;
}

function subtract(){
    let par1 = Number(document.getElementById("fNumber").value);
    let par2 = Number(document.getElementById("lNumber").value);
    let r1 = document.getElementById("result");
    let a = par1 - par2;
    r1.textContent = a;
}

function division(){
    let par1 = Number(document.getElementById("fNumber").value);
    let par2 = Number(document.getElementById("lNumber").value);
    let r1 = document.getElementById("result");
    let a = par1 / par2;
    r1.textContent = a;
}

function multiply(){
    let par1 = Number(document.getElementById("fNumber").value);
    let par2 = Number(document.getElementById("lNumber").value);
    let r1 = document.getElementById("result");
    let a = par1 * par2;
    r1.textContent = a;

}


