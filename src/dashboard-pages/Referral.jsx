import React from 'react';
import './Referral.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Referral() {
    const referralCode = 'REF123456';
    const rewards = [
        { id: 1, friend: 'John Doe', status: 'Earned', reward: '$10' },
        { id: 2, friend: 'Jane Smith', status: 'Pending', reward: '-' },
    ];

    const handleShare = (platform) => {
        let shareUrl = '';
        const message = `Join me using my referral code ${referralCode}!`;
        if (platform === 'email') {
            shareUrl = `mailto:?subject=Join Our Program&body=${message}`;
        } else if (platform === 'whatsapp') {
            shareUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
        } else if (platform === 'x') {
            shareUrl = `https://x.com/intent/post?text=${encodeURIComponent(message)}`;
        }
        window.open(shareUrl, '_blank');
    };

    return (
        <>
            <Navbar />

            <div className="referral-container">
                <h1>Refer a Friend</h1>
                <p>Invite your friends and earn rewards when they join!</p>

                <div className="referral-box">
                    <div className="referral-code">
                        <h3>Your Referral Code</h3>
                        <p className="code">{referralCode}</p>
                    </div>

                    <div className="share-buttons">
                        <button onClick={() => handleShare('email')}>Share via Email</button>
                        <button onClick={() => handleShare('whatsapp')}>Share via WhatsApp</button>
                        <button onClick={() => handleShare('x')}>Share via X</button>
                    </div>
                </div>

                <div className="rewards-tracker">
                    <h3>Your Rewards</h3>
                    <div className="rewards-grid">
                        <div className="reward-header">
                            <span>Friend</span>
                            <span>Status</span>
                            <span>Reward</span>
                        </div>
                        {rewards.map((reward) => (
                            <div key={reward.id} className="reward-row">
                                <span>{reward.friend}</span>
                                <span>{reward.status}</span>
                                <span>{reward.reward}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}