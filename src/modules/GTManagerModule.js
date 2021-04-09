import { MODULE_GTM } from '../analyticsTypes'
import BasicModule from './BasicModule'

export default class GTManagerModule extends BasicModule {

  constructor () {
      super(MODULE_GTM)
  }

  init (initConf = {}) {

    (function () {
      console.log("[INFO] installing GTM");
      var headScript = document.createElement("script");
      headScript.text = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${initConf.token}');`;
      headScript.type = "text/javascript";
      headScript.async = false;
      var head = document.getElementsByTagName("head")[0];
      head.appendChild(headScript)
    })();

    this.config.debug = initConf.debug
  }
}
