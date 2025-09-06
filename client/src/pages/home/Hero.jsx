import BannerImg from "../../assets/Banner.png";

function Hero() {
  return (
    <section className="flex flex-col md:flex-row-reverse py-8 md:py-12 px-4 md:px-12 gap-2 md:gap-8 items-center">
      <div className="w-full md:w-1/2 flex justify-end items-center hover:scale-105 transition-transform duration-300">
        <picture>
          <img src={BannerImg} alt="Banner" />
        </picture>
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="md:text-5xl text-2xl font-medium">New Releases This Week</h1>
        <p className="mt-5 text-gray-700 text-xl md:text-2xl">
          It's time to update your reading list with some of the latest and
          greatest releases in the literary world. From heart-pumping thrillers
          to captivating memoirs, this week's new releases offer something for
          everyone.
        </p>
        <button className="bg-yellow-400 text-white text-lg py-1.5 px-6 md:px-10 rounded-lg mt-5 mr-2 hover:bg-blue-600 cursor-pointer">Subscribe</button>
      </div>
    </section>
  );
}

export default Hero;
