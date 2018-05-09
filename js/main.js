
let $username = $('.get-username');
let $button = $('.button')

$button.on('click', function () {
  console.log($username.val());
  alert($username.val());
});
