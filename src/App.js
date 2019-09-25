import React, { Component } from 'react';
import Axios from 'axios';
import List from './List';
import Dropdown from 'react-dropdown'
//import { tsConstructorType } from '@babel/types';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],

    }
    this.getPeople = this.getPeople.bind(this);
  }
  //importing the axios we can easily use a function to pass to componentDidMount() and read API data from there
  getPeople() {
    return Axios.get("https://swapi.co/api/people")
      .then((response) => {
        console.log(response.data.results);
        this.setState({ people: response.data.results })
      })
  }
  componentDidMount() {
    this.getPeople()
  }


  render() {
    const { people } = this.state;
    return (
      <div className="App" >
        <div class="ui dropdown">
          <div class="text"></div>
          <i class="dropdown icon"></i>
        </div>
        {/* We create a drop down adding my name to it and passing the read data into a map, creating a new function to retrieve more data in the list component */}
        <center>
          <select id="test" name="form_select">
            <option>Ariel Barboza</option>
            {people.map(character => (
              <option key={character.name}>{character.name}</option>
            ))}

          </select>
          <List people={people} />
        </center>
      </div>
    );
  }
}

export default App;
