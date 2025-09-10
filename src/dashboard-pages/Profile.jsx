import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import './Profile.css'
import { accDashboard } from '../data/accDashboardData'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Logout from '../authentication/Logout'
import ModeIcon from '@mui/icons-material/Mode';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import DefaultProfilePic from './../assets/ProfilePic.jpg';

export default function Profile() {
	const [showEdit, setShowEdit] = useState(false)
	const [showUpgrade, setShowUpgrade] = useState(false)
	const [showLogoutBox, setShowLogoutBox] = useState(false)
	const [profilePic, setProfilePic] = useState(null)
	const [openUploadProfilePicPopUp, setOpenUploadProfilePicPopUp] = useState(false)
	const navigate = useNavigate();

	const OpenUploadProfilePicPopUp = () => {
		setOpenUploadProfilePicPopUp(true);
	}

	useEffect(() => {
		const savedPic = localStorage.getItem('userPic');
		if (savedPic) setProfilePic(savedPic);
	}, [])

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setProfilePic(reader.result);
				localStorage.setItem("userPic", reader.result);
				setOpenUploadProfilePicPopUp(false);
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
						<img src={profilePic || DefaultProfilePic} alt="User" />

						<button
							type="button"
							className="upload-btn"
							onClick={OpenUploadProfilePicPopUp}
						>
							<ModeIcon />
						</button>
					</div>

					<div className="profile-info">
						<h1>John Doe</h1>
						<p>johndoe@example.com</p>
						<Stack direction="row" spacing={2} display="flex" flexWrap={"wrap"} gap={2} justifyContent="center">
							<Button variant="outlined">Profile</Button>

							<Button variant="contained" onClick={() => setShowUpgrade(true)}>
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

						<input type="text" id="fullName" name="fullName" placeholder="Full Name" autoComplete="name" required />

						<input type="email" id="email" name="email" placeholder="Email" autoComplete="email" required />

						<input type="tel" id="phone" name="phone" placeholder="Phone" autoComplete="tel" required />

						<button className="btn">
							Save Changes
						</button>
					</div>
				)}

				{showUpgrade && (
					<div className="extra-box premium"> <div>
						<button className="close-btn" onClick={() => setShowUpgrade(false)}>✖</button>
					</div>
						<div>
							<div>
								<h2>
									Upgrade to CiriBeautyCare Premium
								</h2>
							</div>
							<div>
								<p>
									Get free shipping, exclusive discounts & early access to offers.
								</p>
							</div>
							<div>
								<button className="btn">
									Upgrade Now
								</button>
							</div>
						</div>
					</div>
				)}

				<h2 className="page-title">
					{accDashboard.title}
				</h2>
				<div className="profile-grid">
					{accDashboard.cardsInfo.map((card, idx) => (
						<div className="profile-card" key={idx}>
							<div>
								<h3>{card.title}</h3>
							</div>

							<div>
								<p>{card.para}</p>
							</div>

							<div>
								<Link className="btn" to={card.src}>
									{card.btn}
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>

			{showLogoutBox &&
				<Logout onCancel={() => setShowLogoutBox(false)}
					onLogout={() => {
						localStorage.removeItem('userEmail');
						setShowLogoutBox(false); navigate("/");
					}}
				/>
			}

			{openUploadProfilePicPopUp && (
				<div className="popup-overlay">
					<div className="upload-profile-pic-popup">
						<div className="profile-pic-popup-close">
							<ClearRoundedIcon onClick={() => setOpenUploadProfilePicPopUp(false)} />
						</div>
						<div className="popup-actions">
							<label className="btn-upload">
								Upload Profile Pic
								<input type="file" accept="image/*" hidden onChange={handleImageChange} />
							</label>

							<button className="btn-remove" onClick={() => {
								setProfilePic(null);
								localStorage.removeItem("userPic");
								setOpenUploadProfilePicPopUp(false);
							}}>
								Remove Profile Pic
							</button>
						</div>
					</div>
				</div>
			)}

			<Footer />
		</>
	)
}