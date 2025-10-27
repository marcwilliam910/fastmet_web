import { VEHICLES } from "@/constants/images";
import React, {useState} from "react";



export default function Form() {
  const [selectedVehicle, setSelectedVehicle] = useState("motorcycle");
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    contactNumber: "",
    emailAddress: "",
    birthDate: "",
    gender: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full lg:flex-1 space-y-5 xl:flex-2">
      <p className="font-semibold text-sm text-center md:text-base xl:text-xl">
        Driver's Pre-Registration
      </p>
      <form className="flex gap-4 flex-col xl:flex-row flex-1">
        <div className="space-y-4 flex-1">
          <div className="space-y-2">
            <label className="block text-xs xl:text-sm font-semibold">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Full name:"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-500 text-sm"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs xl:text-sm font-semibold">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Address:"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-500 text-sm"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs xl:text-sm font-semibold">Contact Number</label>
            <input
              type="text"
              name="contactNumber"
              placeholder="Contact Number:"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-500 text-sm"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs xl:text-sm font-semibold">Email Address</label>
            <input
              type="text"
              name="emailAddress"
              placeholder="Email Address:"
              value={formData.emailAddress}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-500 text-sm"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs xl:text-sm font-semibold">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Address:"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-500 text-sm"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs xl:text-sm font-semibold">
              Select Birth Date:
            </label>
            <input
              type="date"
              name="birthDate"
              placeholder="Select birth date:"
              value={formData.birthDate}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-500 text-sm"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs xl:text-sm font-semibold">Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-500 text-sm text-gray-500"
            >
              <option value="" disabled>Select Gender:</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>


        <div className="flex flex-col items-center  gap-3 pt-3 flex-1 xl:gap-8 mx-10">
          <div className="flex flex-col items-center">
            <label className="text-sm font-semibold xl:text-base">Select Vehicle Type</label>
            <p className="text-xs text-gray-600 xl:text-sm">
              ( Use as your vehicle service for FastMet )
            </p>
          </div>
          <div className="grid grid-cols-4 xl:grid-cols-2 gap-4 xl:gap-8">
            {VEHICLES.map((vehicle) => (
              <div
                className="flex flex-col justify-center items-center gap-2 cursor-pointer"
                key={vehicle.id}
                onClick={() => setSelectedVehicle(vehicle.id)}
              >
                <div
                  className={`size-16 md:size-24 xl:size-36 rounded-xl flex items-center justify-center shadow-lg ${
                    selectedVehicle === vehicle.id
                      ? "border-primary border-2"
                      : "border-gray-300 border"
                  }`}
                >
                  <img
                    src={vehicle.img}
                    alt={vehicle.name}
                    className="size-8 md:size-14 xl:size-20 drop-shadow-md object-contain xl:scale-125"
                  />
                </div>
                <p className="font-semibold md:text-sm text-xs">
                  {vehicle.name}
                </p>
              </div>
            ))}
          </div>
        <button
          type="submit"
          className="w-full cursor-pointer py-3 mt-3 xl:mt-auto bg-primary text-white rounded-lg hover:bg-orange-500 transition-all duration-200"
        >
          Submit Driver's Pre-Registration
        </button>
        </div>

      </form>
    </div>
  );
}
