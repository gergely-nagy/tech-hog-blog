/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-8ce8b122a2bcc7e8b1cc.js"
  },
  {
    "url": "app-fe5b17270925c6145d54.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-8119d69fc94d7ce7f094.js"
  },
  {
    "url": "index.html",
    "revision": "18c653eb9ab27f4f3f9d02c76c6b6455"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "a3003c9388477efad4d235ce21af5df6"
  },
  {
    "url": "2.f4c9ad4cc6ab582d02fd.css"
  },
  {
    "url": "component---src-pages-index-js-bbee7fac7f0ac334b5b0.js"
  },
  {
    "url": "2-595a566e760c358f2f49.js"
  },
  {
    "url": "1-db8ba38439354bbb14ef.js"
  },
  {
    "url": "0-f77690a81e80b43be9aa.js"
  },
  {
    "url": "static/d/802/path---index-6a9-bfJ9Mh6mZiyVCgUyBnDDqctB8.json",
    "revision": "2256fbfec3f6f62689eb1c47f0c24d70"
  },
  {
    "url": "component---src-pages-404-js-677669e940178066c3e9.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "3435901834b88a2def90ccbdf3c28302"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/tech-hog-blog/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});