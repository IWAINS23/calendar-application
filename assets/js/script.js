$(document).ready(function(){
    // listen for save buttons
$(".saveButton").on("click", function() {
    console.log("It saved")

    let timeId = $(this).parent().attr("id")
    let value = $(this).siblings(".description").val();

    console.log(timeId);
    console.log(value);

localStorage.setItem(timeId, value);

    $(".notification").addClass('show');
})


})