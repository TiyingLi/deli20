video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
    video.autoplay = false;
    video.loop = false;
    console.log("page load done")
    

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

// play button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
    video.play();
    volumeText = document.querySelector("#volume");
    volumeText.innerHTML = video.volume*100 + "%";
});

// pause button
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
    video.pause();
});

// slow down
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down Video");
    video.playbackRate -= 0.1;
    console.log("Current speed: " + video.playbackRate);
});

// speed up
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up Video");
    video.playbackRate += 0.1;
    console.log("Current speed: " + video.playbackRate);
});

// skip 10 sec
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Video 10 sec");
    if(video.currentTime + 10 > video.duration){
        video.currentTime = 0;
    } else {
        video.currentTime += 10;
    }
    console.log("Current time location: " + video.currentTime);
});

// Mute
document.querySelector("#mute").addEventListener("click", function() {
	console.log("Muted updated");

    if(video.muted){
        video.muted = !video.muted;
        this.innerHTML = "Mute";
    } else {
        video.muted = !video.muted;
        this.innerHTML = "Unmute";
    }
});

// volume update
document.querySelector("#slider").addEventListener("change", function() {
	console.log("Update volume");
    volumeText = document.querySelector("#volume");

    video.volume = this.value / 100;
    volumeText.innerHTML = this.value + "%";
});

// apply styled
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Change to Old School Style");
    video.className += " oldSchool";
})

// remove styled
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Remove Old School Style");
    video.className = "video";
})
