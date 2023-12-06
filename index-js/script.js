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
function resetForm() {
    // Reset input form values
    document.getElementById('inputForm').reset();
    
    // Hide output container and display input container
    document.getElementById('output').style.display = 'none';


    }

// let btnClear = document.querySelector('#reset');
// let inputs = document.querySelectorAll('#output');
// btnClear.addEventListener('click', () => {
//     inputs.forEach(output =>  output.value = '');
// });