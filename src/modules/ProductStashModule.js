import { MODULE_PRODUCT_STASH } from '../analyticsTypes'
import BasicModule from './BasicModule'

export default class ProductStashModule extends BasicModule {

  constructor () {
      super(MODULE_PRODUCT_STASH)
  }

  init (initConf = {}) {

    (function () {
      
      var e2 = document.createElement("script");
      e2.text = `var ps_config = { productId : "${initConf.token}" };`;
      e2.type = "text/javascript";
      e2.async = true;
      var n1 = document.getElementsByTagName("script")[0];
      n1.parentNode.insertBefore(e2, n1)

      var e1 = document.createElement("script");
      e1.src = ("https://app.productstash.io/js/productstash-embed.js");
      e1.type = "text/javascript";
      e1.async = true;
      
      var n2 = document.getElementsByTagName("script")[0];
      n2.parentNode.insertBefore(e1, n2)
    })();

    this.config.debug = initConf.debug
  }
}
