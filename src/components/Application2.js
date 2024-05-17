import React from 'react'

const Application2 = () => {
  return (
  <div className=" h-screen mt-3 bg-[#1F4887]">
      <div className="h-auto">
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="inline-flex  items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>

        <aside
          id="default-sidebar"
          className="fixed  bg-[#1F4887]  left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 mt-16"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto border-2 -mt-16 bg-[#4470B2] ">
            <ul className="space-y-2 font-medium">
              <li className="">
                <a
                  href="#"
                  className="flex items-center p-2 text-white rounded-lg hover:bg-gray-100 hover:text-gray-700 group"
                >
                  <svg
                    className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>

                  <span className="ms-3 ">Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-white rounded-lg hover:bg-gray-100 hover:text-gray-700  group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>

                  <span className="flex-1 ms-3 whitespace-nowrap">Kanban</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-white rounded-lg hover:bg-gray-100 hover:text-gray-700  group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.418 3.623l-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                  </svg>

                  <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                  {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">3</span> */}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-white rounded-lg hover:bg-gray-100 hover:text-gray-700  group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                    fill="none"
                    viewBox="0 0 18 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                    />
                  </svg>

                  <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
        
        <div className="flex justify-center -mt-4 pt-16 items-center h-auto bg-[#1F4887]">
          <form className="bg-white ml-52 h-[500px]  w-[650px] p-8 rounded-lg -mt-8  shadow-md">
        <h1 className='text-3xl font-bold font-serif pb-4 ml-16'>Online Application Form</h1>
            <div className="">
              <label htmlFor="name" className="block  text-gray-700 text-sm font-bold mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-60  border rounded-lg bg-gray-300 p-2"
                placeholder="Enter your name"
              />
            </div>

            <div className="">
              <label htmlFor="reg" className="block  text-gray-700 text-sm font-bold mb-2">
                Registration No.
              </label>
              <input
                type="text"
                id="name"
                className="w-60  border rounded-lg bg-gray-300 p-2"
                placeholder="Enter your Registration Number"
              />
            </div>
            
            <div className="mb-4 mt-4">
              <label htmlFor="options" className="block text-gray-700 text-sm font-bold mb-2">
                Application Type
              </label>
              <select id="options" placeholder='Choose Application Type' className="w-60 border bg-gray-300  rounded-lg p-2">
                <option value="option1">Choose Application Type</option>
                <option value="option2">Freezing Semester</option>
                <option value="option3">Admission Cancellation</option>
                <option value="option3">Rearrangement Of Mid Exam </option>
                <option value="option3">Active Enrollment </option>

                <option value="option3">Course Completion Certificate   </option>
                <option value="option3">Change Subject</option>
                <option value="option3">Arrange Paper </option>
                <option value="option3">Change FYP Project  </option>
                <option value="option3">Course Withdrawal  </option>
                <option value="option3">Change Supervisor </option>
                <option value="option3">Educational Documents   </option>
                <option value="option3">Other  </option>

              </select>



            </div>

            <div className="mb-4 mt-4">
              <label htmlFor="options" className="block text-gray-700 text-sm font-bold mb-2">
                Send To
              </label>
              <select id="options" placeholder='Choose Application Type' className="w-60 border bg-gray-300  rounded-lg p-2">
                <option value="option1">To Chairman </option>
                <option value="option2">To Semester Coordinator</option>
                <option value="option3">To Batch Advisor </option>
                <option value="option3">To Teacher </option>
                <option value="option3">Other</option>

                

              </select>



            </div>


            <div className="w-full  ml-[320px] -mt-80 mb-4">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                className="w-60 h-72 border bg-gray-300 rounded-lg p-2"
                placeholder="Enter your message here"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-60 mt-6 ml-80 bg-[#329987] text-white p-2 rounded-md font-semibold"
            >
              Submit
            </button>
          </form>
        </div>

          

      </div>


    </div>
  )
}

export default Application2