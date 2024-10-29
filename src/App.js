import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TopFlights from './components/TopFlights';
import WhyUs from './components/WhyUs';
import CustomerTestimonials from './components/Testimonials';
import PopularQuestions from './components/FAQ';
import Footer from './components/Footer'; 
import './Styles.css';

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Hero />
        <TopFlights />
        <WhyUs />
        <CustomerTestimonials />
        <PopularQuestions />
      </main>
      <Footer />
    </div>
  );
}