import React from "react";
import "./AppointmentsServices.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AppointmentsServices() {
    const upcomingAppointments = [
        {
            id: 1,
            service: "Facial Treatment",
            date: "2025-09-10",
            time: "3:00 PM",
            status: "Confirmed",
        },
        {
            id: 2,
            service: "Hair Spa",
            date: "2025-09-15",
            time: "11:00 AM",
            status: "Pending",
        },
    ];

    const pastServices = [
        {
            id: 1,
            service: "Manicure",
            date: "2025-08-20",
            time: "2:00 PM",
            status: "Completed",
        },
        {
            id: 2,
            service: "Haircut",
            date: "2025-08-05",
            time: "4:30 PM",
            status: "Completed",
        },
    ];

    return (
        <>
            <Navbar />

            <div className="appointments-container">
                <h2 className="section-title">Appointments & Services</h2>

                {/* Upcoming Appointments */}
                <div className="section">
                    <h3 className="section-heading">Upcoming Appointments</h3>
                    <div className="cards-grid">
                        {upcomingAppointments.map((appt) => (
                            <div className="card" key={appt.id}>
                                <h4>{appt.service}</h4>
                                <p>
                                    📅 {appt.date} | ⏰ {appt.time}
                                </p>
                                <span
                                    className={`status ${appt.status === "Confirmed"
                                        ? "confirmed"
                                        : appt.status === "Pending"
                                            ? "pending"
                                            : ""
                                        }`}
                                >
                                    {appt.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Past Services */}
                <div className="section">
                    <h3 className="section-heading">Service History</h3>
                    <div className="cards-grid">
                        {pastServices.map((service) => (
                            <div className="card" key={service.id}>
                                <h4>{service.service}</h4>
                                <p>
                                    📅 {service.date} | ⏰ {service.time}
                                </p>
                                <span className="status completed">{service.status}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}