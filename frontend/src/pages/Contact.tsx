import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <section className="text-gray-600 relative font-bold ">
        <div className="container px-5 py-24 mx-auto flex flex-wrap sm:flex-nowrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative ">
            <iframe
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              style={{ filter: "grayscale(1) contrast(1,2) opacity(0.4)" }}
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d16214.602496406173!2d48.664793246888145!3d31.312028121756892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sfi!4v1725646681449!5m2!1sen!2sfi"
              loading="lazy"
            />
            <div className="bg-white relative flex flex-row py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6" dir="rtl">
                <h2 className="font-semibold text-gray-900 text-lg">آدرس</h2>
                <p className="mt-2 text-sm ">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0" dir="rtl">
                <h2 className="text-2xl font-semibold text-gray-900 tracking-widest text-xs">
                  Email
                </h2>
                <a href="" className="text-red-500 leading-relaxed ">
                  Kasraco@gmail.com
                </a>
                <h2 className="text-2xl font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  Contact Number
                </h2>
                <a href="" className="text-red-500 leading-relaxed ">
                  09359750102
                </a>
              </div>
            </div>
          </div>
          {/* Form part */}
          <div
            dir="rtl"
            className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-5 rounded-lg  shadow-xl shadow-slate-300"
          >
            <h2 className="text-gray-900 text-lg mb-1 font-medium ">
              با ما در تماس باشید
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که
            </p>
            <form>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  نام و نام خانوادگی
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-red-200 text-base text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  ایمیل
                </label>
                <input
                  type="text"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-red-200 text-base text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="contactnumber"
                  className="leading-7 text-sm text-gray-600"
                >
                  شماره تماس
                </label>
                <input
                  type="text"
                  name="contactnumber"
                  className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-red-200 text-base text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="contactnumber"
                  className="leading-7 text-sm text-gray-600"
                >
                  پیام شما
                </label>
                <textarea
                  type="text"
                  name="contactnumber"
                  className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-red-200 text-base text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-white bg-red-500 border-0 focus:outline-none hover:bg-red-600 rounded text-lg">
                ارسال
              </button>
            </form>
          </div>

          {/* Form part */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
