import Lander from '../components/Lander'
import VideoHero from '../components/VideoHero'
import Divider from '../components/Divider'
import Hero from '../components/Hero'
import Contact from '../components/Contact'

import '../styles/Navbar.css'
import '../styles/index.css'
import '../styles/Lander.css'
import '../styles/Hero.css'
import '../styles/Divider.css'
import '../styles/Contact.css'

function Home() {
  return (
    <div className="flex">
      {/* <Navbar /> */}
      <Lander />
      <VideoHero />
      <Divider />
      <Hero id="menus" />
      <Hero />
      <Contact />
    </div>
  )
}

export default Home
