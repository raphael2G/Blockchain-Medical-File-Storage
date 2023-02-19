export function Benifits() {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="mb-6 max-w-xl mx-auto font-heading font-bold text-center text-6xl sm:text-7xl text-gray-900">
          A simple &amp; accessible solution.
        </h2>
        <p className="mb-16 max-w-lg mx-auto text-center text-gray-600 text-lg">
          We make is easy for people to view thier medical records and share it.
        </p>
        <div className="flex flex-wrap -m-8">
          <div className="w-full md:w-1/3 p-8">
            <a className="group" href="#">
              <div className="mb-9 overflow-hidden rounded-2xl">
                <img
                  className="transform hover:scale-110 w-full transition ease-out duration-500"
                  src="gradia-assets/images/features/experts.png"
                  alt=""
                />
              </div>
              <h3 className="mb-4 font-heading font-bold text-gray-900 text-xl group-hover:underline">
                2100+ marketing experts
              </h3>
              <p className="mb-5 text-gray-600 text-base">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim.
              </p>
            </a>
            <a
              className="group inline-block font-heading font-medium text-gray-900 hover:text-gray-800 text-base overflow-hidden"
              href="#"
            >
              <p className="mb-1">Learn more</p>
              <div className="w-full transform -translate-x-0 group-hover:translate-x-full h-0.5 bg-gradient-cyan transition ease-in-out duration-500" />
            </a>
          </div>
          <div className="w-full md:w-1/3 p-8">
            <a className="group" href="#">
              <div className="mb-9 overflow-hidden rounded-2xl">
                <img
                  className="transform hover:scale-110 w-full transition ease-out duration-500"
                  src="gradia-assets/images/features/insights.png"
                  alt=""
                />
              </div>
              <h3 className="mb-4 font-heading font-bold text-gray-900 text-xl group-hover:underline">
                Live analytics &amp; insights
              </h3>
              <p className="mb-5 text-gray-600 text-base">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim.
              </p>
            </a>
            <a
              className="group inline-block font-heading font-medium text-gray-900 hover:text-gray-800 text-base overflow-hidden"
              href="#"
            >
              <p className="mb-1">Learn more</p>
              <div className="w-full transform -translate-x-0 group-hover:translate-x-full h-0.5 bg-gradient-cyan transition ease-in-out duration-500" />
            </a>
          </div>
          <div className="w-full md:w-1/3 p-8">
            <a className="group" href="#">
              <div className="mb-9 overflow-hidden rounded-2xl">
                <img
                  className="transform hover:scale-110 w-full transition ease-out duration-500"
                  src="gradia-assets/images/features/results.png"
                  alt=""
                />
              </div>
              <h3 className="mb-4 font-heading font-bold text-gray-900 text-xl group-hover:underline">
                Proven results
              </h3>
              <p className="mb-5 text-gray-600 text-base">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim.
              </p>
            </a>
            <a
              className="group inline-block font-heading font-medium text-gray-900 hover:text-gray-800 text-base overflow-hidden"
              href="#"
            >
              <p className="mb-1">Learn more</p>
              <div className="w-full transform -translate-x-0 group-hover:translate-x-full h-0.5 bg-gradient-cyan transition ease-in-out duration-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
