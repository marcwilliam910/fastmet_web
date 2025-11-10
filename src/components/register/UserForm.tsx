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

const validate = (formData: FormData) => {
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

  return newErrors;
};

const API_URL = import.meta.env.VITE_API_URL;

export default function UserForm() {
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

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      if (!captchaValue) {
        setErrors({form: "Please verify the captcha."});
        return;
      }

      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/api/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            captcha: captchaValue,
          }),
        });

        const data = await res.json();

        if (res.ok) {
          setSuccess(true);
          setFormData({
            fullName: "",
            address: "",
            contactNumber: "+63",
            email: "",
            birthDate: "",
            gender: "",
          });
          setErrors({});
          captchaRef.current?.reset();
          setCaptchaValue("");
        } else if (res.status === 409) {
          setErrors({form: data.error || "User already registered."});
        } else {
          setErrors({form: data.error || "Server error, please try again."});
        }
      } catch (err) {
        console.error("Submit error:", err);
        setErrors({form: "Network error. Please try again later."});
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex-1 flex flex-col gap-5 items-center">
      <p className="font-semibold text-sm text-center md:text-base xl:text-xl">
        User's Pre-Registration
      </p>
      <form
        className="flex gap-4 flex-col w-full xl:w-2/3"
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
            Submit User's Pre-Registration
          </button>
        </div>
      </form>
      <LoaderModal open={loading} />
      <SuccessModal isOpen={success} setIsOpen={setSuccess} />
    </div>
  );
}
