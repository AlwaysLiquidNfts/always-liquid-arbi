import{q as l,I as d,C as r,p as f,r as c,A as m}from"./entry.6c6c90ff.js";const y=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"}];async function v(a,s){const t=l();let i=s;s||(i=this.$getFallbackProvider(t.supportedChainId));const n=new d(["function getTotalWeiSpent(address) view returns (uint256)"]),p=await new r(t.activityPointsAddress,n,i).getTotalWeiSpent(a),u=f(p);let o=Number(u)*t.activityPointsRatio;return o<1?o=o.toFixed(2):o=Math.round(o),o}async function w(a,s,t,i){const n=l();let e=i;e||(e=this.$getFallbackProvider(n.supportedChainId));const u=await new r(a.address,y,e).allowance(s,t);return c(u,a.decimals)}async function g(a,s,t){const i=l();let n=t;n||(n=this.$getFallbackProvider(i.supportedChainId));let e;return a.address===m?t?e=await t.getBalance():e=await n.getBalance(s):e=await new r(a.address,y,n).balanceOf(s),c(e,a.decimals)}export{y as E,g as a,w as b,v as g};
