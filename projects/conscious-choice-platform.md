---
title: "Creating a sustainable online shop"
description: "Creating a comparison platform for visualizing sustainability in fashion products that allows users to make sustainable choices."
image: '/images/conscious-choice-platform/conscious-choice-platform-header.png'
imgmobile: '/images/conscious-choice-platform/conscious-choice-platform.png'
focus: UX Design, User Research
domain: Web
competences: Concept, Qualitative Research, UX Design, Prototyping, Usability Testing
tools: Figma, Trello, Maze, Miro, R Studio, R
from: 'February 2024'
to: 'June 2024'
year: 2024
month: 6
company: 'University of Aalborg'
---

<ProjectHeader :currentPage="this">

<p>Together with three fellow students, I created a comparison platform for fashion products that allows users to make sustainable choices, as a semester project in my masterʼs degree at <router-link to="/pages/company/aalborg-university.html">University of Aalborg</router-link>. We based our project on human-centered design going through several iterations of collecting and defining user requirements, designing and prototyping and usability testing.</p>

<p>Supervisor: Dr. Florian Meyer</p>

</ProjectHeader>

<div class="wrapper">

<p>The climate footprint of consumption in Denmark was 63 million tonnes of CO2e in 2021, which corresponds to a footprint of 11 tonnes of CO2e per person. Consumers are showing increased environmental awareness, which is influencing their shopping behaviour. At the same time, research shows that most consumers are not able to determine which behavioural changes are worthwhile in terms of sustainability and need assistance to change their behaviour, but the relevant sustainability information is often not easily available.
Our project addressed this by developing a user-friendly interface for the Green Database, which rates products based on sustainability criteria. Focusing on online shopping for fashion products, our goal was to empower consumers to make informed, eco-friendly choices. We designed a fashion comparison platform that aggregates sustainability data, enabling users to easily compare and choose sustainable products. Our human-centered design approach ensured that user requirements guided the development process.</p>

<img :src="'/images/conscious-choice-platform/high_fi_product_page.png'" alt="">

</div>

<HighlightedArea title="Summary of our Approach">
<ol>
    <li>Getting an overview of the data set and the information it contains</li>
    <li>Conducting literature review on sustainable shopping and consumer behavior, and performing competitor research to define the problem statement, research questions and project scope</li>
    <li>Conducting semi-structured interviews and identifying key themes in a thematic analysis</li>
    <li>Creating user stories based on the literature review and data from the interviews</li>
    <li>Performing a competitive usability review of relevant e-commerce websites and comparison tools</li>
    <li>Ideating using sketches and finally creating a low-fidelity prototype of two versions</li>
    <li>Usability testing of the low-fidelity prototypes and creating a prioritised list of interface flaws</li>
    <li>Ideating on solving the interface flaws</li>
    <li>Creating a high-fidelity prototype in Figma</li>
</ol>
</HighlightedArea>

<div class="wrapper">

<h2>Project Approach</h2>

<h3>Prior Research and Background Information</h3>

<p>Our first step in the project was to familiarize ourselves with the context of the project by researching consumer behavior, exploring and preparing the green database and performing a competitive review.</p>

<InfoBox>
<h2>Green Database</h2>
<p>Green Database is a comprehensive sustainability database that collects and evaluates product information from European online stores. It assesses products based on credibility, environmental sustainability, and socio-economic factors, utilizing sustainability labels for automatic ratings. The database includes a wide range of products, particularly focusing on fashion and electronics.</p>
</InfoBox>

<h4>Consumer Behaviour &amp; Competitor Research</h4>

<p>To design a sustainable shopping product, we first examined consumer behavior and the competitive landscape. Existing research shows that most Europeans shop online regularly, favoring convenience across various devices, despite awareness of environmental impacts. However, an "intention-behavior gap" often leads consumers to prioritize factors like price and convenience over sustainability.</p>

<p>Given the dominance of online marketplaces and multi-device shopping habits, we focused our project on responsive online shopping rather than physical stores or browser-specific solutions.</p>

<p>We also analyzed six sustainable fashion platforms and four browser extensions. Most competitors evaluate sustainability at the brand level and offer limited product-level insights, often restricted to specific browsers or devices. These findings reinforced our decision to create a platform-independent search interface with detailed, product-level sustainability information, leveraging Green Database’s strengths.</p>


<h3>Problem Formulation</h3>

<p>Based on this preliminary work we decided to focus our solution on designing a responsive comparison platform.
And based our project on the following problem formulation:</p>

<ProblemDef definition="How can we design a fashion-focused comparison platform based on the
data of the Green Database, to empower consumers to make conscious decisions and sustainable choices while shopping?" />

<p>We define a comparison platform as a website that aggregates and presents detailed information about products from multiple retailers, enabling users to compare products based on specific information, such as prices or reviews. In our case, we focus on the comparison of products based on sustainability.</p>

<h3>First Iteration - User Requirements</h3>

<h4>Interviews &amp; Thematic Analysis</h4>

<p>To ensure that our design solution aligned with the needs of the users, we first needed to gather their requirements. For this we chose to do semi-structured interviews, as they provide a clear focus but also allow to deviate from the predefined path to get the most valuable insights from the users. We conducted 9 interviews, 6 with women and 3 with men. We chose people with ages ranging from 25 to 55, with an average age of 35.56. The interviewees' nationalities included Danish, German, Slovak, Vietnamese and Australian. We also offered the participants the choice of which language they preferred to be interviewed in. The interview lengths ranged from around 10 to 30 minutes, depending on the depth of the interviewees' answers and the number of follow-up questions.</p>

<img :src="'/images/conscious-choice-platform/thematic_analysis.png'" alt="Screenshot of the Miro Board showing the Thematic Analysis on a high, not-readable level">

<p>To analyse the collected data from the interviews, we decided to use thematic analysis, as this approach allowed us to gain rich insights and led us to specify user requirements. Based on the responses from the interview, we identified seven key themes that helped us to highlight the attitudes and behaviours of participants towards general and sustainable online shopping behaviour together with the information need and decision-making in online purchasing. These are (1) general shopping behaviour, (2) frequency of shopping, (3) search types, (4) decision making, (5) sustainability, (6) sustainable product recognition and (7) information needs in terms of sustainability. I will not go into depth about the thematic analysis and it's components here, but instead move on to the user stories we derived from it.</p>

<h4>User Stories</h4>

<p>To specify our user requirements, we wrote them down in the form of user stories. We derived user stories from the interviews by using the output of our thematic analysis and our literature review on consumer behavior. Most user stories that we derived from the academic literature on search interface functionalities and consumer behaviour include only the generic user roles of user and consumer, as these are more general needs.</p>

<img :src="'/images/conscious-choice-platform/user_story_search_behavior.png'" alt="">
<GraphicTranscript>
<p>Screenshot of the Miro Board showing the user stories of the topic Search Behavior:</p>
<ul>
    <li><em>Epic</em>: As an online shop user, I want to have specific filters, so that I don't see products that are irrelevant for me.
    <ul>
        <li>As an online shop user, I want to filter by size, so that I only see products that are available in my size.</li>
        <li>As an online shop user, I want to filter by color, so that I only see the specific colors I like.</li>
        <li>As an online shop user, I want to filter by material, so that I can see products with my preferred material.</li>
        <li>As a price-conscious consumer, I want to see a price range, so that I can only see products that are affordable to me.</li>
        <li>As a price-conscious consumer, I want to filter the search to only see products on sale so that I can get a good deal.</li>
        <li>As an online shop user, I want to filter for specific brands, so that I can browse products from my favorite brands.</li>
    </ul></li>
    <li><em>Epic</em>: As an intentional consumer, I want to have a good search functionality, that supports me when I search for a specific piece of clothing.
    <ul>
        <li>As a user, I want to have query suggestions, so that I can overcome uncertainty in query formulation. <em>(from literature)</em></li>
        <li>As a user, I want to have query expansions, so that I can overcome uncertainty in query formulation. <em>(from literature)</em></li>
        <li>As a user, I want the search function to save my previous searches so that I can easily find them again. <em>(from literature)</em></li>
    </ul></li>
    <li><em>Epic</em>: As an online shop user, I want to have a navigation, so that I can find products of the same category.
    <ul>
        <li>As a virtual window shopper, I want to have product categories, so that I can browse in them.</li>
        <li>As an online shop user, I want to navigate through categories leading to sub-categories so that I can see my preferred item style.</li>
        <li>As a price-conscious consumer, I want to have a Sale section, so that I can get a discount.</li>
    </ul></li>
    <li><em>Epic</em>: As an online shop user, I want to have the key information of items, so that I can have a product overview.
    <ul>
        <li>As a user, I want the products to be in a synchronised multi-list user interface, so that I can compare the items on various criteria simultaneously. <em>(from literature)</em></li>
        <li>As a user, I want to have a summarised overview (with the most relevant information) of an item, so that I can better comprehend it and compare it to other items before going into detail. <em>(from literature)</em></li>
    </ul></li>
    <li><em>Epic</em>: As a user, I want to choose a sorting option, so that I can explore them more easily based on my preferences.
    <ul>
        <li>As an online shop user, I want to able to sort based on most wanted so that I find the most popular items.</li>
        <li>As a user, I want to have an intuitive ranking of items, so that I can locate and explore relevant items. <em>(from literature)</em></li>
    </ul></li>
    <li>As a user, I want to have the possibility to re-find items, so that I don't have to search for them again. <em>(from literature)</em></li>
</ul>
</GraphicTranscript>

<p>For the user stories of our user research, we identified different user roles or types of users from the interviews and the thematic analysis. On the highest level, we have the role of the <strong>online shop user</strong>, as this is the criteria by which we selected participants for our interviews. We used this role for the user stories that were not specific to a certain user type. We identified two types of users that differ in their search behaviour: the intentional consumer and the virtual window shopper. In the interviews, numerous participants mentioned that they search for a specific product when shopping online, we called this user role <strong>intentional consumer</strong>. On the opposite of that is the <strong>virtual window shopper</strong>, an online shop user who does not have a clear goal but browses through the products. For example one interviewee said:</p>

<Quote quote="I wanted a polo shirt from a certain brand [...] and I googled it and ended up on the website of the online shop where I ended up buying it. [...] Then I remembered that I could maybe use 1-2 new pullovers and then I just looked for pullovers." />

<p>This user is first an intentional consumer and then turns into a virtual window shopper. Another user role that was frequently represented in the interviews is the <strong>price-conscious consumer</strong>. For these consumers, price is a crucial criterion in the decision-making process regarding fashion.</p>

<img :src="'/images/conscious-choice-platform/user_story_product_information.png'" alt="">
<GraphicTranscript>
<p>Screenshot of the Miro Board showing the user stories of the topic Product Information:</p>
<ul>
    <li><em>Epic</em>: As an online shop user, I want to see detailed product information, so that I can make an informed decision on which item to buy.
    <ul>
        <li>As an online shop user, I want to see information on the material, so that I only buy clothes in materials I like.</li>
        <li>As an online shop user, I want to read a clear product description, so that I am informed of the used materials and textures.</li>
        <li>As an online shop user, I want sizing information, so that I can find the right size.</li>
        <li>As a sustainable conscious consumer, I want to have a visible labels on the product page, so that I can determine if a product is sustainable.</li>
    </ul></li>
    <li>As an online shop user, I want to multiple item pictures from different angles, so that I can aesthetically visualize whether I like the item.</li>
    <li>As an intentional consumer, I want to access the brand's website, so that I can read first-hand product information.</li>
</ul>
<p>Screenshot of the Miro Board showing the user stories of the topic Decision Making:</p>
<ul>
    <li><em>Epic</em>: As a virtual window shopper, I want to see recommendations on what else to buy, so that I can continue browsing.
    <ul>
        <li>As an online shop user, I want to see similar items when browsing online, so that I can explore new products I did not know about.</li>
        <li>As an online shop user, I want to I want to have a recommendation of what other people bought, so that I can be inspired by their combinations.</li>
        <li>As a user, I want to have links between similar items, so that I can compare them and explore new items more easily. <em>(from literature)</em></li>
    </ul></li>
    <li><em>Epic</em>: As an online shop user, I want to compare products, so that I can choose clothes that I really need.
    <ul>
        <li>As a consumer, I want more general information over specific details so that I can prevent choice and decision overload. <em>(from literature)</em></li>
    </ul></li>
    <li>As a consumer, I want to have an information about the material, so that I can decide wether or not it is worth the purchase.</li>
    <li><em>Epic</em>: As an online shop user, I want to see what other people think about a product, so that I can base my shopping decision on experiences of others.
    <ul>
        <li>As an online shop user, I want to see ratings from other people, so that I can base my shopping decision on experiences of others.</li>
        <li>As an online shop user, I want to be able to see reviews of items, so that I can determine if it is worth the price.</li>
    </ul></li>
</ul>
</GraphicTranscript>

<p>The <strong>sustainable-conscious</strong> consumer has emerged as a key user role in our user stories. This does not mean that this consumer is primarily or even solely motivated by sustainability, but that there is a certain awareness and willingness to act sustainably. Every participant in our interviews showed a general willingness to act sustainably under certain circumstances.</p>

<p>Closely linked to the role of the sustainable-conscious consumer, is the <strong>sceptical consumer</strong>. We thereby view the scepticism as not only linked to sustainability but more of a general characteristic. This user role has specific needs related to trust, as they for example might question the trustworthiness of the sustainability score provided by GreenDB. These two roles of the sustainable-conscious consumer and the sceptical consumer can pursue the same goal but sometimes have conflicting needs. The sustainable-conscious consumer, for example, wants information to be as easily accessible as possible without having to dive into detail, while the sceptical consumer has little trust in this information and therefore might want to see more details.</p>

<img :src="'/images/conscious-choice-platform/user_story_sustainability_information.png'" alt="">
<GraphicTranscript>
<p>Screenshot of the Miro Board showing the user stories of the topic Sustainability Information:</p>
<ul>
    <li><em>Epic</em>: As a sustainable conscious consumer, I want to have information about labels.
    <ul>
        <li>As a sustainable conscious consumer, I want to have transparent information about the labels, so that I can determine if I can trust it and distinguish the credibility of them.</li>
        <li>As a sustainable conscious consumer, I would like to have detailed information about the labels that popular brands promote, so that I can determine if its just marketing or a proven label.</li>
    </ul></li>
    <li><em>Epic</em>: As a sustainable conscious consumer, I want to have information about the sustainability combined in one place, so that I can get an overview.
    <ul>
        <li>As a sustainable conscious consumer, I want to have sustainability efforts well presented, so that I don't need to search for them myself.</li>
        <li>As a sustainable conscious consumer, I want to have one website that offers only sustainable clothing, so that I don't have to inform myself and search in different online shops.</li>
        <li>As an online shop user, I want to see sustainable items from different sources, as I don't have time to search for individual brands.</li>
        <li>As a sustainable conscious consumer, I want to have precise sustainability information, so that I can shop sustainably without reading too much (shortcut).</li>
        <li>As a consumer, I want to be provided with detailed sustainability information, so that I can make environmentally conscious shopping decisions. <em>(from literature)</em></li>
    </ul></li>
    <li><em>Epic</em>: As a sustainable conscious consumer, I want to have transparency around the sustainability information, so that I know I can trust it.
    <ul>
        <li>As a sceptical consumer, I want to have an information about the product origin, so that I can trust the brand.</li>
        <li>As a sustainable conscious consumer, I want to have information about the supply chain, so that I know what is happening in the background.</li>
        <li>As a sceptical consumer, I want to know where information about sustainability comes from, so that I can verify it is not green washing.</li>
        <li>As a sceptical consumer, I want to know how a sustainability score is calculated, so that I can see if the components of the calculation are relevant.</li>
        <li>As a consumer, I want to find and use a credible label verification system. <em>(from literature)</em></li>
        <li>As a consumer, I want to be presented with transparent information about sustainability and ethics, so that I can select environmentally friendly items. <em>(from literature)</em></li>
    </ul></li>
    <li>As a consumer, I want to easier evaluate and compare product's sustainability on various levels (labels).</li>
</ul>
</GraphicTranscript>

<p>When organising our user stories, we found four overarching themes: search behaviour, product information, decision making, and sustainability information. In total we created 56 user stories that specify various different user needs.</p>

<h3>First Iteration - Design</h3>

<p>After gathering the user requirements we started the first design phase. To design a user-centered solution we used the user stories and competitive reviews to sketch the main parts of the solution. </p>

<h4>Competitive Reviews</h4>

<p>Building on our competitor analysis, we conducted a competitive review focused on user interface design, identifying strengths, weaknesses, and trends among competing platforms. We compared two marketplace websites—<em>Zalando</em> and <em>PriceRunner</em>—and four sustainability-focused platforms—<em>Ecowiser</em>, <em>Good On You</em>, <em>Avocadostore</em>, and <em>Project Cece</em>.<br/>
<em>Zalando</em> and <em>PriceRunner</em> were selected for their significance in Denmark and their functionality in helping users find products across multiple sources. We evaluated features like navigation, filtering, search, and product presentation. For sustainability information, we reviewed platforms that provide transparency and labeling for sustainable shopping.</p>

<p>We analyzed 14 features relevant to our user stories across all competitors, gaining valuable insights into current UX patterns and opportunities to shape a more effective and user-centered design for our project.</p>

<img :src="'/images/conscious-choice-platform/competitive-reviews.png'" alt="">
<p class="image-description">Screenshot of a small parts of the competitive reviews to showcase our approach.</p>

<h4>Ideation</h4>

<p>To start our ideation we held a brainstorming session, where each of us created an idea individually and simultaneously in a 30-minute session. In this session, we focused on how to visualise and communicate the sustainability information in a user interface for the comparison platform, which is the main feature of our solution. Afterwards, we placed our sketches on our Miro board, my sketch can be seen in the picture below, and came together as a group and each of us presented our idea to the others. To evaluate the ideas, each of us got five votes to distribute on whole ideas or aspects of them.</p>

<img class="img-small-60" :src="'/images/conscious-choice-platform/sketch_summary.png'" alt="">
<img :src="'/images/conscious-choice-platform/sketch_sustainability-visualistion.png'" alt="">
<GraphicTranscript>
<p>The picture shows a hand-drawn minimal sketch, the headline of the first "screen" is Product Summary with Score. It shows a image with three scores in green (eco score), pink (social score) and blue (credibility score). Unterneath it has the brand, the product name, and on the right side of that the sustainability label including an icon. Below are two buttons "View Details", says it opens the product page, and "Visit retailer", says it jumps to the e-commerce store that sells the product.</p>
<p>The next screen shows a popover including all scores as headlines and details for each category. For example the eco score of 50/100 with the same green color as in the product summary, underneath has a short description of the score and then the sub scores like chemical use, life time, water, inputs, etc. Each of the sub-scores has a small information icon, showing that their is details available.</p>
<p>Another screen next to that one shows an alternative with a more graphic visualization of the scores. This one says that in this version every score has their own popup. On the left side it has a scale that goes from green to red and then the different sub scores are placed on the scales.</p>
<p>A popover next to these alternatives shows a popover explaining the sustainability label. It includes the logo, name and a description text as well as underneath the three scores with the headline "Sustainability Scores".</p>
</GraphicTranscript>

<h4>Low-Fidelity Prototype</h4>

<p>Following our ideation phase, we developed two versions of a low-fidelity prototype to explore different ways of displaying sustainability information and interacting with product data. Both prototypes included three core screens: product summary, product details, and a simulated retailer website.</p>

<p>We created the prototypes in Figma with a mobile-first approach, optimized for an iPhone SE screen size to ensure scalability across devices.</p>

<p>There is a few common elements between the two versions:</p>

<ul>
    <li>Product summary screen showing image, product name, brand, price, and sustainability indicators.</li>
    <li>Link to retailer's website to complete the purchase</li>
    <li>Simulated retailer page for user testing purposes ("Shop Now" or "Visit Retailer" button leading to screenshot)</li>
</ul>

<img class="img-small-60" :src="'/images/conscious-choice-platform/low-fi_a-vs-b.png'" alt="">

<p><strong>Version A</strong> has a dedicated product page:</p>

<ul>
    <li>Sustainability score shown on the product image in the summary list</li>
    <li>Clicking a product opens a new detailed product page</li>
    <li>Sustainability information includes overall, ecological, social, and credibility scores</li>
    <li>Expandable sections for deeper score breakdowns (e.g., chemicals, labor rights)</li>
    <li>Clickable sustainability labels with detailed explanations</li>
    <li>Additional product details (description, available sizes, colors)</li>
    <li>Recommendations for similar items at the bottom of the page</li>
</ul>

<img class="img-small" :src="'/images/conscious-choice-platform/low-fi_version_a.png'" alt="">

<p><strong>Version B</strong> instead of a product page has a sustainability pop-up</p>

<ul>
    <li>Sustainability score shown within a pop-up accessed from the product summary</li>
    <li>No separate product detail page; focus is purely on sustainability information</li>
    <li>Ecological and social scores expanded and visible immediately</li>
    <li>Minimal interface to support quick decision-making based on sustainability</li>
    <li>Users directed to the retailer's website for product-specific details</li>
</ul>

<img class="img-small" :src="'/images/conscious-choice-platform/low-fi_version_b.png'" alt="">

<h3>First Iteration - Evaluation</h3>

<p>To evaluate our two low-fidelity prototype versions, we conducted a moderated usability test with 8 participants. The test followed a structured process: short introduction, preliminary interview, task completion with probing, and a final wrap-up discussion. Each prototype was tested through three tasks, focusing on discoverability, understanding sustainability scores, and overall navigation.</p>

<h4>Task 1: Finding the Sustainability Score</h4>

<p><strong>Goal:</strong> Assess if users could find the sustainability score while browsing for a product.</p>
<p><strong>Results:</strong>
<ul>
  <li>Version A: Participants found the product page easily but often overlooked the score in the product summary.</li>
  <li>Version B: Most users missed the sustainability score entirely and navigated directly to the retailer’s page.</li>
</ul>
</p>

<!--<img class="img-small" src="/images/conscious-choice-platform/usability-testing_Task-1.png" alt="Task 1 Results">-->

<h4>Task 2: Investigating Sustainability Score Details</h4>

<p><strong>Goal:</strong> Determine if users understood and could interact with detailed score components.</p>
<p><strong>Results:</strong>
<ul>
  <li>Version A: Half of the participants found detailed information easily; others overlooked clickable elements. One noted, <em>"I didn't see the information circle at first."</em></li>
  <li>Version B: All participants found the details easily, likely recalling the interaction from the first version.</li>
</ul>
</p>

<!--<img class="img-small" src="/images/conscious-choice-platform/usability-testing_Task-2.png" alt="Task 2 Results">-->

<h4>Task 3: Exploration and Navigation</h4>

<p><strong>Goal:</strong> Observe users’ exploration behavior and readiness to proceed to the retailer.</p>
<p><strong>Results:</strong>
<ul>
  <li>Version A: Most participants explored product and sustainability details before moving on; some expected the overall score to be clickable.</li>
  <li>Version B: Many users missed having a product page. One said, <em>"I am used to seeing a product page."</em> Several navigated to the retailer seeking missing information.</li>
</ul>
</p>

<img src="/images/conscious-choice-platform/usability-testing_Task-3.png" alt="Task 3">

<h4>Interviews</h4>

<p>After testing, participants reflected on usability, ease of navigation, and completeness of information.</p>

<ul>
  <li><strong>Version A:</strong> Preferred for intuitive navigation and comprehensive information. As one participant said, <em>"Screens were simple and well organized. It was nice, fast, easy and natural to navigate."</em> Some expected the overall sustainability score to be clickable.</li>
  <li><strong>Version B:</strong> Criticized for missing product information and less intuitive flow. One participant noted, <em>"It was not that intuitive, I would expect to see more details first."</em></li>
</ul>

<h4>Conclusion</h4>

<ul>
  <li><strong>Version Preference:</strong> Majority preferred Version A for its familiar shopping experience. <em>"I like the first version more, all the sustainability information was in one area."</em></li>
  <li><strong>Understanding Scores:</strong> Users understood the existence of scores but felt overwhelmed by detail. Several questioned the meaning of the numbers:
    <ul>
      <li><em>"I don't know what the numbers mean... an explanation would be nice."</em></li>
      <li><em>"Is it a percentage, or a scale from 1 to 100?"</em></li>
    </ul>
  </li>
  <li><strong>Terminology Confusion:</strong> Several users struggled with the meaning of "credibility" in the score system: <em>"Whose credibility are we rating here?"</em></li>
</ul>

<h3>Second Iteration - User Requirements</h3>

<p>Following the usability test, we returned to the user requirements phase to refine the design based on user insights — a core principle of Human-Centered Design. We decided to move forward with Version A, which used a dedicated product page to present sustainability information and product details. This decision was supported by user feedback: 5 out of 8 participants preferred Version A, and only 25% successfully found the sustainability score in Version B during testing.</p>

<p>To guide the next iteration, we systematically identified and prioritized interface flaws uncovered during testing. Using a collaborative <em>Miro board</em>, we mapped participant feedback task-by-task and categorized the issues based on:</p>
<ul>
  <li>Number of participants affected</li>
  <li>Criticality to the overall user experience (low, medium, high)</li>
  <li>Priority for resolution (no priority to high)</li>
</ul>

<p>We then prioritized the findings to ensure that the most critical usability barriers could be addressed in the next design iteration.</p>

<div class="table-wrapper">
<table class="table-flaws">
  <thead>
    <tr>
      <th>#</th>
      <th>Interface Flaw</th>
      <th># of Participants</th>
      <th>Criticality</th>
      <th>Priority</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Low noticeability of the score in the product summary</td>
      <td>7</td>
      <td>Low</td>
      <td>Medium</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Hierarchy/Position of the breakdown of the scores on the product page</td>
      <td>1</td>
      <td>Low</td>
      <td>No priority</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Unexpected non-clickability of the overall sustainability score</td>
      <td>2</td>
      <td>Medium</td>
      <td>Low</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Unexpected non-clickability of the credibility score</td>
      <td>2</td>
      <td>Medium</td>
      <td>Low</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Confused about the size range</td>
      <td>1</td>
      <td>Low</td>
      <td>No priority</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Time-consuming and overwhelming amount of sustainability information</td>
      <td>2</td>
      <td>High</td>
      <td>Medium</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Unclear what a "good" sustainability score is (Assessment and weight of scores)</td>
      <td>4</td>
      <td>High</td>
      <td>High</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Credibility is not understood</td>
      <td>4</td>
      <td>High</td>
      <td>High</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Low understandability of the numbers/scale</td>
      <td>2</td>
      <td>High</td>
      <td>Medium</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Second Iteration – Design</h3>

<p>After prioritizing interface flaws through usability testing, we moved into a second design iteration. We ideated solutions for the most critical issues, upgraded our prototype to high-fidelity, and implemented new functionalities based on user stories and competitive analysis results.</p>

<h4>Solving Key Interface Flaws</h4>

<p>We conducted rapid individual ideation sessions and collaborative discussions to address the interface flaws with a high priority or that could be fixed easily and therefore redesign problematic areas.</p>

<p><strong>Product Page</strong></p>
<ul>
  <li><strong>Understanding Scores:</strong> We split the sustainability bar into five color-coded blocks (red, yellow, green) and added an overall GreenDB average below the score for better clarity.</li>
  <li><strong>Credibility Confusion:</strong> The "credibility" score was then renamed to "Label Credibility" and moved into the sustainability label pop-up for better contextual understanding.</li>
  <li><strong>Reducing Information Overload:</strong> Details for ecological and social scores are hidden behind expandable sections, and the credibility score is moved off the main page.</li>
  <li><strong>Clickable Sustainability Score:</strong> Clicking the overall score now scrolls the page to reveal detailed scores, matching user expectations.</li>
</ul>
<img :src="'/images/conscious-choice-platform/high_fi_sustainability_information.png'" alt="">

Additionally, to the changes on the product page, we increased the sustainability scores <strong>Visibility in the Product Summary</strong>, by placing it directly under the product image with color highlights to catch attention.</p>

<img class="img-small-30" src="/images/conscious-choice-platform/flaws-product-summary.png" alt="">


<h4>High-Fidelity Prototype</h4>

<p>After ideating on the interface flaws, we upgraded to a high-fidelity prototype in Figma, adding a clean, realistic visual design and more interactive elements.</p>

<img src="/images/conscious-choice-platform/high-fidelity-prototype.png" alt="" >

In the high-fidelity prototype we covered new features, to solve as many user stories as possible. This also includes features that are not specifically linked to the sustainability of the product, but just online shop functionality, that a user would expect for the solution to be able to compete with bigger e-commerce platforms.

<ul>
  <li><strong>Style Guide</strong>: For visual consistency, we created a style guide defining colors (black, grey, white, traffic light colors), a single typeface (Inter), and consistent icons.</li>
</ul>

<img class="img-small" src="/images/conscious-choice-platform/style_guide_colours.png" alt="" >


<ul>
<li><strong>Home Page</strong>: The homepage guides users with clear categories, sustainable shopping highlights, popular items, and easy access to transparency information.</li>
</ul>
<img class="img-small-60" src="/images/conscious-choice-platform/highfi-home.png" alt="" >

<ul>
<li><strong>Search Functionality</strong>: Users can quickly search and re-access recent queries via an enhanced search interface inspired by the <em>Zalando</em> feature.</li>
</ul>
<img class="img-small-60" src="/images/conscious-choice-platform/highfi-search.png" alt="" >

<ul>
<li><strong>Navigation Menu</strong>: A simple burger menu provides quick access to categories and the about page, promoting easy navigation and platform transparency.</li>
</ul>
<img class="img-small-60" src="/images/conscious-choice-platform/highfi-navigation.png" alt="" >

<ul>
<li><strong>Filter &amp; Sorting</strong>: Products can be sorted by price, popularity, or sustainability score. Filters include brand, price, color, size, and sustainability options.</li>
</ul>
<img class="img-small" src="/images/conscious-choice-platform/highfi-filters-sorting.png" alt="" >

<ul>
<li><strong>Recommendations &amp; Re-finding</strong>: We implemented "Recently Viewed" and "Popular Items" sections for easier re-finding and personalized recommendations.</li>
</ul>
<img class="img-small-60" src="/images/conscious-choice-platform/highfi-refinding-recommendations.png" alt="" >

<ul>
<li><strong>Transparency</strong>: Finally, we designed an "About" page explaining how our sustainability scores are calculated, to foster user trust and platform credibility.</li>
</ul>
<img class="img-small" src="/images/conscious-choice-platform/highfi-about.png" alt="" >

<p>All major improvements (as described above) converge on the <strong>Product Page</strong>: upgraded sustainability visualization, detailed expandable sections, and draggable product images.</p>

<img :src="'/images/conscious-choice-platform/high_fi_product_page.png'" alt="">

</div>

<HighlightedProjects currentProject="2" />
