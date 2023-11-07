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
    volumeText.innerHTML = "100%";
});

// volume update
document.querySelector("#slider").addEventListener("click", function() {
	console.log("Update volume");
    volumeText = document.querySelector("#volume");

    video.volume = value;
    volumeText.innerHTML = slider.value + "%";
});
