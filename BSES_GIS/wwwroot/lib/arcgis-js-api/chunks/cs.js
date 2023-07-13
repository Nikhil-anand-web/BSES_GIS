/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./calcite-input-time-picker"],(function(e,t){"use strict";
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   * v1.4.2
   */function n(e){return e>1&&e<5&&1!=~~(e/10)}function r(e,t,r,s){var _=e+" ";switch(r){case"s":return t||s?"pár sekund":"pár sekundami";case"m":return t?"minuta":s?"minutu":"minutou";case"mm":return t||s?_+(n(e)?"minuty":"minut"):_+"minutami";case"h":return t?"hodina":s?"hodinu":"hodinou";case"hh":return t||s?_+(n(e)?"hodiny":"hodin"):_+"hodinami";case"d":return t||s?"den":"dnem";case"dd":return t||s?_+(n(e)?"dny":"dní"):_+"dny";case"M":return t||s?"měsíc":"měsícem";case"MM":return t||s?_+(n(e)?"měsíce":"měsíců"):_+"měsíci";case"y":return t||s?"rok":"rokem";case"yy":return t||s?_+(n(e)?"roky":"let"):_+"lety"}}var s={name:"cs",weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),months:"leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),monthsShort:"led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),weekStart:1,yearStart:4,ordinal:function(e){return e+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"za %s",past:"před %s",s:r,m:r,mm:r,h:r,hh:r,d:r,dd:r,M:r,MM:r,y:r,yy:r}};t.d.locale(s,null,!0),e.default=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
