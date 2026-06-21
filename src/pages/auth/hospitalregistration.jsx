import React from "react";
import {
  Building2,
  User,
  Mail,
  Phone,
  MapPin,
  Landmark,
  ShieldCheck,
  Bell,
  Users,
  ClipboardPlus,
  Lock,
  Eye,
  ArrowRight,
} from "lucide-react";
import Navbar from '../../components/layout/navbar.jsx'
import { useState } from 'react'

const HospitalRegister = () => {




  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [phone, setPhone] = useState("");
  const [alternative_phone1 , setAlternative_phone1] = useState("");
  const [alternative_phone2 , setAlternative_phone2] = useState("");
  const [email , setEmail] = useState("");
  const [site , setSite] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [state,setState] = useState("");
  const [address , setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [longitude , setLongitude] = useState(0);
  const [latitude , setLatitude] = useState(0);
  const [geohash_64_bits , setGeohash_64_bits] = useState("");
  const [password , setPassword] = useState("");




  function handleSubmit(e) {

    e.preventDefault();
  }


  return (
    <div className="min-h-screen bg-gray-50 p-6 pt-0 shadow-sm">
      <Navbar />
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid lg:grid-cols-2">

          {/* LEFT SECTION */}
          <div className="p-12 border-r">
            <div className="flex items-center gap-2 mb-12">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                ♥
              </div>
              <h1 className="text-3xl font-bold">
                Life<span className="text-red-600">Link</span>
              </h1>
            </div>

            <h2 className="text-5xl font-bold leading-tight mb-6">
              Partner with{" "}
              <span className="text-red-600">LifeLink</span>
              <br />
              Save More Lives Together
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              Hospitals and healthcare organizations can verify donors,
              raise blood requests for patients, and connect with lifesavers
              in real-time.
            </p>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center">
                  <ShieldCheck className="text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Verify Donors
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Verify and trust donors for safe blood transfusions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center">
                  <ClipboardPlus className="text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Raise Blood Requests
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Post urgent blood requirements instantly.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center">
                  <Users className="text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Connect & Collaborate
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Build a trusted network of donors and hospitals.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center">
                  <Bell className="text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Real-time Updates
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Get notified instantly about request activity.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Card */}
            <div className="bg-red-50 rounded-2xl p-6 flex gap-4">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                <ShieldCheck className="text-red-600" />
              </div>

              <div>
                <h3 className="font-bold text-xl mb-2">
                  Trusted. Verified. Together.
                </h3>
                <p className="text-gray-600">
                  LifeLink helps hospitals and donors work together
                  for a safer and healthier community.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="p-12">
            <div className="flex justify-end mb-10">
              <div className="flex items-center gap-4">
                <span className="text-gray-600">
                  Already registered?
                </span>
                <button className="border border-red-600 text-red-600 px-5 py-2 rounded-lg">
                  Login
                </button>
              </div>
            </div>

            <h2 className="text-5xl font-bold mb-3">
              Register Your Hospital
            </h2>

            <p className="text-gray-600 mb-10 text-lg">
              Create your hospital account to get started ❤️
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-5">
                <Input icon={<Building2 size={18} />} placeholder="Hospital Name" />
                <Input icon={<Landmark size={18} />} placeholder="Hospital Type" />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <Input icon={<Mail size={18} />} placeholder="Official Email Address" />
                <Input icon={<Phone size={18} />} placeholder="Phone Number" />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <Input icon={<Phone size={18} />} placeholder="Alternative Phone Number1" />
                <Input icon={<Phone size={18} />} placeholder="Alternative Phone Number2" />
              </div>
              <div className="grid md:grid-cols-2 gap-5">

                <Input
                  icon={<MapPin size={18} />}
                  placeholder="Hospital Address"
                />
                <Input placeholder="District" />
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                <Input placeholder="City" />
                <Input placeholder="State" />
                <Input placeholder="PIN Code" />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <PasswordInput placeholder="Create Password" />
                <PasswordInput placeholder="Confirm Password" />
              </div>

              <div className="bg-red-50 border border-red-100 rounded-xl p-4 flex gap-3">
                <ShieldCheck className="text-red-600" />
                <div>
                  <h4 className="font-semibold">
                    Your data is secure with us.
                  </h4>

                </div>
              </div>

              <button type="Submit" className="w-full bg-red-600 hover:cursor-pointer hover:bg-red-700 text-white py-4 rounded-xl flex justify-center items-center gap-2 font-semibold">
                Register Hospital
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const Input = ({ icon, placeholder }) => (
  <div className="flex items-center border rounded-xl px-4 py-3 gap-3">
    {icon}
    <input
      type="text"
      placeholder={placeholder}
      className="w-full outline-none"
    />
  </div>
);

const PasswordInput = ({ placeholder }) => (
  <div className="flex items-center border rounded-xl px-4 py-3 gap-3">
    <Lock size={18} />
    <input
      type="password"
      placeholder={placeholder}
      className="w-full outline-none"
    />
    <Eye size={18} />
  </div>
);

export default HospitalRegister;