import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import useWindowSize from "../useWindowSize";
import { stickyNav } from "../utils";
import MobileHeader from "./MobileHeader";
import OffcanvasPanel from "./OffcanvasPanel";
import { useTranslation } from 'react-i18next';
import '../../public/locales/en/common.js';
import '../../public/locales/mk/common.js';
import '../../public/locales/index.js';
import { t } from "i18next";
import LanguageSwitcher from "../../public/locales/LanguageSwitcher";









function Header({ header }) {

  
  const { t } = useTranslation();
  useEffect(() => {
    stickyNav();
  }, []);
  const [overlayPanel, setOverlayPanel] = useState(false);
  const togglePanel = () => setOverlayPanel(!overlayPanel);

  const { width } = useWindowSize();
 

  useEffect(() => {
    const headers = document.querySelectorAll(".header-navigation");
    headers.forEach((header) => {
      if (width <= 1199) {
        header.classList.add("breakpoint-on");
      } else {
        header.classList.remove("breakpoint-on");
      }
      // toggle
      const toggleBtn = header.getElementsByClassName("navbar-toggler")[0], overlay = header.getElementsByClassName("nav-overlay")[0], menu = header.getElementsByClassName("nav-menu")[0];
      toggleBtn.addEventListener("click", () => {
        overlay.classList.add("active");
        menu.classList.add("menu-on");
      });
      overlay.addEventListener("click", () => {
        overlay.classList.remove("active");
        menu.classList.remove("menu-on");
      });
    });
  }, [width]);

  switch (header) {
    case 1:
      return <>
        <Header1 />
      </>;
    case 2:
      return <>
        <Header2 />
      </>;;
    case 3:
      return (
        <Header3
          overlayPanel={overlayPanel}
          togglePanel={() => togglePanel()} />
      );
    case 4:
      return (
        <Header4
          overlayPanel={overlayPanel}
          togglePanel={() => togglePanel()} />
      );
    default:
      return <DefaultHeader />;
  }
  
}
export default Header;

const Header1 = () => (
  <header className="header-area"> 
    <div className="header-top-bar top-bar-one bg-blue">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-12 col-md-12 col-6">
            <div className="top-bar-left d-flex align-items-center">
           {/* Language Switcher */}
            <LanguageSwitcher />
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-6">
            <div className="top-bar-right">
              <span className="text">
                <i className="far fa-clock" />
                {t('workingTime')}
              </span>
              <ul className="social-link">
                <li>
                  <a href="https://www.facebook.com/agrohemijamk" target="blank">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="header-middle bg-blue">
      <div className="container-1350">
        <div className="row align-items-center">
          <div className="col-xl-4 d-xl-block d-lg-none">
            <div className="site-branding d-lg-block d-none">
              <Link href="/">
                <a className="brand-logo">
                  <img src="assets/images/logo/agrohemija-logo-white.png" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-xl-8 col-lg-12">
            <div className="contact-information">
              <div className="information-item_one d-flex">
                <div className="icon">
                  <i className="flaticon-placeholder" />
                </div>
                <div className="info">
                  <h5 className="mb-1 text-white">{t('location')}</h5>
                  <p className="text-white">Hristo Tatarcev 1 br.103
                    1000 Skopje, Macedonia</p>
                </div>
              </div>
              <div className="information-item_one d-flex">
                <div className="icon">
                  <i className="flaticon-email" />
                </div>
                <div className="info">
                  <h5 className="mb-1 text-white">{t('email')}</h5>
                  <p className="text-white">
                    <a href="mailto:brankobaltovski@gmail.com">
                    brankobaltovski@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="button text-md-right text-sm-center">
                <Link href="/contact">
                  <a className="main-btn btn-yellow text-white">{t('contact')}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="header-navigation navigation-one bg-blue">
      <div className="nav-overlay" />
      <div className="container-1350">
        <div className="primary-menu">
          <div className="site-branding">
            <Link href="/">
              <a className="brand-logo">
                <img src="assets/images/logo/agrohemija-logo-white.png" alt="Site Logo" />
              </a>
            </Link>
          </div>
          <div className="nav-inner-menu">
            <div className="nav-menu">
              {/*=== Mobile Logo ===*/}
              <div className="mobile-logo mb-30 d-block d-xl-none text-center">
                <Link href="/">
                  <a className="brand-logo">
                    <img src="assets/images/logo/agrohemija-logo-white.png" alt="Site Logo" />
                  </a>
                </Link>
              </div>
              {/*=== Main Menu ===*/}
              <Menu />
              <MobileHeader />
            </div>
            {/*=== Nav Right Item ===*/}
            <div className="nav-right-item">
              <div className="navbar-toggler">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const Header2 = () => (
  <header className="header-area">
    <div className="header-top-bar top-bar-one bg-blue">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-12 col-md-12 col-6">
            <div className="top-bar-left d-flex align-items-center">
              <span className="text">
                Welcome to Agrohemija
              </span>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-6">
            <div className="top-bar-right">
              <span className="text">
                <i className="far fa-clock" />
                Opening Hours : Sunday- Friday, 08:00 am - 05:00pm
              </span>
              <ul className="social-link">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="header-navigation navigation-two bg-blue">
      <div className="nav-overlay" />
      <div className="container-fluid">
        <div className="primary-menu">
          <div className="site-branding">
            <Link href="/">
              <a className="brand-logo">
                <img src="assets/images/logo/agrohemija-logo-white.png" alt="Site Logo" />
              </a>
            </Link>
          </div>
          <div className="nav-inner-menu">
            <div className="nav-menu">
              {/*=== Mobile Logo ===*/}
              <div className="mobile-logo mb-30 d-block d-xl-none text-center">
                <Link href="/">
                  <a className="brand-logo">
                    <img src="assets/images/logo/agrohemija-logo-white" alt="Site Logo" />
                  </a>
                </Link>
              </div>
              {/*=== Navbar Call Button ===*/}
              <div className="call-button text-center">
                <span>
                  <i className="far fa-phone" />
                  <a href="tel:+012(345)678">+012 (345) 678</a>
                </span>
              </div>
              {/*=== Main Menu ===*/}
              <Menu />
              <MobileHeader />
              {/*=== Navbar Menu Button ===*/}
              <div className="menu-button">
                <Link href="/contact">
                  <a className="main-btn btn-yellow">Get a Quote</a>
                </Link>
              </div>
            </div>
            {/*=== nav Right Item ===*/}
            <div className="nav-right-item d-flex align-items-center">
              <div className="call-button">
                <span>
                  <i className="far fa-phone" />
                  <a href="tel:+012(345)678">+012 (345) 678</a>
                </span>
              </div>
              <div className="menu-button">
                <Link href="/contact">
                  <a className="main-btn btn-yellow">Get a Quote</a>
                </Link>
              </div>
              <div className="navbar-toggler">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const Header3 = ({ overlayPanel, togglePanel }) => (
  <Fragment>
    <OffcanvasPanel overlyPanel={overlayPanel} togglePanel={togglePanel} />
    <header className="header-area">
      {/* Header Navigation */}
      <div className="header-navigation navigation-three bg-blue">
        <div className="nav-overlay" />
        <div className="container-fluid">
          <div className="primary-menu">
            {/* Site Branding */}
            <div className="site-branding">
              <Link href="/">
                <a className="brand-logo">
                  <img src="assets/images/logo/agrohemija-logo-white.png" alt="Site Logo" />
                </a>
              </Link>
              <Link href="/">
                <a className="sticky-logo">
                  <img src="assets/images/logo/agrohemija-logo-white.png" alt="Site Logo" />
                </a>
              </Link>
            </div>
            {/* Nav inner Menu */}
            <div className="nav-inner-menu">
              {/* Nav Menu */}
              <div className="nav-menu">
                {/*=== Mobile Logo ===*/}
                <div className="mobile-logo mb-30 d-block d-xl-none text-center">
                  <Link href="/">
                    <a className="brand-logo">
                      <img
                        src="assets/images/logo/agrohemija-logo-white.png"
                        alt="Site Logo"
                      />
                    </a>
                  </Link>
                </div>
                {/*=== Navbar Call Button ===*/}
                <div className="call-button text-center">
                  <span>
                    <i className="far fa-phone" />
                    <a href="tel:+012(345)678">+012 (345) 678</a>
                  </span>
                </div>
                {/*=== Main Menu ===*/}
                <Menu />
                <MobileHeader />
                {/*=== Navbar Menu Button ===*/}
                <div className="menu-button">
                  <Link href="/contact">
                    <a className="main-btn btn-yellow">Get a Quote</a>
                  </Link>
                </div>
              </div>
              {/*=== Nav Right Item ===*/}
              <div className="nav-right-item d-flex align-items-center">
                <div className="call-button">
                  <span>
                    <i className="far fa-phone" />
                    <a href="tel:+012(345)678">+012 (345) 678</a>
                  </span>
                </div>
                <div className="menu-button">
                  <Link href="/contact">
                    <a className="main-btn btn-yellow">Get a Quote</a>
                  </Link>
                </div>
                <div className="bar-item">
                  <a className="c-pointer" onClick={() => togglePanel()}>
                    <img src="assets/images/bar.png" alt="" />
                  </a>
                </div>
                <div className="navbar-toggler">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </Fragment>
);

const Header4 = ({ overlayPanel, togglePanel }) => (
  <Fragment>
    <OffcanvasPanel overlyPanel={overlayPanel} togglePanel={togglePanel} />
    <header className="header-area">
      <div className="header-top-bar top-bar-two bg-blue">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-12 col-md-12 col-6">
              <div className="top-bar-left d-flex align-items-center">
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 col-6">
              <div className="top-bar-right">
                <span className="text">
                  <i className="far fa-clock" />
                  Opening Hours : Sunday- Friday, 08:00 am - 05:00pm
                </span>
                <ul className="social-link">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-navigation navigation-four bg-blue">
        <div className="nav-overlay" />
        <div className="container-fluid">
          <div className="primary-menu">
            <div className="site-branding">
              <Link href="/">
                <a className="brand-logo">
                  <img src="assets/images/logo/agrohemija-logo-white.png" alt="Site Logo" />
                </a>
              </Link>
              <Link href="/index-4">
                <a className="sticky-logo">
                  <img src="assets/images/logo/agrohemija-logo-white.png" alt="Site Logo" />
                </a>
              </Link>
            </div>
            <div className="nav-inner-menu">
              <div className="bar-item">
                <a className="c-pointer" onClick={() => togglePanel()}>
                  <img src="assets/images/bar-2.png" alt="" />
                </a>
              </div>
              <div className="nav-menu">
                {/*=== Mobile Logo ===*/}
                <div className="mobile-logo mb-30 d-block d-xl-none text-center">
                  <Link href="/">
                    <a className="brand-logo">
                      <img
                        src="assets/images/logo/agrohemija-logo-white.png"
                        alt="Site Logo"
                      />
                    </a>
                  </Link>
                </div>
                {/*=== Navbar Call Button ===*/}
                <div className="call-button text-center">
                  <span>
                    <i className="far fa-phone" />
                    <a href="tel:+012(345)678">+012 (345) 678</a>
                  </span>
                </div>
                {/*=== Main Menu ===*/}
                <Menu />
                <MobileHeader />
                {/*=== Navbar Menu Button ===*/}
                <div className="menu-button">
                  <Link href="/contact">
                    <a className="main-btn bordered-btn">Get a Quote</a>
                  </Link>
                </div>
              </div>
              {/*=== Nav Right Item ===*/}
              <div className="nav-right-item d-flex align-items-center">
                <div className="call-button">
                  <span>
                    <i className="far fa-phone" />
                    <a href="tel:+012(345)678">+012 (345) 678</a>
                  </span>
                </div>
                <div className="menu-button">
                  <Link href="/contact">
                    <a className="main-btn bordered-btn bordered-yellow">
                      Get a Quote
                    </a>
                  </Link>
                </div>
                <div className="navbar-toggler">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </Fragment>
);

const DefaultHeader = () => (
  <header className="header-area">
    <div className="header-top-bar top-bar-one bg-blue">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-12 col-md-12 col-6">
            <div className="top-bar-left d-flex align-items-center">
              <span className="text">
                Welcome to Agrohemija
              </span>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-6">
            <div className="top-bar-right">
              <span className="text">
                <i className="far fa-clock" />
                Opening Hours : Sunday- Friday, 08:00 am - 05:00pm
              </span>
              <ul className="social-link">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Header Navigation */}
    <div className="header-navigation navigation-three bg-blue">
      <div className="nav-overlay" />
      <div className="container-fluid">
        <div className="primary-menu">
          {/* Site Branding */}
          <div className="site-branding">
            <Link href="/">
              <a className="brand-logo">
                <img src="assets/images/logo/agrohemija-logo-white.png" alt="Site Logo" />
              </a>
            </Link>
            <Link href="/">
              <a className="sticky-logo">
                <img src="assets/images/logo/agrohemija-logo-white.png" alt="Site Logo" />
              </a>
            </Link>
          </div>
          {/* Nav inner Menu */}
          <div className="nav-inner-menu">
            {/* Nav Menu */}
            <div className="nav-menu">
              {/*=== Mobile Logo ===*/}
              <div className="mobile-logo mb-30 d-block d-xl-none text-center">
                <Link href="/">
                  <a className="brand-logo">
                    <img src="assets/images/logo/logo-1.png" alt="Site Logo" />
                  </a>
                </Link>
              </div>
              {/*=== Navbar Call Button ===*/}
              <div className="call-button text-center">
                <span>
                  <i className="far fa-phone" />
                  <a href="tel:+012(345)678">+012 (345) 678</a>
                </span>
              </div>
              {/*=== Main Menu ===*/}
              <Menu />
              <MobileHeader />
              {/*=== Navbar Menu Button ===*/}
              <div className="menu-button">
                <Link href="/contact">
                  <a className="main-btn btn-yellow">Контакт</a>
                </Link>
              </div>
            </div>
            {/*=== Nav Right Item ===*/}
            <div className="nav-right-item d-flex align-items-center">
              <div className="call-button">
                <span>
                  <i className="far fa-phone" />
                  <a href="tel:+012(345)678">+012 (345) 678</a>
                </span>
              </div>
              <div className="menu-button">
                <Link href="/contact">
                  <a className="main-btn btn-yellow">КОНТАКТ</a>
                </Link>
              </div>
              <div className="bar-item">
                <a href="#">
                  <img src="assets/images/bar.png" alt="" />
                </a>
              </div>
              <div className="navbar-toggler">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const Menu = () => (
  <nav className="main-menu d-none d-xl-block">
    <ul>
      {/* <li className="menu-item has-children">
        <a href="#" className="active">
          Home
        </a>
      </li> */}
      <li className="menu-item has-children">
        <a href="portfolio-grid">{t('seeds')}</a>
        <ul className="sub-menu">
          <li>
            <Link href="farmers">{t('HybridSeeds')}</Link>
          </li>
          <li>
            <Link href="treva">{t('Grass')}</Link>
          </li>
          {/* <li>
            <Link href="portfolio-full-width">Portfolio Full Width</Link>
          </li> */}
          <li>
         
            <Link href="semenskiKompir">{t('SeedPotato')}</Link>
          </li>
          <li>
            <Link href="arpadjik">{t('Arpadzhik')}</Link>
          </li>
          <li>
            <Link href="pcenka">{t('Corn')}</Link>
          </li>
          <li>
            <Link href="lucerka">{t('Lucerka')}</Link>
          </li>
          
        </ul>
      </li>
      <li className="menu-item has-children">
        <a href="pesticidi">{t('pesticides')}</a>
        <ul className="sub-menu">
          <li>
            <Link href="fungicidi">{t('Fungicides')}</Link>
          </li>
          <li>
            <Link href="insekticidi">{t('Insecticides')}</Link>
          </li>
          <li>
            <Link href="akaricidi">{t('Acaricides')}</Link>
          </li>
          <li>
            <Link href="herbicidi">{t('Herbicides')}</Link>
          </li>
          <li>
            <Link href="nematocidi">{t('Nematodes')}</Link>
          </li>
          
        </ul>
      </li>
      <li className="menu-item has-children">
        <a href="gjubrivo">{t('fertilizer')}</a>
        <ul className="sub-menu">
          <li>
            <Link href="organskiGjubriva">{t('OrganicFertilizers')}</Link>
          </li>
          <li>
            <Link href="kristalniGjubriva">{t('CrystalFertilizers')}</Link>
          </li>
        </ul>
      </li>
      <li className="menu-item has-children">
        <a href="repro">{t('repro')}</a>
        <ul className="sub-menu">
          <li>
            <Link href="treset">{t('Peat')}</Link>
          </li>
          <li>
            <Link href="folija">{t('Foil')}</Link>
          </li>
          <li>
            <Link href="vrekji">{t('PPBags')}</Link>
          </li>
          <li>
            <Link href="filc">{t('Felt')}</Link>
          </li>
          <li>
            <Link href="crnaFolija">{t('BlackFoil')}</Link>
          </li>
        </ul>
      </li>
      <li className="menu-item has-children">
        <a href="programi-za-zastita">{t('PPG')}</a>
        <ul className="sub-menu">
          <li>
            <Link href="vinovaLoza">{t('Vineyard')}</Link>
          </li>
          <li>
            <Link href="jabolcestoOvosje">{t('AppleFruits')}</Link>
          </li>
          <li>
            <Link href="koskestoOvosje">{t('FruitStone')}</Link>
          </li>
          <li>
            <Link href="jagodestoOvosje">{t('StrawberryFruits')}</Link>
          </li>
          <li>
            <Link href="kompir">{t('NutsFruits')}</Link>
          </li>
          <li>
            <Link href="gradinarskiKulturi">{t('GardenCorps')}</Link>
          </li>
          <li>
            <Link href="morkov">{t('Carrots')}</Link>
          </li>
          <li>
            <Link href="zitarici">{t('Cereals')}</Link>
          </li>
          <li>
            <Link href="pcenka">{t('Corn')}</Link>
          </li>
          <li>
            <Link href="tutun">{t('Tobacco')}</Link>
          </li>
        </ul>
      </li>
      {/* <li className="menu-item has-children">
        <a href="#">ПРОГРАМИ ЗА ЗАШТИТА</a>
        <ul className="sub-menu">
          <li>
            <Link href="farmers">Our Farmers</Link>
          </li>
          <li>
            <Link href="faqs">Faq</Link>
          </li>
          <li>
            <Link href="contact">Contact</Link>
          </li>
        </ul>
      </li> */}
    </ul>
  </nav>
);
