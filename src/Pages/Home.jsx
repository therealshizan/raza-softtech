import About from '../Components/About/About'
import Clients from '../Components/Clients'
import Contact from '../Components/Contact'
import Copyright from '../Components/Copyright'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Services from '../Components/Services/Services'

import '../index.css'

const Home = () => {
  return (
    <>
        <Header/>
        <Hero/>
        <About/>
        <Clients/>
        <Services/>
        <Contact/>
        <Copyright/>
    </>
  )
}

export default Home
