import React from "react";
import InterestList from "../InterestList/InterestList";
import "./interest.css";
import Bounce from "react-reveal/Bounce";
function Interest() {
  const interestList = [
    {
      interest: "Mobile Photography",
      description:
        "Mobile Photography is one of my hobby which i live the most when i have free time. For me Clicking Pictures is the best way to observe things in the world",
    },
    {
      interest: "Reading Books",
      description:
        "I have a good interest in reading books like fiction books, novels and motivational books it gives me a great sense of understanding of life",
    },
    {
      interest: "Watching WebSeries",
      description:
        "Webseries are the one which attracts me very much. Webseries is a good way to understand communication skills and languages. It also develop a good sense of humour in our behaviour",
    },
    {
      interest: "Listening To Music",
      description:
        "Music is something which heals me when nobody does , it gives me great relief and energy to do works and keeps my mind stable",
    },
  ];
  return (
    <Bounce bottom duration={2000}>
      <div className="interest-container">
        <div className="interest-heading">OTHER INTERESTS</div>
        <div className="interest-parent-container">
          <div className="interest-list-container">
            {interestList.map((ele) => (
              <InterestList
                interest={ele.interest}
                description={ele.description}
              />
            ))}
          </div>
        </div>
      </div>
    </Bounce>
  );
}

export default Interest;
