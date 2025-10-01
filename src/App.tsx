import ComingSoon from "./components/ComingSoon";
import Header from "./components/Header";
import {Button} from "./components/ui/button";
import welcomeImg from "../src/assets/welcome_img.png";
function App() {
  return (
    <div>
      <Header />
      <div
        className="flex justify-center items-center min-h-[calc(100svh-64px)] flex-col gap-8 lg:flex-row lg:gap-0 "
        style={{
          background:
            window.innerWidth < 1024
              ? "radial-gradient(circle at center, #FFFFFF 0%, #D6EDFF 100%)"
              : "transparent",
        }}
      >
        <ComingSoon />
        <div
          className="lg:flex-1 lg:flex flex-col items-center lg:h-[calc(100svh-64px)] lg:justify-center"
          style={{
            background:
              window.innerWidth > 1024
                ? "radial-gradient(circle at center, #FFFFFF 0%, #D6EDFF 100%)"
                : "transparent",
          }}
        >
          <img
            src={welcomeImg}
            alt="Welcome Image"
            className="w-64 lg:w-[25rem] xl:w-[30rem] object-contain"
          />
        </div>
      </div>

      {/* dummy app description */}
      <div className="px-6 lg:px-32 min-h-[calc(100svh-64px)] py-16 flex flex-col gap-12  justify-center items-center bg-gradient-to-b from-white from-0% via-white via-50% to-[#FFA840]/40 lg:to-[#FFA840]/20 to-100%">
        <ComingSoon />
        <div className="flex flex-col gap-4 items-center">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            FastMet App
          </h2>
          <p className="text-gray-600 leading-relaxed text-justify indent-6 ">
            This is a demo description. Here you can briefly explain the purpose
            of the application, its core features, and the value it provides to
            users. Keep it short and engaging so visitors quickly understand
            what to expect. You can replace this text later with the real
            project description.
          </p>
        </div>

        <Button className="w-full bg-[#FFA840] font-bold  py-6 hover:bg-[#ED8718] lg:w-fit cursor-pointer">
          Follow Us on Facebook
        </Button>
      </div>
    </div>
  );
}

export default App;
