import Card from "../components/Card";
import mapImage from "../../public/map.png";

const HeroSection = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center gap-12 overflow-hidden">
      <div className="w-full lg:w-1/2 px-6 lg:px-20 space-y-6 text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold text-black leading-snug">
          Buy, rent, or sell
          <br />
          your property easily
        </h1>
        <p className="text-2xl text-gray-700">A great platform to buy, sell, or even rent your properties without any commissions.</p>

        <div className="flex justify-center lg:justify-start gap-6 lg:gap-12 pt-2">
          <div>
            <p className="text-3xl font-bold text-secondary-300">50k+</p>
            <span className="text-sm text-gray-500">renters</span>
          </div>
          <div>
            <p className="text-3xl font-bold text-secondary-300">10k+</p>
            <span className="text-sm text-gray-500">properties</span>
          </div>
        </div>
      </div>

      <div className="relative lg:w-1/2 px-9 lg:px-0">
        <img src={mapImage} alt="Map background" className="w-full h-auto max-h-screen lg:max-h-[80vh] object-cover" />

        <div className="absolute top-1/2 left-3 lg:left-0 transform lg:-translate-x-1/5 -translate-y-1/2">
          <Card
            image="/house-image-2.jpg"
            title="Beverly Springfield"
            location="2821 Lake Sevilla, Palm Harbor, TX"
            price={2700}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
