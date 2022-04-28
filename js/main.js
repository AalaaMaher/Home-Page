
$(function () {
    mypersons = JSON.parse(localStorage.getItem('persons'));
    console.log(mypersons)
    person_name = document.getElementsByClassName("card-title");
    $(".card-header a").click(function (e) {
        $(".card-header a").each(function (i, e) {
            $(e).removeClass("active");
          
        });
        $(this).addClass("active");
        e.preventDefault
    });//end of click
    $(".card-header a").eq(0).click(function () {

        $(".card-title").text(`${mypersons[0].userName}`);
        let s = mypersons[0].rating / 2

        let e = mypersons[0].rating % 2

        let rate = ""
        for (let i = 0; i < parseInt(s); i++) {
            rate += '<i class="fa-solid fa-star"></i>'
        }
        for (let i = 0; i < parseInt(e); i++) {
            rate += '<i class="fa-solid fa-star-half-stroke"></i>'
        }


        $(".card-text").html(rate)

    }) //end ofclick

    $(".card-header a").eq(1).click(function () {

        $(".card-title").text(`${mypersons[1].userName}`);
        let s = mypersons[1].rating / 2

        let e = mypersons[1].rating % 2

        let rate = ""
        for (let i = 0; i < parseInt(s); i++) {
            rate += '<i class="fa-solid fa-star"></i>'
        }
        for (let i = 0; i < parseInt(e); i++) {
            rate += '<i class="fa-solid fa-star-half-stroke"></i>'
        }


        $(".card-text").html(rate)

    }) //end ofclick
    $(".card-header a").eq(2).click(function () {

        $(".card-title").text(`${mypersons[2].userName}`);
        let s = mypersons[2].rating / 2

        let e = mypersons[2].rating % 2

        let rate = ""
        for (let i = 0; i < parseInt(s); i++) {
            rate += '<i class="fa-solid fa-star"></i>'
        }
        for (let i = 0; i < parseInt(e); i++) {
            rate += '<i class="fa-solid fa-star-half-stroke"></i>'
        }

        $(".card-text").html(rate)

    }) //end ofclick


})//end of load