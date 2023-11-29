import{H as S,T as E,M as B}from"./components.d226d788.js";import{a as g,p as v,I as h,C as u,l as w,s as T,o as d,b as m,f as o,t as c,v as A,x as D,y as f,i as b,e as r,w as C,z as _,F as I,D as k}from"./entry.6c6c90ff.js";import{W as $}from"./WaitingToast.7065dfe9.js";import{u as W}from"./user.c71c76fc.js";import"./composables.790a43b4.js";const P={name:"AirdropDomainHolders",props:["domainChatRewardWei","loadingData"],data(){return{domainName:null,waiting:!1}},computed:{domainChatReward(){return Math.floor(Number(v(this.domainChatRewardWei)))}},methods:{async claim(){this.waiting=!0;const t=this.domainName.replace(this.$config.tldName,"").trim().toLowerCase();console.log(t);const i=new h(["function claim(string calldata _domainName) external"]),n=new u(this.$config.airdropClaimDomainsAddress,i,this.signer);try{const a=await n.claim(t),e=this.toast({component:$,props:{text:"Please wait for your transaction to confirm. Click on this notification to see transaction in the block explorer."}},{type:"info",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+a.hash,"_blank").focus()}),s=await a.wait();s.status===1?(this.toast.dismiss(e),this.toast("Airdrop for "+t+this.$config.tldName+" has been successfully claimed!",{type:"success",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+a.hash,"_blank").focus()}),this.userStore.addToChatTokenBalanceWei(this.domainChatRewardWei),this.waiting=!1):(this.toast.dismiss(e),this.waiting=!1,this.toast("Transaction has failed.",{type:"error",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+a.hash,"_blank").focus()}),console.log(s))}catch(a){console.error(a);try{let e=a.message.split("reason=")[1];e=e.split(", method=")[0],e=e.replace(/"/g,""),e=e.replace("execution reverted:","Error:"),e=e.replace("ChatTokenClaimDomains: ",""),console.log(e),this.toast(e,{type:"error"})}catch{this.toast("Transaction has failed.",{type:"error"})}this.waiting=!1}}},setup(){const{address:t,signer:i}=w(),n=T(),a=W();return{address:t,signer:i,toast:n,userStore:a}}},U={class:"text-center"},j={class:"input-group mt-5"},M={class:"btn btn-primary",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},H={class:"d-flex justify-content-center mt-4 mb-4"},V=["disabled"],Z={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},z=o("hr",null,null,-1),F={class:"text-center"};function L(t,i,n,a,e,s){return d(),m("div",null,[o("p",U," Claim "+c(s.domainChatReward)+" "+c(t.$config.chatTokenSymbol)+" airdrop for each "+c(t.$config.tldName)+" domain that you hold. ",1),o("div",j,[A(o("input",{"onUpdate:modelValue":i[0]||(i[0]=l=>e.domainName=l),type:"text",placeholder:"Enter domain name",class:"form-control"},null,512),[[D,e.domainName]]),o("button",M,c(t.$config.tldName),1)]),o("div",H,[o("button",{disabled:e.waiting||n.loadingData||!e.domainName,class:"btn btn-outline-primary",type:"button",onClick:i[1]||(i[1]=(...l)=>s.claim&&s.claim(...l))},[n.loadingData||e.waiting?(d(),m("span",Z)):f("",!0),b(" Claim ")],8,V)]),z,o("p",F,[o("small",null," Note that someone else can claim tokens (for a given domain) for you and save you on gas fees. You will still receive the same amount of "+c(t.$config.chatTokenSymbol)+" tokens as if you've made the claim yourself. ",1)])])}const Y=g(P,[["render",L]]),q={name:"AirdropActivityPoints",props:["airdropApWei","loadingData"],emits:["setDomainChatRewardWeiToZero"],data(){return{waiting:!1}},computed:{airdropAp(){return Math.round(Number(v(this.airdropApWei)))}},methods:{async claim(){this.waiting=!0;const t=new h(["function claim() external"]),i=new u(this.$config.airdropApAddress,t,this.signer);try{const n=await i.claim(),a=this.toast({component:$,props:{text:"Please wait for your transaction to confirm. Click on this notification to see transaction in the block explorer."}},{type:"info",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),e=await n.wait();e.status===1?(this.toast.dismiss(a),this.userStore.addToChatTokenBalanceWei(this.airdropApWei),this.$emit("setDomainChatRewardWeiToZero"),this.toast("Airdrop for past APs has been successfully claimed!",{type:"success",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),this.waiting=!1):(this.toast.dismiss(a),this.waiting=!1,this.toast("Transaction has failed.",{type:"error",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),console.log(e))}catch(n){console.error(n);try{let a=n.message.split("reason=")[1];a=a.split(", method=")[0],a=a.replace(/"/g,""),a=a.replace("execution reverted:","Error:"),a=a.replace("ChatTokenClaimActivityPoints: ",""),console.log(a),this.toast(a,{type:"error"})}catch{this.toast("Transaction has failed.",{type:"error"})}this.waiting=!1}}},setup(){const{address:t,signer:i}=w(),n=T(),a=W();return{address:t,signer:i,toast:n,userStore:a}}},G={class:"text-center"},J={class:"input-group mt-5"},K={class:"btn btn-primary",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},O={class:"d-flex justify-content-center mt-4 mb-4"},Q=["disabled"],X={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},tt=o("hr",null,null,-1),et={class:"text-center"};function ot(t,i,n,a,e,s){return d(),m("div",null,[o("p",G," Claim "+c(s.airdropAp)+" "+c(t.$config.chatTokenSymbol)+" airdrop for past activity points. ",1),o("div",J,[A(o("input",{"onUpdate:modelValue":i[0]||(i[0]=l=>s.airdropAp=l),type:"text",class:"form-control",disabled:""},null,512),[[D,s.airdropAp]]),o("button",K,c(t.$config.chatTokenSymbol),1)]),o("div",O,[o("button",{disabled:e.waiting||n.loadingData||s.airdropAp==0,class:"btn btn-outline-primary",type:"button",onClick:i[1]||(i[1]=(...l)=>s.claim&&s.claim(...l))},[n.loadingData||e.waiting?(d(),m("span",X)):f("",!0),b(" Claim ")],8,Q)]),tt,o("p",et,[o("small",null," If you're not eligible, or have already claimed the airdrop, the amount of "+c(t.$config.chatTokenSymbol)+" tokens shown is 0. ",1)])])}const at=g(q,[["render",ot]]),it={name:"Airdrop",data(){return{airdropApWei:0,currentTab:"domain",domainChatRewardWei:1e14,fetchingData:!1}},components:{AirdropDomainHolders:Y,AirdropActivityPoints:at},mounted(){this.currentTab=localStorage.getItem("airdropCurrentTab"),this.currentTab||(this.currentTab="domain"),this.address&&this.fetchAirdropData()},methods:{changeCurrentTab(t){this.currentTab=t,localStorage.setItem("airdropCurrentTab",t)},async fetchAirdropData(){this.fetchingData=!0;const t=new h(["function chatReward() external view returns (uint256)"]),i=new u(this.$config.airdropClaimDomainsAddress,t,this.signer);this.domainChatRewardWei=await i.chatReward();const n=new h(["function claimPreview(address _address) public view returns (uint256)"]),a=new u(this.$config.airdropApAddress,n,this.signer);this.airdropApWei=await a.claimPreview(this.address),this.fetchingData=!1},setDomainChatRewardWeiToZero(){this.domainChatRewardWei=0}},setup(){const{address:t,signer:i}=w();return{address:t,signer:i}},watch:{address(){this.fetchAirdropData()}}},nt={class:"card border scroll-500"},st={class:"card-body"},rt={class:"fs-3"},ct={class:"nav nav-tabs nav-fill"},lt={class:"nav-item"},dt={class:"nav-item"},mt={class:"tab-content mt-3"},pt={key:0},ht={class:"d-flex justify-content-center mt-5"},ut={class:"col-12 col-lg-8"},ft={key:1},gt={class:"d-flex justify-content-center mt-5"},wt={class:"col-12 col-lg-8"};function bt(t,i,n,a,e,s){const l=E,p=B,x=S,N=k("AirdropDomainHolders"),R=k("AirdropActivityPoints");return d(),m(I,null,[r(x,null,{default:C(()=>[r(l,null,{default:C(()=>[b("Airdrop | "+c(t.$config.projectMetadataTitle),1)]),_:1}),r(p,{property:"og:title",content:"Airdrop"}),r(p,{name:"description",content:"Claim your "+t.$config.chatTokenSymbol+" token airdrop on "+t.$config.projectName+"!"},null,8,["content"]),r(p,{property:"og:image",content:t.$config.projectUrl+t.$config.previewImageAirdrop},null,8,["content"]),r(p,{property:"og:description",content:"Claim your "+t.$config.chatTokenSymbol+" token airdrop on "+t.$config.projectName+"!"},null,8,["content"]),r(p,{name:"twitter:image",content:t.$config.projectUrl+t.$config.previewImageAirdrop},null,8,["content"]),r(p,{name:"twitter:description",content:"Claim your "+t.$config.chatTokenSymbol+" token airdrop on "+t.$config.projectName+"!"},null,8,["content"])]),_:1}),o("div",nt,[o("div",st,[o("p",rt,[o("i",{class:"bi bi-arrow-left-circle cursor-pointer",onClick:i[0]||(i[0]=y=>t.$router.back())})]),o("ul",ct,[o("li",lt,[o("button",{class:_(["nav-link",e.currentTab==="domain"?"active":""]),onClick:i[1]||(i[1]=y=>s.changeCurrentTab("domain"))},"Domain holders",2)]),o("li",dt,[o("button",{class:_(["nav-link",e.currentTab==="ap"?"active":""]),onClick:i[2]||(i[2]=y=>s.changeCurrentTab("ap"))},"Activity Points",2)])]),o("div",mt,[e.currentTab==="domain"?(d(),m("div",pt,[o("div",ht,[o("div",ut,[r(N,{domainChatRewardWei:e.domainChatRewardWei,loadingData:e.fetchingData},null,8,["domainChatRewardWei","loadingData"])])])])):f("",!0),e.currentTab==="ap"?(d(),m("div",ft,[o("div",gt,[o("div",wt,[r(R,{airdropApWei:e.airdropApWei,loadingData:e.fetchingData,onSetDomainChatRewardWeiToZero:s.setDomainChatRewardWeiToZero},null,8,["airdropApWei","loadingData","onSetDomainChatRewardWeiToZero"])])])])):f("",!0)])])])],64)}const Tt=g(it,[["render",bt]]);export{Tt as default};
