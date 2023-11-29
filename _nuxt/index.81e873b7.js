import{H as F,T as k,M as $}from"./components.d226d788.js";import{a as v,I as N,C as b,A,l as L,o,b as c,f as e,v as T,x as E,y as u,i as _,p as M,e as h,w as g,F as y,E as I,G as S,t as p,c as x,D as B}from"./entry.6c6c90ff.js";import{f as D,s as P}from"./storageUtils.9724dbc0.js";import"./composables.790a43b4.js";const q={name:"SearchNftModal",data(){return{componentId:null,searchText:"",waitingFind:!1,findError:!1}},mounted(){this.componentId=this.$.uid},methods:{async findNft(){if(this.waitingFind=!0,this.findError=!1,this.searchText){if(String(this.searchText).toLowerCase().startsWith("0x"))return document.getElementById("closeModal-"+this.componentId).click(),this.$router.push({path:"/nft/collection/",query:{id:this.searchText}}),this.searchText=null,this.waitingFind=!1;{const s=new N(["function getNftContractAddress(string calldata _uniqueId) external view returns(address)"]);let t=this.$getFallbackProvider(this.$config.supportedChainId);this.isActivated&&this.chainId===this.$config.supportedChainId&&(t=this.signer);const d=await new b(this.$config.nftLaunchpadBondingAddress,s,t).getNftContractAddress(this.searchText);if(d!==A)return document.getElementById("closeModal-"+this.componentId).click(),this.$router.push({path:"/nft/collection/",query:{id:d}}),this.searchText=null,this.waitingFind=!1}return this.findError=!0,this.waitingFind=!1}}},setup(){const{chainId:s,isActivated:t,signer:r}=L();return{chainId:s,isActivated:t,signer:r}}},j=["aria-labelledby"],V={class:"modal-dialog"},H={class:"modal-content"},U={class:"modal-header"},W=["id"],G=["id"],Z={class:"modal-body"},z={class:"mb-3"},J=["for"],K=["for"],O={key:0},Q={class:"modal-footer"},R=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1),X=["disabled"],Y={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"};function tt(s,t,r,d,n,l){return o(),c("div",{class:"modal fade",id:"searchNftModal",tabindex:"-1","aria-labelledby":"modalLabel-"+n.componentId,"aria-hidden":"true"},[e("div",V,[e("div",H,[e("div",U,[e("h1",{class:"modal-title fs-5",id:"modalLabel-"+n.componentId},"Find NFT collection",8,W),e("button",{id:"closeModal-"+n.componentId,type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,8,G)]),e("div",Z,[e("div",z,[e("label",{for:"input-"+n.componentId,class:"form-label"},"Enter NFT collection address or unique ID:",8,J),T(e("input",{"onUpdate:modelValue":t[0]||(t[0]=i=>n.searchText=i),type:"text",class:"form-control",for:"input-"+n.componentId},null,8,K),[[E,n.searchText]])]),n.findError?(o(),c("p",O,"Error: Collection not found...")):u("",!0)]),e("div",Q,[R,e("button",{onClick:t[1]||(t[1]=(...i)=>l.findNft&&l.findNft(...i)),type:"button",class:"btn btn-primary",disabled:n.waitingFind},[n.waitingFind?(o(),c("span",Y)):u("",!0),_(" Find ")],8,X)])])])],8,j)}const et=v(q,[["render",tt]]),st={name:"Nft",props:["hideBackButton"],data(){return{allNftsArrayLength:0,allNftsIndexStart:0,allNftsIndexEnd:0,featuredNfts:[],lastNfts:[],waitingData:!1}},components:{SearchNftModal:et},mounted(){this.$config.nftLaunchpadBondingAddress&&(this.fetchFeaturedNfts(),this.fetchLastNfts())},computed:{showLoadMoreButton(){return this.allNftsIndexEnd>0}},methods:{async fetchFeaturedNfts(){this.waitingData=!0;let s=this.$getFallbackProvider(this.$config.supportedChainId);this.isActivated&&this.chainId===this.$config.supportedChainId&&(s=this.signer);const t=new N(["function getFeaturedNftContracts(uint256 amount) external view returns(address[] memory)"]),d=await new b(this.$config.nftLaunchpadBondingAddress,t,s).getFeaturedNftContracts(4);await this.parseNftsArray(d,this.featuredNfts,s)},async fetchLastNfts(){this.waitingData=!0;let s=this.$getFallbackProvider(this.$config.supportedChainId);this.isActivated&&this.chainId===this.$config.supportedChainId&&(s=this.signer);const t=new N(["function getLastNftContracts(uint256 amount) external view returns(address[] memory)","function getNftContracts(uint256 fromIndex, uint256 toIndex) external view returns(address[] memory)","function getNftContractsArrayLength() external view returns(uint256)"]),r=new b(this.$config.nftLaunchpadBondingAddress,t,s);if(Number(this.allNftsArrayLength)===0&&(this.allNftsArrayLength=await r.getNftContractsArrayLength()),Number(this.allNftsArrayLength)===1){const d=await r.getLastNftContracts(1);await this.parseNftsArray(d,this.lastNfts,s)}else if(Number(this.allNftsArrayLength)>1){this.allNftsIndexEnd===0&&(this.allNftsIndexEnd=this.allNftsArrayLength-1,this.allNftsArrayLength<this.$config.nftLaunchpadLatestItems?this.allNftsIndexStart=0:this.allNftsIndexStart=this.allNftsArrayLength-this.$config.nftLaunchpadLatestItems);const n=[...await r.getNftContracts(this.allNftsIndexStart,this.allNftsIndexEnd)];n.reverse(),await this.parseNftsArray(n,this.lastNfts,s),this.allNftsIndexEnd>this.$config.nftLaunchpadLatestItems?this.allNftsIndexEnd=this.allNftsIndexEnd-this.$config.nftLaunchpadLatestItems:this.allNftsIndexEnd=0,this.allNftsIndexStart>this.$config.nftLaunchpadLatestItems?this.allNftsIndexStart=this.allNftsIndexStart-this.$config.nftLaunchpadLatestItems:this.allNftsIndexStart=0}this.waitingData=!1},formatPrice(s){if(s===null)return null;const t=Number(M(s));return t>100?t.toFixed(0):t>1?t.toFixed(2):t>.1?t.toFixed(4):t>.01?t.toFixed(5):t>.001?t.toFixed(6):t>1e-4?t.toFixed(7):t>1e-5?t.toFixed(8):t>1e-6?t.toFixed(9):t},async parseNftsArray(s,t,r){const d=new N(["function collectionPreview() public view returns (string memory)","function getMintPrice() public view returns (uint256)","function name() public view returns (string memory)"]);for(let n=0;n<s.length;n++){const l=new b(s[n],d,r);let i=D(window,s[n]);i||(i={address:s[n]});let f;i?.name?f=i.name:(f=await l.name(),i.name=f);const w=await l.getMintPrice();let m;i?.image?m=i.image:(m=await l.collectionPreview(),i.image=m),P(window,s[n],i),t.push({address:s[n],image:m,name:f,price:w})}}},setup(){const{address:s,chainId:t,isActivated:r,signer:d}=L();return{address:s,chainId:t,isActivated:r,signer:d}}},nt={class:"card border scroll-500"},at={class:"card-body"},it=e("i",{class:"bi bi-arrow-left-circle cursor-pointer"},null,-1),ot=[it],rt={class:"d-flex flex-row flex-wrap mt-3"},dt=e("div",{class:"mb-3 me-auto"},"Browse NFTs",-1),ct={class:"mb-3"},lt=e("i",{class:"bi bi-plus-circle"},null,-1),ft=e("button",{class:"btn btn-outline-primary btn-sm ms-2","data-bs-toggle":"modal","data-bs-target":"#searchNftModal"},[e("i",{class:"bi bi-search"}),_(" Find ")],-1),ht={key:1,class:"mb-3"},ut={key:2,class:"row"},mt={class:"card border mb-3"},pt=["src","alt"],gt={class:"card-body rounded-bottom-3"},_t={class:"card-text mb-1"},Nt={class:"card-text"},bt={key:3,class:"mt-3 mb-3"},wt={class:"row"},yt={class:"card border mb-3"},It=["src","alt"],xt={class:"card-body rounded-bottom-3"},vt={class:"card-text mb-1"},Lt={class:"card-text"},Ct={key:4,class:"d-flex justify-content-center mb-3"},Ft=e("span",{class:"spinner-border spinner-border-lg",role:"status","aria-hidden":"true"},null,-1),kt=[Ft],$t={key:5,class:"d-grid gap-2"},At=["disabled"],Tt={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"};function Et(s,t,r,d,n,l){const i=k,f=$,w=F,m=S,C=B("SearchNftModal");return o(),c(y,null,[h(w,null,{default:g(()=>[h(i,null,{default:g(()=>[_(p(s.$config.projectName),1)]),_:1}),h(f,{property:"og:title",content:s.$config.projectName},null,8,["content"]),h(f,{name:"description",content:"Social NFT Marketplace where NFTs are always liquid."}),h(f,{property:"og:image",content:s.$config.projectUrl+s.$config.previewImage},null,8,["content"]),h(f,{property:"og:description",content:"Social NFT Marketplace where NFTs are always liquid."}),h(f,{name:"twitter:image",content:s.$config.projectUrl+s.$config.previewImage},null,8,["content"]),h(f,{name:"twitter:description",content:"Social NFT Marketplace where NFTs are always liquid."})]),_:1}),e("div",nt,[e("div",at,[r.hideBackButton?u("",!0):(o(),c("p",{key:0,class:"fs-3",onClick:t[0]||(t[0]=a=>s.$router.back())},ot)),e("h3",rt,[dt,e("div",ct,[h(m,{class:"btn btn-outline-primary btn-sm",to:"/nft/create"},{default:g(()=>[lt,_(" Create ")]),_:1}),ft])]),n.featuredNfts.length>0?(o(),c("h4",ht,"Featured")):u("",!0),n.featuredNfts.length>0?(o(),c("div",ut,[(o(!0),c(y,null,I(n.featuredNfts,a=>(o(),x(m,{key:a.address,class:"col-md-3 text-decoration-none",to:"/nft/collection?id="+a.address},{default:g(()=>[e("div",mt,[e("img",{src:a.image,class:"card-img-top",alt:a.name},null,8,pt),e("div",gt,[e("p",_t,[e("strong",null,p(a.name),1)]),e("small",Nt,p(l.formatPrice(a.price))+" "+p(s.$config.tokenSymbol),1)])])]),_:2},1032,["to"]))),128))])):u("",!0),n.lastNfts.length>0?(o(),c("h4",bt,"Latest")):u("",!0),e("div",wt,[(o(!0),c(y,null,I(n.lastNfts,a=>(o(),x(m,{key:a.address,class:"col-md-3 text-decoration-none",to:"/nft/collection?id="+a.address},{default:g(()=>[e("div",yt,[e("img",{src:a.image,class:"card-img-top",alt:a.name},null,8,It),e("div",xt,[e("p",vt,[e("strong",null,p(a.name),1)]),e("small",Lt,p(l.formatPrice(a.price))+" "+p(s.$config.tokenSymbol),1)])])]),_:2},1032,["to"]))),128))]),n.waitingData?(o(),c("div",Ct,kt)):u("",!0),l.showLoadMoreButton?(o(),c("div",$t,[e("button",{class:"btn btn-primary",onClick:t[1]||(t[1]=(...a)=>l.fetchLastNfts&&l.fetchLastNfts(...a)),disabled:n.waitingData},[n.waitingData?(o(),c("span",Tt)):u("",!0),_(" Load more ")],8,At)])):u("",!0)])]),h(C)],64)}const Pt=v(st,[["render",Et]]);export{Pt as default};
