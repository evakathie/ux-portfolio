---
title: "Creating the app Planeatary"
description: "Planeatary is a mobile app designed to support users to follow a healthy and environmentally friendly diet."
image: '/images/planeatary/planeatary-header.png'
imgmobile: '/images/planeatary/planeatary.png'
competences: Concept, UX Design, Prototyping, Usability Testing, App Development
tools: Figma, HTML & CSS, JavaScript
from: 'March 2019'
to: 'January 2021'
year: 2021
---

<ProjectHeader :currentPage="this">
<p>Planeatary is a mobile app designed to support users to follow a healthy and environmentally friendly diet in their everyday life. The app implements the Planetary Health Diet, which is based on the findings of "The EAT-Lancet Commission on Food, Planet, Health". I created it in collaboration with <a href="">Designer and Developer Torben Ratzlaff</a>.</p>
<p><b>Goal</b>: Making the scientific findings accessible for everyday use across country boarders and cultural differences.</p>
</ProjectHeader>

<div class="wrapper">

<p>A few years ago the “Planetary Health Diet”, which is supposed to be both healthy for humans and sustainable for the planet, went through the media quite a lot. My friend Torben Ratzlaff and I both found the diet exciting, but were disappointed by the fact that in the end no one was following it. And here we saw an opportunity for good design and technology: the diet in its scientific form with grams of certain food categories was not made for everyday use. Together we planned, designed and developed the app “Planeatary” — based on the scientific Planetary Health Diet by EAT-Lancet Commission on Food, Planet, Health — as a project in our free time.</p>

<Quote quote="The app Planeatary illustrates how design can build a bridge between science and everyday life." author="designxport, when giving Planeatary the Silberstreifenaward 2020" />


<img :src="'/images/planeatary/planeatary-screen-01.png'">

</div>

<HighlightedArea title="Summary of our Approach">
<ol>
    <li>Conception of the underlying model based on the „Planetary Health Diet“</li>
    <li>Creation of Personas of potential user groups</li>
    <li>Definition of the theoretical data model & development of user journeys and the screens required for them</li>
    <li>Making paper prototype</li>
    <li>Design of the user interface in several iterations using a clickable prototype in Figma</li>
    <li>Implementation using the cross-platform Apache Cordova</li>
    <li>Testing & evaluation of the feedback of ∼15 test users</li>
</ol>
</HighlightedArea>

<div class="wrapper">

<h3>Preliminary work — problem definition & Personas</h3>

<h4>The Planetary Health Diet</h4>

<p>While creating Planeatary Torben and I spend a lot of time in fancy Cafes in Hamburg and talked about all the details. The first thing we obviously did was reading the scientific paper called “Food in the Anthropocene: the EAT-Lancet Commission on healthy diets from sustainable food systems”. The result of this paper is the Planetary Health Diet, but it also gives a lot of details into why this is a healthy and sustainable diet.</p>

<img :src="'/images/planeatary/planetary-health-diet.png'">

<p>As you can see in the graphic above, the Planetary Health Diet is structured in food categories like vegetables, milk, grains, etc. Each category has an amount of how many grams per day an adult person with a calorie requirement of 2500 kcal is “allowed” to consume.</p>

<h4>Problem definition</h4>

<p>This diet plan is all we had in the beginning — and you might easily see the opportunity we saw in this: the diet is a great idea in general but tell someone to eat 7g of pork, 13g eggs and 50g potatoes a day and they will call you insane. These grams only make sense 1. over a longer period of time and 2. most people don’t know how many grams of something they eat. For example, a hen’s egg has an average of 52g, so according to the diet plan with 13g of egg per day, one egg could be eaten every 4 days. Of course, it becomes more complicated if the egg is not consumed “plain”, but is contained in a food, e.g. in a cake. This is where our idea for Planeatary comes in: an app that tells you what to eat for a healthy and sustainable diet, based on what you’ve eaten before.</p>

<h4>Planeatary’s Personas</h4>

<p>Of course, before we went deeper, we thought about who would use Planeatary. To consider possible users in the further design of the app, we not only integrated the most likely users but also some edge groups. The personas we created are mostly from our imagination. Throughout the design process, we also talked a lot with friends and casual acquaintances about our app, so we kept getting feedback.</p>

<img :src="'/images/planeatary/planeatary-personas.png'">

<h4>The fundamental concept</h4>

<p>After reading the paper, our fingers were itching to get started with actual work. Before we could even think about programming or the interface, one thing was clear: we would need a lot of data for this project and most of it would have to come from us. So we wanted to start collecting data sooner rather than later.</p>

<p>Conceptually, it was clear to us early on that we needed to track what users ate so that we could then use the science to make predictions for the future. In addition, the food categories would not be sufficient for us — who can say “I ate 43g of legumes today” — instead, we rely on individual foods which in are part of the categories, such as lentils instead of legumes or apples instead of fruit. We were also very sure that our users would not be willing to weigh all their food and therefore other units are needed such as “one piece” (apple, cucumber, egg …), “one spoon” or milliliters.</p>

<h4>Conception of the data basis</h4>

<p>The next thing we did was probably the most techy/ engineering thing you could do this early on: we created a data model on which the app would be based.</p>

<img :src="'/images/planeatary/planeatary-data-basis.png'">

<h4>Collection of the base data</h4>

<p>And then we created a big excel spreadsheet for the specific data point “food”. There, we collected all the basic foods we could think of and then added them to categories — which wasn’t so easy in some places, e.g. is a coconut a nut or a fruit? Over the next while, we both spent a lot of time in supermarkets — weighing fruits and vegetables. And at home the scale became our best friend: how much does a slice of bread weigh? Or a tablespoon of olive oil? At the beginning, we were very open with units and had, for example, the unit “clove” only for garlic. Later, we unified it more and created more general categories like one “part” of garlic.</p>

<p>Later in the process, we also added two additional food categories beyond the Planetary Health Diet: Salt and Alcohol. For salt we found another scientific basis — 3g per day at the default of 2500 kcal. For alcohol, 0g is always displayed in the app, we just added this because alcoholic drinks sometimes contain foods from other categories e.g. sugar and also have many calories, and some users might use Planeatary for calorie tracking.</p>

<h3>The User Interface</h3>

<h4>Competitor Analysis</h4>

<p>Before we started working on our own user interface, we did a competitor analysis. I mostly had a look at the app Yazio, which is a well known diet app. The data model of the diet is different to ours but a lot of basic mechanisms are the same — you have to add consumed food and than the app will tell you want to eat, count calories, …</p>

<p>There was also another app that dealt with the Planetary Health Diet, but did not implement the concept well in our opinion. Torben examined another dieting app and we superficially looked at a few more apps that had minor similarities with our idea, e.g. the app “Water Balance”, where you can track your daily water needs.</p>

<h4>Ideation & Prototyping</h4>

<p>We started with thinking about a general concept how to organize the screens: which screens do we need and how are they connected? After some iteration, we agreed that there should be two primary screens: 1. a screen that shows the already eaten food in some calendrical form and 2. a screen where all food is visible and the amounts that can still be eaten. In our first paper sketches, we focused primarily on these screens and the “adding” of a meal — that is, the transition from the screen with the food that can still be eaten to what has been eaten.</p>

<img :src="'/images/planeatary/paper-prototype.png'">

<p>After skribbeling on paper for a while we switched to a more final design using Figma. We did the whole design in German, because the language has much longer words than English and therefore is good to better estimate the space in multilingual apps — and we wanted to at least have a german and a english version.</p>

<img :src="'/images/planeatary/prototype.png'">

<p>Next to the already described screens that were already sketched on paper, we added another screen that is supposed to be a more general overview or statistic. On this screen the food categories are listed and how good the users diet is in that category in retrospective for today, a month, a year and all the time.</p>

<p>The icon library as well as the biggest part of the UI design was done by Torben — who actually is a designer and developer, while I mainly specialize in UX design.</p>

<p>After we were satisfied with the final prototype, we started development. For this we used the cross-platform Apache Cordova, which allows you to program apps with html, css and JavaScript that can be run on both Android and iOS. The more complicated development was primarily done by Torben — I did some of the css and html.</p>

<h4>Additional Features for a better Usability</h4>

<p>Even though the basic concept was already in place, we quickly (mostly on the fly while programming) realized that we would need additional features to achieve our goal — to make the diet accessible in everyday life.</p>

<ul>
    <li><b>Changing and calculating the daily calories</b>: People are very individual and have different daily calorie needs. The scientific basis generalized the daily calory intake to 2500 kcal per day, but there are many people who need less or more calories. An important feature is therefore to make it possible to enter / calculate the calorie requirements individually tailored to the user and adjust the amount of food accordingly.</li>
    <li><b>Vegetarian, pescetarian, vegan and custom diet plan</b>: the original planetary health diet is omnivorous, but many people life vegetarian, pescetarian or vegan. Additionally, there might be people with intolerances e.g. a nut allergy. Therefore, we wanted to 1. create ready-made diet plans for the common diets (vegetarian, pescetarian and vegan) and 2. make it possible to customize the diet plan to for example replace the nuts with oil (both very fatty).</li>
    <li><b>Adding custom foods</b>: Most people we know not only eat “basic foods” such as apples, eggs and cucumbers, but also “compound” foods such as a cooked dishes or a supermarket food with more than one ingredient. Therefore, to simplify the entry of the foods eaten, a feature is needed to add recipes and compound foods — frequently consumed compound foods such as bread, soy milk, noodles… are part of our database, here it is more about the favorite dish that grandma always cooks or highly processed foods like “Snickers” or Worcester sauce.</li>
</ul>

<h3>Usability Test</h3>

<p>With the first beta version of Planeatary, that already included a lot of different foods and (a first version of) all the features we wanted to integrate in a first release, we did a usability test. 7 participants (originally 19 participants were registered, but we have received feedback from only 7) tested the app on a variety of different phones for a few weeks and than filled out a survey. Some participants had seen or used the app before — as Torben and I kept asking for feedback throughout the process — but most of them had never used the app before. We asked questions like: “What technical or content-related errors did you notice?” “How regularly did you use Planeatary?” or “How hard was it for you to enter your food consumption?”. Some questions came with 5 point Likert scales, others with text fields. As a result, we got a lot of valuable feedback to the positive and negative aspects of the concept and the usability. Here are a few quotes:</p>

<Quote quote="A larger selection of already saved foods would be nice. I could not add new basic ingredients (like vegetables/fruits)." />

<Quote quote="The app is very easy to use and the existing functions are self-explanatory." />

<Quote quote="Relatively time-consuming for daily use" />

<p>Some of the problems we encountered are: “missing food data” makes it more difficult to use the app, complicated interface to enter your own dishes or problems to find food. Also, the general way “sustainability” is understood by the Planetary Health Diet was partly not understood, so the app could not confirm some assumptions of the users like “the CO2 footprint of the food is missing”.</p>

<p>After conducting the usability test, we did a few changes based on the results:</p>

<ul>
    <li>expanded the food database, especially to include a lot more compound foods such as pizza, pastries, ice cream, …</li>
    <li>added the functionality to add basic foods (besides the other custom foods) based on the food categories e.g. an exotic fruit that belongs (100%) to the fruit category</li>
    <li>revised/ redesigned the Custom Food Screen — subdivision between recipes (ingredients entered in grams) and content lists (where percentages are available as on food packaging). And an improved usability for entering the particular custom food.</li>
    <li>introduced an onboarding screen to better explain app — and give the possibility to customize the calorie intake and diet plan right away in the beginning.</li>
    <li>improved the search function — Placement at the bottom right instead of at the top (easier to reach without reaching around) and better search algorithm e.g. to find similar foods.</li>
</ul>

<h3>Final app</h3>

<p>We did release the first version of Planeatary in January 2021 in the <a href="https://apps.apple.com/app/planeatary/id1532714969" target="blank">App Store</a> and <a href="https://play.google.com/store/apps/details?id=com.thinkplanetary.planeatary&pli=1" target="blank">Google Playstore</a>. If you want to test it, it is still available in both stores — you can also <a href="https://planeatary.app/" target="blank">find our website here</a>. Last but not least I want to give you some impressions in the form of screenshots how the final app looks — but of course you will have the best experience by downloading it.</p>

<img :src="'/images/planeatary/planeatary-screen-01.png'">

<p class="image-description">The screen showing the consumed food and the list of foods, as well as the search functionality.</p>

<img :src="'/images/planeatary/planeatary-screen-02.png'">

<p class="image-description">Creation of a custom food and adding a consumed food.</p>

<img :src="'/images/planeatary/planeatary-screen-03.png'">

<p class="image-description">Different mechanisms to sort and filter the foods and the overview screen with statistics per category.</p>

<img :src="'/images/planeatary/planeatary-screen-04.png'">

<p class="image-description">The calculation of the daily calories.</p>

<p>We worked quite a lot on the calculation of the daily calories. The first screen calculates the basal metabolism — how much calories are needed with no activity. For the “daily activities” the user can either use this easy version shown in the screenshot or a more detailed view the average activities per hour of the day can be filled in e.g. 8h sleeping, 8h sitting, 2h walking, 1h exercise, … We tested both and they show nearly similar results therefore the default is this easy view with just 2 questions to answer.</p>

<h3>Conclusion & learnings</h3>

<p>When we created Planeatary, I was still in the middle of my bachelor studies and inexperienced — it was the first project on this scale I had ever worked on. I learned a lot and some things I would do differently today. Just to give a few examples: I would start testing earlier — before development preferably with one of the first prototypes. And I would probably also brainstorm more and evaluate different solutions in the conception phase, maybe try Design Thinking on the problem. But overall, Planeatary is a successful project from my point of view — especially for something that the two of us created on the side in our spare time on a low budget of time and money. I was able to learn a lot and I would do a lot of it the same way again.</p>

</div>

<HighlightedProjects currentProject="1" />
