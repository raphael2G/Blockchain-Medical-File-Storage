export default function Signin() {
  return (
    <section className="bg-white overflow-hidden relative py-24">
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-wrap -mx-4 items-center">
          <div className="w-full lg:w-1/2 px-4 mb-20 lg:mb-0">
            <div className="max-w-xl xl:max-w-md mx-auto">
              <h2 className="text-4xl md:text-5xl font-heading mb-6">
                Free Philippine Real Estate Ads Forums And Classifieds
              </h2>
              <p className="leading-8">
                Dream interpretation has many forms; it can be done be done for
                the sake of fun, hobby or can be taken up as a serious career.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="max-w-xl mx-auto px-6 py-12 md:p-16 bg-white rounded shadow-lg">
              <div className="max-w-sm mx-auto text-center">
                <img
                  className="block mx-auto mb-6 h-16"
                  src="/medi.png"
                  alt=""
                />
                <h2 className="text-4xl font-heading mb-2">Sign Up</h2>
                <p className="leading-8 mb-6">
                  Start journey with our product.
                </p>
                <form className="text-left" action>
                  <label className="block mb-6">
                    <span className="text-sm">Public key</span>
                    <input
                      className="mt-2 w-full py-3 px-4 border border-gray-200 outline-none"
                      type="text"
                      aria-describedby="emailHelp"
                      placeholder="Your public key"
                    />
                  </label>
                  <label className="block mb-6">
                    <span className="text-sm">E-mail</span>
                    <input
                      className="mt-2 w-full py-3 px-4 border border-gray-200 outline-none"
                      type="text"
                      placeholder="Your email address"
                    />
                  </label>

                  <a
                    className="inline-block mt-6 mb-4 w-full px-8 py-3 text-center text-white font-bold bg-black hover:bg-gray-900"
                    href="/home"
                  >
                    Sign Up
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-0 left-0 w-full h-full"
        src="https://shuffle.dev/pstls-assets/images/forms/form-5-shadow.jpg"
        alt=""
      />
    </section>
  );
}
