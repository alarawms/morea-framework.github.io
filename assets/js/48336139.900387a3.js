"use strict";(self.webpackChunkMorea_Framework=self.webpackChunkMorea_Framework||[]).push([[806],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=d(o),h=i,m=c["".concat(s,".").concat(h)]||c[h]||p[h]||a;return o?n.createElement(m,l(l({ref:t},u),{},{components:o})):n.createElement(m,l({ref:t},u))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,l=new Array(a);l[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:i,l[1]=r;for(var d=2;d<a;d++)l[d]=o[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},5552:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var n=o(7462),i=(o(7294),o(3905));const a={title:"Cloud development",pagination_next:"instructors/module-design"},l=void 0,r={unversionedId:"instructors/cloud-development",id:"instructors/cloud-development",title:"Cloud development",description:"If you've completed the Quick Start and Cloud Installation sections, you now have your own Morea website in a GitHub repository, and you've set up GitPod to access your code, build the site, and display it in a browser.",source:"@site/docs/instructors/cloud-development.md",sourceDirName:"instructors",slug:"/instructors/cloud-development",permalink:"/docs/instructors/cloud-development",draft:!1,tags:[],version:"current",lastUpdatedBy:"Philip Johnson",lastUpdatedAt:1678063248,formattedLastUpdatedAt:"Mar 6, 2023",frontMatter:{title:"Cloud development",pagination_next:"instructors/module-design"},sidebar:"tutorialSidebar",previous:{title:"Cloud installation",permalink:"/docs/instructors/cloud-installation"},next:{title:"Module design",permalink:"/docs/instructors/module-design"}},s={},d=[{value:"Customize your content",id:"customize-your-content",level:2},{value:"Modify theme &amp; navbar",id:"modify-theme--navbar",level:3},{value:"Unpublish modules",id:"unpublish-modules",level:3},{value:"Create a new  module",id:"create-a-new--module",level:3},{value:"Publish your changes",id:"publish-your-changes",level:2},{value:"Summary",id:"summary",level:2},{value:"Next step: module design!",id:"next-step-module-design",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you've completed the Quick Start and Cloud Installation sections, you now have your own Morea website in a GitHub repository, and you've set up GitPod to access your code, build the site, and display it in a browser. "),(0,i.kt)("p",null,"The following video provides a walkthrough of the instructions in this page."),(0,i.kt)("iframe",{width:"100%",height:"415",src:"https://www.youtube.com/embed/M0v-lRPzxw4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,i.kt)("h2",{id:"customize-your-content"},"Customize your content"),(0,i.kt)("p",null,"Now let's make some simple changes to your site."),(0,i.kt)("h3",{id:"modify-theme--navbar"},"Modify theme & navbar"),(0,i.kt)("p",null,'To begin, let\'s change the theme of the site from spacelab to cerulean, and get rid of the "Prerequisites" navbar menu item (because your course will not include any prerequisite modules).  Edit config.yml by changing morea_theme: to cerulean, and comment out the Prerequisites entry in morea_navbar_items:'),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(420).Z,width:"1500",height:"1432"})),(0,i.kt)("p",null,"Now click into your terminal window, press ",(0,i.kt)("inlineCode",{parentName:"p"},"control-c")," to terminate the Jekyll process, ",(0,i.kt)("inlineCode",{parentName:"p"},"control-p")," to retrieve the last command (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"bundle exec jekyll serve"),"), and ",(0,i.kt)("inlineCode",{parentName:"p"},"return")," to restart. Refresh the browser window in the other tab and it now should look like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(4657).Z,width:"1500",height:"1432"})),(0,i.kt)("p",null,"The Prerequisites menu item is gone, and the color theme is now blue."),(0,i.kt)("h3",{id:"unpublish-modules"},"Unpublish modules"),(0,i.kt)("p",null,"The example modules provide useful guidance on the syntax of Morea, but you don't want them to be part of your actual site. The easiest way to do that is to unpublish them. To unpublish the Introduction module, go into morea/modules/example-introduction/module-introduction.md, and change the published: field to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(8171).Z,width:"1500",height:"1432"})),(0,i.kt)("p",null,"Jekyll may report some errors in the terminal window after you save this change. You can ignore them. Just type ",(0,i.kt)("inlineCode",{parentName:"p"},"control-c")," followed by ",(0,i.kt)("inlineCode",{parentName:"p"},"bundle exec jekyll serve")," as before to restart Jekyll. The first thing you'll notice after refreshing your browser window is that the Introduction module no longer appears on the Modules page:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(6971).Z,width:"2444",height:"2334"})),(0,i.kt)("p",null,"More significantly, the outcomes, readings, experiences, and assessments associated with that module have also disappeared."),(0,i.kt)("p",null,"Now go ahead and unpublish the remaining three example modules in the same fashion. Restart Jekyll, and now there's no modules at all:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(707).Z,width:"1500",height:"1432"})),(0,i.kt)("h3",{id:"create-a-new--module"},"Create a new  module"),(0,i.kt)("p",null,"Let's start creating our own course content. Do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Make a copy of the example-introduction directory and call it introduction."),(0,i.kt)("li",{parentName:"ol"},"Once you've made the copy, delete the example-introduction directory."),(0,i.kt)("li",{parentName:"ol"},"In morea/introduction/module-introduction.md, edit the published: field from false to true."),(0,i.kt)("li",{parentName:"ol"},"Edit the title: field to your course number."),(0,i.kt)("li",{parentName:"ol"},"Edit the morea_id: field from example-introduction to introduction."),(0,i.kt)("li",{parentName:"ol"},"Edit the morea_icon_url: field from /example-introduction/ to /introduction/."),(0,i.kt)("li",{parentName:"ol"},"In module-introduction.md, delete all of the morea_readings: except for reading-syllabus. (You can delete the files as well if you like.)"),(0,i.kt)("li",{parentName:"ol"},"In module-introduction.md, delete all of the morea_experiences: except for experience-introduce-yourself. (You can delete the files as well if you like.) "),(0,i.kt)("li",{parentName:"ol"},"In module-introduction.md, edit the text following the front matter to refer to your course name.")),(0,i.kt)("p",null,"When you're done, module-introduction.md might look similar to this:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(9082).Z,width:"1500",height:"1432"})),(0,i.kt)("p",null,"Restart Jekyll, and the modules page might look like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(1716).Z,width:"1500",height:"1432"})),(0,i.kt)("p",null,"And the readings page might look like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(8581).Z,width:"1500",height:"1432"})),(0,i.kt)("p",null,"Whoops! The reading still refers to ICS 199!  Go into the reading-syllabus.md file and edit the title: field (as well as any other content you want).  Now restart Jekyll, and the readings page might look like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(9437).Z,width:"1500",height:"1432"})),(0,i.kt)("h2",{id:"publish-your-changes"},"Publish your changes"),(0,i.kt)("p",null,"Of course, there's lots more that needs to be done to this site, but let's now see how to publish these local modifications.  Click on the \"Source Control\" icon on the left side bar (it will have a badge indicating the number of changed files). Your browser window will now look something like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(3147).Z,width:"1500",height:"1432"})),(0,i.kt)("p",null,'It shows all of the files which have been changed since the last commit. In the above image, you can see that some existing files have been modified (indicated by an "M"), some files have been deleted (indicated by a "D"), and some files are new (indicating by a "U", which indicates they are currently "untracked" by GitHub). '),(0,i.kt)("p",null,'We want all the files in the repository to be "tracked" by GitHub. The easiest way to do that is to click on the "..." icon at the top of the Source Control pane, then select the "Changes" menu item, which will reveal a submenu including the "Stage All Changes" selection. '),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(8509).Z,width:"1500",height:"1432"})),(0,i.kt)("p",null,'Click "Stage All Changes". This will result in all of the changes being "tracked" by git. In this case, git now understands that several of the files have been renamed (as indicated by an "R"):'),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(5371).Z,width:"1500",height:"1432"})),(0,i.kt)("p",null,"Now you're ready to commit your changes to your local repository, and (if you like) push the changes to your copy of the repository at GitHub. "),(0,i.kt)("p",null,'To do that, type in a message indicating the nature of the changes (for example, "Fix introduction module"), then pull down the "Commit" menu and select (for example) "Commit and push":'),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(9382).Z,width:"1500",height:"1432"})),(0,i.kt)("p",null,"After it's finished, the Source Control panel's \"Commit\" button is grayed out, indicating that there all changes have been committed and there's no changes to commit:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(5328).Z,width:"1500",height:"1432"})),(0,i.kt)("p",null,'Morea is configured so that every time you push changes to GitHub, a GitHub Action is triggered to rebuild the site. In your browser, go to your repository on GitHub and click on "Actions". You should see something similar to this:'),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(7266).Z,width:"1500",height:"1432"})),(0,i.kt)("p",null,'This page indicates that the commit "Fix introduction module" triggered a build, which took 1 minute and 1 second. It successfully completed (as indicated by the green checkmark), which then triggered a "pages build and deployment" action, which also completed successfully.'),(0,i.kt)("p",null,"Let's confirm that our local changes are published by retrieving the URL to our site:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(5588).Z,width:"1500",height:"1432"})),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"This might seem complicated the very first time you do it, but with a little bit of practice, you'll find that content development with Morea is relatively efficient."),(0,i.kt)("p",null,'To review, there are a couple of one-time setup actions following the "Quick Start" instructions:'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Login to GitPod.io, and create a workspace for your repository."),(0,i.kt)("li",{parentName:"ol"},"Check permissions.")),(0,i.kt)("p",null,"Once that's done, develop your site by an iterative process of:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Type ",(0,i.kt)("inlineCode",{parentName:"li"},"bundle exec jekyll serve")," to build your site and display it in a browser window."),(0,i.kt)("li",{parentName:"ol"},"Edit source files and directories to change your course content."),(0,i.kt)("li",{parentName:"ol"},"Type ",(0,i.kt)("inlineCode",{parentName:"li"},"control-c")," followed by ",(0,i.kt)("inlineCode",{parentName:"li"},"control-p")," (which retrieves the ",(0,i.kt)("inlineCode",{parentName:"li"},"bundle exec jekyll serve")," command) to rebuild and redisplay your site.")),(0,i.kt)("p",null,"Finally, once you're ready to publish your changes, go to the Source Control panel:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Stage All Changes to make ensure all new files are tracked by GitHub."),(0,i.kt)("li",{parentName:"ol"},"Commit your changes to your local repository and push them to the GitHub copy of your repository."),(0,i.kt)("li",{parentName:"ol"},"Monitor the GitHub actions as they build and deploy your site, then check to see that your changes are public (usually takes about one minute).")),(0,i.kt)("h2",{id:"next-step-module-design"},"Next step: module design!"),(0,i.kt)("p",null,"Now that you have a basic understanding of using Morea, let's get to the real reason you are here: to create actual modules for actual courses."))}p.isMDXComponent=!0},420:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/gitpod-2.0-9c851266e2ca0c07dc9f32d0cd2bed92.png"},4657:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/gitpod-2.1-daf4082940c5be92754094df1e20620f.png"},8509:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/gitpod-2.10-3edde98353be4ba0c5d9acea1d9282d8.png"},5371:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/gitpod-2.11-b2132adf68bbdbf63065522f2f9155c3.png"},9382:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/gitpod-2.12-a7a5ffe67c214e54b231d11a15c6186f.png"},5328:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/gitpod-2.13-e0ffa0adac21e6f536be3f7d0bd17ffc.png"},7266:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/gitpod-2.14-783b413eb9cf16df794e305d8269738e.png"},5588:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/gitpod-2.15-b24f4e4d27ce00878b02103f90eebb76.png"},8171:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/gitpod-2.2-e4dcfb146478645a02bce15d9d1d017a.png"},6971:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/gitpod-2.3-184d7f4c1f5a1fc698765948e5299b20.png"},707:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/gitpod-2.4-e1a165e953204139730156769c2481a4.png"},9082:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/gitpod-2.5-0fb2cb2d871474bf60369bbbdbc48ce0.png"},1716:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/gitpod-2.6-af079a1141ce2970dc9d0b8896b051ad.png"},8581:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/gitpod-2.7-c647c6dd169bfe0b6f0c58c989b3bc21.png"},9437:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/gitpod-2.8-ecdafa40454f832402aa091a2656fe96.png"},3147:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/gitpod-2.9-97ad546a520051c92b8e2eb7ab94bc59.png"}}]);