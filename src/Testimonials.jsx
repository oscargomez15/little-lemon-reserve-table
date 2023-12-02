import React from 'react'
import "./Testimonials.css"
import layla from "./Assets/layla.jpg"
import martha from "./Assets/martha.jpg"
import josh from "./Assets/josh.jpg"

export const Testimonials = () => {
    const testimonialsContent = [{
        image:layla,
        name:"Layla, M",
        feedback:`Little Lemon Restaurant is an absolute gem for dessert lovers.
        The ambiance is charming, and the desserts are nothing short of spectacular.
         The lemon-infused treats are a delightful twist, and the attention to detail
         in every dish is truly commendable. A must-visit for those with a sweet tooth
         in the Windy City!`,
    },{
        image:martha,
        name:"Martha, S",
        feedback:`Little Lemon Restaurant has quickly become my go-to spot for heavenly
         desserts in the heart of Chicago. The menu is a tantalizing journey of flavors,
          and each dessert is a work of art. From the zesty lemon tarts to the velvety
           cheesecakes, every bite is a moment of pure bliss. The friendly staff and
            cozy atmosphere make it the perfect place to satisfy your sweet cravings.`
    },{
        image:josh,
        name:"Josh, L",
        feedback:`"Little Lemon Restaurant is a delightful escape for anyone seeking an
        indulgent treat. The desserts here are not just food; they're an experience.
        The presentation is Instagram-worthy, and the taste is even better. The staff
         goes above and beyond to ensure a pleasant dining experience. If you find yourself
          in Chicago, don't miss the chance to savor the sweetness at Little Lemon!"`
    }]
  return (
    <section>
        <div className='testimonials-container'>
            <div className='testimonials-wrapper'>
            <h2> Testimonials </h2>
                <div className="cardsContainer">
                {testimonialsContent.map( item => {
                    return(
                    <div className='testimonials-card'>
                    <img src={item.image} alt={`${item.image} picture`} height="200"px width="200px"/>
                    <h2>{item.name}</h2>
                    <h3> 5/5 </h3>
                    <p> <i>{item.feedback}</i></p>
                </div>)
                })}
                </div>
            </div>
        </div>
    </section>
  )
}
