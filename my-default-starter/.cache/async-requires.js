// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/Users/kristenwatson/Desktop/Code/GitHub/website/my-default-starter/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/kristenwatson/Desktop/Code/GitHub/website/my-default-starter/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/kristenwatson/Desktop/Code/GitHub/website/my-default-starter/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-page-2-js": () => import("/Users/kristenwatson/Desktop/Code/GitHub/website/my-default-starter/src/pages/page-2.js" /* webpackChunkName: "component---src-pages-page-2-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/kristenwatson/Desktop/Code/GitHub/website/my-default-starter/.cache/data.json")

