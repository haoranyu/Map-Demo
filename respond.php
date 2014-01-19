<?php
$query = htmlspecialchars($_POST['keyword']);
$arr = array(
		array('lat' => 37.4232, 'lon' => -122.0853, 'name' => 'Work'),
		array('lat' => 37.4289, 'lon' => -122.1697, 'name' => 'University'),
		array('lat' => 37.6153, 'lon' => -122.3900, 'name' => 'Airport'),
		array('lat' => 37.4422, 'lon' => -122.1731, 'name' => 'Shopping')
	);
echo json_encode($arr);
?>