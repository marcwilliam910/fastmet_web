import Form from "@/components/register/Form";
import Info from "@/components/register/Info";
import { useEffect } from "react";
import {ChevronLeft} from "lucide-react";
import { Link } from "react-router-dom";


export default function Register() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="flex my-20 px-4 md:mt-30 justify-center">
      <Link to="/" className="absolute left-5 md:top-25">
      <ChevronLeft className="text-primary size-7 md:scale-150" />
      </Link>
      <div className="flex flex-col items-center justify-center xl:w-full gap-10 lg:flex-row">
        <Info />
        <Form />
      </div>
    </section>
  );
}
