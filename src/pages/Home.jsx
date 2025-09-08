import './Home.css';
import Navbar from '../components/Navbar';
import homeProduct from '../data/homeProductsData';
import Footer from '../components/Footer';
import OffersButton from '../buttons/OffersButton';

export default function Home() {
    const bannerContent = [
        {
            title: 'CiriBeautyCare',
            subtitle: ' Men & Women Beauty Products with Exciting Offers!',
            offerDate: '20th Aug to 30th Aug',
            offerTitle: 'Exciting Offers'
        }
    ];

    const bannerImage = [
        {
            src: 'https://scontent.fpat3-3.fna.fbcdn.net/v/t1.15752-9/541388328_1355273596118388_2135508787897867849_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=K4hsWyrAHlIQ7kNvwETcFbc&_nc_oc=Admd6HaLfWngosgbNlhEC6enoA6VEF03QB2MlU-fe1szkMa8CI-6sguXgAHeimNu7VohR0oFvSh0bgcjVob_FOAV&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat3-3.fna&oh=03_Q7cD3QE37UPaHf1otgiXZbJ2NUAtf71fMQFNm1HA2o9TfL1WMw&oe=68E5DF1C',
            alt: 'CiriBeautyCare Product Image'
        }
    ];

    const featuredCategories = [
        {
            name: 'Skincare Essentials',
            desc: 'Nourishing creams, serums & face masks for radiant skin.',
            img: 'https://scontent.fpat3-2.fna.fbcdn.net/v/t1.15752-9/541447556_1063047035695165_8464856618300657157_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=MnOdLgtEzn8Q7kNvwGL0-ZY&_nc_oc=Adle-fyyKckzk3TlJkgkbNUt0T9YtgjpwHSNTrtUvGGWUyC6N2DuAzyeP6kpAZ-QKV3Ftf4w3D1MXDS4FS5FGOgH&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat3-2.fna&oh=03_Q7cD3QHl0d0QtAvWSiBp5-B8WE93and9czo4vcrjN3hj-EoyUQ&oe=68E5F2C1',
        },
        {
            name: 'Haircare & Styling',
            desc: 'Shampoos, conditioners & oils for strong and silky hair.',
            img: 'https://scontent.fpat3-2.fna.fbcdn.net/v/t1.15752-9/541521089_3712994628995889_3471516782934185624_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=OWUK54UKNI4Q7kNvwFk5cUF&_nc_oc=Adlvvqo7wLb8mqypclMG-RqlPg6DDSyycC18SiQViYXcDfnfgeD-pNZG7Jv6llmDqFTM5TwQ8Zjr7OT9AoZoQ8QF&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat3-2.fna&oh=03_Q7cD3QF9yAROftkt6TLcyfTwiRr2_TFKz6NmZ8PPJIzb7R3FvQ&oe=68E5D62B',
        },
        {
            name: 'Fragrances',
            desc: 'Luxury perfumes & deodorants that last all day.',
            img: 'https://scontent.fpat3-2.fna.fbcdn.net/v/t1.15752-9/541591677_2150851732104143_2606869284294393139_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=fvH9CVzFM3IQ7kNvwGWpCOm&_nc_oc=Adn7SEW0yj0SZP2wJChxJ4xhMNsr7cbSakRLag2D238hrfzR5-iSrAp4sN3QVqtQckaqrUUDGmBX731iSef49DYY&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat3-2.fna&oh=03_Q7cD3QHE_Ph_SYw1KFWloN3gNc3A1EAny1n4z4B7MFKcya34eA&oe=68E60102',
        },
        {
            name: 'Makeup & Beauty',
            desc: 'Lipsticks, eyeliners & more to highlight your style.',
            img: 'https://scontent.fpat3-2.fna.fbcdn.net/v/t1.15752-9/541807853_800287839003060_3248875974636484945_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=5z3FGmgirxYQ7kNvwGMQEse&_nc_oc=AdmS9m1MAG3Ys42k2Rnr580MkeSnuqn-nOyh2PIwzGonSGVT7G3c0fgkC2oHuc3UltPHbWgVYewD7J-QeD_plWZO&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat3-2.fna&oh=03_Q7cD3QEvThMKfoxpJ_hU822on6qTYkF3RvVF0au5eJ2b54qFfg&oe=68E5DD06',
        }
    ];

    const newArrivals = [
        {
            name: 'HydraGlow Vitamin C Serum',
            desc: 'Lightweight serum enriched with Vitamin C & Hyaluronic Acid for brighter, youthful skin.',
            img: 'https://scontent.fpat3-2.fna.fbcdn.net/v/t1.15752-9/541689061_1283218319560348_1844250555994233386_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=MyXmVh7xSwkQ7kNvwEQHgbh&_nc_oc=AdnrV4lCN0e-8bOotE6wkIwQ5LTpfvycJY4hHmIWCoHCNBBYXLmq5sscS2w6A8bTYsD920-vWf0dFwir4JTiEPSo&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat3-2.fna&oh=03_Q7cD3QG-HPwUuTAhG0ee2GChrenYx125NY_3ZzA8qzszZAfGfg&oe=68E5F665',
        },
        {
            name: 'Keratin Repair Shampoo + Conditioner Duo',
            desc: 'Strengthens weak strands, reduces frizz & restores natural shine.',
            img: 'https://scontent.fpat3-2.fna.fbcdn.net/v/t1.15752-9/541635327_960046446276593_8688256309199940331_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=hnaA-wBxOWQQ7kNvwHYtE0H&_nc_oc=AdmXZgC2z8wpV6J1qeiROmTYXzrKtCNaWSaH6RYMCMeT3zXIu6ttO8bJElMkUH9jf9dLkkgiYQLipHok87FydRIg&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat3-2.fna&oh=03_Q7cD3QHy84EOfPGD8UZnN-ul_J2e38fkXv1DMsIDOpD1liFgeg&oe=68E60799',
        },
        {
            name: 'Velour Mist Eau De Perfum',
            desc: 'A fresh floral blend with vanilla & musk undertones, designed for long-lasting freshness.',
            img: 'https://scontent.fpat3-2.fna.fbcdn.net/v/t1.15752-9/541781942_482353271640187_5606627369736667854_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=iY6rwI4rc-cQ7kNvwF1BdKZ&_nc_oc=AdmuyxyLMXRmmui2SVDB6v-zPt7ZuONyMFz3Edh-CMkc6H4K-x6Ih3pSuDqh2FfTJgth0OYncEVFPrVWhNiwXf05&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat3-2.fna&oh=03_Q7cD3QETlc-fETKsZV0Pnj-Rn761_Kq1npL0wHeNGW6VwR9YIQ&oe=68E603A1',
        },
        {
            name: 'Matte Luxe Lipstick – Bold Collection',
            desc: 'Ultra-pigmented, long-wear matte shades designed to suit all skin tones.',
            img: 'https://scontent.fpat3-2.fna.fbcdn.net/v/t1.15752-9/541536315_9948724458561428_6828235365030098345_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=4_cwkd599jcQ7kNvwHAlOyL&_nc_oc=AdnDsgLZCFCQqqP6EfHlc6fN-DEQlSW6VbTOqrdtiHggSUKRTeo3nOkex99NTevNNpcQsEejPvVBTIJrPRmWva37&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat3-2.fna&oh=03_Q7cD3QH9JeSaIG7r9dVUYTMxmoJhknNJ6TJUTgp6wCGfKkYjiQ&oe=68E5E2AD',
        },
        {
            name: 'Active Charcoal Face Wash',
            desc: 'Deep cleansing formula that removes dirt & excess oil without drying the skin.',
            img: 'https://scontent.fpat3-3.fna.fbcdn.net/v/t1.15752-9/545801279_1490911105193976_3114747039134521187_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=RC-FMsZMDw0Q7kNvwHBV-S_&_nc_oc=Adk1qcmJWmh31IeeADML4QxucoxKcEabN0B7ebUADOBi5WhVrX6O547U_-96SnmXn-Q1tzSq9ITATSFvuRM-ldZN&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat3-3.fna&oh=03_Q7cD3QGVDQgC_6Jjcm4Iu_fz6CTmSj80u8mVuGjW1XMC-BaZDg&oe=68E5ECFA',
        }
    ];

    return (
        <>
            <Navbar />
            <div className="banner">
                {bannerContent.map((content, idx) => (
                    <div className="banner-content" key={idx}>
                        <h1 className="banner-title">{content.title}</h1>
                        <p className="banner-subtitle">{content.subtitle}</p>
                        <div className="offer-box">
                            <p>{content.offerDate}</p>
                            <p>{content.offerTitle}</p>
                        </div>
                    </div>
                ))}
                <div className="banner-images">
                    {bannerImage.map((item, idx) => (
                        <div className="product" key={idx}>
                            <img src={item.src} alt={item.alt} className="product-image" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Featured Categories Section */}
            <section className="featured-section">
                <h2 className="featured-title">Featured Categories</h2>
                <div className="featured-grid">
                    {featuredCategories.map((cat, idx) => (
                        <div className="featured-card" key={idx}>
                            <img src={cat.img} alt={cat.name} className="featured-img" />
                            <h3 className="featured-name">{cat.name}</h3>
                            <p className="featured-desc">{cat.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Beauty Care Products Section */}
            {homeProduct.map((item, idx) => (
                <section className="products-section" key={idx}>
                    <h2 className="products-title">{item.title}</h2>
                    <div className="home-products-grid">
                        {item.products.map((product, i) => (
                            <div className="home-product-card" key={i}>
                                <img src={product.src} alt={product.alt} className="product-card-image" />
                                <p className="product-card-name">{product.name}</p>
                            </div>
                        ))}
                    </div>
                </section>
            ))}

            {/* ✅ New Arrivals Section (Moved Below Products) */}
            <section className="newarrivals-section">
                <h2 className="newarrivals-title">New Arrivals – Fresh Picks Just for You</h2>
                <p className="newarrivals-intro">
                    Stay ahead in style & beauty with our latest launches. Explore what’s new at CiriBeautyCare!
                </p>
                <div className="newarrivals-grid">
                    {newArrivals.map((item, idx) => (
                        <div className="newarrivals-card" key={idx}>
                            <img src={item.img} alt={item.name} className="newarrivals-img" />
                            <h3 className="newarrivals-name">{item.name}</h3>
                            <p className="newarrivals-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />

            <OffersButton />
        </>
    );
}