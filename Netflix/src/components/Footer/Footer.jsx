import React from 'react'
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import './Footer.css'
import '../Header/bootstrap.css'

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-content">
          <div className="first-footer-row">
            <div className="the-icons">
              <ul>
                <li>
                  <FacebookOutlinedIcon />
                </li>
                <li>
                  <InstagramIcon />
                </li>
                <li>
                  <YouTubeIcon />
                </li>
              </ul>
            </div>
            <h4>Audio Descripition</h4>
            <h4>Investor Relations</h4>
            <h4>Leagal Notice</h4>
            <h4>Service Code</h4>
            <h4>&copy;1997-2024 Netflix, Inc.</h4>
          </div>
          <div className="second-footer-row">
            <h4>Help Center</h4>
            <h4>Jobs</h4>
            <h4>Cookie Preferences</h4>
          </div>
          <div className="third-footer-row">
            <h4>Git Cards</h4>
            <h4>Terms of Use</h4>
            <h4>Corporate Information</h4>
          </div>
          <div className="forth-footer-row">
            <h4>Madia Center</h4>
            <h4>Privacy</h4>
            <h4>Contact Us</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer
