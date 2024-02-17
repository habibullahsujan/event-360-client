import { Link } from "react-router-dom";
import Container from "../Container";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (<>
  <hr  className="bg-[#E2E8F0]"/>
  <Container className="bg-[#0F172A]  text-white pt-24 pb-[48px]">
      <div className="md:grid grid-cols-12 pb-[50px] block">
        <div className="lg:col-span-2 md:col-span-3">
          <h1 className="text-3xl font-bold">
            Event <span className="linear-gradient-text">360</span>
          </h1>
        </div>
        <div className="lg:col-span-2 md:col-span-3 flex flex-col gap-y-4">
          <span className="font-semibold text-lg pt-8 md:py-0">Product</span>
          <Link to={"/"}>Pricing</Link>
          <Link to={"/"}>Overview</Link>
          <Link to={"/"}>Browse</Link>
          <Link to={"/"}>Accessibility</Link>
        </div>
        <div className="lg:col-span-2 md:col-span-3 flex flex-col gap-y-4">
          <span className="font-semibold text-lg pt-8 md:py-0">Solutions</span>

          <Link to={"/"}>Brainstorming</Link>
          <Link to={"/"}>Ideation</Link>
          <Link to={"/"}>Wireframing</Link>
          <Link to={"/"}>Research</Link>
        </div>
        <div className="lg:col-span-2 md:col-span-3 flex flex-col gap-y-4">
          <span className="font-semibold text-lg pt-8 md:py-0">Resources</span>

          <Link to={"/"}>Help Center</Link>
          <Link to={"/"}>Blog</Link>
          <Link to={"/"}>Tutorial</Link>
          <Link to={"/"}>FAQs</Link>
        </div>
        <div className="lg:col-span-2 md:col-span-3 flex flex-col gap-y-4">
          <span className="font-semibold text-lg pt-8 md:py-0">Support</span>

          <Link to={"/"}>Contact Us</Link>
          <Link to={"/"}>Developers</Link>
          <Link to={"/"}>Documentation</Link>
          <Link to={"/"}>Integrations</Link>
        </div>
        <div className="lg:col-span-2 md:col-span-3 flex flex-col gap-y-4">
          <span className="font-semibold text-lg pt-8 md:py-0">Company</span>

          <Link to={"/"}>About</Link>
          <Link to={"/"}>Press </Link>
          <Link to={"/"}>Events</Link>
          <div className="flex  items-center gap-x-3">
            <Link to={"/"}>Request Demo</Link>
            <FaArrowRight />
          </div>
        </div>
      </div>

      <hr />
      <div className="flex justify-between py-6 text-[#E2E8F0]">
        <span> @ 2023. All rights reserved.</span>
      <div className="flex justify-between items-center gap-x-3 flex-wrap">
      <Link to={"/"}>Terms</Link>
        <Link to={"/"}>Privacy</Link>
        <Link to={"/"}>Contact</Link>
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4.252 10C4.08416 10.6534 3.99949 11.3254 4 12C4 12.69 4.088 13.36 4.252 14H7.1C6.96518 12.6701 6.96518 11.3299 7.1 10H4.252ZM5.07 8H7.416C7.682 6.783 8.066 5.693 8.537 4.786C7.08518 5.48542 5.87722 6.60523 5.07 8ZM19.748 10H16.9C17.0348 11.3299 17.0348 12.6701 16.9 14H19.748C20.0847 12.6879 20.0847 11.3121 19.748 10ZM18.93 8C18.1228 6.60523 16.9148 5.48542 15.463 4.786C15.935 5.693 16.318 6.783 16.584 8H18.93ZM9.112 10C9.03708 10.664 8.99968 11.3318 9 12C9 12.685 9.038 13.355 9.112 14H14.888C15.0386 12.6709 15.0386 11.3291 14.888 10H9.112ZM9.47 8H14.53C14.348 7.2483 14.0855 6.51841 13.747 5.823C13.119 4.568 12.447 4 12 4C11.552 4 10.881 4.568 10.253 5.823C9.938 6.455 9.673 7.19 9.47 8ZM5.07 16C5.87722 17.3948 7.08518 18.5146 8.537 19.214C8.065 18.307 7.682 17.217 7.416 16H5.07ZM18.93 16H16.584C16.318 17.217 15.934 18.307 15.463 19.214C16.9148 18.5146 18.1228 17.3948 18.93 16ZM9.47 16C9.673 16.81 9.938 17.545 10.253 18.177C10.881 19.432 11.553 20 12 20C12.448 20 13.119 19.432 13.747 18.177C14.062 17.545 14.327 16.81 14.53 16H9.47ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22Z"
              fill="#E2E8F0"
            />
          </svg>
          <span>EN</span>
        </div>
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18.5 4.80423C17.4428 4.28906 16.2552 4 15 4C10.5817 4 7 7.58172 7 12C7 16.4183 10.5817 20 15 20C16.2552 20 17.4428 19.7109 18.5 19.1958"
              stroke="#E5E7EB"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 10H16"
              stroke="#E5E7EB"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 14H16"
              stroke="#E5E7EB"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          EUR
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <rect
            x="1"
            y="1"
            width="22"
            height="22"
            rx="11"
            stroke="#E2E8F0"
            stroke-width="2"
          />
          <path
            d="M11.9097 15.016L11.5857 18.103C11.572 18.2336 11.5326 18.3602 11.4699 18.4756C11.4071 18.591 11.3223 18.6929 11.2202 18.7755C11.1181 18.8581 11.0007 18.9197 10.8748 18.957C10.7489 18.9942 10.6168 19.0063 10.4862 18.9925C10.3556 18.9787 10.229 18.9393 10.1137 18.8766C9.99827 18.8139 9.89637 18.7291 9.81378 18.627C9.73118 18.5249 9.6695 18.4075 9.63226 18.2816C9.59502 18.1556 9.58295 18.0236 9.59674 17.893L10.3197 11.01H7.00974C6.74413 11.01 6.48939 10.9045 6.30157 10.7167C6.11375 10.5289 6.00824 10.2741 6.00824 10.0085C6.00824 9.74289 6.11375 9.48815 6.30157 9.30033C6.48939 9.11251 6.74413 9.007 7.00974 9.007H17.0097C17.2754 9.007 17.5301 9.11251 17.7179 9.30033C17.9057 9.48815 18.0112 9.74289 18.0112 10.0085C18.0112 10.2741 17.9057 10.5289 17.7179 10.7167C17.5301 10.9045 17.2754 11.01 17.0097 11.01H13.6997L14.4227 17.895C14.4411 18.0279 14.4325 18.1632 14.3975 18.2927C14.3626 18.4223 14.3019 18.5435 14.2191 18.6491C14.1364 18.7548 14.0332 18.8427 13.9158 18.9076C13.7984 18.9726 13.6691 19.0133 13.5357 19.0273C13.4022 19.0414 13.2673 19.0284 13.139 18.9892C13.0106 18.9501 12.8915 18.8855 12.7886 18.7994C12.6857 18.7132 12.6012 18.6073 12.54 18.4878C12.4789 18.3684 12.4424 18.2378 12.4327 18.104L12.1097 15.016H11.9097ZM12.0097 9.006C10.9047 9.006 10.0097 8.109 10.0097 7.003C10.0097 5.897 10.9047 5 12.0097 5C13.1147 5 14.0097 5.897 14.0097 7.003C14.01 7.53379 13.7995 8.04296 13.4244 8.41857C13.0494 8.79417 12.5405 9.00547 12.0097 9.006Z"
            fill="#E2E8F0"
          />
        </svg>
      </div>
      </div>
    </Container>
  
  </>
    
  );
};

export default Footer;
