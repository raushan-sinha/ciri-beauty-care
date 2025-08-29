import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import WomenPage from "./pages/WomenPage";
import MenPage from "./pages/MenPage";
import BrandsPage from "./pages/BrandsPage";
import GlowGear from "./pages/GlowGear";
import AboutUs from "./footer-pages/AboutUs";
import PrivacyPolicy from "./footer-pages/PrivacyPolicy";
import Faq from "./footer-pages/Faq";
import TermsConditions from "./footer-pages/TermsConditions";
import Support from "./footer-pages/Support";
import Cart from "./pages/Cart";
import Supplier from "./pages/Supplier";
import SupplierAccount from "./authentication/SupplierAccount";
import SignUp from "./authentication/SignUp";
import ForgotPassword from "./authentication/ForgotPassword";
import HelpSupport from "./pages/HelpSupport";
import Profile from "./dashboard-pages/Profile";
import MyOrder from "./dashboard-pages/MyOrder";

export default function App() {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/women" element={<WomenPage />} />
					<Route path="men" element={<MenPage />} />
					<Route path="/brands" element={<BrandsPage />} />
					<Route path="/glowgear" element={<GlowGear />} />
					<Route path="/aboutus" element={<AboutUs />} />
					<Route path="/privacypolicy" element={<PrivacyPolicy />} />
					<Route path="/termsconditions" element={<TermsConditions />} />
					<Route path="/faq" element={<Faq />} />
					<Route path="/support" element={<Support />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/supplier" element={<Supplier />} />
					<Route path="/supplierAccount" element={<SupplierAccount />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/forgotPass" element={<ForgotPassword />} />
					<Route path="/helpSupport" element={<HelpSupport />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/order" element={<MyOrder />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}