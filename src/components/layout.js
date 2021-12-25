import * as React from "react"
import Navbar from "./navbar"
import Sidebar from "./sidebar"
import Footer from "./footer"
import PageTransition from "gatsby-plugin-page-transitions"
import ScrollToTop from "react-scroll-up"
import { FaChevronUp } from "react-icons/fa"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      
      <PageTransition>
        {children}
      </PageTransition>
      <ScrollToTop
          showUnder={200}
          style={{
              position: 'fixed',
              bottom: 30,
              right: 30,
              cursor: 'pointer',
              transitionDuration: '0.2s',
              transitionTimingFunction: 'linear',
              transitionDelay: '0s'
          }}>
          <button type="button" className="btn">
            <FaChevronUp />
          </button>
      </ScrollToTop>

      <Footer />
    </>
  )
}

export default Layout
