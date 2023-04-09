var song = document.getElementById("song");
        var icon = document.getElementById("icon");
        
        icon.onclick = function(){
            if(song.paused){
                song.play();
                icon.src = "media/pause-button.png";
            }else{
                song.pause();
                icon.src = "media/play-button.png";
            }
        }