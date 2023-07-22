import React, { useState } from "react";

const Navbar = ({ links }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-50" : "w-[7rem]"
        } duration-300 w-52  h-screen p-1 pt-3 bg-slate-500 relative`}
      >
        <img
          src="/control.png"
          className={`absolute cursor-pointer top-9 w-8  bg-slate-50 border-slate-500 border-2 rounded-full -right-3 text-slate-50 ${
            !open && "rotate-180"
          } `}
          onClick={() => setOpen(!open)}
          alt=""
        />

        <div className="flex-col flex gap-5  ">
          <img
            src="public/Logistik-logo.png"
            className={`${!open ? "w-20" : "w-36"} cursor-pointer ${
              open && "rotate-[360deg]"
            } object-contain duration-500 rounded-full `}
            alt=""
          />
          <h1
            className={`cursor-pointer ${
              !open ? "text-sm " : "text-xl"
            } origin-left font-bold text-sm  text-slate font-serif duration-300 ${
              !open && "scale-0 "
            } text-md`}
          >
            JTJ LOGISTIC
          </h1>
        </div>

        <ul className="pt-6">
          {links.map((link, index) => (
            <li
              key={index}
              className={`text-slate-50 text-sm flex items-center gap-6 cursor-pointer ${index === 0 && 'bg-slate-400'} hover:bg-slate-200 rounded-md ${
                link.gap ? "mt-10" : "mt-10"
              }`}
            >
              <img
                src={`./public/navbarIcon/${link.src}.png`}
                className="w-12 "
                alt=""
              />
              <span
                className={`${
                  !open && "hidden"
                } origin-left text-lg duration-500`}
              >
                {link.titel}{" "}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className={`p7 text-2xl font-semibold flex-1 h-screen`}>
        home page
      </div>
    </div>
  );
};

export default Navbar;
