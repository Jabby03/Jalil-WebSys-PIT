On this file, it showcases what AI and prompts that I used to help me with this project.

AI Used: Claude AI

Entry #1 Tool Used: Claude AI Prompt: "How can I move the contact row, hero-name, hero-title, and the about-box to the right?" 
AI Output Summary: Claude suggested wrapping those elements inside a div with a class like .hero-text and using flex-direction: row on the parent #home section along with flex: auto on the text wrapper to push it to the right side beside the photo. 
How I used it: I applied the .hero-text wrapper and the flexbox properties to the #home section in my CSS, which successfully moved the name, title, contact pills, and about box to the right of the profile photo.

Entry #2 Tool Used: Claude AI Prompt: "How can I make a color palette/color section in CSS?" 
AI Output Summary: Claude explained how to use CSS custom properties (variables) inside a :root selector to define a centralized color palette, and how to reference them with var() throughout the stylesheet. 
How I used it: I created the :root block at the top of resume.css with variables like --bg, --card, --accent, --text, --muted, and --tag-bg, which made it easy to keep the color scheme consistent and also made the dark mode feature much simpler to implement later.

Entry #3 Tool Used: Claude AI Prompt: "How may I position the skill tag/pill on the center?" 
AI Output Summary: Claude suggested applying display: flex, flex-wrap: wrap, and justify-content: center to the .skills-grid container. 
How I used it: I added those three properties to .skills-grid in my CSS, which centered all the skill tags horizontally and allowed them to wrap naturally onto the next line when there wasn't enough space.

Entry #4 Tool Used: Claude AI Prompt: "How may I align the home section card?" 
AI Output Summary: Claude suggested using display: flex, flex-direction: row, and align-items: center on the #home section so the photo and the text content sit side by side and are vertically centered. 
How I used it: I applied those flex properties directly to #home in my CSS, which properly aligned the profile photo on the left and the hero text on the right within the same card.

Entry #5 Tool Used: Claude AI Prompt: "How can I add a dark mode feature?" 
AI Output Summary: Claude suggested adding a body.dark CSS class that overrides the :root CSS variables with darker values, toggled by a fixed button using jQuery's .toggleClass() and .text() methods. 
How I used it: I added the body.dark overrides at the bottom of resume.css, placed a fixed #dark-mode-btn button in the HTML, and wrote the jQuery toggle logic in resume.js. The result was a fully working dark mode that switches the entire site's color theme with one click.

Entry #6 Tool Used: Claude AI Prompt: "How can I apply JavaScript/jQuery to my project?" 
AI Output Summary: Claude gave an overview of practical jQuery features suitable for a resume site — smooth scroll, scroll spy, accordion cards, clipboard copy, and form validation — with code examples for each. 
How I used it: This prompt helped me plan out all six interactive features for the project. I used the examples as a starting point and then customized each one to match my specific HTML structure and design.

Entry #7 Tool Used: Claude AI Prompt: "How to add animation or like hover? Like when you point the cursor to the education box, it will levitate something like that? I also want this to add on the other sections." 
AI Output Summary: Claude recommended using CSS transition with transform: translateY(-3px) and a subtle box-shadow on :hover to create a smooth "lift" effect. 
How I used it: I applied the hover transition and translateY transform to .edu-item, .project-item, .skill-tag, .contact-list li, and the nav buttons — giving a consistent levitation effect across all interactive elements.
Entry #8 Tool Used: Claude AI Prompt: "How to add a shadow?" 
AI Output Summary: Claude explained the box-shadow CSS property and provided example values using rgba() for soft, natural-looking shadows. 
How I used it: I added box-shadow to the .section-card elements for a subtle depth effect, and used stronger shadows on :hover states for the education and project cards to enhance the lift animation.

Entry #9 Tool Used: Claude AI Prompt: "How to add an animation that when a user clicked a navigation button, it will scroll down to what the user clicked?" 
AI Output Summary: Claude provided a jQuery snippet using .on('click'), .offset().top, and $("html, body").animate({ scrollTop: ... }) to smoothly scroll to the target section, accounting for the sticky nav height. 
How I used it: I implemented this as Feature 1 in resume.js. I also added the data-target attribute to each nav button in the HTML to link them to their corresponding section IDs, which the jQuery code reads to know where to scroll.

Entry #10 Tool Used: Claude AI Prompt: "How to change the position of the image?" 
AI Output Summary: Claude suggested using object-fit: cover and object-position on the img tag inside a fixed-size container with overflow: hidden to control how the photo is cropped and positioned. 
How I used it: I applied object-fit: cover to the .photo-wrap img and gave the .photo-wrap container a fixed width, height, and border-radius so the profile photo is cleanly cropped and displayed consistently.

Entry #11 Tool Used: Claude AI Prompt: "What is the best way to organize each section?" 
AI Output Summary: Claude recommended using a consistent .section-card class for each section wrapped in a centered .page container using display: flex and flex-direction: column, so all sections stack neatly with uniform spacing. 
How I used it: I used this structure throughout the HTML — every section (#home, #education, #skills, #projects, #contact) shares the .section-card class, and they all sit inside the .page div, giving the layout a clean and consistent look.

Entry #12 Tool Used: Claude AI Prompt: "How can I arrange these photos to the project section?" 
AI Output Summary: Claude suggested using CSS Grid with grid-template-columns: repeat(2, 1fr) inside each project's expanded details to display sample work images in a two-column layout, with a special rule for single images to span the full width. 
How I used it: I created the .img-grid class with those grid properties and placed it inside each .project-more div. For the Academic Awards project which only had one image, the :only-child selector automatically made it span the full width.

Entry #13 Tool Used: Claude AI Prompt: "How to add a feature where you can send a message to the resume's owner?" 
AI Output Summary: Claude suggested building an HTML form with input fields for name and email and a textarea for the message, then using jQuery to validate the fields on button click — showing red or green feedback and clearing the form on success. 
How I used it: I built the contact form in the #contact section and implemented the jQuery validation as Feature 5 in resume.js, using .val() to read and clear inputs, and .text() / .css() to display colored feedback messages.


Thank you for your time!
