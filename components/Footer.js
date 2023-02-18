import Image from "next/image";
import footerLogo from "../public/images/logo.png";
import footerShape from "../public/images/footer-shape-left.png";
import footerShape1 from "../public/images/footer-shape-right.png";
import Link from "next/link";

function Footer() {
  return (
    <div>
      <footer id="footer" className="footer_area bg-black relative z-10">
        <div className="shape absolute left-0 top-0 opacity-5 h-full overflow-hidden w-1/3">
          <Image src={footerShape} alt="footer-logo" />
        </div>
        <div className="shape absolute right-0 top-0 opacity-5 h-full overflow-hidden w-1/3">
          <Image src={footerShape1} alt="footer-logo" />
        </div>
        <div className="container">
          <div className="footer_widget pb-40 pt-20">
            <div className="flex flex-row justify-center">
              <div className="basis-1/2 w-full md:w-1/2 lg:w-3/12">
                <div className="footer_about mt-13 mx-3">
                  <div className="footer_logo">
                    <Link href="#">
                      <Image src={footerLogo} alt="footer-logo" width={150} height={140} />
                    </Link>
                  </div>
                  <div className="footer_content mt-8">
                    <p className="text-white">
                      Our dedicated IT teams will give you the power of next generation software
                      development solutions to help your business stand out.
                    </p>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 w-full md:w-1/2 lg:w-5/12">
                <div className="footer_link_wrapper flex flex-wrap mx-3">
                  <div className="footer_link w-1/2 md:pl-13 mt-13">
                    <h2 className="footer_title text-xl font-semibold text-white">Quick Links</h2>
                    <ul className="link pt-4">
                      <li>
                        <Link href="#" className="text-white mt-4 hover:text-theme-color">
                          Company
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-white mt-4 hover:text-theme-color">
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-white mt-4 hover:text-theme-color">
                          About
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="footer_link w-1/2 md:pl-13 mt-13">
                    <h2 className="footer_title text-xl font-semibold text-white">Resources</h2>
                    <ul className="link pt-4">
                      <li>
                        <Link href="#" className="text-white mt-4 hover:text-theme-color">
                          Support
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-white mt-4 hover:text-theme-color">
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-white mt-4 hover:text-theme-color">
                          Terms
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 w-full md:w-2/3 lg:w-4/12">
                <div className="footer_subscribe mt-13 mx-3">
                  <h2 className="footer_title text-xl font-semibold text-white">Newsletter</h2>
                  <div className="subscribe_form text-right mt-9 relative">
                    <form action="#">
                      <input
                        type="text"
                        placeholder="Enter email"
                        className="w-full py-5 px-6 bg-white text-black rounded-full border-none"
                      />
                      <button className="main-btn subscribe-btn">Subscribe</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_copyright pt-3 pb-6 border-t-2 border-solid border-white border-opacity-10 sm:flex justify-between">
            <div className="footer_social pt-4 mx-3 text-center">
              <ul className="social flex justify-center sm:justify-start">
                <li className="mr-3">
                  <Link href=""></Link>
                </li>
                <li className="mr-3">
                  <Link href="#">
                    <svg
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                        fill="blue"
                      ></path>
                    </svg>
                  </Link>
                </li>
                <li className="mr-3">
                  <Link href="#">
                    <svg
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-twitter"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                        fill="blue"
                      ></path>
                    </svg>
                  </Link>
                </li>
                <li className="mr-3 text-white">
                  <Link href="">
                    <svg
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-twitte"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                        fill="blue"
                      ></path>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer_copyright_content pt-4 text-center">
              <p className="text-white text-sm font-semibold">
                Copyright © 2023, TwitSoft. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
