import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { RiGraduationCapFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { BiSolidPencil } from "react-icons/bi";
import { RiVipDiamondFill } from "react-icons/ri";
import { IoBag } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa6";


export const navlist = [
  {
    id: 0,
    icon: <BsFillPersonFill />,
    to: "aboutMe",
    list: "About me",
  },
  {
    id: 1,
    to: "education",
    icon: <RiGraduationCapFill />,
    list: "Education",
  },
  {
    id: 2,
    to: "experience",
    icon: <BiSolidPencil />,
    list: "Experience",
  },
  {
    id: 3,
    to: "skills",
    icon: <RiVipDiamondFill />,
    list: "Skills",
  },
  {
    id: 4,
    to: "portfolio",
    icon: <IoBag />,
    list: "Portfolio",
  },
  {
    id: 5,
    to: "contacts",
    icon: <FaLocationArrow />,
    list: "Contacts",
  },
  {
    id: 6,
    to: "feedback",
    icon: <HiOutlineChatBubbleOvalLeft />,
    list: "Feedbacks",
  },
];
