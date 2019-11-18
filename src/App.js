import React from 'react';
import './App.css';

import { pokeApi } from './config/axiosConfig'; //Importing Poke API

import PokeHeader from './components/PokeLogo';
import PokeSelector from './components/PokeSelector';
import PokeEncounter from './components/PokeEncounter';
import PokeCapture from './components/PokeCapture'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      regions: [],
      locations: [],
      areas: [],
      possibleEncounters: [],
      possiblePokeEncounter: '',
      possiblePokeEncounterStats: [],
      possiblePokeEncountersImg: '',
      capturedPoke: [],
      disable: true,
      area: ''
    };
  }

  componentDidMount() {
    pokeApi
      .get('region')
      .then(res => {
        return {
          regions: res.data.results,
        }
      })
      .then(customRes => {
        return pokeApi.get(`region/${customRes.regions[0].name}`)
          .then(res => {
            customRes.locations = res.data.locations;
            return customRes;
          });
      })
      .then(customRes => {
        return pokeApi
          .get(`location/${customRes.locations[0].name}`)
          .then(res => {
            customRes.areas = res.data.areas;
            return customRes;
          });
      })
      .then(customRes => {
        return pokeApi
          .get(`location-area/${customRes.areas[0].name}`)
          .then(res => {
            customRes.possibleEncounters = res.data.pokemon_encounters;
            return customRes;
          });
      })
      .then(customRes => {
        this.setState({
          regions: customRes.regions,
          locations: customRes.locations,
          areas: customRes.areas,
          possibleEncounters: customRes.possibleEncounters,
        });
      });
  }

  handleRegionChange = (name) => {

    pokeApi
      .get(`region/${name}`)
      .then(res => {
        return {
          locations: res.data.locations,
        }
      })
      .then(customRes => {
        return pokeApi.get(`location/${customRes.locations[0].name}`)
          .then(res => {
            customRes.areas = res.data.areas;
            return customRes;
          });
      })
      .then(customRes => {
        this.setState({
          locations: customRes.locations,
          areas: customRes.areas,
        });
      });
  }

  handleLocationChange = (name) => {
    pokeApi
      .get(`location/${name}`)
      .then(res => {
        this.setState({
          areas: res.data.areas,
        })
      })

    if (!this.state.areas.length) {
      this.setState({
        message: 'No areas to explore here! Select a different location'
      })

    } else {
      this.setState({
        message: 'Click "Explore" to start searching for Pokemon'
      })
    }
  }

  handleAreaChange = name => {
    console.log(name)
    this.setState({
      area: name
    })

  }

  explore = () => {

    if (this.state.areas.length === 1) {
      pokeApi
        .get(`location-area/${this.state.areas[0].name}`)
        .then(res => {
          this.setState({
            possibleEncounters: res.data.pokemon_encounters,
          })
        });

      console.log(this.state.areas[0].name);

    } else {
      console.log(this.state.area)
      if (!this.state.area) {
        pokeApi
          .get(`location-area/${this.state.areas[0].name}`)
          .then(res => {
            this.setState({
              possibleEncounters: res.data.pokemon_encounters,
            })
          });
      } else {
        pokeApi
          .get(`location-area/${this.state.area}`)
          .then(res => {
            this.setState({
              possibleEncounters: res.data.pokemon_encounters,

            })
          });
      }
    }

    console.log(this.state.possibleEncounters.length)

    var randomNum = Math.floor((Math.random() * this.state.possibleEncounters.length));
    var pokemonURL = this.state.possibleEncounters[randomNum].pokemon.url;
    var pokemonName = this.state.possibleEncounters[randomNum].pokemon.name;
    if (randomNum === 0) {
      randomNum = 1;
    }

    this.setState({
      possiblePokeEncounter: pokemonName,

    })

    pokeApi
      .get(pokemonURL)
      .then(res => {
        this.setState({
          possiblePokeEncounterStats: res.data.stats,
          possiblePokeEncountersImg: res.data.sprites.front_default
        })
      })

    this.setState({
      disable: false
    })

    if (!this.state.areas.length) {
      this.setState({
        message: 'Click "Explore" to start searching for Pokemon'
      })
      console.log(this.state.areas.length);
    }
  }


  capture = () => {
    var pokeLength = this.state.capturedPoke.length;

    if (pokeLength === 6) {
      alert('You already captured 6 pokemons')
    } else {

      var newPoke = {
        name: this.state.possiblePokeEncounter,
        img: this.state.possiblePokeEncountersImg
      }
      this.setState({
        capturedPoke: [...this.state.capturedPoke, newPoke],
      })
    }

    this.setState({
      disable: !this.state.disable
    })
    console.log(this.state.disable);
  }

  render() {
    return (
      <React.Fragment>
        <PokeHeader />
        <PokeSelector
          regions={this.state.regions}
          changeRegion={this.handleRegionChange}
          locations={this.state.locations}
          changeLocation={this.handleLocationChange}
          areas={this.state.areas}
          changeArea={this.handleAreaChange}
          exploreBtn={this.explore}
        />
        <div>
          <PokeEncounter
            possiblePoke={this.state.possiblePokeEncounter}
            possiblePokeImg={this.state.possiblePokeEncountersImg}
            possiblePokeStat={this.state.possiblePokeEncounterStats}
            captureBtn={this.capture}
            disable={this.state.disable}
            capturedPokemons={this.state.capturedPoke}
          />
          <PokeCapture capturedPokemons={this.state.capturedPoke} />
        </div>
      </React.Fragment>
    )
  }
}

export default App;