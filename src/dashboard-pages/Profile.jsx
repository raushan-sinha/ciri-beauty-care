import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import './Profile.css'
import { accDashboard } from '../data/accDashboardData'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Logout from '../authentication/Logout'

export default function Profile() {
	const [showEdit, setShowEdit] = useState(false)
	const [showUpgrade, setShowUpgrade] = useState(false)
	const [showLogoutBox, setShowLogoutBox] = useState(false)
	const [profilePic, setProfilePic] = useState(null)
	const navigate = useNavigate();

	//todo: Load Profile pic on load page
	useEffect(() => {
		const savedPic = localStorage.getItem('userPic');
		if (savedPic) setProfilePic(savedPic);
	}, [])

	//todo: Handle file upload
	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setProfilePic(reader.result);
				localStorage.setItem("userPic", reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<>
			<Navbar />
			<div className="profile-page">
				<div className="profile-header">
					<div className="profile-pic">
						<img src={profilePic || 'https://scontent.fpat3-1.fna.fbcdn.net/v/t1.15752-9/541962808_749684647966002_2128938170779904880_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=m9_WMDAb224Q7kNvwHmCJ-Y&_nc_oc=Adk0ysrtQvhw2TpA0bieBTU0OcfXfPLQG_DZSm3trLPu07m3Y7oZfxOURgKR1Snj3kD0a-ya316s1EQTKrShMaIG&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat3-1.fna&oh=03_Q7cD3QGIA8IO8SrctQwp6zSAnM4e7XBsfeKxRO8EqScxSt4E3w&oe=68E73097'} alt="User" />
						<label className="upload-btn">
							Change
							<input type="file" accept="image/*" hidden onChange={handleImageChange} />
						</label>
					</div>
					<div className="profile-info">
						<h1>John Doe</h1>
						<p>johndoe@example.com</p>
						<Stack direction="row" spacing={2} display="flex" flexWrap={"wrap"} gap={2} justifyContent="center">
							<Button color="secondary" onClick={() => setShowEdit(true)}>Edit Profile</Button>
							<Button variant="contained" color="success" onClick={() => setShowUpgrade(true)}>
								Upgrade Account
							</Button>
							<Button variant="outlined" color="error" onClick={() => setShowLogoutBox(true)}>
								Logout
							</Button>
						</Stack>
					</div>
				</div>

				{showEdit && (
					<div className="extra-box">
						<button className="close-btn" onClick={() => setShowEdit(false)}>✖</button>
						<h2>Edit Personal Info</h2>

						<input
							type="text"
							id="fullName"
							name="fullName"
							placeholder="Full Name"
							autoComplete="name"
							required
						/>

						<input
							type="email"
							id="email"
							name="email"
							placeholder="Email"
							autoComplete="email"
							required
						/>

						<input
							type="tel"
							id="phone"
							name="phone"
							placeholder="Phone"
							autoComplete="tel"
							required
						/>

						<button className="btn">Save Changes</button>
					</div>
				)}

				{showUpgrade && (
					<div className="extra-box premium">
						<div>
							<button className="close-btn" onClick={() => setShowUpgrade(false)}>✖</button>
						</div>
						<div>
							<div>
								<h2>Upgrade to CiriBeautyCare Premium</h2>
							</div>
							<div>
								<p>Get free shipping, exclusive discounts & early access to offers.</p>
							</div>
							<div>
								<button className="btn">Upgrade Now</button>
							</div>
						</div>
					</div>
				)}

				<h2 className="page-title">{accDashboard.title}</h2>
				<div className="profile-grid">
					{
						accDashboard.cardsInfo.map((card, idx) => (
							<div className="profile-card" key={idx}>
								<h3>{card.title}</h3>
								<p>{card.para}</p>
								<Link className="btn" to={card.src}>{card.btn}</Link>
							</div>
						))
					}
				</div>
			</div>

			{
				showLogoutBox && <Logout
					onCancel={() => setShowLogoutBox(false)}
					onLogout={() => {
						localStorage.removeItem('userEmail');
						setShowLogoutBox(false);
						navigate("/");
					}}
				/>
			}

			<Footer />
		</>
	)
}