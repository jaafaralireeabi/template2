let arrow = document.getElementById("arrow");
let point = document.getElementById("point");
let Landing = document.getElementById("Landing");
let backgroundimage = ["owl-1","owl-2","owl-3"];
let s = 1;
function change_background () {
    switch (s) {
        case 1:
            Landing.style.backgroundImage = `url("../image/${backgroundimage[1]}.jpg")`;
            s = 2;
            break;
        case 2:
            Landing.style.backgroundImage = `url("../image/${backgroundimage[2]}.jpg")`;
            s = 3;
            break;
        default:
            Landing.style.backgroundImage = `url("../image/${backgroundimage[0]}.jpg")`;
            s = 1;
            break;
    }
};
arrow.onclick = change_background();
point.onclick = change_background();