import DriverForm from "@/components/register/DriverForm";
import InfoDriver from "@/components/register/InfoDriver";
import { useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function DriverRegister() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="flex items-center px-4 justify-center min-h-screen">
      <Button
        onClick={() => navigate(-1)}
        variant="ghost"
        className="absolute cursor-pointer left-3 top-20 md:top-25 z-10"
      >
        <ChevronLeft className="text-primary size-7 lg:scale-150" />
      </Button>
      <div className="grid grid-cols-1 items-center xl:w-full gap-10 lg:grid-cols-2 pb-10 pt-20 md:pt-25 lg:pt-30">
        <div className="bg-[#F2F5FA] hidden fixed z-[-10] top-0 bottom-0 lg:w-1/2 lg:block  left-0" />
        <InfoDriver />
        <DriverForm />
      </div>
    </section>
  );
}
