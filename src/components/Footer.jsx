import logo from "../assets/logo.png";
import appstore from "../assets/footer-appstore-image.png";
import googleplay from "../assets/footer-googleplay-image.png";
import FooterSocialIcon from "./FooterSocioalIcon";
import FooterNavigationList from "./FooterNavigationList";

export default function Footer() {
  return (
    <footer className="bg-body border-t border-border py-6 text-center mx-[20px] text-text ">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <div>
          <img src={logo} />
        </div>

        <div className="flex gap-[12px]">
          <FooterSocialIcon />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-[20px]">
        <FooterNavigationList
          item1="About Us"
          item2="Mitao Bhook"
          item3="Mitao Bhook - Scholarship"
          item4="Privacy Policy"
          item5="Careers"
        />
        <FooterNavigationList
          item1="Contact us"
          item2="Store Locater"
          item3="Track Order"
        />
        <FooterNavigationList item1="Terms & Conditionss" />
        <FooterNavigationList image1={appstore} image2={googleplay} />
      </div>
      <div className="container mx-auto mt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
        <div className="text-text text-[16px] font-medium">
          © {new Date().getFullYear()} KFC Clone. All Rights Reserved.
        </div>
        <div>
          <p className="text-[20px] text-primary font-medium">Powered by</p>
          <p>
            <a
              href="https://www.linkedin.com/in/abdur-rehman-0a3623318/"
              target="_blank"
              className="border-b border-text"
            >
              Abdur Rehman
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
