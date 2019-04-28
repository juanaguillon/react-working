<?php

require './class-connect.php';

class Query extends Connect
{

  /** Injección sql */
  private $injection = array();

  /** Campos que están registrados en la base de datos. */
  private $fields = array();

  public function __construct($fields)
  {
    parent::__construct();

    $this->fields = $fields;
  }

  /**
   * Agregar prevención de inyección SQL, debe agregarse antes de ejecutar cualquier operación SQL.
   *
   * @param array $inject Array de clave => valor, siendo clave el key en prevención, por ejemplo array(":key" => $value )
   * @see https://www.php.net/manual/es/pdo.prepared-statements.php
   * 
   *  */  
  protected function inject($inject)
  {
    if (!is_array($inject)) {
      throw new Error('Error injectando el SQL. No es un array');
      return;
    }

    $this->injection = $inject;
  }

  /**
   * Sentencia SELECT en la actual base de datos.
   * @param string $table Tabla donde se buscará el valor
   * @param string $fields Campos que se obtendrán, deben ser pasados como un string completo, y cada valor separado como una coma, tal como es usado en SQL estandar.
   * @param string $where Condicional
   */
  protected function select($table, $fields, $where)
  {
    $sql = "SELECT {$fields} FROM {$table} WHERE {$where}";
    $prp = $this->connect->prepare($sql);

    $prp->execute($this->injection);
    return $prp;
  }

  /**
   * Sentecia Insert SQL.
   * 
   * @param string $table Tabla a buscar
   * @param array $data Array clave => Valor para ser registrada en la base de datos. En caso que el constructor y las claves que se ingresen en este array, no coincidan, arrojará un warning con dicho aviso.
   * 
   */
  protected function insert($table, $data)
  {
    if (count($data) !== count($this->fields)) {
      throw new Error("Los datos a insertar no son iguales a los campos ingresados en la base de datos. El constuctor no recibe la misma cantidad de elementos");
      return false;
    }

    $sql = "INSERT INTO {$table} SET ";
    $first = true;

    /** Verificar si el array proporcionado coincide con los campos ingresados en el constructor ( Campos en la base de datos). */
    $valueNotExists = false;

    foreach ($data as $d => $v) {

      if (!in_array($d, $this->fields)) {
        $valueNotExists = true;
      }

      if ($first) {
        $sql .= "{$d}={$v}";
        continue;
      }

      $sql .= ",{$d}={$v}";
    }
    if ($valueNotExists) {
      trigger_error('Los valores ingresados a el constructor, no coinciden con los valores ingresados en el constructor');
    }

    $prp = $this->connect->prepare($sql );
    $prp->execute($this->injection); 
    return $prp;
  }
}
