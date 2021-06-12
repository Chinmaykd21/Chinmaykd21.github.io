import React from "react";
import ContactItem from "../Components/ContactItem";
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";
import Tittle from "../Components/Title";

function ContactPage() {
  return (
    <div>
      <div className="title">
        <Tittle tittle={"Contact Me"} span={"Contact Me"} />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.024806086954!2d-83.3777556842925!3d33.91476113064355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f66c4c6ffb709b%3A0x775211cd7b1960d1!2s1000%20Lakeside%20Dr%2C%20Athens%2C%20GA%2030605!5e0!3m2!1sen!2sus!4v1623452728763!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem
            icon={phone}
            text1={"+1-(706)-308-8649"}
            title={"Phone"}
          />
          <ContactItem
            icon={email}
            text1={"chinmaykd21@gmail.com"}
            title={"Email"}
          />
          <ContactItem
            icon={location}
            text1={"1000 Lakeside Drive, Apt 102, Athens, GA 30605, USA"}
            title={"Address"}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
