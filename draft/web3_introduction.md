---
title: Notes on developing web3 frontends
description: I recently spent some days studying the ethereum ecosystem. What triggrered me the most was reading about the new wave of governance protocols and tokens that are powering some of the most relevant DeFi projects nowadays.
date: 2021-06-23T15:13:13.021Z
image: ../../../static/img/reflowjourney.jpeg
tags:
  - web3
  - defi
  - ethereum
---

I recently spent some days studying the ethereum ecosystem. 

What triggrered me the most was reading about the new wave of governance protocols and tokens that are powering some of the most relevant DeFi projects nowadays. 

As I am deeply fascinated by governance models, I wanted to discover how governance was implemented within an ecosystem so driven by profit and speculation such as today DeFi.  

A Governance token gives the possibility to its community (informally represented by the totality of token' holders) to propose and agree upon (or reject) any change that shapes the project in a way that is possible to be represented by a smart contract. A proposal therefore is not merely a description of how the project should change, but includes the exact code to be deployed to implement such change (the creation of a dedicated fund, the inclusion of a new token to lend / borrow, a variation of a particular parameter, a transfer of some tokens to an address, and so on...).

Far from being a solution to centralized governance and bottlenecks at present, these kind of governance experiments are opening the doors to new forms of DAO and p2p coordination. They also are constantly evolving, and given how dynamic the web3 space is - we can expect a moltitude of governance protocols to arise in the coming years. Not only that, I wonder how new forms of DAO can transform entire sections of public life...  
 
Ultimately these reads challenged a lot of my preconceptions about blockchains, web3 and DeFi. I therefore decided to dig further within the rabbit hole and [code something](https://github.com/ivanminutillo/dapp) to better understand what I was reading. I ended up drafting a governance dashboard, based on [compound governor alpha smart contracts](https://medium.com/compound-finance/compound-governance-5531f524cf68). It's unfinished, but I am satisfied with what I learnt so far, even if I only scratched the surface - and I wanted to write this post as a kind of brain dump before deciding where to go next.

![](https://i.imgur.com/0iv5P7H.jpg)

[Check the code here](https://github.com/ivanminutillo/dapp)


I tend to consider a wrong pattern the well enstabilished trend among developers to keep different app states on both the backend and the frontend codebase.
Often, apps end up having complex backend as well as extremely complex frontends, both dealing with decoupled and out of sync states, cache and optimisations. 

With this in mind, as a frontend developer I usually prefer to agree on building dumb but fast and reactive frontend, letting the BE focusing on states and rather spend more time on accessibility and usability (I'm currently working with phoenix liveview, that allows this kind of methodology without sacrificing dom instant updates or similar features thanks to live sockets connections).

But as soon as I started to think about how to develop web3 apps, I realized this approach was not really feasible anymore.

The web3 is often quoted as "stateful web" - meaning it already owns its (immutable) state, available for the whole web to fetch and build upon it. 

When building web2 apps, the frontend can agree with the backend on how to organize the data flow, based on the app domain and technical requirements...well this is not possible for web3 ones anymore. The p2p protocol dictates its state indipendently from any app domain. 
This makes almost inevitable for a (complex enough) frontend to deal with its own states and define its own set of transformations to provide a user experience that makes sense for its audience - actually one of the most pressing challenges that prevent web3 apps from the wide adoption.

But far from being a blocker, this condition enabled a whole new range of tools and libraries to flourish. [The Graph](https://thegraph.com/) for example, is a project that aims to aggregate blockchain data based on developers needs in the form of graphql APIs, called subgraphs. Each subgraph has its own specific domain, endpoints and data structures. Developers can query existing subgraphs or create new ones. Subgraphs make it easy to filter, paginate or aggregate nested data coming from different blocks or smart contracts, with a fraction of the effort compared to build the same logic directly on the frontend.

The Web3 enables a new level of interoperability, or how the cool ones call it "money lego" - a set of composable libraries, tools and smart contracts that any app can use and build upon them.

ps. I really encourage devs to replace "money lego" asap in favour of "token lego" or whatever else community comes up with, money lego is a shortsighted analogy imho. 

Anyway, when it was time to pick a js framework, I spent some time making my own researches. I recently used a lot [AlpineJS](https://alpinejs.dev/) and I loved the composability and utility first approch it fosters. But I think it would be a quite painful experience dealing with complex state management with Alpinejs alone.  Among the jungle of js frameworks, to my knowledge, React is the one that has the most clear and efficient design patterns to [manage states](https://it.reactjs.org/docs/hooks-intro.html) and to deal with [async data](https://reactjs.org/blog/2021/06/08/the-plan-for-react-18.html), not a huge surprise then when I discover that most of the web3 apps relies upon it.

As I said, I used Compound smart contracts to create a token and make a proposal. I was interested in grasping the whole flow of building a web3 app, from deploying a bunch of smart contracts to build a usable UI hooked to the blockchain.

I started as a total noob (and I still am), but several great resources and communities made the journey more smooth and enjoyable.

Among the many resources available on the web, I found these particularly helpful:
- [Tally governance tutorial](https://github.com/withtally/Tutorial-Deploy-Governance): A practical and simple example on how to deploy compound governor alpha contracts on a hardhat local network   
- [Uniswap Interface repository](https://github.com/Uniswap/uniswap-interface):  **Best** place to study and learn tons of design patterns and code used in a production (and one of the most used / forked) web3 app 
- [Compound-developer repo](https://github.com/compound-developers/compound-governance-examples): a collection of simple examples on how to perform basic governance operations using Compound contracts
- [Compound](https://compound.finance/) and [Tally](https://www.withtally.com/) discord communities: both great spaces to ask questions and learn. Developers are friendly and they replied to any doubts and noob questions I posed, thanks! 


This is the tech stack I used to build the demo:
- [hardhat](https://hardhat.org/)
- [react](reactjs.org)
- [ethersjs](https://docs.ethers.io/v5/)
- [@web3-react](https://github.com/NoahZinsmeister/web3-react)
- [tailwindcss](https://tailwindcss.com/)

## Main takeaways

The app is quite straightforward, but it was a good learning experience. 
All the pages and components are stateless functions, data and callbacks are passed through contexts down the tree. 
This made the app more readable, and helped to separate different bunch of logics from pure views.

The interesing bits live mainly within the following folders: 

- abis
- addresses
- pages
- components
- hooks
- contexts


The `abis` and `addresses` folders are generated automatically once I deploy the smart contracts 
(look at [scripts/deploy.js](https://github.com/ivanminutillo/dapp/blob/main/scripts/deploy.js)). The abis folder includes the relevant ABI json structure for both the token and the governor alpha contracts.

The `Addresses` folder includes an index.js file with the references to the token and governor addresses that I'll use to return the contract interface.

Within the [contexts folder](https://github.com/ivanminutillo/dapp/tree/main/src/contexts) there are contexts tied to specific portion of the UI, that are in charge of empowering the stateless components with the needed data and functions.

The `userContext` takes care of the wallet connection (only to metamask for this example) and to return the basic information displaied on the header component: the token balance and the user address.
It also tries to automatically connect to the injected ethereum provider, if it exists and has granted access already, with [useEagerConnect](https://github.com/ivanminutillo/dapp/blob/68149665f88448d6037378d8893f1a92ab9acfa9/src/hooks/connect.js#L6) custom hook (copied from uniswap logic).
This is a simple but usefull design pattern to avoid to connect to the wallet each time the app page is refreshed or closed, think of it as maintaining the logged user session in web2 apps (despite that in a web3 app the user can logout anytime both from the app or also removing the access from the wallet). 

In case of any errors, the alerts component get triggered, showing the related `activateError` message.

Leveraging upon the `@web3-react` library, including connections to other wallets is just a matter of few lines of configuration, neat! 

The `proposalsContext` context on the other hand returns the existing proposals list.
It makes use of several GovernorAlpha smart contract functions: `proposalCount`, `proposals` and `state`. 

First it uses `ethersjs` to look for specific activities stored on the blokchain: 

```
const filter = useMemo(() => ({ ...contract?.filters?.['ProposalCreated'](), fromBlock: 0, toBlock: 'latest' }), [
    contract,
  ])

...

 const pastEvents = await library.getLogs(filter)
```
and then it passed the formatted result to the `getProposal` function, which basically aggregates data from the above smart contract functions and builds the proposals array. The proposals are then passed to the provider, ready to be rendered in the stateless super dumb `list` component (Also in this case, I mostly followed the uniswap code :) )

I think these are the meaningul bits, I added 2 simple functions to delegate and create an hardcoded proposal directly in the header component to test the whole flow, I will eventually move them in a ad-hoc file and create dedicated views for them, but was out of scope for this first experiment. 

The uniswap code is an awesome reference to study or even to use some of their folders as a boilerplate (look at the hooks folder for example).

I personally don't see the advantage of using redux as they did - I think using contexts and hooks results in a codebase more easy to reason and work with, less moving parts and less boilerplate code to write, test and maintain.
ps. I'm sure there are reasons given how well they designed their app... or maybe it just better fits their way of working (which is a valid reason as well) 


## Give it a try

You're welcome to clone and try the app locally, but be careful about using this codebase as it's merely intended as an experiment...

As a prerequisite you need to have [metamask extension](https://metamask.io/) installed on your browser

Clone the app and install js dependencies

```
git clone https://github.com/ivanminutillo/dapp.git
cd dapp
yarn
```
Start the blockchain local network on a new terminal 

```
npx hardhat node
```

Open a new terminal tab and deploy the contracts 

```
npx hardhat run scripts/deploy.js --network localhost
```

Start the web app

```
yarn start
```

Open metamask, switch to the localhost8545 network and import the first account created by hardhat. The whole COMPs are automatically transferred to that account. You may want also to set the metamask network chainID to `31337`, to match the default hardhat one. 

Click the connect button :) 

After press the delegation button, or the create a proposal one, you'll need to wait 10 seconds for the transaction to be mined. A low handing fruit would be to implement optimistic response when a new proposal is successfully created and show it in the UI before the tx is mined.

ps. You can configure the COMP.sol file to customize the token and the GovernorAlpha to change the governance paramenters accordingly to your app needs, but again it was not the purpose of this experiment.

Huge potential relies upon on-chain governance, I'm thrilled to see how it evolves. Big up to Tally, Compound, Balancer and Uniswap among others to try bold experiments :)
