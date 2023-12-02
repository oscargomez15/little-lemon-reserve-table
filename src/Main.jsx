import React from 'react'
import "./Main.css"
import lemonCake from "./Assets/lemon-dessert.jpg"

export const Main = () => {
  return (
    <main>
        <section className='hero-container'>
            <div className='hero-wrapper'>
                <div className='hero-info'>
                    <h1> Little Lemon Restaurant </h1>
                    <h2> Chicago, IL</h2>
                    <p> Little Lemon Restaurant is a hidden gem nestled in the heart of
                        Chicago, offering a delightful culinary experience that perfectly
                        blends innovation with tradition. This cozy eatery exudes charm
                        with its warm and inviting atmosphere, making it an ideal spot for
                            both intimate dinners and casual gatherings.
                    </p>
                    <button> BOOK A TABLE </button>
                </div>

                <div className='hero-image'>
                    <img src={lemonCake} alt="lemon-cake" />
                </div>
            </div>
        </section>
        <section>
            <h2> Specials </h2>
        </section>
    </main>
  )
}
