import React from 'react'
import forest from '../../images/forrest.jpg'
import { Coffee, ChevronDown, Code, Layout } from 'react-feather'

const Hero = () => {
  return (
    <div>
      <article data-name='article-full-bleed-background'>
        <div className='cf min-vh-100' style={{ background: `url(${forest}) no-repeat center center fixed`, backgroundSize: 'cover' }}>
          <div className='fr min-vh-100 pa3 pa4-ns bg-white black-70 measure-narrow f3 times'>
            <header className='bb dark-green b--black-70 pv4'>
              <h3 className='f2 fw7 ttu tracked lh-title mt0 mb3 avenir'>Forrest Blade</h3>
              <h4 className='f3 fw4 i lh-title mt0'>Front-end Engineer</h4>
            </header>
            <section className='pt5 pb4'>
              <p className='times tl lh-copy measure f4 mt0'>
              Designing beautiful experiences for the web requires a little know-how.
              I have the fire inside me. I wake up every morning, brew some <Coffee /> and start turning it into code. <br /> I have the passion, dedication and drive needed to get your project done right the first time.
              With the ability to collaborate with clients and peers from all levels and make those ideas and thoughts into working models, I take pride in turning visions into reality. <br />
              This is where it all starts in web development. Teamwork makes the dream work! <br />
              I focus on how I can create user experiences with simple and inherent design <Layout /> I want to show you how I believe that less is more.
              </p>
              <center className='flex flex-column'>
                <a href='mailto:forrestblade.code@gmail.com' className='times dark-green link f1'>Let's collaborate</a>
                <ChevronDown className='mt4'/>
              </center>
            </section>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Hero
