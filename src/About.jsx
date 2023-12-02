import React from 'react'
import marioAdrian from "./Assets/Mario and Adrian A.jpg"
import './About.css'

export const About = () => {
  return (
    <section className='about-container'>
        <div className="about-text">
            <h2> How all started</h2>
            <h3> Chicago, 1975</h3>
            <p>In 1975, my dear friend Mario and I embarked on a flavorful journey, birthing
                the sweet haven known as Little Lemon Restaurant in the heart of Chicago.
                Fueled by a shared passion for desserts, we infused our dreams into each recipe.
                From zesty lemon tarts to velvety cheesecakes, our creations became a symphony of taste.
                 With dedication and a sprinkle of nostalgia, we built a cozy haven where patrons could
                  escape into a world of sweetness. Little Lemon has since become a cherished chapter in
                   our lives, a testament to enduring friendship and the joy that a simple dessert can bring
                    to a community.</p>
        </div>
        <div className="about-image">
            <img src={marioAdrian} alt={`${marioAdrian}-founders-picture`} width="600px" />
        </div>
    </section>
  )
}
