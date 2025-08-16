import './Home.css';
import homeProduct from '../data/homeProductsData';

export default function Home() {
    //todo: Banner Content -
    const bannerContent = [
        {
            title: 'CiriBeautyCare',
            subtitle: ' Men & Women Beauty Products with Exciting Offers!',
            offerDate: '20th Aug to 30th Aug',
            offerTitle: 'Exciting Offers'
        }
    ];

    //todo: Banner Image -
    const bannerImage = [
        {
            src: 'https://scontent.fpat2-5.fna.fbcdn.net/v/t1.15752-9/532647060_1426761538586407_8595567461747502410_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=7i-37cl4ShkQ7kNvwEnlpCg&_nc_oc=AdkjlNYIPpQc-Ui4oVXStao7aJ051M-u0EkAUc9L61xDVvqUBgTRUi-OOhbcxFnkT3M&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fpat2-5.fna&oh=03_Q7cD3AHpksdsDrmKbitLDlUW-Ifuf-kGiEImsl8w8o3FJTQGSQ&oe=68C7A725',
            alt: 'CiriBeautyCare Product Image'
        }
    ];

    return (
        <>
            <div className="banner">
                {/* Banner Content */}
                {
                    bannerContent.map((content, idx) => (
                        <div className="banner-content" key={idx}>
                            <h1 className="banner-title">{content.title}</h1>
                            <p className="banner-subtitle">
                                {content.subtitle}
                            </p>
                            <div className="offer-box">
                                <p>{content.offerDate}</p>
                                <p>{content.offerTitle}</p>
                            </div>
                        </div>
                    ))
                }
                {/* Banner Images */}
                <div className="banner-images">
                    {
                        bannerImage.map((item, idx) => (
                            <div className="product" key={idx}>
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="product-image"
                                />
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* Products Section */}
            {
                homeProduct.map((item, idx) => (
                    <section className="products-section" key={idx}>
                        <h2 className="products-title">{item.title}</h2>
                        <div className="products-grid">
                            {item.products.map((product, i) => (
                                <div className="product-card" key={i}>
                                    <img src={product.src} alt={product.alt} className="product-card-image" />
                                    <p className="product-card-name">{product.name}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                ))
            }
        </>
    );
}