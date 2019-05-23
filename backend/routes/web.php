<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/


$router->get('/', function () use ($router) {
	echo "Hello btiches";
});

$router->group(["prefix" => "user"], function () use ($router) {
	$router->get('list', array("uses" => "UserController@show"));
	$router->post('create', array("uses" => "UserController@create"));
	$router->post('auth', array("uses" => "UserController@authUser"));
});

$router->group(
	array(
		"middleware" => "jwt.auth",
		"prefix"     => "user"
	),
	function () use ($router) {
		$router->post("login", "UserController@getUserInformation");
	}
);
