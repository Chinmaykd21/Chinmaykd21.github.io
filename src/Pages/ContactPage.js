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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.8503775856493!2d-83.37804568445839!3d33.91925023217356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f66c4d0f924f5b%3A0x61869995376d8e63!2s2165%20S%20Milledge%20Ave%2C%20Athens%2C%20GA%2030605!5e0!3m2!1sen!2sus!4v1627955900618!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
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
            text1={"2165 South Milledge Avenue,Apt E8, Athens, GA 30605, USA"}
            title={"Address"}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
