---
title: "Creating the app Planeatary"
description: "Planeatary is a mobile app designed to support users to follow a healthy and environmentally friendly diet."
image: '/images/planeatary/planeatary-header.png'
imgmobile: '/images/planeatary/planeatary.png'
focus: UX Design, FrontEnd Development
competences: Concept, UX Design, Prototyping, Usability Testing, App Development
tools: Figma, HTML & CSS, JavaScript
from: 'March 2019'
to: 'January 2021'
year: 2021
month: 1
---

<ProjectHeader :currentPage="this">
<p>Planeatary is a mobile app designed to support users to follow a healthy and environmentally friendly diet in their everyday life. The app implements the Planetary Health Diet, which is based on the findings of “The EAT-Lancet Commission on Food, Planet, Health”. I created it in collaboration with <a href="https://www.torben-ratzlaff.de/" target="blank">Designer and Developer Torben Ratzlaff</a>.</p>
<p><strong>Goal</strong>: Making the scientific findings accessible for everyday use across country boarders and cultural differences.</p>
</ProjectHeader>

<div class="wrapper">

<p>A few years ago the “Planetary Health Diet”, which is supposed to be both healthy for humans and sustainable for the planet, went through the media quite a lot. My friend Torben Ratzlaff and I both found the diet exciting, but were disappointed by the fact that in the end no one was following it. And here we saw an opportunity for good design and technology: the diet in its scientific form with grams of certain food categories was not made for everyday use. Together we planned, designed and developed the app “Planeatary” — based on the scientific Planetary Health Diet by EAT-Lancet Commission on Food, Planet, Health — as a project in our free time.</p>

<Quote quote="The app Planeatary illustrates how design can build a bridge between science and everyday life." author="designxport, when giving Planeatary the Silberstreifenaward 2020" />


<img :src="'/images/planeatary/planeatary-screen-01.png'" alt="">

</div>

<HighlightedArea title="Summary of our Approach">
<ol>
    <li>Conception of the underlying model based on the “Planetary Health Diet“</li>
    <li>Creation of Personas of potential user groups</li>
    <li>Definition of the theoretical data model & development of user journeys and the screens required for them</li>
    <li>Making paper prototype</li>
    <li>Design of the user interface in several iterations using a clickable prototype in Figma</li>
    <li>Implementation using the cross-platform Apache Cordova</li>
    <li>Testing & evaluation of the feedback of ∼15 test users</li>
</ol>
</HighlightedArea>

<div class="wrapper">

<h2>Project Approach</h2>

<h3>Preliminary work — problem definition & Personas</h3>

<h4>The Planetary Health Diet</h4>

<p>While creating Planeatary Torben and I spend a lot of time in fancy Cafes in Hamburg and talked about all the details. The first thing we obviously did was reading the scientific paper called “Food in the Anthropocene: the EAT-Lancet Commission on healthy diets from sustainable food systems”. The result of this paper is the Planetary Health Diet, but it also gives a lot of details into why this is a healthy and sustainable diet.</p>

<img :src="'/images/planeatary/planetary-health-diet.png'" alt="Graphic explaining the Planetary health diet, see transcript below.">

<GraphicTranscript>
<p>The Planetary Health Diet is the result of the meta-report “Food in the Antropocene: The EAT-Lancet Commission on healthy diets from sustainable food systems”.</p>

<p>Its goal is to provide a globally applicable nutrion plan that enables healthy and sustainable nutrition for 10 billion people.</p>

<p>The graphic shows food quantities by category per day with a requirement of 2.500 kcal.</p>

<ul>
    <li>Vegetables: 300g</li>
    <li>Milk: 250g</li>
    <li>Grains: 232g</li>
    <li>Fruits: 200g</li>
    <li>Legumes: 75g</li>
    <li>Nuts: 50g</li>
    <li>Potatoes: 50g</li>
    <li>Plant Oils: 40g</li>
    <li>Sugar: 31g</li>
    <li>Poultry: 29g</li>
    <li>Seafood: 28g</li>
    <li>Eggs: 13g</li>
    <li>Pork: 7g</li>
    <li>Beef: 7g</li>
    <li>Palm Oil: 7g</li>
</ul>

</GraphicTranscript>

<p>As you can see in the graphic above, the Planetary Health Diet is structured in food categories like vegetables, milk, grains, etc. Each category has an amount of how many grams per day an adult person with a calorie requirement of 2500 kcal is “allowed” to consume.</p>

<h4>Problem definition</h4>

<p>This diet plan is all we had in the beginning — and you might easily see the opportunity we saw in this: the diet is a great idea in general but tell someone to eat 7g of pork, 13g eggs and 50g potatoes a day and they will call you insane. These grams only make sense 1. over a longer period of time and 2. most people don’t know how many grams of something they eat. For example, a hen’s egg has an average of 52g, so according to the diet plan with 13g of egg per day, one egg could be eaten every 4 days. Of course, it becomes more complicated if the egg is not consumed “plain”, but is contained in a food, e.g. in a cake. This is where our idea for Planeatary comes in: an app that tells you what to eat for a healthy and sustainable diet, based on what you’ve eaten before.</p>

<h4>Planeatary’s Personas</h4>

<p>Of course, before we went deeper, we thought about who would use Planeatary. To consider possible users in the further design of the app, we not only integrated the most likely users but also some edge groups. The personas we created are mostly from our imagination. Throughout the design process, we also talked a lot with friends and casual acquaintances about our app, so we kept getting feedback.</p>

<img :src="'/images/planeatary/planeatary-personas.png'" alt="Personas of the Planeatary app, see transcript below.">

<GraphicTranscript>

<p>Personas of the Planeatary app:</p>

<ul>
    <li>Lena
    <ul>
        <li>Lena is 25 years old and works as a project manager in a large corporation. She goes out to eat with her colleagues every day in the company canteen and often works out in the gym.</li>
        <li><strong>Goal</strong>: change her diet to be more sustainable and healthy.</li>
        <li><strong>Pain Point</strong>: too little time to deal with the topics in depth.</li>
        <li><strong>Technology</strong>: tech-savy, uses Planeatary on iPhone X</li>
    </ul></li>
    <li>Morten
    <ul>
        <li>Morten is 23 years old and lives in a shared apartment in Berlin. Professionally, he is a community manager at a startup. He cookes a lot himself and lives vegan. Thanks to the central location of his shared aparment, he rides his bike a lot.</li>
        <li><strong>Goal</strong>: make his everyday life even more sustainable.</li>
        <li><strong>Pain Point</strong>: a lot of knowledge about nutrition, but is quite disorganized and quickly loses track.</li>
        <li><strong>Technology</strong>: tech-savy, uses Planeatary on a FairPhone</li>
    </ul></li>
    <li>Angie
    <ul>
        <li>Angie is 41 years old, mother of two children and housewife. She lives in a village near a small town and is interested in esotericism and natural remedies. She cooks for the whole family and does weekly bulk shopping.</li>
        <li><strong>Goal</strong>: to cook natural and healthy for the whole family.</li>
        <li><strong>Pain Point</strong>: she often doesnʼt know what to cook and wants to teach the children about healthy food.</li>
        <li><strong>Technology</strong>: less tech-savy, uses Planeatary on a older Samsung smartphone</li>
    </ul></li>
    <li>Maren
    <ul>
        <li>Maren is 33 years old and a software developer in a small IT company. She usually eats lunch alone and often reaches for convenience food. On Instagram, she follows a few eco-influencers and feels like she belongs to the group.</li>
        <li><strong>Goal</strong>: primarily weight loss, but she also wants to live more.</li>
        <li><strong>Pain Point</strong>: she hardly knows anything about nutrition and often reaches for convenience food.</li>
        <li><strong>Technology</strong>: very tech-savy, uses Planeatary on a smartphone by Motorola</li>
    </ul></li>
</ul>

</GraphicTranscript>

<h4>The fundamental concept</h4>

<p>After reading the paper, our fingers were itching to get started with actual work. Before we could even think about programming or the interface, one thing was clear: we would need a lot of data for this project and most of it would have to come from us. So we wanted to start collecting data sooner rather than later.</p>

<p>Conceptually, it was clear to us early on that we needed to track what users ate so that we could then use the science to make predictions for the future. In addition, the food categories would not be sufficient for us — who can say “I ate 43g of legumes today” — instead, we rely on individual foods which in are part of the categories, such as lentils instead of legumes or apples instead of fruit. We were also very sure that our users would not be willing to weigh all their food and therefore other units are needed such as “one piece” (apple, cucumber, egg …), “one spoon” or milliliters.</p>

<h4>Conception of the data basis</h4>

<p>The next thing we did was probably the most techy/ engineering thing you could do this early on: we created a data model on which the app would be based.</p>

<img :src="'/images/planeatary/planeatary-data-basis.png'" alt="">

<h4>Collection of the base data</h4>

<p>And then we created a big excel spreadsheet for the specific data point “food”. There, we collected all the basic foods we could think of and then added them to categories — which wasn’t so easy in some places, e.g. is a coconut a nut or a fruit? Over the next while, we both spent a lot of time in supermarkets — weighing fruits and vegetables. And at home the scale became our best friend: how much does a slice of bread weigh? Or a tablespoon of olive oil? At the beginning, we were very open with units and had, for example, the unit “clove” only for garlic. Later, we unified it more and created more general categories like one “part” of garlic.</p>

<p>Later in the process, we also added two additional food categories beyond the Planetary Health Diet: Salt and Alcohol. For salt we found another scientific basis — 3g per day at the default of 2500 kcal. For alcohol, 0g is always displayed in the app, we just added this because alcoholic drinks sometimes contain foods from other categories e.g. sugar and also have many calories, and some users might use Planeatary for calorie tracking.</p>

<h3>The User Interface</h3>

<h4>Competitor Analysis</h4>

<p>Before we started working on our own user interface, we did a competitor analysis. I mostly had a look at the app Yazio, which is a well known diet app. The data model of the diet is different to ours but a lot of basic mechanisms are the same — you have to add consumed food and than the app will tell you want to eat, count calories, …</p>

<p>There was also another app that dealt with the Planetary Health Diet, but did not implement the concept well in our opinion. Torben examined another dieting app and we superficially looked at a few more apps that had minor similarities with our idea, e.g. the app “Water Balance”, where you can track your daily water needs.</p>

<h4>Ideation & Prototyping</h4>

<p>We started with thinking about a general concept how to organize the screens: which screens do we need and how are they connected? After some iteration, we agreed that there should be two primary screens: 1. a screen that shows the already eaten food in some calendrical form and 2. a screen where all food is visible and the amounts that can still be eaten. In our first paper sketches, we focused primarily on these screens and the “adding” of a meal — that is, the transition from the screen with the food that can still be eaten to what has been eaten.</p>

<img :src="'/images/planeatary/paper-prototype.png'" alt="">

<p>After skribbeling on paper for a while we switched to a more final design using Figma. We did the whole design in German, because the language has much longer words than English and therefore is good to better estimate the space in multilingual apps — and we wanted to at least have a german and a english version.</p>

<img :src="'/images/planeatary/prototype.png'" alt="">

<p>Next to the already described screens that were already sketched on paper, we added another screen that is supposed to be a more general overview or statistic. On this screen the food categories are listed and how good the users diet is in that category in retrospective for today, a month, a year and all the time.</p>

<p>The icon library as well as the biggest part of the UI design was done by Torben — who actually is a designer and developer, while I mainly specialize in UX design.</p>

<p>After we were satisfied with the final prototype, we started development. For this we used the cross-platform Apache Cordova, which allows you to program apps with html, css and JavaScript that can be run on both Android and iOS. The more complicated development was primarily done by Torben — I did some of the css and html.</p>

<h4>Additional Features for a better Usability</h4>

<p>Even though the basic concept was already in place, we quickly (mostly on the fly while programming) realized that we would need additional features to achieve our goal — to make the diet accessible in everyday life.</p>

<ul>
    <li><strong>Changing and calculating the daily calories</strong>: People are very individual and have different daily calorie needs. The scientific basis generalized the daily calory intake to 2500 kcal per day, but there are many people who need less or more calories. An important feature is therefore to make it possible to enter / calculate the calorie requirements individually tailored to the user and adjust the amount of food accordingly.</li>
    <li><strong>Vegetarian, pescetarian, vegan and custom diet plan</strong>: the original planetary health diet is omnivorous, but many people life vegetarian, pescetarian or vegan. Additionally, there might be people with intolerances e.g. a nut allergy. Therefore, we wanted to 1. create ready-made diet plans for the common diets (vegetarian, pescetarian and vegan) and 2. make it possible to customize the diet plan to for example replace the nuts with oil (both very fatty).</li>
    <li><strong>Adding custom foods</strong>: Most people we know not only eat “basic foods” such as apples, eggs and cucumbers, but also “compound” foods such as a cooked dishes or a supermarket food with more than one ingredient. Therefore, to simplify the entry of the foods eaten, a feature is needed to add recipes and compound foods — frequently consumed compound foods such as bread, soy milk, noodles… are part of our database, here it is more about the favorite dish that grandma always cooks or highly processed foods like “Snickers” or Worcester sauce.</li>
</ul>

<h3>Usability Test</h3>

<p>With the first beta version of Planeatary, that already included a lot of different foods and (a first version of) all the features we wanted to integrate in a first release, we did a usability test. 7 participants (originally 19 participants were registered, but we have received feedback from only 7) tested the app on a variety of different phones for a few weeks and than filled out a survey. Some participants had seen or used the app before — as Torben and I kept asking for feedback throughout the process — but most of them had never used the app before. We asked questions like: “What technical or content-related errors did you notice?” “How regularly did you use Planeatary?” or “How hard was it for you to enter your food consumption?”. Some questions came with 5 point Likert scales, others with text fields. As a result, we got a lot of valuable feedback to the positive and negative aspects of the concept and the usability. Here are a few quotes:</p>

<Quote quote="A larger selection of already saved foods would be nice. I could not add new basic ingredients (like vegetables/fruits)." />

<Quote quote="The app is very easy to use and the existing functions are self-explanatory." />

<Quote quote="Relatively time-consuming for daily use." />

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

<img :src="'/images/planeatary/planeatary-screen-01.png'" alt="Three screens of the app Planeatary described below.">

<p class="image-description">The screen showing the consumed food and the list of foods, as well as the search functionality.</p>

<p>The <strong>“Consumption” screen</strong> shows the consumed food sorted by dates. If a user doesnʼt type in any food by the end of the day, the app will automatically apply a “perfect” diet plan so that there isnʼt a calory or lack in the statistics and the amount that can be eaten the next day gets smaller. In this screen the user can go into the past as far as they want, but after a certain amount of time (several months) the days will get summarized and only the basic food categories will be displayed for a whole month - this helps to not overcrowd the interface and since the data is saved locally on the users device, the file doesnʼt get too big.</p>

<p>The <strong>“Food” screen</strong> shows the list of all the foods, divided into the food categories (default). For every category the remaining amout that can be eaten on this day is displayed in grams and with a graphical bar. The specific amount is also displayed for every food - since foods can consist of different categories or include water, the amount often varies from the category. In the screenshot e.g. “Oat milk” is visible that shows 2,383g while the grains category has only 286g left, this is because oat milk mostly consists of water and doesnʼt need that much grain in production.<br />
The screen also includes functionality like filters and sorting, adding custom foods (see below) and the search functionality.</p>

<img :src="'/images/planeatary/planeatary-screen-02.png'" alt="Three screens of the app Planeatary described below.">

<p class="image-description">Creation of a custom food and adding a consumed food.</p>

<p>One feature of the app is to allow the <strong>creation of custom foods</strong>, since a 100% database coverage of all food is not possible. The feature can be accessed through the bar in the “Food” screen (top left) or if a food is searched and not found. There are three different categories of custom food: “Staple food” (= consists of the basic food categories, e.g. a exotic fruit), “Packaged food” (e.g. your favorite candy that has an ingredient list in %), “Prepared dish” (e.g. a recipe you cook).<br />
The screen to create the custom food varies a little based on the category of custom food, in any case, a name, description and icon can be assigned, the food consists of ingredients and units can be added. For Staple foods only the basic categories can be added in percent and the calories per 100g can either be added or calculated by the app based on the underlying categories. For Packaged foods any food or food category can be added as an ingredient in percent and the calories per 100g can either be added or calculated by the app based on the ingredients. For Prepared dishes the ingredients are added via gram or their units (e.g. “1 piece”) and the calories per 100g are automatically calculated by the app and canʼt be changed.</p>

<p>The screen to the right shows the popup to <strong>add consumed food</strong>. With this popup it is transitioned to the “Consumption” screen. The date is per default today or the last date where a user did hit “Add” in the “Consumption” screen (therefore it is possible to add food to past dates). The popup is accessible by clicking on any food in the “Food” screen (also through the search functionality). Per default “Grams” is selected as a unit. If the unit is changed the default amount switches to “1” if it was “100” before. The app remembers the last unit that was selected for every food to make it easier to add the foods to the consumption, e.g. if you eat 2 apples every morning you can just click on “Apple” and the app will have “2 Whole Pieces” remembered from yesterday.</p>  

<img :src="'/images/planeatary/planeatary-screen-03.png'" alt="Three screens of the app Planeatary described below.">

<p class="image-description">Different mechanisms to sort and filter the foods and the overview screen with statistics per category.</p>

<p>The app provides different <strong>Filters</strong> to filter the long list of foods in the “Food” screen. The filters are “Basic” foods (= including only one food category, e.g. Apple, Flour, Milk), “Combined” foods (= consisting of different foods or food categories, e.g. Pizza, Cookie, Mayonnaise), “Custom” foods (= created by the user, they are also marked by a small star in the UI), “Categories” (= the foods are per default ordered by their categories, these can be hidden via the filter). Per default every food and category is visible.</p>

<p>Additionally, there are different different <strong>sorting mechanisms</strong>: alphabetical A-Z (default), alphabetical Z-A, Last used, Availability (= descending number of grams that can still be consumed). If the categories are visible the sorting happens for the foods inside each food categories and doesnʼt apply to the categories themselves.</p>

<p>The <strong>“Overview” screen</strong> shows different statistics on how well the Planetary Health Diet is implemented by the user (in the past). The top shows the calories per day and how it is matching the set daily calories. Underneath it is a graphic for the food categories. The graph has a two dimensional scale, where left is too little and right is too much. The more the smiley is in the middle, the happier it is, because in the middle the plan is followed (too little or too much of a food in a food categorie is in most cases unhealthy and/ or unsustainable for the planet). The text underneath the food category name switches between the average amout per day and a number of how much grams and percent too little or too much it is e.g. “-179g, -14%”. If the deviation is not significant, the app shows the text “optimal” instead. This statistic can be seen per day, week, month or year.</p>

<img :src="'/images/planeatary/planeatary-screen-04.png'" alt="Three screens of the app Planeatary described below.">

<p class="image-description">The three steps of calculating the daily calories.</p>

<p>We worked quite a lot on the <strong>calculation of the daily calories</strong>. In the first screen the basal metabolism is calculated — how much calories are needed with no activity. For the “daily activities” the user can either use this easy version shown in the screenshot or a more detailed view were the average activities per hour of the day can be filled in e.g. 8h sleeping, 8h sitting, 2h walking, 1h exercise, … The latter is the scientific approach we found on calculation the calories. But our tests and our own gut feeling showed us that it is hard for users to estimate these average activities and it takes quite long. We therefore developed and tested the easier version with just 2 simple questions and found out that it reliably showed very similar results to the more detailed approach.</p>

<p>The daily calories as well as the diet plan (omnivore, vegetarian, pescetarian, vegan or custom) can be set in the <strong>“More” screen</strong>. There are also a few other options on the calculation as well as the apps appearance (color, zoom). The language is set to the devices language per default but can be changed in the “More” screen. We also provide some general information to the app, tips & tricks and an faq (as well as legal requirements like imprint and information on privacy).</p>

<img :src="'/images/planeatary/planeatary-screen-05.png'" alt="Three screens of the app Planeatary described below.">

<p class="image-description">Intro into the App - onboarding screens and popup inside the app.</p>

<p>We deliberately decided against an extensive onboarding during the initial download (where the calories can be calculated and the plan set), because the app can work well with defaults and we suspect that many users are overwhelmed by having to make so many settings before the app can be used. But in our usability test showed that the app wasnʼt understood so we decided to include a short intro when first using the app. When first opening the app there are four screens with a graphic and text. In the last screen there are two options “Edit settings” (leads to the “More” screen) and “Explore app”. While exploring the app for the first time, more popups are displayed to explain the functionality.</p>

<h3>Conclusion & learnings</h3>

<p>When we created Planeatary, I was still in the middle of my bachelor studies and inexperienced — it was the first project on this scale I had ever worked on. I learned a lot and some things I would do differently today. Just to give a few examples: I would start testing earlier — before development preferably with one of the first prototypes. And I would probably also brainstorm more and evaluate different solutions in the conception phase, maybe try Design Thinking on the problem. But overall, Planeatary is a successful project from my point of view — especially for something that the two of us created on the side in our spare time on a low budget of time and money. I was able to learn a lot and I would do a lot of it the same way again.</p>

</div>

<HighlightedProjects currentProject="1" />
