import React from "react";
import "./OffersButton.css";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Link } from "react-router-dom";

export default function OffersButton() {
    return (
        <div className="offers-btn-container">
            <Link className="offers-btn" to={"/offersPage"}>
                <LocalOfferIcon className="offer-icon" />
                <span>Special Offers</span>
            </Link>
        </div>
    );
}