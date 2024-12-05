import React from 'react'

const Location = () => {
  return (
    <div>
        <div>
            <div className='container pb-10'>
                <h1 className='inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl'>
                Location to Visit
                </h1>

               <div className='rounded-xl'>
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57008.74930076484!2d94.20248135!3d26.742881599999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3746c294ee518ba1%3A0x75147ff2c76406bc!2sJorhat%2C%20Assam!5e0!3m2!1sen!2sin!4v1733249751058!5m2!1sen!2sin" width="100%" height="350" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

               </div>
            </div>
        </div>
      
    </div>
  )
}

export default Location
