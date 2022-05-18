function total(){
    const m1 = parseInt(document.getElementById('men1').value);
    const m2 = parseInt(document.getElementById('men2').value);
    const m3 = parseInt(document.getElementById('men3').value);
    const m4 = parseInt(document.getElementById('men4').value);
    const m5 = parseInt(document.getElementById('men5').value);
    const mc1 = (m1*15);
    const mc2 = (m2*50);
    const mc3 = (m3*20);
    const mc4 = (m4*30);
    const mc5 = (m5*25);
    const add = (mc1+mc2+mc3+mc4+mc5)
    document.getElementById('total').innerHTML = "Total: " + add + "$";
}
function total2(){
    const w1 = parseInt(document.getElementById('wmen1').value);
    const w2 = parseInt(document.getElementById('wmen2').value);
    const w3 = parseInt(document.getElementById('wmen3').value);
    const w4 = parseInt(document.getElementById('wmen4').value);
    const w5 = parseInt(document.getElementById('wmen5').value);
    const wc1 = (w1*17);
    const wc2 = (w2*25);
    const wc3 = (w3*20);
    const wc4 = (w4*30);
    const wc5 = (w5*25);
    const add = (wc1+wc2+wc3+wc4+wc5)
    document.getElementById('total2').innerHTML = "Total: " + add + "$";
}
function total3(){
    const k1 = parseInt(document.getElementById('kid1').value);
    const k2 = parseInt(document.getElementById('kid2').value);
    const k3 = parseInt(document.getElementById('kid3').value);
    const k4 = parseInt(document.getElementById('kid4').value);
    const k5 = parseInt(document.getElementById('kid5').value);
    const k6 = parseInt(document.getElementById('kid6').value);
    const k7 = parseInt(document.getElementById('kid7').value);
    const kc1 = (k1*15);
    const kc2 = (k2*24);
    const kc3 = (k3*20);
    const kc4 = (k4*40);
    const kc5 = (k5*30);
    const kc6 = (k6*23);
    const kc7 = (k7*20);
    const add = (kc1+kc2+kc3+kc4+kc5+kc6+kc7);
    document.getElementById('total3').innerHTML = "Total: " + add + "$";
}