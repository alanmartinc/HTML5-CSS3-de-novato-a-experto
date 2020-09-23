var i = 0;
function contador() {
    i = i + 1;
    postMessage(i);
    setTimeout("contador()",500);
}
contador();
