---
title: Our journey towards the ReflowOS
description: How do we imagine a system that allows us to plan economic activities in a distributed network, safely and without being dependent on any central authority?
date: 2020-04-07T15:13:13.021Z
image: ../../../static/img/reflowjourney.jpeg
tags:
  - reflow
---

_At Dyne.org we are working on the design and development of REFLOW's technical architecture. We write this diary about the challenges, progress and techno-political issues we face._

How do we imagine a system that allows us to plan economic activities in a distributed network, safely and without being dependent on any central authority?

How could such system stimulate the urban metabolism and enhance circular economies: minimising waste production, increasing the inclusiveness of the various actors present in the urban area and encouraging new practices, _managing to make economically convenient what is naturally more sustainable?_

They are not simple questions and there is not a single valid answer. The good news is that a growing number of communities and groups are trying to find answers and experiment with possible solutions.

REFLOW is undoubtedly part of these experiments.

We at [Dyne.org](https://dyne.org) are responsible for the design and development of the REFLOW technical architecture.

This architecture will be deployed and tested in different cities, through each of the pilot projects, each of them focused on a specific sector (Textile (Life)cycling, Water Works, Food Market 2.0, FairTracker, Circular Plastics, PlEnergy) of circular economy.

Following a very common practice among developers, we decided to start writing a diary to point out all the challenges, progress and technical and political doubts that emerge during the infrastructure design and implementation phase.

Welcome ✊!

## We're building a p2p economic network

An economic network is a set of independent agents, which could be individual persons or organisations, who regularly collaborate to create and exchange goods and services.

Examples of economic networks include supply chains, joint ventures, municipalities and bio-regions, but also economic ecosystems surrounding a base resource like the Android OS.

Each economic network has its own rules for accessing and participating in economic activities. These rules, and how they are practiced, constitute the governance of the network.

Within the REFLOW context, the goal is to create an economic network that encourages the development of a municipal circular economy in order to:

- Promote the inclusion of people and/or organisations (that inhabit the urban area) in the production processes and in the creation and distribution of the generated value
- Trace the flow of resources in the urban and peri-urban area to reduce waste and increase reuse and recycle practices
- Plan production processes based on availability of resources, vehicles and people within the network, to encourage the growth of the local economy and its participants
- Certify the supply chain of a resource produced locally, to create incentives and narratives between producers and consumers
- Collect data from the territory to promote the creation of new policies, which can scale from a municipal to a national level.

Our work is to build and test a set of possible answers to the question posed by Kate Raworth in her book [Doughnut Economics](https://www.kateraworth.com/doughnut/): can we produce for human needs, without exceeding planetary boundaries?

Aware of the fact that technology influences economy and politic, we believe that these kind of infrastructures can help those _fearless_ communities/municipalities that want to experiment with economic networks to plan economies that can become a real alternative to the ideology of the free market, a prevailing yet no longer sustainable.

## Our first workshop

![](../../../static/img/castle.jpg)

At the beginning of February we organised a two days workshop together with Paris, Amsterdam and Vejle (who joined us remotely) pilots, Fokus, IAAC and Waag, to find a way to coordinate our work.

We were guests at Waag, in their amazing castle in the center of Amsterdam.

As Jurre told me, the Waag has served also as a guildhall during the centuries, hosting several workers guilds who coordinated their economic activities in 17th-century Amsterdam.

What a cool synchronicity!

During the two days we had the opportunity to discuss the role of the technical infrastructure. We carried out two co-design sessions: first to highlight a set of meaningful personas for each pilot and - using the personas as template - we then created a list of "jobs to be done". The work on the personas was facilitated by Lina (Fokus), while the creation of the jobs was done by Pablo and Guillem (IAAC).

![](../../../static/img/persona.png)

The purpose of both exercises was to find common points among pilots, starting from their different scenarios, identifying a set of core features valid for each of them. Another goal was to align ourselves on terminology that will drive the next 2 years conversations, creating a vocabulary shared between the participants, to decline technical terms in the social, economic and political counterpart and vice versa. Finally, to improve coordination, we defined together the next steps for each of us - in relation to the deliverables of each partner (as defined by the European project itself).

## Planning an economy, more than just maps and exchanges

Through the definition of the personas, we had the opportunity to discuss characteristics and needs of a wide range of actors who will plausibly be part of the economic networks.

Although the needs differed from pilot to pilot, a recurring theme emerged during the workshop, **concerning the lack of coordination between actors within the urban area.**

This lack of coordination led to several issues:
- Not having enough information on materials / skills available to be exchanged/traded over the territory
- Not knowing actors that have a complementary role in the same supply chain and then not being able to engage in partnerships with them
- Not being able to guarantee the traceability of the origin and manufacturing of locally produced goods
- Failing to encourage the inclusion of new stakeholders (citizens and / or organisations) in the city's circular economy processes
- Failing to compete with the economic convenience imposed by the capitalist system

These problems led to the ideation of a first series of solutions:
- Creating a map showing the flow of resources within a network
- Being able to offer and request resources and skills
- Being able to describe the available resources in different levels of detail, in order to create an open inventory distributed throughout the territory
- Being able to trace the different types of economic activity that affect a product in the various stages of its production, in order to create a "material passport" that verifies the value of products that are produced in a virtuous and sustainable way
- Being able to plan and coordinate supply chains within the urban/periurban area, in order to include different actors in different phases of the production of goods
Distributing the value generated from the production of goods, based on each stakeholder's contributions to the production phases

## Where we are now

To facilitate the workshop @ Waag, we decided to develop a very simple economic network prototype, to have something to generate further ideas during the two days.

Far from being a working demo, the prototype was extremely useful to us as developers, first of all to begin evaluating the complexity of such infrastructure and at the same time it helped pilots to figure out how to interact with a system that, albeit in its simplest form, allowed them to create, consume and transfer resources and visualise the outcome on a map: from that point to envisioning decentralised supply chain it was just a matter of minutes :p !

The logic behind the software is based on an economic vocabulary: [valueflows](https://valueflo.ws), which describes flows of economic resources of all kinds within distributed economic ecosystems. The vocabulary guarantees enough flexibility to foster its adoption in a wide range of contexts: to experiment with different forms of governance and economic models.

![](../../../static/img/vf.png)

Like another software we developed at dyne - the social wallet - this library will also be written in clojure, a Lisp dialect that shares with Lisp the code-as-data philosophy and a powerful macro system. Clojure is predominantly a functional programming language that features a rich set of immutable, persistent data structures.

## Next steps

Our goal is to create a set of modular and well-tested libraries, which combined together allow us to deploy an economic p2p network.

We want to develop our software in combination with open protocols and vocabularies, rather than building yet another generic framework that claims to be the right solution for everything - and design it with the primary goal to facilitate integration with other existing platforms and libraries.

The economic network will leverage on [zenroom](https://zenroom.org), a groundbreaking software developed by dyne for the decode project, that allows to create and run human-readable smart contracts in a deterministic and secure way.

Over the next few months we will continue studying and defining both the architecture that will allow secured p2p communication between different nodes in a network as well as how the different softwares will fit together.

The next deadline agreed with our colleagues and pilots has been set for June.

By then, each of us will have clearer ideas about the economic network in its different aspects.

The commitment and contribution of each participant to the workshop was great, and the commonality of vision - albeit different according to each participant's background - was clear and can be expressed as the main contributors of valueflows put themselves:

> We are developing software for transitioning to the next economy.
> Not this economy, the next economy.
> The next economy must be driven by human and ecological needs rather than profit.
> And it will be networked.

🌱