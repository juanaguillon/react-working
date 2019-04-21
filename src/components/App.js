import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import BadgeNew from "../pages/badgenew";
import BadgesNav from "../pages/BadgesNav";
import BadgeEdit from "../pages/BadgeEdit";
import Layout from "./Layout";

class App extends React.Component {
  // state = {
  //   loading: true,
  //   error: null,
  //   characters: {
  //     results: []
  //   }
  // };

  // componentDidMount() {
  //   this.fetchCharacters();
  // }

  // fetchCharacters = async () => {
  //   this.setState({
  //     loading: true,
  //     error: null
  //   });
  //   try {
  //     const response = await fetch(
  //       "https://rickandmortyapi.com/api/character/"
  //     );

  //     const data = await response.json();
  //     this.setState({
  //       loading: false,
  //       characters: data
  //     });
  //   } catch (error) {
  //     this.setState({
  //       error: error
  //     });
  //   }
  // };

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/badges" component={BadgeNew} />
            <Route exact path="/badges-nav" component={BadgesNav} />
            <Route exact path="/badges/:badgeid" component={BadgeEdit} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }

  // render() {
  //   if (this.state.error) {
  //     return `Error: ${this.state.error}`;
  //   }

  //   return (
  //     <div className="container">
  //       {this.state.loading && (
  //         <div>
  //           <p className="loader">Cargando...</p>
  //         </div>
  //       )}
  //       <div className="row">
  //         {this.state.characters.results.map(char => (
  //           <div key={char.id} className="col-md-3">
  //             <Character char={char} />
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }
}

export default App;
