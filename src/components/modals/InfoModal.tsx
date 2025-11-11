import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {question} from "@/constants/images";

export default function InfoModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="cursor-pointer p-2 border border-primary bg-white rounded-full hover:bg-primary hover:scale-110 transition-all duration-200 flex items-center justify-center">
          <img src={question} alt="question" className="size-5 sm:size-6" />
        </Button>
      </DialogTrigger>

      <DialogContent className="py-6 px-4 z-[999] lg:max-w-[70vw] lg:px-10 xl:max-w-[50vw]  lg:gap-4">
        <DialogHeader>
          <DialogTitle className="text-lg text-center md:text-2xl text-primary font-bold">
            FastMet FAQs
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-3  text-xs md:text-sm xl:text-base">
          <DialogDescription className="sr-only">
            Frequently Asked Questions
          </DialogDescription>

          <div className="flex flex-col gap-2 text-justify">
            <div>
              <p className="font-semibold text-primary">1. What is FastMet?</p>
              <p>
                FastMet is a delivery and logistics platform focused on
                providing fast, reliable, and affordable padala services. It
                connects customers with verified drivers to deliver packages of
                various sizes safely and efficiently.
              </p>
            </div>
            <div>
              <p className="font-semibold text-primary">
                2. Where does FastMet operate?
              </p>
              <p>
                FastMet currently serves Metro Manila and nearby areas.
                Expansion to other regions will follow once full operations are
                established and optimized within the metro.
              </p>
            </div>

            <div>
              <p className="font-semibold text-primary">
                3. How can I become a FastMet driver?
              </p>
              <p>
                Register through our website. Once approved, our team will reach
                out for verification and onboarding.
              </p>
            </div>

            <div>
              <p className="font-semibold text-primary">
                4. What vehicles are accepted?
              </p>
              <p>
                FastMet accepts a wide range of vehicles—from motorcycles for
                small parcels to larger vehicles such as pickups, vans, and
                trucks for bulk or heavy deliveries.
              </p>
            </div>

            <div>
              <p className="font-semibold text-primary">
                5. Is there a registration fee?
              </p>
              <p>
                Pre-registration is free. Any onboarding fees, if applicable,
                will be announced before activation.
              </p>
            </div>

            <div>
              <p className="font-semibold text-primary">
                6. How can I contact support?
              </p>
              <p>
                Use the contact form on our website or message us through our
                official social media pages.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-3">
            <DialogClose asChild>
              <Button className="border border-primary cursor-pointer hover:bg-orange-500 bg-primary text-white px-10 py-1.5 text-sm rounded-full font-bold transition">
                Got It
              </Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
