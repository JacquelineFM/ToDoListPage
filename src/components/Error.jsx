import Image from "../assets/img/Error.svg";
import RefreshButton from "./RefreshButton";

const Error = () => {
  return (
    <main className="bg-white relative overflow-hidden h-screen">
      <div className="container mx-auto h-screen pt-32 md:pt-0 px-6 z-10 flex items-center justify-between">
        <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row justify-between items-center relative">
          <div className="w-full mb-16 md:mb-8 text-center lg:text-left">
            <h1 className="font-semibold font-sans text-center lg:text-left text-5xl lg:text-8xl mt-12 md:mt-0">
              Ooooops, nothing here...
            </h1>
            <RefreshButton styles="flex-shrink-0 font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200 px-2 py-3 w-36 mt-16 text-lg" />
          </div>
          <div className="block w-full mx-auto md:mt-0 relative max-w-md lg:max-w-2xl">
            <img src={Image} alt="Error" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Error;
