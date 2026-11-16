import Script from "next/script"

/** 拦截 Netlify 免费套餐在边缘插入的右下角推广条（/.netlify/scripts/hud）。 */
const HIDE_CSS =
  '#nl-badge-frame,#nl-hud-frame{display:none!important;visibility:hidden!important;pointer-events:none!important;opacity:0!important;width:0!important;height:0!important}'

const HIDE_JS =
  '(function(){function isHud(n){if(!n||n.nodeType!==1)return false;var id=n.id;if(id==="nl-badge-frame"||id==="nl-hud-frame")return true;if(n.tagName==="SCRIPT"){var src=n.getAttribute("src")||"";return src.indexOf("/.netlify/scripts/hud")!==-1}return false}function strip(){var list=document.querySelectorAll("#nl-badge-frame,#nl-hud-frame,script[src*=\'/.netlify/scripts/hud\']");for(var i=0;i<list.length;i++){if(list[i].parentNode)list[i].parentNode.removeChild(list[i])}}var proto=typeof Node!=="undefined"?Node.prototype:Element.prototype;var origAppend=proto.appendChild;proto.appendChild=function(n){if(isHud(n))return n;return origAppend.call(this,n)};var origBefore=proto.insertBefore;proto.insertBefore=function(n,ref){if(isHud(n))return n;return origBefore.call(this,n,ref)};strip();try{new MutationObserver(strip).observe(document.documentElement,{childList:true,subtree:true})}catch(e){}})();'

export function HideNetlifyBadge() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: HIDE_CSS }} />
      <Script id="hide-netlify-badge" strategy="beforeInteractive">
        {HIDE_JS}
      </Script>
    </>
  )
}
