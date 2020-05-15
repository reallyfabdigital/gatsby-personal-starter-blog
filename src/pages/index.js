import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Hola!"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./bender-over-there-compressor.png" alt="Welcome to iamdaz.com" />
        <h1>
          Bending code, one repo at a time.
        </h1>
        <p>Welcome to my website. It's a bit of an experiment, so bear with. 
      I built it mainly as an excuse to fiddle with Gatsby, github and Netlify CMS and am still fiddling. So it may break. But it's still fast, right?</p>
        <p>
          Mail me <a href="mailto:reallyfabdigital@gmail.com">here</a> if it has. Thank you!
        </p>
        <Link to="/blog/">
          <Button marginTop="35px">Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
