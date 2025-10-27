import Form from "@/components/register/Form";
import Info from "@/components/register/Info";
import { useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Register() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="flex items-center px-4 justify-center min-h-screen">
      <Link to="/" className="absolute left-3 top-20 md:top-25 z-10">
        <ChevronLeft className="text-primary size-7 lg:scale-150" />
      </Link>
      <div className="flex flex-col items- xl:w-full gap-10 lg:flex-row pb-10 pt-20 md:pt-30">
        <div className="bg-[#F2F5FA] hidden absolute z-[-10] top-0 bottom-0 lg:w-1/2 lg:block xl:w-[35%] left-0" />
        <Info />
        <Form />
      </div>
    </section>
  );
}
