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

	/** Tabla SQL que se usará para guardar/usar los registros de los usuarios. */
	private $table = "";


	/**
	 * Construction clase.
	 * @param array $fields Columnas que se usarán a la base de datos.
	 * 
	 */
	public function __construct($fields, $table)
	{

		parent::__construct($fields);
		$this->table = $table;
		$this->fields = $fields;

	}



	/** Crear un nuevo usuario
	 * @param array $data Otros datos que se ingresaran a el nuevo usuario. Este parámetro debe tener obligatoriamente un valor "auth" y "password" siendo los valores para crear el logueo, de otra manera, enviará error y no permite registrar el nuevo usuario.
	 */
	public function create_user($auth, $password, $data)
	{

		$this->data = $data;
		$this->auth = $auth;
		$this->password = $password;
		$this->insert($this->table, $data);
	}

	public function get_prop(){

	}
}
