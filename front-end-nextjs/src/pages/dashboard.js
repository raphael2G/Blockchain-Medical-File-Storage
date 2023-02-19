export default function Dashboard() {
  return (
    <>
      <section className="bg-white py-4">
        <div className="container px-4 mx-auto">
          <section className="pt-8 px-6 bg-white">
            <h2 className="mb-4 text-2xl font-bold">Project Name</h2>
            <div className="flex flex-wrap text-sm text-center">
              <a
                className="inline-block w-full md:w-1/2 lg:w-auto mb-4 lg:mb-0 px-4 pb-2 border-b-2 border-indigo-500 text-indigo-500"
                href="/dashboard"
              >
                View
              </a>
              <a
                className="inline-block w-full md:w-1/2 lg:w-auto mb-4 lg:mb-0 px-4 pb-2 text-gray-300 border-b-2 border-transparent hover:border-gray-300"
                href="/updates"
              >
                Update
              </a>
            </div>
          </section>

          <div>
            <div className="p-6 pb-0 h-full overflow-hidden bg-white rounded-t-md">
              <div className="pb-6 border-b border-coolGray-100">
                <div className="flex flex-wrap items-center justify-between -m-2">
                  <div className="w-full p-2">
                    <h2 className="text-coolGray-900 text-2xl font-semibold">
                      View Patient Data
                    </h2>
                    <p className="text-xs text-coolGray-500 font-medium">
                      To view a patient's data, upload their public key
                    </p>
                  </div>
                </div>
              </div>

              <div className="py-6 border-b border-coolGray-100">
                <div className="w-full md:w-10/12">
                  <div className="flex flex-wrap -m-3">
                    <div className="w-full md:w-1/3 p-3">
                      <p className="text-xl text-coolGray-800 font-semibold">
                        Public Key
                      </p>
                    </div>
                    <div className="w-full md:flex-1 p-3">
                      <div className="flex flex-wrap -m-3">
                        <div className="w-full p-3">
                          <p className="mb-1.5 font-medium text-base text-coolGray-800">
                            Enter Below
                          </p>
                          <input
                            className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                            type="text"
                            placeholder="Patient's Public Key"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white bg-opacity-60 rounded-b-md">
              <div className="w-full md:w-10/12">
                <div className="flex flex-wrap justify-end -m-1.5">
                  <div className="w-full md:w-auto p-1.5">
                    <button className="flex flex-wrap justify-center w-full px-4 py-2 font-medium text-sm text-coolGray-500 hover:text-coolGray-600 border border-coolGray-200 hover:border-coolGray-300 bg-white rounded-md shadow-button">
                      <p>Cancel</p>
                    </button>
                  </div>
                  <div className="w-full md:w-auto p-1.5">
                    <button className="flex flex-wrap justify-center w-full px-4 py-2 bg-green-500 hover:bg-green-600 font-medium text-sm text-white border border-green-500 rounded-md shadow-button">
                      <a href="/dashboard">View Patient File</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
