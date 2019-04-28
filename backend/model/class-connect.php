<?php 

define('DB_HOST', 'localhost');
define('DB_NAME', 'react');
define('DB_USER', 'root');
define('DB_PASS', '');

class Connect {
  protected $connect;
  protected function __construct(  ){
    
    $this->connect = new PDO("mysql:host=" . DB_HOST. ";dbname=". DB_NAME, DB_USER, DB_PASS );
		$this->connect->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
		$this->connect->exec("SET CHARACTER SET utf8");
  }
  
}


 ?>