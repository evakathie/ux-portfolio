---
title: "Creating a User Insights Knowledge Base"
description: "Creating a User Insights Knowledge Base to keep track of research findings and better communication of user needs."
image: '/images/user-knowledge-base/user-knowledge-base-header.png'
imgmobile: '/images/user-knowledge-base/user-knowledge-base.png'
focus: User Research, Product Management
competences: Design Thinking, Workshop Facilitation, UX Design, Stakeholder Management
tools: Atlassian Jira, Miro
from: 'August 2021'
to: 'June 2023'
year: 2023
month: 6
company: 'Digitec'
---

<ProjectHeader :currentPage="this">

<p>The User Insights Knowledge Base project tackles the challenges of limited user contact and knowledge sharing at <router-link to="/pages/company/digitec.html">Digitec GmbH</router-link>. By using a Design Sprint-inspired workshop approach and creating a centralized database, my colleagues and I established a concept for data-driven decision-making and collaboration across departments. I was the project lead, but was supported by colleagues from the product team and the companyʼs other UX designer.</p>

</ProjectHeader>

<div class="wrapper">

<p>In the rapidly evolving landscape of user experience, understanding users and their needs is crucial for driving product success. Digitec, a B2B software company operating in a niche market, faced unique challenges due to limited user interaction and a lack of accessible user knowledge across departments. To overcome these obstacles, the User Insights Knowledge Base project was undertaken, aiming to establish a centralized repository of user insights and foster collaboration among teams. This article presents a detailed case study that highlights the projectʼs approach, including a workshop-inspired Design Sprint, the implementation using Atlassian Jira, and continuous improvement through testing and iteration. By delving into the projectʼs objectives, methodology, and outcomes, this article showcases the value of a user-centered approach in driving informed decision-making and promoting cross-functional collaboration within an organization.</p>

<img :src="'/images/user-knowledge-base/user-knowledge-base-title-pic.png'" alt="">

</div>

<HighlightedArea title="Summary of our Approach">
<ol>
    <li>Conducting a Design Sprint with UX designers, product owners from different development teams and other important stakeholders
    <ol>
        <li>Learning about the general problem of not having enough insights into the work life of our users and how they use our software</li>
        <li>Setting a <strong>long-term goal</strong> for the User Insights Knowledge Base</li>
        <li>Creating <strong>User Journey Maps</strong> for all the colleages that will interact with the User Insights Knowledge Base: Product, UX, Support and Sales</li>
        <li>Ideation (in individual work) and drafting of ideas (one per person)</li>
        <li>Presentation of the ideas and drafting of a final solution</li>
    </ol></li>
    <li>Implementation of the (basic structure) of the User Insights Knowledge Base using Atlassian Jira</li>
    <li>Conversion of raw data (e-mails, protocols) into derived data (opportunities, insights, requests)</li>
    <li>Ongoing maintenance, conversion of data and iteration on the concept</li>
</ol>
</HighlightedArea>

<div class="wrapper">

<h2>Project Approach</h2>

<h3>Why create a User Insights Knowledge Base?</h3>

<Quote quote="A knowledge base is a self-serve online library of information about a product, service, department, or topic." author="Atlassian" />

<p>Our goal of creating the User Insights Knowledge Base was to solve several problems we had (especially as the Product Management team). As a b2b company with a software in a niche area, Digitec has a few specific problems connected to the fact that we only have a handful of users per customer. This also limits the contact to the users and before the introduction of the User Insights Knowledge Base, many employees did not have sufficient knowledge about users. This has resulted in two primary problems:</p>

<ul>
    <li>decision-making without (real) data</li>
    <li>a few colleagues have knowledge about the users that wasnʼt accessible for other colleagues</li>
</ul>

<h3>Design Sprint to create a Concept</h3>

<p>We decided to do a workshop to create a general concept for the User Insights Knowledge Base. There were several reasons, why we did a workshop and not just worked out a concept by ourselves:</p>

<ul>
    <li>getting the buy-in of several stakeholders outside the team that would need to collaborate in the future (because they are people with customer contact)</li>
    <li>including the expertise of different people (from different backgrounds and departments) into the concept</li>
    <li>finding a good solution by deeply understanding the problem and evaluating different solutions</li>
</ul>

<p>The workshop was strongly inspired by Design Sprints and was done with 6 participants: 2 persons from Product Management, 2 UX Designers, 1 person from the Support team and 1 person from Sales. I planned and moderated the workshop together with a colleague.</p>

<img class="img-small-40" :src="'/images/user-knowledge-base/design-sprint-timetable.png'" alt="">
<p class="image-description">Screenshot of the workshop timetable in <em>Miro</em>: on the first day the Empathize phase took place, including different exercises, and was followed by the Ideate phase on the second day. I will describe both phases in detail below.</p>

<h4>Empathize</h4>

<p>After a little intro including the current problems we saw in the company as well as a definition of the term Knowledge Base and telling the participants about the workshops goals, we started with a mix of the Empathize and Define phase of Design Thinking, which are all about understanding the problem and building up empathy with the user (which in this case was us as users from different departments).</p>

<p>We first did <strong>Expert Talks</strong> where we interviewed a person from Product Management and another one from Support about their daily work and their requirements. While listening to the interviews the participants wrote down notes as <strong>How Might We Statements</strong> - short statements starting with “How might we“ like “How might we make visible where problems for users exist?“. We then read through all the notes and grouped them with headings like “Quantifying problems“, “Workflow of the teams“ or “Benefits of the User Insights Knowledge Base“.</p>

<p>The next task was to define a <strong>Long Term Goal</strong> for the User Insights Knowledge Base. For this every participant wrote down 3 goals imagining a ideal world in 2 years. Then we voted for one goal, which was:

<Quote quote="In 2 years, an optimal knowledge transfer among the departments is provided by the User Knowledge Base."/></p>

<p>Our next task isnʼt a part of a usual Design Sprint. It was a short <strong>brainstorming session</strong> where everyone wrote down all the <strong>possible data</strong> or touchpoints with customers that could go into the knowledge base, like events, support requests, software demos, training sessions, log files, user analytics, surveys etc.</p>

<p>Afterwards we did <strong>User Journey Maps</strong>. In this case we ourselves are the users of the User Insights Knowledge Base, so we created a map with 4 different users: Support, Sales, UX and Product Management and brainstormed about their goals and mapped their workflow. Then we marked steps where either data could go into the User Insights Knowledge Base or the insights in it would be helpful for our work.</p>

<img :src="'/images/user-knowledge-base/support_journey-map.png'" alt="">
<GraphicTranscript>
<p><strong>Customer Support</strong></p>
<ul>
    <li>Incoming customer request (marked as data coming into the User Insights Knowledge Base)</li>
    <li>starts working on the request
    <ul>
        <li>knows the solution</li>
        <li>missing information
        <ul>
            <li>looking  into the UKB (User Insights Knowledge Base) to find information (marked as using data from the User Insights Knowledge Base)</li>
            <li>experiments in the software</li>
        </ul></li>
    </ul></li>
    <li>Goal: Request is answered</li>
</ul>
</GraphicTranscript>

<img :src="'/images/user-knowledge-base/sales_journey-map.png'" alt="">
<GraphicTranscript>
<p><strong>Sales</strong></p>
<ul>
    <li>Customer contacts Sales person or contacts potential customer</li>
    <li>gives a demo of the software (marked as data coming into the User Insights Knowledge Base)
    <ul>
        <li>optional: looking  into the UKB to find information (marked as using data from the User Insights Knowledge Base)</li>
    </ul></li>
    <li>makes a test installation (marked as data coming into the User Insights Knowledge Base)
    <ul>
        <li>Customer buys the software</li>
        <li>Customer doesn’t buy the software (linked back to: “contacts potential customer”)</li>
    </ul></li>
    <li>Goal: Sale of the product</li>
</ul>
</GraphicTranscript>

<img :src="'/images/user-knowledge-base/product_journey-map.png'" alt="">
<GraphicTranscript>
<p><strong>UX Designer</strong></p>
<ul>
    <li>identifies & analyses user need (marked as using data from the User Insights Knowledge Base)</li>
    <li>checks understanding of the problem</li>
    <li>User Research, e.g. Interview, Survey (marked as data coming into the User Insights Knowledge Base)</li>
    <li>creating improved design (linked to “agile development life cycle (incl. iteration)” in the Product Owner Journey Map)</li>
</ul>

<p><strong>Product Owner</strong></p>
<ul>
    <li>identifies opportunity (marked as using data from the User Insights Knowledge Base)</li>
    <li>defines and validates assumptions and risks
    <ul>
        <li>Interview with the user/ customer (marked as using data from the User Insights Knowledge Base)</li>
        <li>checks existing data (marked as using data from the User Insights Knowledge Base)</li>
    </ul></li>
    <li>agile development life cycle (incl. iteration)</li>
    <li>Goal: Increased product value</li>
</ul>
</GraphicTranscript>

<p class="image-description-transcript">The resulting user journey maps from the workshop. Red rectanges: data comes into the User Insights Knowledge Base, green rectanges: data from the User Insights Knowledge Base is used. “UKB” is an abbreviation for User Insights Knowledge Base.</p>

<h4>Ideate</h4>

<p>Since ideation is better done alone - because group dynamics can lead to having worse solutions - all the participants got the “home work“ to come up with a solution.</p>

<p>In the second part of the workshop we came together to discuss the solutions by the participants and come up with a final solution. Every workshop participant got 10 minutes to present their concept to the other participants and to answer questions. Afterwards we did a Dot Voting on the different solutions and parts of it. And finally we took the parts we liked and put them into a final solution, that I will present below.</p>

<img :src="'/images/user-knowledge-base/workshop_board-miro.png'" alt="">
<p class="image-description">Screenshot of the <em>Miro</em>-Board that was used in the workshop</p>

<h4>Test & Iterate</h4>

<p>After creating the concept, we implemented it using Atlassian Jira. Now it was time to test the concept. For this we set up a <strong>weekly "UKB Inbox"-Meeting</strong> (UKB is our abbreviation for User Insights Knowledge Base), where we went through data together to get a feeling for the process and work with our concept. After a few months we then did a <strong>Retrospective</strong> to get feedback from all the colleagues working with the User Insights Knowledge Base and continuously improved it. A few improvements we did over time:</p>

<ul>
    <li>Introduction of automatically generated metrics (described below) to make the data easier comparable</li>
    <li>Including (already existing) Feature tickets into the Knowledge Base to improve the sometimes existing connection between user needs and existing Features</li>
</ul>

<h2>Theoretical Basis</h2>

<h3>Theoretical concept</h3>

<p>The general concept of the User Insights Knowledge Base is to take as much raw data, which is data from interactions or touchpoints with users — like protocols from user interviews, analytics data or emails from users — into the database and then derive more valuable data from it, like user insights, Personas or an Opportunity Solution Tree (which I will explain further below).</p>

<p>Additionally, the User Insights Knowledge Base is kept searchable through keywords for every data point, links to other related data points and other important tags, like for our software the “User-Roles”. Since we have a b2b product family in the foreign exchange market, a user role for us would for example be “FX Trader” or “Trade Support”.</p>

<img class="img-small-60" :src="'/images/user-knowledge-base/ukb-concept.png'" alt="">

<GraphicTranscript>
<p>The graphic has the shape of an hourglass with a “database”-icon and the description “User Knowledge Base” in the middle. On top of it is a funnel with the headline “Raw data” and exemplary icons for data types that seem to “fall through” the funnel into the database. Below the database is another funnel with the headline “Derived data”, where “General User Insights”, “Opportunity Solution Tree” and “Personas” are falling out of it.</p>
<p>On the right side of the graphic is a magnifier that indicates that the database can be searched and a list how it can be searched:</p>
<ul>
    <li>Tags:
    <ul>
        <li>Keywords</li>
        <li>(User-)Roles</li>
        <li>Applications</li>
    </ul></li>
    <li>Links to other data points</li>
</ul>
</GraphicTranscript>

<h4>Opportunity Solution Tree</h4>

<p>In her book “Continuous Discovery” Teresa Torres describes a technique to continuously discover the unmet customer needs and the solutions that will address those needs. She also invented a form to visualize <em>Continuous discovery</em>: The Opportunity Solution Tree. The goal of the tree is to address customer opportunities that will have the biggest impact on the company’s outcome.</p>

<img :src="'/images/user-knowledge-base/opportunity-solution-tree-terresa-torres.png'" alt="A tree structure with Outcome at the top and two levels of Opportunities as children the leaves (on the lowest level) are Solutions.">

<p>On the first level are Outcomes, these are business outcomes that describe the business needs of the company. Below it are Opportunities on as many levels as needed, therefore one Opportunity can be the child of another opportunity and so forth. On the lowest levels are Solutions. We adapted the Opportunity Solution Tree as the main outcome of and as a structure for our User Insights Knowledge Base. For that we switched the Outcomes to our User Roles, which now form the head of the tree. Additionally, we included (Customer-) Requests on the same levels as the Solutions, since both describe possible solutions to an opportunity.</p>

<img :src="'/images/user-knowledge-base/opportunity-solution-tree-digitec.png'" alt="A tree structure with Role at the top and two levels of Opportunities as children the leaves (on the lowest level) are Solutions or Requests.">

<p>The Opportunity Solution Tree enables the team to make data driven decisions and to empathize with the user. In our case our main Opportunity Solution Tree (for the role of the FX Trader) has nearly 1000 data points and many layers of opportunities. But it’s important to note that the lowest layer is always the layer of requests and solutions, while the top layer is a single role.</p>

<h4>Data Points</h4>

<p>Before we dive into how this actually looks like in practical use, I want to dive a little deeper into the different data points we use in the User Insights Knowledge Base:</p>

<ul>
    <li><strong>Raw data</strong>: any data point about the user that is coming into the knowledge base e.g. emails from the support hotline, protocols of interviews, demos or support sessions, other research data or analytics data.</li>
    <li><strong>Opportunity</strong> (derived data): User needs, pain points and desires that can be derived from an interaction with the user (raw data). Opportunities don’t need to be specific or related directly to a part of the software.</li>
    <li><strong>Insight</strong> (derived data): A loose insight into the user’s work, company internal procedures, or similar insight that should to be documented. (these can be linked to opportunities, but do not follow the same rigid rules as the rest of the tree).</li>
    <li><strong>Request</strong> (derived data): A specific (feature) request by a user e.g. “there needs to be a form field where I can type in XY”. It’s important that a request isn’t “read into” something the user said, but only something that is really requested.</li>
    <li><strong>Solution</strong>: similar to a request, but a solution for an Opportunity that is proposed internally by a colleague e.g. a developer or a UX designer. A solution can be anything between a vague idea and a detailed plan. Implementation details aren’t part of solutions.</li>
</ul>

<h2>Realization with Atlassian Jira</h2>

<p>Since Jira is a tool that is already adopted and widely used in the company, we also implemented the User Insights Knowledge Base with Jira. In principle, however, the basic concept presented here can also be implemented in many other tools.</p>

<h3>Issues Types and Links</h3>

<p>Each data type (Opportunity, Insight, …) is represented by a custom Jira Issue Type. For Raw Data, we have also created the data types relevant for us as issue types, currently these are protocols and emails, whereby we summarize different types of “data generation” in protocols, for example, we write protocols for user interviews, demos with customers or support sessions.</p>

<p>The different tickets are then linked to each other by custom links — whereby the link type also represents the relationship between the tickets and is later used to generate the Opportunity Solution Tree.</p>

<img :src="'/images/user-knowledge-base/OST-Jira-links-ukb.png'" alt="">

<p>The “arises from” and “is cause of” link is used to establish the connection between Raw Data and Derived Data. In addition, it is also used to express whether a raw data point is for or against a Solution (Request or Solution) (“arises from” vs “is opposed by”).</p>

<p>Opportunities are linked to each other with a parent-child relationship. Insights can also be linked to Opportunities using the same link. Additionally, Solutions and Requests are linked to Opportunities using the link “tries to solve”/ “might be solved by”.</p>

<img :src="'/images/user-knowledge-base/OST-Jira-links.png'" alt="">

<GraphicTranscript>
<p>
<ul>
    <li>Opportunities can be linked to<ul>
        <li>other Opportunities and Insights with “<em>is child of</em>”/ “<em>is parent of</em>”</li>
        <li>Raw data with “<em>arises from</em>”</li>
        <li>Requests and Solutions with “<em>might be solved by</em>”</li>
        <li>Features with “<em>is implemented by</em>”</li>
    </ul></li>
    <li>Requests and Solutions can be linked to<ul>
        <li>Opportunities with “<em>tries to solve</em>”</li>
        <li>Raw data with “<em>arises from</em>” or “<em>opposes</em>”</li>
        <li>Development Tickets like e.g. Epic or Improvement with “<em>is targeted by</em>”</li>
    </ul></li>
    <li>Insights can be linked to<ul>
        <li>Opportunities with “<em>is child of</em>”</li>
        <li>Raw data with “<em>arises from</em>” or “<em>opposes</em>”</li>
    </ul></li>
    <li>Raw data (Mails and Protocols) can be linked to<ul>
        <li>Requests and Solutions with “<em>is cause of</em>”/ “<em>opposes</em>”</li>
        <li>Opportunities and Insights with “<em>is cause of</em>”</li>
    </ul></li>
    <li>Features can be linked to<ul>
        <li>Opportunities with “<em>implements</em>”</li>
    </ul></li>
    <li>Development Tickets can be linked to<ul>
        <li>Requests and Solutions with “<em>targets</em>”</li>
    </ul></li>
</ul>
</p>
</GraphicTranscript>

<p>Additionally, there are links to the development tickets (a ticket type that already existed before the creation of the User Insights Knowledge Base, which are used and edited by developers, product owners, etc.). The resulting relationships make it possible for software development team to easily access the user insights knowledge base, for example, to understand why a particular feature is built and what user problem it solves. Importantly, only Solutions and Requests can be linked directly to development tickets, forcing a process in which multiple solutions to an Opportunity are first found and considered before a final decision is made on a Solution.</p>

<p>Another development ticket type that is directly integrated into the Opportunity Solution Tree is the feature ticket. This is represented in the tree as a child of an Opportunity and can itself have children (Opportunities, Solutions and Requests). This should make it easier to identify user problems that are specifically related to a feature of the software.</p>

<h3>Issue Fields & Custom Metrics</h3>

<p>A Jira ticket (= data point) has different fields that are filled either manually or automatically.</p>

<p>As <strong>manual fields</strong>, all data types have the mandatory “title” as well as keywords.</p>
<ul>
    <li><strong>Raw data</strong> additionally have the field “Customer ID” as well as their actual content (the protocol, text of the email, screenshots, …).</li>
    <li><strong>Opportunities</strong> are always assigned to a role. Moreover, they have some rules for the name: they are always written in first person and usually start with “I want to” (“IWT”), “I need to” (“INT”), “I have to” (“IHT”), “I don’t know” (“IDK”) and “I don’t understand” (“IDU”).</li>
    <li><strong>Solutions</strong> and <strong>Requests</strong> always have a description that is supposed to describe the solution but doesn’t go into implementation details. Additionally, they have the field “Implementation Decision” which can be “Yes”, “No” or “None” (= no decision is made yet).</li>
</ul>

<img class="img-small-60" :src="'/images/user-knowledge-base/user-knowledge-base-metrics.png'" alt="The screenshot shows the custom metrics like ʼraw data countʼ described below.">

<p><strong>Automatically generated fields</strong> are available for the derived data types (Opportunity, Request, Insight and Solution). They go through the links and display the following data:</p>

<ul>
    <li><strong>Raw Data Count</strong>: the number of raw data that is linked (“arises from”)</li>
    <li><strong>Raw Data Count inherited</strong>: the number of raw data that is linked directly (“arises from”) or to any child-node (“is child of”/ “might be solved by”)</li>
    <li><strong>Unique Customers</strong>: all the Customer IDs from the linked Raw Data (“arises from”)</li>
    <li><strong>Unique Customers inherited</strong>: all the Customer IDs from the Raw Data that is linked directly or to any child-node</li>
    <li><strong>Unique Customer Count</strong>: the number of different customers of the linked raw data (= the counted unique customers)</li>
</ul>

<p>These metrics can also be used in search and can for example contribute to prioritization.</p>

<h3>Opportunity Solution Tree in Jira</h3>

<p>The Opportunity Solution Tree can be automatically generated in Jira using the Structure feature and the links between the tickets.</p>

<img class="img-small-60" :src="'/images/user-knowledge-base/OST-Jira-structure.png'" alt="">

<GraphicTranscript>
<p>An example screenshot of the tree in Jira. At the top is the Role “Trader”, which is a category/ label in Jira, underneath are opportunities in the tree structure. The one at the top is “I want to provide accurate prices without interruption”, children of it are for example Opportunities like “I want to customize my working environment” or “I need to price the currencies I am responsible for”. Inside the tree there is also one Feature: “Layout/ Column Set" that has several Opportunities beneath it. On the lowest level of the tree are Solutions like e.g. “Zoomed in Columns or Rows” and Requests like e.g. “Profile-specific Column Sets”.</p>
</GraphicTranscript>

<p>To create the structure, the <em>Automation</em> feature was used, whereby tickets are grouped by role and then ordered by the links (“is parent of”, “is implemented by” and “might be solved by”). The parent nodes can each be expanded until the lowest level is reached.</p>

<h3>Ticket transitions/ workflow</h3>

<p>All the <strong>raw data</strong> tickets first go into the “Inbox” there they wait to be looked at — by a single person or our weekly User Insights Knowledge Base meeting, where we derive data together. Once that is done, they go to “Done”.</p>

<p><strong>Requests</strong> and <strong>Solutions</strong> have the states “Inbox” (= we need to talk about this Request/ Solution), “Todo” (= somebody is working on it and the decision if this is to be implemented is still open) and “Done” (= a decision has been made and the solution will now be handed to further specify it for development).</p>

<p>The workflow of <strong>Opportunities</strong> is a little more complicated and shows our general product discovery workflow:</p>

<img :src="'/images/user-knowledge-base/opportunity-workflow.png'" alt="">

<GraphicTranscript>
<p>The workflow has 5 stages:</p>

<ul>
    <li>From “Inbox” a ticket can only be moved to “Todo”</li>
    <li>From “Todo” it can go to “In Progress”.</li>
    <li>From “In Progress” it can either be moved back to “Todo” or forward to “Wait for Evidence”.</li>
    <li>From “Wait for Evidence” it can go back to “Todo” or “In Progress" or be moved to “Done”.</li>
    <li>“Done” is the end of the workflow.</li>
</ul>
</GraphicTranscript>

<ul>
    <li><strong>Inbox</strong>: the Opportunity is to be discussed in the weekly Inbox meeting.</li>
    <li><strong>Todo</strong>: The Opportunity is open and ready to be taken up by someone (a Product Owner or UX Designer).</li>
    <li><strong>In Progress</strong>: Someone has taken the Opportunity and is working on the problem and solution space.</li>
    <li><strong>Wait for Evidence</strong>: A solution has been worked out and handed over to development. The Opportunity is now waiting to be evaluated by user feedback (to determine that the problem has actually been solved).</li>
    <li><strong>Done</strong>: Enough feedback has been gathered and the problem proved to be solved.</li>
</ul>

</div>
