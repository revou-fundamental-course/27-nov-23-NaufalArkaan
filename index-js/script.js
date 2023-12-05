// JS LUAS
const alas = document.getElementById('alas')
const tinggi = document.getElementById('tinggi')
const hitung = document.getElementById('hitung')
const output = document.getElementById('output')
hitung.addEventListener('click', function(){
    let a = alas.value
    let t = tinggi.value
    let l = 0.5*a*t
    output.innerHTML = `Hasil luas segitiga adalah ${l} cm2`
})

// RESET LUAS
let btnClear = document.querySelector('#reset');
let inputs = document.querySelectorAll('input');
let outputs = document.querySelector('#output');

btnClear.addEventListener('click',()=>{
    inputs.forEach(input=>input.value='');
});
