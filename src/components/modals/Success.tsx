import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { phone, phoneBG } from "@/constants/images";

export default function SuccessModal({
  isOpen,
  setIsOpen,
  userType = "driver",
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userType?: "driver" | "client";
}) {
  const isDriver = userType === "driver";

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="md:max-w-2xl rounded-2xl z-[999] p-6 md:p-10 flex flex-col items-center text-center gap-6 [&>button]:lg:scale-150">
        <DialogTitle className="text-2xl md:text-3xl font-bold text-primary">
          Congratulations!
        </DialogTitle>

        <DialogDescription className="sr-only">
          This is success modal
        </DialogDescription>

        <div
          className="size-56 md:size-72 flex justify-center items-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${phoneBG})` }}
        >
          <img
            src={phone}
            alt="Phone Mockup"
            className="size-60 md:size-80 object-contain"
          />
        </div>

        <div className="space-y-4">
          <p className="text-sm md:text-base text-gray-700 font-medium">
            {isDriver ? (
              <>
                Your pre-registration to drive with
                <span className="text-primary font-semibold"> FastMet </span>
                has been successfully received!
              </>
            ) : (
              <>
                You've successfully joined the
                <span className="text-primary font-semibold"> FastMet </span>
                early access waitlist!
              </>
            )}
          </p>

          <p className="text-sm md:text-base text-gray-700">
            {isDriver
              ? "Thank you for your interest in joining the team that is set to revolutionize last-mile delivery."
              : "Thank you for your interest in being among the first to experience FastMet."}
          </p>

          <h3 className="text-base md:text-lg font-semibold mt-4">
            What Happens Next?
          </h3>

          <p className="text-sm md:text-base text-gray-700">
            {isDriver
              ? "Our team is reviewing all driver submissions. Keep an eye on your email (and check your spam folder). We'll reach out soon with your next steps."
              : "We'll notify you via SMS as soon as FastMet is available. Stay tuned!"}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
