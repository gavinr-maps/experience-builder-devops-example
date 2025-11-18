'use strict';

const exbBuildNumberKey = 'exb-build-number'
const apiBuildNumberKey = 'arcgis-jsapi-build-number';

if ('serviceWorker' in navigator) {
  // See https://developers.google.com/web/fundamentals/instant-and-offline/service-worker/registration
  window.addEventListener('load', function() {
    // service-worker.js *must* be located at the top-level directory relative to your site.
    // It won't be able to control pages unless it's located at the same level or higher than them.
    navigator.serviceWorker.register('../../service-worker.js').then(function() {
      console.log('Register a service worker.')
      return navigator.serviceWorker.ready
    }).then(function(reg) {
      reg.active.postMessage({
        type: 'to_sw_jimu_config',
        data: window.jimuConfig
      });

      // reset the ExB cache and JS API cache flags because the service worker is shared across all tabs.
      reg.active.postMessage({
        type: 'to_sw_unsettle_exb_cache',
      });
      reg.active.postMessage({
        type: 'to_sw_unsettle_js_api_cache',
      });

      handleExBCache(reg.active);
      handleJsApiCache(reg.active);
    }).catch(function(e) {
      console.error('Error during service worker registration:', e);
    });
  });

}

/**
 *
 * The version number is stored in local storage.
 * This function checks the current ExB build number against the cached one.
 * If they are different, it will delete the ExB cache and JS API cache.
 */
function handleExBCache (sw) {
  if (!window.caches) {
    return
  }

  const currentExBBuildNumber = getExBBuildNumberFromJimuConfig(window.jimuConfig)

  const cachedExBBuildNumber = readExBBuildNumber()
  if (!cachedExBBuildNumber) {
    writeExBBuildNumber(currentExBBuildNumber)
    sw.postMessage({
      type: 'to_sw_settle_exb_cache',
    });
    return
  }

  if (cachedExBBuildNumber !== currentExBBuildNumber) {
    writeExBBuildNumber(currentExBBuildNumber)
    sw.postMessage({
      type: 'to_sw_settle_exb_cache',
      data: {
        action: 'delete',
      }
    });
    sw.postMessage({
      type: 'to_sw_settle_js_api_cache',
      data: {
        action: 'delete',
      }
    });
  } else {
    sw.postMessage({
      type: 'to_sw_settle_exb_cache',
    });
  }
}

/**
 * The version number of the JS API is stored in local storage.
 * We'll fetch the current JS API version from //js.arcgis.com/builddate.txt
 * If the current version is different from the cached one, we will delete the JS API cache
 */
async function handleJsApiCache (sw) {
  if (!window.caches) {
    return
  }

  if (window.jimuConfig.isInPortal) {
    // In portal, the JS API is cached with the ExB, so we don't need to handle it separately.
    return
  }

  const currentJsApiBuildNumber = await getJsApiBuildNumberFromJimuConfig(window.jimuConfig)

  if (!currentJsApiBuildNumber) {
    console.debug('We cannot get the current JS API build number, so we will not handle the JS API cache.');
    return;
  }

  const cachedJsApiBuildNumber = readJsApiBuildNumber()
  if (!cachedJsApiBuildNumber) {
    writeJsApiBuildNumber(currentJsApiBuildNumber)
    sw.postMessage({
      type: 'to_sw_settle_js_api_cache',
    });
    return
  }

  if (cachedJsApiBuildNumber !== currentJsApiBuildNumber) {
    writeJsApiBuildNumber(currentJsApiBuildNumber)
    sw.postMessage({
      type: 'to_sw_settle_js_api_cache',
      data: {
        action: 'delete',
      }
    });
  } else {
    sw.postMessage({
      type: 'to_sw_settle_js_api_cache',
    });
  }
}

function readExBBuildNumber () {
  try {
    return localStorage.getItem(exbBuildNumberKey)
  } catch (err) {
    console.error('Read Local storage error.', err)
    return {}
  }
}

function writeExBBuildNumber (buildNumber) {
  try {
    return localStorage.setItem(exbBuildNumberKey, buildNumber)
  } catch (err) {
    console.error('Set Local storage error.', err)
    return null
  }
}

function getExBBuildNumberFromJimuConfig (jimuConfig) {
  return jimuConfig.buildNumber ? `${jimuConfig.exbVersion}-${jimuConfig.buildNumber}` : jimuConfig.exbVersion
}

function readJsApiBuildNumber () {
  try {
    return localStorage.getItem(apiBuildNumberKey)
  } catch (err) {
    console.error('Read Local storage error.', err)
    return {}
  }
}

function writeJsApiBuildNumber (buildNumber) {
  try {
    return localStorage.setItem(apiBuildNumberKey, buildNumber)
  } catch (err) {
    console.error('Set Local storage error.', err)
    return null
  }
}

async function getJsApiBuildNumberFromJimuConfig (jimuConfig) {
  try {
    if (!/^https?:\/\/js(dev)?\.arcgis\.com\//.test(jimuConfig.arcgisJsApiUrl)) {
      console.debug('The arcgisJsApiUrl is not from ArcGIS CDN, so we cannot get the JS API build number.');
      return null;
    }
    const apiCorePromise = fetch(`${jimuConfig.arcgisJsApiUrl}builddate.txt`)
    const componentsPromise = fetch(`${jimuConfig.mapComponentsUrl}builddate.txt`)
    const responses = await Promise.all([apiCorePromise, componentsPromise])
    const [coreVersionInfo, componentsVersionInfo] = await Promise.all(responses.map(res => res.json()))
    const buildNumber = `${coreVersionInfo.version}_${componentsVersionInfo.version}`
    return buildNumber
  } catch (err) {
    console.error('Get JS API build number error.', err);
    return null;
  }

}