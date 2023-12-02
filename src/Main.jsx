import React from 'react'
import {Hero} from "./Hero"
import {SpecialsCard} from "./SpecialsCard"
import greekSalad from "./Assets/greek-salad.jpg"
import bruchetta from "./Assets/bruchetta.svg"
import breadFlyer from "./Assets/bread-flyer.jpg"

import "./Main.css"
import { Testimonials } from './Testimonials'
import { About } from './About'

export const Main = () => {
    const specialsMenu = [{
            image:greekSalad,
            title:"Greek Salad",
            price:"$12.99",
            description:`Classic Mediterranean dish renowned for its vibrant flavors
            and fresh ingredients. This refreshing salad typically features
            crisp and juicy tomatoes, cucumber slices, and red onion, all
            interspersed with briny Kalamata olives and creamy feta cheese`
        },
        {
            image:bruchetta,
            title:"Bruchetta",
            price:"$9.99",
            description:`Classic Italian appetizer, is a delightful dish that tantalizes
            the taste buds with its simplicity and vibrant flavors. This iconic dish
            features toasted slices of crusty bread, rubbed with garlic and drizzled with
            extra-virgin olive oil to create a perfect base.`
        },
        {
            image:breadFlyer,
            title:"BreadFlyer",
            price:"$14.99",
            description:`Tantalizing dish that elevates the humble toast to new heights!
            This culinary masterpiece features three slices of perfectly toasted bread, each
            adorned with a unique and mouthwatering topping to satisfy every palate.`
        }]
  return (
    <main>
        <Hero/>
        <section className='specials-wrapper'>
            <h2 className='specials-title'> Specials </h2>
            <div className='specials-container'>
                {specialsMenu.map(item => {
                    return(
                    <SpecialsCard
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    description={item.description} />
                )})}
            </div>
            <button> Start Order </button>
        </section>
        <Testimonials/>
        <About/>
    </main>
  )
}
