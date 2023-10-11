import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { WindowView, SmoothScroll } from "./ViewPort";

const NavDropdwn: React.FC = () => {
  const { y_top } = WindowView();
  const { pathname } = useLocation();
  let timer = 0;

  //NAVI WITH WIDTH 800px
  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>(".navi-link");

    if (pathname !== "/") {
      timer = 100;
    }

    //TOGGLE LINK ACTIVE
    links.forEach((link, i) => {
      link.addEventListener("click", () => {
        //SMOOTH SCROLL
        const targetId: any = link.getAttribute("data-name"); // Use a custom data attribute instead of "name"
        const duration = 1000;
        setTimeout(() => {
          SmoothScroll({ targetId, duration });
          timer = 0;
        }, timer);
      });
    });
  }, [pathname]);

  //TOGGLE NAV BACKGROUND COLOR
  useEffect(() => {
    const navigation = document.querySelector("nav");

    if (y_top > 0) {
      navigation?.classList.add("bg-light");
    } else {
      navigation?.classList.remove("bg-light");
    }
  }, [y_top]);

  return (
    <>
      <li><Link className="navi-link" to="/" data-name="monitor">Monitor</Link></li>
      <li><Link className="navi-link" to="/" data-name="approve">Approve</Link></li>
      <li><Link className="navi-link" to="/" data-name="report">Report</Link></li>
      <li><Link className="navi-link" to="/" data-name="directory">Directory</Link></li>
      <li><Link className="navi-link" to="/" data-name="apiintegration">API Integration</Link></li>
    </>
  );
};

export default NavDropdwn;
