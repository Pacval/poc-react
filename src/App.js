import React from 'react';
import Planets from './components/Planets';
import CustomMenu from './components/CustomMenu';
import CreatePlanet from './components/CreatePlanet';

export default class App extends React.Component {

  state = {
    page: "planets",
    planets: []
  }

  componentDidMount() {
    fetch('http://localhost:8080/planet/')
      .then(res => res.json())
      .then((data) => {
        this.setState({ planets: data })
      })
      .catch(console.log)
  }

  callBackMenu = (page) => {
    this.setState({ page: page });
  }

  render() {
    let page;

    if (this.state.page === 'planets') {
      page = <Planets planets={this.state.planets}></Planets>
    } else if(this.state.page === 'create-planet') {
      page = <CreatePlanet></CreatePlanet>
    } else {
      page = <div></div>
    }

    return (
      <div>
        <CustomMenu callBackMenu={this.callBackMenu}></CustomMenu>
        <hr></hr>
        {page}
      </div>
    );
  }
}
