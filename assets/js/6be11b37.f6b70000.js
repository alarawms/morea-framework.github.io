"use strict";(self.webpackChunkMorea_Framework=self.webpackChunkMorea_Framework||[]).push([[8199],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5298:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={title:"Private files"},c=void 0,p={unversionedId:"instructors/private-files",id:"instructors/private-files",isDocsHomePage:!1,title:"Private files",description:"In many cases, you might want to keep files in your repository that are not made a part of the published website.",source:"@site/docs/instructors/private-files.md",sourceDirName:"instructors",slug:"/instructors/private-files",permalink:"/docs/instructors/private-files",tags:[],version:"current",lastUpdatedBy:"Philip Johnson",lastUpdatedAt:1627836639,formattedLastUpdatedAt:"8/1/2021",frontMatter:{title:"Private files"},sidebar:"tutorialSidebar",previous:{title:"Navigation bar configuration",permalink:"/docs/instructors/navbar-configuration"},next:{title:"Linking within Morea",permalink:"/docs/instructors/linking-in-morea"}},l=[],u={toc:l};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In many cases, you might want to keep files in your repository that are not made a part of the published website."),(0,o.kt)("p",null,"The Morea processor ignores any directories inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"morea/")," directory that are named ",(0,o.kt)("inlineCode",{parentName:"p"},"_ignore"),".  So, if you\ncreate a directory called ",(0,o.kt)("inlineCode",{parentName:"p"},"java/")," to hold the contents of the Java module, and then put a subdirectory inside ",(0,o.kt)("inlineCode",{parentName:"p"},"java/")," called ",(0,o.kt)("inlineCode",{parentName:"p"},"_ignore"),", the contents of that directory will not appear in the published site.  This is a nice way to keep tests associated with a module but not make them available on the site."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Private files are only private if your repository is private. If you did not make your repository private when you created it, then all of the files are accessable! "),(0,o.kt)("p",{parentName:"div"},'Note that the organization associated with your Morea repo must be on the "Team" plan in order for you to have a private repo that can also publish itself as a GitHub Page.  If you have been authorized for the GitHub Educator Plan, then you can upgrade your organizations to the Team plan for free.  See the ',(0,o.kt)("a",{parentName:"p",href:"/docs/instructors/quick-start"},"Quick Start")," page for details.  "))))}d.isMDXComponent=!0}}]);