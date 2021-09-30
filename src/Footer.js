import githubLogo from "./images/github.svg";
import linkedInLogo from "./images/linkedin.svg";
import instagramLogo from "./images/instagram.svg";
const Footer = () => {
  return (
    <div className="footer">
      <h5 className="copyright"> © | 2021 | Praveen Malviya </h5>
      <div className="socialLinks">
        <a href="https://www.linkedin.com/in/mpraveen07">
          <img src={linkedInLogo} alt="Linkedin logo" />
        </a>
        <a href="https://github.com/praveen-malviya">
          <img src={githubLogo} alt="Github logo" />
        </a>
        <a href="https://www.instagram.com/pra_veen.m">
          <img src={instagramLogo} alt="instagram Logo" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
