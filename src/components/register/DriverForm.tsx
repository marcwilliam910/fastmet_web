import {VEHICLES} from "@/constants/images";
import React, {useRef, useState} from "react";
import PhoneInput from "react-phone-input-2";
import LoaderModal from "../modals/Loader";
import SuccessModal from "../modals/Success";
import ReCAPTCHA from "react-google-recaptcha";

interface FormData {
  fullName: string;
  address: string;
  contactNumber: string;
  email: string;
  birthDate: string;
  gender: string;
}

const validate = (formData: FormData, selectedVehicle: string) => {
  const newErrors: Record<string, string> = {};

  if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
  if (!formData.address.trim()) newErrors.address = "Address is required";
  if (!formData.contactNumber.trim())
    newErrors.contactNumber = "Contact number is required";
  else if (!/^(63|0)\d{10}$/.test(formData.contactNumber.replace("+", "")))
    newErrors.contactNumber = "Invalid contact number";

  if (!formData.email.trim()) newErrors.email = "Email address is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
    newErrors.email = "Invalid email format";

  if (!formData.birthDate) newErrors.birthDate = "Birth date is required";
  if (!formData.gender) newErrors.gender = "Gender is required";
  if (!selectedVehicle) newErrors.vehicle = "Vehicle type is required";

  return newErrors;
};

const API_URL = import.meta.env.VITE_API_URL;

export default function DriverForm() {
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    address: "",
    contactNumber: "",
    email: "",
    birthDate: "",
    gender: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const captchaRef = useRef<ReCAPTCHA>(null);

  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const onCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

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

  const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate(formData, selectedVehicle);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      if (!captchaValue) {
        setErrors({form: "Please verify the captcha."});
        return;
      }
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/api/drivers/pre-register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            vehicleType: selectedVehicle,
            captcha: captchaValue,
          }),
        });

        const data = await res.json();

        if (res.ok) {
          setSuccess(true);

          // clear all inputs after success
          setFormData({
            fullName: "",
            address: "",
            contactNumber: "+63",
            email: "",
            birthDate: "",
            gender: "",
          });
          setSelectedVehicle("");
          setErrors({});
          captchaRef.current?.reset();
          setCaptchaValue("");
        } else if (res.status === 409) {
          // duplicate registration
          setErrors({form: data.error || "Driver already registered."});
          setSuccess(false);
        } else {
          // other server errors
          setErrors({form: data.error || "Server error, please try again."});
          setSuccess(false);
        }
      } catch (err) {
        console.error("Submit error:", err);
        setErrors({form: "Network error. Please try again later."});
        setSuccess(false);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="w-full lg:flex-1 space-y-5 xl:flex-2">
      <p className="font-semibold text-sm text-center md:text-base xl:text-xl">
        Driver's Pre-Registration
      </p>
      <form
        className="flex gap-4 flex-col xl:flex-row flex-1"
        onSubmit={formSubmit}
      >
        <div className="space-y-4 flex-1">
          <div className="space-y-2">
            <label className="block text-xs xl:text-sm font-semibold">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Full name:"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2.5 xl:py-3 border  rounded-lg focus:outline-none focus:border-primary text-sm
                border-gray-300
             "
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs ml-2">{errors.fullName}</p>
            )}
          </div>
          <div className="space-y-2">
            <label className="block text-xs xl:text-sm font-semibold">
              Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="Address:"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2.5 xl:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-sm"
            />
            {errors.address && (
              <p className="text-red-500 text-xs ml-2">{errors.address}</p>
            )}
          </div>
          <div className="space-y-2">
            <label className="block text-xs xl:text-sm font-semibold">
              Contact Number
            </label>
            <PhoneInput
              country="ph"
              value={formData.contactNumber}
              onChange={(value) => {
                setFormData({...formData, contactNumber: value});
              }}
              onlyCountries={["ph"]}
              countryCodeEditable={false} // lock +63 prefix
              disableDropdown={true} // hide other flags
              inputProps={{
                maxLength: 15, // +63 plus 10 digits plus space = 15 chars total
              }}
              inputClass="!w-full !py-2.5 !xl:py-3 !px-12 !rounded-lg !text-sm !h-auto "
              buttonClass="!border !border-gray-300 !rounded-l-lg"
            />
            {errors.contactNumber && (
              <p className="text-red-500 text-xs ml-2">
                {errors.contactNumber}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <label className="block text-xs xl:text-sm font-semibold">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email Address:"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 xl:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-sm"
            />
            {errors.email && (
              <p className="text-red-500 text-xs ml-2">{errors.email}</p>
            )}
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
              className="w-full px-4 py-2.5 xl:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-sm"
            />
            {errors.birthDate && (
              <p className="text-red-500 text-xs ml-2">{errors.birthDate}</p>
            )}
          </div>
          <div className="space-y-2">
            <label className="block text-xs xl:text-sm font-semibold">
              Gender:
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-2.5 xl:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-sm"
            >
              <option value="" disabled>
                Select Gender:
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          {errors.gender && (
            <p className="text-red-500 text-xs ml-2">{errors.gender}</p>
          )}
        </div>

        <div className="flex flex-col items-center  gap-3 pt-3 flex-1 xl:gap-8 xl:mx-10">
          <div className="flex flex-col items-center">
            <label className="text-sm font-semibold xl:text-base">
              Select Vehicle Type
            </label>
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
          {errors.vehicle && (
            <p className="text-red-500 text-xs">{errors.vehicle}</p>
          )}

          {errors.form && (
            <p className="text-red-500 mt-5 text-center">{errors.form}</p>
          )}

          <div className="mt-5">
            <ReCAPTCHA
              ref={captchaRef}
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
              onChange={onCaptchaChange}
              theme="light"
              size="normal"
            />
          </div>

          <button
            disabled={loading || !captchaValue}
            type="submit"
            className={`w-full py-3 mt-3 xl:mt-auto bg-primary text-white rounded-lg  transition-all duration-200 ${
              loading || !captchaValue
                ? "opacity-70 cursor-not-allowed"
                : "cursor-pointer hover:bg-orange-500"
            }`}
          >
            Submit Driver's Pre-Registration
          </button>
        </div>
      </form>
      <LoaderModal open={loading} />
      <SuccessModal isOpen={success} setIsOpen={setSuccess} />
    </div>
  );
}
