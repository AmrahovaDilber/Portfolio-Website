import photo from "../assets/images/myimage.jpeg";
import card1 from "../assets/images/card_1.png";
import card3 from "../assets/images/card_3.png"



export const experienceData = [
  {
    date: "2013-2014",
    info: {
      company: "Google",
      job: "Front-end developer / php programmer",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
    },
  },
  {
    date: "2012",
    info: {
      company: "Twitter",
      job: "Web developer",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
    },
  },
];

export const timeLineData = [
  {
    date: 2001,
    title: "Title 0",
    text: "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.\r\n",
  },
  {
    date: 2000,
    title: "Title 1",
    text: "Et irure culpa ad proident labore excepteur elit dolore. Quis commodo elit culpa eiusmod dolor proident non commodo excepteur aute duis duis eu fugiat. Eu duis occaecat nulla eiusmod non esse cillum est aute elit amet cillum commodo.\r\n",
  },
  {
    date: 2012,
    title: "Title 2",
    text: "Labore esse tempor nisi non mollit enim elit ullamco veniam elit duis nostrud. Enim pariatur ullamco dolor eu sunt ad velit aute eiusmod aliquip voluptate. Velit magna labore eiusmod eiusmod labore amet eiusmod. In duis eiusmod commodo duis. Exercitation Lorem sint do aliquip veniam duis elit quis culpa irure quis nulla. Reprehenderit fugiat amet sint commodo ex.\r\n",
  },
];

export const portfolioData = [
  {
    title: "Project 1",
    category: "ui",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: card1,
    url: "https://picsum.photos/200/300",
  },
  {
    title: "Project 2",
    category: "code",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: card3,
    url: "https://picsum.photos/200/300",
  },
  {
    title: "Real-Time Sentiment Analysis of Social Media Data",
    category: "ui",
    text: "In today's digital age, social media platforms are a treasure trove of information, opinions, and trends. This project aims to leverage the power of big data to perform real-time sentiment analysis on social media data. The objective is to process vast amounts of text-based data from platforms like Twitter, Facebook, and Instagram to understand the collective sentiment of users",
    img: card1,
    url: "https://www.medadata.com.au/",
  },
  {
    title: "Project 4",
    category: "code",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: card3,
    url: "https://picsum.photos/200/300",
  },
];


export const feedbackData = [
  {
    feedback:
      " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. ",
    reporter: {
      photoUrl: photo,
      name: "Dilbər Əmrahova",
      citeUrl: "https://www.citeexample.com",
    },
  },
  {
    feedback:
      " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. ",
    reporter: {
      photoUrl: photo,
      name: "Dilbər Əmrahova",
      citeUrl: "https://www.citeexample.com",
    },
  },
];



// import Panel from "../components/Panel";
// import Box from "../components/Box";
// import TimeLine from "../components/TimeLine";
// import Expertise from "../components/Expertise";
// import Portfolio from "../components/Portfolio";
// import Feedback from "../components/Feedback";
// import "../assets/styles/Inner.scss";
// import { useState } from "react";
// // back-to-top button
// import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import {
//   timeLineData,
//   experienceData,
//   portfolioData,
//   feedbackData,
// } from "../utils/data";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Button from "../components/Button";
// import Address from "../components/Address";
// const Inner = () => {
//   const [isPanelOpen, setPanelOpen] = useState(true);
//   const togglePanel = () => {
//     setPanelOpen(!isPanelOpen);
//   };
//   // back-to-top button
//   const handleUpButtonClick = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };
//   return (
//     <div className="main">
//       <div className={`main__sidebar ${isPanelOpen ? "open" : "closed"}`}>
//         <Panel></Panel>
//       </div>
//       <div className="main-content">
//         <Button
//           icon={<FontAwesomeIcon icon={faBars} onClick={togglePanel} />}
//         />
//         <div className="content">
//           <Box
//             id={"about"}
//             title="About me"
//             content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque"
//           ></Box>

//           <Box id={"education"} title="Education">
//             <TimeLine data={timeLineData} />
//           </Box>

//           <Box id={"experience"} title="Experience">
//             <Expertise data={experienceData} />
//           </Box>

//           <Box id={"portfolio"} title="Portfolio">
//             <Portfolio data={portfolioData} />
//           </Box>

//           <Box id={"contacts"} title="Contacts">
//             <Address></Address>
//           </Box>

//           <Box id={"feedbacks"} title="Feedbacks">
//             <Feedback data={feedbackData} />
//           </Box>
//           {/* Back-to-top button */}
//           <div className="back-to-top-button" onClick={handleUpButtonClick}>
//             <FontAwesomeIcon icon={faAngleUp} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Inner;
