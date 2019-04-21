import React from "react";
import ReactDOM from 'react-dom';
class BadgeEdit extends React.Component {
  

  componentDidMount() {

    /** Losc hooks unuicamente pueden ser usados en function componenets */
    
    // const [count, setCount] = React.useState(0);
    // this.count = count;
    // this.cstate = setCount;
    this.fetcData();
  }

  fetcData = async () => {
    this.setState({
      loading: true,
      error: null
    });

    try {
      console.log(this.props.match.params.badgeid);
    } catch (err) {
      this.setState({
        error: err
      });
    }
  };


  render() {
    return (
      <div>
        <p>Badge Edit Wordks</p>
        <button className="btn btn-danger">Abrir Modal</button>

        {/* <button onClick={( ) => this.cstate( this.count + 1 ) } className="btn btn-warning">
          Increase Count {this.count}
        </button> */}
        {ReactDOM.createPortal(
          <h1>Realmente no estoy aqui</h1>,
          document.getElementById("modal")
        )}
      </div>
    );
  }
}

export default BadgeEdit;
