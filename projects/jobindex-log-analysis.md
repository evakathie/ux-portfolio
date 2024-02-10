---
title: "Investigating the Search Behavior of Recruiters"
description: "Performing a log analysis to investigate the search behavior of recruiters using the platform Jobindex."
image: '/images/jobindex-log-analysis/jobindex-log-analysis-header.png'
imgmobile: '/images/jobindex-log-analysis/jobindex-log-analysis.png'
focus: User Research, Data Science
domain: Web
competences: Quantitative Research, Log Analysis, User Journey Mapping, Data Visualization
tools: R Studio, R
from: 'Oktober 2023'
to: 'January 2024'
year: 2024
month: 1
company: 'University of Aalborg'
---

<ProjectHeader :currentPage="this">

<p>Together with four fellow students, I performed a Log Analysis to investigate the search behavior of recruiters using the Danish platform Jobindex, as a semester project in my masterʼs degree at <router-link to="/pages/company/aalborg-university.html">University of Aalborg</router-link>. Using a donated dataset with real log data of search queries from recruiters working for Jobindex, we performed a log analysis to better understand the search behavior of recruiters.</p>
<p>Supervisor: Mesut Kaya</p>

</ProjectHeader>

<div class="wrapper">

<p>Selecting the right candidate for a position is essential to ensure the success of a business. However, finding appropriate candidates for an open position is a costly and time-consuming issue for many businesses. Recruiters use some of the most complex queries of any community, using a wide range of different expressions and actively cultivating their skills to formulate and optimize these expressions. In this academic project as part of my Masterʼs degree in Information Science, I worked with 4 fellow students to investigate the search behavior of recruiters, with a particular focus on the industry in which they search for relevant candidates. I chose this project because it involves quantitative research and log data - a data source that is often overlooked by many UX researchers but has great potential. Furthermore, this project contains real data from real users, which makes the whole project a highly relevant insight into user research.</p>

<img :src="'/images/jobindex-log-analysis/jobindex-log-analysis-title-pic.png'" alt="">

</div>

<HighlightedArea title="Summary of our Approach">
<ol>
    <li>Getting an overview of the data set and the information it contains</li>
    <li>Online research on recruiters and the recruitment process, general information seeking behavior, and related work</li>
    <li>Definition of the problem formulation and research questions</li>
    <li>Iterative Log Analysis using R in the software R Studio</li>
    <li>Interpretation of the results regarding the different research questions and particularly outstanding industries</li>
</ol>
</HighlightedArea>

<div class="wrapper">

<h2>Project Approach</h2>

<h3>Prior Research and Background Information</h3>

<p>Our first step in the project was to familiarize ourselves with the context of the research we wanted to conduct, which included understanding the context of recruitment, as well as information seeking behavior and searching for prior research in the fields.</p>

<InfoBox>
<h2>Jobindex</h2>
<p>Jobindex is Denmarkʼs largest job portal that includes both a job searching platform for job seekers as well as recruitment services for companies. Jobindex’s business model is that external companies commission Jobindex recruiters to conduct a talent search using their search engine, which includes a CV database of registered job seekers. The business model offers two different types of this service, called matching and recruiting. In matching, the recruiters take 60 minutes to search for suitable candidates and shortlist them. With recruiting, there is no time limit and the search lasts as long as it takes to find enough suitable candidates. The two services differ in the prices offered to the external company.</p>
</InfoBox>

<h4>Information Seeking Behavior</h4>

<p>To examine the search behavior of recruiters, it was essential for us to understand information seeking behavior in general and prior finds on the search behavior of recruiters. This is a short summary of what we found, to give context:</p>

<img class="img-small-40" :src="'/images/jobindex-log-analysis/information-need-iceberg.png'" alt="">
<GraphicTranscript>
<p>The graphic shows an iceberg which is partly under water. The different parts of the iceberg are labeled as follows:</p>
<ul>
    <li>Under water: Unconscious Information Need</li>
    <li>Above water (lower part): Conscious Information Need</li>
    <li>Above water (upper part): Formalized Need</li>
</ul>
</GraphicTranscript>

<p>Information seeking behavior includes activities in which a person identifies their information needs, searches for information, and uses or shares that information. To get from the information need to a final formulation (like the query entered into a search engine), a user passes several stages. The first stage is the actual need for information, which is usually unexpressed. In the second stage, this need becomes conscious and the user will then formalize it in the third stage, for example to a question to ask a person or to a search query suitable for a search engine. There are many different theoretical frameworks to explain information behavior, we explored them in our project, but I wonʼt go into this great level of detail here.</p>

<InfoBox>
<p>Creating a search query, which is a transformation of the user’s information need, is usually a difficult task for the user, especially because the user’s need is often vague. Web queries typically contain few terms, on average less than three words, and most query sessions contain only one or two queries. Users usually only view one or two pages of results and only enter simple terms into the search box, without using advanced query syntax.</p>
</InfoBox>

<h4>Recruiter Persona and User Journey Map</h4>

<p>As our research aimed to investigate the search behavior of recruiters, it was essential for us to gain knowledge about the field of recruitment and our main persona in this project: the recruiter. We therefore specifically searched for information about the recruiters and the recruitment process and combined them with knowledge about information seeking behavior.</p>

<p>The role of a recruiter at Jobindex is to search for relevant candidates for open positions by external companies. So they aim to find the candidate that best matches the criteria of a client, usually resulting in a list of candidates that get contacted about the position. For recruiters, the need for an information search arises, to identify suitable candidates. Recruiters, as professional service providers, carry out “Professional Search” as the primary search component. A professional search is performed by a professional for financial compensation, within a particular domain and/or area of expertise. It has a specified brief, a high-value outcome, and budgetary constraints such as time and money. From a behavioral perspective, it is recall-focused and highly interactive with multiple iterations. The queries used during the recruitment search are considered one of the most complex Boolean expressions among any other professions. Recruiters’ competitive advantage may stem from the collection of queries they gather over time, that become their intellectual property.</p>

<p>Using the information we found about information seeking behavior, professional search, and models about the recruitment process, for example by Breaugh (2008), and combining them with the information we got from our supervisor about the specific recruiters from Jobindex (that he gained through user interviews), we came up with the following user journey:</p>

<img class="img-desktop" :src="'/images/jobindex-log-analysis/recruiter_journey-map.png'" alt="">
<img class="img-mobile" :src="'/images/jobindex-log-analysis/recruiter_journey-map-mobile.png'" alt="">

<ol>
    <li><strong>Analyzing the job advertisement</strong> and extracting important information such as the job title and required skills</li>
    <li><strong>Formulating a search query</strong> that matches the recruitment objectives</li>
    <li><strong>Use of filters</strong> to narrow down the search to relevant candidates, according to the recruitment objectives</li>
    <li><strong>Shortlisting relevant candidates</strong> to contact about the relevant position</li>
    <li><strong>Contacting relevant candidates</strong> via email using templates available on the Jobindex platform</li>
</ol>

<h4>Prior Research in the field</h4>

<p>To gain more knowledge about the field, as well as to define the scope of our project, we looked into prior research. We found several relevant studies were conducted about the search behavior of jobseekers and recruiters. To the best of our knowledge, while there is research about recruiters’ search behavior, there is no research on how the industry influences search behavior based on quantitative data. To keep it short, this is only a brief summary of the insights we have gained in previous studies:</p>

<img class="img-original" :src="'/images/jobindex-log-analysis/recruiter-persona.png'" alt="">

<p>Recruiters...</p>

<ul>
    <li>use the most complex queries of any community, using a wide range of different search functions, like Boolean expressions, synonyms, query expansion, and abbreviations <em>(Russell-Rose &amp; Chamberlain, 2016; Spina et al., 2017)</em></li>
    <li>actively cultivate their skills to formulate and optimize their queries <em>(Russell-Rose &amp; Chamberlain, 2016; Spina et al., 2017)</em></li>
    <li>use data on knowledge, skills, and abilities from the job advertisement to perform keyword searches <em>(Bogers &amp; Kaya, 2021)</em></li>
    <li>do not review all the possible candidates but only evaluate enough results to create a list of suitable candidates <em>(Russell-Rose &amp; Chamberlain, 2016)</em></li>
    <li>use their old search queries as templates for new queries and even lend them to colleagues <em>(Russell-Rose &amp; Chamberlain, 2016; Bogers &amp; Kaya, 2021)</em></li>
    <li>aim to contact 20 candidates per position <em>(Bogers &amp; Kaya, 2021)</em></li>
    <li>tend to search further down the page and subsequent pages than usual in web search <em>(Spina et al., 2017)</em> and prefer 50-150 search results <em>(Bogers &amp; Kaya, 2021)</em></li>
    <li>see domain expertise as valuable at all stages of the search process <em>(Russell-Rose &amp; Chamberlain, 2016; Bogers &amp; Kaya, 2021)</em></li>
</ul>

<!--
<ul>
    <li>To perform keyword search, recruiters used the data on knowledge, skills, and abilities resulting from their analysis of the job advertisement as a source for search terms (Bogers &amp; Kaya, 2021)</li>
    <li>Recruiters use some of the most complex queries of any community, using a wide range of different search functions, like Boolean expressions, synonyms, query expansion, and abbreviations, and actively cultivating their skills to formulate and optimize such expressions (Russell-Rose &amp; Chamberlain, 2016; Spina et al., 2017)</li>
    <li>The majority of recruiters use their old search queries as templates for new queries, with most of them also willing to share their queries with colleagues (Russell-Rose &amp; Chamberlain, 2016; Bogers &amp; Kaya, 2021)</li>
    <li>Both recruiters and jobseekers tend to search further down the subsequent pages, with recruiters being even more persistent than jobseekers (Spina et al., 2017)</li>
    <li>Recruiters tend to be less concerned with reviewing all possible candidates, while they aim to evaluate only enough results to create a shortlist with relevant candidates (Russell-Rose &amp; Chamberlain, 2016)</li>
    <li>Recruiters prefer 50-150 search results for shortlisting relevant candidates (Bogers &amp; Kaya, 2021)</li>
    <li>Recruiters aim to contact at least 20 relevant candidates per position (Bogers &amp; Kaya, 2021)</li>
    <li>Recruiters see domain expertise as valuable at all stages of the search process (Russell-Rose &amp; Chamberlain, 2016; Bogers &amp; Kaya, 2021)</li>
</ul>
-->

<img class="img-desktop" :src="'/images/jobindex-log-analysis/jobindex_scientific-papers.png'" alt="">
<img class="img-mobile" :src="'/images/jobindex-log-analysis/jobindex_scientific-papers-mobile.png'" alt="">

<h3>Our Dataset</h3>

<p>For our search log analysis, we use a dataset that was provided to us by Jobindex. These search logs are automatically generated when Jobindex recruiters use their CV search engine. The dataset includes three data sources, in each of them the job is identified by an ID, which connects the different data sources.</p>

<ul>
    <li><strong>Query data</strong>: consists of information about the search session performed for each job listing. We define a session as the search process for one unique job. The source includes the different queries submitted by the recruiter. Each query consists of both the search query but also the filters applied, such as location and salary expectations, and the timestamps for the queries.</li>
    <li><strong>Industry data</strong>: This data source contains data on the sectors related to the job and the company for which the recruiters are looking for staff. This includes 37 industries that follow the Statistical Classification of Economic Activities by the European Union.</li>
    <li><strong>Response data</strong>: One of the tasks of a recruiter is to shortlist candidates and approach them about the open position. The candidate can then provide feedback on the job posting, and this feedback is reflected in a separate data source, which we call response data.</li>
</ul>

<img :src="'/images/jobindex-log-analysis/jobindex_case_dataframes.png'" alt="">
<p class="image-description">Screenshot of (parts of) the three data frames described above.</p>

<p>We ended up with two merged data tables: (1) Industry-Query Data and (2) Industry-Response Data. This first merge of the industry and the query data source includes 26,626 jobs are left that existed in both data sources. This in total includes 390,362 search queries. The industry-response data contains 34,830 jobs that were contained in both data sources. The distribution of jobs across the various sectors is quite similar in both data tables, but both also show large differences between the industries. The biggest industries in the dataset are (1) Wholesale and retail trade, (2) Real estate, (3) Consultancy etc., (4) Public administration, defense and compulsory social security, and (5) Financial and insurance.</p>

<img :src="'/images/jobindex-log-analysis/jobs-per-industry.png'" alt="">
<GraphicTranscript>
<p>Visualization of the jobs per industry in the data set as a bar chart. More than 25% of the jobs are in the Wholesale and retail trade industry. More than 20% are in the Real estate industry and over 10% in Consultancy etc. All the other industries are between 0% and 10%. The lowest number of jobs is in Oil refinery etc. and Mining and quarrying.</p>
</GraphicTranscript>

<h3>Problem formulation</h3>

<p>We had a lot of freedom when completing the semester project. One of our tasks was to choose a problem and research questions to define the scope of the project. We received the dataset from our supervisor, who works with the Danish company Jobindex. To formulate a problem statement and research questions, we used our knowledge of previous research and the background information described above. We also familiarized ourselves with the dataset and its contents. In the end, we identified the following problem statement:</p>

<ProblemDef definition="How can we use search log data to understand how the search behavior of recruiters
using the Jobindex search engine varies based on the industry?" />

<p>To investigate the search behavior of recruiters in the best possible way and to look at various metrics, we defined five research questions that we examined in more detail in our log analysis:</p>

<ol>
    <li>How does the <strong>use of filters</strong> by recruiters differ between various industries?</li>
    <li>How does the <strong>complexity of search queries</strong> by the recruiters differ depending on the industry?</li>
    <li>How does the industry affect the <strong>time spent</strong> on recruiting?</li>
    <li>How does <strong>seasonality</strong> influence the number of searches per industry?</li>
    <li>How does the industry affect the <strong>number of contacted candidates</strong> and their <strong>response rate</strong>?</li>
</ol>

<p>As a group, we approached the selection and answering of the research questions as an iterative process, trying to extract as much as possible from the data. With our approach, we followed grounded theory, which focuses on allowing patterns to emerge from the data. We chose the problem statement, which focused on the industries, and the resulting research questions based on our interests and the novelty of the topic after familiarizing ourselves with the data set and previous research.</p>

<h3>Log Analysis</h3>

<p>To investigate the problem of understanding how job recruiters find candidates for the job, we performed a search log analysis on query data by recruiters working at Jobindex from 2021. Performing log analysis is a powerful way to determine user behavior. Because the data is collected while the users are actively engaging with the system, it is more reliable than recalled behavior, not only because people are not always able to recall the actions they have taken, but are sometimes even unwilling to recall accurately. Of course, there are some shortcomings when using this method. One of them is that with log analysis, we are not able to ascertain any of the motivations or goals of the recruiters in the way that they do their searches.</p>

<h4>Tools and Groupwork</h4>

<p>We used R and the software R Studio for data import, cleaning, transformation, visualization, and statistical analysis. Before we started our analysis we cleaned the dataset by removing any queries outside of 2021 and having a closer look at sessions with an abnormal length. We filtered out any sessions that were shorter than 5 minutes or longer than 2 days. While some sessions can take longer, if the recruiters spend more than 2 days on a single session, it is reasonable to presume that it is not one true session. For example, that particular job might have been used for training purposes and therefore the later session should not be included in our analysis. In contrast, very short sessions could be the result of an error in the systems.</p>

<p>As a group of five people, we split the work between us by everyone being responsible for one research question. Throughout the process, we worked together as a team, having regular check-ins and sharing what we had done so far and what we were planning to do next. We also advised each other on what we wanted to do in each research question and what statistical tests could potentially be done. We also exchanged ideas when coding and helped each other when we encountered problems.</p>

<h4>My Research Question - Contacted Candidates &amp; Responses</h4>

<p>I had the main responsibility to work on research question 5. While this project was a group effort and I got help from the others, as well as me contributing to the other research questions, I will mainly go into detail about the research question I primarily worked on:</p>

<ProblemDef definition="How does the industry affect the number of contacted candidates and their response rate?" />

<p>The research question was built up iteratively, starting with a research question that only focused on the candidatesʼ responses. While I was experimenting with the data set and trying to find metrics to answer the research question, I realized that it would also make sense to look at the number of candidates contacted. So I added this to the research question.</p>

<h5>Identifying Metrics</h5>

<p>Finding the right metrics to answer the research question was an iterative process as well and during the process I ran into a few issues/ realizations about the data set that led to change the course along the way. Below, I will list a few failed attempts to illustrate how they led me to change the course and iterate on the analysis:<p>

<p><strong>Dropped the Candidate Response Time.</strong> Contrary to what we had assumed from our literature research, recruiters did not first create a shortlist of candidates in the data set and then contact the whole list after the search process was completed. Instead, they appeared to contact candidates during the search session. This became clear to me when I tried to calculate how long it took for a candidate to respond to a message from the recruiters. The dataset did not give a time of contact, only the time of the search session and the time when the candidate replied. My calculation was the time between the end of the search session and the candidateʼs response - which often resulted in negative numbers. I therefore had to drop the candidate response time metric, as the end time of the search session was not a meaningful data point to calculate.</p>

<p><strong>Merge issues.</strong> For all of us, it was the first time using R and R Studio - apart from the lecture. So we made a few beginner errors with it. One worth mentioning is, that the data set we got was spread out over several .csv files and we had to merge them to work with them. Firstly, we used the right R function for it<em>inner_join()</em>, but didnʼt give it enough arguments (the identifier was missing), this led to some smaller merging issues, that we only found and corrected at a later time. Moreover, because of performance issues we never merged all the .csv files into one big dataframe in R and only later noticed that the two smaller merges we did: the merge of industry and query data and the merge of industry and response data, had a slightly different set of jobs. This nevertheless wasnʼt a big problem in the end and we just made it clear in our report.</p>

<p>After a lot of experimentation with the dataset, I ended up with three main measures:</p>

<ul>
<li><strong>Number of contacted candidates</strong>: how many candidates are contacted per job on average (per industry).</li>
<li><strong>Total response rate</strong>: how many candidates answered the recruitersʼ requests (per industry, in %).</li>
<li><strong>Responses per type</strong>: how many candidates answered the recruitersʼ requests positively or negatively (per industry, in %).</li>
</ul>

<p>The findings of this research question can be seen as a measure of success. As the dataset didnʼt include any click data or data about the search results, this is the best metric we could get to interpret the success of the searches.</p>

<h5>Number of Contacted Candidates</h5>

<p>This metric examines how many candidates a recruiter has contacted for a job and compares the different industries available in the data set. This metric examines how many candidates a recruiter has contacted for a job and compares the different industries in the data set. In R, I counted the number of different CV_IDs (an anonymized way to represent a candidate) per job and then calculated an average per industry. I also calculated the average, median, and standard deviation across all industries:</p>

<CodeBlock language="R">
<p class="code-comment">
&#35 Calculate the number of contacted candidates per job<br />
&#35 and then an average for each industry</p>
<p>contacted_candidates <- industry_response_data %>%<br />
  <span class="mobile-display-none">&nbsp; &nbsp; </span>group_by(JOB_ID, INDUSTRY_SECTOR_NAME_EN, INDUSTRY_TOP_LEVEL) %>%<br />
  <span class="mobile-display-none">&nbsp; &nbsp; </span>summarise(N_CONTACTED_CANDIDATES = n_distinct(CV_ID)) %>%<br />
  <span class="mobile-display-none">&nbsp; &nbsp; </span>group_by(INDUSTRY_SECTOR_NAME_EN, INDUSTRY_TOP_LEVEL) %>%<br />
  <span class="mobile-display-none">&nbsp; &nbsp; </span>summarise(MEAN_CONTACTED_CANDIDATES = mean(N_CONTACTED_CANDIDATES))</p>
<p class="code-comment">
&#35 Descriptive statistics on the number of contacted candidates per industry<br />
&#35 Average, median, standard deviation, minimum, maximum</p>
<p>summary(contacted_candidates$MEAN_CONTACTED_CANDIDATES)<br />
sd(contacted_candidates$MEAN_CONTACTED_CANDIDATES)</p>
</CodeBlock>

<p>To visualize the results for our report and better comparability, I decided to use a bar chart and created it with R, using the <em>ggplot</em>-function from <em>tidyverse</em>:</p>

<CodeBlock language="R">
<p class="code-comment">
&#35 Bar chart visualizing the mean number of contacted candidates per industry</p>
<p>contacted_candidates %>%<br />
  <span class="mobile-display-none">&nbsp; &nbsp; </span>ggplot(aes(y = reorder(INDUSTRY_SECTOR_NAME_EN, MEAN_CONTACTED_CANDIDATES), x = MEAN_CONTACTED_CANDIDATES)) + <br />
  <span class="mobile-display-none">&nbsp; &nbsp; </span>geom_col(fill = 'lightskyblue4') +<br />
  <span class="mobile-display-none">&nbsp; &nbsp; </span>theme_minimal() +<br />
  <span class="mobile-display-none">&nbsp; &nbsp; </span>labs(<br />
    <span class="mobile-display-none">&nbsp; &nbsp; &nbsp; &nbsp; </span>title = “Mean Number of Contacted Candidates per Job“,<br />
    <span class="mobile-display-none">&nbsp; &nbsp; &nbsp; &nbsp; </span>x = “Contacted Candidates (Mean)“,<br />
    <span class="mobile-display-none">&nbsp; &nbsp; &nbsp; &nbsp; </span>y = “Industry“,<br />
  <span class="mobile-display-none">&nbsp; &nbsp; </span>)</p>
</CodeBlock>

<p>On average across all industries, 22,09 candidates were contacted per job, with a median of 22,19 and a standard deviation of 1,52. However, differences between the industry sectors can be recognized - I will not dive into the specific numbers here, but move on to my interpretation. To see the specific results please see the bar chart and textual representation of it, below.</p>

<img :src="'/images/jobindex-log-analysis/average-contacted-candidates.png'" alt="">
<GraphicTranscript>
<p>The graphic shows a bar chart illustrating the average number of contacted candidates for 37 different industries. The industry sector with the highest average of contacted candidates per job is Telecommunications with an average of 24,50. This is followed by 24,35 average contacted candidates in Accommodation and food service activities and 24,19 in Manufacture of plastic, glass and concrete. The industry sector Electricity, gas, steam etc. has the lowest number of candidates contacted with an average of 18,90. The averages for the sectors Oil refinery etc. with 19,44 and Mining and quarrying with 19,81 are only slightly higher.</p>
</GraphicTranscript>

<p>The differences in the average of contacted candidates between the industries could be explained through various reasons:</p>
<ul>
    <li>higher availability of suitable candidates</li>
    <li>indicator that these industries get a higher number of negative or no responses and therefore recruiters learned to contact more candidates to find a match for the position</li>
    <li>high competition for qualified professionals or specific expertise needed may prompt recruiters to cast a wider net to find individuals with the required skills</li>
</ul>

<p>Below-average numbers could be explained by the fact that fewer qualified candidates are available in these industries and therefore the desired number of 20 candidates (that we extracted from former research) cannot be found. One explanation for this would be:</p>

<ul>
    <li>niche skill requirements and therefore a small pool of qualified candidates</li>
    <li>indicator that the recruiters are more successful in their outreach and therefore learned that it is enough to contact fewer candidates</li>
</ul>

<h5>Response Rate</h5>

<p>The Response Rate metric is split into different metrics: the overall response rate (positive and negative), the response rate per type - positive, negative, and no response.</p>

<p><strong>Overall Response Rate.</strong> This metric can be used as an indicator of successful communication on the side of the recruiter. Even though a response might not be positive, that a candidate answers at all can mean different things:</p>

<ul>
    <li>effective and engaging communication by the recruiter and therefore indicate that recruiters in these industries are successful in encouraging candidates to provide feedback</li>
    <li> reputation of certain industries</li>
    <li>industry-specific learned behavior, which could make candidates feel more obliged to respond to recruiters</li>
    <li>contextual circumstances such as a high unemployment rate</li>
</ul>

<!--<CodeBlock language="R">
<p class="code-comment">
&#35 Calculate the number of responses per industry (N_RESPONSES_INDUSTRY),<br />
&#35 the total number of responses (Positive and Negative Responses, without no Response)<br />
&#35 in total numbers (TOTAL RESPONSES) and percent (TOTAL_RESPONSES_PCT)</p>
<p>responses_per_industry <- industry_response_data %>%<br />
  &nbsp; &nbsp;group_by(INDUSTRY_SECTOR_NAME_EN, INDUSTRY_TOP_LEVEL) %>%<br />
  &nbsp; &nbsp;summarise(N_RESPONSES_INDUSTRY = n(),<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; TOTAL_RESPONSES = sum(RESPONSE_TYPE != 0),<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; TOTAL_RESPONSES_PCT = TOTAL_RESPONSES / N_RESPONSES_INDUSTRY * 100)</p>
<p class="code-comment">
&#35 Descriptive statistics on the percent of total responses per industry<br />
&#35 Average, median, standard deviation, minimum, maximum</p>
<p>summary(responses_per_industry$TOTAL_RESPONSES_PCT)<br />
sd(responses_per_industry$TOTAL_RESPONSES_PCT)</p>
</CodeBlock>

<CodeBlock language="R">
<p class="code-comment">
&#35 Bar chart visualizing the number of responses per industry in percent</p>
<p>responses_per_industry %>%<br />
  ggplot(aes(y = reorder(INDUSTRY_SECTOR_NAME_EN, TOTAL_RESPONSES_PCT), x = TOTAL_RESPONSES_PCT)) +<br />
  geom_col(fill = 'lightskyblue4') +<br />
  theme_minimal() +<br />
  labs(<br />
    &nbsp; &nbsp; title = "Percentage of Total Responses per Industry",<br />
    &nbsp; &nbsp; x = "Total Responses (in %)",<br />
    &nbsp; &nbsp; y = "Industry",<br />
  )</p>
</CodeBlock>-->

<p><strong>Responses per Type.</strong> To look at the responses more thoroughly I split them into the type of response, that a candidate can give: they can answer a recruiterʼs request positively, negatively, or not at all. The percentages of no responses are consequently the opposite of the overall response rate.</p>

<CodeBlock language="R">
<p class="code-comment">
&#35 Calculate the number of responses per response type<br />
&#35 in total numbers (RESPONSE_COUNT) and percent (RESPONSE_PERCENT)
</p>
<p>responses_per_type <- industry_response_data %>% group_by(INDUSTRY_SECTOR_NAME_EN, INDUSTRY_TOP_LEVEL, RESPONSE_TYPE_TXT) %>%<br />
  <span class="mobile-display-none">&nbsp; &nbsp;</span>summarise(RESPONSE_COUNT = n()) %>%<br />
  <span class="mobile-display-none">&nbsp; &nbsp;</span>mutate(RESPONSE_PERCENT = RESPONSE_COUNT / sum(RESPONSE_COUNT) * 100)
</p>
<!--<p class="code-comment">
&#35 Table showing only the number of<br />
&#35 positive responses per industry</p>
<p>
responses_per_type %>% filter(RESPONSE_TYPE_TXT == “Positive Response“) %>% view()
</p>
<p class="code-comment">
&#35 Table showing only the number of<br />
&#35 negative responses per industry</p>
<p>responses_per_type %>% filter(RESPONSE_TYPE_TXT == “Negative Response“) %>% view()</p>
<p class="code-comment">
&#35 Table showing only the number of<br />
&#35 no responses per industry</p>
<p>responses_per_type %>% filter(RESPONSE_TYPE_TXT == “No Response“) %>% view()</p>-->
</CodeBlock>

<p>To visualize the results I created three bar charts, that were merged into the same visualization, using the ggplot-function from tidyverse:</p>

<CodeBlock language="R">
<p class="code-comment">
&#35 Merging the new dataset with the responses per response type<br />
&#35 and the dataset with the total responses per industry for ordering in the plot</p>
<p>responses_per_type <- inner_join(responses_per_type, responses_per_industry)</p>
<p class="code-comment">
&#35 Bar chart visualizing the responses per industry in percent<br />
&#35 different fills for the type of response (positive, negative, none)</p>
<p>
responses_per_type %>%<br />
  <span class="mobile-display-none">&nbsp; &nbsp;</span>ggplot(aes(y = reorder(INDUSTRY_SECTOR_NAME_EN, TOTAL_RESPONSES_PCT),<span class="mobile-display-none"><br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>x = RESPONSE_PERCENT, fill = RESPONSE_TYPE_TXT)) +<br />
  <span class="mobile-display-none">&nbsp; &nbsp;</span>geom_col() +<br />
  <span class="mobile-display-none">&nbsp; &nbsp;</span>facet_wrap(vars(RESPONSE_TYPE_TXT)) +<br />
  <span class="mobile-display-none">&nbsp; &nbsp;</span>theme_minimal() +<br />
  <span class="mobile-display-none">&nbsp; &nbsp;</span>scale_fill_manual(values = c(“#912828“, “#56758B“, “#5F6F52“))+<br />
  <span class="mobile-display-none">&nbsp; &nbsp;</span>labs(<br />
    <span class="mobile-display-none">&nbsp; &nbsp; &nbsp; &nbsp;</span>title = “Percentage of Responses per Response Type per Industry“,<br />
    <span class="mobile-display-none">&nbsp; &nbsp; &nbsp; &nbsp;</span>x = “Responses (in %)“,<br />
    <span class="mobile-display-none">&nbsp; &nbsp; &nbsp; &nbsp;</span>y = “Industry“,<br />
    <span class="mobile-display-none">&nbsp; &nbsp; &nbsp; &nbsp;</span>fill = “Response Type“<br />
  <span class="mobile-display-none">&nbsp; &nbsp;</span>)</p>
</CodeBlock>

<p>Above all industries the average of <strong>positive responses</strong> was 8,97%, with a median of 8,96% and a standard deviation of 1,16%. There are some smaller visible differences between industries, as you can see in the chart below, and more detail in the textual description of the graphic. Differences in the number of positive responses could either be explained by successful communication and selection of candidates by the recruiters or through different market dynamics. One noticeable insight is that four of the ten industries with the most positive responses
belong to the manufacturing sector.</p>

<p>The average percentage of <strong>negative responses</strong> was 24,99%, with a median of 25,20% and a standard deviation of 2,53%. A high number of negative responses does not necessarily mean that the recruiter is unsuccessful. The fact that candidates respond at all shows that there is a sense of commitment to the recruiters in these industries. Eight of the ten industries with the highest rate of negative responses belong to the higher-level sector of manufacturing.</p>

<p>Additionally, on average across all industries, 65,96% of inquiries are <strong>not answered</strong>, the median
is 66,23% with a standard deviation of 2,57%. Differences between the industries correspond to the reasons explained above for a low or high overall response rate, as no response is the direct opposite of the overall response rate.</p>

<img :src="'/images/jobindex-log-analysis/responses-per-type.png'" alt="">

<GraphicTranscript>
<p>The highest percentage of <strong>positive responses</strong> is in the industry Manufacture of chemicals with 11,24%. This sector is followed by Other service activities with 11,04% and Electricity, gas, steam etc. with 10,70% of positive responses. The industry sector with the lowest number of positive responses is Residential care with 6,09%, shortly before that is Oil refinery etc. with 7.07% and Telecommunications with 7,26%.</p>

<p>The industry sector with the highest number of <strong>negative responses</strong> is Textiles and leather products with 30,27%, followed by Basic metals, fabricated metal prod. with 29,40% and Manufacturing of food products, beverages, tobacco with 28,52% negative responses. The lowest number of negative responses is 18,66% in the Electricity, gas, steam etc. sector. Slightly higher are the negative responses in the sectors Arts, entertainment, recreation activities with 21,01% and Pharmaceuticals with 21.61%.</p>

<p>The industry sector with the highest number of <strong>no responses</strong> is Electricity, gas, steam etc. with 70,64%, followed by Arts, entertainment, recreation activities with 70,06% and Construction with 69,64% no responses. The lowest rate of no responses is 60,42% in the industry sector Textiles and leather products. Just above this are Basic metals, fabricated metal products with 61.59% and Manufacture of chemicals with 62,44%.</p>
</GraphicTranscript>

<h5>Correlation between the Metrics</h5>

<p>Lastly, I tested the different metrics of my research question for possible correlations. To test the correlation and get a correlation coefficient, p-value, and confidence intervals, I used the <em>cor.test()</em> function in R and therefore performed a Pearson’s product-moment correlation test.</p>

<CodeBlock language="R">
<p class="code-comment">
&#35 Correlation test between number of contacted candidates and total response rate
</p>
<p>cor.test(rq5_data$MEAN_CONTACTED_CANDIDATES, rq5_data$TOTAL_RESPONSES_PCT) %>% view()</p>
</CodeBlock>

<p>Afterward, I visualized the positive correlations in a scatter plot with a linear regression line. This was a complicated process, as it is complex to visualize this large number of data points (one data point per industry) so that they can still be assigned to a specific industry. In the end, I chose a palette of colors that are as distinguishable as possible. Similar industries, such as the manufacturing industries, have the same color spectrum. To make the differentiation even easier, I have also added four different shapes. The mixture of colors and shapes is intended to improve the readability of the diagram.</p>

<CodeBlock language="R">
<p class="code-comment">
&#35 Add colors to visualize the different industries</p>
<p>industry_colors <- c(“#5E4400“, “#7E0000“, “#429B46“, “#565E00“, “#00237E“, “#8F9779“, “#C45656“, “#E6BC26“, “#0038C9“,<span class="mobile-display-none"><br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>“#008080“,“#58BEBE“, “#E37A00“, “#7E0072“, “#0047FF“, “#356EFF“, “#779DFF“, “#AFC6FF“, “#AAB5D2“,<span class="mobile-display-none"><br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>“#8590AC“, “#EA91D1“, “#BEBEBE“, “#A6814C“, “#4E5566“, “#907799“, “#AF48A5“, “#EED8AE“, “#FFA53C“,<span class="mobile-display-none"><br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>“#FC7171“, “#E386D9“, “#808080“, “#414141“, “#4F0768“, “#778899“, “#D77979“, “#895FBF“, “#000000“)</p>

<p class="code-comment">
&#35 Add shapes for better readability</p>
<p>industry_shapes <- c(16, 17, 18, 15, 16, 17, 18, 15, 16, 17, 18, 15, 16, 17, 18, 15, 16, 17, 18, 15,<span class="mobile-display-none"><br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>16, 17, 18, 15, 16, 17, 18, 15, 16, 17, 18, 15, 16, 17, 18, 15)</p>

<p class="code-comment">&#35 Create a plot with the data points of the industries and the linear correlation line</p>
<p>ggplot(rq5_data, aes(x = MEAN_CONTACTED_CANDIDATES, y = TOTAL_RESPONSES_PCT,<br />
    <span class="mobile-display-none">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>color = INDUSTRY_SECTOR_NAME_EN, shape = INDUSTRY_SECTOR_NAME_EN)) +<br />
  <span class="mobile-display-none">&nbsp; &nbsp;</span>geom_point(size = 4, alpha = 0.8) +<br />
  <span class="mobile-display-none">&nbsp; &nbsp;</span>geom_smooth(aes(group = 1), method = “lm“, se = FALSE, col = “#56758B“) +<br />
  <span class="mobile-display-none">&nbsp; &nbsp;</span>labs(<br />
    <span class="mobile-display-none">&nbsp; &nbsp;&nbsp; &nbsp;</span>x = “Mean Number of Contacted Candidates“,<br />
    <span class="mobile-display-none">&nbsp; &nbsp;&nbsp; &nbsp;</span>y = “Total Number of Responses (in %)“,<br />
    <span class="mobile-display-none">&nbsp; &nbsp;&nbsp; &nbsp;</span>title = “Contacted Candidates vs. Response Rate“<br />
  <span class="mobile-display-none">&nbsp; &nbsp;</span>) +<br />
  <span class="mobile-display-none">&nbsp; &nbsp;</span>scale_color_manual(name = “Industry“, values = industry_colors) +<br />
  <span class="mobile-display-none">&nbsp; &nbsp;</span>scale_shape_manual(name = “Industry“, values = industry_shapes) +<br />
  <span class="mobile-display-none">&nbsp; &nbsp;</span>theme_minimal()</p>
</CodeBlock>

<p>The number of contacted candidates and the percentage of total responses per industry show a moderate correlation. This means that as the number of candidates contacted increases, the overall response rate also rises noticeably and the other way around.</p>

<img :src="'/images/jobindex-log-analysis/cor-test_contacted-candidates_response-rate.png'" alt="">

<GraphicTranscript>
<p>The scatter plot shows the number of contacted candidates on the x-axis and the percentage of total responses on the y-axis. Every industry is one data point in the plot. Additionally, there is a linear correlation line, showing the moderate correlation.</p>
<p>The estimated correlation coefficient is 0.43, indicating a moderate positive linear relationship. The confidence interval, which ranges from 0.12 to 0.67, underlines the accuracy of this estimate. The low p-value of 0.009 suggests that the observed correlation is statistically significant.</p>
</GraphicTranscript>

<p>Nevertheless, a correlation test on the number of candidates contacted in relation to the percentage of positive responses shows no significant correlation. Contacting more candidates is therefore not related to more positive responses. However, the number of applicants contacted shows a moderately positive correlation with the percentage of negative responses. This means that as the number of applicants contacted increases, the number of negative responses rises. This suggests that contacting more candidates is not enough to increase success.</p>

<img :src="'/images/jobindex-log-analysis/cor-test_contacted-candidates_negative-response-rate.png'" alt="">

<GraphicTranscript>
<p>The scatter plot shows the number of contacted candidates on the x-axis and the percentage of negative responses on the y-axis. Every industry is one data point in the plot. Additionally, there is a linear correlation line, showing the moderate positive correlation.</p>
<p>The correlation coefficient is 0.47 and the p-value is 0.0040, which indicates statistical significance. The confidence interval, which ranges from 0.17 to 0.69, emphasises the accuracy of this estimate.</p>
</GraphicTranscript>

<h3>Summary of our findings</h3>

<p>The first three research questions focused on the complexity of the search by recruiters, while the fourth question looked at seasonal patterns and the final research question, which I mainly worked on, served as a measure of success. I will outline the key findings for all research questions below:</p>

<h4>RQ1: Filter Usage</h4>

<p>In our first research question, we investigated how the filter usage by recruiters differs between various industries. We found differences in the overall filter usage per industry as well as in which specific filters the recruiters use in various industries. These differences can not only be influenced by the nature of the industry but also by the nature and requirements of the job offer, recruiters’ preferences, and experience. This shows that the industry influences the recruiters’ search behavior in terms of filter usage, indicating that industries have varying needs. We found that filters that provide autogenerated results are used the most by each industry, thus speeding up and easing the process.</p>

<img :src="'/images/jobindex-log-analysis/research-question-1.png'" alt="">

<h4>RQ2: Search Query Complexity</h4>

<p>The second research question examined the complexity of the search queries by the recruiters between the industries. We observed differences between the industries in all our measures of complexity, the mean number of unique queries, the mean character count, the mean unique search terms as well as the usage of Boolean operators and wildcards. This leads us to confirm that Jobindex recruiters perform professional searches throughout the recruitment process. Additionally, our results indicate that recruiters in different industries need varying skills and showcase different needs of complexity in terms of search queries.</p>

<img :src="'/images/jobindex-log-analysis/research-question-2.png'" alt="">

<h4>RQ3: Time spent on Recruiting</h4>

<p>Our third research question investigated how the time spent on recruiting, as well as the usage of different service types offered by Jobindex - that vary in the time that recruiters spend on the search -, vary between different industries. Again, we found differences between the various industries in both metrics. The mean time spent on a search for relevant candidates indicates that recruiters have varying needs on how much time it takes to find relevant candidates across different industries.</p>

<img :src="'/images/jobindex-log-analysis/research-question-3.png'" alt="">

<h4>RQ4: Seasonality Patterns</h4>

<p>In our fourth research question, we examined the impact of seasonality on recruitment across industries. We observed different patterns on how the seasonality impacts the performed search sessions. While some industries showed a more stable amount of search sessions throughout the year with only smaller peaks or lows, others had considerably high amounts of differences between the months. One common pattern was also an increase in performed search sessions towards the end of the year. This indicates, that the industry for which a search is performed, affects the search behavior of the recruiters regarding seasonality.</p>

<img :src="'/images/jobindex-log-analysis/research-question-4.png'" alt="">

<h4>RQ5: Contacted Candidates & Response Rates</h4>

<p>The last research question examined how the industry affects the number of candidates that a recruiter contacts per job as well as the responses of the candidates. We observed differences between the industries in the number of contacted candidates as well as in whether or not a contacted candidate responded to the recruiters’ inquiry. Additionally, differences could be seen in whether the candidates responded positively or negatively to the recruiter. The results show that there might be differences in how many relevant candidates the recruiters are able to find depending on the industry. Moreover, the industry seems to affect whether a candidate responds at all and
whether the answer given is positive or negative.</p>

<h4>Industry-specific results</h4>

<p>We found many different patterns for specific industries across the five research questions. To mention all of them in this project description would be too much, therefore I will give only one example:</p>

<p><em><strong>Pharmaceuticals</strong> The Pharmaceuticals industry is the one with the highest amount of filter usage. Regarding all filter usage, the industry used the most filters such as Language Skill and Language Level from Advanced filters and Education from Combined filters. Creating search queries for Pharmaceuticals appears to be quite complex. It has above-average query length, the fifth-highest number of unique search terms, the fifth-highest use of Boolean operators, and the fourth-highest usage of wildcards in search queries. A slight steady increase in the number of search sessions can be seen until May when the number starts decreasing again. The sector has the seventh lowest number of contacted candidates. It also has the third-fewest negative responses, while it is close to the average in terms of positive responses and the overall response rate. Additionally, it is the industry with the fourth-lowest time spent on recruiting. The data shows that the Pharmaceuticals industry might have high requirements for candidates, which can be seen in the complexity of the queries and the filter usage, while there might not be many available candidates, which explains the low number of contacted candidates as well as the low time spent on recruitment.</em></p>

</div>


<HighlightedArea title="Short Conclusion of the Research">
<ul>
    <li>There are differences in the industries across all research questions</li>
    <li>After looking at all of our metrics, the below industries stood out and we drew the following conclusions:
        <ul>
            <li><strong>Agriculture, forestry and fishing</strong>: The complexity of the queries in combination with the low filter usage and the low number of contacted candidates leads us to the assumption, that there might not be many candidates in this industry.</li>
            <li><strong>Electricity, gas, steam etc.</strong>: It seems to be difficult for this industry to find qualified candidates, which is reflected in the complex queries and the high level of filtering. This could also explain why few candidates were contacted and the low response rate supports this.</li>
            <li><strong>Manufacture of chemicals</strong>: This industry stands out because recruiters in this industry perform complex searches and use many filters, but still spend little time and are very successful in their inquiries.</li>
            <!--<li><strong>Mining and quarrying</strong>: we assume that it is hard for this industry to find qualified candidates.</li>-->
            <li><strong>Oil refinery etc.</strong>: The data shows that despite the high level of complexity, little time is spent on recruiting, and not many positive responses are received. This could be explained by a lack of candidates in this industry.</li>
            <li><strong>Pharmaceuticals</strong>: The data shows that the Pharmaceuticals industry might have high requirements for candidates, which can be seen in the complexity of the queries and the filter usage, while there might not be many available candidates, which explains the low number of contacted candidates as well as the low time spent on recruitment.</li>
            <li><strong>Real estate</strong>: The industry is noteworthy because it is the most stable industry in all the research questions. Recruiters seem to be able to find a sufficient amount of candidates without a higher-than-average effort for recruiting.</li>
            <li><strong>Residential care</strong>: We suspect that there are not many candidates for too many vacancies in this sector.</li>
            <li><strong>Telecommunications</strong>: There might be a lot of available candidates in the Telecommunications industry so recruiters do not have to spend a lot of time and effort on their searches.</li>
            <li><strong>Textiles and leather products</strong>: The industry shows a strong commitment from candidates with diverse responses, which, together with the high time spent, could be an indicator of a strategic approach to recruitment.</li>
            <!--<li><strong>Wood and paper products and printing</strong>: our data leads us to the assumption that it might be easy in the Wood and paper products and printing to find relevant candidates.</li>-->
        </ul>
    </li>
</ul>
</HighlightedArea>

<div class="wrapper">

<h3>Implications</h3>

<p>Our analysis of a high amount of data reveals many interesting insights into the field of professional search and especially recruiter search behavior. Even though it would be helpful to enrich our data with qualitative research like user interviews or a usability test of the Jobindex search interface, it has many interesting implications:</p>

<ul>
    <li><strong>UX Design</strong>: Improving search interfaces for recruiters</li>
    <li><strong>For Recruiters</strong>: Learning the importance of Search strategies &amp; domain knowledge</li>
    <li><strong>Industry Knowledge</strong>: Discover trends/ issues in industries</li>
</ul>

<img class="img-desktop" :src="'/images/jobindex-log-analysis/sharktank_presentation.png'" alt="">
<img class="img-mobile" :src="'/images/jobindex-log-analysis/sharktank_presentation-mobile.png'" alt="">

<p class="image-description">Our presentation slides for a 5-minute Shark Tank presentation at the university, to summarize our project for our fellow students in a non-scientific way.</p>

</div>
