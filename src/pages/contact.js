import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = () => {
  return (
    <Layout>
      <Seo title="Contact Me" description="contact nSite Portfolio" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form action="https://formspree.io/f/mknygwkk" method="POST">
            <div className="form-group">
              <input type="text" placeholder="name" name="name" className="form-control" />
              <input type="number" placeholder="phone" name="phone" className="form-control" />
              <input type="email" placeholder="email" name="email" className="form-control" />
              <input type="text" placeholder="subject" name="subject" className="form-control" />
              <textarea name="message" rows="5" placeholder="message" className="form-control"></textarea>
              <button type="submit" className="submit-btn btn">
                send message
              </button>
            </div>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default Contact
