import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { question } from "@/constants/images";
import { Link } from "react-router-dom";

const CLIENT_FAQS = [
  {
    question: "Paano mag-register bilang user?",
    answer:
      "Bukas na ang aming pre-registration para sa mga gustong maging FastMet user.",
    hasLink: true,
    extra:
      "Magkaroon ng chance na manalo ng mobile load at exclusive delivery vouchers sa aming official launch.",
  },
  {
    question: "Available ba ang FastMet 24/7?",
    answer:
      "Available ang FastMet depende sa oras at availability ng drivers sa iyong area.",
    extra:
      "Dahil flexible ang schedule ng drivers, may posibilidad na makapagbook anumang oras.",
  },
  {
    question: "Puwede bang magpadeliver ng maramihan?",
    answer:
      "Oo. Sinusuportahan ng FastMet ang iba't ibang uri ng delivery, kabilang ang maramihan o malalaking items.",
  },
  {
    question: "Safe ba ang delivery?",
    answer:
      "May real-time tracking feature ang FastMet upang masubaybayan ang status ng delivery.",
  },
  {
    question: "Magkano ang base fare?",
    answer: "Ang base fare ay maaaring magsimula sa ₱40.",
    extra:
      "Ang kabuuang bayad ay depende sa distance, uri ng delivery, at sasakyan.",
  },
];

export function ClientFAQModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="cursor-pointer p-2 border border-primary bg-white rounded-full hover:bg-primary hover:scale-110 transition-all duration-200">
          <img src={question} alt="question" className="size-5 sm:size-6" />
        </Button>
      </DialogTrigger>

      <DialogContent
        className="
    z-[999]
    w-[95vw] max-w-lg
    md:max-w-2xl lg:max-w-3xl xl:max-w-4xl
    p-0 overflow-hidden
    rounded-xl
  "
      >
        {/* HEADER */}
        <DialogHeader className="px-4 pt-5 pb-3 border-b">
          <DialogTitle className="text-center text-primary font-bold text-base md:text-xl">
            User FAQs
          </DialogTitle>
        </DialogHeader>

        {/* BODY */}
        <div className="max-h-[75vh] overflow-y-auto px-4 py-4 space-y-4 scroll-smooth">
          <DialogDescription className="sr-only">
            User Frequently Asked Questions
          </DialogDescription>

          {CLIENT_FAQS.map(({ question, answer, hasLink, extra }, index) => (
            <div key={question} className="space-y-1">
              <p className="font-semibold text-primary text-sm md:text-base">
                {index + 1}. {question}
              </p>

              <p className="text-xs md:text-sm leading-relaxed text-justify">
                {answer}{" "}
                {hasLink && (
                  <DialogClose asChild>
                    <Link
                      to="/user-register"
                      className="text-blue-600 underline"
                    >
                      mag-register dito
                    </Link>
                  </DialogClose>
                )}
              </p>

              {extra && (
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  {extra}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="px-4 py-3 border-t flex justify-center">
          <DialogClose asChild>
            <Button className="bg-primary text-white px-6 py-1.5 text-sm rounded-full">
              Got It
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
