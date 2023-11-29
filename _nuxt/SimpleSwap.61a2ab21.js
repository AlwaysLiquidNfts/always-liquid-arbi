import{q as W,C as v,Q as x,A as l,I as V,a as N,l as O,s as H,o as d,b as c,f as n,t as r,i as P,v as C,x as I,y as m,r as Y,a4 as j,F as M,E as F,c as q,e as U,D as B}from"./entry.6c6c90ff.js";import{E as K,b as Q,a as X}from"./balanceUtils.942b259d.js";import{u as E}from"./site.8bbebe65.js";import{C as Z}from"./ConnectWalletButton.adada651.js";import{W as S}from"./WaitingToast.7065dfe9.js";const T={1:"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",10:"0x4200000000000000000000000000000000000006",14:"0x1d80c49bbbcd1c0911346656b529df9e5c2f783d",19:"0x02f0826ef6aD107Cfc861152B32B52fD11BaB9ED",56:"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",100:"0xe91d153e0b41518a2ce8dd3d7944fa863463a97d",137:"0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",250:"0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83",324:"0x5aea5775959fbc2557cc8789bc1bf90a239d9a91",1101:"0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9",42161:"0x82af49447d8a07e3bd95bd0d56f35241523fbab1",43114:"0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7",534352:"0x5300000000000000000000000000000000000004"};async function z(s,e,i,u,o){const t=W();let p=s;p||(p=this.$getFallbackProvider(t.supportedChainId));const h=["function getPriceImpact(address tokenIn, address tokenOut, uint amountIn) external view returns (uint)"],b=new v(o,h,p),a=x(u,e.decimals),f=await b.getPriceImpact(e.address,i.address,a);return Number(f)}async function G(s,e,i,u,o){const t=W();let p=s;p||(p=this.$getFallbackProvider(t.supportedChainId));const h=x(u,e.decimals);let b=[e.address,i.address];const a=T[String(t.supportedChainId)];if(e.address!==l&&e.address!==a&&i.address!==l&&i.address!==a&&(b=[e.address,a,i.address]),(e.address===l||e.address===a)&&(i.address===l||i.address===a))return h;const f=["function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)"],k=await new v(o,f,p).getAmountsOut(h,b);return k[k.length-1]}function J(s,e,i,u,o,t,p,h){const b=W(),a=E();let f=s;const A=Math.floor(Date.now()/1e3)+60*Number(a.getSwapDeadline),k=String(T[String(b.supportedChainId)]).toLowerCase(),w=String(i.address).toLowerCase(),g=String(u.address).toLowerCase(),D=new V(["function deposit() payable","function withdraw(uint wad)"]),L=new v(k,D,f);if(w===l&&g===k)return L.deposit({value:o});if(w===k&&g===l)return L.withdraw(o);{const R=["function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)","function swapExactTokensForTokensWithReferrer(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)","function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)","function swapExactETHForTokensWithReferrer(uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)","function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)","function swapExactTokensForETHWithReferrer(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)"],y=new v(p,R,f);let _=[w,g];return w===l&&g!==k&&g!==l?h===l?y.swapExactETHForTokens(t,_,e,A,{value:o}):y.swapExactETHForTokensWithReferrer(t,_,e,A,h,{value:o}):w!==l&&w!==k&&g===l?h===l?y.swapExactTokensForETH(o,t,_,e,A):y.swapExactTokensForETHWithReferrer(o,t,_,e,A,h):(w!==k&&g!==k&&(_=[w,k,g]),h===l?y.swapExactTokensForTokens(o,t,_,e,A):y.swapExactTokensForTokensWithReferrer(o,t,_,e,A,h))}}const $={name:"TokenApprovalModal",props:["amount","modalId","routerAddress","token"],emits:["setApprovalAmount"],components:{WaitingToast:S},data(){return{waiting:!1,selectedOption:"unlimited",approvalAmount:0}},mounted(){this.approvalAmount=this.amount},computed:{isUnlimited(){return this.selectedOption==="unlimited"}},methods:{selectOption(s){this.selectedOption=s},async approveToken(){this.waiting=!0;let s=this.approvalAmount;this.isUnlimited&&(s=1e16);const e=x(String(s),this.token.decimals),i=new v(this.token.address,K,this.signer);try{const u=await i.approve(this.routerAddress,e),o=this.toast({component:S,props:{text:"Please wait for your transaction to confirm. Click on this notification to see transaction in the block explorer."}},{type:"info",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+u.hash,"_blank").focus()}),t=await u.wait();t.status===1?(this.toast.dismiss(o),this.toast("You have successfully approved "+this.token.symbol+"!",{type:"success",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+u.hash,"_blank").focus()}),this.$emit("setApprovalAmount",s),this.waiting=!1,document.getElementById("closeTokenApprovalModal"+this.modalId).click()):(this.waiting=!1,this.toast.dismiss(o),this.toast("Transaction has failed.",{type:"error",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+u.hash,"_blank").focus()}),console.log(t))}catch{this.toast.error("Something went wrong while approving the token"),this.waiting=!1;return}this.waiting=!1}},setup(){const{signer:s}=O(),e=H();return{signer:s,toast:e}},watch:{amount(s,e){s&&(this.approvalAmount=this.amount)}}},tt=["id","aria-labelledby"],et={class:"modal-dialog"},nt={class:"modal-content"},ot={class:"modal-header"},st=["id"],it=["id"],at={class:"modal-body"},ut={class:"row mt-3"},rt={class:"col-lg-8"},lt={class:"input-group-text"},dt=["checked"],ct=n("input",{value:"Unlimited",type:"text",class:"form-control",disabled:""},null,-1),pt={class:"input-group-text"},mt=["checked"],ht=["disabled"],kt={class:"input-group-text",id:"basic-addon2"},Tt=n("p",{class:"mt-3"},[n("small",null,[n("em",null," If you want to do more swaps without approvals, set a big enough amount or choose unlimited. ")])],-1),bt={class:"modal-footer"},ft=["disabled"],wt={key:0,class:"spinner-border spinner-border-sm mx-1",role:"status","aria-hidden":"true"},gt={key:1},At={key:2};function _t(s,e,i,u,o,t){return d(),c("div",{class:"modal fade",id:"tokenApprovalModal"+i.modalId,tabindex:"-1","aria-labelledby":"tokenApprovalModalLabel"+i.modalId,"aria-hidden":"true"},[n("div",et,[n("div",nt,[n("div",ot,[n("h1",{class:"modal-title fs-5",id:"tokenApprovalModalLabel"+i.modalId},"Approve "+r(i.token?.symbol)+" token",9,st),n("button",{id:"closeTokenApprovalModal"+i.modalId,type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,8,it)]),n("div",at,[P(" Approve "+r(i.token?.symbol)+" tokens for swapping: ",1),n("div",ut,[n("div",rt,[n("div",{class:"input-group",onClick:e[0]||(e[0]=p=>t.selectOption("unlimited"))},[n("div",lt,[n("input",{class:"form-check-input mt-0",type:"radio",checked:t.isUnlimited},null,8,dt)]),ct]),n("div",{class:"input-group mt-2",onClick:e[2]||(e[2]=p=>t.selectOption("limited"))},[n("div",pt,[n("input",{class:"form-check-input mt-0",type:"radio",checked:!t.isUnlimited},null,8,mt)]),C(n("input",{"onUpdate:modelValue":e[1]||(e[1]=p=>o.approvalAmount=p),type:"text",class:"form-control",disabled:o.waiting},null,8,ht),[[I,o.approvalAmount]]),n("span",kt,r(i.token?.symbol),1)])])]),Tt]),n("div",bt,[n("button",{type:"button",class:"btn btn-primary",onClick:e[3]||(e[3]=(...p)=>t.approveToken&&t.approveToken(...p)),disabled:o.waiting},[o.waiting?(d(),c("span",wt)):m("",!0),t.isUnlimited?(d(),c("span",gt,"Approve unlimited")):m("",!0),t.isUnlimited?m("",!0):(d(),c("span",At,"Approve "+r(o.approvalAmount)+" "+r(i.token?.symbol),1))],8,ft)])])])],8,tt)}const yt=N($,[["render",_t]]),vt={name:"SwapTokensModal",props:["inputToken","inputTokenAmount","modalId","outputToken","outputTokenAmount","outputTokenAmountWei","routerAddress"],emits:["changeInputTokenBalance"],data(){return{waiting:!1}},components:{WaitingToast:S},computed:{bothTokensAreNativeCoinOrWrappedToken(){return!!(this.inputIsNativeCoin&&this.outputIsWrappedNativeCoin||this.inputIsWrappedNativeCoin&&this.outputIsNativeCoin)},inputIsNativeCoin(){return String(this.inputToken?.address).toLowerCase()==String(l).toLowerCase()},inputIsWrappedNativeCoin(){return String(this.inputToken?.address).toLowerCase()==String(T[this.$config.supportedChainId]).toLowerCase()},outputIsNativeCoin(){return String(this.outputToken?.address).toLowerCase()==String(l).toLowerCase()},outputIsWrappedNativeCoin(){return String(this.outputToken?.address).toLowerCase()==String(T[this.$config.supportedChainId]).toLowerCase()}},methods:{async swap(){this.waiting=!0;const s=x(this.inputTokenAmount,this.inputToken?.decimals);try{const e=await J(this.signer,this.address,this.inputToken,this.outputToken,s,this.outputTokenAmountWei,this.routerAddress,l),i=this.toast({component:S,props:{text:"Please wait for your transaction to confirm. Click on this notification to see transaction in the block explorer."}},{type:"info",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+e.hash,"_blank").focus()}),u=await e.wait();u.status===1?(this.toast.dismiss(i),this.toast("You have successfully swapped "+this.inputToken.symbol+" for "+this.outputToken.symbol+"!",{type:"success",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+e.hash,"_blank").focus()}),this.$emit("changeInputTokenBalance"),this.waiting=!1,document.getElementById("closeSwapTokensModal"+this.modalId).click()):(this.waiting=!1,this.toast.dismiss(i),this.toast("Transaction has failed.",{type:"error",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+e.hash,"_blank").focus()}),console.log(u))}catch{this.toast.error("Something went wrong while swapping tokens"),this.waiting=!1;return}this.waiting=!1}},setup(){const{address:s,signer:e}=O(),i=H(),u=E();return{address:s,signer:e,siteStore:u,toast:i}}},xt=["id","aria-labelledby"],Ct={class:"modal-dialog"},It={class:"modal-content"},St={class:"modal-header"},Bt=["id"],Wt=["id"],Nt={class:"modal-body"},Ot=n("p",null,"Double-check the swap amounts:",-1),Et={class:"input-group mb-3"},Lt={class:"input-group-text",id:"basic-addon1"},Mt=["value"],Ft=n("h4",{class:"text-center mt-2"},[n("i",{class:"bi bi-arrow-down"})],-1),Ut={class:"input-group mb-3"},Ht={class:"input-group-text",id:"basic-addon1"},Pt=["value"],Dt={key:0},Rt={class:"modal-footer"},Vt=["disabled"],Yt={key:0,class:"spinner-border spinner-border-sm mx-1",role:"status","aria-hidden":"true"};function jt(s,e,i,u,o,t){return d(),c("div",{class:"modal fade",id:"swapTokensModal"+i.modalId,tabindex:"-1","aria-labelledby":"swapTokensModalLabel"+i.modalId,"aria-hidden":"true"},[n("div",Ct,[n("div",It,[n("div",St,[n("h1",{class:"modal-title fs-5",id:"swapTokensModalLabel"+i.modalId},"Swap tokens",8,Bt),n("button",{id:"closeSwapTokensModal"+i.modalId,type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,8,Wt)]),n("div",Nt,[Ot,n("div",Et,[n("span",Lt,r(i.inputToken?.symbol),1),n("input",{type:"text",class:"form-control",value:i.inputTokenAmount,disabled:""},null,8,Mt)]),Ft,n("div",Ut,[n("span",Ht,r(i.outputToken?.symbol),1),n("input",{type:"text",class:"form-control",value:i.outputTokenAmount,disabled:""},null,8,Pt)]),t.bothTokensAreNativeCoinOrWrappedToken?m("",!0):(d(),c("small",Dt,[n("em",null," You will get at least "+r(i.outputTokenAmount)+" "+r(i.outputToken?.symbol)+", but probably more ("+r(u.siteStore.getSlippage)+"% slippage). ",1)]))]),n("div",Rt,[n("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=(...p)=>t.swap&&t.swap(...p)),disabled:o.waiting},[o.waiting?(d(),c("span",Yt)):m("",!0),P(" Swap tokens ")],8,Vt)])])])],8,xt)}const qt=N(vt,[["render",jt]]),Kt={name:"SimpleSwap",props:["outputPlaceholder","poweredBy","routerAddress","swapId","tokens"],data(){return{debounce:null,filterTextInput:"",filterTextOutput:"",inputToken:null,inputTokenAllowance:0,inputTokenAmount:null,inputTokenBalance:null,outputText:"0",outputToken:null,outputTokenAmountWei:null,preswapCheck:!1,priceImpact:0,timeout:800,tokenList:[]}},components:{ConnectWalletButton:Z,SwapTokensModal:qt,TokenApprovalModal:yt},mounted(){this.tokenList=this.getFilteredTokens(this.tokens.tokens),this.selectInputToken(this.tokenList[0]),this.selectOutputToken(this.tokenList[1]),this.outputPlaceholder&&(this.outputText=this.outputPlaceholder)},computed:{allowanceTooLow(){return Number(this.inputTokenAllowance)<Number(this.inputTokenAmount)},bothTokensAreNativeCoinOrWrappedTokenOrSame(){return this.inputToken.address==l&&this.outputToken.address==T[this.$config.supportedChainId]||this.inputToken.address==T[this.$config.supportedChainId]&&this.outputToken.address==l||this.inputToken.address==l&&this.outputToken.address==l||this.inputToken.address==T[this.$config.supportedChainId]&&this.outputToken.address==T[this.$config.supportedChainId]?!0:this.inputToken.address==this.outputToken.address},bothTokensAreTheSame(){return this.inputToken.address==this.outputToken.address},filteredTokensInput(){const s=new RegExp(this.filterTextInput,"i");return this.tokenList.filter(e=>s.test(e.symbol))},filteredTokensOutput(){const s=new RegExp(this.filterTextOutput,"i");return this.tokenList.filter(e=>s.test(e.symbol))},formatInputTokenBalance(){return this.inputTokenBalance?this.inputTokenBalance==0?0:this.inputTokenBalance>100?Number(this.inputTokenBalance).toFixed(2):Number(this.inputTokenBalance).toFixed(4):0},inputAmountLessThanBalance(){return this.inputTokenAmount&&this.inputTokenBalance?Number(this.inputTokenAmount)<=Number(this.inputTokenBalance):!1},inputIsWrappedNativeCoin(){return String(this.inputToken?.address).toLowerCase()==String(T[this.$config.supportedChainId]).toLowerCase()},outputIsNativeCoin(){return String(this.outputToken?.address).toLowerCase()==String(l).toLowerCase()},outputTokenAmount(){if(this.outputTokenAmountWei){let s=Y(String(this.outputTokenAmountWei),this.outputToken.decimals);return s==0?0:s>100?Number(s).toFixed(2):Number(s).toFixed(4)}return null},priceImpactTooHigh(){return this.priceImpact>this.$config.swapPriceImpactMaxBps},unwrappingWrappedNativeCoin(){return!!(this.inputIsWrappedNativeCoin&&this.outputIsNativeCoin)}},methods:{getTokenAllowance:Q,getTokenBalance:X,changeInputTokenAllowance(s){this.inputTokenAllowance=Number(s)},getFilteredTokens(s){return s.filter(e=>e.swap)},async getOutputAmount(){if(this.inputTokenAmount){if(this.bothTokensAreNativeCoinOrWrappedTokenOrSame)this.outputTokenAmountWei=x(this.inputTokenAmount,this.inputToken.decimals);else{const s=await G(this.signer,this.inputToken,this.outputToken,this.inputTokenAmount,this.routerAddress),e=Math.floor(Number(this.siteStore.getSlippage)*100);this.outputTokenAmountWei=s.sub(s.div(1e4).mul(e))}this.priceImpact=await z(this.signer,this.inputToken,this.outputToken,this.inputTokenAmount,this.routerAddress)}else this.outputTokenAmountWei=null},getOutputAmountWithTimeout(){this.debounce&&clearTimeout(this.debounce);const s=this;this.debounce=setTimeout(()=>{s.getOutputAmount()},s.timeout)},async selectInputToken(s){this.inputTokenAllowance=0,this.outputTokenAmountWei=null,this.inputToken=s,this.inputTokenAmount=null,this.signer&&(this.inputTokenBalance=await this.getTokenBalance(s,this.address,this.signer)),s.address==l?this.inputTokenAllowance=Number(j):this.inputTokenAllowance=await this.getTokenAllowance(s,this.address,this.routerAddress,this.signer)},selectOutputToken(s){this.outputToken=s,this.outputTokenAmountWei=null},setMaxInputTokenAmount(){this.inputTokenAmount=String(this.inputTokenBalance),this.getOutputAmount()},subtractInputTokenBalance(){this.inputTokenBalance=Number(this.inputTokenBalance)-Number(this.inputTokenAmount)},togglePreswapCheck(){this.preswapCheck=!this.preswapCheck}},setup(){const{address:s,isActivated:e,signer:i}=O(),u=E();return{address:s,isActivated:e,signer:i,siteStore:u}},watch:{async isActivated(){this.address&&(this.inputTokenBalance=await this.getTokenBalance(this.inputToken,this.address,this.signer))}}},Qt={class:"input-group mb-1"},Xt={class:"btn btn-primary dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},Zt={class:"dropdown-menu p-2"},zt=["onClick"],Gt=n("small",null,"MAX",-1),Jt=[Gt],$t=n("em",null,"Balance: ",-1),te={class:"cursor-pointer hover-color"},ee=n("i",{class:"bi bi-arrow-down"},null,-1),ne=[ee],oe={class:"input-group mt-4"},se={class:"btn btn-primary dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},ie={class:"dropdown-menu p-2"},ae=["onClick"],ue=["value","placeholder"],re={key:0},le={class:"d-flex justify-content-center mt-4"},de={key:1,disabled:!0,class:"btn btn-outline-primary",type:"button"},ce=["data-bs-target"],pe=["disabled","data-bs-target"],me={key:4,disabled:!0,class:"btn btn-outline-primary",type:"button"},he={key:5,disabled:!0,class:"btn btn-outline-primary",type:"button"},ke={key:6,disabled:!0,class:"btn btn-outline-primary",type:"button"},Te={key:1,class:"text-center mt-4"};function be(s,e,i,u,o,t){const p=B("ConnectWalletButton"),h=B("TokenApprovalModal"),b=B("SwapTokensModal");return d(),c("div",null,[n("div",Qt,[n("button",Xt,r(o.inputToken?.symbol),1),n("ul",Zt,[C(n("input",{class:"form-control mb-2",placeholder:"Filter tokens","onUpdate:modelValue":e[0]||(e[0]=a=>o.filterTextInput=a)},null,512),[[I,o.filterTextInput]]),(d(!0),c(M,null,F(t.filteredTokensInput,a=>(d(),c("li",{key:a.address,class:"cursor-pointer"},[n("span",{onClick:f=>t.selectInputToken(a),class:"dropdown-item"},r(a.symbol)+" ("+r(a.name)+")",9,zt)]))),128))]),C(n("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>o.inputTokenAmount=a),type:"text",class:"form-control",placeholder:"0.00",onKeyup:e[2]||(e[2]=(...a)=>t.getOutputAmountWithTimeout&&t.getOutputAmountWithTimeout(...a))},null,544),[[I,o.inputTokenAmount]]),n("button",{onClick:e[3]||(e[3]=(...a)=>t.setMaxInputTokenAmount&&t.setMaxInputTokenAmount(...a)),class:"btn btn-outline-secondary",type:"button",id:"button-addon2"},Jt)]),n("small",{onClick:e[4]||(e[4]=(...a)=>t.setMaxInputTokenAmount&&t.setMaxInputTokenAmount(...a))},[$t,n("em",te,r(t.formatInputTokenBalance)+" "+r(o.inputToken?.symbol),1)]),n("h4",{onClick:e[5]||(e[5]=(...a)=>t.getOutputAmount&&t.getOutputAmount(...a)),class:"text-center mt-2 cursor-pointer"},ne),n("div",oe,[n("button",se,r(o.outputToken?.symbol),1),n("ul",ie,[C(n("input",{class:"form-control mb-2",placeholder:"Filter tokens","onUpdate:modelValue":e[6]||(e[6]=a=>o.filterTextOutput=a)},null,512),[[I,o.filterTextOutput]]),(d(!0),c(M,null,F(t.filteredTokensOutput,a=>(d(),c("li",{key:a.address,class:"cursor-pointer"},[n("span",{onClick:f=>t.selectOutputToken(a),class:"dropdown-item"},r(a.symbol)+" ("+r(a.name)+")",9,ae)]))),128))]),n("input",{type:"text",class:"form-control",value:t.outputTokenAmount,placeholder:o.outputText,disabled:""},null,8,ue)]),t.outputTokenAmount&&!t.bothTokensAreNativeCoinOrWrappedTokenOrSame?(d(),c("small",re,[n("em",null," You will get at least "+r(t.outputTokenAmount)+" "+r(o.outputToken.symbol)+", but probably more ("+r(u.siteStore.getSlippage)+"% slippage). ",1)])):m("",!0),n("div",le,[u.isActivated?m("",!0):(d(),q(p,{key:0,class:"btn btn-outline-primary",btnText:"Connect wallet"})),u.isActivated&&!o.inputTokenAmount?(d(),c("button",de," Swap tokens ")):m("",!0),u.isActivated&&o.inputTokenAmount&&t.inputAmountLessThanBalance&&!t.bothTokensAreTheSame&&t.allowanceTooLow&&!t.unwrappingWrappedNativeCoin&&!t.priceImpactTooHigh?(d(),c("button",{key:2,class:"btn btn-outline-primary",type:"button","data-bs-toggle":"modal","data-bs-target":"#tokenApprovalModal"+i.swapId}," Approve token ",8,ce)):m("",!0),U(h,{modalId:i.swapId,token:o.inputToken,amount:o.inputTokenAmount,routerAddress:i.routerAddress,onSetApprovalAmount:t.changeInputTokenAllowance},null,8,["modalId","token","amount","routerAddress","onSetApprovalAmount"]),u.isActivated&&o.inputTokenAmount&&t.inputAmountLessThanBalance&&!t.bothTokensAreTheSame&&!t.priceImpactTooHigh&&!t.priceImpactTooHigh&&(!t.allowanceTooLow||t.unwrappingWrappedNativeCoin)?(d(),c("button",{key:3,disabled:!o.inputToken||!o.outputToken||!o.inputTokenAmount||!t.outputTokenAmount||!u.isActivated||t.bothTokensAreTheSame||!t.inputAmountLessThanBalance,class:"btn btn-outline-primary",type:"button","data-bs-toggle":"modal","data-bs-target":"#swapTokensModal"+i.swapId,onClick:e[7]||(e[7]=(...a)=>t.getOutputAmount&&t.getOutputAmount(...a))}," Swap tokens ",8,pe)):m("",!0),U(b,{modalId:i.swapId,inputToken:o.inputToken,inputTokenAmount:o.inputTokenAmount,outputToken:o.outputToken,outputTokenAmount:t.outputTokenAmount,outputTokenAmountWei:o.outputTokenAmountWei,routerAddress:i.routerAddress,onChangeInputTokenBalance:t.subtractInputTokenBalance},null,8,["modalId","inputToken","inputTokenAmount","outputToken","outputTokenAmount","outputTokenAmountWei","routerAddress","onChangeInputTokenBalance"]),u.isActivated&&o.inputTokenAmount&&!t.inputAmountLessThanBalance&&!t.bothTokensAreTheSame&&!t.priceImpactTooHigh?(d(),c("button",me," Balance too low ")):m("",!0),u.isActivated&&o.inputTokenAmount&&t.bothTokensAreTheSame&&!t.priceImpactTooHigh?(d(),c("button",he," Both tokens are the same ")):m("",!0),u.isActivated&&o.inputTokenAmount&&t.priceImpactTooHigh?(d(),c("button",ke," Price impact too high ")):m("",!0)]),i.poweredBy?(d(),c("p",Te,[n("small",null,[n("em",null,"Powered by "+r(i.poweredBy)+".",1)])])):m("",!0)])}const ye=N(Kt,[["render",be]]);export{ye as S};
