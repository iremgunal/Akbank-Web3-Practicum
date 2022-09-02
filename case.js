let sayi = document.querySelector("#sayi");
let sonuc = document.querySelector("#sonuc");
let hesapla = document.querySelector("#hesapla");

hesapla.onclick = function () {
    let adet = 0, toplam = 0;
    let num = Number(sayi.value);
    console.log(num);
    while (num != 0) {
        toplam = (num % 10) + toplam;
        num = Math.floor(num / 10);
        ++adet;
        if (toplam % 2 == 0) {
            sonuc.value = "Even";          
        }else {
            sonuc.value = "Odd";
        }
    }
   
    console.log(sonuc.value);
} 