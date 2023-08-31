Shery.mouseFollower();
Shery.makeMagnet(".magnet");

gsap.to(".main",{
    background: "linear-gradient(#FF735C,#fff)",
    // background :"#ffc5bc",
    // height:"10vh",
    // duration:0.5,
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        // markers:true,
        start:"top -20%",
        end:"top -80%",
        scrub:3
    },
})

var crsr =document.querySelector("#minicircle")
var main =document.querySelector(".main")

main.addEventListener("mousemove",function(dets){
  // console.log(dets.x)
  crsr.style.left =dets.x+"px"
  crsr.style.top =dets.y+"px"
})