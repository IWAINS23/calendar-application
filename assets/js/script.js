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

    setTimeout(function() {
        $(".notification").removeClass('show');
    }, 5000)



})

function hourUpdate (){
    let currentHour = moment().hour();

for (let i = 0; i < $(".time-block").length; i++){
    let hour = parseInt($(".time-block")[i].getAttribute("id").split("-")[1])
    console.log(hour)
    console.log(currentHour)
    if (hour < currentHour) {
        $(".time-block")[i].classlist.add("past")
    } else if (hour === currentHour) {
        $(".time-block")[i].classlist.remove("past")
        $(".time-block")[i].classlist.add("present")
    } else {
        $(".time-block")[i].classlist.remove("past")
        $(".time-block")[i].classlist.remove("present")
        $(".time-block")[i].classlist.remove("future")
    }
} 

}



hour.update();

})