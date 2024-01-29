import React from 'react'

export default function Contact() {
  return (
    <div className="contact">
    <h1>Contact Us</h1>
    <div className="contact-form">
      <form>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" />

        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" placeholder="Your Email" />

        <label htmlFor="message">Your Message:</label>
        <textarea id="message" name="message" placeholder="Your Message"></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>

    
    <div className="contact-details">
      <h2>Contact Details</h2>

      <p>
        <strong>Address:</strong> 157 Landon road FOURWAYS
      </p>

      <p>
        <strong>Phone:</strong> +2762 00 33 985
      </p>

      <p>
        <strong>Email:</strong>Plalah002@gmail.com
      </p>
    </div>


        {/* Add more social platform icons as needed */}
      
    </div>
  
 
  )
}

