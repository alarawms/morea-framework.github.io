"use strict";(self.webpackChunkMorea_Framework=self.webpackChunkMorea_Framework||[]).push([[7701],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return d}});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var h=a.createContext({}),l=function(e){var t=a.useContext(h),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=l(e.components);return a.createElement(h.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,h=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(o),d=n,m=c["".concat(h,".").concat(d)]||c[d]||u[d]||r;return o?a.createElement(m,i(i({ref:t},p),{},{components:o})):a.createElement(m,i({ref:t},p))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=c;var s={};for(var h in t)hasOwnProperty.call(t,h)&&(s[h]=t[h]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<r;l++)i[l]=o[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}c.displayName="MDXCreateElement"},4112:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return h},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var a=o(7462),n=o(3366),r=(o(7294),o(3905)),i=["components"],s={title:"Workshop design"},h=void 0,l={unversionedId:"change-hi/workshop-design",id:"change-hi/workshop-design",isDocsHomePage:!1,title:"Workshop design",description:"The previous section documents the mechanics of Change-HI workshop development: how to get the files, make a simple update, and create a pull request so that administrators can merge your changes into the official site.",source:"@site/docs/change-hi/workshop-design.md",sourceDirName:"change-hi",slug:"/change-hi/workshop-design",permalink:"/docs/change-hi/workshop-design",tags:[],version:"current",lastUpdatedBy:"Philip Johnson",lastUpdatedAt:1662311140,formattedLastUpdatedAt:"9/4/2022",frontMatter:{title:"Workshop design"},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/change-hi/getting-started"},next:{title:"Misc Tips",permalink:"/docs/change-hi/tips"}},p=[{value:"Seminars vs. Workshops",id:"seminars-vs-workshops",children:[],level:2},{value:"Pre, In, and Post Workshop phases",id:"pre-in-and-post-workshop-phases",children:[{value:"The pre-workshop phase",id:"the-pre-workshop-phase",children:[],level:3},{value:"The in-workshop phase",id:"the-in-workshop-phase",children:[],level:3},{value:"The post-workshop phase",id:"the-post-workshop-phase",children:[],level:3}],level:2},{value:"What about Outcomes?",id:"what-about-outcomes",children:[],level:2},{value:"Start with a sketch",id:"start-with-a-sketch",children:[],level:2},{value:"Development timeline",id:"development-timeline",children:[],level:2}],u={toc:p};function c(e){var t=e.components,o=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The previous section documents the ",(0,r.kt)("em",{parentName:"p"},"mechanics")," of Change-HI workshop development: how to get the files, make a simple update, and create a pull request so that administrators can merge your changes into the official site. "),(0,r.kt)("p",null,"Let's now discuss how to design the ",(0,r.kt)("em",{parentName:"p"},"content")," of a workshop."),(0,r.kt)("h2",{id:"seminars-vs-workshops"},"Seminars vs. Workshops"),(0,r.kt)("p",null,'We\'ve all been to seminars: you sit down in a room (or login to Zoom), a speaker is introduced, and you sit and listen to the speaker for the next 45 minutes to an hour. Afterwards, there might be a few questions.  In the best case, you leave the seminar thinking, "Well, that was interesting", or even "I have a new idea for my research".  In other cases, you start reading your email around 15 minutes into the event. '),(0,r.kt)("p",null,'A workshop is different. In a workshop, the goal is more than just experiencing something "interesting" or "having a new idea": the goal is to leave the workshop being able to do something you couldn\'t do before. Workshops are about ',(0,r.kt)("em",{parentName:"p"},"skill acquisition"),". "),(0,r.kt)("p",null,"This means that workshops are intrinsically ",(0,r.kt)("em",{parentName:"p"},"participatory")," in a way that seminars are not. It also means that, at a minimum, at least a few of the participants should leave the workshop and begin ",(0,r.kt)("em",{parentName:"p"},"using")," the skill that was introduced in the workshop. "),(0,r.kt)("p",null,"Workshops thus have a much higher bar for success than seminars, and thus require more thought regarding their design.  "),(0,r.kt)("h2",{id:"pre-in-and-post-workshop-phases"},"Pre, In, and Post Workshop phases"),(0,r.kt)("p",null,"Unlike designing a seminar, in which you rarely consider the activities of the participants before or after the seminar, you should consider three distinct phases when designing a workshop: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Pre-workshop"),".  What would you like participants to do prior to attending the workshop? "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"In-workshop"),".  What would you like participants to do during the workshop? "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Post-workshop"),".  Assuming at least some of the participants will want to use the skill you introduced in the workshop, how should they continue to develop the skill?")),(0,r.kt)("h3",{id:"the-pre-workshop-phase"},"The pre-workshop phase"),(0,r.kt)("p",null,"Let's assume you can contact the participants prior to the workshop.  What would you like them to do prior to the workshop in order to make maximal use of the time you are together? "),(0,r.kt)("p",null,'In rare cases, the answer might be "nothing", but in most cases, there will be at least some light introductory reading that can orient the participants to the workshop material. To indicate this, you can create a ',(0,r.kt)("a",{parentName:"p",href:"/docs/instructors/entity-types#reading"},"Morea Reading"),' and add the label "Pre-Workshop" in order to indicate that participants should take a look in advance. You can also add the label "Optional" to indicate that participants should read it if they can, but to not worry if they don\'t have time.'),(0,r.kt)("p",null,'In some cases, you might want participants to install some software or download some materials in advance of the workshop. This can be crucial when the installation or download might take 15-30 minutes and you only have two hours for the entire workshop. In this case, you can create a Morea Reading with the labels "Pre-Workshop" and "Required" which refers the participant to the relevant installation instructions.  Participants who have problems with the installation could arrive at the workshop early in order to receive help completing the installation, or else they simply partner with another participant during the workshop who has successfully installed the software.'),(0,r.kt)("p",null,"In yet other cases, you might want participants to have acquired a skill prior to the workshop. For example, your workshop might involve teaching some intermediate-level skill with Jupyter notebooks, and so you require that participants have basic knowledge of Python and Jupyter.  In this case, you could specify a ",(0,r.kt)("a",{parentName:"p",href:"/docs/instructors/entity-types#prerequisite"},"Morea Prerequisite"),": a separate Module with its own Readings and Experiences that participants should work through prior to the workshop to make sure they have the necessary knowledge for your workshop. For example, the ",(0,r.kt)("a",{parentName:"p",href:"https://change-hi.github.io/modules/hpc/"},"Change-HI HPC Workshop")," has a prerequisite module."),(0,r.kt)("h3",{id:"the-in-workshop-phase"},"The in-workshop phase"),(0,r.kt)("p",null,'A workshop can be organized in many different ways.  Sometimes, it makes sense to interleave short lectures with activities. In this case, you might want to create one or more Morea Readings with the label "In-workshop" that points to the slides associated with your lectures, as well as one or more Morea Experiences with instructions on how to carry out the activities. '),(0,r.kt)("p",null,'Some workshops might not have any "lecture" at all. Instead, the instructor guides the participants interactively through the use of a tool or problem solving scenario. In this case, you might want to provide a sequence of ',(0,r.kt)("a",{parentName:"p",href:"/docs/instructors/entity-types#experience"},"Morea Experiences"),' with the label "In-workshop" that document what you want the participants to do for each logical section of the material.'),(0,r.kt)("p",null,"If you want to show a video at some point during the workshop, you can either ",(0,r.kt)("a",{parentName:"p",href:"/docs/instructors/embed-video"},"embed the video")," at the appropriate point in an Experience, or else include it as a Reading."),(0,r.kt)("p",null,"Your workshop should always conclude by asking participants to evaluate the experience, which you can implement as a ",(0,r.kt)("a",{parentName:"p",href:"/docs/instructors/entity-types#assessment"},"Morea Assessment"),". A simple way to do this is to design a Google Form and provide a link to that form in the Assessment page associated with your workshop.  When the workshop is almost over, direct the participants to that Assessment page and ask them to spend the final 10 minutes filling out the Google Form. This form can be anonymous, and can ask questions such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For each skill presented in the workshop, did you find it to be not useful, somewhat useful, or very useful? "),(0,r.kt)("li",{parentName:"ul"},"Are there any skills that you expect to use in your work in future? If so, which ones, and how?"),(0,r.kt)("li",{parentName:"ul"},"Are there skills that you wish were covered in the workshop, but weren't?"),(0,r.kt)("li",{parentName:"ul"},"Do you have any suggestions for how the workshop could be improved in future? ")),(0,r.kt)("p",null,"In order to maximize the response rate, it's best to build this assessment right into the workshop and not ask participants to fill it out later."),(0,r.kt)("h3",{id:"the-post-workshop-phase"},"The post-workshop phase"),(0,r.kt)("p",null,"A well-designed workshop provides participants with a clear path forward if they want to start using the skill in their work.  There are a variety of ways to help participants to move forward:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Provide Morea Readings to API documentation, more advanced tutorials, videos, or the like.  Label these Readings with "Post-workshop".'),(0,r.kt)("li",{parentName:"ul"},'Provide Morea Experiences that challenge participants to practice the skills in various ways. Label these Experiences with "Post-workshop".'),(0,r.kt)("li",{parentName:"ul"},"Provide recommendations for future workshops that build upon these skills.")),(0,r.kt)("h2",{id:"what-about-outcomes"},"What about Outcomes?"),(0,r.kt)("p",null,"You might think you should begin your workshop design by deciding on the learning outcomes, but I recommend you leave these until last.  The reason is that you are often too ambitious in what you think you can accomplish."),(0,r.kt)("p",null,"So, instead, leave the specification of learning outcomes until you have finished the workshop design. Then think about what you hope participants will be able to do as a result of the material you actually have."),(0,r.kt)("p",null,"Learning outcomes are generally directly related to the skills you hope the participants will acquire, and so you can ask whether or not each learning outcome was achieved for a as part of the assessment."),(0,r.kt)("p",null,"Naturally, your learning outcomes will be represented as ",(0,r.kt)("a",{parentName:"p",href:"/docs/instructors/entity-types#outcome"},"Morea Outcomes"),"."),(0,r.kt)("p",null,"When designing your outcomes, it's important to take a look at the ",(0,r.kt)("a",{parentName:"p",href:"https://change-hi.github.io/outcomes/"},"existing set of Change-HI outcomes"),". Are there outcomes already associated with other workshops that you also hope participants will acquire in yours? If so, just include that outcome ID in your module definition file (don't make a copy of the outcome file). Having the same learning outcome for multiple workshops helps tie them together, and increases the odds that participants will actually learn the skill!"),(0,r.kt)("h2",{id:"start-with-a-sketch"},"Start with a sketch"),(0,r.kt)("p",null,"As you can see, designing a workshop with Morea involves the creation of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Readings, which can be intended for the pre-workshop, in-workshop, or post-workshop phases."),(0,r.kt)("li",{parentName:"ul"},"Experiences, which can be intended for the in-workshop or post-workshop phases."),(0,r.kt)("li",{parentName:"ul"},"An Assessment, which can be used at the end of the in-workshop phase."),(0,r.kt)("li",{parentName:"ul"},"Outcomes, which are intended to be achieved by the end of the in-workshop phase.")),(0,r.kt)("p",null,"Until you are comfortable with Morea, you might want to start by sketching out your workshop design on a piece of paper or text file: what are the Readings, Experiences, Outcomes, and Assessment to include for each of the three phases? "),(0,r.kt)("p",null,"Feel free to share that sketch with others for feedback. They might have ideas for additional and/or replacement Readings, for example."),(0,r.kt)("p",null,"Once you have that sketch in hand, then go ahead and implement it as actual Morea constructs. "),(0,r.kt)("h2",{id:"development-timeline"},"Development timeline"),(0,r.kt)("p",null,"As you can see, designing and implementing a workshop for the first time requires some time to determine the components, then implement them as Morea constructs, and finally ensure that the site builds correctly so that you can issue the pull request (as discussed in the previous section).  "),(0,r.kt)("p",null,"In most cases, it is sufficient to reserve a week for initial design and implementation. That said, I do not recommend you issue the pull request the night before the workshop is scheduled to take place!  For one thing, if you do that, then there's no opportunity for participants to do any pre-workshop readings. For another, it does not allow any time for review and fine-tuning of your workshop materials."),(0,r.kt)("p",null,"So, it's best to plan to complete your initial implementation and issue your pull request around 7-10 days prior to the workshop date. That leaves a few days for your workshop to be integrated into the site, and circulated for review by other instructors who might have feedback on your approach.  Making small changes to a workshop module, once successfully integrated, is typically quick and easy, and so if you follow this schedule, you should be able to send your participants a link to the workshop module page around 5-7 days prior to the workshop date."))}c.isMDXComponent=!0}}]);