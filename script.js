Shery.mouseFollower();
Shery.makeMagnet(".magnet");

gsap.to(".main", {
  background: "linear-gradient(#FF735C,#fff)",
  // background :"#ffc5bc",
  // height:"10vh",
  // duration:0.5,
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    // markers:true,
    start: "top -20%",
    end: "top -80%",
    scrub: 3,
  },
});

var crsr = document.querySelector("#minicircle");
var main = document.querySelector(".main");

main.addEventListener("mousemove", function (dets) {
  // console.log(dets.x)
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
});

// var btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
//   // e.preventDefault();
//   var name = document.querySelector("#fullname").value;
//   var email = document.querySelector("#email").value;
//   var mobile = document.querySelector("#mobile").value;
//   var massag = document.querySelector("#massage").value;
//   var body = `name : ${name} </br> email : ${email} </br> mobile : ${mobile} </br> massage : ${massag} `
//   // alert(body)
//   Email.send({
//     SecureToken: "eeec85ce-ea13-4ef8-9c59-bd0554f3e7c7",
//     To: "info.colourfull@gmail.com",
//     From: "coloufull.in@gmail.com",
//     Subject: "This is the subject",
//     Body: body,
//   }).then((message) => alert(message));
//   // alert(body)
// });
