class HttpClass{

  
  /**
   * Enviar una solicitud post a la url establecida.
   * @param {String} url Direccion a enviarse la solicitud
   * @param {any} data Objecto de datos que se enviaran.
   * @param {any} headers? Objeto headers. Si se deja vacio o en false, tomará 'Content-Type' application/json.
   */
  post(url, data, headers = false){

    if ( ! headers ){
      headers = {
        "Content-Type": "application/json; charset=utf-8"
      };
    }

    let dataSend = new FormData();
    for ( let i in data ){
      dataSend.append(i, data[i]);
    }

    let dataFetch = {
      method: "post",
      headers: headers,
      body: JSON.stringify(data),
    };
    fetch(url, dataFetch)
    .then( result => result.json() )
    .then( result => console.log( result ));
    
    
  }
  
}
export default HttpClass
