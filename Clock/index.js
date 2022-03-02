function time() {
    const date = new Date();
    const time = date.toLocaleTimeString();
    document.getElementById("demo").innerHTML = time;
}
setInterval(time, 1000);

