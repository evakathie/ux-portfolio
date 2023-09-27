---
title: "UI Control Redesign"
description: "Redesigning the controls for the D3 product family by Digitec GmBH, with the goal to modernize the interface and to standardize the usage of different control states."
image: '/images/control-redesign/control-redesign-header.png'
imgmobile: '/images/control-redesign/control-redesign.png'
competences: UI Design, FrontEnd Development
tools: Adobe XD, CSS
from: 'February 2020'
to: 'April 2020'
year: 2020
month: 4
company: Digitec
---

<ProjectHeader :currentPage="this">
<p>Redesigning the controls for the D3 product family by <router-link to="/pages/company/digitec.html">Digitec GmbH</router-link>, with the goal to modernize the interface and to standardize the usage of different control states. All entry-, selection- and imperative controls got a new design that is more modern, easier to use and includes a new hover effect to show interactivity.</p>
</ProjectHeader>

<div class="wrapper">

<p>D3 is a software family by <router-link to="/pages/company/digitec.html">Digitec GmbH</router-link> in the b2b context used by banks. Itʼs a niece product for foreign exchange trading and the primary user are traders. The D3 software family includes several applications that use the same <router-link to="/projects/pattern-library.html">pattern library</router-link>. During my work as a working student for the company, I did a redesign were I gave every entry-, selection- and imperative control a new look, including a new hover effect. The redesign met several goals/ requirements and I implemented it myself in CSS.</p>

<img class="img-small-60" :src="'/images/control-redesign/control-redesign-preview.png'" alt="Comparison of the old designs to the new.">

</div>

<HighlightedArea title="Summary of my Approach">
<ol>
    <li>Setting the goals and requirements</li>
    <li>Redesign of the controls using Adobe XD</li>
    <li>Changing the CSS of the controls using IntelliJ</li>
    <li>Unification of the states implementation within the software by different development teams responsible for the part of the software </li>
</ol>
</HighlightedArea>

<div class="wrapper">

<h2>Project Approach</h2>

<h3>Goals</h3>

<p>There were several reasons why the existing designs should be replaced with a new design:</p>

<ul>
    <li>Modernize the user interface as a whole and establish a more contemporary visual design with flatter controls</li>
    <li>Standardize the possible states of the controls (normal, readonly, disabled) as a whole</li>
    <li>Remove controls that are only used in individual cases and replace them with more common ones</li>
    <li>Increase the use of cursor hinting and, where appropriate, hover states to better communicate the interactivity of a control.</li>
</ul>

<h3>Requirements</h3>

<p>While the goals already include some requirements (like a more modern look), there were some additional requirements for the new design:</p>

<ul>
    <li>Make the states normal, read only and disabled distinguishable for the user to make the overall usage of controls easier.</li>
    <li>Give the user a better idea on which controls allow interaction (aligns with the requirement above) through cursor hinting and hovers.</li>
    <li>The new design has to work on both a gray or a white background. Since some of the controls might appear in listboxes or other UI components with white backgrounds, while the overall software has a gray (linear color gradient) background.</li>
</ul>

<h3>New control states</h3>

<p>Considering the different goals, the new design had to meet several requirements, which were implemented in different ways. Innershadows and strong linear gradients were removed in the redesign to modernize the interface. Additionally, one of the most important goals of the redesign was to make the distinction between different states clearer, especially between the normal state and Read only and Disabled, in order to increase the usability of the software. Furthermore, a hover state was introduced to indicate interactivity.</p>

<img style="width: 190px" :src="'/images/control-redesign/radiobutton-redesign.png'" alt="">

<p class="image-description">Left: old design, right: new design</p>

<h4>Normal</h4>

<p>The “Normal” state is the default state. It is used when a user has both read and write permissions to a control.</p>

<p>Since controls are interactive in the normal state, the main goal of the redesign was to show affordance. This is done by a dropshadow as well as full opacity of colors. The light gray color of imperative controls (buttons) was furthermore replaced by a darker gray which makes the controls stand out more.</p>

<p>Design Specifications:</p>

<ul>
    <li>Selection- and Entry Controls:<br />
    <img class="img-original" :src="'/images/control-redesign/textfield-normal.png'" alt="">
        <ul>
            <li>Background color: #ffffff</li>
            <li>Effects: dropshadow (color: 25% black)</li>
            <li>Text color: <span style="background: #000; color: #fff">#000000</span></li>
        </ul></li>
    <li>Imperative Controls:<br />
    <img class="img-original" :src="'/images/control-redesign/button-normal.png'" alt="">
        <ul>
            <li>Background color: linear-gradient(<span style="background: #808080; color: #fff">#808080</span>, <span style="background: #666666; color: #fff">#666666</span>)</li>
            <li>Effects: dropshadow (color: 25% black)</li>
            <li>Text color: #ffffff with a shadow to increase readability</li>
        </ul></li>
</ul>

<h4>Hover</h4>

<p>The Hover state indicates that a control is clickable and interactive.</p>

<p>Before the redesign, this state wasnʼt used in the software and was therefore newly implemented during the redesign.</p>

<p>Design Specifications:</p>

<ul>
    <li>Selection- and Entry Controls:
        <ul>
                <li>Cursor: pointer/ text</li>
        </ul></li>
    <li>Imperative Controls:<br />
    <img class="img-original" :src="'/images/control-redesign/button-hover.png'" alt="">
        <ul>
            <li>Background color: linear-gradient(<span style="background: #666666; color: #fff">#666666</span>, <span style="background: #4d4d4d; color: #fff">#4d4d4d</span>)</li>
            <li>Cursor: pointer</li>
        </ul></li>
</ul>

<!-- No changes in Redesign-->
<!--
<h4>Focused/ Pressed</h4>

<p>The pressed or focused state of a control indicates an immediate reaction to the activation of the control by the user and symbolizes which control is currently selected during keyboard navigation.</p>

<p>Design Specifications: blue frame (JavaFX standard)</p>

<img class="img-original" :src="'/images/control-redesign/button-pressed.png'" alt="">
<img class="img-original" :src="'/images/control-redesign/textfield-focused.png'" alt="">-->

<h4>Read only</h4>

<p>The read only state is used when a user has read access to a control, but is not allowed to make any changes.</p>

<p>Before the redesign, the read only state had problems with readability because some of the controls like textfields had a reduced opacity (including the text). Therefore the usability of the UI was reduced if a user had only read only access to certain parts. In the redesign the design decision was to increase the readability by always displaying the values in the control in black, while the overall control appears as not interactive, due to reduced opacity and a missing shadow effect.</p>

<p>Design Specifications:</p>

<ul>
    <li>Selection- and Entry Controls:<br />
    <img class="img-original" :src="'/images/control-redesign/textfield-readonly.png'" alt="">
        <ul>
            <li>Background color: #ffffff with 20% opacity</li>
            <li>Border: <span style="background: rgba(0,0,0,0.05) ">#000000 with 5% opacity</span></li>
            <li>Effect: none</li>
            <li>Text color: <span style="background: #000; color: #fff">#000000</span></li>
        </ul></li>
</ul>

<h4>Disabled</h4>

<p>The disabled state is used when a user should have neither read nor write access to a control. The content of the control is not visible because it is irrelevant for the user.</p>

<p>Before the redesign disabled and read only werenʼt distinguishable. This resulted also in disabled controls (like textfields) showing values that werenʼt useful for the user because they arenʼt applied. E.g. if a text field was used in combination with an on off switch and the switch was turned off, the text field would still display a value even though the setting isnʼt applied. In the redesign the design decision was therefore that no values were to be displayed in disabled controls. Additionally, the whole control lacks a shadow effect that indicates affordance and is displayed with opacity.</p>

<p>Design Specifications:</p>

<ul>
    <li>Selection- and Entry Controls:<br />
    <img class="img-original" :src="'/images/control-redesign/textfield-disabled.png'" alt="">
        <ul>
            <li>Background color: #ffffff with 20% opacity</li>
            <li>Border: <span style="background: rgba(0,0,0,0.05) ">#000000 with 5% opacity</span></li>
            <li>Effect: none</li>
            <li>Text color: transparent, for labels: <span style="background: rgba(0,0,0,0.25) ">#000000 with 25% opacity</span></li>
        </ul></li>
        <li>Imperative Controls:<br />
        <img class="img-original" :src="'/images/control-redesign/button-disabled.png'" alt="">
            <ul>
                <li>Background color: 20% opacity</li>
                <li>Effect: none</li>
            </ul></li>
</ul>

<h3>Redesign in the Software</h3>

<p>Since the controls are also patterns in the software the redesign could mostly be done via CSS by me. Some special cases were also removed by our developers, and the use of control states had to be standardized - with the rules mentioned above. Since the states were previously used incorrectly in the Scala code, developers also had to do this, which allowed the CSS to take effect in all controls. </p>

<img :src="'/images/control-redesign/example-ui-before.jpg'" alt="">
<p class="image-description">A screen of the settings UI before the redesign.</p>

<img :src="'/images/control-redesign/example-ui-after.jpg'" alt="">
<p class="image-description">The same screen after the control redesign.</p>


</div>

<HighlightedProjects currentProject="1" />
