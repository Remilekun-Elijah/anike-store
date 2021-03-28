$(function() {

    setInterval(() => {
        let text = $(".changing-text span").text();
        if (text == "Jewelries") text = "Footwears";
        else if (text == "Footwears") text = "Clothes";
        else text = "Jewelries";
        fader($(".changing-text"), { html: `<span>${text}</span>`, duration: 400, allowCss: true })



        let img = document.querySelector(".img-con img");
        setTimeout(() => {

            if (img.src.includes("images/gold.png")) img.src = "images/gold plated.png";
            else if (img.src.includes("images/gold plated.png")) img.src = "images/gown.jpg";
            else img.src = "images/gold.png";
            console.log(img.src);
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