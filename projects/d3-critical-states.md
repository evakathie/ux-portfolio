---
title: "Improving Critical States User Flow"
description: "Improving the usability of the important “Critical States” feature in the foreign exchange pricing software D3 Sheets by Digitec GmBH."
image: '/images/d3-critical-states/d3-critical-states-header.png'
imgmobile: '/images/d3-critical-states/d3-critical-states.png'
focus: UX Design, UI Design
competences: Design Thinking, User Journey Mapping, UI Design
tools: Adobe XD
from: 'July 2020'
to: 'October 2020'
year: 2020
month: 10
company: 'Digitec'
---

<ProjectHeader :currentPage="this">

<p>D3 Sheets is a pricing engine for foreign exchange trading by <router-link to="/pages/company/digitec.html">Digitec GmbH</router-link>. I worked for several years as a product designer for Digitec and in this project we aimed to improve the usability of the handling of critical states. This is an essential feature for FX traders to monitor their live prices and to get notified about bad prices early on.</p>

</ProjectHeader>

<div class="wrapper">
<p>The Status feature is one of the most important features of D3 Sheets software, as it protects users from high losses due to wrong/off-market prices. The goal of the project was to make the use of the feature more intuitive and to support users at different points of their user journey. </p>

<InfoBox>
<h2>Explanation of the Status Feature</h2>
<p>States in D3 are valuable hints that a price is off-market. They are e.g. determined by reference prices - as well as a few other internal calculations -, if the exported price and the reference price are far apart, a reference price alarm (status) is set. In the UI states are indicated in different places by color (traffic lights metaphor) as well as labels. If a price has a “red status” the price will not be published and therefore no automatic trades can happen on this price.</p>
</InfoBox>

<img :src="'/images/d3-critical-states/d3-critical-states-popup.png'" alt="">

</div>

<HighlightedArea title="Summary of our Approach">
<ol>
    <li>Collecting data about the user problem in the internal User Insights Knowledge Base.</li>
    <li>Execution of a Design Sprint with 5 participants to understand the problem and find potential solutions.
        <ul>
            <li>Map: Expert Talks & How Might We Statements, Long Term Goal, Sprint Questions and User Journey Mapping.</li>
            <li>Ideate: Finding potential solutions in individual work, presenting and discussing them in the group and creating a final solution (from parts of the other solutions).</li>
        </ul></li>
    <li>Prototyping and creating a pixel perfect design using Adobe XD</li>
</ol>
</HighlightedArea>

<div class="wrapper">

<h2>Status Quo</h2>

<p>A lot of emails from our customers in the support hotline indicated that they are facing problems with the usability of the status feature. In our User Insights Knowledge base, the emails were derived to the following opportunities:</p>

<ol>
    <li>I donʼt understand why my price is red (= status indicating a wrong price)</li>
    <li>I donʼt understand which of the underlying curves triggers a red status in my complex setup</li>
    <li>I donʼt understand what “REF” in the Maturity column means (“REF” is the label indicating a reference price alert)</li>
</ol>

<p>Like the second opportunity shows, the status feature can be especially complicated due to the often complex curve models customers build with the software. Curves are often interdependent (prices are “inherited” from one curve or calculated from multiple curves). In addition, prices on special dates are often interpolated from standard dates, making some prices dependent on prices on other dates. For users it was not currently apparent where the root of the problem lies, i.e. where they must rectify the status. For this, they may need to have a precise understanding of the selected curve model and the links between the curves in this model - which is usually not the case.</p>

<img :src="'/images/d3-critical-states/critical-states-before-source.jpg'" alt="">

<p class="image-description">The status feature in the Sheet before the implementation of the project.</p>

<p>Before doing any usability improvements, the red color in the “Maturity” column showed that a price is off-market, additionally there were different short labels indicating the status. In the fixed sidebox on the right the “Critical States” display could be opened to show additional information - this was only visible in certain stages of the sidebox.</p>

<p>Furthermore, there is a so-called “Sheet Monitor” in the GUI, where different curves can be added. There, the status is also displayed by color and labels and thus the status can be seen even if the Sheet for the curve is not open.</p>

<h2>Project Approach</h2>

<h3>Design Sprint</h3>

<p>To delve deeper into the existing customer problems and find possible solutions, a design sprint was conducted with five participants from product management, client support and development.</p>

<img :src="'/images/d3-critical-states/design-sprint-board.png'" alt="">

<p class="image-description">Screenshot of the Miro Board we used to do the workshop.</p>

<h4>Map</h4>

<p>In the first phase of the Design Sprint we did several exercises to map the problem. In the first exercise two experts on the user problem (two colleagues from product management and client support that are in close contact with the users) talked about the problem and were asked questions. During the interview all the other participants wrote down so-called “How Might We (HMW) Statements”. Afterwards a Long Term Goal, as well as Sprint Questions was determined via brainstorming and dot-voting. While the goal takes a more positive view, the Sprint Questions task takes a pessimistic view of the problem to identify possible obstacles.</p>

<ul>
    <li>HMW Statements (selection of the whole set of HMW statements, that got votes):
    <ul>
        <li>HMW determine the origin of the status?</li>
        <li>HMW sufficiently point out negative trades?</li>
        <li>HMW identify negative trades?</li>
        <li>HMW simplify our curve models?</li>
        <li>HMW automatically correct negative trades?</li>
        <li>How can we show “transparency” for manually set status?</li>
    </ul></li>
    <li>Long Term Goal: In 2 years time, traders can solve status problems independently, quickly and intuitively.</li>
    <li>Sprint Questions:
    <ul>
        <li>Can we implement that at all? </li>
        <li>Can we change the existing model without alienating existing customers?</li>
        <li>Can we design the (complex) interactions so intuitively that they are understood without explanation if possible?</li>
    </ul></li>
</ul>

<p>In the last task of the map phase, a user journey map was drawn:</p>

<img :src="'/images/d3-critical-states/user-journey-map.png'" alt="">

<GraphicTranscript>

<p>The User Journey Map is divided into three phases - Trigger, Notice and (Re)Act - and has two actors - the Trader and the D3 System. The final goal is “Status issue solved”.</p>

<ol>
    <li>Trigger: The D3 System identifies a bad price and informs the trader.</li>
    <li>Notice: The trader is notified about the bad price (by the system) or discovers it by opening the affected Sheet and seeing the status there.</li>
    <li>(Re)Act: In some cases the system can correct the price by itself and only inform the trader that the bad price was corrected. Otherwise the trader now has three different options:
    <ul>
        <li>Ignore the status (e.g. because of high market volatility the trader is ok with the price not being published)</li>
        <li>Correct the price right away - if they know how to do it</li>
        <li>Ask the system for more information about the price. In this case the system should be able to provide the trader with additional information and maybe even possible solutions that then enables them to correct the price.</li>
    </ul></li>
</ol>

</GraphicTranscript>

<p>After drawing the map we decided to focus the workshop on the “Notice” phase as well as providing the users with additional information/ help to solve the status issue.</p>

<h4>Ideate</h4>

<p>The ideate phase started with an exercise called “Lightning Demos”, where each participant gets a short amount of time to search for related features or solutions by competitors. Since the D3 software is a niche product and we didnʼt have access to the software of competitors we searched in software we often use as well as the internet for comparable features.</p>

<img :src="'/images/d3-critical-states/lightning-demos.png'" alt="">

<p class="image-description">A screenshot of a few of the lightning demos provided by the participants.</p>

<GraphicTranscript>

<ul>
    <li>Errors in Excel: an error icon indicates an error and allows the user to open a menu with a description of the error as well as a few actions like “Help on this Error” or “Ignore Error”.</li>
    <li>Lightbulb in OneNote: clicking on a lightbulb icon shows a search dialog with the question “What would you like to do?”, some default answers are provided like “Creating a task element”.</li>
    <li>Location Pane bars: a bar on the left side of a document indicates where in the document an error occurred.</li>
    <li>Clippy: the old microsoft word feature “Clippy” is displayed on the bottom right of a word document, asking the user if they need help with anything.</li>
</ul>

</GraphicTranscript>

<p>As “homework” after this first workshop day, the participants were given the task to think of a solution for the problem in individual work and to prepare it visually (the aim was to make it self explanatory for the next workshop session).</p>

<p>On the second day of the workshop we had a look at all the solutions the different participants provided. We then did a dot-voting on the solutions and parts of them and stitched together a final solution.</p>

<h3>Final Solution</h3>

<p>The final solution was created in the form of storyboards based on the user journey. After the workshop, I put designs for the individual parts of the solutions in Adobe XD and wrote tickets for the software development. So far, not all parts of the solution have been implemented.</p>

<h4>Notify</h4>

<p>Since users sometimes run D3 Sheets in the background or have up to 6 different screens with different software open, itʼs essential to catch the users attention if a price turns bad. One feature that was already present for that is the Sheet Monitor, that was already described above. In the Sheet Monitor a Sheet would turn from green to red and display a short label with the Status. The Sheet Monitor is individually configurable per user and contains the whole set of Sheets that is of importance for the user, therefore this is already sufficient. In our solution, we decided to enhance this feature to better notify the user. If a Sheet in the Sheet Monitor of a user goes from green to red: </p>

<ul>
    <li>a <strong>acoustic signal</strong> sounds (this can be turned off by a switch in the Sheet Monitor)</li>
    <li>the <strong>app logo in the Windows Task Bar blinks</strong> a few times, between the normal blue color and orange, and finally stays orange until the software is focused</li>
</ul>

<img class="img-small" :src="'/images/d3-critical-states/sheet-monitor.png'" alt="">
<p class="image-description">A screenshot of the Sheet Monitor feature. In the tile on the left, the sound can be turned on and off.</p>

<img class="img-small" :src="'/images/d3-critical-states/app-logo.png'" alt="">
<p class="image-description">The app logo in the taskbar, like described above it will change between the blue (on the left) and orange (on the right).</p>

<p>The originally envisioned final solution also included two other ideas that have not yet been implemented (for time and prioritization constraints). The first one was creating the opportunity to <strong>fix the Sheet Monitor</strong> on the monitor if the rest of the software is minimized. This arised from the fact that most of our users have D3 running in the background, but the Sheet Monitor is supposed to be a watchlist and therefore could be helpful to still be displayed.</p>

<p>The second idea is a "<strong>Notifier Bell</strong>" that should also have worked as a to-do list - this was part of my proposed solution idea. The bell is located on the Sheet Monitor and would therefore always be visible with a minimized software, when the Monitor is fixated. The following User Journey was designed for this feature:</p>

<!--<img class="img-original" :src="'/images/d3-critical-states/notifier-bell.png'" alt="">-->

<ol>
    <li>A problem occurs in the curve</li>
    <li>The notifier bell starts "ringing" (visually and audible)</li>
    <li>Klicking on the bell opens a menu listing all the critical states that occured
    <ul>
        <li>Klicking "Dismiss", removes the notification</li>
        <li>Klicking "Go to" opens the curve with the problem</li>
    </ul></li>
</ol>

<h4>Act & Inform</h4>

<p>Using the Sheet Monitor Feature a user can simply click on a red Sheet to open it. The prices that are wrong are marked by red color and labels. The bigger issue is to find out why a price is wrong. In the past there was a view in the Sidebox called “Critical States”, in the new solution this view was extracted from the sidebox and put into a <strong>popup to be closer to the actual problem</strong>. Additionally it was enhanced by a <strong>Deep Link feature</strong>: if a status was not caused by the currently selected row, but is inherited (from another Curve or another date) a link to this price is provided.</p>

<img class="img-small" :src="'/images/d3-critical-states/critical-states-after-hover.png'" alt="">

<GraphicTranscript>
<p>The “3M” row of the Sheet shows a red status with a small “ref”-label. Right beneath the row a popup is opened with the headline “Critical States on 3M”. Beneath it the “ref”-label is displayed again with a red background and next to it the text “Ref Rate check failed in source”. “Source” is underlined and has an icon indicating that we call “external link”, it is a rectangle with an arrow pointing out of it. The cursor is above the “source” and a tooltip is displayed that shows the name of the underlying source Sheet that inherits this status.</p>
</GraphicTranscript>

<p>If the Deep Link is clicked the system identifies the root of the problem and:</p>

<ul>
    <li>selects the row in the current Sheet that inherits the wrong price</li>
    <li>opens the Sheet where the wrong price is caused and selects the row where the wrong price occurs</li>
</ul>

<p>The latter case works over several levels, so if e.g. Sheet A inherits a status to Sheet B and Sheet B is used by Sheet C, where the user finds the wrong price, the Deep Link will lead them directly to Sheet A - the root cause of the wrong price. The theoretical possibility that two root curves might cause a red status that is inherited is solved by displaying multiple Status rows in the popup in this case.</p>

</div>

<HighlightedProjects currentProject="2" />
