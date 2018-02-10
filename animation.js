window.onload = function () {
    var initPolyColor = anime({
        targets: "#initialize-poly polygon",
        easing: "linear",
        color: [
            {value: "#9932CC"},
            {value: "#779ECB"},
            {value: "#03C03C"},
            {value: "#966FD6"},
            {value: "#E75480"},
            {value: "#483C32"}
        ],
        duration: 7000,
        opacity: [
            {value : 0},
            {value : 1}
        ]
    })
    
    var initPolyTrans = anime({
        targets: "#initialize-poly polygon",
        points: "64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96",
        easing: "easeInOutExpo",
        delay: 7000
    });

    // document.getElementById("initialize-text").style.display = "block";

    var initTextValue = anime({
        targets: "#initialize-text input",
        value: "100%",
        round: 1,
        easing: "easeInOutExpo",
        delay: 5000,
        duration: 6000,
        opacity: 1
    })

    var initOpacity = anime({
        targets: "#initialize",
        opacity: 0,
        delay: 10000,
        duration: 3000
    })
      
    var infoContainer = anime({
        targets: "#info-container",
        opacity: [
            {value : 0},
            {value : 1}
        ],
        delay: 3000,
        duration: 15000
    });
}
