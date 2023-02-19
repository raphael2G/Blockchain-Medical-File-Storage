export default function Home() {
  return (
    <>
      <section className="bg-white py-4">
        <div className="container px-4 mx-auto">
          <div>
            <div className="p-6 pb-0 h-full overflow-hidden bg-white rounded-t-md">
              <div className="pb-6 border-b border-coolGray-100">
                <div className="flex flex-wrap items-center justify-between -m-2">
                  <div className="w-full p-2">
                    <h2 className="text-coolGray-900 text-2xl font-semibold">
                      Medical Details
                    </h2>
                    <p className="text-xs text-coolGray-500 font-medium">
                      Update your medical details.
                    </p>
                  </div>
                </div>
              </div>

              <div className="py-6 border-b border-coolGray-100">
                <div className="w-full md:w-10/12">
                  <div className="flex flex-wrap -m-3">
                    <div className="w-full md:w-1/3 p-3">
                      <p className="text-xl text-coolGray-800 font-semibold">
                        Basic Details
                      </p>
                    </div>
                    <div className="w-full md:flex-1 p-3">
                      <div className="flex flex-wrap -m-3">
                        <div className="w-full md:w-1/2 p-3">
                          <p className="mb-1.5 font-medium text-base text-coolGray-800">
                            Height (cm)
                          </p>
                          <div className="relative">
                            <svg
                              className="absolute right-4 top-1/2 transform -translate-y-1/2"
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.3333 6.1133C11.2084 5.98913 11.0395 5.91943 10.8633 5.91943C10.6872 5.91943 10.5182 5.98913 10.3933 6.1133L8.00001 8.47329L5.64001 6.1133C5.5151 5.98913 5.34613 5.91943 5.17001 5.91943C4.99388 5.91943 4.82491 5.98913 4.70001 6.1133C4.63752 6.17527 4.58792 6.249 4.55408 6.33024C4.52023 6.41148 4.50281 6.49862 4.50281 6.58663C4.50281 6.67464 4.52023 6.76177 4.55408 6.84301C4.58792 6.92425 4.63752 6.99799 4.70001 7.05996L7.52667 9.88663C7.58865 9.94911 7.66238 9.99871 7.74362 10.0326C7.82486 10.0664 7.912 10.0838 8.00001 10.0838C8.08801 10.0838 8.17515 10.0664 8.25639 10.0326C8.33763 9.99871 8.41136 9.94911 8.47334 9.88663L11.3333 7.05996C11.3958 6.99799 11.4454 6.92425 11.4793 6.84301C11.5131 6.76177 11.5305 6.67464 11.5305 6.58663C11.5305 6.49862 11.5131 6.41148 11.4793 6.33024C11.4454 6.249 11.3958 6.17527 11.3333 6.1133Z"
                                fill="#8896AB"
                              />
                            </svg>
                            <input
                              type={"number"}
                              className="appearance-none w-full py-2.5 px-4 text-coolGray-900 text-base font-normal bg-white border outline-none border-coolGray-200 focus:border-green-500 rounded-lg shadow-input"
                            ></input>
                          </div>
                        </div>
                        <div className="w-full md:w-1/2 p-3">
                          <p className="mb-1.5 font-medium text-base text-coolGray-800">
                            Weight (kg)
                          </p>
                          <input
                            className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                            type="text"
                            placeholder="..."
                          />
                        </div>
                        <div className="w-full md:w-1/2 p-3">
                          <p className="mb-1.5 font-medium text-base text-coolGray-800">
                            Blood Type
                          </p>
                          <select className="appearance-none w-full py-2.5 px-4 text-coolGray-900 text-base font-normal bg-white border outline-none border-coolGray-200 focus:border-green-500 rounded-lg shadow-input">
                            <option>O negative</option>
                            <option>O positive</option>
                            <option>A negative</option>
                            <option>A positive</option>
                            <option>B negative</option>
                            <option>B positive</option>
                            <option>AB negative</option>
                            <option>AB positive</option>
                          </select>
                        </div>
                        <div className="w-full md:w-1/2 p-3">
                          <p className="mb-1.5 font-medium text-base text-coolGray-800">
                            Vaccination Status
                          </p>
                          <select
                            className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                            placeholder="ZIP / Postal code"
                          >
                            <option>Not vaccinated</option>
                            <option>Partially vaccinated</option>
                            <option>Fully vaccinated</option>
                          </select>
                        </div>
                        <div className="w-full p-3">
                          <p className="mb-1.5 font-medium text-base text-coolGray-800">
                            Important Notes
                          </p>
                          <input
                            className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                            type="text"
                            placeholder="Add any important notes here..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="py-6 border-b border-coolGray-100">
                <div className="w-full md:w-10/12">
                  <div className="flex flex-wrap -m-3">
                    <div className="w-full md:w-1/3 p-3">
                      <p className="text-xl text-coolGray-800 font-semibold">
                        Basic Details
                      </p>
                    </div>
                    <div className="w-full md:flex-1 p-3">
                      <div className="flex flex-wrap -m-3">
                        <div className="w-full md:w-1/2 p-3">
                          <p className="mb-1.5 font-medium text-base text-coolGray-800">
                            Height (cm)
                          </p>
                          <div className="relative">
                            <svg
                              className="absolute right-4 top-1/2 transform -translate-y-1/2"
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.3333 6.1133C11.2084 5.98913 11.0395 5.91943 10.8633 5.91943C10.6872 5.91943 10.5182 5.98913 10.3933 6.1133L8.00001 8.47329L5.64001 6.1133C5.5151 5.98913 5.34613 5.91943 5.17001 5.91943C4.99388 5.91943 4.82491 5.98913 4.70001 6.1133C4.63752 6.17527 4.58792 6.249 4.55408 6.33024C4.52023 6.41148 4.50281 6.49862 4.50281 6.58663C4.50281 6.67464 4.52023 6.76177 4.55408 6.84301C4.58792 6.92425 4.63752 6.99799 4.70001 7.05996L7.52667 9.88663C7.58865 9.94911 7.66238 9.99871 7.74362 10.0326C7.82486 10.0664 7.912 10.0838 8.00001 10.0838C8.08801 10.0838 8.17515 10.0664 8.25639 10.0326C8.33763 9.99871 8.41136 9.94911 8.47334 9.88663L11.3333 7.05996C11.3958 6.99799 11.4454 6.92425 11.4793 6.84301C11.5131 6.76177 11.5305 6.67464 11.5305 6.58663C11.5305 6.49862 11.5131 6.41148 11.4793 6.33024C11.4454 6.249 11.3958 6.17527 11.3333 6.1133Z"
                                fill="#8896AB"
                              />
                            </svg>
                            <input
                              type={"number"}
                              className="appearance-none w-full py-2.5 px-4 text-coolGray-900 text-base font-normal bg-white border outline-none border-coolGray-200 focus:border-green-500 rounded-lg shadow-input"
                            ></input>
                          </div>
                        </div>
                        <div className="w-full md:w-1/2 p-3">
                          <p className="mb-1.5 font-medium text-base text-coolGray-800">
                            Weight (kg)
                          </p>
                          <input
                            className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                            type="text"
                            placeholder="..."
                          />
                        </div>
                        <div className="w-full md:w-1/2 p-3">
                          <p className="mb-1.5 font-medium text-base text-coolGray-800">
                            Blood Type
                          </p>
                          <select className="appearance-none w-full py-2.5 px-4 text-coolGray-900 text-base font-normal bg-white border outline-none border-coolGray-200 focus:border-green-500 rounded-lg shadow-input">
                            <option>O negative</option>
                            <option>O positive</option>
                            <option>A negative</option>
                            <option>A positive</option>
                            <option>B negative</option>
                            <option>B positive</option>
                            <option>AB negative</option>
                            <option>AB positive</option>
                          </select>
                        </div>
                        <div className="w-full md:w-1/2 p-3">
                          <p className="mb-1.5 font-medium text-base text-coolGray-800">
                            Vaccination Status
                          </p>
                          <select
                            className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                            placeholder="ZIP / Postal code"
                          >
                            <option>Not vaccinated</option>
                            <option>Partially vaccinated</option>
                            <option>Fully vaccinated</option>
                          </select>
                        </div>
                        <div className="w-full p-3">
                          <p className="mb-1.5 font-medium text-base text-coolGray-800">
                            Important Notes
                          </p>
                          <input
                            className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                            type="text"
                            placeholder="Add any important notes here..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
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
                      <a 
                      href='/updates'
                      onClick={fetch('http://localhost:9001/createTransaction/to/from/data')}
                      >
                      Push to blockchain
                      </a>
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
