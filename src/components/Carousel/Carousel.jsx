import './Carousel.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const banners = [
    {
        image: 'https://cdn.shopify.com/s/files/1/0588/1380/8845/files/Virtuality_1717x592_1.png',
        alt: 'Banner 1'
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/0588/1380/8845/files/Virtuality_1717x592_1.png',
        alt: 'Banner 2'
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/0588/1380/8845/files/Virtuality_1717x592_1.png',
        alt: 'Banner 3'
    }
];



function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        dotsClass: "dots",
        arrows: false
    };

    return (
        <div>
            <div className="carousel-container">
                <Slider {...settings}>
                    {banners.map((banner, index) => (
                        <div key={index}>
                            <img src={banner.image} alt={banner.alt} className="carousel-image" />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Carousel
