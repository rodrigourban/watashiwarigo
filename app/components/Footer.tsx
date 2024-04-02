import Image from "next/image";
function Footer() {
  return (
    <footer className="">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center sm:justify-start ">
            <img
              src="/mylogo-white.png"
              height="64"
              width="64"
              alt="rigo logo"
            />
          </div>

          <p className="mt-4 text-center text-sm lg:text-lg text-primaryColor lg:mt-0 lg:text-right font-primaryFont">
            Want to hire? @{" "}
            <a
              href="mailto:rodrigourb@gmail.com?subject=Hiring&body=Hi, I want to talk about business..."
              className="text-lighest"
            >
              rodrigourb@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
