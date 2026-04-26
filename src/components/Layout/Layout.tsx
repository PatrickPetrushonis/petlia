import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useHashNavigation } from '../../utils/scroll';
import { useFooterPadding } from '../../utils/layout';
import ScrollToTop from './ScrollToTop';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, pagename = 'Home' }) => {
  const location = useLocation();
  const footerHeight = useFooterPadding();
  
  // Equivalent to pageRef logic - determine if we're on home page
  const isHomePage = location.pathname === '/';
  const pageRef = isHomePage ? '' : '/';

  // Handle hash navigation on page load
  useHashNavigation(77);

  useEffect(() => {
    // Set page title
    document.title = `PETLIA - ${pagename}`;
  }, [pagename]);

  return (
    <>
      <div id="section-top">
        <div 
          className="main-content"
          style={{ height: `calc(100vh - ${footerHeight}px)`, paddingBottom: `${footerHeight}px` }}
        >
          <Header pageRef={pageRef} />
          
          {children}

          {pagename !== 'Home' && <ScrollToTop pageRef={pageRef} />}

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;