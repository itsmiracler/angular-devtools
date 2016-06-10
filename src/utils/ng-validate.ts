let isInitalized: boolean = false;

const observeDOM = (() => {
  const MutationObserver = window['MutationObserver'];
  const eventListenerSupported = window.addEventListener;

  return function (obj, callback) {
    if (MutationObserver) {
      let obs = new MutationObserver((mutations, observer) => {
        if (mutations[0].addedNodes.length ||
          mutations[0].removedNodes.length) {
          callback();
        }
      });
      obs.observe(obj, { childList: true, subtree: true });
    } else if (eventListenerSupported) {
      obj.addEventListener('DOMNodeInserted', callback, false);
      obj.addEventListener('DOMNodeRemoved', callback, false);
    }
  };
})();

observeDOM(document, init);

function init() {
  if (window && window.hasOwnProperty('ng') && !isInitalized) {
    isInitalized = true;
    window.postMessage({ type: 'AUGURY_NG_VALID' }, '*');
  }
}
init();
