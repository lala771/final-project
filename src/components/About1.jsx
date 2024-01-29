// About.js

import React from 'react';
import '../App.css';


const About = () => {
  return (
    <div className="about-container">
      <h1 className='tex'>...ABOUT US...</h1>
      <div className="about-sections">

        <section className="about-section">
                 
         <img src="https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Person 1" />
          <div className="content">
            <h2>PLERSURES</h2>
            <p>
            Estée lauder pleasures perfume is a fresh floral fragrance perfect for summer gatherings and spring garden tours can be found in Pleasures Perfume. Enjoy the rare essence of delightful sheer floral created by perfumers Annie Buzantian and Alberto Morillas. This wonderful fragrance embodies fresh flowers mixed with the warm base of cedar and patchouli in this light perfume that can be worn daily</p>
          </div>
        </section>
        <section className="about-section">
          <img src="https://images.pexels.com/photos/1830450/pexels-photo-1830450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Person 2" />
          <div className="content">
            <h2>Burberry Perfume</h2>
            <p>
            Burberry perfume is a fruity floral women's fragrance that was launched in 1995 following the notable success of Burberry's original fragrance for men. The nose behind this perfume is Michel Almairac who has worked closely with some of the biggest international perfumers and fragrance brands. Over the last few decades, Burberry perfume has remained a classic feminine fragrance for collectors across the world
            </p>
          </div>
        </section>
        <section className="about-section">
          <img src="https://images.pexels.com/photos/965992/pexels-photo-965992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Person 3" />
          <div className="content">
            <h2>La Vie Est Belle Perfume</h2>
            <p>
            La Vie Est Belle perfume is an iconic fragrance that captures the essence of a floral gourmand bouquet blending. Its name, a French expression meaning "life is beautiful," perfectly encapsulates the joy and beauty this scent exudes. Crafted by two renowned French perfumers, it embodies the expertise and artistry of the French perfumery tradition. With its spicy scent type and being a timeless fragrance, La Vie Est Belle has become a beloved and classic floral perfume that celebrates the beauty of life itself
            </p>
            
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
