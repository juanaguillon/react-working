<?php

/** El prefijo del archivo, y la clase deben ser exactamente iguales a la tabla recien creada */

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder{

  public function run( ){
    factory( App\User::class, 10 )->create();
  }
  
}