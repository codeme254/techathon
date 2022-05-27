import React from "react";
import Organizer from "./Organizer";
import organizer1 from "../assets/images/speaker3.jpg";

const Organizers = React.forwardRef(
  ({ handleLeftScroll, handleRightScroll }, ref) => {
    return (
      <section className="organizers-section">
        <div className="organizers__container" ref={ref}>
          <Organizer
            image={organizer1}
            occupation="software engineer"
            orgnizerName="felix omuok"
            description="Were he beginning green said them rule face, in have heaven every he midst deep third give us night, creepeth.daily"
            email="hisemail@server.com"
            messageNumber="+254743487923"
          />

          <Organizer
            image={organizer1}
            occupation="software engineer"
            orgnizerName="stephen tharua"
            description="Were he beginning green said them rule face, in have heaven every he midst deep third give us night, creepeth.daily"
            email="hisemail@server.com"
            messageNumber="+254743487923"
          />
          {/* <Organizer
          image={organizer1}
          occupation="software engineer"
          orgnizerName="dennis otwoma"
          description="Were he beginning green said them rule face, in have heaven every he midst deep third give us night, creepeth.daily"
          email="hisemail@server.com"
          messageNumber="+254743487923"
        /> */}
        </div>
        <div className="organizers-button-container">
          <button
            className="organizers__scrollbtn scrollbtn-left"
            onClick={handleLeftScroll}
          >
            <span>&larr;</span>
          </button>
          <button
            className="organizers__scrollbtn scrollbtn-right"
            onClick={handleRightScroll}
          >
            <span>&rarr;</span>
          </button>
        </div>
      </section>
    );
  }
);

export default Organizers;
