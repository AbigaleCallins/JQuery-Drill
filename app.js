$(document).ready(function () {
  // JQuery loading
  let newDiv = $("<div></div>");
  let ul = $("<ul></ul>");
  $("#btnSubmit").attr("disabled", true); // Btn selector
  $("body").append(newDiv);
  $("body").append(ul);

  $("#btnSubmit").click(function (e) {
    e.preventDefault();
    // alert("Hello World");

    let $userInput = $("input[type='text']").val(); //Calls the value from browsers text box
    alert($userInput);
    let newH2 = $("<h2></h2>");
    newH2.text($userInput);

    newH2.mouseover(function () {
      newH2.css({
        "background-color": "pink",
        // "border-radius": "50px"
      });
    });

    newDiv.append(newH2);

    let li = $("<li></li>");
    li.text($userInput);
    li.css("cursor", "pointer");

    li.click(function () {
      let r = Math.floor(Math.random() * 255);
      let g = Math.floor(Math.random() * 255);
      let b = Math.floor(Math.random() * 255);

      rgbColor = `rgb( ${r}, ${g}, ${b} )`;

      li.css("color", rgbColor);
    });

    li.dblclick(function () {
      $(this).remove();
    });

    ul.append(li);
  });

  $("input[type='text']").keyup(function () {
    //toggles the btn function relative to input-box value
    let $userInput = $("input[type='text']").val();

    if ($userInput == "") {
      $("#btnSubmit").attr("disabled", true);
    } else {
      $("#btnSubmit").attr("disabled", false);
    }
  });
});
