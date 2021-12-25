import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";

const NotFoundPage = () => {
  return (
    <Layout>
      <main className="error-page">
        <div className="error-container">
          <Link to='/'><StaticImage src="../assets/404.png" width={80} alt="p404" /></Link>
          <h1 style={{fontSize: `30px`}}>page not found</h1>
          <br />
          <Link to='/' className="btn">
            back to home
          </Link>
          <br />
        </div>
      </main>
    </Layout>
  )
}

export default NotFoundPage
