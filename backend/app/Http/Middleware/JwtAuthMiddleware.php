<?php 

namespace App\Http\Middleware;


use Closure;
use Firebase\JWT\JWT;
use App\User;

class JwtAuthMiddleware {

  private function decodeJWT( $jwt ){

    return JWT::decode($jwt, env( "JWT_SECRET"), ["HS256"] );
    
  }
  
  public function handle( $request, Closure $next){

    $token = $request->header("Authorization");
    if (! $token ){
      return response()->json(array(
        "error" => "No se ha asignado nignún Token"
      ));
    }

    try {
      $credential = $this->decodeJWT($token);
    } catch( ExpiredException $e){
      return response()->json(array(
        "error" => "Error de token. Este ya ha expirado"
      ));
    } catch (\Throwable $th) {
      return response()->json(array(
        "error" => "Error al procesar el token.",
        "message" => $th->getMessage(),
        "file" => $th->getFile(),
        "line" => $th->getLine()
      ));
    }

    $user = User::find($credential->sub);
    // return response()->json( $credential );
    $request->attributes->add(["auth" => $user]);
    return $next($request);
    
  }
}