import React from 'react'
import './Contact.css';
import {MdCall} from 'react-icons/md';
import {BsFillChatDotsFill} from 'react-icons/bs';
import {HiChatBubbleBottomCenter} from 'react-icons/hi2';
import BotonComponent from './prueba';
function Contact() {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}

        <div className="flexColStart c-left">
            <span className='orangeText'>Our Contact Us</span>
            <span className='primaryText'>Easy to contact us</span>
            <span className='secondaryText'>We always ready to help by providing the best services for you.
              We believe a good blace to live can make your lifer better
            </span>

            <div className="flexColStart contactModes">
              {/* first row */}
              <div className="flexStart row">
                <BotonComponent icon='mdcall' name='Call' nameb= 'Call Now'></BotonComponent>
                <BotonComponent icon='bs' name='Video Call' nameb= 'Video Call Now'></BotonComponent>
              </div>

              {/* second row */}
              <div className="flexStart row">
                <BotonComponent icon='bs' name='Chat Now' nameb= 'Chat Now'></BotonComponent>
                <BotonComponent icon='hi' name='Message' nameb= 'Message Now'></BotonComponent>
              </div>
            </div>
        </div>

        {/* right-side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="a"/>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact