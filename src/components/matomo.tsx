import React from "react";

const Matomo = () => {
    return(
        <script>
  var _paq = window._paq = window._paq || [];
  
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    //var u="https://deliriumcorp.matomo.cloud/";
    //_paq.push(['setTrackerUrl', u+'matomo.php']);
    //_paq.push(['setSiteId', '1']);
    //var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    //g.async=true; g.src='//cdn.matomo.cloud/deliriumcorp.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
  });
</script>
    )};

export default Matomo;