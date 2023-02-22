---
title: "Audiobooks in Spotify"
description: "I used Design Thinking to empathize with audiobook listeners and create a prototype to integrate audiobooks into Spotify."
image: '/images/spotify-audiobooks/audiobooks-header.png'
imgmobile: '/images/spotify-audiobooks/audiobooks.png'
competences: Design Thinking, UX Design, Wireframing, Usability Testing
tools: Balsamiq
from: Dezember 2022
year: 2022
---

<ProjectHeader :currentPage="this">
<p>As a fan of audiobooks and user of Spotify for podcasts and music, I'm missing a feature for listening to audiobooks in Spotify. So I used Design Thinking to come up with a concept to integrate audiobooks into Spotify - this is an unofficial case study.</p>
<p><b>User Story</b>: As an audiobook lover, I want to comfortably listen to audiobooks inside Spotify, so that I don’t have to handle (and pay for) so many different apps with similar functionality.</p>
</ProjectHeader>

<div class="wrapper">

<p>I’m a Product Designer and a big enthusiast for audiobooks. While I like Spotify to listen to podcasts and music, listening to audiobooks is a big pain point for me. I’m also a fan of Design Thinking and that’s why I want to throw the toolset on this problem to find out how Spotify could look like, with audiobook listeners like myself in mind.</p>

<p><i>Note: This case study isn’t official — I don’t work for Spotify and the company doesn’t know about this. This is just a concept I made for my portfolio and to practice.</i></p>

<img :src="'/images/spotify-audiobooks/audiobooks-wireframe.png'">

</div>

<HighlightedArea title="Summary of my Approach">
<ol>
    <li><b>Empathize</b>: Interviews with audiobook listeners to gather information and their painpoints with the current concept in Spotify. </li>
    <li><b>Define</b>: writing the User Story and requirements, as well as assessing the status quo in the Spotify app. </li>
    <li><b>Ideate</b>: Ideate: compatitor analysis of BookBeat and Audible, as well as doing Crazy 8’s (sketching on paper).</li>
    <li><b>Prototype</b>: building a wireframe of the final idea using Balsamiq.</li>
    <li><b>Test</b>: Designing a concept for a usability test of the wireframe.</li>
</ol>
</HighlightedArea>

<div class="wrapper">

<h3>Empathize — Interviews with audiobook listeners</h3>

<p>This phase kind of happened before I decided to write this case study and it was pretty natural because I myself was annoyed by having so many different apps to play audios and I wanted to know what my peers think about it and how they listen to audiobooks. But looking back, this is the Empathizing phase of Design Thinking. You could say I did semi-structured interviews with a few peers, since I talked about nearly the same topics with everyone. The friends and colleagues I spoke to are of different genders and ages and in total I talked to 4 people. Additionally I will include myself here.</p>

<h4>Context</h4>

<p>I found out that unlike reading books, oftentimes audiobook listeners don’t focus on the audiobook only, but do tasks next to listening, like driving a car, working out in the gym or doing monotonous tasks like folding laundry. Another context where people like to listen to audiobooks is when riding a train or taking a walk outside. Several of the peers I interviewed also told me, that they like to listen to audiobooks to fall asleep more easily.</p>

<h4>Platforms</h4>

<p>The people I interviewed use a variety of different platforms to listen to audiobooks, most commonly the apps BookBeat and Audible. Some of them are still listening to CDs or local mp3 files (which are mostly digitalized CDs). One person uses an app that connects with Spotify to listen to audiobooks that are available on the platform and that gives additional functionality.</p>

<p>All the people I talked to know Spotify and used it at least one time in the past. Many of them have a Spotify abo and use it frequently to listen to podcasts or music.</p>

<Quote quote="It is annoying — and expensive — to have so many different abos to listen to music, podcasts and audiobooks. I would love to have them all in one app." />

<h4>Pain points with audiobooks on Spotify</h4>

<p>Three of the people (including myself) already tried to listen to audiobooks on Spotify. And these are the pain points I was able to collect:</p>

<p>There is no uniform representation of audiobooks in the Spotify app. Depending on how the audiobook was uploaded (I describe the different ways below in the Define phase) Spotify doesn’t remember which track you last listened to once you switched to e.g. a song or a podcast episode. Therefore, it is often not possible to switch back and forth between different audiobooks or “short-term audio” (podcasts and music) and audiobooks. This is a problem because listening to an audiobook takes several hours and will most likely not be done in one session but over the course of several days or weeks.</p>

<p>Another problem resulting from the missing representation is that it is not possible to specifically search for them. To find audiobooks you have to either type in a specific title, which means you are not able to browse, or search for some generic term like “audiobook” and hope that it is part of the title.</p>

<p>And last but not least: the Shuffle functionality is good for listening to music but doesn’t make sense for audiobooks — depending on how the audiobook was uploaded it might be available for audiobooks. If it is accidentally enabled while listening to an audiobook it can be rather confusing.</p>

<h3>Define — Problem definition & Requirements</h3>

<h4>User Story</h4>

<p>The interviews and the number of already existing audiobooks on Spotify show that there is a demand to listen to audiobooks on Spotify and therefore an opportunity for Spotify. The problem seems to be the usability and missing concept for audiobooks as a part of the Spotify app. I formulated the following User Story to go along with:</p>

<p><i>As an audiobook lover, I want to comfortably listen to audiobooks inside Spotify, so that I don’t have to handle (and pay for) so many different apps with similar functionality.</i></p>

<h4>Status quo: Audiobooks on Spotify</h4>

<p>Like I said in the section above, there is no single representation of audiobooks in Spotify. I found the following different ways, how audiobooks are currently a part of Spotify: (sorted by frequency)</p>

<ol>
    <li>Uploaded as a Podcast episode, of a Podcast including several audiobooks</li>
    <li>Uploaded as a Playlist with many tracks</li>
    <li>Uploaded as an Album with many tracks</li>
    <li>Uploaded as a Podcast with one episode per chapter of the book</li>
</ol>

<img :src="'/images/spotify-audiobooks/spotify-audiobooks-representations.png'">

<p>The different representations bring different problems. The biggest problem is switching back and forth between different audiobooks or audiobooks and other media like podcasts and songs. If the audiobook is uploaded as a podcast episode (1) or as a podcast with one episode per chapter (4), Spotify will remember the progress and it is possible to go back to the book after listening to other media. In the case the audiobook is uploaded as a playlist (2) or album (3), this is not possible. And finding the track last heard can be extremely cumbersome in an album or playlist, because the audiobooks are separated into many tracks (often 150+ per audiobook) — probably because there is a maximum length.</p>

<h4>Requirements</h4>

<p>From the User Interviews and UX analysis of the status quo, I derived requirements that can be used in the next phases of Design Thinking:</p>

<ul>
    <li><b>Remembering the progress</b>: Since users don’t listen to audiobooks in one run and want to switch back and forth between an audiobook and other media, this switching should be as comfortable as possible.</li>
    <li><b>Remembering (several) unfinished books</b>: the user might want to start several books in parallel, e.g. of different genres like a nonfiction book for train rides and a romance novel for falling asleep.</li>
    <li><b>Snooze/ sleep feature</b>: Since users like to listen to audiobooks while falling asleep there should be a configurable sleep functionality, where the audiobook stops after a certain number of minutes.</li>
</ul>

<h3>Ideate</h3>

<h4>Competitor Analysis</h4>

<p>To spark ideas I had a look at two common apps to listen to audiobooks, that many audiobook lovers currently use: BookBeat and Audible.</p>

<h5>BookBeat</h5>

<p>The business concept of BookBeat is that your monthly abo enables you to listen to as many audiobooks as you want at the same time but for a certain amount of hours per month (depending on your subscription).</p>

<img :src="'/images/spotify-audiobooks/bookbeat-screens-01.png'">

<p>On the home screen the book you last heard is highlighted at the top. Below it is a vertically scrollable list of all the books you saved or listened to in the past. BookBeat recognizes your progress on any book you started, showing the percentage of progress visualized by a number and a circle on the cover. Additionally, you have a list for books you already listened to, that is sorted by year.<br />
Other tabs next to the home are “Inspiration”, “Categories” and “Search”. All enable users to browse for books either using recommendations, book categories or a specific search functionality.</p>

<img :src="'/images/spotify-audiobooks/bookbeat-screens-02.png'">

<p>The screen while listening to a book shows the cover at the top and the progress in percentage but also the time already heard, the remaining time and the current track. There is the functionality to snooze (which can be configured on 20min, 60min, custom or at the end of the track), configure the speed (0.85, 1.00, 1.25 or custom), add a bookmark, see and navigate in a list of tracks, play, jump back and forth one minute, jump to start of the track or end of the track and some additional functionality in a menu and settings.</p>

<h5>Audible</h5>

<p>The business concept of Audible is that your monthly abo enables you to pick one audiobook per month — you can then hear this book as often as you like, comparable to physically possessing it.</p>

<img :src="'/images/spotify-audiobooks/audible-screens-01.png'">

<p>On the home screen you first see recommended books and trends, if you scroll down a little you find the book(s) that you are currently hearing (in the forth place on the page). Your progress on the books is shown by the remaining time in hours and minutes and a progress indicator bar/ line. There is another tab for your library and a browsing tab with a search field, more recommendations and books listed by genres.</p>

<img :src="'/images/spotify-audiobooks/audible-screens-02.png'">

<p>The screen while listening to a book shows the cover at the top and underneath it the current chapter. In the middle is the time remaining on the book, left and right of it is the time already heard of the chapter and the time remaining on the chapter. You can hit play, jump back and forth 30 seconds, jump to the beginning or the end of the chapter, change the speed (list from 0.5x to 3.5x in 0.1 steps), see and navigate in a list of chapters, configure a sleeping/ snooze mode (with a list of several default lengths from 5 to 120min, custom or end of the chapter), add a bookmark, activating a kind of car driving mode and additional functionality in a menu.</p>

<h4>Paper Prototypes</h4>

<p>One of my favorite steps in Design Thinking is Divergent Thinking — skribbling all the solutions/ ideas that come into mind without judging them. What I did in this case study was a quick round of Crazy 8s. <i>Please excuse my weird mix of German and English in the picture below — under “time pressure” my brain seems to like switching back to German.</i></p>

<img :src="'/images/spotify-audiobooks/paper-prototypes.png'">

<h3>Prototype</h3>

<p>At the end of the Ideate phase, I chose one final idea, that I will describe to you in the Prototype phase, since the prototype I did and the idea I had go hand in hand.</p>

<p>For the prototype I chose Balsamiq. Doing a wireframe before a pixel perfect prototype is always a good idea to do before the first round of testing because everything can still change.</p>

<p>The basic idea is to integrate audiobooks as a third type of media — next to music and podcasts — to make it easier to find them in the search and to get back to them after listening to other media. The clear representation makes it easier to filter for them and to find them on the home screen. Like distinguishing between podcasts and music, audiobooks should have their own unique representation:</p>

<img :src="'/images/spotify-audiobooks/audiobooks-screens-01.png'">

<ul>
    <li>The whole book is represented as one unit (similar to one podcast episode in the current Spotify functionality).</li>
    <li>Similar to a podcast, it has a screen where the cover, title, author and additional information like a description, rating by users and the genre is displayed. Instead of “Follow” the primary action of the screen is “Listen”.</li>
    <li>The progress is tracked for the whole book, not chapters or other parts of it. It is displayed in the play screen in the middle between the time already heard and the time still remaining.</li>
    <li>However, it is possible to display a track-list in order to jump back and forth in the book, but the function is secondary.</li>
    <li>There is a function to rewind and fast forward. At this point, user research would be useful to find out which action is most helpful: a fixed time (like 1 minute or 30 seconds) or jumping to the beginning/end of the chapter.
Existing functionalities such as the sleep mode and changing the speed should also be available for audio books.</li>
</ul>

<p>To establish audiobooks as a third kind of media, they need a consistent representation throughout the app. At least the cover and title and if a user already started listening, the current progress, should be visible wherever an element of an audiobook is represented.</p>

<img :src="'/images/spotify-audiobooks/audiobooks-screens-02.png'">

<p><i>Home</i> screen adjustments:</p>

<ul>
    <li>“Audiobook” filter next to “Music” and “Podcasts”</li>
    <li>representation of an audiobook including title and progress as a “quick access” element on top of the screen</li>
    <li>“Your Audiobooks” section similar to “Your Shows”, including the title, author and progress of an audiobook</li>
    <li>including audiobooks into more general categories, e.g. “Last heard” or “For you”</li>
    <li>new category “Audiobooks you might like”</li>
</ul>

<img :src="'/images/spotify-audiobooks/audiobooks-screens-03.png'">

<p><i>Search</i> screen adjustments:</p>

<ul>
    <li>new category tile on the main Search screen and a corresponding screen “Discover new audiobooks” for audiobooks (similar to podcasts). On this screen audiobook recommendations and different categories to browse like bestselling lists/ „charts“ or genres like „novels“ can be displayed.</li>
    <li>“Audiobook” filter, if the search is active</li>
</ul>

<p><i>Library</i> Screen adjustments:</p>

<ul>
    <li>“Audiobook” filter next to the other filters at the top</li>
    <li>listing audiobooks like other media in the screen including the progress</li>
</ul>

<h3>Test</h3>

<h4>Usability Test Concept</h4>

<p>Last but not least: the test phase. I will skip the actual usability testing in this Case Study since it’s getting quite long. Instead, I will give you a little description how I would do the test:</p>

<p>For the first tests I would simply use my Balsamiq wireframe (adding transitions and a few dummy pages like a play-screen for music and podcasts). Later on — after a few iterations on the solution— it might make sense to switch to a high-fidelity design, for this I would use one of my go-to-tools Sketch, Figma or Adobe Xd.</p>

<p>In the test I would give the user the following simple tasks:</p>

<ol>
    <li>listen to an audiobook you already started</li>
    <li>search for a specific audiobook (of which you know the title)</li>
    <li>browse for an audiobook</li>
</ol>

<p>For each task I would measure the success rate, considering the tasks as successful if:</p>

<ol>
    <li>the user sees the play-screen of an audiobook</li>
    <li>the user comes to the screen where “test” is typed in the search field and clicks on one of the audiobooks</li>
    <li>the user sees the screen where new audiobooks and different categories are listed (coming from the search screen) and clicks on one of the audiobooks</li>
</ol>

<p>Next to the success rate I would measure the number of errors on the task and the number of confusions on the task. To track the latter, I would ask the participants to think out aloud during the tasks.</p>

</div>

<HighlightedProjects currentProject="3" />
