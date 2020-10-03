
import React,{ Component } from 'react';
import Featured from './components/featured/index';
import Header from './components/header_footer/header'
import VenueNFO from './components/venueNFO/VenueNFO';
import Highlight from './components/highlights/index'
import './resources/styles.css'
import Pricing from './components/pricing/Pricing'
import Location from './components/location/Location'
import Footer from './components/header_footer/footer'
class App extends Component {
  render(){
    return (
      <div className="App" style={{"height":"1500px"}}>
        <header className="App-header">
          <Header/>
          <Featured/>
          <VenueNFO/>
          <Highlight/>
          <Pricing />
          <Location />
          <Footer />
        </header>
      </div>
    );
  }
  
}

export default App;
