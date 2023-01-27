let contentOnly = document.querySelector(".onlycontent").style
let sideMenu = document.querySelector("#menu");
console.log("Java_T_point is fetched");

function Java_T_Point(){
    contentOnly.minWidth = "75%"
    sideMenu.style.position = "sticky"
    sideMenu.style.top = "3rem"
    sideMenu.style.overflowY = "scroll";
    sideMenu.style.overflowX = "hidden";
    sideMenu.style.height = "calc(100vh - 8rem)";
    console.log("Java_T_point is executed");
}

Java_T_Point();