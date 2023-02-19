import Image from "next/image";
import footerLogo from "../public/images/logo.png";
import footerShape from "../public/images/footer-shape-left.png";
import footerShape1 from "../public/images/footer-shape-right.png";
import Link from "next/link";

function Footer() {
  return (
    <div>
      <footer id="footer" className="footer_area bg-slate-500 relative z-10">
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
                    <p className="text-white font-semibold">
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
                        <Link
                          href="#"
                          className="text-white font-semibold mt-4 hover:text-theme-color"
                        >
                          Company
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-white font-semibold mt-4 hover:text-theme-color"
                        >
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-white font-semibold mt-4 hover:text-theme-color"
                        >
                          About
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="footer_link w-1/2 md:pl-13 mt-13">
                    <h2 className="footer_title text-xl font-semibold text-white">Resources</h2>
                    <ul className="link pt-4">
                      <li>
                        <Link
                          href="#"
                          className="text-white font-semibold mt-4 hover:text-theme-color"
                        >
                          Support
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-white font-semibold mt-4 hover:text-theme-color"
                        >
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-white font-semibold mt-4 hover:text-theme-color"
                        >
                          Terms
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 w-full md:w-2/3 lg:w-4/12">
                <div className="footer_subscribe mt-13 mx-3">
                  <h2 className="footer_title text-xl font-semibold text-white">Our Address</h2>
                  <div className="address  mt-9 relative">
                    <p className="text-white font-semibold mt-4 hover:text-theme-color">
                      Email: twitesoft@gmail.com
                    </p>
                    <p className="text-white font-semibold mt-4 hover:text-theme-color">
                      Phone: +8801914-682468
                    </p>
                    <p className="text-white font-semibold mt-4 hover:text-theme-color">
                      Address: H# 469, R# 07, Avenue# 6, Mirpur-12 DOHS, Dhaka - 1216
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_copyright pt-3 pb-6 border-t-2 border-solid border-white border-opacity-10 sm:flex justify-between">
            <div className="footer_social pt-4 mx-3 text-center">
              <ul className="social flex justify-center sm:justify-start">
                <li className="mr-3">
                  <Link href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                    </svg>
                  </Link>
                </li>
                <li className="mr-3">
                  <Link href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </Link>
                </li>
                <li className="mr-3 text-white">
                  <Link href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.5 8.778c-.441.196-.916.328-1.414.388.509-.305.898-.787 1.083-1.362-.476.282-1.003.487-1.564.597-.448-.479-1.089-.778-1.796-.778-1.59 0-2.758 1.483-2.399 3.023-2.045-.103-3.86-1.083-5.074-2.572-.645 1.106-.334 2.554.762 3.287-.403-.013-.782-.124-1.114-.308-.027 1.14.791 2.207 1.975 2.445-.346.094-.726.116-1.112.042.313.978 1.224 1.689 2.3 1.709-1.037.812-2.34 1.175-3.647 1.021 1.09.699 2.383 1.106 3.773 1.106 4.572 0 7.154-3.861 6.998-7.324.482-.346.899-.78 1.229-1.274z" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer_copyright_content pt-4 text-center">
              <p className="text-white text-sm font-semibold">
                Copyright © 2023, TwiteSoft. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
