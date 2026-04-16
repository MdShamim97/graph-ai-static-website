function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
let updated = false;
const handler = function() {
  const languageNavigation = document.querySelector(".cmp-languagenavigation");
  if (languageNavigation && isInViewport(languageNavigation) && !updated) {
    console.log("languageNavigation is updating.....")
    const hrefLang = document.documentElement.getAttribute('hreflang');
    const lang = document.documentElement.getAttribute('lang');
    const isUkSite = hrefLang === 'en-GB' || lang === 'en-GB';
    const pathName = window.location.pathname;
    const pathSegment = pathName.substring(1);
    const langOptions = languageNavigation.querySelectorAll(".cmp-languagenavigation__item-link");

    if (langOptions.length > 0) {
      langOptions.forEach(function(e) {
        const currentHref = e.href;
        const replacePath = currentHref.replace(pathSegment, '');
        const newUrl = new URL(replacePath);
        return e.setAttribute("href", newUrl.origin + (e.lang === 'en-GB' ? '/uk/' : '/') + (isUkSite ? pathSegment.replace('uk/', '') : pathSegment) + newUrl.search)
      })
    }
    updated = true;
  }
};
$(window).on('DOMContentLoaded load resize scroll', handler);


var lsDigitalData = JSON.parse(window.localStorage.getItem('digitalData'));

    if(!(lsDigitalData && typeof(lsDigitalData)=="object" && typeof(lsDigitalData.mids_user)=="object" && typeof(lsDigitalData.mids_user.experiment_variant)=="string" && lsDigitalData.mids_user.experiment_variant.length)){
        var cvalue = "MRT0012259_control";
        var d = new Date();
        d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = "experienceVariant=" + cvalue + ";" + expires + ";path=/";
    }



//Adobe Target flicker handling
    (function(win, doc, style, timeout) {
        var STYLE_ID = 'at-body-style';
        function getParent() {
          return doc.getElementsByTagName('head')[0];
        }
        function addStyle(parent, id, def) {
          if (!parent) {
          return;
          }
          var style = doc.createElement('style');
          style.id = id;
          style.innerHTML = def;
          parent.appendChild(style);
        }
        function removeStyle(parent, id) {
          if (!parent) {
          return;
          }
          var style = doc.getElementById(id);
          if (!style) {
          return;
          }
          parent.removeChild(style);
        }
        addStyle(getParent(), STYLE_ID, style);
        setTimeout(function() {
          removeStyle(getParent(), STYLE_ID);
        }, timeout);
        }(window, document, "body {opacity: 5 !important}", 3000));

    var tpj=jQuery;
            
            var revapi10;
            tpj(document).ready(function() {
                if(tpj("#rev_slider_10_1").revolution == undefined){
                    revslider_showDoubleJqueryError("#rev_slider_10_1");
                }else{
                    revapi10 = tpj("#rev_slider_10_1").show().revolution({
                        sliderType:"standard",jsFileLocation:"//localhost/revslider-standalone/revslider-standalone/revslider/public/assets/js/",
                        sliderLayout:"fullwidth",
                        dottedOverlay:"none",
                        delay:1000,
                        navigation: {
                        onHoverStop:"off",
                        },
                        visibilityLevels:[1240,1024,778,480],
                        gridwidth:1400,
                        gridheight:830,
                        lazyType:"none",
                        parallax: {
                        type:"mouse",
                        origo:"enterpoint",
                        speed:200,
                        levels:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,55],
                        type:"mouse",
                        },
                        shadow:0,
                        spinner:"spinner0",
                        stopLoop:"off",
                        stopAfterLoops:-1,
                        stopAtSlide:-1,
                        shuffle:"off",
                        autoHeight:"off",
                        disableProgressBar:"on",
                        hideThumbsOnMobile:"off",
                        hideSliderAtLimit:0,
                        hideCaptionAtLimit:0,
                        hideAllCaptionAtLilmit:0,
                        debugMode:false,
                        fallbacks: {
                            simplifyAll:"off",
                            nextSlideOnWindowFocus:"off",
                            disableFocusListener:false,
                        }
                    });
                }
            });

    /*ready*/

    (function() {
            window.ContextHub = window.ContextHub || {};

            /* setting paths */
            /*ContextHub.Paths = ContextHub.Paths || {};
            ContextHub.Paths.CONTEXTHUB_PATH = "/conf/now-www/settings/cloudsettings/default/contexthub";
            ContextHub.Paths.RESOURCE_PATH = "\/content\/now\u002Dwww\/global\/en\u002Dus\/home\/_jcr_content\/contexthub";
            ContextHub.Paths.SEGMENTATION_PATH = "\/conf\/now\u002Dwww\/settings\/wcm\/segments";
            ContextHub.Paths.CQ_CONTEXT_PATH = "";*/

            /* setting initial constants */
            /*ContextHub.Constants = ContextHub.Constants || {};
            ContextHub.Constants.ANONYMOUS_HOME = "/home/users/n/ne9dbvnbe45Y3UZ_rFRy";
            ContextHub.Constants.MODE = "no-ui";*/
        }());


var button = document.getElementById('button'); // Assumes element with id='button'

    button.onclick = function() {
        var div = document.getElementById('newpost');
        if (div.style.display !== 'none') {
            div.style.display = 'none';
        }
        else {
            div.style.display = 'block';
        }
    };



