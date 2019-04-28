<?php

function cors()
{

	if (isset($_SERVER['HTTP_ORIGIN'])) {
		header("Access-Control-Allow-Origin: http://localhost:3000");
		header('Access-Control-Allow-Credentials: true');
		header('Access-Control-Max-Age: 86400'); 
	}

	if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

		if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
			header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

		if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
			header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

		exit(0);
	}
}
cors();


$postdata = file_get_contents("php://input");
$input = json_decode($postdata);
$request = $input->request;

switch ($request) {
	case 'create_user':
		try {
			require 'model/class-user.php';
			require 'controller/user.php';
			create_user($input);
			echo json_encode(array('f'=>"ff"));
		} catch (Exception $e) {
			echo json_encode(array('error' => $e->getMessage()));
		}
		break;
	
}



