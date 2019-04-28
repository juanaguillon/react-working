<?php

require 'class-query.php';

class User extends Query
{

	/**
	 * Método unico que usará el usuario para el respectivo ingreso
	 * Por ejemplo, puede ser un email o un nombre de usuario, este campo debe ser único en cada usuario
	 */
	private $auth = "";

	/** Contraseña para el ingreso de cada usuario */
	private $password = "";

	/** Otros datos de el usuario que será creado.*/
	private $data = array();

	/** Columnas que se usarán en la base de datos.  */
	private $fields = array();

	/**
	 * Construction clase.
	 * @param array $fields Columnas que se usarán a la base de datos.
	 * 
	 */
	public function __construct($fields)
	{
		parent::__construct($fields);
		$this->fields = $fields;
	}

	public function setUser($auth, $password, $data)
	{
		$this->auth = $auth;
	}


	/** Crear un nuevo usuario
	 * @param string $auth Email o nombre de usuario único para ser registrado
	 * @param string $password Contraseña de acceso a el nuevo usuario
	 * @param array $data Otros datos que se ingresaran a el nuevo usuario
	 */
	public function createUser($auth, $password, $data)
	{
		$data["auth"] = $auth;
		$data["password"] = $password;
		$this->insert('users', $data );
	}
}
