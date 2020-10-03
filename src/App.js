
import React,{ Component } from 'react';
import Featured from './components/featured/index';
import Header from './components/header_footer/header'
import VenueNFO from './components/venueNFO/VenueNFO';
import Highlight from './components/highlights/index'
import './resources/styles.css'
import Pricing from './components/pricing/Pricing'
import Location from './components/location/Location'
import Footer from './components/header_footer/footer'
import {Element} from 'react-scroll'
class App extends Component {
  render(){
    return (
      <div className="App" style={{"height":"1500px"}}>
        <header className="App-header">
          <Header/>
          <Element name="featured">
          <Featured/>
        </Element>

        <Element name="venuenfo">
          <VenueNFO/>
        </Element>
        
        <Element name="highlights">
          <Highlight/>
        </Element>
        
        <Element name="pricing">
          <Pricing/>
        </Element>

        <Element name="location">
          <Location/>
        </Element>
          <Footer />
        </header>
      </div>
    );
  }
  
}

export default App;
