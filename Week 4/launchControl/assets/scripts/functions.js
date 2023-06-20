 showTime();
 let gasLevel = 0;
 let battLevel = 0;
 let tracLevel = 0;
 let parkLevel = 0;

 function getGas() {
    if(gasLevel == 0) {
        gasLevel = 1;
        document.getElementById("gas").src="./assets/images/gas1.png";
        document.getElementById("bttn_gas").src="./assets/images/bttn_gas_1.png";
    }else if(gasLevel == 1) {
        gasLevel = 0;
        document.getElementById('gas').src = "./assets/images/gas0.png";
        document.getElementById('bttn_gas').src = "./assets/images/bttn_gas_0.png";
    }
 }

 function getBatt() {
    if(battLevel == 0) {
        battLevel = 1;
        document.getElementById("batt").src="./assets/images/batt1.PNG";
        document.getElementById("bttn_gas").src="./assets/images/bttn_batt_1.PNG";
    }else if(gasLevel == 1) {
        battLevel = 0;
        document.getElementById('batt').src = "./assets/images/batt0.PNG";
    }
 }

 function getTrac() {
    if(tracLevel == 0) {
        tracLevel = 1;
        document.getElementById("trac").src="./assets/images/trac1.png";
        document.getElementById("bttn_trac").src="./assets/images/bttn_trac_1.PNG";
    }else if(gasLevel == 1) {
        tracLevel = 0;
        document.getElementById('trac').src = "./assets/images/trac0.PNG";
    }
 }
 function getPark() {
    if(parkLevel == 0) {
        parkLevel = 1;
        document.getElementById("park").src="./assets/images/p1.png";
        document.getElementById("bttn_park").src="./assets/images/bttn_park_1.PNG";
    }else if(gasLevel == 1) {
        gasLevel = 0;
        document.getElementById('park').src = "./assets/images/p0.PNG";
    }
 }
