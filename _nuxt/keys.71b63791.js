import{H as C,T as D,M as S}from"./components.d226d788.js";import{a as P,p as b,I as u,C as y,A as F,l as H,s as W,b as m,e as h,w as p,f as s,v as T,x as E,H as M,t as n,c as _,y as d,i as f,F as A,D as g,o as c,h as I}from"./entry.6c6c90ff.js";import{W as k}from"./WaitingToast.7065dfe9.js";import{C as j}from"./ChatFeed.1a2b0a20.js";import{K as L}from"./KeysList.ec288239.js";import{C as U}from"./ConnectWalletButton.adada651.js";import"./composables.790a43b4.js";import"./ChatPost.0e6b111e.js";import"./user.c71c76fc.js";import"./ProfileImage.f24946b1.js";import"./textUtils.f1ce8eb9.js";import"./MintedPostImage.55801cec.js";import"./storageUtils.9724dbc0.js";import"./SwitchChainButton.a22d7cb3.js";import"./site.8bbebe65.js";import"./FileUploadModal.37a58963.js";const V={name:"Keys",data(){return{buyKeyPriceWei:null,buyKeyToChat:!1,cleanDomainName:null,domainName:null,domainNotExists:!1,isKeyHolder:!1,sellKeyPriceWei:null,showBuySellButtons:!1,waitingBuy:!1,waitingData:!1,waitingSell:!1}},components:{ChatFeed:j,ConnectWalletButton:U,KeysList:L},computed:{buyKeyPrice(){if(this.buyKeyPriceWei){const e=Number(b(this.buyKeyPriceWei));return e>1?e.toFixed(2):e>.1?e.toFixed(4):e>.01?e.toFixed(5):e>.001?e.toFixed(6):e>1e-4?e.toFixed(7):e>1e-5?e.toFixed(8):e>1e-6?e.toFixed(9):e}return null},sellKeyPrice(){if(this.sellKeyPriceWei){const e=Number(b(this.sellKeyPriceWei));return e>1?e.toFixed(2):e>.1?e.toFixed(4):e>.01?e.toFixed(5):e>.001?e.toFixed(6):e>1e-4?e.toFixed(7):e>1e-5?e.toFixed(8):e>1e-6?e.toFixed(9):e}return null}},methods:{async buyKey(){this.waitingBuy=!0,this.cleanDomainName=this.clean(this.domainName);const e=new u(["function buyKeys(string memory domainName, uint256 amount) external payable"]),i=new y(this.$config.keysAddress,e,this.signer);try{const a=await i.buyKeys(this.cleanDomainName,1,{value:this.buyKeyPriceWei}),o=this.toast({component:k,props:{text:"Please wait for your transaction to confirm. Click on this notification to see transaction in the block explorer."}},{type:"info",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+a.hash,"_blank").focus()}),t=await a.wait();t.status===1?(this.toast.dismiss(o),this.toast(this.cleanDomainName+this.$config.tldName+" friend key has been successfully claimed! Now you can chat.",{type:"success",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+a.hash,"_blank").focus()}),document.getElementById("closeBuyKeyModal").click(),this.isKeyHolder=!0,this.buyKeyToChat=!1,this.waitingBuy=!1):(this.toast.dismiss(o),this.waitingBuy=!1,this.toast("Transaction has failed.",{type:"error",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+a.hash,"_blank").focus()}),console.log(t))}catch(a){console.error(a);try{let o=a.message.split("reason=")[1];o=o.split(", method=")[0],o=o.replace(/"/g,""),o=o.replace("execution reverted:","Error:"),console.log(o),this.toast(o,{type:"error"})}catch{this.toast("Transaction has failed.",{type:"error"})}this.waitingBuy=!1}},clean(e){return e.split(".")[0].trim().toLowerCase()},async fetchBuyData(){this.buyKeyPriceWei=null,this.waitingBuy=!0;const e=new u(["function getBuyPriceAfterFee(string memory domainName, uint256 amount) public view returns (uint256)"]),i=new y(this.$config.keysAddress,e,this.signer);this.buyKeyPriceWei=await i.getBuyPriceAfterFee(this.cleanDomainName,1),this.waitingBuy=!1},async fetchSellData(){this.sellKeyPriceWei=null,this.waitingSell=!0;const e=new u(["function getSellPriceAfterFee(string memory domainName, uint256 amount) public view returns (uint256)"]),i=new y(this.$config.keysAddress,e,this.signer);this.sellKeyPriceWei=await i.getSellPriceAfterFee(this.cleanDomainName,1),console.log("sellKeyPriceWei",this.sellKeyPriceWei),console.log("sellKeyPrice",b(this.sellKeyPriceWei)),this.waitingSell=!1},async getData(){this.cleanDomainName=null,this.isKeyHolder=!1,this.waitingData=!0,this.cleanDomainName=this.clean(this.domainName);const e=new u(["function getBuyPriceAfterFee(string memory domainName, uint256 amount) public view returns (uint256)","function getDomainHolder(string memory domainName) external view returns (address)","function isKeyHolder(string memory domainName, address user) external view returns (bool)"]),i=new y(this.$config.keysAddress,e,this.signer);this.isKeyHolder=await i.isKeyHolder(this.cleanDomainName,this.address),this.isKeyHolder?this.showBuySellButtons=!0:await i.getDomainHolder(this.cleanDomainName)===F?this.domainNotExists=!0:(this.showBuySellButtons=!0,this.buyKeyToChat=!0),this.waitingData=!1},async sellKey(){this.waitingSell=!0,this.cleanDomainName=this.clean(this.domainName);const e=new u(["function isKeyHolder(string memory domainName, address user) external view returns (bool)","function sellKeys(string memory domainName, uint256 amount) external payable"]),i=new y(this.$config.keysAddress,e,this.signer);try{const a=await i.sellKeys(this.cleanDomainName,1),o=this.toast({component:k,props:{text:"Please wait for your transaction to confirm. Click on this notification to see transaction in the block explorer."}},{type:"info",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+a.hash,"_blank").focus()}),t=await a.wait();t.status===1?(this.toast.dismiss(o),this.toast(this.cleanDomainName+this.$config.tldName+" friend key has been successfully sold!",{type:"success",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+a.hash,"_blank").focus()}),document.getElementById("closeSellKeyModal").click(),this.isKeyHolder=!1,this.waitingSell=!1,this.isKeyHolder=await i.isKeyHolder(this.cleanDomainName,this.address)):(this.toast.dismiss(o),this.waitingSell=!1,this.toast("Transaction has failed.",{type:"error",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+a.hash,"_blank").focus()}),console.log(t))}catch(a){console.error(a);try{let o=a.message.split("reason=")[1];o=o.split(", method=")[0],o=o.replace(/"/g,""),o=o.replace("execution reverted:","Error:"),console.log(o),this.toast(o,{type:"error"})}catch{this.toast("Transaction has failed.",{type:"error"})}this.waitingSell=!1}}},setup(){const{address:e,isActivated:i,signer:a}=H(),o=W();return{address:e,isActivated:i,signer:a,toast:o}},watch:{domainName:function(e){this.cleanDomainName=null,this.isKeyHolder=!1,this.showBuySellButtons=!1,this.domainNotExists=!1,this.buyKeyToChat=!1,this.buyKeyPriceWei=null,this.sellKeyPriceWei=null}}},Q={class:"card border"},G={class:"card-body"},O=s("i",{class:"bi bi-arrow-left-circle cursor-pointer"},null,-1),R=[O],Z=s("h3",{class:"mb-2 mt-3 text-center"},"Get a Friend Key and unlock a chat room",-1),q={class:"d-flex justify-content-center"},z={class:"col-12 col-lg-8"},J=s("p",{class:"text-break text-center mt-3 mb-4"}," Search for a domain and get its Friend Key to unlock a chat room with the domain holder and other key holders. ",-1),X={class:"input-group"},Y={key:0,class:"d-flex justify-content-center mt-4"},$={key:1,class:"d-flex justify-content-center mt-4"},ee=["disabled"],te={key:0,class:"spinner-border spinner-border-sm me-2",role:"status","aria-hidden":"true"},se={key:1},ie={key:2},oe={key:2,class:"d-flex justify-content-center mt-4 mb-4"},ne=["disabled"],ae={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},le=["disabled"],re={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},ce={key:0,class:"card border mt-3 scroll-500"},de={class:"card-body"},me=s("h3",{class:"mb-4 mt-3 text-center"},"Featured Keys List",-1),ue={class:"d-flex justify-content-center"},ye={class:"col-12 col-lg-8"},he={key:1,class:"card border mt-3 scroll-500"},fe={class:"card-body"},be=s("h3",{class:"mb-2 mt-3 text-center"},"This domain does not exist.",-1),ge={class:"d-flex justify-content-center"},pe={class:"col-12 col-lg-8"},_e={class:"text-break mt-3 mb-4"},ke={key:2,class:"card border mt-3 scroll-500"},we=I('<div class="card-body"><h3 class="mb-2 mt-3 text-center">Buy a key to see the chat</h3><div class="d-flex justify-content-center"><div class="col-12 col-lg-8"><p class="text-break text-center mt-3 mb-4"> The chat is open only for key holders. Buy a key to see the chat and talk with the domain holder and other key holders. </p></div></div></div>',1),Ke=[we],Ne={class:"modal fade",id:"buyKeyModal",tabindex:"-1","aria-labelledby":"buyKeyModalLabel","aria-hidden":"true"},xe={class:"modal-dialog"},Be={class:"modal-content"},ve={class:"modal-header"},Ce={class:"modal-title fs-5",id:"buyKeyModalLabel"},De=s("button",{id:"closeBuyKeyModal",type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Se={class:"modal-body"},Pe={class:"modal-footer"},Fe=["disabled"],He={key:0,class:"spinner-border spinner-border-sm mx-1",role:"status","aria-hidden":"true"},We={class:"modal fade",id:"sellKeyModal",tabindex:"-1","aria-labelledby":"sellKeyModalLabel","aria-hidden":"true"},Te={class:"modal-dialog"},Ee={class:"modal-content"},Me={class:"modal-header"},Ae={class:"modal-title fs-5",id:"sellKeyModalLabel"},Ie=s("button",{id:"closeSellKeyModal",type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),je={class:"modal-body"},Le={class:"modal-footer"},Ue=["disabled"],Ve={key:0,class:"spinner-border spinner-border-sm mx-1",role:"status","aria-hidden":"true"};function Qe(e,i,a,o,t,l){const w=D,K=S,N=C,x=g("ConnectWalletButton"),B=g("KeysList"),v=g("ChatFeed");return c(),m(A,null,[h(N,null,{default:p(()=>[h(w,null,{default:p(()=>[f("Friend Keys | "+n(e.$config.projectMetadataTitle),1)]),_:1}),h(K,{property:"og:title",content:"Friend Keys | "+e.$config.projectMetadataTitle},null,8,["content"])]),_:1}),s("div",Q,[s("div",G,[s("p",{class:"fs-3",onClick:i[0]||(i[0]=r=>e.$router.back())},R),Z,s("div",q,[s("div",z,[J,s("div",X,[T(s("input",{"onUpdate:modelValue":i[1]||(i[1]=r=>t.domainName=r),type:"text",placeholder:"Enter domain name",class:"form-control",onKeyup:i[2]||(i[2]=M((...r)=>l.getData&&l.getData(...r),["enter"]))},null,544),[[E,t.domainName]]),s("button",{onClick:i[3]||(i[3]=(...r)=>l.getData&&l.getData(...r)),class:"btn btn-primary",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},n(e.$config.tldName),1)]),o.isActivated?d("",!0):(c(),m("div",Y,[o.isActivated?d("",!0):(c(),_(x,{key:0,class:"btn btn-outline-primary",btnText:"Connect wallet"}))])),o.isActivated&&!t.showBuySellButtons?(c(),m("div",$,[s("button",{disabled:t.waitingData||!t.domainName,class:"btn btn-outline-primary",type:"button",onClick:i[4]||(i[4]=(...r)=>l.getData&&l.getData(...r))},[t.waitingData?(c(),m("span",te)):d("",!0),t.domainName?d("",!0):(c(),m("span",se,"Unlock Chat")),t.domainName?(c(),m("span",ie,"Unlock "+n(t.domainName)+"'s Chat",1)):d("",!0)],8,ee)])):d("",!0),o.isActivated&&t.showBuySellButtons&&!t.domainNotExists?(c(),m("div",oe,[s("button",{disabled:t.waitingBuy||!t.domainName,class:"btn btn-outline-primary",type:"button",onClick:i[5]||(i[5]=(...r)=>l.fetchBuyData&&l.fetchBuyData(...r)),"data-bs-toggle":"modal","data-bs-target":"#buyKeyModal"},[t.waitingBuy?(c(),m("span",ae)):d("",!0),f(" Buy Key ")],8,ne),s("button",{disabled:t.waitingSell||!t.domainName,class:"btn btn-outline-primary ms-3",type:"button",onClick:i[6]||(i[6]=(...r)=>l.fetchSellData&&l.fetchSellData(...r)),"data-bs-toggle":"modal","data-bs-target":"#sellKeyModal"},[t.waitingSell?(c(),m("span",re)):d("",!0),f(" Sell Key ")],8,le)])):d("",!0)])])])]),!t.domainNotExists&&!t.showBuySellButtons&&!t.buyKeyToChat&&!t.isKeyHolder?(c(),m("div",ce,[s("div",de,[me,s("div",ue,[s("div",ye,[h(B)])])])])):d("",!0),t.domainNotExists&&!t.showBuySellButtons?(c(),m("div",he,[s("div",fe,[be,s("div",ge,[s("div",pe,[s("p",_e,[f(" Instead, try one of these: "),s("ul",null,[s("li",null,"techie"+n(e.$config.tldName),1),s("li",null,"tekr"+n(e.$config.tldName),1)])])])])])])):d("",!0),t.buyKeyToChat?(c(),m("div",ke,Ke)):d("",!0),t.domainName&&t.cleanDomainName&&t.isKeyHolder&&!t.waitingData&&l.clean(t.domainName)===t.cleanDomainName?(c(),_(v,{key:t.cleanDomainName,allPosts:!0,class:"mt-3",showQuotedPost:e.$config.showRepliesOnHomepage,orbisContext:e.$config.keysContext+":"+t.cleanDomainName},null,8,["showQuotedPost","orbisContext"])):d("",!0),s("div",Ne,[s("div",xe,[s("div",Be,[s("div",ve,[s("h1",Ce,"Buy one "+n(t.cleanDomainName)+n(e.$config.tldName)+" key",1),De]),s("div",Se," Buy 1 "+n(t.cleanDomainName)+n(e.$config.tldName)+" key for "+n(l.buyKeyPrice)+" "+n(e.$config.tokenSymbol)+"? ",1),s("div",Pe,[s("button",{type:"button",class:"btn btn-primary",onClick:i[7]||(i[7]=(...r)=>l.buyKey&&l.buyKey(...r)),disabled:t.waitingBuy},[t.waitingBuy?(c(),m("span",He)):d("",!0),s("span",null,"Buy for "+n(l.buyKeyPrice)+" "+n(e.$config.tokenSymbol),1)],8,Fe)])])])]),s("div",We,[s("div",Te,[s("div",Ee,[s("div",Me,[s("h1",Ae,"Sell one "+n(t.cleanDomainName)+n(e.$config.tldName)+" key",1),Ie]),s("div",je," Sell 1 "+n(t.cleanDomainName)+n(e.$config.tldName)+" key for "+n(l.sellKeyPrice)+" "+n(e.$config.tokenSymbol)+"? ",1),s("div",Le,[s("button",{type:"button",class:"btn btn-primary",onClick:i[8]||(i[8]=(...r)=>l.sellKey&&l.sellKey(...r)),disabled:t.waitingSell},[t.waitingSell?(c(),m("span",Ve)):d("",!0),s("span",null,"Sell for "+n(l.sellKeyPrice)+" "+n(e.$config.tokenSymbol),1)],8,Ue)])])])])],64)}const at=P(V,[["render",Qe]]);export{at as default};
