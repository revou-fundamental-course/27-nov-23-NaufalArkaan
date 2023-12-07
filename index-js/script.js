// JS LUAS
const alas = document.getElementById('alas')
const tinggi = document.getElementById('tinggi')
const hitung = document.getElementById('hitung')
const output = document.getElementById('output')
hitung.addEventListener('click', function () {
    let a = alas.value
    let t = tinggi.value
    let l = 0.5 * a * t
    output.innerHTML = `L = 1/2 x Alas x Tinggi <br> L = 1/2 x ${a} x ${t} <br> L = ${l} cm2`
})

// RESET LUAS
function resetForm() {
    // Reset input form values
    document.getElementById('inputForm').reset();

}


// JS KELILING
var kelilingA = document.getElementById('kelilingA')
var hitungKll = document.getElementById('hitungKll')
var cariKeliling = document.getElementById('cariKeliling')
hitungKll.addEventListener('click', function () {
    var o = kelilingA.value
    var hasil = 3 * o;
    cariKeliling.innerHTML = `Jadi Kelilingnya Adalah ${hasil} `
})

// RESET KELILING
function resetFormKeliling() {
    // Reset input form values
    document.getElementById('inputFormKeliling').reset();

}