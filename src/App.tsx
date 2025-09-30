import TruckCarousel from "./components/Carousel";
import Header from "./components/Header";
import Tabs from "./components/Tabs";

function App() {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center lg:min-h-[calc(100dvh-64px)] min-h-[calc(100svh-120px)] flex-col gap-10">
        <h1 className="text-2xl md:text-4xl font-bold text-orange-400">
          Coming Soon!
        </h1>
        <TruckCarousel />
      </div>
      {/* dummy app description */}
      <div className="max-w-2xl mx-auto px-4 text-center py-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
          About This App
        </h2>
        <p className="text-gray-600 leading-relaxed">
          This is a demo description. Here you can briefly explain the purpose
          of the application, its core features, and the value it provides to
          users. Keep it short and engaging so visitors quickly understand what
          to expect. You can replace this text later with the real project
          description.
        </p>
      </div>

      <Tabs />
    </div>
  );
}

export default App;
