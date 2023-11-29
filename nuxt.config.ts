import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';

// https://nuxt.com/docs/api/configuration/nuxt-config 
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "charset": "utf-8"
        }
      ],
      link: [
        { // Bootstrap
          rel: "stylesheet",
          href: "	https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        },
        { // Bootstrap icons
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        },
        { // Custom
          rel: "stylesheet",
          href: "/css/custom.css"
        }
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        }
      ]
    }
  },
  components: false,
  css: [
    'vue-toastification/dist/index.css' 
  ],
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  router: {
    options: {
      hashMode: false
    }
  },
  runtimeConfig: {
    public: {
      activityPointsAddress: "",
      activityPointsRatio: 1_000_000, 
      airdropApAddress: "", // chat token claim for APs
      airdropClaimDomainsAddress: "", // chat token claim for domain holders
      blockExplorerBaseUrl: "https://arbiscan.io",
      chatTokenAddress: "", // chat token address
      chatTokenImage: "", // chat token image
      chatTokenSymbol: "CHAT", // chat token symbol or name
      domainRequiredToPost: false,
      expiryCollections: 1000 * 60 * 60 * 24 * 7, // must be in milliseconds (0 means no expiration)
      expiryUsernames: 1000 * 60 * 60 * 24 * 7, // must be in milliseconds (0 means no expiration)
      favicon: "/img/favicon.svg",
      fileUploadEnabled: true, // enable/disable file uploads (enable only if external file storage is used, e.g. IPFS via Spheron)
      fileUploadSizeLimit: 1 * 1024 * 1024, // max file upload size in bytes (1 * 1024 * 1024 = 1 MB)
      fileUploadTokenService: process.env.FILE_UPLOAD_SERVICE || "netlify", // "netlify" or "vercel" (or leave empty for no file uploads)
      getPostsLimit: 30, // number of posts to fetch from Orbis in the getPosts() function
      governanceUrl: "", // governance url (snapshot, Tally, etc.)
      iggyPostAddress: "0x06A7Ab7Bb68b0ad6eB7688C5781E60BE6AFc658d",
      iggyPostMinterAddress: "0x5e54CebB2612744cB56547bC7CC41466ad7ac557",
      iggyPostStatsAddress: "0xF40284a811c82b4B9ab22E94Bb909Df6d2c66C08",
      keysAddress: "", // FriendKeys contract address 
      keysContext: "",
      keysFeatured: ["tempe", "tekr"],
      linkPreviews: process.env.LINK_PREVIEW_SERVICE || "netlify", // "netlify", "vercel", or "microlink" (or leave empty for no link previews)
      lpTokenAddress: "", // liquidity pool token (token to stake in the staking contract)
      lpTokenSymbol: "LP tokens", // LP token symbol
      marketplacePostNftUrl: "https://opensea.io/assets/arbitrum/0x06A7Ab7Bb68b0ad6eB7688C5781E60BE6AFc658d",
      marketplacePostNftItemUrl: "https://opensea.io/assets/arbitrum/0x06A7Ab7Bb68b0ad6eB7688C5781E60BE6AFc658d/", // url (append nft id to it)
      marketplaceNftCollectionBaseUrl: "https://opensea.io/assets/arbitrum/", // url (append nft address to it)
      newsletterLink: "",
      nftDefaultRatio: 1, // default ratio for the NFT price bonding curve
      nftLaunchpadBondingAddress: "0x3Fa0EaC3058828Cc4BA97F51A33597C695bF6F9e", // NFT launchpad with bonding curve contract address
      nftLaunchpadLatestItems: 8, // number of latest NFTs to show in the NFT launchpad
      nftOrbisContext: "kjzl6cwe1jw1469cmbtnaea0soaguy07kjlaro7gna5lgo3s8c38iqkyufhziib", // Orbis context for NFT collection pages
      orbisCategories: [ // use only alphanumeric ASCII characters for slugs! (no spaces, only dash is allowed)
        { "slug": "all", "title": "All posts", "hidden": false }, // not a real tag, just denotes the absence of a tag (always keep it here)
        { "slug": "general", "title": "General discussion", "hidden": false },
        { "slug": "shill", "title": "Shill & discuss projects", "hidden": true },
        { "slug": "nfts", "title": "Memes & NFTs", "hidden": false }, // keep this category for the purpose of the NFT launchpad
        { "slug": "governance", "title": "Governance", "hidden": true },
        { "slug": "food", "title": "Food & recipes", "hidden": true },
        { "slug": "movie", "title": "Movies & Music", "hidden": false },
        { "slug": "music", "title": "Music", "hidden": true },
        { "slug": "random", "title": "Random", "hidden": false },
      ],
      orbisContext: "kjzl6cwe1jw1469cmbtnaea0soaguy07kjlaro7gna5lgo3s8c38iqkyufhziib", // production context
      orbisTest: false, // if true, test context will be used instead of the production one
      orbisTestContext: "kjzl6cwe1jw145tfqv2eqv8tiz6puo27meyz4smz40atppuc13tulqca87k35z2", // test context
      previewImage: "/img/cover.png",
      previewImageAirdrop: "/img/cover-airdrop.png",
      previewImageNftCollection: "/img/cover-nft-collection.png",
      previewImageNftCreate: "/img/cover-nft-create.png",
      previewImageNftLaunchpad: "/img/cover-nft-launchpad.png",
      previewImagePost: "/img/cover-post.png",
      previewImagePostNft: "/img/cover-post-nft.png",
      previewImageProfile: "/img/cover-profile.png",
      previewImageStake: "/img/cover-stake.png",
      profileMintedPostIdsMax: 36, // max number of minted post ids to show in the profile page
      projectMetadataTitle: "Always Liquid | Arbitrum NFT marketplace with always liquid NFTs",
      projectName: "Always Liquid",
      projectDescription: "NFT marketplace on the Arbitrum L2 where NFTs are always liquid!",
      projectTwitter: "https://twitter.com/iggysocial",
      projectUrl: "https://arbi.alwaysliquid.com", // without trailing slash!
      punkMinterAddress: "", // punk domain minter contract address
      punkNumberOfPrices: 1, // number of different prices (based on domain length), usually 1 (price()) or 5 (price1char() - price5char())
      punkTldAddress: "0xe97456E0fB121F65422F43ccbd4A07a0e269B534", // punk domain TLD address
      randomPostsNumber: 1, // number of random post NFTs to show in the sidebar widget
      rpcCustom: process.env.RPC_CUSTOM || "", // Custom RPC URL
      showFeatures: { // show/hide features in sidebars (if you have too many "true", make the sidebar scrollable --> sidebarLeftSticky: false)
        "activityPoints": false, 
        "airdrop": false, 
        "friendKeys": false, 
        "governance": false,
        "newsletter": false, 
        "nftLaunchpad": true, 
        "randomMintedPosts": true, 
        "swap": false, 
        "stake": false, 
        "sendTokens": false, 
        "spotify": false
      }, 
      showRepliesOnHomepage: true, // show replies on the homepage  
      sidebarLeftSticky: true, // make the left sidebar sticky (always visible)
      spotifyPlaylistId: "", // enter just the ID of the playlist (not the full URL)  
      stakingContractAddress: "", // this is also the stake/gov token address
      stakeTokenSymbol: "", // stake token symbol (governance token symbol)
      supportedChainId: 42161,
      swapPriceImpactMaxBps: 1000, // max price impact in bips (1 bps = 0.01%, 1000bps = 10%) for the swap function
      swapRouterAddress: "", // iggy swap router contract address
      tenorApiKey: process.env.TENOR_KEY || "",
      tldName: ".arbi",
      tokenAddress: null, // leave null if it's a native token of the chain
      tokenDecimals: 18,
      tokenSymbol: "ETH"
    }
  },
  vite: {
    build: {
      target: ['es2020'] // fix big integer literals error
    },
    optimizeDeps: {
      esbuildOptions: {
        define: {
          global: 'globalThis'  // fix nuxt3 global
        },
        plugins: [
          NodeGlobalsPolyfillPlugin({
            process: true,  // fix nuxt3 process
            buffer: true
          }),
          NodeModulesPolyfillPlugin()
        ],
        target: "es2020" // fix big integer literals error
      }
    }
  }
})
