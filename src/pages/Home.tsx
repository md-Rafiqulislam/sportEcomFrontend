
// all the imports here
import Footer from "../components/footer/Footer"
import Banner from "../components/heroSection/Banner"
import Navbar from "../components/navbar/Navbar"

const Home = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <div>
            <h1 className="text-4xl text-violet-700 text center my-7">home page</h1>
        </div>
        <Footer />
    </div>
  )
}

export default Home