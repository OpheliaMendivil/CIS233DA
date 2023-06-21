let launchStatus = false;
let errorMessage = "";
//brakeLevel, 0
//tracLevel, 0
//gasLevel, 1
//battLevel, 1
//gearshiftStatus, 3
function tryLaunch() {
    if(parkLevel ==0 && tracLevel == 0 && gasLevel == 1 && battLevel == 1 &&
    gearshiftStatus == 3) {
        document.getElementById("launch").src = "./assets/images/lca1.png"
        errorMessage = "";

        let audio = new Audio("./assets/media/launch.mp3");
        audio.play();
    }else {
        launchStatus = false;
        if(parkLevel ==1){

            errorMessage = "Brake should be disengaged"
        } else if (tracLevel == 1) {
            errorMessage = "Traction should be off"

        } else if (gasLevel ==0) {
            errorMessage = "Out of Gas"

        } else if (battLevel ==0) {
            errorMessage = "Battery is dead"

        } else if (gearshiftStatus != 3) {
            errorMessage = "Shift should be on SPORTS mode"
        }
        document.getElementById("launch").src = "./assets/images/lca0.png";
        let audio = new Audio("./assets/media/sputter.mp3");
        audio.play();
}
document.getElementById("msg").innerText = errorMessage;
}
