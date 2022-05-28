$("#fullScreen").hide()

var image = [];
for (let i = 1; i <= 27; i++) {
    image[i] = `photos/${i}.jpg`;
    $("#images").prepend(`<img src='${image[i]}' class='galleryImg' id='num${i}'>`)
    console.log(image[i])
}

$("#num7").hide()
$("#num6").addClass("blood")
$("#num6").mouseenter(function() {
    $("#num6").attr("src", "photos/7.jpg")
});
$("#num6").mouseleave(function() {
    $("#num6").attr("src", "photos/6.jpg")
});

//

$(".galleryImg").click(function() {
    let id = $(this).attr("id")
    let src = $(`#${id}`).attr("src")
    $("#fullImg").attr("src", src)
    $("#fullScreen").show()
    console.log(`Show ${src}`)
})
$("#fullScreen").click(function() {
    $("#fullScreen").hide()
})