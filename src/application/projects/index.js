import React from 'react'
import doggo from '../../images/doggo.png'
import dealerlocator from '../../images/dealerlocator.png'
import vendy from '../../images/vendy.png'
import pomodoro from '../../images/pomodoro.png'
import csv from '../../images/csv-parse.png'
import lunchbox from '../../images/lunchbox.png'

const Projects = () => {
  return (
    <div>
      <section className='cf mt5 pv5 bt b--black-05 ph6-l'>
        <h1 className='tc f5 ttu fw6 tracked mb4 dark-green avenir'>Projects I have worked on</h1>
        <a href='https://csv-json-parse.netlify.com' className='fl w-third w-25-ns border-box overflow-hidden ba bw2 white' title>
          <div className='grow cover bg-center pv5 pv6-l' style={{ backgroundImage: `url(${csv})` }} />
        </a>
        <a href='https://github.com/forrestblade/lunchbox' className='fl w-third w-25-ns border-box overflow-hidden  ba bw2 white' title>
          <div className='grow cover bg-top pv5 pv6-l' style={{ backgroundImage: `url(${lunchbox})` }} />
        </a>
        <a href='https://vendy.stackblitz.io' className='fl w-third w-25-ns border-box overflow-hidden ba bw2 white' title>
          <div className='grow cover bg-top pv5 pv6-l' style={{ backgroundImage: `url(${vendy})` }} />
        </a>
        <a href='http://pomodoro-soup.surge.sh' className='fl w-100 w-25-ns border-box overflow-hidden ba bw2 white' title>
          <div className='grow cover bg-top pv5 pv6-l' style={{ backgroundImage: `url(${pomodoro})` }} />
        </a>
        <a href='https://dealerlocator.deere.com' className='fl w-50 border-box overflow-hidden ba bw2 white' title>
          <div className='grow cover bg-center pv5 pv7-l' style={{ backgroundImage: `url(${dealerlocator})` }} />
        </a>
        <a href='http://borkborkbork.surge.sh' className='fl w-50 border-box overflow-hidden ba bw2 white' title>
          <div className='grow cover bg-center pv5 pv7-l' style={{ backgroundImage: `url(${doggo})` }} />
        </a>
      </section>
    </div>
  )
}

export default Projects
