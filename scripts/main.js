// AOS.init({ duration: 1500 });

document.querySelectorAll('a[href="#form"], a[href="#free-quote"], a[href="#free-quote-mobile"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function setOpeningTime() {
    let now, hours, minutes, time, standard;
    now = new Date();
    hours = now.getHours();
    standard = hours < 12 ? "am" : "pm";
    hours = ((hours + 11) % 12 + 1);
    minutes = now.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    time = hours + ":" + minutes + " " + standard;

    $(".current-time").html(time);
}

setOpeningTime();
setInterval(() => { setOpeningTime(); }, 50000);

$(window).on('scroll', () => {
    if ($(this).scrollTop() >= 600) {
        $('#return-to-top').fadeIn(300);
    } else {
        $('#return-to-top').fadeOut(300);
    }
});

$('#return-to-top').on('click', () => {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
});

$("#free-quote-cta-mobile").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: "<img class='a-left control-c prev slick-prev' src='assets/images/icons/slick-prev.png'>",
    nextArrow: "<img class='a-right control-c next slick-next' src='assets/images/icons/slick-next.png'>",
});

$('#accreditation').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [{
        breakpoint: 540,
        settings: {
            slidesToShow: 2,
            centerMode: true,
        }
    }]
});

function fileUploaded(uploadName, labelId) {
    var file = document.getElementById(uploadName);
    if (file.value != "") {
        var theSplit = file.value.split('\\');
        var fileName = theSplit[theSplit.length - 1];
        $(`#${labelId}`).html(fileName.substring(0, 50));
    }
}

$(".checkBudget").on("change", function (e) {
    e.preventDefault();
    if ($("#budget1").is(":checked")) {
        $("#budgetAmount").removeAttr("disabled");
    }
    else if ($("#budget2").is(":checked")) {
        $("#budgetAmount").val("");
        $("#budgetAmount").attr("disabled", true);
    }
});
