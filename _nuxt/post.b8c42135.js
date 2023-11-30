import{H as g,M as d}from"./components.2162962f.js";import{a as C,S as b,s as y,b as P,e as s,w as x,c,y as p,D as h,o as i}from"./entry.9bd88510.js";import{C as _}from"./ChatPost.9d55deeb.js";import{C as O}from"./ChatFeed.038285ff.js";import"./composables.166ad9aa.js";import"./user.3104ddac.js";import"./ProfileImage.3928afe6.js";import"./WaitingToast.aca3bfbf.js";import"./textUtils.20285593.js";import"./MintedPostImage.6b4537c4.js";import"./storageUtils.5c20cd96.js";import"./SwitchChainButton.f7299eea.js";import"./site.ba13674b.js";import"./ConnectWalletButton.38b91f52.js";import"./FileUploadModal.063f640d.js";const k={data(){return{hasMaster:!1,masterPost:null,post:null,replyNotMaster:!1}},components:{ChatFeed:O,ChatPost:_},created(){this.getPostObject()},computed:{getOrbisContext(){return this.post?.context?this.post.context:this.post?.content.context?this.post.content.context:this.post?.context_details.context_id?this.post.context_details.context_id:this.$config.orbisTest?this.$config.orbisTestContext:this.$config.orbisContext},getPostAuthor(){return this.post?this.post.creator_details.metadata.address:null},getQueryId(){return this.route.query.id}},methods:{async getPostObject(){this.post=null,this.masterPost=null,this.hasMaster=!1,this.replyNotMaster=!1;let{data:t,error:o}=await this.$orbis.getPost(this.route.query.id);if(this.post=t,o)console.log("Orbis error"),console.log(o),this.toast("Orbis error",{type:"error"}),this.toast(o,{type:"error"});else if(this.post.master){this.hasMaster=!0,this.post.master!==this.post.reply_to&&(this.replyNotMaster=!0);let{data:l,error:n}=await this.$orbis.getPost(this.post.master);this.masterPost=l,n&&(console.log("Orbis error"),console.log(n),this.toast("Orbis error",{type:"error"}),this.toast(n,{type:"error"}))}}},setup(){const t=b(),o=y();return{route:t,toast:o}},watch:{getQueryId(t,o){this.getPostObject()}}};function w(t,o,l,n,e,a){const r=d,u=g,m=h("ChatPost"),f=h("ChatFeed");return i(),P("div",null,[s(u,null,{default:x(()=>[s(r,{name:"description",content:"Check out this chat post on "+t.$config.projectName+"!"},null,8,["content"]),s(r,{property:"og:image",content:t.$config.projectUrl+t.$config.previewImagePost},null,8,["content"]),s(r,{property:"og:description",content:"Check out this chat post on "+t.$config.projectName+"!"},null,8,["content"]),s(r,{name:"twitter:image",content:t.$config.projectUrl+t.$config.previewImagePost},null,8,["content"]),s(r,{name:"twitter:description",content:"Check out this chat post on "+t.$config.projectName+"!"},null,8,["content"])]),_:1}),e.masterPost?(i(),c(m,{key:0,class:"m-4",post:e.masterPost,orbisContext:a.getOrbisContext},null,8,["post","orbisContext"])):p("",!0),e.post?(i(),c(m,{key:1,post:e.post,orbisContext:a.getOrbisContext},null,8,["post","orbisContext"])):p("",!0),e.post?(i(),c(f,{key:2,id:e.post.stream_id,master:e.post.master,masterPost:e.post,orbisContext:a.getOrbisContext},null,8,["id","master","masterPost","orbisContext"])):p("",!0)])}const D=C(k,[["render",w]]);export{D as default};