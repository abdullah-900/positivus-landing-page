import { e as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderHead, l as renderComponent, n as renderSlot, f as createAstro, o as renderScript } from '../chunks/astro/server_CMrstWRS.mjs';
import 'kleur/colors';
/* empty css                                 */
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import 'clsx';
export { renderers } from '../renderers.mjs';

const logo = "/_astro/logo.DKib_42g.svg";

const menuBurger = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3crect%20y='11'%20width='24'%20height='2'%20rx='1'/%3e%3crect%20y='4'%20width='24'%20height='2'%20rx='1'/%3e%3crect%20y='18'%20width='24'%20height='2'%20rx='1'/%3e%3c/svg%3e";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  function toggleMenu() {
    setMenuVisible(!menuVisible);
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { className: "flex items-center   p-8 xl:p-12 xl:px-25 lg:text-[1.25rem] lg:leading-[1.75rem] mb-8  lg:mb-[4.375rem] ", children: /* @__PURE__ */ jsxs("nav", { className: " flex items-center justify-between w-full ", children: [
      /* @__PURE__ */ jsx("img", { className: "w-[9.625rem] h-[1.5625rem] lg:w-[13.75rem] lg:h-[2.25rem]", src: logo, alt: "Logo" }),
      /* @__PURE__ */ jsxs("div", { className: "flex xl:w-full justify-end gap-10 items-center", children: [
        /* @__PURE__ */ jsxs("ul", { className: "text-alltext text-base hidden lg:flex gap-10 ", children: [
          /* @__PURE__ */ jsx("li", { className: "cursor-pointer", children: /* @__PURE__ */ jsx("a", { href: "#About us", children: "About us" }) }),
          /* @__PURE__ */ jsx("li", { className: "cursor-pointer", children: /* @__PURE__ */ jsx("a", { href: "#Services", children: "Services" }) }),
          /* @__PURE__ */ jsx("li", { className: "cursor-pointer", children: /* @__PURE__ */ jsx("a", { href: "#Use Cases", children: "Use Cases" }) }),
          /* @__PURE__ */ jsx("li", { className: "cursor-pointer", children: /* @__PURE__ */ jsx("a", { href: "#Pricing", children: "Pricing" }) }),
          /* @__PURE__ */ jsx("li", { className: "cursor-pointer", children: /* @__PURE__ */ jsx("a", { href: "#Blog", children: "Blog" }) })
        ] }),
        /* @__PURE__ */ jsx("button", { className: "hidden pt-5 pb-5 pl-9 pr-9 lg:block cursor-pointer text-base  border rounded-[.875rem] text-buttons border-buttons", type: "button", children: "Request a quote" })
      ] }),
      /* @__PURE__ */ jsx("button", { type: "button", className: "cursor-pointer", children: /* @__PURE__ */ jsx("img", { onClick: toggleMenu, className: "block lg:hidden w-[2.1875rem] h-[2.1875rem]", src: menuBurger, alt: "menu-burger" }) })
    ] }) }),
    menuVisible && /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-10 justify-center items-center p-10 lg:hidden", children: [
      /* @__PURE__ */ jsxs("ul", { className: "text-alltext text-base flex flex-col justify-center items-center gap-10 ", children: [
        /* @__PURE__ */ jsx("li", { onClick: toggleMenu, className: "cursor-pointer", children: /* @__PURE__ */ jsx("a", { href: "#About us", children: "About us" }) }),
        /* @__PURE__ */ jsx("li", { onClick: toggleMenu, className: "cursor-pointer", children: /* @__PURE__ */ jsx("a", { href: "#Services", children: "Services" }) }),
        /* @__PURE__ */ jsx("li", { onClick: toggleMenu, className: "cursor-pointer", children: /* @__PURE__ */ jsx("a", { href: "#Use Cases", children: "Use Cases" }) }),
        /* @__PURE__ */ jsx("li", { onClick: toggleMenu, className: "cursor-pointer", children: /* @__PURE__ */ jsx("a", { href: "#Pricing", children: "Pricing" }) }),
        /* @__PURE__ */ jsx("li", { onClick: toggleMenu, className: "cursor-pointer", children: /* @__PURE__ */ jsx("a", { href: "#Blog", children: "Blog" }) })
      ] }),
      /* @__PURE__ */ jsx("button", { className: "cursor-pointer pt-5 pb-5 pl-9 pr-9 text-base  border rounded-[.875rem] text-buttons border-buttons", type: "button", children: "Request a quote" })
    ] })
  ] });
};

const whiteLogo = "/_astro/logo-white.By7PxX5s.svg";

const linkedin = "data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='15'%20cy='15'%20r='15'%20fill='white'/%3e%3cpath%20d='M8.22178%2022.0586H11.3059V12.0742H8.22178V22.0586Z'%20fill='black'/%3e%3cpath%20d='M7.94141%208.88672C7.94141%209.87109%208.7358%2010.668%209.76384%2010.668C10.7451%2010.668%2011.5395%209.87109%2011.5395%208.88672C11.5395%207.90234%2010.7451%207.05859%209.76384%207.05859C8.7358%207.05859%207.94141%207.90234%207.94141%208.88672Z'%20fill='black'/%3e%3cpath%20d='M19.8106%2022.0586H22.9414V16.5742C22.9414%2013.9023%2022.3339%2011.793%2019.2031%2011.793C17.7078%2011.793%2016.6797%2012.6367%2016.2592%2013.4336H16.2124V12.0742H13.2685V22.0586H16.3526V17.1367C16.3526%2015.8242%2016.5863%2014.5586%2018.2218%2014.5586C19.8106%2014.5586%2019.8106%2016.0586%2019.8106%2017.1836V22.0586Z'%20fill='black'/%3e%3c/svg%3e";

const facebook = "data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M30%2015.0913C30%206.75456%2023.2863%200%2015%200C6.71371%200%200%206.75456%200%2015.0913C0%2022.6369%205.44355%2028.9047%2012.6411%2030V19.4726H8.83064V15.0913H12.6411V11.8053C12.6411%208.03245%2014.879%205.90264%2018.2661%205.90264C19.9597%205.90264%2021.6532%206.2069%2021.6532%206.2069V9.91886H19.7782C17.9032%209.91886%2017.2984%2011.0751%2017.2984%2012.2921V15.0913H21.4718L20.8065%2019.4726H17.2984V30C24.496%2028.9047%2030%2022.6369%2030%2015.0913Z'%20fill='white'/%3e%3c/svg%3e";

const twitter = "data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='15'%20cy='15'%20r='15'%20fill='white'/%3e%3cpath%20d='M21.9961%2011.4915C22.6854%2010.9745%2023.3058%2010.3541%2023.7884%209.63028C23.168%209.90602%2022.4442%2010.1128%2021.7204%2010.1818C22.4786%209.73369%2023.0301%209.04435%2023.3058%208.18267C22.6165%208.59628%2021.8238%208.90648%2021.031%209.07881C20.3417%208.35501%2019.4111%207.94141%2018.3771%207.94141C16.378%207.94141%2014.758%209.56135%2014.758%2011.5604C14.758%2011.8362%2014.7925%2012.1119%2014.8614%2012.3876C11.8628%2012.2153%209.1744%2010.7677%207.38212%208.59628C7.07192%209.11328%206.89959%209.73369%206.89959%2010.423C6.89959%2011.6638%207.51999%2012.7668%208.51953%2013.4216C7.93359%2013.3872%207.34766%2013.2493%206.86512%2012.9736V13.008C6.86512%2014.7659%208.10593%2016.2135%209.76034%2016.5581C9.48461%2016.6271%209.13994%2016.696%208.82973%2016.696C8.58847%2016.696%208.38166%2016.6615%208.1404%2016.6271C8.58847%2018.0747%209.93267%2019.1087%2011.5182%2019.1432C10.2773%2020.1082%208.72633%2020.6942%207.03745%2020.6942C6.72725%2020.6942%206.45152%2020.6597%206.17578%2020.6252C7.76126%2021.6592%209.65694%2022.2452%2011.725%2022.2452C18.3771%2022.2452%2021.9961%2016.7649%2021.9961%2011.974C21.9961%2011.8017%2021.9961%2011.6638%2021.9961%2011.4915Z'%20fill='black'/%3e%3c/svg%3e";

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="w-full xl:px-[6.25rem] "> <div class="flex flex-col gap-[3.125rem] xl:rounded-tl-[2.8125rem] xl:rounded-tr-[2.8125rem]  xl:px-[3.75rem] pt-[3.4375rem] pb-[3.125rem] w-full bg-primary text-text-light"> <div class="flex flex-col xl:flex-row items-center justify-center gap-10 lg:gap-12 xl:gap-0 "> <img class="w-[9.625rem] h-[1.5625rem] lg:w-[11.25rem] lg:h-[1.8125rem]"${addAttribute(whiteLogo, "src")} alt="Positivus Logo"> <nav class="w-full flex justify-center items-center" aria-label="Footer Navigation"> <ul class="flex flex-col lg:flex-row w-full xl:w-fit justify-center items-center gap-4 lg:gap-10"> <li class="cursor-pointer"><a href="#About us">About us</a></li> <li class="cursor-pointer"><a href="#Services">Services</a></li> <li class="cursor-pointer"><a href="#Use Cases">Use Cases</a></li> <li class="cursor-pointer"><a href="#Pricing">Pricing</a></li> <li class="cursor-pointer"><a href="#Blog">Blog</a></li> </ul> </nav> <div class="flex gap-5"> <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn"> <img class="w-[1.875rem] h-[1.875rem]"${addAttribute(linkedin, "src")} alt="linkedin"> </a> <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook"> <img class="w-[1.875rem] h-[1.875rem]"${addAttribute(facebook, "src")} alt="Facebook Icon"> </a> <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter"> <img class="w-[1.875rem] h-[1.875rem]"${addAttribute(twitter, "src")} alt="Twitter Icon"> </a> </div> </div> <div class="flex flex-col items-center justify-center gap-7 lg:gap-20 xl:justify-between xl:flex-row"> <section class="flex flex-col items-center justify-center gap-7 w-full"> <h4 class="w-fit px-2 rounded-[7px]  bg-secondary text-text">Contact us:</h4> <address class="flex flex-col w-full items-center justify-center gap-2.5 lg:gap-5"> <p>Email: info@positivus.com</p> <p>Phone: 555-567-8901</p> <div class="flex flex-col w-full items-center justify-center"> <p>Address: 1234 Main St</p> <p>Moonstone City, Stardust State 12345</p> </div> </address> </section> <section class="flex flex-col gap-5 lg:flex-row bg-subcripebg rounded-[.875rem] py-[3.625rem] px-10 "> <input class="py-[1.375rem] border border-text-light rounded-[.875rem] px-[2.1875rem] " placeholder="Email" type="email"> <button class="py-5 px-9 text-[1.25rem] leading-[1.75rem] text-text bg-secondary rounded-[.875rem]">Subscribe to news</button> </section> </div> <hr> <div class="flex flex-col xl:flex-row w-full items-center justify-center gap-5 xl:gap-10"> <p>© 2023 Positivus. All Rights Reserved.</p> <p>Privacy Policy</p> </div> </div> </footer>`;
}, "C:/Users/abdal/Documents/positivus-landing-page/src/components/Footer.astro", void 0);

const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Positivus</title>${renderHead()}</head> <body class="font-regular font-space-grotesk text-[18px]"> ${renderComponent($$result, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/abdal/Documents/positivus-landing-page/src/components/Header.jsx", "client:component-export": "default" })} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/abdal/Documents/positivus-landing-page/src/layouts/MainLayout.astro", void 0);

const hero = "/_astro/hero.CNn3e4l1.png";

const $$Astro$5 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Button;
  const { content, className, type = "button" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(type, "type")}${addAttribute(`cursor-pointer rounded-[.875rem] px-6 py-3.5 text-[20px] leading-[28px] lg:px-[35px] lg:py-5 text-text-light bg-primary ${className}`, "class")}> ${content} </button>`;
}, "C:/Users/abdal/Documents/positivus-landing-page/src/components/Button.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- mobile view -->${maybeRenderHead()}<section class="lg:hidden gap-8 xl:gap-0 p-8  flex flex-col items-center justify-center lg:flex-row mb-8  lg:mb-[4.375rem]"> <h1>Navigating the digital landscape for success</h1> <img class="md:w-[37.5rem] md:h-[32.1875rem]"${addAttribute(hero, "src")} alt="hero illustraion"> <p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p> ${renderComponent($$result, "Button", $$Button, { "content": "Book a consultation" })} </section> <!-- tablet , Desktop view --> <section class="hidden xl:px-25 lg:px-8 lg:flex flex-col items-center justify-center lg:flex-row mb-8  lg:mb-[4.375rem]"> <div class="flex items-start justify-start flex-col gap-[2.1875rem]"> <h1>Navigating the digital landscape for success</h1> <img class="md:w-[37.5rem] md:h-[32.1875rem] md:hidden"${addAttribute(hero, "src")} alt="hero illustraion"> <p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p> ${renderComponent($$result, "Button", $$Button, { "content": "Book a consultation" })} </div> <img class="hidden md:block md:w-[37.5rem] md:h-[32.1875rem]"${addAttribute(hero, "src")} alt="hero illustraion"> </section>`;
}, "C:/Users/abdal/Documents/positivus-landing-page/src/components/Hero.astro", void 0);

const amazon = "/_astro/amazon.CY8M3Zdq.svg";

const dribble = "/_astro/dribble.CGRRZydW.svg";

const hubspot = "/_astro/hubspot.B0UgSLoA.svg";

const notion = "data:image/svg+xml,%3csvg%20width='147'%20height='48'%20viewBox='0%200%20147%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20style='mix-blend-mode:luminosity'%20clip-path='url(%23clip0_333_1361)'%3e%3cpath%20d='M51.525%2034.7749V20.2199H51.8176L63.7715%2034.7749H67.5333V13.4006H63.3536V27.919H63.061L51.1071%2013.4006H47.3453V34.7749H51.525ZM79.3618%2035.1049C84.879%2035.1049%2088.2646%2031.9519%2088.2646%2026.6725C88.2646%2021.4297%2084.879%2018.2401%2079.3618%2018.2401C73.8864%2018.2401%2070.4591%2021.4297%2070.4591%2026.6725C70.5009%2031.9519%2073.8446%2035.1049%2079.3618%2035.1049ZM79.3618%2032.0252C76.436%2032.0252%2074.7642%2030.0821%2074.7642%2026.6725C74.7642%2023.2995%2076.436%2021.3198%2079.3618%2021.3198C82.2876%2021.3198%2083.9595%2023.2995%2083.9595%2026.6725C83.9595%2030.0821%2082.2876%2032.0252%2079.3618%2032.0252ZM92.0681%2014.6105V18.68H89.1423V21.6131H92.0681V30.4487C92.0681%2033.6017%2093.74%2034.8483%2098.0033%2034.8483C98.7974%2034.8483%2099.5916%2034.7749%20100.219%2034.6649V31.8053C99.717%2031.8419%2099.3826%2031.8786%2098.7974%2031.8786C97.042%2031.8786%2096.2478%2031.182%2096.2478%2029.5688V21.6131H100.219V18.68H96.2478V14.6105H92.0681ZM102.726%2034.7749H106.906V18.5701H102.726V34.7749ZM104.816%2015.8937C106.196%2015.8937%20107.324%2014.9038%20107.324%2013.6939C107.324%2012.4474%20106.196%2011.4575%20104.816%2011.4575C103.437%2011.4575%20102.308%2012.4474%20102.308%2013.6939C102.308%2014.9038%20103.437%2015.8937%20104.816%2015.8937ZM118.358%2035.1049C123.876%2035.1049%20127.261%2031.9519%20127.261%2026.6725C127.261%2021.4297%20123.876%2018.2401%20118.358%2018.2401C112.883%2018.2401%20109.456%2021.4297%20109.456%2026.6725C109.456%2031.9519%20112.799%2035.1049%20118.358%2035.1049ZM118.358%2032.0252C115.433%2032.0252%20113.761%2030.0821%20113.761%2026.6725C113.761%2023.2995%20115.433%2021.3198%20118.358%2021.3198C121.242%2021.3198%20122.956%2023.2995%20122.956%2026.6725C122.914%2030.0821%20121.242%2032.0252%20118.358%2032.0252ZM129.727%2034.7749H133.907V25.3526C133.907%2022.9696%20135.495%2021.4664%20137.961%2021.4664C140.511%2021.4664%20141.681%2022.7129%20141.681%2025.1693V34.7749H145.861V24.2894C145.861%2020.4032%20143.604%2018.2401%20139.508%2018.2401C136.749%2018.2401%20134.91%2019.34%20134.032%2021.1731H133.74V18.5701H129.685C129.727%2018.5701%20129.727%2034.7749%20129.727%2034.7749Z'%20fill='black'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M7.26912%2012.0326C8.48563%2012.9024%208.92564%2012.8337%2011.2034%2012.6964L32.6605%2011.5519C33.1264%2011.5519%2032.7381%2011.1399%2032.5828%2011.0941L29.011%208.82806C28.338%208.37028%2027.4062%207.82093%2025.672%207.95826L4.91376%209.30874C4.16315%209.37741%204.00785%209.72075%204.31844%209.97254L7.26912%2012.0326ZM8.56328%2016.4502V36.4098C8.56328%2037.4857%209.15859%2037.8748%2010.5304%2037.8061L34.1099%2036.593C35.4818%2036.5243%2035.637%2035.7918%2035.637%2034.922V15.0998C35.637%2014.23%2035.2488%2013.7493%2034.4205%2013.818L9.77979%2015.0998C8.87388%2015.1684%208.56328%2015.5804%208.56328%2016.4502ZM31.8322%2017.5261C31.9875%2018.1212%2031.8322%2018.7392%2031.1593%2018.8079L30.0204%2019.0139V33.7547C29.0368%2034.2125%2028.1309%2034.4871%2027.3544%2034.4871C26.1379%2034.4871%2025.8273%2034.1438%2024.9214%2033.1367L17.493%2022.8135V32.7933L19.8483%2033.2511C19.8483%2033.2511%2019.8483%2034.4642%2017.9589%2034.4642L12.7305%2034.7389C12.5752%2034.4642%2012.7305%2033.8005%2013.2481%2033.6631L14.6199%2033.3198V20.1355L12.7305%2019.9981C12.5752%2019.403%2012.9634%2018.5332%2014.0246%2018.4645L19.6413%2018.1212L27.3803%2028.5588V19.3343L25.4132%2019.1283C25.2579%2018.3959%2025.8791%2017.8465%2026.6297%2017.7778L31.8322%2017.5261ZM3.17958%207.47759L24.792%206.08133C27.4321%205.87532%2028.1309%206.01266%2029.7875%207.08847L36.6724%2011.3688C37.8112%2012.1013%2038.1995%2012.3073%2038.1995%2013.1084V36.6159C38.1995%2038.0808%2037.6042%2038.9506%2035.4817%2039.0879L10.401%2040.4384C8.79623%2040.5071%208.04562%2040.3011%207.21736%2039.3626L2.11838%2033.5258C1.21247%2032.45%200.824219%2031.6488%200.824219%2030.7104V9.81231C0.824219%208.59917%201.44541%207.61492%203.17958%207.47759Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_333_1361'%3e%3crect%20width='145.551'%20height='48'%20fill='white'%20transform='translate(0.824219)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";

const netflix = "data:image/svg+xml,%3csvg%20width='126'%20height='30'%20viewBox='0%200%20126%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.4973%2028.0663C15.6132%2028.3595%2013.696%2028.4474%2011.7127%2028.6816L5.66337%2012.9786V29.3555C3.77927%2029.5313%202.06042%2029.7656%200.275391%2030V0H5.29998L12.1754%2017.0217V0H17.4973V28.0663ZM27.9099%2010.9863C29.9595%2010.9863%2033.0997%2010.8984%2034.9838%2010.8984V15.5858C32.6368%2015.5858%2029.8933%2015.5858%2027.9099%2015.6737V22.6465C31.0172%2022.4708%2034.1245%2022.2362%2037.2646%2022.1483V26.6597L22.6209%2027.6854V0H37.2646V4.68751H27.9099V10.9863ZM56.9327%204.68762H51.4455V26.2501C49.6605%2026.2501%2047.8754%2026.2501%2046.1568%2026.3085V4.68762H40.6696V0H56.9329L56.9327%204.68762ZM65.5271%2010.6642H72.7664V15.3516H65.5271V25.9864H60.337V0H75.1133V4.68751H65.5271V10.6642ZM83.7077%2021.8848C86.7158%2021.9432%2089.7568%2022.1486%2092.6989%2022.2948V26.9238C87.972%2026.66%2083.245%2026.3966%2078.4189%2026.3085V0H83.7077V21.8848ZM97.1613%2027.2461C98.8471%2027.3341%20100.632%2027.422%20102.351%2027.5975V0H97.1613V27.2461ZM125.523%200L118.813%2014.2676L125.523%2030C123.54%2029.7656%20121.556%2029.4433%20119.573%2029.1503L115.772%2020.4786L111.905%2028.4474C109.987%2028.1542%20108.136%2028.0663%20106.219%2027.8319L113.028%2014.0917L106.88%200H112.565L116.036%207.88088L119.738%200H125.523Z'%20fill='%23575757'/%3e%3c/svg%3e";

const zoom = "data:image/svg+xml,%3csvg%20width='111'%20height='22'%20viewBox='0%200%20111%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M90.4746%206.59723C90.8968%207.24286%2091.035%207.97743%2091.0806%208.80324L91.1405%209.90393V17.6007L91.2018%2018.7025C91.3243%2020.502%2092.8216%2021.8325%2094.8675%2021.9457L96.1042%2022V9.90393L96.1655%208.80324C96.2163%207.98667%2096.3531%207.23824%2096.7819%206.58799C97.2188%205.92103%2097.8459%205.36767%2098.6004%204.98348C99.3549%204.59928%20100.21%204.39777%20101.08%204.39918C101.95%204.40058%20102.805%204.60485%20103.558%204.99148C104.311%205.37811%20104.936%205.93348%20105.37%206.60185C105.792%207.24748%20105.924%207.99591%20105.974%208.80324L106.036%209.90046V17.6007L106.097%2018.7025C106.225%2020.5112%20107.71%2021.8418%20109.763%2021.9457L110.999%2022V8.80324C110.999%206.46969%20109.954%204.23166%20108.092%202.58127C106.231%200.930875%20103.706%200.00323181%20101.073%200.00231305C99.664%200.000995875%2098.2707%200.266231%2096.9863%200.780298C95.702%201.29437%2094.5563%202.04543%2093.6256%202.98331C92.6946%202.0458%2091.5488%201.29492%2090.2646%200.780697C88.9804%200.266477%2087.5873%200.000728203%2086.1781%200.00115785C84.1165%200.00115785%2082.2034%200.555547%2080.6188%201.51302C79.6519%200.556701%2077.4886%200.00115785%2076.2467%200.00115785V22L77.4886%2021.9457C79.5659%2021.8244%2081.0671%2020.5297%2081.1479%2018.7025L81.2143%2017.6007V9.90393L81.2756%208.80324C81.3277%207.97281%2081.458%207.24286%2081.8816%206.59261C82.3188%205.92606%2082.9457%205.37284%2083.6996%204.98817C84.4536%204.60351%2085.3082%204.40086%2086.1781%204.40046C87.0487%204.40063%2087.9039%204.60368%2088.658%204.98925C89.4121%205.37482%2090.0386%205.92935%2090.4746%206.59723ZM5.50475%2021.9469L6.74666%2022H25.3623L25.301%2020.9028C25.1329%2019.0941%2023.6877%2017.7728%2021.6405%2017.655L20.3985%2017.6007H9.23048L24.1204%204.39931L24.0591%203.30324C23.9627%201.47606%2022.4562%200.155925%2020.3985%200.0554414L19.1566%200.00577766L0.541016%200.00115785L0.602264%201.10185C0.765159%202.89322%202.23121%204.24223%204.26153%204.34618L5.50475%204.40046H16.6728L1.78293%2017.6018L1.84417%2018.7025C1.96667%2020.5159%203.44315%2021.8291%205.50475%2021.9457V21.9469ZM71.3742%203.22123C72.5269%204.2426%2073.4412%205.45521%2074.065%206.7898C74.6889%208.1244%2075.0099%209.55484%2075.0099%2010.9994C75.0099%2012.444%2074.6889%2013.8744%2074.065%2015.209C73.4412%2016.5436%2072.5269%2017.7562%2071.3742%2018.7776C69.0455%2020.8399%2065.8881%2021.9983%2062.5961%2021.9983C59.3041%2021.9983%2056.1468%2020.8399%2053.8181%2018.7776C48.9716%2014.4823%2048.9716%207.51659%2053.8181%203.22123C54.9696%202.20021%2056.3369%201.39022%2057.8417%200.837517C59.3465%200.284816%2060.9594%200.000228005%2062.5883%202.65159e-06C64.2199%20-0.00100129%2065.8356%200.283085%2067.3432%200.836013C68.8508%201.38894%2070.2206%202.19986%2071.3742%203.22239V3.22123ZM67.8622%206.33621C69.2581%207.57436%2070.0423%209.25311%2070.0423%2011.0035C70.0423%2012.7538%2069.2581%2014.4326%2067.8622%2015.6707C66.4652%2016.908%2064.5711%2017.6029%2062.5961%2017.6029C60.6212%2017.6029%2058.7271%2016.908%2057.3301%2015.6707C55.9341%2014.4326%2055.15%2012.7538%2055.15%2011.0035C55.15%209.25311%2055.9341%207.57436%2057.3301%206.33621C58.7271%205.09898%2060.6212%204.404%2062.5961%204.404C64.5711%204.404%2066.4652%205.09898%2067.8622%206.33621ZM36.5408%202.65159e-06C38.1698%200.000379687%2039.7827%200.28515%2041.2875%200.83805C42.7924%201.39095%2044.1595%202.20115%2045.311%203.22239C50.1588%207.51659%2050.1588%2014.4834%2045.311%2018.7776C42.9823%2020.8399%2039.825%2021.9983%2036.533%2021.9983C33.2409%2021.9983%2030.0836%2020.8399%2027.7549%2018.7776C22.9084%2014.4823%2022.9084%207.51659%2027.7549%203.22123C28.9065%202.20021%2030.2737%201.39022%2031.7785%200.837517C33.2833%200.284816%2034.8962%200.000228005%2036.5251%202.65159e-06H36.5408ZM41.799%206.3339C43.1954%207.5721%2043.9798%209.25109%2043.9798%2011.0017C43.9798%2012.7524%2043.1954%2014.4314%2041.799%2015.6696C40.402%2016.9068%2038.5079%2017.6018%2036.533%2017.6018C34.558%2017.6018%2032.6639%2016.9068%2031.2669%2015.6696C29.8709%2014.4314%2029.0868%2012.7527%2029.0868%2011.0023C29.0868%209.25195%2029.8709%207.57321%2031.2669%206.33505C32.6639%205.09783%2034.558%204.40284%2036.533%204.40284C38.5079%204.40284%2040.402%205.09783%2041.799%206.33505V6.3339Z'%20fill='%237C7C7C'/%3e%3c/svg%3e";

const $$Brands = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="grid grid-cols-3 place-items-center xl:flex p-5  xl:px-25 lg:p-10  xl:mb-[8.75rem] items-center gap-6 lg:flex-row justify-between mb-8  lg:mb-[4.375rem]"> <img class="w-[7.75rem] h-12"${addAttribute(amazon, "src")} alt="amazon image"> <img class="w-[7.875rem] h-12"${addAttribute(dribble, "src")} alt="dribble image"> <img class="w-32 h-12"${addAttribute(hubspot, "src")} alt="hubspot image"> <img class="w-[9.0625rem] h-12"${addAttribute(notion, "src")} alt="notion image"> <img class="w-[7.8125rem] h-12"${addAttribute(netflix, "src")} alt="netflix image"> <img class="w-[6.875rem] h-12"${addAttribute(zoom, "src")} alt="zoom image"> </section>`;
}, "C:/Users/abdal/Documents/positivus-landing-page/src/components/Brands.astro", void 0);

const $$Astro$4 = createAstro();
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { firstTitle, secondTitle, bgcolor, textbgcolor, textColor, icon, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`justify-around shadow-base w-full p-[50px] md:flex items-center rounded-[2.8125rem] border ${bgcolor} border-primary`, "class")}> <div class="flex flex-col  items-start justify-center gap-10 xl:gap-[5.8125rem]"> <div class="text-[1.875rem] font-medium "> <h3${addAttribute(`${textbgcolor} rounded-[.4375rem]  w-fit px-[.4375rem]`, "class")}>${firstTitle}</h3> <h3${addAttribute(`${textbgcolor} rounded-[.4375rem]  w-fit px-[.4375rem]`, "class")}>${secondTitle}</h3> </div> <div class="flex items-center  justify-between w-full md:w-[10rem] md:justify-around"> <img class="w-[2.5625rem] h-[2.5625rem] self-end md:self-center"${addAttribute(icon, "src")} alt="learn more icon"> <p${addAttribute(`hidden md:block ${textColor}`, "class")}>Learn more</p> <img class="w-[8.9rem] h-[7rem] md:w-[13.125rem] md:h-[10.375rem]  md:hidden"${addAttribute(image, "src")} alt="tokyo magnifier illustraion"> </div> </div> <img class="md:w-[13.125rem] md:h-[10.375rem] hidden md:block"${addAttribute(image, "src")} alt="tokyo magnifier illustraion"> </div>`;
}, "C:/Users/abdal/Documents/positivus-landing-page/src/components/ServiceCard.astro", void 0);

const blacklinkIcon = "data:image/svg+xml,%3csvg%20width='41'%20height='41'%20viewBox='0%200%2041%2041'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='20.5'%20cy='20.5'%20r='20.5'%20fill='%23191A23'/%3e%3cpath%20d='M11.25%2024.701C10.5326%2025.1152%2010.2867%2026.0326%2010.701%2026.75C11.1152%2027.4674%2012.0326%2027.7133%2012.75%2027.299L11.25%2024.701ZM30.7694%2016.3882C30.9838%2015.588%2030.5089%2014.7655%2029.7087%2014.5511L16.6687%2011.0571C15.8685%2010.8426%2015.046%2011.3175%2014.8316%2012.1177C14.6172%2012.9179%2015.0921%2013.7404%2015.8923%2013.9548L27.4834%2017.0607L24.3776%2028.6518C24.1631%2029.452%2024.638%2030.2745%2025.4382%2030.4889C26.2384%2030.7033%2027.0609%2030.2284%2027.2753%2029.4282L30.7694%2016.3882ZM12.75%2027.299L30.0705%2017.299L28.5705%2014.701L11.25%2024.701L12.75%2027.299Z'%20fill='%23B9FF66'/%3e%3c/svg%3e";

const whitelinkIcon = "data:image/svg+xml,%3csvg%20width='41'%20height='41'%20viewBox='0%200%2041%2041'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='20.5'%20cy='20.5'%20r='20.5'%20fill='white'/%3e%3cpath%20d='M11.25%2024.701C10.5326%2025.1152%2010.2867%2026.0326%2010.701%2026.75C11.1152%2027.4674%2012.0326%2027.7133%2012.75%2027.299L11.25%2024.701ZM30.7694%2016.3882C30.9838%2015.588%2030.5089%2014.7655%2029.7087%2014.5511L16.6687%2011.0571C15.8685%2010.8426%2015.046%2011.3175%2014.8316%2012.1177C14.6172%2012.9179%2015.0921%2013.7404%2015.8923%2013.9548L27.4834%2017.0607L24.3776%2028.6518C24.1631%2029.452%2024.638%2030.2745%2025.4382%2030.4889C26.2384%2030.7033%2027.0609%2030.2284%2027.2753%2029.4282L30.7694%2016.3882ZM12.75%2027.299L30.0705%2017.299L28.5705%2014.701L11.25%2024.701L12.75%2027.299Z'%20fill='black'/%3e%3c/svg%3e";

const search = "/_astro/tokyo-magnifier.DU2lIYTA.svg";

const ad = "/_astro/ad.Cx_qSgKa.svg";

const social = "/_astro/social.D3PW8IzC.svg";

const email = "/_astro/email.ChJ4VTlE.svg";

const content = "/_astro/content.DV1VElsy.svg";

const analysis = "/_astro/analysis.C-QxJyev.svg";

const $$Astro$3 = createAstro();
const $$SectionHeading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SectionHeading;
  const { heading, content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col md:flex-row gap-7 lg:gap-10  items-center justify-center md:px-15 lg:px-0 p-5 xl:mb-20 mb-7"> <h2 class="px-1 bg-secondary whitespace-nowrap">${heading}</h2> <p class="text-center">${content}</p> </div>`;
}, "C:/Users/abdal/Documents/positivus-landing-page/src/components/SectionHeading.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="xl:px-25  p-5 w-full flex flex-col items-center justify-center gap-10  xl:gap-20 xl:mb-25 mb-7 md:mb-14"> ${renderComponent($$result, "SectionHeading", $$SectionHeading, { "heading": "Services", "content": "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:" })} <div class="lg:grid lg:grid-cols-2 lg:gap-5 flex flex-col gap-5"> ${renderComponent($$result, "ServiceCard", $$ServiceCard, { "firstTitle": "Search engine", "secondTitle": "optimization", "bgcolor": "bg-background", "textbgcolor": "bg-secondary", "textColor": "text-text", "icon": blacklinkIcon, "image": search })} ${renderComponent($$result, "ServiceCard", $$ServiceCard, { "firstTitle": "Pay-per-click", "secondTitle": "advertising", "bgcolor": "bg-secondary", "textbgcolor": "bg-text-light", "textColor": "text-text", "icon": blacklinkIcon, "image": ad })} ${renderComponent($$result, "ServiceCard", $$ServiceCard, { "firstTitle": "Social Media", "secondTitle": "Marketing", "bgcolor": "bg-primary", "textbgcolor": "bg-text-light", "textColor": "text-text-light", "icon": whitelinkIcon, "image": social })} ${renderComponent($$result, "ServiceCard", $$ServiceCard, { "firstTitle": "Email", "secondTitle": "Marketing", "bgcolor": "bg-background", "textbgcolor": "bg-secondary", "textColor": "text-text", "icon": blacklinkIcon, "image": email })} ${renderComponent($$result, "ServiceCard", $$ServiceCard, { "firstTitle": "Content", "secondTitle": "Creation", "bgcolor": "bg-secondary", "textbgcolor": "bg-text-light", "textColor": "text-text", "icon": blacklinkIcon, "image": content })} ${renderComponent($$result, "ServiceCard", $$ServiceCard, { "firstTitle": "Analytics and ", "secondTitle": "Tracking", "bgcolor": "bg-primary", "textbgcolor": "bg-secondary", "textColor": "text-text-light", "icon": whitelinkIcon, "image": analysis })} </div> </section>`;
}, "C:/Users/abdal/Documents/positivus-landing-page/src/components/Services.astro", void 0);

const proposal = "data:image/svg+xml,%3csvg%20width='359'%20height='395'%20viewBox='0%200%20359%20395'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M169%20163.5C215.644%20163.5%20257.858%20167.471%20288.398%20173.887C303.673%20177.095%20316%20180.91%20324.497%20185.13C328.746%20187.24%20332.011%20189.439%20334.208%20191.694C336.403%20193.948%20337.5%20196.222%20337.5%20198.5C337.5%20200.778%20336.403%20203.052%20334.208%20205.306C332.011%20207.561%20328.746%20209.76%20324.497%20211.87C316%20216.09%20303.673%20219.905%20288.398%20223.113C257.858%20229.529%20215.644%20233.5%20169%20233.5C122.356%20233.5%2080.1417%20229.529%2049.6016%20223.113C34.3275%20219.905%2021.9997%20216.09%2013.5029%20211.87C9.25392%20209.76%205.98872%20207.561%203.79199%20205.306C1.59696%20203.052%200.5%20200.778%200.5%20198.5C0.5%20196.222%201.59696%20193.948%203.79199%20191.694C5.98872%20189.439%209.25392%20187.24%2013.5029%20185.13C21.9997%20180.91%2034.3275%20177.095%2049.6016%20173.887C80.1417%20167.471%20122.356%20163.5%20169%20163.5Z'%20stroke='black'/%3e%3cpath%20d='M169%20188.5C215.644%20188.5%20257.858%20192.471%20288.398%20198.887C303.673%20202.095%20316%20205.91%20324.497%20210.13C328.746%20212.24%20332.011%20214.439%20334.208%20216.694C336.403%20218.948%20337.5%20221.222%20337.5%20223.5C337.5%20225.778%20336.403%20228.052%20334.208%20230.306C332.011%20232.561%20328.746%20234.76%20324.497%20236.87C316%20241.09%20303.673%20244.905%20288.398%20248.113C257.858%20254.529%20215.644%20258.5%20169%20258.5C122.356%20258.5%2080.1417%20254.529%2049.6016%20248.113C34.3275%20244.905%2021.9997%20241.09%2013.5029%20236.87C9.25392%20234.76%205.98872%20232.561%203.79199%20230.306C1.59696%20228.052%200.5%20225.778%200.5%20223.5C0.5%20221.222%201.59696%20218.948%203.79199%20216.694C5.98872%20214.439%209.25392%20212.24%2013.5029%20210.13C21.9997%20205.91%2034.3275%20202.095%2049.6016%20198.887C80.1417%20192.471%20122.356%20188.5%20169%20188.5Z'%20stroke='black'/%3e%3cpath%20d='M169%20213.5C215.644%20213.5%20257.858%20217.471%20288.398%20223.887C303.673%20227.095%20316%20230.91%20324.497%20235.13C328.746%20237.24%20332.011%20239.439%20334.208%20241.694C336.403%20243.948%20337.5%20246.222%20337.5%20248.5C337.5%20250.778%20336.403%20253.052%20334.208%20255.306C332.011%20257.561%20328.746%20259.76%20324.497%20261.87C316%20266.09%20303.673%20269.905%20288.398%20273.113C257.858%20279.529%20215.644%20283.5%20169%20283.5C122.356%20283.5%2080.1417%20279.529%2049.6016%20273.113C34.3275%20269.905%2021.9997%20266.09%2013.5029%20261.87C9.25392%20259.76%205.98872%20257.561%203.79199%20255.306C1.59696%20253.052%200.5%20250.778%200.5%20248.5C0.5%20246.222%201.59696%20243.948%203.79199%20241.694C5.98872%20239.439%209.25392%20237.24%2013.5029%20235.13C21.9997%20230.91%2034.3275%20227.095%2049.6016%20223.887C80.1417%20217.471%20122.356%20213.5%20169%20213.5Z'%20stroke='black'/%3e%3cpath%20d='M252.343%2066.6289L252.511%2067.5342L253.179%2066.9004L300.312%2022.1758L272.341%2080.8232L271.944%2081.6543L272.857%2081.5342L337.277%2073.0547L280.177%20104.061L279.367%20104.5L280.177%20104.939L337.277%20135.944L272.857%20127.466L271.944%20127.346L272.341%20128.177L300.312%20186.823L253.179%20142.1L252.511%20141.466L252.343%20142.371L240.5%20206.259L228.657%20142.371L228.489%20141.466L227.821%20142.1L180.688%20186.823L208.659%20128.177L209.056%20127.346L208.143%20127.466L143.722%20135.944L200.823%20104.939L201.633%20104.5L200.823%20104.061L143.722%2073.0547L208.143%2081.5342L209.056%2081.6543L208.659%2080.8232L180.688%2022.1758L227.821%2066.9004L228.489%2067.5342L228.657%2066.6289L240.5%202.74023L252.343%2066.6289Z'%20stroke='black'/%3e%3cpath%20d='M277%20177L294.789%20222.06L341.11%20207.874L316.972%20249.877L356.944%20277.247L309.055%20284.563L312.578%20332.879L277%20300L241.422%20332.879L244.945%20284.563L197.056%20277.247L237.028%20249.877L212.89%20207.874L259.211%20222.06L277%20177Z'%20fill='%23D9D9D9'/%3e%3cpath%20d='M112.194%20306.102L135.134%20264L158.258%20306.102L200.269%20329.134L158.258%20352.166L135.134%20394.269L112.194%20352.166L70%20329.134L112.194%20306.102Z'%20fill='%23B9FF66'/%3e%3ccircle%20cx='152.5'%20cy='186.5'%20r='62'%20fill='black'%20stroke='black'/%3e%3cellipse%20cx='132'%20cy='173'%20rx='10'%20ry='20'%20fill='white'/%3e%3cellipse%20cx='173'%20cy='173'%20rx='10'%20ry='20'%20fill='white'/%3e%3c/svg%3e";

const $$Proposal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="xl:px-25"> <div class="bg-background w-11/12  m-auto rounded-[45px] flex flex-col  md:flex-row md:justify-between items-center justify-center p-[50px] mb-7 xl:px-[60px]"> <div class="flex flex-col gap-6 md:max-w-1/2"> <h3>Let’s make things happen</h3> <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p> ${renderComponent($$result, "Button", $$Button, { "className": "xl:hidden", "content": "Get your proposal" })} ${renderComponent($$result, "Button", $$Button, { "className": "hidden xl:block", "content": "Get your free proposal" })} </div> <img class="hidden xl:w-[360px] xl:h-[395px] w-[270px] h-[296px]  md:block"${addAttribute(proposal, "src")} alt="propsal illustraion"> </div> </section>`;
}, "C:/Users/abdal/Documents/positivus-landing-page/src/components/Proposal.astro", void 0);

const arrowIcon = "data:image/svg+xml,%3csvg%20width='21'%20height='20'%20viewBox='0%200%2021%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.25%2013.701C0.532561%2014.1152%200.286748%2015.0326%200.700962%2015.75C1.11518%2016.4674%202.03256%2016.7133%202.75%2016.299L1.25%2013.701ZM20.7694%205.38823C20.9838%204.58803%2020.5089%203.76552%2019.7087%203.55111L6.66874%200.0570541C5.86854%20-0.157359%205.04603%200.317515%204.83162%201.11771C4.61721%201.91791%205.09208%202.74042%205.89228%202.95483L17.4834%206.06066L14.3776%2017.6518C14.1631%2018.452%2014.638%2019.2745%2015.4382%2019.4889C16.2384%2019.7033%2017.0609%2019.2284%2017.2753%2018.4282L20.7694%205.38823ZM2.75%2016.299L20.0705%206.29904L18.5705%203.70096L1.25%2013.701L2.75%2016.299Z'%20fill='%23B9FF66'/%3e%3c/svg%3e";

const $$Astro$2 = createAstro();
const $$CaseStudy = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CaseStudy;
  const { content, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-5 "> <p class="text-text-light">${content}</p> <div class="flex  items-center gap-4 text-secondary "> <span class="text-5 leading-7">Learn more</span> <a${addAttribute(link, "href")}><img${addAttribute(arrowIcon, "src")} alt="arrow icon"></a> </div> </div>`;
}, "C:/Users/abdal/Documents/positivus-landing-page/src/components/CaseStudy.astro", void 0);

const $$CaseStudies = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="xl:p-[100px] w-[90%] lg:w-full flex flex-col items-center justify-center m-auto mb-15 xl:mb-[100px]"> ${renderComponent($$result, "SectionHeading", $$SectionHeading, { "heading": "Case Studies", "content": "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies" })} <div class="xl:px-[60px] p-13 xl:py-[70px] rounded-[45px] flex flex-col  md:max-w-3/4 lg:max-w-full xl:flex-row gap-10 xl:gap-[64px] bg-primary"> ${renderComponent($$result, "CaseStudy", $$CaseStudy, { "link": "#", "content": "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales." })} <hr class="text-text-light"> ${renderComponent($$result, "CaseStudy", $$CaseStudy, { "link": "#", "content": "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic." })} <hr class="text-text-light"> ${renderComponent($$result, "CaseStudy", $$CaseStudy, { "link": "#", "content": "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales." })} </div> </section>`;
}, "C:/Users/abdal/Documents/positivus-landing-page/src/components/CaseStudies.astro", void 0);

const plusIcon = "data:image/svg+xml,%3csvg%20width='58'%20height='59'%20viewBox='0%200%2058%2059'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='29'%20cy='29.5'%20r='28.5'%20fill='%23F3F3F3'%20stroke='%23191A23'/%3e%3cpath%20d='M25.6%2041.58V31.86H16V26.22H25.6V16.5H31.48V26.22H41.08V31.86H31.48V41.58H25.6Z'%20fill='%23191A23'/%3e%3c/svg%3e";

const minusIcon = "data:image/svg+xml,%3csvg%20width='58'%20height='59'%20viewBox='0%200%2058%2059'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='29'%20cy='29.5'%20r='28.5'%20fill='%23F3F3F3'%20stroke='%23191A23'/%3e%3cpath%20d='M20%2032.14V26.5H37.76V32.14H20Z'%20fill='black'/%3e%3c/svg%3e";

const WorkingProcess = ({ number, heading, content }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  if (isClicked) {
    return /* @__PURE__ */ jsxs("div", { className: "flex shadow-base flex-col gap-8 justify-between bg-secondary mx-auto w-[93%] xl:w-11/12  rounded-[45px] p-5 md:px-[60px] md:py-[41px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 lg:gap-6 ", children: [
          /* @__PURE__ */ jsx("span", { className: "font-medium text-[1.5rem] xl:text-[3.75rem]", children: number }),
          /* @__PURE__ */ jsx("h3", { children: heading })
        ] }),
        /* @__PURE__ */ jsx("button", { onClick: handleClick, children: /* @__PURE__ */ jsx("img", { className: "cursor-pointer w-[30px] h-[30px] xl:w-[58px] xl:h-[58px]", src: minusIcon, alt: "minus icon" }) })
      ] }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsx("p", { children: content })
    ] });
  } else {
    return /* @__PURE__ */ jsxs("div", { className: "flex shadow-base items-center justify-between bg-background mx-auto w-[93%] xl:w-11/12  rounded-[45px] p-5 md:px-[60px] md:py-[41px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 lg:gap-6 ", children: [
        /* @__PURE__ */ jsx("span", { className: "font-medium text-[1.5rem] xl:text-[3.75rem]", children: number }),
        /* @__PURE__ */ jsx("h3", { children: heading })
      ] }),
      /* @__PURE__ */ jsx("button", { onClick: handleClick, children: /* @__PURE__ */ jsx("img", { className: "cursor-pointer w-[30px] h-[30px] xl:w-[58px] xl:h-[58px]", src: plusIcon, alt: "plus icon" }) })
    ] });
  }
};

const $$WorkingProcesses = createComponent(($$result, $$props, $$slots) => {
  const data = [
    {
      number: "01",
      heading: "Consultation",
      content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
      number: "02",
      heading: "Research and Strategy Development",
      content: "We analyze your market, audience, and competitors to create a clear, goal-driven strategy tailored to your needs."
    },
    {
      number: "03",
      heading: "Implementation",
      content: "We put the strategy into action through focused execution\u2014whether it's launching campaigns, content, or new features."
    },
    {
      number: "04",
      heading: "Monitoring and Optimization",
      content: "We track key metrics, identify what's working, and make real-time adjustments to improve performance."
    },
    {
      number: "05",
      heading: "Reporting and Communication",
      content: "We keep you updated with clear reports and regular check-ins to ensure transparency and alignment."
    },
    {
      number: "06",
      heading: "Continual Improvement",
      content: "We continuously refine and enhance the process based on results, feedback, and evolving goals."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-[30px] xl:px-25 mb-25"> ${renderComponent($$result, "SectionHeading", $$SectionHeading, { "heading": "Our Working Process", "content": "Step-by-Step Guide to Achieving Your Business Goals" })} ${data.map((obj) => renderTemplate`${renderComponent($$result, "WorkingProcess", WorkingProcess, { "client:load": true, "number": obj.number, "heading": obj.heading, "content": obj.content, "client:component-hydration": "load", "client:component-path": "C:/Users/abdal/Documents/positivus-landing-page/src/components/WorkingProcess.jsx", "client:component-export": "default" })}`)} </section>`;
}, "C:/Users/abdal/Documents/positivus-landing-page/src/components/WorkingProcesses.astro", void 0);

const linkedIn = "data:image/svg+xml,%3csvg%20width='34'%20height='34'%20viewBox='0%200%2034%2034'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='17'%20cy='17'%20r='17'%20fill='black'/%3e%3cpath%20d='M9.31776%2025H12.8131V13.6844H9.31776V25Z'%20fill='%23B9FF66'/%3e%3cpath%20d='M9%2010.0719C9%2011.1875%209.90031%2012.0906%2011.0654%2012.0906C12.1776%2012.0906%2013.0779%2011.1875%2013.0779%2010.0719C13.0779%208.95625%2012.1776%208%2011.0654%208C9.90031%208%209%208.95625%209%2010.0719Z'%20fill='%23B9FF66'/%3e%3cpath%20d='M22.4517%2025H26V18.7844C26%2015.7562%2025.3115%2013.3656%2021.7632%2013.3656C20.0685%2013.3656%2018.9034%2014.3219%2018.4268%2015.225H18.3738V13.6844H15.0374V25H18.5327V19.4219C18.5327%2017.9344%2018.7975%2016.5%2020.6511%2016.5C22.4517%2016.5%2022.4517%2018.2%2022.4517%2019.475V25Z'%20fill='%23B9FF66'/%3e%3c/svg%3e";

const $$Astro$1 = createAstro();
const $$TeamMember = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TeamMember;
  const { pic, name, position, experience } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-7 xl:min-h-[400px] rounded-[45px] w-[90%] md:w-[60%] xl:w-full  m-auto px-7 py-10 border border-primary shadow-base"> <div class="flex items-end h-[90px] md:h-auto gap-4"> <img class=" w-[50px] h-[50px] lg:w-[97px] lg:h-[97px]"${addAttribute(pic, "src")} alt="john pic"> <div class="flex flex-col"> <h4>${name}</h4> <p>${position}</p> </div> <a class="self-start ml-auto" href="https://www.linkedin.com/"> <img class="w-[34px] h-[34px]"${addAttribute(linkedIn, "src")} alt="linkedIn social"> </a> </div> <hr> <p>${experience}</p> </div>`;
}, "C:/Users/abdal/Documents/positivus-landing-page/src/components/TeamMember.astro", void 0);

const john = "/_astro/John.CHlsn1PY.svg";

const jane = "/_astro/jane.BAWFZypC.svg";

const michael = "/_astro/michael.YNSljxKj.svg";

const emily = "/_astro/emily.Di3vPUTb.svg";

const brian = "/_astro/brian.BRVCeDYY.svg";

const sarah = "/_astro/sarah.CCOYyoen.svg";

const $$Team = createComponent(($$result, $$props, $$slots) => {
  const teamMembers = [
    {
      pic: john,
      name: "John Smith",
      position: "CEO and Founder",
      experience: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
    },
    {
      pic: jane,
      name: "Jane Doe",
      position: "Director of Operations",
      experience: "7+ years of experience in project management and team leadership. Strong organisational and communication skills"
    },
    {
      pic: michael,
      name: "Michael Brown",
      position: "Senior SEO Specialist",
      experience: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
    },
    {
      pic: emily,
      name: "Emily Johnson",
      position: "PPC Manager",
      experience: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
    },
    {
      pic: brian,
      name: "Brian Williams",
      position: "Social Media Specialist",
      experience: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"
    },
    {
      pic: sarah,
      name: "Sarah Kim",
      position: "Content Creator",
      experience: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col xl:w-full gap-[50px] mb-[60px] xl:px-25"> ${renderComponent($$result, "SectionHeading", $$SectionHeading, { "heading": "Team", "content": "Meet the skilled and experienced team behind our successful digital marketing strategies" })} <div class="flex flex-col xl:grid xl:grid-cols-3 gap-10"> ${teamMembers.map((member) => renderTemplate`${renderComponent($$result, "TeamMember", $$TeamMember, { "pic": member.pic, "name": member.name, "position": member.position, "experience": member.experience })}`)} </div> ${renderComponent($$result, "Button", $$Button, { "content": "See all team", "className": "m-auto w-[90%] xl:w-[30%] xl:ml-auto xl:m-0 " })} </section>`;
}, "C:/Users/abdal/Documents/positivus-landing-page/src/components/Team.astro", void 0);

const illustraion = "/_astro/formillustration.CSdnPVPN.svg";

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<section class="xl:mb-25 mb-10"> ', ' <div class="xl:flex xl:justify-around xl:items-center xl:gap-4 rounded-[45px] w-[90%] m-auto px-6 pt-[60px] pb-[80px] xl:px-25 bg-background"> <form id="myForm" method="post" class="flex flex-col gap-10 max-w-[556px] xl:w-full"> <div class="flex justify-around items-center"> <div class="flex items-center gap-4"> <input name="action" value="Say Hi" id="Say Hi" type="radio"> <label class="cursor-pointer" for="Say Hi">Say Hi</label> </div> <div class="flex items-center gap-4"> <input name="action" value="Get a Quote" id="Get a Quote" type="radio"> <label class="cursor-pointer" for="Get a Quote">Get a Quote</label> </div> </div> <div class="flex flex-col gap-6"> <div class="flex flex-col gap-[5px]"> <label for="name">Name</label> <input class="px-8 py-[18px] border rounded-[14px] w-full bg-text-light" placeholder="Name" id="name" name="name" type="text"> </div> <div class="flex flex-col gap-[5px]"> <label for="email">Email*</label> <input class="px-8 py-[18px] border rounded-[14px] w-full bg-text-light" placeholder="Email" id="email" name="email" type="email"> </div> <div class="flex flex-col gap-[5px]"> <label for="message">Message*</label> <textarea class="px-8 py-[18px] border rounded-[14px] w-full bg-text-light" placeholder="Message" name="message" id="message"></textarea> </div> </div> ', ' </form> <img class="xl:block hidden xl:max-w-[55%]"', ` alt="form section illustraion"> </div> </section> <script type="module">
  document.getElementById('myForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // prevent normal form submit
    const form = e.target;
    const formData = new FormData(form);
    // Convert FormData to plain JS object
    const jsonObject = Object.fromEntries(formData.entries());
    try {
      const response = await fetch('/.netlify/functions/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonObject)
      });
      const data = await response.json();
    } catch (err) {
      console.error('Request failed:', err);
    }
  });
<\/script>`])), maybeRenderHead(), renderComponent($$result, "SectionHeading", $$SectionHeading, { "heading": "Contact Us", "content": "Connect with Us: Let's Discuss Your Digital Marketing Needs" }), renderComponent($$result, "Button", $$Button, { "type": "submit", "content": "Send Message" }), addAttribute(illustraion, "src"));
}, "C:/Users/abdal/Documents/positivus-landing-page/src/components/ContactForm.astro", void 0);

const $$Astro = createAstro();
const $$Testimonial = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Testimonial;
  const { name, position, testimonial } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-8 slide justify-center items-center xl:items-start w-[270px] md:w-[600px] text-text-light py-4 md:py-[76px]"> <div class="rounded-[45px] border-2 border-secondary  relative bubble p-8"> <p>${testimonial}</p> </div> <div class="xl:w-full xl:ml-15"> <h4 class="text-secondary">${name}</h4> <p>${position}</p> </div> </div>`;
}, "C:/Users/abdal/Documents/positivus-landing-page/src/components/Testimonial.astro", void 0);

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const testimonials = [
    {
      "name": "John Smith",
      "position": "CEO and Founder",
      "testimonial": "John is a visionary leader whose deep expertise in digital marketing has been instrumental in shaping our company\u2019s strategy. His comprehensive knowledge in SEO, PPC, and content strategy enables him to drive growth and innovation across all departments. Working with John is both inspiring and empowering."
    },
    {
      "name": "Jane Doe",
      "position": "Director of Operations",
      "testimonial": "Jane has an exceptional ability to lead teams with clarity and confidence. Her strong background in project management and communication allows her to coordinate complex operations smoothly. She is the backbone of our organizational structure, ensuring every project runs efficiently and effectively."
    },
    {
      "name": "Michael Brown",
      "position": "Senior SEO Specialist",
      "testimonial": "Michael\u2019s attention to detail and strategic mindset make him an outstanding SEO expert. His ability to uncover keyword opportunities and implement effective on-page optimization has significantly boosted our online visibility. He consistently delivers measurable results and valuable insights."
    },
    {
      "name": "Emily Johnson",
      "position": "PPC Manager",
      "testimonial": "Emily brings unmatched precision and analytical skills to our paid advertising efforts. Her talent in campaign management and performance analysis has helped maximize ROI across multiple channels. She is a reliable expert who continually fine-tunes strategies to meet and exceed goals."
    },
    {
      "name": "Brian Williams",
      "position": "Social Media Specialist",
      "testimonial": "Brian has a keen sense of audience engagement and brand voice. His content strategies and metric-driven approach have brought measurable improvements in our social media presence. He\u2019s creative, dependable, and always stays ahead of the curve with the latest trends."
    },
    {
      "name": "Sarah Kim",
      "position": "Content Creator",
      "testimonial": "Sarah\u2019s flair for writing and editing shines through in every piece she creates. Her SEO-optimized content not only resonates with readers but also aligns perfectly with our digital marketing goals. She\u2019s a thoughtful storyteller who brings real value to our content efforts."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="xl:px-25 flex flex-col gap-10 xl:mb-35 mb-6"> ${renderComponent($$result, "SectionHeading", $$SectionHeading, { "heading": "Testimonials", "content": "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services" })} <div class="rounded-[45px] bg-primary w-[91%] xl:w-full m-auto p-6"> <div class=" md:w-[600px] w-[270px] h-[550px] md:h-[400px] m-auto overflow-hidden relative"> <div class="flex w-max wrapper h-full absolute left-0 top-0"> ${testimonials.map((testimonial) => renderTemplate`${renderComponent($$result, "Testimonial", $$Testimonial, { "name": testimonial.name, "position": testimonial.position, "testimonial": testimonial.testimonial })}`)} </div> </div> <div class="flex justify-around  xl:justify-center xl:gap-45 w-full py-5"> <button class="cursor-pointer previous" type="button" aria-label="Previous testimonial"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path id="prevSvg" d="M22 13.5C22.8284 13.5 23.5 12.8284 23.5 12C23.5 11.1716 22.8284 10.5 22 10.5L22 13.5ZM0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM22 10.5L2 10.5L2 13.5L22 13.5L22 10.5Z" fill="white" fill-opacity="0.3"></path> </svg> </button> <div id="indicatorsContainer" class="flex indicatorsContainer items-center gap-[19px]"></div> <button class="cursor-pointer next" type="button" aria-label="Next testimonial"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path id="nextSvg" d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5L2 10.5ZM23.0607 13.0607C23.6464 12.4749 23.6464 11.5251 23.0607 10.9393L13.5147 1.3934C12.9289 0.807613 11.9792 0.807613 11.3934 1.3934C10.8076 1.97919 10.8076 2.92893 11.3934 3.51472L19.8787 12L11.3934 20.4853C10.8076 21.0711 10.8076 22.0208 11.3934 22.6066C11.9792 23.1924 12.9289 23.1924 13.5147 22.6066L23.0607 13.0607ZM2 13.5L22 13.5L22 10.5L2 10.5L2 13.5Z" fill="white"></path> </svg> </button> </div> </div> </section> ${renderScript($$result, "C:/Users/abdal/Documents/positivus-landing-page/src/components/Testimonials.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/abdal/Documents/positivus-landing-page/src/components/Testimonials.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Brands", $$Brands, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Proposal", $$Proposal, {})} ${renderComponent($$result2, "CaseStudies", $$CaseStudies, {})} ${renderComponent($$result2, "WorkingProcesses", $$WorkingProcesses, {})} ${renderComponent($$result2, "Team", $$Team, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} ` })}`;
}, "C:/Users/abdal/Documents/positivus-landing-page/src/pages/index.astro", void 0);

const $$file = "C:/Users/abdal/Documents/positivus-landing-page/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
