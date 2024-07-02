function HeroSection() {
  return (
    <main className="flex w-screen md:h-screen md:items-center md:justify-center bg-custom-almost-white ">
      <section className="flex flex-col items-stretch w-11/12 gap-12 mx-auto md:justify-between md:flex-row-reverse md:w-10/12">
        <div className=" md:w-5/12 2xl:w-4/12">
          <img
            src="/images/image-hero-desktop.png"
            alt="hero images"
            className="hidden object-contain md:block"
          />
          <img
            src="/images/image-hero-mobile.png"
            alt="hero images"
            className="object-contain md:hidden"
          />
        </div>
        <div className="relative flex flex-col flex-1 md:justify-center lg:ml-20 md:w-5/12 md:gap-12">
          <div className="flex flex-col items-center gap-6 md:items-stretch md:gap-12">
            <h1 className="flex gap-2 md:text-left justify-center z-0 md:flex-col font-bold text-4xl md:text-7xl lg:text-[80px] 2xl:text-9xl">
              <span>Make </span> <span>remote work</span>
            </h1>
            <p className="text-base font-medium text-center md:text-left md:text-lg text-custom-medium-gray md:w-10/12 2xl:text-2xl">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <button className="px-6 py-2 font-medium border-2 tx-base md:text-lg md:px-6 md:py-3 w-fit rounded-xl bg-custom-almost-black hover:bg-custom-almost-white text-custom-almost-white hover:text-custom-almost-black border-custom-almost-black ">
              Learn more
            </button>
          </div>
          <div className="flex items-center justify-between w-full pt-12 md:gap-4 md:pt-16 md:w-10/12">
            <img
              src="/images/client-databiz.svg"
              alt="client logo"
              className="w-16 md:w-fit"
            />
            <img
              src="/images/client-audiophile.svg"
              alt="client logo"
              className="w-16 md:w-fit"
            />
            <img
              src="/images/client-meet.svg"
              alt="client logo"
              className="w-16 md:w-fit"
            />
            <img
              src="/images/client-maker.svg"
              alt="client logo"
              className="w-16 md:w-fit"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default HeroSection;
