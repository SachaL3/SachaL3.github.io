<!-- PHP form handler -->
<!--  PHP form submission handler which accepts the request and stores the comment, post_comment.php -->
<!-- Handling Comment Submission  -->
<?php
require('Persistence.php');

$db = new Persistence();
if( $db->add_comment($_POST) ) {
  header( 'Location: index.html' );
}
else {
  header( 'Location: index.?error=Your comment was not posted due to errors in your form submission' );
}
?>

<!-- https://www.smashingmagazine.com/2012/05/building-real-time-commenting-system/ -->