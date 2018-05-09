
$name = $('.name');

let name = prompt("Please enter your name");

    if (name) {
      $('.name').html(name);
    } else {
      prompt("Please enter your name");
    };
