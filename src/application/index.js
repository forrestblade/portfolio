import React from 'react'
import Hero from './hero'
import Projects from './projects';
import Footer from './footer';

export const App = () => {
  return (
    <React.Fragment>
      <Hero />
      <Projects />
      <Footer />
    </React.Fragment>
  )
}
