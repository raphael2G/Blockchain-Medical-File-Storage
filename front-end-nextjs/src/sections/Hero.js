export default function Hero() {
  return (
    <section className="relative">
      <img
        className="absolute left-0 top-0"
        src="https://shuffle.dev/flaro-assets/images/headers/gradient.svg"
        alt=""
      />
      <img
        className="absolute right-0 bottom-0"
        src="flaro-assets/images/headers/gradient2.svg"
        alt=""
      />
      <div className="container mx-auto overflow-hidden">
        <div className="relative z-20 flex items-center justify-between px-4 py-5 bg-transparent">
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-auto mr-14">
                <a href="#">
                  <img src="/medi.png" className="h-16" alt="" />
                </a>
              </div>
              <div className="w-auto hidden lg:block">
                <ul className="flex items-center mr-16">
                  <li className="mr-9 font-medium hover:text-gray-700">
                    <a href="#">Features</a>
                  </li>
                  <li className="mr-9 font-medium hover:text-gray-700">
                    <a href="#">Solutions</a>
                  </li>
                  <li className="mr-9 font-medium hover:text-gray-700">
                    <a href="#">Resources</a>
                  </li>
                  <li className="font-medium hover:text-gray-700">
                    <a href="#">Pricing</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-auto hidden lg:block">
                <div className="inline-block">
                  <button
                    className="py-2.5 px-4 text-base w-full font-medium border border-gray-400 hover:border-gray-500 rounded-xl focus:ring focus:ring-gray-50 bg-white hover:bg-gray-50 transition ease-in-out duration-200"
                    type="button"
                  >
                    Login
                  </button>
                </div>
              </div>
              <div className="w-auto lg:hidden">
                <a href="#">
                  <svg
                    className="navbar-burger text-indigo-600"
                    width={51}
                    height={51}
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width={56} height={56} rx={28} fill="currentColor" />
                    <path
                      d="M37 32H19M37 24H19"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80" />
          <nav className="relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto">
            <div className="flex flex-wrap justify-between h-full">
              <div className="w-full">
                <div className="flex items-center justify-between -m-2">
                  <div className="w-auto p-2">
                    <a className="inline-block" href="#">
                      <img
                        src="flaro-assets/logos/flaro-logo-black.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="w-auto p-2">
                    <a className="navbar-burger" href="#">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 18L18 6M6 6L18 18"
                          stroke="#111827"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center py-16 w-full">
                <ul>
                  <li className="mb-12">
                    <a className="font-medium hover:text-gray-700" href="#">
                      Features
                    </a>
                  </li>
                  <li className="mb-12">
                    <a className="font-medium hover:text-gray-700" href="#">
                      Solutions
                    </a>
                  </li>
                  <li className="mb-12">
                    <a className="font-medium hover:text-gray-700" href="#">
                      Resources
                    </a>
                  </li>
                  <li>
                    <a className="font-medium hover:text-gray-700" href="#">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-end w-full pb-8">
                <div className="flex flex-wrap">
                  <div className="w-full">
                    <div className="block">
                      <button
                        className="py-2.5 px-4 text-base w-full font-medium border border-gray-400 hover:border-gray-500 rounded-xl focus:ring focus:ring-gray-50 bg-white hover:bg-gray-50 transition ease-in-out duration-200"
                        type="button"
                      >
                        Gain control
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <section className="pt-24 pb-28 bg-white overflow-hidden">
        <div className="container px-4 mx-auto">
          <h2 className="mb-7 text-6xl md:text-8xl xl:text-10xl font-bold font-heading text-center tracking-px-n leading-none">
            Say hi to MediChain
          </h2>
          <p className="mb-14 text-lg text-gray-600 font-medium text-center mx-auto md:max-w-2xl">
            MediChain is a blockchain-based platform that aims to provide a
            secure and transparent way to store and share medical records.
          </p>
          <div className="flex justify-center">
            <div className="inline-block">
              <img
                className="mb-11 mx-auto transform hover:translate-y-3 transition ease-in-out duration-1000 max-w-2xl"
                src="/iso.png"
                alt=""
              />
              <ul className="flex flex-wrap justify-center -m-8">
                <li className="w-auto p-8">
                  <a
                    className="text-sm text-gray-400 hover:text-gray-500 font-semibold uppercase tracking-px"
                    href="#"
                  >
                    Easy Projects
                  </a>
                </li>
                <li className="w-auto p-8">
                  <a
                    className="text-sm text-gray-400 hover:text-gray-500 font-semibold uppercase tracking-px"
                    href="#"
                  >
                    Easy Projects
                  </a>
                </li>
                <li className="w-auto p-8">
                  <a
                    className="text-sm text-gray-400 hover:text-gray-500 font-semibold uppercase tracking-px"
                    href="#"
                  >
                    Email Notification
                  </a>
                </li>
                <li className="w-auto p-8">
                  <a
                    className="text-sm text-gray-400 hover:text-gray-500 font-semibold uppercase tracking-px"
                    href="#"
                  >
                    Cloud Servers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
