function imgBinatang() {
    let cetak = document.getElementById("cetak")
    let binatang = document.getElementById("binatang")
    if (binatang.value == "t") {
        alert("Ini Adalah Tiranosaurus atau T-Rex")
        return cetak.src = "trex.png"
    } else if (binatang.value == "m") {
        alert("Ini Adalah Megalodon")
        return cetak.src = "megalodon.png"
    } else if (binatang.value == "u") {
        alert("Ini Adalah Ular Kobra")
        return cetak.src = "ular.png"
    } else if (binatang.value == "f") {
        alert("Ini Adalah Flamingo")
        return cetak.src = "flamingo.png"
    } else if (binatang.value == "b") {
        alert("Ini Adalah Burung Beo")
        return cetak.src = "beo.png"
    }
}
