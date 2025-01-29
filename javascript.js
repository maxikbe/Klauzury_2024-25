function MenuOut(){
    if(document.getElementById('Menu').classList.contains("close-icon-anim")){
        document.getElementById('Menu').classList.replace("close-icon-anim","open-icon-anim");
    }else{
        document.getElementById('Menu').classList.remove("open-icon-anim","close-icon-anim");
    }
}