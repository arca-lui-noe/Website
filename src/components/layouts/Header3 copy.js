"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import DynamicLogo from "./DynamicLogo";
import Image from "next/image";

export default function Header1({
  scroll,
  handleMobileMenu,
  isSearch,
  dict,
  locale
}) {
  const pathname = usePathname();
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState("");
  
  // Simple language switcher function
  const handleLanguageChange = (newLocale) => {
    // Animate out before redirecting
    setAnimationClass("lang-switch-animate-out");
    
    setTimeout(() => {
      // No need for complex pathname manipulation
      // Just redirect to the same path with the new locale prefix
      const currentPath = pathname.replace(/^\/[^\/]+/, '') || '/'; // Remove current language prefix
      window.location.href = `/${newLocale}${currentPath}`;
    }, 300); // Match animation duration
  };
  
  // Close the language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langMenuOpen && !event.target.closest('.language-switcher')) {
        setLangMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [langMenuOpen]);

  return (
    <>
      <header
        className={`main-header header-style3 ${
          isSearch ? "moblie-search-active" : ""
        } ${animationClass}`}
      >
        <div className="header_top d-none d-md-block">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-4">
                <ul className="social_links">
                  <li>
                    <Link href="#!">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#!">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#!">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#!">
                      <i className="fab fa-whatsapp"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-sm-8">
                <ul className="icon_list unorder_list justify-content-sm-end">
                  <li>
                    <Link href="#!">
                      <i className="fas fa-phone"></i>
                      <span>0000 - 123456789</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#!">
                      <i className="fas fa-envelope"></i>
                      <span>info@example.com</span>
                    </Link>
                  </li>
                  {/* Állatorvosi témájú nyelvválasztó */}
                  <li className="language-switcher">
                    <div className="pet-lang-dropdown">
                      <button 
                        className="pet-lang-btn"
                        onClick={() => setLangMenuOpen(!langMenuOpen)}
                        aria-expanded={langMenuOpen}
                      >
                        <span className="pet-icon">
                          {locale === 'hu' ? (
                            <span className="pet-emoji">🐶</span>
                          ) : (
                            <span className="pet-emoji">🐱</span>
                          )}
                        </span>
                        <span className="current-lang">
                          {locale === 'hu' ? 'Magyar' : 'Română'}
                        </span>
                        <span className="lang-arrow">
                          <i className={`fas fa-chevron-${langMenuOpen ? 'up' : 'down'}`}></i>
                        </span>
                      </button>
                      
                      <div className={`pet-lang-dropdown-content ${langMenuOpen ? 'show' : ''}`}>
                        <div className="lang-dropdown-header">
                          <span className="paw-icon">🐾</span> {dict.languageSwitcher.label}
                        </div>
                        
                        <div className="lang-options">
                          <button 
                            onClick={() => handleLanguageChange('hu')} 
                            className={locale === 'hu' ? 'active' : ''}
                          >
                            <span className="pet-lang-icon hu-pet">🐶</span>
                            <span className="lang-name">Magyar</span>
                            {locale === 'hu' && <span className="active-indicator"><i className="fas fa-paw"></i></span>}
                          </button>
                          
                          <button 
                            onClick={() => handleLanguageChange('ro')} 
                            className={locale === 'ro' ? 'active' : ''}
                          >
                            <span className="pet-lang-icon ro-pet">🐱</span>
                            <span className="lang-name">Română</span>
                            {locale === 'ro' && <span className="active-indicator"><i className="fas fa-paw"></i></span>}
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header-lower">
          <div className="container">
            {/* Main box */}
            <div className="main-wrapper">
              <div className="logo-box">
                <div className="logo">
                  <Link href={`/${locale}`}>
                    <DynamicLogo locale={locale} />
                  </Link>
                </div>
              </div>
              <div className="nav-wrapper">
                <nav className="nav main-list">
                  <Menu dict={dict} locale={locale} />
                </nav>
              </div>
               <div className="outer-box d-flex align-items-center">
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <span className="icon fas fa-bars"></span>
                </div>
                <ul className="header_btns_group unorder_list_right">
                  <li className="dropdown me-0 d-none d-sm-block">
                    <button className="cart_btn" type="button">
                      <i className="fas fa-shopping-cart"></i>{" "}
                      <small className="cart_counter">2</small>{" "}
                      <span>item</span>
                    </button>
                    <div className="cart_dropdown dropdown-menu">
                      <ul className="cart_items_list unorder_list_block">
                        <li>
                          <Link className="item_image" href="shop-details">
                            <Image
                              src="/images/cart/cart_img_1.jpg"
                              alt="Pet Care Service"
                            />
                          </Link>
                          <div className="item_content">
                            <h3 className="item_title">
                              <Link href="shop-details">
                                Flying Fish Cat Scratching
                              </Link>
                            </h3>
                            <span className="item_price">1 × $12.35</span>
                          </div>
                          <button className="remove_btn" type="button">
                            <i className="fal fa-times"></i>
                          </button>
                        </li>
                        <li>
                          <Link className="item_image" href="shop-details">
                            <Image
                              src="/images/cart/cart_img_2.jpg"
                              alt="Pet Care Service"
                            />
                          </Link>
                          <div className="item_content">
                            <h3 className="item_title">
                              <Link href="shop-details">Pet Bed</Link>
                            </h3>
                            <span className="item_price">1 × $58.16</span>
                          </div>
                          <button className="remove_btn" type="button">
                            <i className="fal fa-times"></i>
                          </button>
                        </li>
                      </ul>
                      <hr />
                      <div className="total_price">
                        <span>Total</span> <strong>$70.51</strong>
                      </div>
                      <Link className="btn border_primary" href="page-cart">
                        Update Cart
                      </Link>
                      <Link className="btn btn_primary" href="page-cart">
                        Checkout
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="outer-box d-flex align-items-center">
                {/* Mobile view language switcher */}
                <div className="mobile-pet-lang-switcher d-lg-none d-flex">
                  <button 
                    onClick={() => setLangMenuOpen(!langMenuOpen)}
                    className="mobile-pet-lang-btn"
                    aria-expanded={langMenuOpen}
                  >
                    <span className="pet-emoji">
                      {locale === 'hu' ? '🐶' : '🐱'}
                    </span>
                  </button>
                  
                  <div className={`mobile-pet-lang-dropdown ${langMenuOpen ? 'show' : ''}`}>
                    <button 
                      onClick={() => handleLanguageChange('hu')} 
                      className={locale === 'hu' ? 'active' : ''}
                    >
                      <span className="pet-lang-icon">🐶</span>
                      <span>Magyar</span>
                    </button>
                    <button 
                      onClick={() => handleLanguageChange('ro')} 
                      className={locale === 'ro' ? 'active' : ''}
                    >
                      <span className="pet-lang-icon">🐱</span>
                      <span>Română</span>
                    </button>
                  </div>
                </div>
                
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <span className="icon fas fa-bars"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Menu  */}
        <div className="mobile-menu">
          <div className="menu-backdrop" onClick={handleMobileMenu} />

          <nav className="menu-box">
            <div className="upper-box">
              <div className="nav-logo d-block d-lg-none">
                <Link href={`/${locale}`}>
                  <DynamicLogo locale={locale} />
                </Link>
              </div>
              <div className="close-btn" onClick={handleMobileMenu}>
                <i className="icon fa fa-times" />
              </div>
            </div>
            <MobileMenu dict={dict} locale={locale} />
            <ul className="social-links">
              <li>
                <Link href="/#">
                  <i className="fab fa-twitter" />
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <i className="fab fa-facebook-f" />
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <i className="fab fa-pinterest" />
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <i className="fab fa-instagram" />
                </Link>
              </li>
            </ul>
            {/* Állatorvosi témájú nyelvválasztó a mobil menüben */}
            <div className="mobile-pet-language-selection">
              <div className="pet-lang-selection-header">
                <span className="paw-icon">🐾</span>
                <p>{dict.languageSwitcher.label}</p>
              </div>
              <div className="pet-language-buttons">
                <button 
                  onClick={() => handleLanguageChange('hu')} 
                  className={locale === 'hu' ? 'active' : ''}
                >
                  <span className="pet-lang-icon">🐶</span>
                  <span className="lang-text">Magyar</span>
                  {locale === 'hu' && <span className="check-icon"><i className="fas fa-paw"></i></span>}
                </button>
                <button 
                  onClick={() => handleLanguageChange('ro')} 
                  className={locale === 'ro' ? 'active' : ''}
                >
                  <span className="pet-lang-icon">🐱</span>
                  <span className="lang-text">Română</span>
                  {locale === 'ro' && <span className="check-icon"><i className="fas fa-paw"></i></span>}
                </button>
              </div>
            </div>
          </nav>
        </div>
        {/* End Mobile Menu */}
        {/* Sticky Header  */}
        <div
          className={`sticky-header ${
            scroll ? "fixed-header animated slideInDown" : ""
          }`}
        >
          <div className="container">
            <div className="main-wrapper">
              {/*Logo*/}
              <div className="logo">
                <Link href={`/${locale}`}>
                  <DynamicLogo locale={locale} />
                </Link>
              </div>
              {/*Right Col*/}
              <div className="nav-wrapper">
                {/* Main Menu */}
                <nav className="main-list">
                  <div className="navbar-collapse show collapse clearfix">
                    <Menu dict={dict} locale={locale} />
                  </div>
                </nav>
                {/* Main Menu End*/}
              </div>
              <div className="outer-box d-flex align-items-center">
                {/* Állatorvosi témájú nyelvváltó a sticky header-ben */}
                <div className="sticky-pet-lang-switcher d-none d-lg-flex">
                  <div className="sticky-pet-lang-container">
                    <button 
                      onClick={() => setLangMenuOpen(!langMenuOpen)}
                      className="sticky-pet-lang-btn"
                      aria-expanded={langMenuOpen}
                    >
                      <span className="pet-emoji-sticky">
                        {locale === 'hu' ? '🐶' : '🐱'}
                      </span>
                      <span className="current-lang-code">{locale === 'hu' ? 'HU' : 'RO'}</span>
                      <i className={`fas fa-chevron-${langMenuOpen ? 'up' : 'down'}`}></i>
                    </button>
                    
                    <div className={`sticky-pet-lang-dropdown ${langMenuOpen ? 'show' : ''}`}>
                      <button 
                        onClick={() => handleLanguageChange('hu')} 
                        className={locale === 'hu' ? 'active' : ''}
                      >
                        <span className="pet-lang-icon">🐶</span>
                        <span>Magyar</span>
                      </button>
                      <button 
                        onClick={() => handleLanguageChange('ro')} 
                        className={locale === 'ro' ? 'active' : ''}
                      >
                        <span className="pet-lang-icon">🐱</span>
                        <span>Română</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <span className="icon fas fa-bars" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Sticky Menu */}
      </header>

      
    </>
  );
}