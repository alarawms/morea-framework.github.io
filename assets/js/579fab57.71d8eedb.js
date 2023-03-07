"use strict";(self.webpackChunkMorea_Framework=self.webpackChunkMorea_Framework||[]).push([[2777],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var i=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,i,a=function(e,t){if(null==e)return{};var o,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=i.createContext({}),u=function(e){var t=i.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(o),d=a,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||r;return o?i.createElement(m,n(n({ref:t},c),{},{components:o})):i.createElement(m,n({ref:t},c))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,n=new Array(r);n[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,n[1]=s;for(var u=2;u<r;u++)n[u]=o[u];return i.createElement.apply(null,n)}return i.createElement.apply(null,o)}d.displayName="MDXCreateElement"},8472:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var i=o(7462),a=(o(7294),o(3905));const r={title:"Quick start"},n=void 0,s={unversionedId:"instructors/quick-start",id:"instructors/quick-start",title:"Quick start",description:'This quick start takes you through the steps necessary to set up and publish a new Morea course site with "default" content.',source:"@site/docs/instructors/quick-start.md",sourceDirName:"instructors",slug:"/instructors/quick-start",permalink:"/docs/instructors/quick-start",draft:!1,tags:[],version:"current",lastUpdatedBy:"Philip Johnson",lastUpdatedAt:1677882068,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{title:"Quick start"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/category/getting-started"},next:{title:"Cloud development",permalink:"/docs/category/cloud-development"}},l={},u=[{value:"Join GitHub",id:"join-github",level:2},{value:"Create your course repository",id:"create-your-course-repository",level:2},{value:"Check workflow permissions",id:"check-workflow-permissions",level:2},{value:"Edit the config.yml file",id:"edit-the-configyml-file",level:2},{value:"Verify that GitHub built the site",id:"verify-that-github-built-the-site",level:2},{value:"Verify the GitHub Pages settings",id:"verify-the-github-pages-settings",level:2},{value:"Display your published course website",id:"display-your-published-course-website",level:2},{value:"Choose local or cloud development",id:"choose-local-or-cloud-development",level:2}],c={toc:u},p="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'This quick start takes you through the steps necessary to set up and publish a new Morea course site with "default" content.'),(0,a.kt)("p",null,"The following video provides a walkthrough of the instructions in this page. "),(0,a.kt)("iframe",{width:"100%",height:"415",src:"https://www.youtube.com/embed/c_zSbqrMX4U",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,a.kt)("h2",{id:"join-github"},"Join GitHub"),(0,a.kt)("p",null,"If you haven't already, ",(0,a.kt)("a",{parentName:"p",href:"https://help.github.com/articles/signing-up-for-a-new-github-account"},"sign up for GitHub"),". There are two common types of GitHub accounts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Free Accounts.  You can use a GitHub "Free" account to create Morea sites, but with one important restriction: you cannot make your repository private ',(0,a.kt)("em",{parentName:"p"},"and")," publish the site with GitHub Pages.  If your Morea source code is in a public GitHub repo, then you should not store private information (such as tests) in your repo.  If you are OK with anyone (including students) seeing every file stored in your Morea repo, then a Free Account is fine. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Education Accounts.  If you are approved for a GitHub "Educator" account, then you can upgrade the organisation containing your Morea site repo to "Team" status for free. Organizations under the "Team" plan can have private GitHub repos that are published with GitHub Pages. This is quite useful, because it means you can store tests and other confidential information in your repo using Morea\'s ',(0,a.kt)("a",{parentName:"p",href:"/docs/instructors/private-files"},"private files")," mechanism.  If you are associated with an educational institution, you can  ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/education/explore-the-benefits-of-teaching-and-learning-with-github-education/use-github-in-your-classroom-and-research/apply-for-an-educator-or-researcher-discount"},"apply for an educator or researcher discount"),". Once you have been approved for the GitHub Educator Plan, you can go to the ",(0,a.kt)("a",{parentName:"p",href:"https://education.github.com/toolbox/offers/github-org-upgrades"},"Upgrade Organization")," page to upgrade the organization containing your Morea site repo to the Team plan for free."))),(0,a.kt)("h2",{id:"create-your-course-repository"},"Create your course repository"),(0,a.kt)("p",null,"Login to GitHub and go to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/morea-framework/morea"},"https://github.com/morea-framework/morea"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:o(1001).Z,width:"2282",height:"1848"})),(0,a.kt)("p",null,'Next, click "Use this template" and fill out the page:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select the appropriate owner (either your personal account or an organization)"),(0,a.kt)("li",{parentName:"ul"},"Provide a repository name (typically the course number and semester)."),(0,a.kt)("li",{parentName:"ul"},"Optionally, make the repo private (if the organization associated with this repo is on the Team plan). Otherwise, you must keep the repo public so that you can publish your site using GitHub Pages."),(0,a.kt)("li",{parentName:"ul"},"Include all branches.")),(0,a.kt)("p",null,"It should look like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:o(7522).Z,width:"2394",height:"2324"})),(0,a.kt)("p",null,'When you are done, click on "Create repository from template". After the repo is created, you should be at a page in your own GitHub account with a copy of the Morea files:'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:o(697).Z,width:"2394",height:"2324"})),(0,a.kt)("h2",{id:"check-workflow-permissions"},"Check workflow permissions"),(0,a.kt)("p",null,'In order for GitHub to build your Morea site automatically whenever you commit a change to the repo, you must ensure that the workflow permissions for the site allow both read and write access. To do this, click on the "Settings" tab at the top of the page for your new repo, then click on the "Actions" tab in the left sidebar, and finally click on the "General" link inside the Actions tab. You should see a page that looks like this:'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:o(1874).Z,width:"1200",height:"1555"})),(0,a.kt)("p",null,'In this example, the bottom section, "Workflow permissions", indicates that the default permissions are "Read repository contents and package permissions".  If this is the case for your repo, you need to click the radio button for "Read and write permissions", then click the "Save" button to save this change.  Afterwards, this page should look like this:'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:o(4049).Z,width:"1200",height:"1555"})),(0,a.kt)("h2",{id:"edit-the-configyml-file"},"Edit the config.yml file"),(0,a.kt)("p",null,'Now, click on the "Code" tab at the top of the page to return to the listing of files in this repository. Scroll down the list of files until you see "_config.yml", and click it. You should see the following:'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:o(9120).Z,width:"2394",height:"2324"})),(0,a.kt)("p",null,"Click on the pencil icon to edit this file within your browser:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:o(4761).Z,width:"2394",height:"2324"})),(0,a.kt)("p",null,"Make the following changes to this file:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Edit the "name:" field to specify your course name. (Example: "CS 299 Fall 2021")'),(0,a.kt)("li",{parentName:"ul"},'Edit the "baseurl:" field to specify your repository name. (Example: "/cs299fall21").')),(0,a.kt)("p",null,"Here's what it might look like:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:o(3938).Z,width:"2394",height:"2324"})),(0,a.kt)("p",null,'Now scroll down to the bottom of the page, write in a commit comment (i.e. "Update _config.yml"), and click "Commit changes".'),(0,a.kt)("h2",{id:"verify-that-github-built-the-site"},"Verify that GitHub built the site"),(0,a.kt)("p",null,'Next, click on the "Actions" tab. You will see a workflow running. This task is building your site and deploying the HTML pages to the gh-pages branch of your repository. When it has completed, you should see a green checkbox next to your commit:'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:o(8032).Z,width:"2394",height:"2324"})),(0,a.kt)("p",null,"The first couple of workflow runs could take several minutes, but these runs result in caching that should decrease subsequent build times substantially.  After this initial setup, your site should typically build in less than a minute."),(0,a.kt)("h2",{id:"verify-the-github-pages-settings"},"Verify the GitHub Pages settings"),(0,a.kt)("p",null,'Now click on the Settings tab, then click "Pages". You should see something like the following:'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:o(4771).Z,width:"2394",height:"2324"})),(0,a.kt)("p",null,"Check the following things:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'In the "Build and Deployment" section, make sure that "Source" is "Deploy from a branch", and that the branch is "gh-pages". If you have to change this setting, then this should trigger a rebuild of the site which you can follow from the Actions tab.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'In the "Custom domain" setting, click the "Enforce HTTPS" checkbox.'))),(0,a.kt)("p",null,"When everything is configured correctly and the site is built and deployed, then this page should display a link to the publicly available URL to your site."),(0,a.kt)("h2",{id:"display-your-published-course-website"},"Display your published course website"),(0,a.kt)("p",null,"Now click on the link in the GitHub Pages page to see your newly published Morea site. It should look similar to this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:o(1719).Z,width:"2394",height:"2324"})),(0,a.kt)("p",null,'Unfortunately, apart from the site name in the menubar ("CS 299 Fall 2021"), none of this content is appropriate for your course!'),(0,a.kt)("p",null,"Before proceeding, you might want to spend a few minutes clicking around your newly site.  This site illustrates many (though not all) of the features of a Morea site."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If the site builds successfully but you get an error when trying to retrieve the published site in your browser, check that the baseurl field in _config.yml matches the repository name. If it doesn't, then edit the _config.yml file, commit the change, and wait for the new build to conclude. Then retrieve the home page of your site again."),(0,a.kt)("p",{parentName:"admonition"},"If that doesn't fix it, please contact a Morea developer (i.e. Philip Johnson (",(0,a.kt)("a",{parentName:"p",href:"mailto:johnson@hawaii.edu"},"johnson@hawaii.edu"),")).")),(0,a.kt)("h2",{id:"choose-local-or-cloud-development"},"Choose local or cloud development"),(0,a.kt)("p",null,'Once you\'re ready to move on, you need to decide whether you want to develop your site "locally", by running programs directly on your laptop, or "in the cloud", using a browser to do everything. '),(0,a.kt)("p",null,"Here are some of the pros and cons of these two alternatives:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},'"Local" development.'),"  Local development requires you to install a few tools on your computer, including GitHub Desktop, an editor, and Jekyll.  If you are a software developer, you might have most or all of these tools installed already.  If you are using MacOS (Unix), then installing these tools are relatively easy.  Once you have the tools installed, then development (particularly if you have a favorite editor) is pretty easy."),(0,a.kt)("p",null,"The big downside of local development is the need to install tools--particularly Jekyll, and particularly if your laptop uses Windows.  Many people have a hard time installing Jekyll successfully on Windows.  If you can't get Jekyll installed, then it's very difficult to develop your Morea site efficiently. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},'"Cloud" development.')," Cloud development involves using a cloud-based based package called ",(0,a.kt)("a",{parentName:"p",href:"https://gitpod.io/"},"Gitpod"),". Basically, Gitpod provides a unix box pre-installed with all the tools you need to develop your Morea site in the cloud. You access everything through a browser, and edit your site using a browser-based version of Visual Studio Code. "),(0,a.kt)("p",null,"For many people, cloud development is the clear winner: you don't have to install anything locally, and so it doesn't matter if you are using Unix or Windows.  In fact, the only significant reason I can think of to choose Local development over Cloud development is if you prefer a different editor to Visual Studio Code. "),(0,a.kt)("p",null,"The good news about making this \"choice\" is that it isn't permanent: you can switch back and forth between these alternatives at any time.  So, just pick the approach that seems most likely to work for you right now, and if it doesn't, then come back and switch to the other one."))}h.isMDXComponent=!0},7522:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/morea-repo-page-2-47e00952f83915c41a3caa9927b91b7b.png"},697:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/morea-repo-page-3-379c7609867635eba7f931445e1f35e9.png"},9120:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/morea-repo-page-4-0743d6b9248ca86a60cdd3f5c0bbfd54.png"},4761:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/morea-repo-page-5-fd4da52ef3bc20f6971f18147de10533.png"},3938:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/morea-repo-page-6-c1b452fe17b63944735fd7306fc49477.png"},8032:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/morea-repo-page-7-fd3509f0f29a1a431777b54cb8f89690.png"},4771:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/morea-repo-page-8-6bccc4cbc3a1769e2b22ea4935d319af.png"},1719:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/morea-repo-page-9-52ad3cd3279d7783a9409c502da10b60.png"},1001:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/morea-repo-page-1f311bb449a05c7af438610cfa5cc813.png"},1874:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/workflow-permissions-1-e72b86d6cfe1afe34e32c7d313a8ab30.png"},4049:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/workflow-permissions-2-6dd360c48a0a1ac4c549929dfc973391.png"}}]);