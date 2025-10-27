import { border, rider } from "@/constants/images";

export default function Model() {
  return (
    <>
      <img
        src={border}
        alt="Border design"
        className="w-[30rem] object-contain"
      />
      <img
        src={rider}
        alt="Rider"
        className="absolute -bottom-18 -left-10 size-[27rem] object-contain"
      />
    </>
  );
}
