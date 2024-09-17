import React from 'react'
import Logo from '../../assets/images/Netflix_Logo_PMS.png'
import './Header.css'
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import './bootstrap.css'
import $ from 'jquery'

const Header = () => {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {
      $("nav").addClass("black");
    } else {
      $("nav").removeClass("black");
    }
  });
  return (
    <>
      <nav className="navbar navbar-toggleable-sm navbar-expand-md" id="header">
        <a className="navbar-brand" href="#">
          {" "}
          <img
            src={Logo}
            width={100}
            alt="Netflix logo"
            className="navbar-brand"
          />
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target=".navbar-collapse"
        >
          ☰
        </button>

        <div
          className="collapse navbar-collapse "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link text-light" href="# text-light">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-light" href="#">
                Tvshows
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link  text-light" href="#">
                Movies
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link  text-light" href="#">
                Latest
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-light" href="#">
                MyList
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link  text-light" href="#">
                Browse by Languages
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <ul className="header-right-ul">
              <li>
                <SearchIcon />
              </li>
              <li>
                <NotificationsNoneIcon />
              </li>
              <li>
                <AccountBoxIcon />
              </li>
              <li>
                <ArrowDropDownIcon />
              </li>
            </ul>
          </form>
        </div>
      </nav>

      {/* <div className="header-outer navbar navbar-expand-lg navbar-light bg-light">
        <div className="header-inner">
          <div className="header-left">
            <ul className="header-left-ul">
              <li>
                <img
                  src={Logo}
                  width={100}
                  alt="Netflix logo"
                  className="navbar-brand"
                />
              </li>
              <li>Home</li>
              <li>Tvshows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>MyList</li>
              <li>Browse by Languages</li>
            </ul>
          </div>
          <div className="header-right">
            <ul className="header-right-ul">
              <li>
                <SearchIcon />
              </li>
              <li>
                <NotificationsNoneIcon />
              </li>
              <li>
                <AccountBoxIcon />
              </li>
              <li>
                <ArrowDropDownIcon />
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Header
