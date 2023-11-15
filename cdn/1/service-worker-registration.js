'use strict';

const CACHE_KEY = 'exb-build-number'

if ('serviceWorker' in navigator) {
  // See https://developers.google.com/web/fundamentals/instant-and-offline/service-worker/registration
  window.addEventListener('load', function() {
    // service-worker.js *must* be located at the top-level directory relative to your site.
    // It won't be able to control pages unless it's located at the same level or higher than them.
    navigator.serviceWorker.register('../../service-worker.js').then(function(reg) {
      console.log('Register a service worker.')
    }).catch(function(e) {
      console.error('Error during service worker registration:', e);
    });
  });

  clearCache()
}

function clearCache () {
  if (!window.caches) {
    return
  }

  const currentCacheId = getCacheId()

  if (!currentCacheId) {
    return
  }

  const cachedCacheId = readCacheId()
  if (!cachedCacheId) {
    setCacheId(currentCacheId)
    return
  }

  if (currentCacheId !== cachedCacheId) {
    // These cache keys are set in service-worker.js
    caches.delete('exb-assets-cache')
    caches.delete('arcgis-jsapi-cache')
    setCacheId(currentCacheId)
  }
}

function readCacheId () {
  try {
    return localStorage.getItem(CACHE_KEY)
  } catch (err) {
    console.error('Read Local storage error.', err)
    return null
  }
}

function setCacheId (buildNumber) {
  try {
    return localStorage.setItem(CACHE_KEY, buildNumber)
  } catch (err) {
    console.error('Set Local storage error.', err)
    return null
  }
}

function getCacheId () {
  return window.jimuConfig.buildNumber ? `${window.jimuConfig.exbVersion}-${window.jimuConfig.buildNumber}` : window.jimuConfig.exbVersion
}