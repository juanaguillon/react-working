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

$router->group(["prefix" => "user"], function() use ($router) {
    $router->get('list', array("uses" => "UserController@show"));
    $router->post('create', array("uses" => "UserController@create"));
    $router->get('{id}', array("uses" => "UserController@getUser"));
    $router->post('auth', array("uses" => "UserController@authUser"));

});
