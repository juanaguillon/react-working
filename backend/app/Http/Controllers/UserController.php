<?php 

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Firebase\JWT\JWT;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller{

  public function show(){
    return response()->json(User::all());
    // return User::all();
  }

  public function create( Request $request ){

    $user = User::create( $request->all());

    return response()->json( $user, 201 );
    
  }

  public function getUser($id){
    return response()->json( User::find( $id ));
  }

  private function jwt( $id ){
    $jwtdata = [
      "iss" => "lumen-jwt",
      "sub" => $id,
      "iad" => time(),
      "exp" => time() + 60*60
    ];

    return JWT::encode( $jwtdata, env('JWT_SECRET') );
  }

  public function authUser( Request $request ){
    $user = User::where('email', $request->input("email") )->first();

    
    if ( ! $user ){
      return response()->json(array("error"=>"Usuario o contraseña inválida"), 400);
    }

    if ( Hash::check( $request->input('password'), $user->password)){
      return response()->json(array("token" => $this->jwt( $user->id ) ));
    }else{
      return response()->json(array("error"=>"Contraseñas no coinciden"));
    }
    
  }
  
}