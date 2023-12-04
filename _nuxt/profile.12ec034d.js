import{H as T,T as A,M as E}from"./components.0ccea8d5.js";import{a as C,I as v,C as w,l as S,D as g,o as n,b as r,y as a,F as y,E as M,e as m,f as t,t as u,p as k,A as $,s as D,T as L,c as _,u as O,i as h,z as N,w as I,v as F,x as U,G as x}from"./entry.7cb8cbd7.js";import{a as B}from"./textUtils.e56719db.js";import{u as j}from"./user.e52eb321.js";import{P as z}from"./ProfileImage.ca713051.js";import{F as V}from"./FileUploadModal.be6d0032.js";import{M as H}from"./MintedPostImage.182ce8e3.js";import{r as W,R as q}from"./ChatPost.36440e02.js";import{C as R}from"./ChatFeed.50dd61ad.js";import{a as Y,b as P}from"./storageUtils.c09f50af.js";import"./composables.4aee1af5.js";import"./site.c95fd227.js";import"./WaitingToast.6bfd8978.js";import"./SwitchChainButton.6be29699.js";import"./ConnectWalletButton.bdb8683d.js";const G={name:"UserMintedPosts",props:["address"],data(){return{loadingMintedPosts:!1,mintedPostIds:[],postsDifference:0}},components:{MintedPostImage:H},mounted(){this.fetchMintedPostIds()},methods:{async fetchMintedPostIds(){this.loadingMintedPosts=!0;let e=this.$getFallbackProvider(this.$config.supportedChainId);this.isActivated&&this.chainId===this.$config.supportedChainId&&(e=this.signer);const o=new v(["function getMintedPostIdsArray(address) external view returns (uint256[] memory)"]);let d=await new w(this.$config.iggyPostStatsAddress,o,e).getMintedPostIdsArray(this.address);d=[...d].reverse(),this.mintedPostIds=d.slice(0,this.$config.profileMintedPostIdsMax),this.postsDifference=d.length-this.mintedPostIds.length,this.loadingMintedPosts=!1}},setup(){const{isActivated:e,chainId:o,signer:s}=S();return{isActivated:e,chainId:o,signer:s}}},Z={key:0,class:"d-flex justify-content-center mb-3"},J=t("span",{class:"spinner-border spinner-border-lg",role:"status","aria-hidden":"true"},null,-1),K=[J],Q={key:1,class:"row"},X={key:2,class:"d-flex justify-content-center mt-3"},ee={key:3},te=t("p",null,"No minted posts yet.",-1),se=[te];function ie(e,o,s,d,i,l){const f=g("MintedPostImage");return n(),r(y,null,[i.loadingMintedPosts?(n(),r("div",Z,K)):a("",!0),i.mintedPostIds?(n(),r("div",Q,[(n(!0),r(y,null,M(i.mintedPostIds,c=>(n(),r("div",{class:"col-6 col-sm-4 col-md-3 mb-2",key:c},[m(f,{id:c},null,8,["id"])]))),128))])):a("",!0),i.postsDifference>0?(n(),r("div",X,[t("p",null,"+ "+u(i.postsDifference)+" other minted posts",1)])):a("",!0),!i.loadingMintedPosts&&i.mintedPostIds.length===0?(n(),r("div",ee,se)):a("",!0)],64)}const oe=C(G,[["render",ie]]),ne={name:"PunkProfile",props:["pAddress","pDomain"],data(){return{balanceChatTokenWei:0,currentTab:"posts",domain:this.pDomain,emailForNotificationsSet:!1,followers:0,following:0,lastActivityTimestamp:null,newEmail:null,newImageLink:null,orbisImage:null,orbisProfile:null,uAddress:this.pAddress,uBalance:0,uDid:null,waitingDataLoad:!1,waitingImageUpdate:!1,waitingSetEmail:!1}},components:{ChatFeed:R,FileUploadModal:V,ProfileImage:z,UserMintedPosts:oe},mounted(){this.currentTab=localStorage.getItem("profileCurrentTab"),this.currentTab||(this.currentTab="posts"),(!this.pAddress||!this.pDomain)&&this.fetchAddressAndDomain(),this.checkConnectionToOrbis()},computed:{balanceChatToken(){const e=k(this.balanceChatTokenWei);return e>=0?Math.floor(Number(e)):Number(e).toFixed(4)},balanceEth(){const e=k(this.uBalance);return e>0?Number(e).toFixed(2):Number(e).toFixed(4)},getOrbisContext(){return this.$config.orbisTest?this.$config.orbisTestContext:this.$config.orbisContext},isCurrentUser(){return String(this.uAddress).toLowerCase()===String(this.address).toLowerCase()},isEmail(){return!!(this.newEmail&&this.newEmail.includes("@")&&this.newEmail.includes("."))},isImage(){return!!(this.newImageLink&&(this.newImageLink.includes(".jpg")||this.newImageLink.includes(".jpeg")||this.newImageLink.includes(".png")||this.newImageLink.includes(".gif")||this.newImageLink.includes(".webp")))}},methods:{changeCurrentTab(e){this.currentTab=e,localStorage.setItem("profileCurrentTab",e)},async changeImage(){if(this.userStore.getIsConnectedToOrbis){this.waitingImageUpdate=!0,this.orbisProfile||(this.orbisProfile={pfp:"",username:""}),this.orbisProfile.pfp=this.newImageLink,!this.orbisProfile.username&&this.domain&&(this.orbisProfile.username=this.domain);const e=await this.$orbis.updateProfile(this.orbisProfile);e.status!==200?(console.log("Error: ",e),this.toast(e.result,{type:"error"}),this.waitingImageUpdate=!1):(this.orbisImage=this.newImageLink,this.userStore.setOrbisImage(this.newImageLink),sessionStorage.setItem(String(this.address).toLowerCase()+"-img",this.newImageLink),this.toast("Image successfully updated!",{type:"success"}),this.waitingImageUpdate=!1)}else this.toast("Please connect to chat first",{type:"error"})},async checkConnectionToOrbis(){this.userStore.getIsConnectedToOrbis||(await this.$orbis.isConnected()?(this.userStore.setIsConnectedToOrbis(!0),this.$orbis.session&&!this.userStore.getDid&&(this.userStore.setDid(this.$orbis.session.did._id),this.userStore.setDidParent(this.$orbis.session.did._parentId))):this.userStore.setIsConnectedToOrbis(!1))},async connectToOrbis(){if(!this.userStore.getIsConnectedToOrbis){let e=await this.$orbis.connect_v2({provider:this.signer.provider.provider,lit:!1});e.status==200?(this.userStore.setIsConnectedToOrbis(!0),this.$orbis.session&&(this.userStore.setDid(this.$orbis.session.did._id),this.userStore.setDidParent(this.$orbis.session.did._parentId))):(console.log("Error connecting to Ceramic: ",e),this.toast(e.result,{type:"error"}))}},async fetchAddressAndDomain(){if(this.waitingDataLoad=!0,this.$route.query.id){const s=this.$route.query.id;s.includes(".")?this.domain=s:this.uAddress=s}else this.uAddress=this.address;!this.domain&&this.uAddress&&(this.domain=Y(window,this.uAddress));let e=this.$getFallbackProvider(this.$config.supportedChainId);this.isActivated&&this.chainId===this.$config.supportedChainId&&(e=this.signer);const o=new w(W[this.$config.supportedChainId],q,e);if(!this.domain&&this.uAddress){const s=await o.getDefaultDomain(String(this.uAddress).toLowerCase(),String(this.$config.tldName).toLowerCase());s&&(this.domain=s+this.$config.tldName,P(window,this.uAddress,this.domain))}if(this.domain&&!this.uAddress){const s=await o.getDomainHolder(String(this.domain).toLowerCase().split(".")[0],String(this.$config.tldName).toLowerCase());s!==$&&(this.uAddress=s),P(window,this.uAddress,this.domain)}await this.fetchOrbisProfile(),await this.fetchBalance()},async fetchBalance(){if(this.uAddress){let e=this.$getFallbackProvider(this.$config.supportedChainId);if(this.uBalance=await e.getBalance(this.uAddress),this.$config.chatTokenAddress){const o=new v(["function balanceOf(address owner) view returns (uint256)"]),s=new w(this.$config.chatTokenAddress,o,e);this.balanceChatTokenWei=await s.balanceOf(this.uAddress)}}},async fetchOrbisProfile(){if(this.orbisProfile={pfp:"",username:""},this.uAddress){let{data:e,error:o}=await this.$orbis.getDids(this.uAddress);if(e[0]?.did){this.uDid=e[0].did;const s=await this.$orbis.getProfile(e[0].did);s.status===200&&(this.orbisProfile=s.data.details.profile,s&&s.data.details.profile&&s.data.details.profile.pfp&&(this.orbisImage=s.data.details.profile.pfp),s&&(this.followers=s.data.count_followers,this.following=s.data.count_following,this.lastActivityTimestamp=s.data.last_activity_timestamp),s.data.details.encrypted_email?this.emailForNotificationsSet=!0:this.emailForNotificationsSet=!1,this.waitingDataLoad=!1)}this.waitingDataLoad=!1}},async insertImage(e){this.newImageLink=e,this.changeImage()},async setEmailNotifications(e){if(this.userStore.getIsConnectedToOrbis){this.waitingSetEmail=!0,e&&(this.newEmail="");let o=await this.$orbis.setEmail(this.newEmail);o.status!==200?(console.log("Error: ",o),this.toast(o.result,{type:"error"}),this.waitingSetEmail=!1):(this.toast("Email notifications successfully set!",{type:"success"}),this.waitingSetEmail=!1,document.getElementById("setEmailModalClose").click())}else this.toast("Please connect to chat first",{type:"error"})}},setup(){const{address:e,balance:o,chainId:s,isActivated:d,signer:i}=S(),l=j(),f=D();return{address:e,balance:o,chainId:s,isActivated:d,userStore:l,shortenAddress:L,signer:i,toast:f}},watch:{address(){this.fetchAddressAndDomain()}}},re={class:"card border"},ae={class:"card-body"},de=t("i",{class:"bi bi-arrow-left-circle cursor-pointer"},null,-1),le=[de],ce={class:"row"},he={class:"col-md-3 mt-3"},me={class:"col-md-9 mt-3"},ue={key:0,class:"mb-3"},fe={class:"mt-4 muted-text",style:{"font-size":"14px"}},pe={class:"me-4"},ge=t("i",{class:"bi bi-wallet me-1"},null,-1),be={key:0,class:"me-4"},_e=t("i",{class:"bi bi-wallet me-1"},null,-1),we={class:"me-4"},ye=t("i",{class:"bi bi-box-arrow-up-right me-2"},null,-1),Ie=["href"],Ce={key:1,class:"mt-2"},ke={class:"dropdown mt-2"},Pe=t("button",{class:"btn btn-primary dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},[t("i",{class:"bi bi-sliders"}),h(" Profile settings ")],-1),ve={class:"dropdown-menu"},Se={key:0,class:"dropdown-item cursor-pointer","data-bs-toggle":"modal","data-bs-target":"#verifyAccountModal"},Te=t("i",{class:"bi bi-person-check-fill"},null,-1),Ae=["data-bs-target"],Ee=t("i",{class:"bi bi-person-circle"},null,-1),Me=t("span",{class:"dropdown-item cursor-pointer","data-bs-toggle":"modal","data-bs-target":"#setEmailModal"},[t("i",{class:"bi bi-envelope-at-fill"}),h(" Set email notification for chat ")],-1),$e=t("span",{class:"dropdown-item cursor-pointer","data-bs-toggle":"modal","data-bs-target":"#chatSettingsModal"},[t("i",{class:"bi bi-gear-fill"}),h(" Other settings ")],-1),De=t("i",{class:"bi bi-send"},null,-1),Le={class:"modal fade",id:"setEmailModal",tabindex:"-1","aria-labelledby":"setEmailModalLabel","aria-hidden":"true"},Oe={class:"modal-dialog"},Ne={class:"modal-content"},Fe=t("div",{class:"modal-header"},[t("h1",{class:"modal-title fs-5",id:"setEmailModalLabel"},"Set email notifications"),t("button",{type:"button",id:"setEmailModalClose",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Ue={class:"modal-body"},xe={key:0},Be=t("p",null,"First connect to Ceramic to set email notifications:",-1),je={key:1,class:"mt-3"},ze=t("p",null,"Enter your email address to receive notifications about replies on your posts.",-1),Ve=t("p",null,"The email address will be encrypted and will not be publicly visible.",-1),He={key:0},We={key:1},qe={key:2,class:"text-danger"},Re={class:"modal-footer"},Ye=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1),Ge=["disabled"],Ze={key:0,class:"spinner-border spinner-border-sm mx-1",role:"status","aria-hidden":"true"};function Je(e,o,s,d,i,l){const f=g("ProfileImage"),c=x,b=g("FileUploadModal");return n(),r("div",null,[t("div",re,[t("div",ae,[t("p",{class:"fs-3",onClick:o[0]||(o[0]=p=>e.$router.back())},le),t("div",ce,[t("div",he,[i.uAddress?(n(),_(f,{key:i.orbisImage,class:"img-fluid img-thumbnail rounded-circle col-6 col-md-12",address:i.uAddress,domain:i.domain,image:i.orbisImage},null,8,["address","domain","image"])):a("",!0)]),t("div",me,[i.domain?(n(),r("h3",ue,u(O(B)(i.domain)),1)):a("",!0),t("div",fe,[t("p",pe,[ge,h(" "+u(l.balanceEth)+" "+u(e.$config.tokenSymbol),1)]),e.$config.chatTokenAddress?(n(),r("p",be,[_e,h(" "+u(l.balanceChatToken)+" "+u(e.$config.chatTokenSymbol),1)])):a("",!0),t("p",we,[ye,t("a",{href:e.$config.blockExplorerBaseUrl+"/address/"+i.uAddress,target:"_blank",style:{"text-decoration":"none"}},u(d.shortenAddress(i.uAddress)),9,Ie)])]),l.isCurrentUser?(n(),r("div",Ce,[t("div",ke,[Pe,t("div",ve,[d.userStore.getIsConnectedToOrbis?a("",!0):(n(),r("span",Se,[Te,h(" Verify account ownership ")])),t("span",{class:N(["dropdown-item cursor-pointer",d.userStore.getIsConnectedToOrbis?"":"disabled"]),"data-bs-toggle":"modal","data-bs-target":"#fileUploadModal"+e.$.uid},[Ee,h(" Change your profile picture ")],10,Ae),Me,$e])])])):a("",!0),i.domain&&!l.isCurrentUser&&e.$config.showFeatures.sendTokens?(n(),_(c,{key:2,class:"btn btn-primary mt-2",to:"/send-tokens/?to="+i.domain},{default:I(()=>[De,h(" Send tokens to "+u(i.domain),1)]),_:1},8,["to"])):a("",!0)])])]),t("div",Le,[t("div",Oe,[t("div",Ne,[Fe,t("div",Ue,[d.userStore.getIsConnectedToOrbis?a("",!0):(n(),r("div",xe,[Be,t("button",{class:"btn btn-primary",onClick:o[1]||(o[1]=(...p)=>l.connectToOrbis&&l.connectToOrbis(...p))},"Connect to Ceramic")])),d.userStore.getIsConnectedToOrbis?(n(),r("div",je,[ze,Ve,i.emailForNotificationsSet?(n(),r("p",He," Currently, the email for notifications is already set. You can change it by entering a new email address below: ")):a("",!0),i.emailForNotificationsSet?a("",!0):(n(),r("p",We," Currently, the email for notifications is NOT yet set. You can add your email address below: ")),F(t("input",{"onUpdate:modelValue":o[2]||(o[2]=p=>i.newEmail=p),type:"email",class:"form-control mt-2",placeholder:"Enter email address"},null,512),[[U,i.newEmail]]),i.newEmail&&!l.isEmail?(n(),r("small",qe," Error: The entered text is not an email. ")):a("",!0)])):a("",!0)]),t("div",Re,[Ye,t("button",{type:"button",class:"btn btn-primary",onClick:o[3]||(o[3]=p=>l.setEmailNotifications(!1)),disabled:!d.userStore.getIsConnectedToOrbis||!l.isEmail},[i.waitingSetEmail?(n(),r("span",Ze)):a("",!0),h(" Submit email ")],8,Ge)])])])]),d.userStore.getIsConnectedToOrbis?(n(),_(b,{key:0,onProcessFileUrl:l.insertImage,title:"Change profile image",infoText:"Upload a new profile picture.",componentId:e.$.uid,maxFileSize:e.$config.fileUploadSizeLimit},null,8,["onProcessFileUrl","componentId","maxFileSize"])):a("",!0)])])}const Ke=C(ne,[["render",Je]]),Qe={name:"Profile",components:{PunkProfile:Ke},setup(){}};function Xe(e,o,s,d,i,l){const f=A,c=E,b=T,p=g("PunkProfile");return n(),r(y,null,[m(b,null,{default:I(()=>[m(f,null,{default:I(()=>[h("Profile | "+u(e.$config.projectMetadataTitle),1)]),_:1}),m(c,{name:"description",content:"Check out this profile on "+e.$config.projectName+"!"},null,8,["content"]),m(c,{property:"og:image",content:e.$config.projectUrl+e.$config.previewImageProfile},null,8,["content"]),m(c,{property:"og:description",content:"Check out this profile on "+e.$config.projectName+"!"},null,8,["content"]),m(c,{name:"twitter:image",content:e.$config.projectUrl+e.$config.previewImageProfile},null,8,["content"]),m(c,{name:"twitter:description",content:"Check out this profile on "+e.$config.projectName+"!"},null,8,["content"])]),_:1}),m(p,{class:"mt-1"})],64)}const pt=C(Qe,[["render",Xe]]);export{pt as default};