import CardGrid from "../../components/CardGrid/CardGrid"
import Carousel from "../../components/Carousel/Carousel"
import Categories from "../../components/Categories/Categories"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"

function HomePage() {
    return (
        <div>
            <Navbar />
            <Carousel />
            <Categories />
            <CardGrid />
            <Footer />
        </div>
    )
}

export default HomePage
