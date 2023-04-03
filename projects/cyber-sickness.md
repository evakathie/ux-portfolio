---
title: "Reducing Cyber Sickness in Virtual Reality"
description: "Investigation of the reduction of cyber sickness in virtual reality by introducing a fixed point (helicopter cockpit)."
image: '/images/cyber-sickness/cyber-sickness-header.png'
imgmobile: '/images/cyber-sickness/cyber-sickness.png'
competences: UX Research, Virtual Reality
tools: Unity, Oculus Rift, SPSS
from: 'October 2017'
to: 'March 2018'
year: 2018
month: 3
company: 'University of Hamburg'
---

<ProjectHeader :currentPage="this">
<p>Together with five fellow students, I investigated the reduction of cyber sickness caused by Virtual Reality as a part of a project over one semester of my bachelor studies at <router-link to="/pages/company/hamburg-university.html">University of Hamburg</router-link>. In a study, we examined the effects of a fixed point - in the form of a helicopter cockpit - on cyber sickness, which often occurs in virtual space.</p>
<p>Professor: <a href="https://www.inf.uni-hamburg.de/en/inst/ab/hci/people/steinicke.html" target="blank">Prof. Dr. Frank Steinicke</a><br />
Supervisor: Paul Lubos</p>
</ProjectHeader>

<div class="wrapper">

<p>While virtual reality is gaining momentum, there are some unresolved issues, such as the cyber sickness that is often experienced by users. Symptoms of Cyber Sickness include nausea, dizziness, eye strain and headache. In order to explore a remedy that could alleviate the symptoms of cyber sickness, we conducted a study dealing with the topic. In our study, we investigated the extent to which a fixed reference point on the body in the virtual environment can alleviate cyber sickness. For this purpose we developed different flight simulations with a helicopter, where the test persons flew with or without a cockpit.</p>

<InfoBox>
<h2>Cyber Sickness</h2>
<p>The cause of cyber sickness has not been conclusively determined; the most common explanation is the sensory conflict theory. According to this, the symptoms occur due to a mismatch between the sensory system's expectation based on past experiences and what is actually perceived. To put it in simpler terms, while motion is perceived through the eyes, the vestibular system (sense of balance and orientation) reports that the body is not in motion. Related phenomena that existed before VR are motion sickness (e.g., when driving a car) and simulator sickness (e.g., playing video games from first-person perspective on a monitor).</p>
</InfoBox>

<img :src="'/images/cyber-sickness/cyber-sickness-vr.png'" alt="">

</div>

<HighlightedArea title="Summary of our Approach">
<ol>
    <li>Online research of the topic and related works</li>
    <li>Defining of the structure for the study</li>
    <li>Development of a virtual world with Unity to conduct the study</li>
    <li>Creating a questionnaire to evaluate the tendency of participants to get sick during the usage of VR (“Sickness Tendency Questionnaire”) in collaboration with another research group</li>
    <li>Conduct a study to determine a good cover story and test the virtual environment.</li>
    <li>Conduct the main study with 30 participants using a virtual helicopter flight and two different questionnaires to evaluate the Cyber Sickness before and after each flight  and the general Sickness Tendency of the participants. </li>
</ol>

</HighlightedArea>

<div class="wrapper">

<h2>Project Approach</h2>

<h3>Prior research & our hypotheses</h3>

<h4>Prior research</h4>

<p>As already mentioned, the cause of cyber sickness has not yet been conclusively clarified. However, some research has already taken place on how it can be reduced. For example, dynamic adjustment of the Field of View: the field of view is dynamically reduced in situations where a discrepancy between visual and vestibular stimuli is more likely to occur, which reduces cyber sickness. However, this is also accompanied by a reduced presence in virtual reality, which is something that would like to be avoided.</p>

<p>An experiment at Purdue University, in which a nose was inserted into the user's field of view in virtual reality, served as the inspiration for our study. This idea came from anecdotal reports of experience that a fixed object as a reference point could reduce cyber sickness.</p>

<h4>Research hypotheses</h4>

<p>In this study, we aimed to investigate the effects of a fixed point on the body on simulator sickness as well as the relevance of different control types and made the following hypotheses:</p>

<ol>
    <li>There is less cyber sickness when participants have a fixed reference point on their body (represented by a helicopter cockpit) than without such a reference point. </li>
    <li>Participants show less cyber sickness when they have control over the movement (control of the helicopter) than when the movement is automatic.</li>
</ol>

<h3>Experimental setup</h3>

<p>The study was named "Cognitive Performance in Virtual Reality Environments in different Navigation Scenarios." This cover story should avoid that participants are biased. In the experiment the participants had the task to fly through rings and count pyramids that we placed in the virtual environment. We determined the task through a pilot experiment where we evaluated three different tasks. This one was supposed to encourage the participants to look around in the virtual world - and of course to support the cover story.</p>

<h4>Virtual Environment</h4>

<p>The world was created using the Unity3D engine. We tried to create a relatively neutral world. Accordingly, we avoided distracting stimuli and concentrated on a virtual world that only had a few houses, water, trees and mountains. The mountains were intended to delimit the virtual world, creating a feeling of a large game environment.</p>

<img :src="'/images/cyber-sickness/virtual-environment.png'" alt="">

<p>The helicopter is a 3D model, so you can move around in it and look around without diminishing the feeling of the virtual world. For this purpose, the sounds of the rotor blades were also played through the loudspeakers.</p>

<p>The control of the helicopter is based as much as possible on a real helicopter flight. The Joystick of the left controller controlled the main rotor, e.g. flying up and down. The right joystick controls the forward and backward movements, as well as panning left and right. During the movement the virtual helicopter tilted forward and backward to convey a more realistic flight behavior.</p>

<img :src="'/images/cyber-sickness/virtual-helicopter.png'" alt="">

<h4>Experimental procedure</h4>

<p>During the experiment, the participants went through the following steps:</p>

<ul>
    <li>Completion of the first part of the Sickness Tendency Questionnaire (on personal information and general health).</li>
    <li>familiarization with the virtual environment in a practice mode</li>
    <li>Completion of an initial Simulator Sickness Questionnaire (as a basis for calculation if symptoms were already present before the first run).</li>
    <li>Running through four different flight simulations (randomized order) and then completing the Simulator Sickness Questionnaire in each case.
    <ul>
        <li>Flight is self-controlled (via Oculus Touch Controller), there is no cockpit available</li>
        <li>Flight with autopilot, there is no cockpit available</li>
        <li>Flight is self-controlled, there is a cockpit available</li>
        <li>Flight with autopilot, there is a cockpit available</li>
    </ul></li>
    <li>Completion of the second part of the Sickness Tendency Questionnaire (on Motion Sickness)</li>
</ul>

<img :src="'/images/cyber-sickness/experimental-setup.jpg'" alt="">

<h3>Study findings</h3>

<p>The study had 30 participants, 9 women and 21 men, aged 17-34. 53% of the participants had already had multiple experiences with VR, 20% had a one-time experience with VR and 27% had no experience at all.</p>

<p>To investigate our hypotheses, a difference was formed of the Simulator Sickness Questionnaire before the flight and  the one after the flight. We then compared the calculated value of simulator sickness between the different experimental cases (with or without a cockpit).</p>

<p>No significant difference was found between the flight with and without a cockpit, with a p-value of 0.144 for a self-piloted helicopter and 0.099 with an autopilot. As assumed, there was a tendency for the participants to feel less nauseous, but the result was not significant.</p>

<p>When only the group of experimental participants who had no or only one-time experience with VR was considered (a sample of 14 people), we obtained a significant result. In the condition of self-piloting the helicopter, this group showed significantly (p=0.017) less cyber sickness when a cockpit was visible.</p>

<p>For the second hypothesis, that increased cyber sickness occurs when users had no control over the flight, we could not find a significant result (p= 0,748 with cockpit and 0,529 without cockpit).</p>

<h4>Discussion</h4>

<p>Although our first hypothesis, that the cockpit causes an overall reduction in cyber sickness, was not significantly evident, the results suggest a tendency for this effect to occur. Since significance was detectable in subjects who had no or very little experience with virtual reality, the data suggest that there may also be an overall improvement. The subjective feelings of the participants also support this hypothesis, as many spoke of feeling more comfortable in the environment when they were in the cockpit. It can be assumed that a quick habit effect occurs especially during short excursions into virtual reality, which was also confirmed by subjects in oral reports and also corresponded to our subjective feeling. We also assume that a longer stay in virtual reality may cause more cyber sickness and thus the relevance of a possibility to reduce it increases. Since our data already showed a tendency with a small number of participants (n = 30) and short duration (>5 minutes), it can be assumed that this tendency could become significant if tested on a larger scale.</p>

</div>

<HighlightedProjects currentProject="2" />
