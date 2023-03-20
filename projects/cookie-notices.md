---
title: "Usability of Cookie Notices"
description: "I conducted an eye-tracking study to investigate the usability of common types of cookie notices, and designed a prototype for better usability."
image: '/images/cookie-notices/cookie-notices-header.png'
imgmobile: '/images/cookie-notices/cookie-notices.png'
competences: UX Research, Eye-tracking, Prototyping, Web Development
tools: Tobii Studio, Microsoft Excel, SPSS, HTML & CSS, Sketch
from: 'November 2019'
to: 'September 2020'
year: 2020
month: 9
---

<ProjectHeader :currentPage="this">
<p>Analysis of the usability of cookie notices via an eye-tracking research as part of my bachelor thesis. In particular, I compared four common types of cookie notices on the basis of various eye-tracking metrics and the answers to a questionnaire in a resarch with 30 participants. Additionally, I created a wireframe of a user-friendly cookie notice based on the findings.</p>
</ProjectHeader>

<div class="wrapper">

<p>Nowadays nearly every website provides cookie notices. This is a legal obligation and not well received by a lot of website owners. But what about the website users point of view? In 2020, I tested the usability of four common cookie notices in a study, using eye-tracking and questionnaires, as part of my bachelor thesis. And in this article, I will give you a summary of what I did and what my findings where. Additionally, I created a prototype for a more user-friendly cookie notice and give some general tips on their design.</p>

<img class="img-small" :src="'/images/cookie-notices/cookie-notices-wireframe.png'" alt="">

</div>

<HighlightedArea title="Summary of my Approach">
<ol>
    <li>Research on related work and the legal situation regarding cookie notices</li>
    <li>Analysis of the cookie notices of the most visited websites in Germany (Alexa Topsites)</li>
    <li>Planning and execution of the eyetracking research</li>
    <li>Evaluation and analysis of the results using Microsoft Excel and SPSS</li>
    <li>Creation of a wireframe of a user-friendly cookie notice</li>
</ol>
</HighlightedArea>

<div class="wrapper">

<h2>Project Approach</h2>

<h3>What types of Cookie Notices do exist?</h3>

<p>After the implementation of the GDPR in May 2018, the number of cookie notices on the 500 most visited websites in the EU member states increased to 62%. For my analysis and study, I took the six categories of cookie notices out of the paper “We Value Your Privacy… Now Take Some Cookies: Measuring the GDPR’s Impact on Web Privacy” by Degeling et al. and consolidated them into 5 types:</p>

<ul>
    <li>
        <strong>No option</strong>: the user is only informed about the use of cookies, in some cases there is also a close button/ buttcon.<br />
        <img class="img-small" :src="'/images/cookie-notices/cookie-notice-nooption.png'" alt="A cookie notice showing the text 'We use cookies to analyze user behavior and optimize the usability of the website. You can learn more in our privacy policy', where 'privacy policy' is a link.">
    </li>
    <li>
        <strong>Confirmation</strong>: the user is informed about the use of cookies and can agree to it by clicking on a consenting button, for example “I agree” or “Ok”.<br />
        <img class="img-small" :src="'/images/cookie-notices/cookie-notice-confirmation.png'" alt="The same cookie notice as before, but with a 'Accept'-button.">
    </li>
    <li>
        <strong>Binary</strong>: the user is informed about the use of cookies and can decide whether they want to accept or refuse.<br />
        <img class="img-small" :src="'/images/cookie-notices/cookie-notice-binary.png'" alt="The same cookie notice as the first one, but with two buttons: 'Decline' and 'Accept'.">
    </li>
    <li>
        <strong>Category</strong>: the user is informed about the use of cookies and can select the degree of consent by choosing between different categories of cookies, like “Required Cookies” and “Marketing Cookies”. <em>— In the original paper this where two categories: “Slider” and “Checkbox”. The difference was in the control being used, but they give the user the same choice. I consolidated them because the type of UI control is less relevant for my study.</em><br />
        <img class="img-small" :src="'/images/cookie-notices/cookie-notice-category.png'" alt="The same cookie notice as the first one, but with three categories with checkboxes: 'Functional cookies', 'Analytical cookies' and 'Marketing cookies'. 'Functional cookies' is selected and read-only. The other checkboxes are not selected but active. On the right side is a 'Accept'-button. ">
    </li>
    <li>
        <strong>Vendor</strong>: the user is informed about the use of cookies and can choose for each specific third-party cookie whether to accept it or not.<br />
        <img class="img-small" :src="'/images/cookie-notices/cookie-notice-vendor.png'" alt="The same cookie notice as the first one, but with seven different companies/ services with checkboxes like 'Facebook' or 'Google Analytics'. None of the checkboxes is selected. On the right side is a 'Accept'-button. ">
    </li>
</ul>

<p>I did an analysis of a random sample of 100 websites from the “Top Sites in Germany” listing by Alexa (500 most visited websites in Germany):</p>

<p>The most used types of cookie notices were Confirmation (43 notices) and No Option (15 notices). 5 notices were Binary and 1 offered a choice of Categories. None of the notices did provide a choice of Vendor.</p>

<p>In 18 of the notices, another cookie setting was “hidden”. For example, by clicking on a button or link, a popup with further setting options appears or the notice enlarges and thus offers more options. 12 of these hidden interaction possibilities offered a choice of cookie categories. 2 could be assigned to the category Vendor and 4 of the notices offered both a choice of categories and a choice of vendors.</p>

<img :src="'/images/cookie-notices/cookie-notice-websites.png'" alt="Screenshots of a sample of four different landing pages of websites. Three of them show a cookie notice. One is the category Confirmation, the other two show a chance to see more options next to 'Accept'.">

<p>I also examined the cookie notices for the use of dark patterns. One or more types of nudging (Design elements that influence the behavior of the user) were applied to 21 notices. And 22 notices used the Auto Accept mechanism, where the notice is automatically accepted if the user interacts with the website or after a certain amount of time.</p>

<p>Additionally, I analyzed the position, size and content of cookie notices but this would get a little too far in this article and isn’t relevant for the eye-tracking study I conducted.</p>

<h3>Eye-tracking study</h3>

<p>I examined and compared the usability of four different kinds of cookie notices in an eye-tracking research. I did consider cookie notices as a part of the webpage and therefore as part of the overall user experience. Users enter a website with a specific goal, for example, to search for information. A cookie notice could be a distraction from this goal and therefore affect the user experience of the website and the overall satisfaction of the user.</p>

<img class="img-small" :src="'/images/cookie-notices/study-structure.png'" width="50%" alt="">

<p>To analyze the usability of different cookie notices, I considered the following research questions:</p>

<ol>
    <li>How intensively does the user engage with the cookie notice?</li>
    <li>To what extent does the cookie notice fulfill its goal of informing the user?</li>
    <li>How long does it take the user to make their decision?</li>
</ol>

<p>The questions were chosen to cover the three most important aspects of user experience: the effectivity, efficiency, and satisfaction of achieving the goal.</p>

<h4>Study structure</h4>

<p>The study was carried out in a special eye-tracking laboratory for usability testing using a <em>Tobii X2–60 compact</em> eye tracker. In order to avoid priming effects, I have found it necessary to  tell the participants a cover story. So, the participants believed that they were participating in a usability study about their search behavior on websites.</p>

<p>I structured the study in two parts: the eye-tracking and the filling out of questionnaires on demographics and cookie notices. In the eye-tracking part the participants were sequentially shown four different fictional websites. Their task was to search for a specific information on each website. Each participant saw four different cookie notices of the following categories: Confirmation, Binary, Category and Vendor — I skipped “No Option” because this notice doesn’t align with the GDPR. The order of the cookie notices and on which website they appeared was randomized via latin square.</p>

<img :src="'/images/cookie-notices/restaurant-websites.png'" alt="Four screenshots of fictionaly websites each showing a cookie notice of the types that were mentioned before.">

<p>There where 2 different groups of participants: the first group had as much time as they chose to search for information. The second group had a time limit of 15 seconds per website (which they knew beforehand). This was intended to represent different everyday situations: searching for information under time pressure, e.g. when looking for a quick answer to an urgent question, and more in-depth examination, e.g. when researching a specific topic.</p>

<h4>Participants</h4>

<p>Of the 30 participants that took part in the study, 50% were male, 50% female. On average, participants were 28 years old, the youngest being 16 and the oldest 60 years old. To keep this article a little shorter I will skip the participants employment status and the data on their internet usage and former knowledge on privacy and cookie notices.</p>

<h4>Eye-tracking metrics</h4>

<p>To evaluate the eye-tracking, I created different metrics that can be assigned to the three research questions. For this I used the “Areas of Interest” of the <em>Tobii Studio</em> software.</p>

<p><strong>How intensively does the user engage with the cookie notice?</strong><br />
To get an answer on this research question, I used the <em>number of fixations</em> (= sum of fixations on the cookie notice in total) and <em>total fixation duration</em> (= total duration of these fixations).</p>

<p><strong>To what extent does the cookie notice fulfill its goal of informing the user?</strong><br />
For this research question, I used the <em>information fixation duration</em>, which is the duration of fixations on the text and, in the case of the category- or vendor-specific notice, the checkboxes.</p>

<p>All cookie notices presented in the study contained the same text: “We use cookies to analyze user behavior and optimize the usability of the website. You can learn more about this in our Privacy Policy.” <em>(translated to english — the study was conducted in German)</em></p>

<p><strong>How long does it take the user to make their decision?</strong><br />
The metric I used for this research question is the <em>time of decision making</em>. I calculated this metric by subtracting the time of the first fixation on the cookie notice from the time when a button was clicked (and therefore the cookie notice closed).</p>

<h4>Questionnaire</h4>

<p>After the eye-tracking part the participants took a questionnaire on the different cookie notices they saw during the tasks. The questionnaire contained quantitative (5 point likert scales) and qualitative (textfields) questions. The quantitative questions asked for the understandability of the different cookie notices, the difficulty of decision making and the satisfaction with the choice options. I will list some of the results below in the summary of the study’s findings.</p>

<p>For the evaluation of the qualitative questions I grouped similar responses in categories. I will only name the categories that were mentioned by at least 4 participants.</p>

<ul>
    <li><strong>“Why do you find cookie notices annoying?”</strong> (following a question if they find cookie notices annoying — 70% find them annoying or very annoying): Partial or total hiding of the web page was named as one of the factors by 17 participants (57%). The second most frequent factor mentioned by 6 participants (20%) was that the notices distract them from the actual goal with which they enter the website. Four participants each (13%) were bothered by the impairment of finding information quickly and by the additional effort caused by the cookie notices.<br />
    <Quote quote="Because [. . . ] it is often hardly possible to refuse cookies or it’s made extremely difficult." />
    </li>
    <li><strong>“What do you think the goal of cookie notices is?”</strong>: 16 participants (53%) stated that the cookie notices are intended to provide legal protection for website operators or to implement the law. 12 participants (40%) stated that the cookie notices were intended to inform website users. 4 participants (13%) stated that the aim of the cookie notices was to give users the opportunity to make decisions about their data.</li>
    <li><strong>“What do you think happens when you reject cookies on a website?”</strong>: 13 participants (43%) answered that no data was collected and/ or no cookies were set. 6 respondents (20%) believed that the functionality of the website is limited by refusing cookies. 5 participants (17%) believed that the website is no longer usable after rejecting cookies.</li>
</ul>

<h4>Summary of the study’s findings</h4>

<p>I defined the optimal cookie notice by enabling the user to make an informed decision without distracting them from their actual goal. Therefore, the best usability is offered by notices that are in the midfield for all metrics.</p>

<p>Across all metrics of eye-tracking, an upward trend is evident in the mean values (from Confirmation to Binary to Category to Vendor). The vendor-specific notice was fixated on more frequently and for a longer period of time and used more for information purposes than the other notices and it took the longest time to make a decision. This means that users tend to deal more intensively with notices, the more decision-making options they offer. But cookie notices with which users are particularly intensively occupied can distract them from their actual goal on the website. This is also evident from the fact that 70% of the participants stated in the questionnaire that the number of choices in the vendor-specific note was too large or far too large, whereas 60% found the number of choices in the notice with the fewest interaction options, the Confirmation notice, too small or far too small. The best performer in terms of subjective assessment of the number of choices was the Binary notice, where 77% of the participants found the number of choices to be just right.</p>

<p>Although 73% of the participants stated that data protection on the internet was important or very important to them, only one of the notices was read by a participant and only a few participants skimmed the notices. These results show that it must be questioned whether cookie notices are generally suitable for their purpose of informing users.<br />
On average, users paid attention to the Confirmation notice for only 0.6 seconds, to the Binary notice for 0.9 seconds, to the category-specific notice for 1.4 seconds, and 2.1 seconds to the vendor-specific notice. Whether these times are sufficient to make an informed decision is open to question. However, it is thinkable that users have already informed themselves about cookies and data protection in advance and make their decision based on this knowledge. This can be derived from the fact that 22 of the 30 participants in the questionnaire stated that they had already dealt with data protection on the internet to a great or very great extent. This indicates that the cookie notice is not an information medium for users, but rather a decision-making tool. However, it is striking that many users did not make an active decision, but ignored the notice, even if they had had the opportunity to make an actual decision between different choices.</p>

<p>Across all three research questions, it was shown that users spend significantly more time on the notice when they are not under time pressure. This should be taken into account when considering a user-friendly cookie notice, as users should also be able to make a decision about their data in situations where they are under time pressure.</p>

</div>

<HighlightedArea title="Short Conclusion of the Research">
<ul>
    <li>Users tend to deal more intensively with cookie notices that offer more decision-making options, but notices with too many options can distract users from their actual goal on the website.</li>
    <li>The Binary notice was the best performer in terms of subjective assessment of the number of choices, with 77% of participants finding the number of choices to be just right.</li>
    <li>Although data protection on the internet is important to users, only one notice was read by a participant, and many users ignored the notice even if they had the opportunity to make an actual decision. This indicates that the cookie notice is not an information medium for users, but rather a decision-making tool.</li>
    <li>Users spend significantly more time on the notice when they are not under time pressure, which should be considered when designing user-friendly cookie notices.</li>
</ul>
</HighlightedArea>

<div class="wrapper">

<h3>Design tips on Cookie Notices</h3>

<p>The following tips are based on my study and various other scientific papers I found in my research:</p>

<ul>
    <li>The number of interaction possibilities should neither over- nor underwhelm the user. My study showed that notices with a binary or category-specific choice are the most user-friendly.</li>
    <li>A position at the bottom(-left) should be chosen for the cookie notice.</li>
    <li>Unnecessarily large notices should be avoided, and the notice should only take up as much space as is needed for the content.</li>
    <li>Overly technical language should be avoided in order to make the information in the cookie notice accessible to all users.</li>
    <li>The use of dark patterns should be avoided.</li>
    <li>As also required by law, an opt-in implementation of cookies should be used. This means that no cookies are set when the notice is ignored.</li>
</ul>

<h3>Mockup of a user-friendly Cookie Notice</h3>

<p>Finally, I designed a user-friendly cookie notice — however, further research is needed to further optimize the usability of cookie notices. The following prototype is only a first draft and it would be necessary to evaluate the prototype in a usability test.</p>

<img class="img-small" :src="'/images/cookie-notices/cookie-notices-wireframe.png'" alt="A wireframe showing a Cookie Notice that has the Headline 'Data Protection', followed by information about the usage of cookies that is divided into three bullet points with an icon infront of each, the last one includes a link to the privacy policy. On the right side there are three options for the user: 'Reject', 'Accept' and 'Configure Cookies'. An wireframe-arrow indicates that 'Configure Cookies' changes the notice and gives the option to specify which cookies are accepted, 'Analytical cookies' and/or 'Marketing cookies'. Next to the cookie types are '?' icons.">

<p>My prototype is a hybrid of the two cookie notices that scored best in my study. Initially it is based on the binary notice of the study, but by clicking on “Configure Cookies” the notice unfolds and offers a selection via categories. The cookie notice is intended to provide a good user experience for two different user groups and different everyday situations. A study (by Utz et al.) found that most website visitors make a binary decision even when they have more than just two decision options available to them and only few users select a specific category. The notice covers both behaviors by initially providing a highly visible binary decision. However, the users who would like to make a specific configuration are also included, as they gain more control through the configure function.</p>

<p>The text is identical in both states and was kept short because most users do not read it. To make it easier to skim, the cookie notice is titled with “Data protection” and I structured the text in bullet points with supportive icons. The title is also intended to make it clearer, that the cookie notice has nothing to do with the websites technical functionality, but only with the protection of the user’s data. The icons and text are to be adapted for the respective cookie use of the website.</p>

<p>In the configuration state, I skipped “functional cookies” to avoid confusion because they are always mandatory and don’t have anything to do with data protection since they are necessary to run a website. Next to the listed cookie types are little “?”-icons that should provide information about this type on hover. The exact categories and their explanations must be adapted to the website where it is used.</p>

<p>The buttons are replaced by a “Ok” button in the configuration state. I chose the label “Ok” because it is clearly distinguishable from “Accept” or “Reject” and to make it clear that the selection made in the checkboxes is confirmed.</p>

<p>In order to keep the notice as simple as possible to use, I omitted a way to return from the configuration state to the initial state. Both a “Reject” and an “Accept” can be generated in the configuration states with a few clicks by making selections in the checkboxes.</p>

</div>

<HighlightedProjects currentProject="2" />
