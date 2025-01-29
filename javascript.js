function MenuOut(){
    if(document.getElementById('Menu').classList.contains("opened-nav")){
        document.getElementById('Menu').classList.remove("play-open-anim");
        document.getElementById('Menu').classList.add("play-close-anim");
        setTimeout(function(){
            document.getElementById('Menu').classList.remove("opened-nav");
            document.getElementById('Menu').classList.add("closed-nav");
            document.getElementById('Menu').classList.remove("play-close-anim");
        }, 2000);
    }else if(document.getElementById('Menu').classList.contains("closed-nav")){
        document.getElementById('Menu').classList.remove("play-close-anim");
        document.getElementById('Menu').classList.add("play-open-anim");
        setTimeout(function(){
            document.getElementById('Menu').classList.remove("closed-nav");
            document.getElementById('Menu').classList.add("opened-nav");
            document.getElementById('Menu').classList.remove("play-open-anim");
        }, 2000);
    }
}