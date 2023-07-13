/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../intl","../core/events","../core/maybe","../core/reactiveUtils","../core/string","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/has","../core/accessorSupport/decorators/subclass","./Widget","./Search/css","./Search/SearchResultRenderer","./Search/SearchViewModel","./support/widgetUtils","./support/decorators/messageBundle","./support/decorators/vmEvent","./support/jsxFactory","../intl/substitute"],(function(e,t,n,s,r,o,i,u,a,c,l,d,h,g,p,_,S,v,m,M,y){"use strict";const f=/<[a-z/][\s\S]*>/i,w=(e,t)=>{const n=i.escapeRegExpString(t).split(/\s/),s=new RegExp(`(${n.join("|")})`,"gi");return e.replace(s,(e=>`<strong>${e}</strong>`))};let I=function(t){function n(n,s){var r;return(r=t.call(this,n,s)||this)._activeMenuItemIndex=-1,r._inputNode=null,r._menuItemCount=0,r._sourceMenuButtonNode=null,r._sourceListNode=null,r._suggestionListNode=null,r._searchResultRenderer=new p,r._suggestController=null,r._searchController=null,r._locateFailed=!1,r._container=null,r.activeMenu="none",r.disabled=!1,r.iconClass=g.CSS.widgetIcon,r.icon=null,r.messages=null,r.messagesCommon=null,r.viewModel=new _,r._clearActiveMenu=()=>{r.activeMenu="none"},r._removeActiveMenu=e=>{const t=e.relatedTarget;t&&r._container?.contains(t)||r._clearActiveMenu()},r.addHandles([o.watch((()=>r.searchTerm),(e=>{(e&&"warning"===r.activeMenu||!e&&!r.get("viewModel.selectedSuggestion.location"))&&r._clearActiveMenu()})),o.on((()=>r.viewModel?.allSources),"change",(()=>r._watchSourceChanges())),o.watch((()=>r.activeMenu),(()=>r._resetActiveMenuItemIndex()),o.initial),o.watch((()=>r.viewModel?.defaultPopupTemplate),(t=>{t&&(t.content=r._renderSearchResultsContent.bind(e._assertThisInitialized(r)))}),o.initial)]),r}e._inherits(n,t);var i=n.prototype;return i.destroy=function(){this.removeAllHandles(),this._cancelSuggest(),this._cancelSearch(),this._searchResultRenderer=r.destroyMaybe(this._searchResultRenderer)},i.clear=function(){this.viewModel.clear()},i.focus=function(){this._inputNode?.focus(),this.emit("search-focus")},i.blur=function(){this._inputNode?.blur(),this.emit("search-blur")},i.search=async function(e){this._clearActiveMenu(),this._cancelSuggest(),this._cancelSearch();const t=new AbortController,{signal:n}=t;this._searchController=t;try{const s=await this.viewModel.search(e,{signal:n});if(this._searchController!==t)return;return this.activeMenu=s?.numResults?"none":"warning",this._searchController=null,s}catch(s){if(this._searchController!==t)return;return this._clearActiveMenu(),void(this._searchController=null)}},i.suggest=async function(e){this._cancelSuggest();const t=new AbortController,{signal:n}=t;this._suggestController=t;try{const s=await this.viewModel.suggest(e,null,{signal:n});if(this._suggestController!==t)return;return this._suggestController=null,s?.numResults&&this._openSuggestionMenu(),this._scrollToTopSuggestion(),s}catch(s){return this._suggestController!==t||(this._suggestController=null),null}},i.render=function(){const{state:e}=this.viewModel,t={[g.CSS.disabled]:"disabled"===e,[g.CSS.esriWidgetDisabled]:this.disabled};return M.tsx("div",{class:this.classes(g.CSS.base,t)},"loading"===e?this.renderLoader():this.renderContainer())},i.renderSubmitButton=function(){const{messages:e,disabled:t}=this;return M.tsx("button",{"aria-label":e.searchButtonTitle,bind:this,disabled:t,class:this.classes(g.CSS.submitButton,g.CSS.button),key:"esri-search__submit-button",onclick:this._handleSearchButtonClick,title:e.searchButtonTitle,type:"button"},M.tsx("span",{"aria-hidden":"true",class:g.CSS.searchIcon}))},i.renderWarningMenu=function(){return M.tsx("div",{key:"esri-search__error-menu",class:this.classes(g.CSS.menu,g.CSS.warningMenu)},M.tsx("div",{class:g.CSS.warningMenuBody},this.renderWarning()))},i.renderSourceMenuButton=function(){const{messages:e,activeMenu:t,sourceMenuId:n,sourceMenuButtonId:s,disabled:r}=this,{activeSourceIndex:o,allSources:i}=this.viewModel;return i.length>1?M.tsx("button",{id:s,key:"esri-search__source-menu-button",bind:this,disabled:r,"aria-label":e.searchIn,title:e.searchIn,"aria-haspopup":"true","aria-expanded":("source"===t).toString(),"aria-controls":n,class:this.classes(g.CSS.sourcesButton,g.CSS.button),onclick:this._handleSourcesMenuToggleClick,onfocus:this._handleSourcesMenuToggleFocus,afterCreate:S.storeNode,"data-node-ref":"_sourceMenuButtonNode",type:"button"},M.tsx("span",{"aria-hidden":"true",class:g.CSS.dropdownIcon}),M.tsx("span",{"aria-hidden":"true",class:g.CSS.dropupIcon}),M.tsx("span",{class:g.CSS.sourceName},this._getSourceName(o))):null},i.renderSourcesList=function(){const{allSources:e,searchAllEnabled:t}=this.viewModel,{_activeMenuItemIndex:n,activeMenu:s,sourceMenuId:r,sourceMenuButtonId:o}=this,i="source"===s&&n>-1?this._buildId("source-item",n):null;return e.length>1?M.tsx("ul",{"aria-activedescendant":i,"aria-labelledby":o,id:r,role:"menu",bind:this,afterCreate:S.storeNode,onkeydown:this._handleSourceMenuKeydown,onkeyup:this._handleSourceMenuKeyup,"data-node-ref":"_sourceListNode",class:g.CSS.menuList,tabIndex:-1},t?this.renderSource(_.ALL_INDEX):null,e.map(((e,t)=>this.renderSource(t))).toArray()):null},i.renderSourcesMenu=function(){const{allSources:e}=this.viewModel;return e.length>1?M.tsx("div",{key:"esri-search__source-menu",class:this.classes(g.CSS.menu,g.CSS.sourcesMenu)},this.renderSourcesList()):null},i.renderLoader=function(){const{messages:e,messagesCommon:t,disabled:n}=this;return M.tsx("div",{class:g.CSS.loader,key:"base-loader",tabIndex:n?-1:void 0},M.tsx("span",{"aria-hidden":"true",class:g.CSS.loaderAnimation}),M.tsx("span",{class:g.CSS.fallbackText},e.searchButtonTitle),M.tsx("span",{class:g.CSS.loaderText},t.loading))},i.renderContainer=function(){const{allSources:e,state:t}=this.viewModel,{activeMenu:n}=this,s={[g.CSS.hasMultipleSources]:e.length>1,[g.CSS.isLoading]:"loading"===t,[g.CSS.isSearching]:"searching"===t,[g.CSS.showWarning]:"warning"===n,[g.CSS.showSources]:"source"===n,[g.CSS.showSuggestions]:"suggestion"===n};return M.tsx("div",{tabIndex:-1,afterCreate:e=>{this._container=e,e.addEventListener("focusout",this._removeActiveMenu)},afterRemoved:e=>{e.removeEventListener("focusout",this._removeActiveMenu)},class:this.classes(s,g.CSS.container),key:"base-container"},this.renderSourceMenuButton(),this.renderSourcesMenu(),this.renderInputContainer(),this.renderSubmitButton(),this.renderWarningMenu())},i.renderClearButton=function(){return this.searchTerm?M.tsx("button",{bind:this,disabled:this.disabled,class:this.classes(g.CSS.clearButton,g.CSS.button),key:"esri-search__clear-button",onclick:this._handleClearButtonClick,onfocus:this._clearActiveMenu,title:this.messages.clearButtonTitle,type:"button"},M.tsx("span",{"aria-hidden":"true",class:g.CSS.clearIcon})):null},i.renderLocationGroup=function(){const{messages:e,locationEnabled:t,displayedSearchTerm:n}=this,s=t&&!n,r="suggestion"===this.activeMenu&&0===this._activeMenuItemIndex;return s?M.tsx("ul",{role:"group",key:"esri-search__suggestion-list-current-location",class:this.classes(g.CSS.menuList,g.CSS.suggestionList,g.CSS.suggestionListCurrentLocation)},M.tsx("li",{bind:this,"data-current-location-item":!0,onclick:this._handleUseCurrentLocationClick,id:this._buildId("suggestion-item",0),"aria-selected":("suggestion"===this.activeMenu&&0===this._activeMenuItemIndex).toString(),role:"option",class:this.classes(g.CSS.menuItem,r?g.CSS.menuItemFocus:null)},M.tsx("span",{"aria-hidden":"true",class:g.CSS.locate})," ",e.useCurrentLocation)):null},i.renderInput=function(){const{activeMenu:e,locationEnabled:t,displayedSearchTerm:n,messages:s,suggestionsMenuId:r,inputId:o,_activeMenuItemIndex:i,disabled:u}=this,{maxInputLength:a,placeholder:c,searchTerm:l,suggestionCount:d}=this.viewModel,h=!(!(t&&!n)&&!d),p="suggestion"===e&&i>-1?this._buildId("suggestion-item",i):null;return M.tsx("input",{"aria-activedescendant":p,"aria-autocomplete":"list","aria-expanded":(h&&"suggestion"===e).toString(),"aria-controls":h?r:null,"aria-haspopup":"listbox","aria-label":s.searchButtonTitle,bind:this,disabled:u,placeholder:c,maxlength:a,autocomplete:"off",type:"text",class:this.classes(g.CSS.esriInput,g.CSS.input),value:l,id:o,role:"combobox",onkeyup:this._handleInputKeyup,onclick:this._openSuggestionMenu,oninput:this._handleInputPaste,onpaste:this._handleInputPaste,afterCreate:S.storeNode,"data-node-ref":"_inputNode",onfocus:this.focus,onblur:this.blur,title:l?"":c})},i.renderForm=function(){return M.tsx("form",{key:"esri-search__form",bind:this,disabled:this.disabled,class:g.CSS.form,onsubmit:this._formSubmit,role:"search"},this.renderInput())},i.renderSuggestList=function(e){const{sourceIndex:t}=e,{results:n}=e,s=n?.length;return s?M.tsx("ul",{role:"group",key:`esri-search__suggestion-list-${t}`,class:this.classes(g.CSS.menuList,g.CSS.suggestionList)},n?.map((e=>this.renderSuggestion(e,this._menuItemCount++)))):null},i.renderSuggestionsGroup=function(){const{suggestions:e}=this.viewModel;return e?e.map((e=>[this.renderSuggestionHeader(e),this.renderSuggestList(e)])):[]},i.renderSuggestionsMenu=function(){const{displayedSearchTerm:e,locationEnabled:t,suggestionsMenuId:n,inputId:s}=this,{suggestionCount:r}=this.viewModel,o=t&&!e||r;return this._menuItemCount=0,o?M.tsx("div",{id:n,key:"esri-search__suggestions-menu",class:this.classes(g.CSS.menu,g.CSS.suggestionsMenu),role:"listbox","aria-labelledby":s,bind:this,afterCreate:S.storeNode,"data-node-ref":"_suggestionListNode"},this.renderLocationGroup(),this.renderSuggestionsGroup()):null},i.renderInputContainer=function(){return M.tsx("div",{key:"esri-search__input-container",class:g.CSS.inputContainer},this.renderForm(),this.renderSuggestionsMenu(),this.renderClearButton())},i.renderSuggestionHeader=function(e){const{allSources:t,activeSourceIndex:n}=this.viewModel,{sourceIndex:s}=e,r=e.results?.length,o=t.length>1&&n===_.ALL_INDEX;return r&&o?M.tsx("div",{key:`esri-search__suggestion-header-${s}`,class:g.CSS.menuHeader},this._getSourceName(s)):null},i.renderSuggestion=function(e,t){const{_activeMenuItemIndex:n,viewModel:{searchTerm:s}}=this;if(!s)return;const r="suggestion"===this.activeMenu&&n===t;return M.tsx("li",{bind:this,id:this._buildId("suggestion-item",t),"aria-selected":("suggestion"===this.activeMenu&&this._activeMenuItemIndex===t).toString(),onclick:this._handleSuggestionClick,key:`esri-search__suggestion_${t}`,"data-suggestion":e,role:"option",innerHTML:this._getSuggestResultHTML(e.text,s),class:this.classes(g.CSS.menuItem,r?g.CSS.menuItemFocus:null)})},i.renderSource=function(e){const{activeSourceIndex:t,searchAllEnabled:n}=this.viewModel,s={[g.CSS.menuItemActive]:e===t,[g.CSS.menuItemFocus]:"source"===this.activeMenu&&e===(n?this._activeMenuItemIndex-1:this._activeMenuItemIndex)},r=n?e+1:e;return M.tsx("li",{bind:this,key:`esri-search__source-${e}`,id:this._buildId("source-item",r),"aria-checked":(e===t).toString(),onclick:this._handleSourceClick,"data-source-index":e,role:"menuitemradio",class:this.classes(g.CSS.source,g.CSS.menuItem,s)},this._getSourceName(e))},i.renderNoResultsWarning=function(e){const{messages:t}=this,n=e?y.substitute(t.noResultsFoundForValue,{value:`"${e}"`}):t.noResultsFound;return M.tsx("div",{key:"esri-search__no_results"},M.tsx("div",{class:g.CSS.warningMenuHeader},t.noResults),M.tsx("div",{class:g.CSS.warningMenuText},n))},i.renderEmptySearchWarning=function(){const{messages:e}=this;return M.tsx("div",{key:"esri-search__empty-search"},M.tsx("span",{"aria-hidden":"true",class:g.CSS.noticeIcon}),M.tsx("span",{class:g.CSS.noValueText},e.emptyValue))},i.renderLocateWarning=function(){const{messages:e}=this;return M.tsx("div",{key:"esri-search__locate-error"},M.tsx("span",{"aria-hidden":"true",class:g.CSS.noticeIcon}),M.tsx("span",{class:g.CSS.noValueText},e.locateError))},i.renderWarning=function(){const{displayedSearchTerm:e,_locateFailed:t}=this,{viewModel:n}=this;return t?this.renderLocateWarning():n.selectedSuggestion?.location||e?this.renderNoResultsWarning(e):this.renderEmptySearchWarning()},i._resetActiveMenuItemIndex=function(){this._activeMenuItemIndex=-1},i._buildId=function(e,t){return`${this.id}-${e}${void 0===t?"":`-${t}`}`},i._watchSourceChanges=function(){const{viewModel:{allSources:e}}=this,t="sources";this.removeHandles(t),e.forEach((e=>this.addHandles(o.watch((()=>e.name),(()=>this.scheduleRender())),t)))},i._handleSourcesMenuToggleFocus=function(){"source"!==this.activeMenu&&this._clearActiveMenu()},i._handleSourcesMenuToggleClick=function(){const e="source"===this.activeMenu;this.activeMenu=e?"none":"source",this.renderNow(),"source"===this.activeMenu&&this._sourceListNode?.focus()},i._handleClearButtonClick=function(){this.viewModel.clear(),this._focus()},i._handleSearchButtonClick=function(){this.search()},i._handleSuggestionClick=function(e){const t=C(e.currentTarget);t&&(this._focus(),this.search(t))},i._handleUseCurrentLocationClick=function(){this._useCurrentLocation()},i._useCurrentLocation=function(){this._focus("none"),this._cancelSuggest(),this._cancelSearch();const e=new AbortController,{signal:t}=e;this._searchController=e;(async()=>{try{const e=await this.viewModel.searchNearby({signal:t});this.activeMenu=e?.numResults?"none":"warning"}catch(e){this._locateFailed=!0,this.activeMenu="warning"}finally{this._searchController=null}})()},i._handleSourceClick=function(e){this._setSourceFromMenuItem(e.currentTarget)},i._setSourceFromMenuItem=function(e){if(!e)return;const t=b(e);null!=t&&(this.viewModel.activeSourceIndex=t,this._clearActiveMenu(),this._sourceMenuButtonNode?.focus())},i._cancelSuggest=function(){this._suggestController=r.abortMaybe(this._suggestController)},i._cancelSearch=function(){this._searchController=r.abortMaybe(this._searchController),this._locateFailed=!1},i._handleInputKeyup=function(e){const t=s.eventKey(e);if(e.ctrlKey||e.metaKey||"Copy"===t||"ArrowLeft"===t||"ArrowRight"===t||"Shift"===t)return;if("Tab"===t||"Escape"===t||e.shiftKey&&"Tab"===t)return this._cancelSuggest(),void("Escape"===t&&this._clearActiveMenu());const n="Home"===t||"End"===t||"ArrowUp"===t||"ArrowDown"===t;if("Enter"===t&&this._activeMenuItemIndex<0)return void this._cancelSuggest();const r=this._suggestionListNode?.getElementsByTagName("li");if(r?.length){if("suggestion"!==this.activeMenu&&this._openSuggestionMenu(),n)return e.preventDefault(),this._cancelSuggest(),void this._handleItemNavigation(t,r,this._suggestionListNode);const s=r[this._activeMenuItemIndex];if("Enter"===t&&s){const e=C(s);return void(e?(this._focus(),this.search(e)):x(s)&&this._useCurrentLocation())}}this.viewModel.searchTerm&&this.suggest()},i._handleItemNavigation=function(e,t,n){const s=this._activeMenuItemIndex;"Home"===e&&(this._activeMenuItemIndex=0),"End"===e&&(this._activeMenuItemIndex=t.length-1),"ArrowUp"===e&&(this._activeMenuItemIndex=this._activeMenuItemIndex<=0?t.length-1:this._activeMenuItemIndex-1),"ArrowDown"===e&&(this._activeMenuItemIndex=this._activeMenuItemIndex===t.length-1?0:this._activeMenuItemIndex+1),s!==this._activeMenuItemIndex&&n&&S.keepMenuItemWithinView(t[this._activeMenuItemIndex],n)},i._scrollToTopSuggestion=function(){this._suggestionListNode&&(this._suggestionListNode.scrollTop=0)},i._openSuggestionMenu=function(){this.activeMenu="suggestion"},i._handleInputPaste=function(e){const t=e.target;this.viewModel.searchTerm!==t.value&&(this.viewModel.searchTerm=t.value),this.viewModel.searchTerm&&this.suggest()},i._handleSourceMenuKeydown=function(e){const t=s.eventKey(e);if(S.isActivationKey(t)){e.preventDefault();const t=this._sourceListNode?.getElementsByTagName("li"),n=t?.[this._activeMenuItemIndex];this._setSourceFromMenuItem(n)}else"ArrowUp"!==t&&"ArrowDown"!==t&&"End"!==t&&"Home"!==t||e.preventDefault()},i._handleSourceMenuKeyup=function(e){const t=s.eventKey(e),n="ArrowUp"===t||"ArrowDown"===t||"End"===t||"Home"===t;if(n&&e.preventDefault(),"Escape"===t)return this._clearActiveMenu(),void this._sourceMenuButtonNode?.focus();const r=this._sourceListNode?.getElementsByTagName("li");return r&&0!==r.length&&n?("source"!==this.activeMenu&&(this.activeMenu="source"),void this._handleItemNavigation(t,r,this._sourceListNode?.parentElement)):void 0},i._focus=function(e){this.focus(),e&&(this.activeMenu=e)},i._formSubmit=function(e){e.preventDefault(),-1===this._activeMenuItemIndex&&this.search()},i._getSourceName=function(e){const{messages:t}=this,n=this.viewModel,{allSources:s}=n,r=s.at(e);return e===_.ALL_INDEX?t.all:r&&r.name||t.untitledSource},i._getSuggestResultHTML=function(e,t){return e?f.test(e)?e:w(e,t):this.messages.untitledResult},i._renderSearchResultsContent=function(){return this._searchResultRenderer.showMoreResultsOpen=!1,this._searchResultRenderer.viewModel=this.viewModel,this._searchResultRenderer},e._createClass(n,[{key:"displayedSearchTerm",get:function(){return`${this.viewModel.searchTerm}`.trim()}},{key:"inputId",get:function(){return this._buildId("input")}},{key:"suggestionsMenuId",get:function(){return this._buildId("suggest-menu")}},{key:"sourceMenuId",get:function(){return this._buildId("source-menu")}},{key:"sourceMenuButtonId",get:function(){return this._buildId("source-menu-button")}},{key:"activeSource",get:function(){return this.viewModel?.activeSource}},{key:"activeSourceIndex",get:function(){return this.viewModel.activeSourceIndex},set:function(e){this.viewModel.activeSourceIndex=e}},{key:"allPlaceholder",get:function(){return this.viewModel.allPlaceholder},set:function(e){this.viewModel.allPlaceholder=e}},{key:"allSources",get:function(){return this.viewModel.allSources}},{key:"autoNavigate",get:function(){return this.viewModel.autoNavigate},set:function(e){this.viewModel.autoNavigate=e}},{key:"autoSelect",get:function(){return this.viewModel.autoSelect},set:function(e){this.viewModel.autoSelect=e}},{key:"defaultSources",get:function(){return this.viewModel.defaultSources}},{key:"goToOverride",get:function(){return this.viewModel.goToOverride},set:function(e){this.viewModel.goToOverride=e}},{key:"includeDefaultSources",get:function(){return this.viewModel.includeDefaultSources},set:function(e){this.viewModel.includeDefaultSources=e}},{key:"label",get:function(){return this.messages?.widgetLabel??""},set:function(e){this._overrideIfSome("label",e)}},{key:"locationEnabled",get:function(){return this.viewModel.locationEnabled},set:function(e){this.viewModel.locationEnabled=e}},{key:"maxResults",get:function(){return this.viewModel.maxResults},set:function(e){this.viewModel.maxResults=e}},{key:"maxSuggestions",get:function(){return this.viewModel.maxSuggestions},set:function(e){this.viewModel.maxSuggestions=e}},{key:"minSuggestCharacters",get:function(){return this.viewModel.minSuggestCharacters},set:function(e){this.viewModel.minSuggestCharacters=e}},{key:"popupEnabled",get:function(){return this.viewModel.popupEnabled},set:function(e){this.viewModel.popupEnabled=e}},{key:"popupTemplate",get:function(){return this.viewModel.popupTemplate},set:function(e){this.viewModel.popupTemplate=e}},{key:"portal",get:function(){return this.viewModel?.portal},set:function(e){this.viewModel&&(this.viewModel.portal=e)}},{key:"resultGraphic",get:function(){return this.viewModel.resultGraphic},set:function(e){this.viewModel.resultGraphic=e}},{key:"resultGraphicEnabled",get:function(){return this.viewModel.resultGraphicEnabled},set:function(e){this.viewModel.resultGraphicEnabled=e}},{key:"results",get:function(){return this.viewModel.results}},{key:"searchAllEnabled",get:function(){return this.viewModel.searchAllEnabled},set:function(e){this.viewModel.searchAllEnabled=e}},{key:"searchTerm",get:function(){return this.viewModel.searchTerm},set:function(e){this.viewModel.searchTerm=e}},{key:"selectedResult",get:function(){return this.viewModel.selectedResult}},{key:"sources",get:function(){return this.viewModel.sources},set:function(e){this.viewModel.sources=e}},{key:"suggestions",get:function(){return this.viewModel.suggestions}},{key:"suggestionsEnabled",get:function(){return this.viewModel.suggestionsEnabled},set:function(e){this.viewModel.suggestionsEnabled=e}},{key:"view",get:function(){return this.viewModel.view},set:function(e){this.viewModel.view=e}}]),n}(h);function C(e){return e?.["data-suggestion"]}function b(e){return e?.["data-source-index"]}function x(e){return!!e?.["data-current-location-item"]}t.__decorate([u.property()],I.prototype,"_activeMenuItemIndex",void 0),t.__decorate([u.property()],I.prototype,"displayedSearchTerm",null),t.__decorate([u.property({readOnly:!0})],I.prototype,"inputId",null),t.__decorate([u.property({readOnly:!0})],I.prototype,"suggestionsMenuId",null),t.__decorate([u.property({readOnly:!0})],I.prototype,"sourceMenuId",null),t.__decorate([u.property({readOnly:!0})],I.prototype,"sourceMenuButtonId",null),t.__decorate([u.property()],I.prototype,"activeMenu",void 0),t.__decorate([u.property({readOnly:!0})],I.prototype,"activeSource",null),t.__decorate([u.property()],I.prototype,"activeSourceIndex",null),t.__decorate([u.property()],I.prototype,"allPlaceholder",null),t.__decorate([u.property({readOnly:!0})],I.prototype,"allSources",null),t.__decorate([u.property()],I.prototype,"autoNavigate",null),t.__decorate([u.property()],I.prototype,"autoSelect",null),t.__decorate([u.property({readOnly:!0})],I.prototype,"defaultSources",null),t.__decorate([u.property()],I.prototype,"disabled",void 0),t.__decorate([u.property()],I.prototype,"goToOverride",null),t.__decorate([u.property()],I.prototype,"iconClass",void 0),t.__decorate([u.property()],I.prototype,"icon",void 0),t.__decorate([u.property()],I.prototype,"includeDefaultSources",null),t.__decorate([u.property()],I.prototype,"label",null),t.__decorate([u.property()],I.prototype,"locationEnabled",null),t.__decorate([u.property()],I.prototype,"maxResults",null),t.__decorate([u.property()],I.prototype,"maxSuggestions",null),t.__decorate([u.property(),v.messageBundle("esri/widgets/Search/t9n/Search")],I.prototype,"messages",void 0),t.__decorate([u.property(),v.messageBundle("esri/t9n/common")],I.prototype,"messagesCommon",void 0),t.__decorate([u.property()],I.prototype,"minSuggestCharacters",null),t.__decorate([u.property()],I.prototype,"popupEnabled",null),t.__decorate([u.property()],I.prototype,"popupTemplate",null),t.__decorate([u.property()],I.prototype,"portal",null),t.__decorate([u.property()],I.prototype,"resultGraphic",null),t.__decorate([u.property()],I.prototype,"resultGraphicEnabled",null),t.__decorate([u.property({readOnly:!0})],I.prototype,"results",null),t.__decorate([u.property()],I.prototype,"searchAllEnabled",null),t.__decorate([u.property()],I.prototype,"searchTerm",null),t.__decorate([u.property({readOnly:!0})],I.prototype,"selectedResult",null),t.__decorate([u.property()],I.prototype,"sources",null),t.__decorate([u.property({readOnly:!0})],I.prototype,"suggestions",null),t.__decorate([u.property()],I.prototype,"suggestionsEnabled",null),t.__decorate([u.property()],I.prototype,"view",null),t.__decorate([m.vmEvent(["search-complete","search-clear","search-start","select-result","suggest-start","suggest-complete"]),u.property({type:_})],I.prototype,"viewModel",void 0),I=t.__decorate([d.subclass("esri.widgets.Search")],I);return I}));
