function onClickAbsoluteStatic() {
    var result = Math.abs(-67);
    document.getElementById("pAbsoluteStatic").innerHTML = result;
}

function onClickAbsoluteDynamic() {
    debugger;
    var number = Number(document.getElementById("txtNumber").value);
    var result = Math.abs(number);
    document.getElementById("pAbsoluteDynamic").innerHTML = result;
}