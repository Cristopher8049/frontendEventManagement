import "./Carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const banners = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0588/1380/8845/files/Virtuality_1717x592_1.png",
    alt: "Banner 1",
  },
  {
    image:
      "https://scontent.fsrz1-1.fna.fbcdn.net/v/t39.30808-6/400528137_736863921820244_8304446350767620788_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=lSwuNA4fSmMQ7kNvgEjE-8E&_nc_ht=scontent.fsrz1-1.fna&oh=00_AYC0_k_xuHvbGnr2ME3B2F7RASRf6Chq8wr-pbtV7ZKrmQ&oe=6675CB11",
    alt: "Banner 2",
  },
  {
    image:
      "https://scontent.fsrz1-1.fna.fbcdn.net/v/t39.30808-6/438081650_936929954795764_6452349645420143575_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=J8tv491OwLYQ7kNvgHFJL1l&_nc_ht=scontent.fsrz1-1.fna&oh=00_AYAF8aTxjYN8Nu5IxyTq8rV-4Qb6z6VaS6hyh2OfMOYE2g&oe=6675BA39",
    alt: "Banner 3",
  },
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
    arrows: false,
  };

  return (
    <div>
      <div className="carousel-container">
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div key={index}>
              <img
                src={banner.image}
                alt={banner.alt}
                className="carousel-image"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
