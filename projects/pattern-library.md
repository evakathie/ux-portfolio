---
title: "Creating a Pattern Library"
description: "Creation of a comprehensive pattern library for the D3 product family of Digitec GmbH, for documentation and standardization of used design patterns."
image: '/images/pattern-library/pattern-library-header.png'
imgmobile: '/images/pattern-library/pattern-library.png'
competences: Concept, UX Design, UI Design, Design System
tools: Atlassian Confluence, Adobe XD
from: 'October 2018'
to: 'Dezember 2018'
year: 2018
month: 12
company: 'Digitec'
---

<ProjectHeader :currentPage="this">
<p>Creation of a comprehensive pattern library for the D3 product family of <router-link to="/pages/company/digitec.html">Digitec GmbH</router-link>, for documentation and standardization of used design patterns.</p>
<p>Design Pattern = generalizable solution to repeatedly occurring (UX / design) problems.</p>
</ProjectHeader>

<div class="wrapper">

<p>During a three month internship at <router-link to="/pages/company/digitec.html">Digitec GmbH</router-link> I created a pattern library for their software product family D3. The D3 products D3 Sheets, D3 Curves and D3 Elements together form a pricing engine for FX and MM trading and are used  by more than 40 of the world’s leading FX trading banks. The products are developed using the programming language Scala, the user interface is designed with JavaFX and CSS.</p>

<img class="img-small" :src="'/images/pattern-library/pattern-library-concept.png'" alt="">

</div>

<HighlightedArea title="Summary of our Approach">
<ol>
    <li>Research and comparison of different existing pattern libraries</li>
    <li>Abstraction of the components used in the software to design patterns</li>
    <li>Design of a theoretical basic model of the pattern library based on the atomic design approach</li>
    <li>Documentation of the design patterns in the form of a pattern library project in the company's internal Confluence environment</li>
    <li>Implementation of the Design Patterns as reusable components in Adobe XD</li>
    <li>Elimination of special solutions in the software, which are already covered by already covered by a design pattern</li>
</ol>
</HighlightedArea>

<div class="wrapper">

<h2>Project Approach</h2>

<h3>Why create a Pattern Library?</h3>

When I came to <router-link to="/pages/company/digitec.html">Digitec</router-link> as an intern, only one UX Designer was working there. Short after we were three people, and while all the Design Information was in the head of the Senior UX/UI Designer, there needed to be a Design System to make communication easier. Moreover, many special solutions were built into the software, which could be replaced by other more standardized patterns - if these were written down and their purpose defined. Here is a short list of the hoped-for improvements through the introduction of a pattern library:

<ul>
    <li>Avoid duplication & reuse proven solutions</li>
    <li>Increase design (& code) quality due to the elimination of special cases</li>
    <li>Simplify communication between team members</li>
    <li>Ease onboarding of new team members</li>
    <li>Avoid misunderstandings between developers and designers</li>
</ul>

<h3>Research & Comparison of Pattern Libraries</h3>

<p>After the decision was made that the product family should get a pattern library, research was the first thing to be done. I compared various pattern libraries and design systems from other companies:</p>

<ul>
    <li>Material Design</li>
    <li>Human Interface Guidelines - Apple</li>
    <li>Lightning Design System</li>
    <li>Mailchimp Pattern Library</li>
    <li>otto.de Pattern Library</li>
</ul>

<p>Moreover, I also researched how a pattern library can be structured and what existing concepts exist. I list a few of the most inspiring ones below.</p>

<ul>
    <li>“Design Patterns” chapter in the book <em>About face</em>
    <ul>
        <li>Postural patterns: can be applied at the conceptual level and help determine the overall product stance in relation to the user.</li>
        <li>Structural patterns: solve problems that relate to the arrangement of information and functional elements on the screen.</li>
        <li>Behavioral patterns: solve wide-ranging problems related to specific interactions with functional or data elements.</li>
    </ul></li>
    <li>Atomic Design by Brand Frost
        <ul>
            <li>Atoms: Atoms are the basic building blocks of matter. Applied to web interfaces, atoms are our HTML tags, such as a form label, an input or a button.</li>
            <li>Molecules: Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound.</li>
            <li>Organisms: Organisms are groups of molecules joined together to form a relatively complex, distinct section of an interface.</li>
            <li>Templates: Templates consist mostly of groups of organisms stitched together to form pages.</li>
            <li>Pages: Pages are specific instances of templates. Here, placeholder content is replaced with real representative content to give an accurate depiction of what a user will ultimately see.</li>
        </ul></li>
    <li>Otto Pattern Library by Wolf Brüning
        <ul>
            <li>Fragments (no actual patterns): Standard colors, fonts, icon(-font), sizes</li>
            <li>Content: Patterns for the presentation of content</li>
            <li>Outline: Patterns for structuring and organizing content</li>
            <li>Interactions: Patterns that enable direct interactions of the user</li>
            <li>Form: Patterns needed to build forms</li>
            <li>Status & feedback: patterns that communicate the system status to the user</li>
            <li>Layer & Popup: Modal dialogs & pop-up windows</li>
        </ul></li>
</ul>

<p>None of the existing concepts seemed to be a perfect fit for our purposes. Therefore, I developed a new concept primarily based on Atomic Design, but extended for our purposes. I will describe the exact concept below using the practical implementation in the paragraph “Creation of the Pattern Library Documentation”.</p>

<img class="img-small" :src="'/images/pattern-library/pattern-library-concept.png'" alt="A graphic explaining the general concept, see transcript below.">

<GraphicTranscript>

<p>The Pattern Library consists out of different elements: Atoms (like Buttons) that go into Molecules (e.g. Popup Warning) that go into Organisms (like a Sidebox). All these make up a GUI, that is also influenced by Elements (like fonts or icons) and Proccesses (like Drag and Drop).</p>

</GraphicTranscript>

<h3>Abstraction of the softwares patterns</h3>

<p>The first step for actually creating the Pattern Library for <router-link to="/pages/company/digitec.html">Digitec GmbH</router-link> was to thoroughly explore the products of the D3 product family and write down every recurring element. While doing so I assessed all of them and asked myself: What task(s) does this component fulfill? Which problem is solved by it? While some Patterns were really obvious, like Buttons and Checkboxes, others where a little more hidden and this work of abstraction also showed some cases of several patters solving the same problem that should than be unified.</p>

<p>During the process and since the Pattern Library is never fully finished also afterwards, there needed to be a guideline how to deal with candidates that might be added to the Pattern Library:</p>

<p>The new element...</p>

<ul>
    <li>has no advantage → use an existing pattern</li>
    <li>has a clear advantage and can be used in other places → record as a new pattern</li>
    <li>has a clear advantage but can't be used in other places → accept as deviation</li>
    <li>is a better solution and can replace other patterns → include in Pattern Library, successively replace the old/other pattern</li>
</ul>


<img :src="'/images/pattern-library/patterns.png'" alt="In several lines a number of different Design Patterns like Buttons, On-Off Switches and Textfields are shown.">

<h3>Creation of the Pattern Library Documentation</h3>

<p>Since the goal of the Pattern Library was to ease the communication between different departments (like UX Design and Development), I decided to use the existing internal documentation Atlassian Confluence to create the Pattern Library. This way it is easily accessible for every colleague and no additional software is needed.</p>

<p>The Pattern Library was created in it's own space in Confluence having a landing page and navigation sidebar. The space was than split into the different parts of the Pattern Library: Design elements, Atoms, Molecules and Organismns. Later we added Processes and Guidelines because we noticed that there were more higher level patterns that need to be represented in the Pattern Library as well. I will go into detail about every category below.</p>

<h4>Design elements</h4>

<p>= the basic building blocks on which the rest of the patters are built.</p>

<p>Strictly speaking, these design elements are not patterns, but they are still an important part of the Pattern Library, because everything else is build on and out of them. They are colors, fonts, icons, cursors, appearances (such as shadows) and graphic elements (such as backgrounds) used in the software. In the Confluence documentation each different design element category has one page listing all the elements.</p>

<img :src="'/images/pattern-library/elements.png'" alt="A screenshot of a few 'Elements' pages in the Pattern Library showing a table with colors, fonts and icons.">

<h4>Atoms</h4>

<p>= GUI items that can't be broken down further than into design elements.</p>

<p>Since there are a lot of Atom patterns in the product family, I have further subdivided them into the following categories (based on the book “About face”):</p>

<ul>
    <li>Imperative Controls: Atoms that initiate an action/function, e.g. Buttons</li>
    <li>Selection Controls: Atoms used to select options/data, e.g. Checkboxes</li>
    <li>Entry Controls: Atoms that are used to make inputs, e.g. Textfields</li>
    <li>Display Controls: Atoms that change how the program is displayed, e.g. Toggle Selectors</li>
    <li>Navigation: Atoms that are used for navigation within the program, e.g. Accordions</li>
    <li>Explanation: Atoms to serve as an explanation for the user, e.g. Hints</li>
    <li>Indication: Atoms that serve as a reference for the user (iconographic character), e.g. Drag Indicators</li>
</ul>

<img :src="'/images/pattern-library/atom_imperative_control.png'" alt="Screenshot of the Button Design Pattern showing the structure that will be described below.">

<p>Every Atom is has the same structure that is represented by a table. The structure as a table allows the usage of a Confluence macro that makes it possible to create a overview on the parent page (“Atoms”) where all the controls are listed with their name, preview and the problem they solve. Every Atom has the following categories:</p>

<ul>
    <li>Preview: a clickable embedded HTML preview (created with Adobe XD)</li>
    <li>Problem: the design/ interaction problem the pattern is solving</li>
    <li>Usage: a short guide when to use the pattern</li>
    <li>Design specification: a link to the pattern in Adobe XD (developer preview) and if necessary additionally written down design specifications as well as a table showing all the different states of the control</li>
    <li>Cursor hinting: which cursor(s) are to be used with the control</li>
    <li>Keyboard control: specification of the usage of the control with the keyboard</li>
    <li>Usage in other patterns: a list of molecules that use the pattern/ atoms that are connected with it from a technical point of view</li>
    <li>Examples: examples where the pattern is used in the software</li>
    <li>Responsibility: person that is responsible/ the person to contact for this pattern. (We dropped this field at a later date, as it was never used and did not seem important for our purposes.)</li>
</ul>


<h4>Molecules</h4>

<p>= patterns that are composed of other patterns (atoms) and design elements.</p>

<p>Molecules are more complicated/less abstract than atoms and occur much less frequently in software. Like Atoms they all follow the same structure, using a table for the overview page and different categories:</p>

<ul>
    <li>Same as Atoms:
        <ul>
            <li>Preview</li>
            <li>Problem</li>
            <li>Usage</li>
            <li>Design specification</li>
            <li>Responsibility (dropped)</li>
        </ul></li>
    <li>Differing from Atoms:
        <ul>
            <li>Usage of other Patterns: patterns that are used inside the Molecule</li>
            <li>Usage in D3: all the places where the Pattern is used</li>
        </ul></li>
</ul>

<img :src="'/images/pattern-library/molecule.png'" alt="Screenshot of the Molecule Pattern 'Popup Warning' with the structure described above.">

<h4>Organisms</h4>

<p>= patterns that consist of molecules and atoms and form relatively complex, clearly delimited areas of the software.</p>

<p>I only identified two Organisms throughout the software. Since these are really complex constructs the probability that they are reoccuring is low. The two Organism pages follow the same structure, but are a lot shorter than the other Patterns, they only have these fields:</p>

<ul>
    <li>Preview</li>
    <li>Design Specification</li>
    <li>Usage in D3</li>
    <li>Responsibility (dropped)</li>
</ul>

<img :src="'/images/pattern-library/organism.png'" alt="Screenshot of the Organism Pattern 'Sheet Config' with the structure described above.">

<h4>Processes</h4>

<p>= patterns that represent recurring interactions/ processes.</p>

<p>After working with the Pattern Library for a while we added “Processes” since we were lacking the ability to define Patterns that aren't necessarily visible but more a description of a process/ user interaction. An example for a Process is Drag & Drop, which is possible on several places throughout the software and always follows the same rules: there is a drag candidate marked by drag indicators and several drop candidates, both components use different colors and different cursor hintings are in place.</p>

<img :src="'/images/pattern-library/process_drag_n_drop.png'" alt="Screenshot of the Process Pattern 'Drag & Drop' the structure will be described below.">

<p>As the other patterns Processes are structured in a table that makes up the overview parent page. But they use different categories, e.g. a Preview is not necessary since the problems aren't all visual.</p>

<ul>
    <li>Problem</li>
    <li>Usage</li>
    <li>Design specification</li>
    <li>Cursor hinting</li>
    <li>Usage in D3</li>
</ul>

<h4>Guidelines</h4>

<p>= patterns that support decision making.</p>

<p>Guidelines are the newest addition to the pattern library. They are on the highest level and don't follow any specific structure. Your goal is to define rules for a specific design problem. The two guidelines existing so far are Control States and Control Access. The Control States guideline describes the rules of usage and design choices of different control states like readonly, disabled, hover, active and pressed. While Control Access is a defined decision tree when to hide and when to disable a control.</p>

<img :src="'/images/pattern-library/guideline_control_access.png'" alt="Screenshot of the 'Control Access' guideline described above.">

<h3>Creation of the Pattern Library in Adobe XD</h3>

<p>While creating the Pattern Library in Confluence, I also created a Library document in Adobe XD with all the controls. Each control is represented by a component and the whole document forms a CC Library that can be used in other Adobe XD documents. The components support responsive resizing and changing text labels in their instances. If a change (e.g. change of color or general redesign) is made in a component in the Pattern Library document it is reflected in all the documents using the component.</p>

<img :src="'/images/pattern-library/pattern_library_adobe_xd.png'" alt="Screenshot of the Pattern Library in Adobe XD.">

</div>

<HighlightedProjects currentProject="3" />
