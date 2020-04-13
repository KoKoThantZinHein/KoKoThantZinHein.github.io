console.log("This website may contain copyright.");

// /* mouseover */
// function onMouseHover(){
//     document.getElementsByClassName("box")[0].style.marginTop="0px";
//     document.getElementsByClassName("cover")[0].style.height="300px";
//     document.getElementsByClassName("cover")[0].style.borderRadius="0";
//     document.getElementsByClassName("thumbnails")[0].style.borderRadius="0";
       
// }
// function onMouseHover1(){
//     document.getElementsByClassName("box")[1].style.marginTop="0px";
//     document.getElementsByClassName("cover")[1].style.height="300px";
//     document.getElementsByClassName("cover")[1].style.borderRadius="0";
//     document.getElementsByClassName("thumbnails")[1].style.borderRadius="0";

// }
// function onMouseHover2() {
//     document.getElementsByClassName("box")[2].style.marginTop="0px";
//     document.getElementsByClassName("cover")[2].style.height="300px";
//     document.getElementsByClassName("cover")[2].style.borderRadius="0";
//     document.getElementsByClassName("thumbnails")[2].style.borderRadius="0";
// }



// /* mouseout */
// function onMouseOut() {
//     document.getElementsByClassName("box")[0].style.marginTop="10px";
//     document.getElementsByClassName("cover")[0].style.height="280px";
//     document.getElementsByClassName("cover")[0].style.borderRadius="5px";
//     document.getElementsByClassName("thumbnails")[0].style.borderRadius="0px 0px 5px 5px";
// }
// function onMouseOut1() {
//     document.getElementsByClassName("box")[1].style.marginTop="10px";
//     document.getElementsByClassName("cover")[1].style.height="280px";
//     document.getElementsByClassName("cover")[1].style.borderRadius="5px";
//     document.getElementsByClassName("thumbnails")[1].style.borderRadius="0px 0px 5px 5px";
// }
// function onMouseOut2() {
//     document.getElementsByClassName("box")[2].style.marginTop="10px";
//     document.getElementsByClassName("cover")[2].style.height="280px";
//     document.getElementsByClassName("cover")[2].style.borderRadius="5px";
//     document.getElementsByClassName("thumbnails")[2].style.borderRadius="0px 0px 5px 5px";
// }

var checked = false;
function toggle(){
    if(!checked){
        checked = true;
        document.getElementsByClassName("change")[0].style.backgroundColor="rgb(11, 50, 75)";
        document.getElementsByClassName("change")[0].style.color="white";
        document.getElementsByClassName("menu")[0].style.backgroundColor="rgba(0, 0, 0, 0.6)";
        document.getElementsByClassName("thumbnails")[0].style.backgroundColor="rgba(0, 0, 0, 0.6)";
        document.getElementsByClassName("thumbnails")[1].style.backgroundColor="rgba(0, 0, 0, 0.6)";
        document.getElementsByClassName("thumbnails")[2].style.backgroundColor="rgba(0, 0, 0, 0.6)";
        document.getElementsByClassName("cc")[0].style.boxShadow="0px 0px 5px 0px rgba(255, 255, 255, 0.5)";
        document.getElementsByClassName("cc")[1].style.boxShadow="0px 0px 5px 0px rgba(2555, 255, 255, 0.5)";
        document.getElementsByClassName("cc")[2].style.boxShadow="0px 0px 5px 0px rgba(255, 255, 255, 0.5)";
        document.getElementsByClassName("cc")[0].style.color="white";
        document.getElementsByClassName("cc")[1].style.color="white";
        document.getElementsByClassName("cc")[2].style.color="white";
        document.getElementsByClassName("view")[0].style.color="white";
        document.getElementsByClassName("view")[1].style.color="white";
        document.getElementsByClassName("view")[2].style.color="white";
        document.getElementsByClassName("view")[3].style.color="white";
        document.getElementsByClassName("view")[4].style.color="white";
        document.getElementsByClassName("view")[5].style.color="white";
        document.getElementsByClassName("view")[6].style.color="white";
        document.getElementsByClassName("view")[0].style.boxShadow="0px 0px 5px 0px rgba(255, 255, 255, 0.5)";
        document.getElementsByClassName("view")[1].style.boxShadow="0px 0px 5px 0px rgba(2555, 255, 255, 0.5)";
        document.getElementsByClassName("view")[2].style.boxShadow="0px 0px 5px 0px rgba(255, 255, 255, 0.5)";
        document.getElementsByClassName("view")[3].style.boxShadow="0px 0px 5px 0px rgba(255, 255, 255, 0.5)";
        document.getElementsByClassName("view")[4].style.boxShadow="0px 0px 5px 0px rgba(2555, 255, 255, 0.5)";
        document.getElementsByClassName("view")[5].style.boxShadow="0px 0px 5px 0px rgba(255, 255, 255, 0.5)";
        document.getElementsByClassName("view")[6].style.boxShadow="0px 0px 5px 0px rgba(255, 255, 255, 0.5)";
        document.getElementById("footer").style.backgroundColor="rgba(0,0,0,0.6)";
        return;
    }
    if (checked) {
        checked = false;
        document.getElementsByClassName("change")[0].style.backgroundColor="white";
        document.getElementsByClassName("change")[0].style.color="black";
        document.getElementsByClassName("menu")[0].style.backgroundColor="rgba(255, 255, 255, 0.6)";
        document.getElementsByClassName("thumbnails")[0].style.backgroundColor="rgba(255, 255, 255, 0.6)";
        document.getElementsByClassName("thumbnails")[1].style.backgroundColor="rgba(255, 255, 255, 0.6)";
        document.getElementsByClassName("thumbnails")[2].style.backgroundColor="rgba(255, 255, 255, 0.6)";
        document.getElementsByClassName("cc")[0].style.boxShadow="0px 0px 5px 0px rgba(0, 0, 0, 0.5)";
        document.getElementsByClassName("cc")[1].style.boxShadow="0px 0px 5px 0px rgba(0, 0, 0, 0.5)";
        document.getElementsByClassName("cc")[2].style.boxShadow="0px 0px 5px 0px rgba(0, 0, 0, 0.5)";
        document.getElementsByClassName("cc")[0].style.color="black";
        document.getElementsByClassName("cc")[1].style.color="black";
        document.getElementsByClassName("cc")[2].style.color="black";
        document.getElementsByClassName("view")[0].style.color="black";
        document.getElementsByClassName("view")[1].style.color="black";
        document.getElementsByClassName("view")[2].style.color="black";
        document.getElementsByClassName("view")[3].style.color="black";
        document.getElementsByClassName("view")[4].style.color="black";
        document.getElementsByClassName("view")[5].style.color="black";
        document.getElementsByClassName("view")[6].style.color="black";
        document.getElementsByClassName("view")[0].style.boxShadow="0px 0px 5px 0px rgba(0, 0, 0, 0.5)";
        document.getElementsByClassName("view")[1].style.boxShadow="0px 0px 5px 0px rgba(0, 0, 0, 0.5)";
        document.getElementsByClassName("view")[2].style.boxShadow="0px 0px 5px 0px rgba(0, 0, 0, 0.5)";
        document.getElementsByClassName("view")[3].style.boxShadow="0px 0px 5px 0px rgba(0, 0, 0, 0.5)";
        document.getElementsByClassName("view")[4].style.boxShadow="0px 0px 5px 0px rgba(0, 0, 0, 0.5)";
        document.getElementsByClassName("view")[5].style.boxShadow="0px 0px 5px 0px rgba(0, 0, 0, 0.5)";
        document.getElementsByClassName("view")[6].style.boxShadow="0px 0px 5px 0px rgba(0, 0, 0, 0.5)";
        document.getElementById("footer").style.backgroundColor="aliceblue";
        return;
    }
}

var mybutton = document.getElementById("gotop");

window.onscroll = function() {scrollTop()};

function scrollTop() {
    if (document.body.onscroll > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function myScroll() {
    document.body.onscroll = 0;
    document.documentElement.scrollTop = 0;
}