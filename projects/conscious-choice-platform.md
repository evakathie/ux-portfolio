---
title: "Creating a sustainable fashion comparison platform"
description: "Creating a comparison platform for visualizing sustainability in fashion products that allows users to make sustainable choices."
image: '/images/conscious-choice-platform/conscious-choice-platform-header.png'
imgmobile: '/images/conscious-choice-platform/conscious-choice-platform.png'
focus: UX Design, User Research
domain: Web
competences: Concept, Qualitative Research, UX Design, Prototyping, Usability Testing
tools: Figma, Trello, R Studio, R
from: 'February 2024'
to: 'June 2024'
year: 2024
month: 6
company: 'University of Aalborg'
---

<ProjectHeader :currentPage="this">

<p>Together with three fellow students, I created a comparison platform for fashion products that allows users to make sustainable choices, as a semester project in my masterʼs degree at <router-link to="/pages/company/aalborg-university.html">University of Aalborg</router-link>. We based our project on human-centered design going through several iterations of collecting and defining user requirements, designing and prototyping and usability testing.</p>
<!--<p><strong>Problem formulation</strong>: How can we design a fashion-focused comparison platform based on the
data of the Green Database, to empower consumers to make conscious decisions and sustainable choices while shopping?</p>-->
<p>Supervisor: Dr. Florian Meyer</p>

</ProjectHeader>

<div class="wrapper">

<p>The climate footprint of consumption in Denmark was 63 million tonnes of CO2e in 2021, which corresponds to a footprint of 11 tonnes of CO2e per person. Consumers are showing increased environmental awareness, which is influencing their shopping behaviour. At the same time, research shows that most consumers are not able to determine which behavioural changes are worthwhile in terms of sustainability and need assistance to change their behaviour, but the relevant sustainability information is often not easily available.
Our project addressed this by developing a user-friendly interface for the Green Database, which rates products based on sustainability criteria. Focusing on online shopping for fashion products, our goal was to empower consumers to make informed, eco-friendly choices. We designed a fashion comparison platform that aggregates sustainability data, enabling users to easily compare and choose sustainable products. Our human-centered design approach ensured that user requirements guided the development process.</p>

<img :src="'/images/conscious-choice-platform/conscious-choice-platform-title.png'" alt="">

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

<h4>Consumer Behaviour</h4>

<p>To create a product for sustainable shopping, it is essential to understand consumers and their needs. Our first step in this was to find and evaluate existing research in this area.</p>

<p>The majority of Europeans shop online at least once a month, using a variety of devices, including tablets, personal computers, mobile phones, wearable devices and even smart home voice assistants. Furthermore, 35% of people are using online marketplaces such as Amazon when shopping, compared to only 18% of them shopping in-stores. Based on this information, we decided to focus our project on the context of online shopping instead of shopping in physical stores and to provide a responsive design, that is usable on different devices.</p>

<ul>
    <li>if a consumer shops online is influenced by demographics, personal and product characteristics, and is preferred for convenience despite perceived risks</li>
    <li>how consumers decide which products to buy includes affordability, environmental responsibility, experience, health, and societal impact</li>
    <li>the sustainability of the consumers choices is influenced by values, social factors, awareness, and external pressures</li>
</ul>

<InfoBox>
<h2>Intention-Behavior Gap</h2>
<p>Consumers frequently disregard the environmental and social consequences of their purchases, prioritizing other factors while making buying decisions. The intention-behavior gap refers to this phenomenon, which expresses that the behaviour of individuals is not always in accordance with their intentions .</p>
</InfoBox>

<h4>Competitor Research</h4>

<p>To gain an understanding of current solutions and find out how our project can be placed in the existing space, we performed competitor research. For this, we needed to identify and profile possible competitors or related products, define a set of criteria we want to compare, compare the different competitors to each other and use the criteria as a way to narrow down the scope of our research.</p>

<p>We focused this analysis only on tier one competitors, which are direct competitors. In our case, this is other online search interfaces that focus on sustainable fashion. We selected several tier one competitors for our competitor research and created competitive profiles for them. In terms of criteria we looked at the general purpose of the product, the platforms it is available on and on what basis they evaluate sustainability.</p>

<p>We selected six competitors that can be categorised as different kinds of <strong>search interfaces on sustainable fashion</strong>: <em>Avocadostore</em>, <em>Ecowiser</em>, <em>Ethical Clothing</em>, <em>Ethical Consumer</em>, <em>Good on you</em> and <em>Project Cece</em>. We discovered that many of the search interfaces evaluate sustainability on a brand level and do not provide details on individual products. While some solutions allow users to search by products, their sustainability ranking is based on the overall brand. However, <em>Project Cece</em> is the only competitor that evaluates sustainability on a product level.</p>

<p>Furthermore, we found another category of tier one competitors: <strong>browser extensions</strong>. We identified four browser extensions for sustainable fashion: <em>askBeylinda</em>, <em>Koala</em>, <em>Shades</em> and <em>Wedge</em>. Looking at them, we noticed that all of them are limited in terms of either the e-commerce websites they work together with or the browser where they are available. Additionally, the technology of Chrome browser extensions is so far limited to desktop usage and does not support users on mobile devices.</p>

<p><strong>Conclusion</strong>: Based on our competitor research we drew different conclusions for the scope of our project. We decided for a search interface, as the data provided by Green Database ise well suited for an e-commerce-like comparison platform that fills the gap among the existing solutions, providing sustainability rankings based on the brands and not on individuals products. We decided against a browser extension as they do not always support mobile devices and we want to focus on inclusivity, as well as the fact that the oala extension by the publisher of GreenDB was not sufficiently used.</p>

<h3>Problem Formulation</h3>

<p>Based on this preliminary work we decided to focus our solution on designing a responsive comparison platform.
And based our project on the following problem formulation:</p>

<ProblemDef definition="How can we design a fashion-focused comparison platform based on the
data of the Green Database, to empower consumers to make conscious decisions and sustainable choices while shopping?" />

<p>We define a comparison platform as a website that aggregates and presents detailed information about products from multiple retailers, enabling users to compare products based on specific information, such as prices or reviews. In our case, we focus on the comparison of products based on sustainability.</p>

<h3>First Iteration - User Requirements</h3>

<h4>Interviews & Thematic Analysis</h4>

<p>To ensure that our design solution aligned with the needs of the users, we first needed to gather their requirements. For this we chose to do semi-structured interviews, as they provide a clear focus but also allow to deviate from the predefined path to get the most valuable insights from the users. We conducted 9 interviews, 6 with women and 3 with men. We chose people with ages ranging from 25 to 55, with an average age of 35.56. The interviewees' nationalities included Danish, German, Slovak, Vietnamese and Australian. We also offered the participants the choice of which language they preferred to be interviewed in. The interview lengths ranged from around 10 to 30 minutes, depending on the depth of the interviewees' answers and the number of follow-up questions.</p>

<!-- TODO: Picture: Thematic Analysis-->

<p>To analyse the collected data from the interviews, we decided to use thematic analysis, as this approach allowed us to gain rich insights and led us to specify user requirements. Based on the responses from the interview, we identified seven key themes that helped us to highlight the attitudes and behaviours of participants towards general and sustainable online shopping behaviour together with the information need and decision-making in online purchasing. These are (1) general shopping behaviour, (2) frequency of shopping, (3) search types, (4) decision making, (5) sustainability, (6) sustainable product recognition and (7) information needs in terms of sustainability. I will not go into depth about the thematic analysis and it's components here, but instead move on to the user stories we derived from it.</p>

<h4>User Stories</h4>

<p>To specify our user requirements, we wrote them down in the form of user stories. We derived user stories from the interviews by using the output of our thematic analysis and our literature review on consumer behavior. Most user stories that we derived from the academic literature on search interface functionalities and consumer behaviour include only the generic user roles of user and consumer, as these are more general needs.</p>

<img :src="'/images/conscious-choice-platform/user_story_search_behavior.png'" alt="">

<p>For the user stories of our user research, we identified different user roles or types of users from the interviews and the thematic analysis. On the highest level, we have the role of the <strong>online shop user</strong>, as this is the criteria by which we selected participants for our interviews. We used this role for the user stories that were not specific to a certain user type. We identified two types of users that differ in their search behaviour: the intentional consumer and the virtual window shopper. In the interviews, numerous participants mentioned that they search for a specific product when shopping online, we called this user role <strong>intentional consumer</strong>. On the opposite of that is the <strong>virtual window shopper</strong>, an online shop user who does not have a clear goal but browses through the products. For example one interviewee said:</p>

<Quote quote="I wanted a polo shirt from a certain brand [...] and I googled it and ended up on the website of the online shop where I ended up buying it. [...] Then I remembered that I could maybe use 1-2 new pullovers and then I just looked for pullovers." />

<p>This user is first an intentional consumer and then turns into a virtual window shopper. Another user role that was frequently represented in the interviews is the <strong>price-conscious consumer</strong>. For these consumers, price is a crucial criterion in the decision-making process regarding fashion.</p>

<img :src="'/images/conscious-choice-platform/user_story_product_information.png'" alt="">

<p>The <strong>sustainable-conscious</strong> consumer has emerged as a key user role in our user stories. This does not mean that this consumer is primarily or even solely motivated by sustainability, but that there is a certain awareness and willingness to act sustainably. Every participant in our interviews showed a general willingness to act sustainably under certain circumstances.</p>

<p>Closely linked to the role of the sustainable-conscious consumer, is the <strong>sceptical consumer</strong>. We thereby view the scepticism as not only linked to sustainability but more of a general characteristic. This user role has specific needs related to trust, as they for example might question the trustworthiness of the sustainability score provided by GreenDB. These two roles of the sustainable-conscious consumer and the sceptical consumer can pursue the same goal but sometimes have conflicting needs. The sustainable-conscious consumer, for example, wants information to be as easily accessible as possible without having to dive into detail, while the sceptical consumer has little trust in this information and therefore might want to see more details.</p>

<img :src="'/images/conscious-choice-platform/user_story_sustainability_information.png'" alt="">

<h3>First Iteration - Design</h3>

<strong><em>COMING SOON</em></strong>

<!--<h4>Competitive Reviews</h4>

<h4>Ideation</h4>

<img class="img-small-60" :src="'/images/conscious-choice-platform/sketch_summary.png'" alt="">

<img :src="'/images/conscious-choice-platform/sketch_sustainability-visualistion.png'" alt="">

<h4>Low-Fidelity Prototype</h4>

<img class="img-small-60" :src="'/images/conscious-choice-platform/low-fi_a-vs-b.png'" alt="">

<img class="img-small" :src="'/images/conscious-choice-platform/low-fi_version_a.png'" alt="">

<img class="img-small" :src="'/images/conscious-choice-platform/low-fi_version_b.png'" alt="">

<h3>First Iteration - Evaluation</h3>

<h4>User-Based Testing</h4>

<h3>Second Iteration - User Requirements</h3>

<h4>Prioritised Interface Flaws</h4>

<h3>Second Iteration - Design</h3>

<h4>Ideation</h4>

<img :src="'/images/conscious-choice-platform/design_ideation_brainstorming.png'" alt="">

<h4>High-fidelity Prototype</h4>

<img :src="'/images/conscious-choice-platform/high-fidelity-prototype.png'" alt="">

<img :src="'/images/conscious-choice-platform/high_fi_product_page.png'" alt="">

<img :src="'/images/conscious-choice-platform/high_fi_sustainability_information.png'" alt="">
-->
</div>
