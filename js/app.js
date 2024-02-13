let positie = document.getElementsByClassName("rocket-ship")[0]


setInterval(()=>{
    let random = Math.floor(Math.random() * 90);
    positie.style.marginLeft = random + "%";
}, 2000)
