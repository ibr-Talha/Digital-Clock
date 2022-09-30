function timeOver() {
    let date = new Date();
    let h = date.getHours(); //? saat
    let m = date.getMinutes(); //? dakika
    let s = date.getSeconds(); //? saniye
    let zaman = "AM";

    if (h === 0) {
        h = 12;
    }
    if (h > 12) {
        h -= 12;
        zaman = "PM";
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let clock = `${h}:${m}:${s}`;
    document.getElementById("saat").innerText = clock;
    document.getElementById("saat").textContent = clock;

    setTimeout(timeOver, 1000);
}
timeOver();