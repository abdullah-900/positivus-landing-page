import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { p as NOOP_MIDDLEWARE_HEADER, q as decodeKey } from './chunks/astro/server_CMrstWRS.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/abdal/Documents/positivus-landing-page/","cacheDir":"file:///C:/Users/abdal/Documents/positivus-landing-page/node_modules/.astro/","outDir":"file:///C:/Users/abdal/Documents/positivus-landing-page/dist/","srcDir":"file:///C:/Users/abdal/Documents/positivus-landing-page/src/","publicDir":"file:///C:/Users/abdal/Documents/positivus-landing-page/public/","buildClientDir":"file:///C:/Users/abdal/Documents/positivus-landing-page/dist/","buildServerDir":"file:///C:/Users/abdal/Documents/positivus-landing-page/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CddKByEC.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/abdal/Documents/positivus-landing-page/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Ci78XaYi.mjs","C:/Users/abdal/Documents/positivus-landing-page/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","C:/Users/abdal/Documents/positivus-landing-page/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Du6VkvPS.mjs","C:/Users/abdal/Documents/positivus-landing-page/src/components/Header.jsx":"_astro/Header.BVNT5FWV.js","C:/Users/abdal/Documents/positivus-landing-page/src/components/WorkingProcess.jsx":"_astro/WorkingProcess.CNhIT2wB.js","@astrojs/react/client.js":"_astro/client.BPIbHqJh.js","C:/Users/abdal/Documents/positivus-landing-page/src/components/Testimonials.astro?astro&type=script&index=0&lang.ts":"_astro/Testimonials.astro_astro_type_script_index_0_lang.7GOEeIXN.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/abdal/Documents/positivus-landing-page/src/components/Testimonials.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const i={wrapper:document.querySelector(\".wrapper\"),previous:document.querySelector(\".previous\"),next:document.querySelector(\".next\"),prevSvg:document.getElementById(\"prevSvg\"),nextSvg:document.getElementById(\"nextSvg\"),indicatorsContainer:document.getElementById(\"indicatorsContainer\"),slide:document.querySelector(\".slide\")};let n=0;const r=i.wrapper?.childElementCount,s=i.slide?.offsetWidth;function l(){const t=\"http://www.w3.org/2000/svg\",e=document.createElementNS(t,\"svg\");e.classList.add(\"indicator\"),e.setAttribute(\"width\",\"14\"),e.setAttribute(\"height\",\"14\"),e.setAttribute(\"viewBox\",\"0 0 14 14\"),e.setAttribute(\"fill\",\"none\"),e.setAttribute(\"xmlns\",t);const o=document.createElementNS(t,\"path\");return o.setAttribute(\"d\",\"M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z\"),o.setAttribute(\"fill\",\"white\"),e.appendChild(o),e}function d(){for(let t=0;t<r;t++){const e=l();e.dataset.slide=t,e.addEventListener(\"click\",function(){const o=parseInt(this.dataset.slide);u(o)}),i.indicatorsContainer?.appendChild(e)}}function a(){const t=document.querySelectorAll(\".indicator\");console.log(t),t.forEach(e=>{parseInt(e.dataset.slide)!==n?e.querySelector(\"path\")?.setAttribute(\"fill\",\"white\"):e.querySelector(\"path\")?.setAttribute(\"fill\",\"#B9FF66\")})}function u(t){t>=0&&t<r&&(n=t,c())}d();function p(){n===0&&(i.prevSvg?.setAttribute(\"fill-opacity\",\"0.3\"),i.nextSvg?.removeAttribute(\"fill-opacity\")),n>0&&(i.prevSvg?.removeAttribute(\"fill-opacity\"),i.nextSvg?.removeAttribute(\"fill-opacity\")),n===r-1&&(i.nextSvg?.setAttribute(\"fill-opacity\",\"0.3\"),i.prevSvg?.removeAttribute(\"fill-opacity\"))}function c(){const t=-(n*s);i.wrapper.style.left=t+\"px\",p(),a()}function v(){n<r-1&&(n++,c())}function f(){n>0&&(n--,c())}c(),i.next?.addEventListener(\"click\",v),i.previous?.addEventListener(\"click\",f)});"]],"assets":["/_astro/amazon.CY8M3Zdq.svg","/_astro/hubspot.B0UgSLoA.svg","/_astro/dribble.CGRRZydW.svg","/_astro/formillustration.CSdnPVPN.svg","/_astro/ad.Cx_qSgKa.svg","/_astro/tokyo-magnifier.DU2lIYTA.svg","/_astro/social.D3PW8IzC.svg","/_astro/email.ChJ4VTlE.svg","/_astro/content.DV1VElsy.svg","/_astro/analysis.C-QxJyev.svg","/_astro/hero.CNn3e4l1.png","/_astro/logo.DKib_42g.svg","/_astro/brian.BRVCeDYY.svg","/_astro/logo-white.By7PxX5s.svg","/_astro/John.CHlsn1PY.svg","/_astro/michael.YNSljxKj.svg","/_astro/emily.Di3vPUTb.svg","/_astro/sarah.CCOYyoen.svg","/_astro/jane.BAWFZypC.svg","/_astro/index.CddKByEC.css","/favicon.svg","/_astro/client.BPIbHqJh.js","/_astro/Header.BVNT5FWV.js","/_astro/index.BVOCwoKb.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/WorkingProcess.CNhIT2wB.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"HwdgVkj38Uswaz2/AiqdpwAEq+6wusScBd0/JXV9Izc=","sessionConfig":{"driver":"fs-lite","options":{"base":"C:\\Users\\abdal\\Documents\\positivus-landing-page\\node_modules\\.astro\\sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
