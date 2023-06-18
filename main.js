const prompt = require("prompt-sync")();
function speedometer(speed) {
    const legalSpeed = 70;
    if(speed <= legalSpeed); {
        console.log("ok")
    }
    const incrementkm = 5;
    const high = parseInt(speed-legalSpeed)/incrementkm;
    if(high > 12) {
        console.log(licensesuspendend);
    }
    else {
        console.log("point:",high);
    }
}
speedometer(90);