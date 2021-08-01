"use strict";(self.webpackChunkMorea_Framework=self.webpackChunkMorea_Framework||[]).push([[9741],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),m=o,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return t?n.createElement(f,i(i({ref:r},c),{},{components:t})):n.createElement(f,i({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5815:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var n=t(2122),o=t(9756),a=(t(7294),t(3905)),i=["components"],s={title:"Morea index markdown files"},l=void 0,d={unversionedId:"developers/morea-index-markdown",id:"developers/morea-index-markdown",isDocsHomePage:!1,title:"Morea index markdown files",description:"The MoreaGenerator plugin processes the morea/ directory but doesn't control the layout and appearance of the site.   That part is done outside the morea/ directory, primarily through a set of index.md files illustrated below:",source:"@site/docs/developers/morea-index-markdown.md",sourceDirName:"developers",slug:"/developers/morea-index-markdown",permalink:"/docs/developers/morea-index-markdown",version:"current",lastUpdatedBy:"Philip Johnson",lastUpdatedAt:1627836639,formattedLastUpdatedAt:"8/1/2021",frontMatter:{title:"Morea index markdown files"},sidebar:"tutorialSidebar",previous:{title:"MoreaGenerator plugin",permalink:"/docs/developers/morea-generator"},next:{title:"Manage this site",permalink:"/docs/developers/manage-this-site"}},c=[],u={toc:c};function p(e){var r=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,s,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The MoreaGenerator plugin processes the ",(0,a.kt)("inlineCode",{parentName:"p"},"morea/")," directory but doesn't control the layout and appearance of the site.   That part is done outside the ",(0,a.kt)("inlineCode",{parentName:"p"},"morea/")," directory, primarily through a set of index.md files illustrated below:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(7600).Z})),(0,a.kt)("p",null,"You can see that there is a top-level index.md file (below favicon.ico) which becomes the home page for the site.  Then, there are five directories (modules, outcomes, readings, experiences, assessments) each with their own index.md file.  Each of these index.md files gets processed by Jekyll to produce the corresponding page in the site."),(0,a.kt)("p",null,"Most of the index.md files have a very similar structure. Here's the one from the readings directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'---\nlayout: default\ntitle: Readings\n---\n{% include breadcrumb-2.html %}\n\n<div class="container">\n  <h1>Readings <small class="header-small">"Passive" learning opportunities</small></h1>\n</div>\n\n{% if site.morea_overview_readings %}\n<div class="container">\n  {{ site.morea_overview_readings.content | markdownify }}\n</div>\n{% endif %}\n\n{% for module in site.morea_module_pages %}\n{% if module.morea_coming_soon != true and module.morea_readings.size > 0 %}\n<div class="{% cycle \'section-background-1\', \'section-background-2\' %}">\n  <div class="container">\n    <h2><small>Module:</small> <a href="{{ site.baseurl }}{{ module.module_page.url }}">{{ module.title }}</a></h2>\n    <div class="row">\n    {% for page_id in module.morea_readings %}\n      {% assign reading = site.morea_page_table[page_id] %}\n      {% include entity-card.html url=reading.morea_url title=reading.title summary=reading.morea_summary labels=reading.morea_labels %}\n    {% endfor %}\n    </div>\n  </div>\n</div>\n{% endif %}\n{% endfor %}\n')),(0,a.kt)("p",null,"Basically, the MoreaGenerator has updated the ",(0,a.kt)("inlineCode",{parentName:"p"},"site")," hashmap with key value pairs providing access to the various Morea instances. So, for example, ",(0,a.kt)("inlineCode",{parentName:"p"},"site.morea_module_pages")," provides a list of all the Morea modules found during generation.  In this page, we cycle through all of the modules and print out the readings associated with each module (that has readings)."))}p.isMDXComponent=!0},7600:function(e,r,t){r.Z=t.p+"assets/images/basic-template-src-directory-1106ed25ed2d17d8106860bf24c2ffc6.png"}}]);