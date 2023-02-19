export default function Stats() {
  return (
    <section className="relative pt-24 pb-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto mb-20">
          <h2 className="mb-5 font-heading font-semibold text-center text-5xl sm:text-6xl text-gray-900">
            Togather we can make a difference.
          </h2>
          <p className="text-base text-center text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center -m-6 md:-m-16 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="w-full md:w-1/2 p-6 md:p-16">
              <h2 className="mb-3 font-heading font-bold text-12xl sm:text-13xl md:text-14xl xl:text-15xl text-center text-transparent bg-clip-text bg-blue-500">
                98%
              </h2>
              <h3 className="mb-3 font-heading font-semibold text-center text-gray-900 text-lg">
                Average Satisfaction Rate
              </h3>
              <p className="text-center text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor
              </p>
            </div>
            <div className="w-full md:w-1/2 p-6 md:p-16">
              <h2 className="mb-3 font-heading font-bold text-12xl sm:text-13xl md:text-14xl xl:text-15xl text-center text-transparent bg-clip-text bg-purple-500">
                117%
              </h2>
              <h3 className="mb-3 font-heading font-semibold text-center text-gray-900 text-lg">
                Average ROI on Ads
              </h3>
              <p className="text-center text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
