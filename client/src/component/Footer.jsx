import foo from "../assets/footer-logo.png";
function Footer() {
  return (
    <footer className="py-4 flex flex-col gap-18 bg-gray-50 mt-10">
      {/* top section */}
      <div className="flex items-center justify-around gap-6 px-3">
        <div className="flex flex-col gap-4">
          <img
            src={foo}
            alt="footer image"
            className="w-8 h-8 sm:w-12 sm:h-12 ml-1 sm:ml-7"
          />
          <ul className="flex flex-col md:flex-row gap-4">
            <li><a href="#home" className="hover:text-primary">Home</a></li>
            <li><a href="#services" className="hover:text-primary">Services</a></li>
            <li><a href="#about" className="hover:text-primary">About Us</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>
        <div className="">
          <p className="text-gray-700">
            Subscribe to stay tuned for new product and latest updates. Let's do
            it!
          </p>
          <div className="flex border border-yellow-300 rounded-xl overflow-hidden mt-2 sm:mt-3.5 md:mt-4 w-fit -mr-56">
            <input
              type="text"
              className="px-0.5 py-1 sm:px-1.5 sm:py-2.5 md:px-2 md:py-3 outline-none w-32 sm:w-full"
            />
            <button className="bg-yellow-400 px-1.5 py-1 sm:px-2 sm:py-2.5 md:px-4 md:py-3 text-white cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* bottom section */}
      <div>
        <hr />
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-2 sm:px-6 py-4 text-sm">
          <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
            <p>Privacy policy</p>
            <p>Terms of uses</p>
            <p>Sales and Refunds</p>
            <p>Legals</p>
          </div>
          <div className="flex gap-8 mr-3 px-4">
            <p>ig</p>
            <p>fa</p>
            <p>X</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
