import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import {phone, phoneBG} from "@/constants/images";

export default function SuccessModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className=" md:max-w-2xl rounded-2xl z-[999] p-6 md:p-10 flex flex-col items-center text-center gap-6 [&>button]:lg:scale-150">
        <DialogTitle className="text-2xl md:text-3xl font-bold text-primary">
          Congratulations!
        </DialogTitle>

        <DialogDescription className="sr-only">
          This is success modal
        </DialogDescription>

        <div
          className="size-56 md:size-72 flex justify-center items-center bg-cover bg-center bg-no-repeat"
          style={{backgroundImage: `url(${phoneBG})`}}
        >
          <img
            src={phone}
            alt="Phone Mockup"
            className=" size-60 md:size-80 object-contain"
          />
        </div>
        <div className="space-y-4">
          <p className="text-sm md:text-base text-gray-700 font-medium">
            Your pre-registration to drive with
            <span className="text-primary font-semibold"> FastMet </span>
            has been successfully received!
          </p>
          <p className="text-sm md:text-base text-gray-700">
            Thank you for your interest in joining the team that is set to
            revolutionize ride-hailing.
          </p>

          <h3 className="text-base md:text-lg font-semibold mt-4">
            What Happens Next?
          </h3>
          <p className="text-sm md:text-base text-gray-700">
            Our team is reviewing all driver and user submissions. Keep an eye
            on your email (and check your spam folder). We’ll reach out soon.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
