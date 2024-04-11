function addBinary() {
    var binary1 = document.getElementById('binary1').value;
    var binary2 = document.getElementById('binary2').value;

    if(!/^[01]+$/.test(binary1) || !/^[01]+$/.test(binary2)) {
        alert('Oba vstupy musí být platná binární čísla!');
        return;
    }

    var sum = (BigInt("0b" + binary1) + BigInt("0b" + binary2)).toString(2);
    document.getElementById('result').textContent = sum;
}