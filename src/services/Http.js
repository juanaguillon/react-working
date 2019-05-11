class HttpClass{

  url = {};

  headers = {};

  dataFetch = {}
  
  /**
   * Enviar una solicitud post a la url establecida.
   * @param {String} url Direccion a enviarse la solicitud
   * @param {any} data Objecto de datos que se enviaran.
   * @param {any} headers? Objeto headers. Si se deja vacio o en false, tomará 'Content-Type' application/json.
   */
  post(url, data, headers = false){


    this.url = url;

    if ( ! headers ){
      this.headers = {
        "Content-Type": "application/json; charset=utf-8"
      };
    }else{
      this.headers = headers;
    }

    this.dataFetch = {
      method: "post",
      headers: headers,
      body: JSON.stringify(data),
    };   
    
    return this._createFetch();
    
  }

  /**
   * Agregar una url para enviar una petición.
   * @param {string} url Url a la cual se enviará la peticion.
   */
  setUrl( url ){
    this.url = url;
  }

  /**
   * Datos de Body que se enviarán por peticion FETCH.
   * @param {any} data Datos clave:valor, para enviar a una url en especifica.
   */
  setData( data ){

  }

  async _createFetch( ){
    
    return await fetch(this.url, this.dataFetch)
    .then(reponse => reponse.json() )
    .then( json => {
      return json;
    })
  }
  
}
export default HttpClass
