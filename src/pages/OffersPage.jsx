import React from "react";
import "./OffersPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShopBtn from "../buttons/ShopBtn";

export default function OffersPage() {
    const offers = [
        {
            id: 1,
            name: "Herbal Face Cream",
            price: "₹599",
            offerPrice: "₹399",
            discount: "33% OFF",
            img: "https://scontent.fpat2-1.fna.fbcdn.net/v/t1.15752-9/541591683_1480229216338392_1201473439181094444_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=0weanA53ktkQ7kNvwFIjrkN&_nc_oc=AdkpAKKiSbKZ2fYkyX-qrdJvUrQphbcHD7P0WlgW_H0tq7iVDKxB8lyR_fFjj8wRPHU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fpat2-1.fna&oh=03_Q7cD3QERcRvZQrdJCwNn-Ll7DYkM1WkUWLLn_tlOPSPGTP9-Xw&oe=68E63BEB"
        },
        {
            id: 2,
            name: "Aloe Vera Shampoo",
            price: "₹499",
            offerPrice: "₹349",
            discount: "30% OFF",
            img: "https://scontent.fpat2-7.fna.fbcdn.net/v/t1.15752-9/541620571_726083690391166_2717878052470504753_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=w2FtiDRlvG8Q7kNvwHlzC8j&_nc_oc=Adn_WmqvnQX1eYe-i_oS10PkRrf1_dbYkhAe8yN3rNa8o-Jdp3GZbP0fLkMSYVk14so&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fpat2-7.fna&oh=03_Q7cD3QFPs_TDj1H3weZUabctQ2KSoJynhlDQnxI7BoBEjFPPFA&oe=68E625EA"
        },
        {
            id: 3,
            name: "Vitamin C Serum",
            price: "₹799",
            offerPrice: "₹549",
            discount: "31% OFF",
            img: "https://scontent.fpat2-1.fna.fbcdn.net/v/t1.15752-9/541599927_1150967706960315_1476605398969579538_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=nVDvDkysDZoQ7kNvwEtzuPw&_nc_oc=AdkEqSlW2FWGrugFz8x5tDLpCqYvT_FsNPZlCeeDv1h72uPJBp0eiZxvRze6lfOerq8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fpat2-1.fna&oh=03_Q7cD3QFypE1BNFZ4e0XdMUFBetYjbVyGBXKodU0ZSLk61WgycA&oe=68E631E3"
        },
        {
            id: 4,
            name: "Charcoal Face Wash",
            price: "₹299",
            offerPrice: "₹199",
            discount: "34% OFF",
            img: "https://scontent.fpat2-7.fna.fbcdn.net/v/t1.15752-9/542013210_959734233006396_2032454999747061514_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=pN_ROzBT1PgQ7kNvwFt49jZ&_nc_oc=Adk3tMlJgaV1vyUWCAzRhizp-4BH10Jv1FmfL9gTJJ_d3IusudUVFiJsbZFl84ySSx4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fpat2-7.fna&oh=03_Q7cD3QHeymS_gYd7qJkPt5vRs3bCf4Acsj3qOA6jco8-UqEuYQ&oe=68E62DB0"
        }
    ];

    return (
        <>
            <Navbar />

            <div className="offers-page">
                <h2 className="offers-title">🔥 Special Offers on Beauty Care</h2>
                <div className="offers-grid">
                    {offers.map((item) => (
                        <div className="offer-card" key={item.id}>
                            <div className="offer-img-container">
                                <img src={item.img} alt={item.name} className="offer-img" />
                                <span className="offer-badge">{item.discount}</span>
                            </div>
                            <div className="offer-info">
                                <h3>{item.name}</h3>
                                <p className="offer-prices">
                                    <span className="old-price">{item.price}</span>
                                    <span className="new-price">{item.offerPrice}</span>
                                </p>
                                <ShopBtn />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
}