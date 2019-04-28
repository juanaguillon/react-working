<?php

function create_user($data)
{

  $fieldsUser = array(
    "user_auth",
    "user_password",
    "user_name",
    "user_lastname"
  );

  $user = new User($fieldsUser, 'users');
  $datasaved = array(
    "user_auth" => $data->register_email,
    "user_password" => $data->register_pass,
    "user_name" => $data->register_name,
    "user_lastname" => $data->register_lastname,
  );

  $user->create_user($data->register_email, $data->register_pass, $datasaved);
}
