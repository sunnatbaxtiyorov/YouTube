
function allFltr(){
    var x ,i;
     x = document.querySelectorAll(".video");
     for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";
      }
}

function cartoonFltr() {
    var x, i , y;
    y = document.querySelectorAll("#cartoon");
    x = document.querySelectorAll("#video , #football");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0;i < y.length; i ++){
        y[i].style.display = 'block';
    }
}

function footballFltr() {
    var x, i, y;
    x = document.querySelectorAll("#video , #cartoon");
    y = document.querySelectorAll("#football");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }

    for (i = 0; i < y.length; i++){
        y[i].style.display = "block";
    }
}


function openBurger(){
    var i ,x , y , video, logo;
    x = document.querySelectorAll(".aside");
    y = document.querySelector(".mini-menu");
    z = document.querySelector(".container");
    logo = document.querySelector(".logo-hidden");
    video = document.querySelectorAll(".video");
    categories = document.querySelector(".categories");
    categories.style.marginLeft = "0px";
    z.style.transform= "translate(34px, 0px)";
    z.style.maxWidth = "1455px";
    logo.style.display = "block";
    for (i = 0;  i < x.length; i++){
        x[i].style.display = "none";
    }

    for (i = 0; i<video.length; i ++){
        video[i].style.maxWidth = "400px";
    }

    y.style.display = "block";

}

function closeBurger(){
    
    var aside , mini , container , categories;
    aside = document.querySelector(".aside");
    mini = document.querySelector(".mini-menu");
    categories = document.querySelector(".categories");
    container = document.querySelector(".container");
    container.style.maxWidth = "1280px";
    categories.style.marginLeft = "222px";
    container.style.transform= "translate(106px, 0px)";
    aside.style.display = "block";
    mini.style.display = "none";

}

function createVideoOpen(){
    var open = document.querySelector(".create-video");
    var close = document.querySelector(".create-videoHidden");
    var content = document.querySelector(".create-video-hidden");
    open.style.display = "none";
    content.style.display = "block";
    addEventListener("click",avatarClose(),appClose(),notificationsClose());

    close.style.display = "block";
}

function createVideoClose(){
    var open = document.querySelector(".create-video");
    var close = document.querySelector(".create-videoHidden");
    var content = document.querySelector(".create-video-hidden");
    open.style.display = "block";
    content.style.display = "none";
    close.style.display = "none";
    
}

function appOpen(){
    var open = document.querySelector(".app");
    var close = document.querySelector(".app-hidden-btn");
    var content = document.querySelector(".app-hidden");
    open.style.display = "none";
    content.style.display = "block";
    close.style.display = "block";
    addEventListener("click",createVideoClose(),avatarClose(),notificationsClose());

}

function appClose(){
    var open = document.querySelector(".app");
    var close = document.querySelector(".app-hidden-btn");
    var content = document.querySelector(".app-hidden");
    open.style.display = "block";
    content.style.display = "none";
    close.style.display = "none";
}

function notificationsOpen(){
    var open = document.querySelector(".notifications");
    var close = document.querySelector(".notifications-hidden-btn");
    var content = document.querySelector(".notifications-hidden");
    open.style.display = "none";
    content.style.display = "block";
    

    close.style.display = "block";
    addEventListener("click",createVideoClose(),appClose(),avatarClose());
}

function notificationsClose(){
    var open = document.querySelector(".notifications");
    var close = document.querySelector(".notifications-hidden-btn");
    var content = document.querySelector(".notifications-hidden");
    open.style.display = "block";
    content.style.display = "none";
    close.style.display = "none";
}

function avatarOpen(){
    var open = document.querySelector(".avatar");
    var close = document.querySelector(".avatar-hidden-btn");
    var content = document.querySelector(".avatar-hidden");
    open.style.display = "none";
    content.style.display = "block";
    addEventListener("click",createVideoClose(),appClose(),notificationsClose());

    close.style.display = "block";
}

function avatarClose(){
    var open = document.querySelector(".avatar");
    var close = document.querySelector(".avatar-hidden-btn");
    var content = document.querySelector(".avatar-hidden");
    open.style.display = "block";
    content.style.display = "none";
    close.style.display = "none";
    
}


window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.querySelectorAll(".app");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


// if(screen.width <= 1520){
//     const container = document.querySelector(".container");
//     container.style.maxWidth = "1280";
//     container.style.transform = "translate(0px,0px)";
// }
