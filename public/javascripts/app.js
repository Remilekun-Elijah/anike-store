$(function() {

    setInterval(() => {
        let text = $(".changing-text span").text();
        if (text == "Jewelries") text = "Footwears";
        else if (text == "Footwears") text = "Clothings";
        else text = "Jewelries";
        fader($(".changing-text"), { html: `<span>${text}</span>`, duration: 400, allowCss: true })



        let img = document.querySelector(".img-con img");
        setTimeout(() => {

            if (img.src.includes("images/gold.png")) {
                img.alt = "Ladies hills footware";
                img.src = "images/foot.jpg";
            } else if (img.src.includes("images/foot.jpg")) {
                img.alt = "Long gown";
                img.src = "images/gown.png";
            } else {
                img.src = "images/gold.png";
                img.alt = "Gold chain on a black ornament";
            }
        }, 400);
        fader($(".img-con"), { html: img, duration: 400 });
    }, 4000);

    function fader(element, option) {
        if (option.allowCss === true) element.css("transform", "skew(50deg, -5deg)");

        element.fadeOut(option.duration, () => {
            element.html(option.html).fadeIn(option.duration);
            if (option.allowCss === true) element.css("transform", "skew(0deg)");
        });
    }
});