import React from "react";
import { motion } from 'framer-motion'

const requests = [
    {
        id: 1,
        patient: "User Name",
        bloodGroup: "A+",
        units: 2,
        hospital: "City Hospital",
        location: "Varanasi",
        urgency: "Critical",
        donors: 5,
        date: "15 Jun 2026",
    },
    {
        id: 2,
        patient: "User Name 2",
        bloodGroup: "O-",
        units: 1,
        hospital: "Heritage Hospital",
        location: "Lucknow",
        urgency: "Urgent",
        donors: 2,
        date: "14 Jun 2026",
    },
    {
        id: 3,
        patient: "User Name 3",
        bloodGroup: "B+",
        units: 3,
        hospital: "Apollo Hospital",
        location: "Delhi",
        urgency: "Normal",
        donors: 8,
        date: "13 Jun 2026",
    },
];

const BloodRequests = () => {
    return (
        <div className="min-h-screen bg-gray-50 px-6 py-10">
            <div className="max-w-7xl mx-auto">

                <motion.h1 className="text-4xl font-bold text-center mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}>
                    Blood Requests
                </motion.h1>

                <motion.p className="text-center text-gray-600 mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}>
                    Help save lives by responding to active blood requests.
                </motion.p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {requests.map((request) => (
                        <motion.div
                            key={request.id}
                            className="bg-white rounded-2xl shadow-md p-6 border border-gray-100"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex justify-between items-center mb-5">
                                <h2 className="text-xl font-semibold">
                                    {request.patient}
                                </h2>

                                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full font-semibold">
                                    {request.bloodGroup}
                                </span>
                            </div>

                            <div className="space-y-3 text-gray-700">
                                <p>
                                    <span className="font-semibold">Units Required:</span>{" "}
                                    {request.units}
                                </p>

                                <p>
                                    <span className="font-semibold">Hospital:</span>{" "}
                                    {request.hospital}
                                </p>

                                <p>
                                    <span className="font-semibold">Location:</span>{" "}
                                    {request.location}
                                </p>

                                <p>
                                    <span className="font-semibold">Donors Responded:</span>{" "}
                                    {request.donors}
                                </p>

                                <p>
                                    <span className="font-semibold">Request Date:</span>{" "}
                                    {request.date}
                                </p>

                                <span
                                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${request.urgency === "Critical"
                                        ? "bg-red-100 text-red-700"
                                        : request.urgency === "Urgent"
                                            ? "bg-orange-100 text-orange-700"
                                            : "bg-green-100 text-green-700"
                                        }`}
                                >
                                    {request.urgency}
                                </span>
                            </div>

                            <div className="flex gap-3 mt-6">
                                <button className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700">
                                    Donate Now
                                </button>

                                <button className="flex-1 border border-red-600 text-red-600 py-2 rounded-lg hover:bg-red-50">
                                    View Details
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BloodRequests;