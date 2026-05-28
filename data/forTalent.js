import { GoGoal } from "react-icons/go";
import { FaRegCompass } from "react-icons/fa";
import { LuCopyCheck } from "react-icons/lu";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { IoMdSpeedometer } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiBankLine } from "react-icons/ri";
import { TbFileInvoice } from "react-icons/tb";
export const forTalentData={
     companies : [
  { name: "SOMETHINGS", img: "/assets/comp/logo5.avif" },
  { name: "Context", img: "/assets/comp/logo8.avif" }, 
  { name: "Dorothy™", img: "/assets/comp/logo6.svg" },
  { name: "SecurityScorecard", img: "/assets/comp/logo4.svg" },
],
 freelance2 : [
  {
    icon: <GoGoal />,
    title: "less leg work",
    heading: "Application Tracker",
  img:'/assets/story3.avif'
  },
  {
    icon: <FaRegCompass />,
    title: "less leg work",
    heading: "Interview Co-Pilot",
   img:"/assets/story2.avif"
   
  },
  {
    icon: <LuCopyCheck />,
    title: "less leg work",
    heading: "Get paid easily",
   img:"/assets/story4.avif"
  },
],
freelance : [
  {
    icon: <BsArrowUpRightCircle />,
    title: "tip top jobs",
    heading: "Premium roles",
    subheading:
      "Clients are kept to a high standard so top talent like you don’t have to search through hundreds of listings to find the right role.",
  },
  {
    icon: <BsArrowUpRightCircle />,
    title: "Always remote",
    heading: "Premium roles",
    subheading:
      "Clients are kept to a high standard so top talent like you don’t have to search through hundreds of listings to find the right role.",
  },
  {
    icon: <IoMdSpeedometer />,
    title: "forget ghosting",
    heading: "Fast-paced hiring",
    subheading:
      "Roles start to interview matches in 48 hours or less, so you’re kept in the loop for the entire cycle.",
  },
  {
    icon: <IoIosNotificationsOutline />,
    title: "less leg work",
    heading: "Invoice Reminders",
    subheading:
      "We make sure you get paid on time. We’ll remind you to invoice and follow up with your clients to send payment.",
  },
  {
    icon: <RiBankLine />,
    title: "Flexible contracts",
    heading: "ACH + W2",
    subheading:
      "Go beyond traditional freelance contracts brokered by other sites. Receive payments directly in your bank account ASAP.",
  },
  {
    icon: <TbFileInvoice />,
    title: "WYSIWYG invoices",
    heading: "Fee-free payments",
    subheading:
      "What you see on your invoice is what you get in your bank account. All transfer fees are paid by your clients, not you.",
  },
], data : [
  {
    name: (
      <div className="flex justify-center items-center">
        <div>3</div>
        <div></div>x
      </div>
    ),
    title: "Longer projects",
    subTitle: "than average Upwork project",
    delay: 0.6,
  },
  {
    name: (
      <div className="flex justify-center items-center">
        <div>2</div>
        <div></div>x
      </div>
    ),
    title: "Higher hourly rates",
    subTitle: "than US freelance average",
    delay: 0.7,
  },
  {
    name: "$4M",
    title: "Earned on platform",
    subTitle: "by freelancers on Pangea",
    delay: 0.8,
  },
],
}