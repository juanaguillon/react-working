<?php 

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Firebase\JWT\JWT;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller{

  public function show(){
    return response()->json(User::all());
  }

  /* POST */
  public function create( Request $request ){

    if ( $request->input("rpass") !== $request->input("pass")){     
      
      return response()->json(array("error" => "Contraseñas no coinciden") );

    }

    try {
      $sending = array(
        "email" => $request->input("email"),
        "name"  => $request->input("name"),
        "pass" => Hash::make( $request->input("pass")),
        "created_at" => \Carbon\Carbon::now()->toDateTimeString(),
        "updated_at" => \Carbon\Carbon::now()->toDateTimeString()
      );

      $user = User::insert( $sending );
      return response()->json( $user, 201 );

    } catch (\Throwable $th) {
      return response()->json( array("error" => $th ));
    }
    
  }
  
  public function getUser($id){
    return response()->json( User::find( $id ));
  }

  private function jwt( $id ){
    $jwtdata = [
      "iss" => "lumen-jwt",
      "sub" => $id,
      "iad" => time()
    ];

    return JWT::encode( $jwtdata, env('JWT_SECRET') );
  }

  public function authUser( Request $request ){
    $user = User::where('email', $request->input("email") )->first();

    
    if ( ! $user ){
      return response()->json(array("error"=>"Usuario o contraseña inválida"), 400);
    }

    if ( Hash::check( $request->input('password'), $user->pass)){
      return response()->json(array("token" => $this->jwt( $user->id ) ));
    }else{
      return response()->json(array("error"=>"Contraseñas no coinciden"));
    }
    
  }

  public function getUserInformation( Request $request ){
    
    return response()->json( $request->get("auth"));
  }

  /**
   * Verificar si actualmente el JWT es válido.
   * En toría, verificar si está o aún continua logeado.
   */
  public function checkAuth(){
    return response()->json(array(
      "success" => "Usuario actualmente logaeado"
    ));
  }
  
}