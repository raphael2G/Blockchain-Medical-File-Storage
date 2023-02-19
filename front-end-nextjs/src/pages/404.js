export default function ErrorFourPage() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container px-4 mx-auto relative">
        <div className="max-w-md mx-auto text-center relative z-10">
          <h3 className="text-4xl lg:text-5xl font-heading mb-12 text-indigo-200">
            Error 404
          </h3>
          <p className="mb-10">
            Sorry, we can't find that page or something has gone wrong...
          </p>
          <a
            className="inline-block px-8 py-3 text-white font-bold bg-black hover:bg-gray-900"
            href="/"
          >
            Go back to Homapage
          </a>
        </div>
        <img
          className="absolute top-0 left-0 w-full"
          src="pstls-assets/images/http-codes/404.png"
          alt=""
        />
        <img
          className="absolute top-0 left-0 w-full"
          src="pstls-assets/images/http-codes/http-codes-shadow.png"
          alt=""
          style={{ zIndex: 2 }}
        />
      </div>
    </section>
  );
}
