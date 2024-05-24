import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Banner from './components/Banner';
import WhyChooseUs from './components/WhyChooseUs';
import Learn from './components/Learn';
import PlacementAssistance from './components/PlacementAssistance';
import Footer from './components/Footer';

const App = () => (
  <div className="App">
    <Header />
    <Banner />
    <WhyChooseUs />
    <Learn />
    <PlacementAssistance />
    <Footer />
  </div>
);

export default App;
