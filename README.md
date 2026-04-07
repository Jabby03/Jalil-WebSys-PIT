Hi, Welcome to My Repository!

- This project is a single-page web resume built as my Web Systems Practical Individual Task. 
- It showcases my personal profile, education, skills, design projects, and contact information — all in one clean, interactive page.
- The entire project is built with HTML, CSS, JavaScript, and jQuery, with a warm brown design theme and smooth interactive features throughout.

About this Project:

- This is a personal resume website for **Abduljabar Jalil**, a Graphic Designer and BS Information Technology student at the University of Science and Technology of Southern Philippines. 
- The site was designed and developed as part of a Web Systems course requirement, demonstrating skills in front-end web development including layout, styling, DOM manipulation, and jQuery-powered interactivity.
- The design uses a warm espresso-brown color palette, clean card-based layout, and a sticky navigation bar — all styled through an external CSS file using CSS variables, Flexbox, and Grid.


Different Sections of my Resume:

🏠Home| Profile photo, name, title, contact pills, and about me summary
🎓 Education | Senior High (STEM) and current BS Information Technology
✏️ Skills | Graphic Design, UI/UX, Figma, Canva, Photoshop, and more
📁 Projects | Documented design work with descriptions and sample images
📬 Contact | Contact details and a message form

Features of this Project: 

- All interactive features are powered by jQuery.

1. Smooth Scroll Navigation
Clicking any navigation button smoothly animates the page to the target section instead of jumping abruptly. The active nav button is also highlighted to show your current location.
- Trigger: Click on a nav button
- jQuery methods used:** `.animate()`, `.addClass()`, `.removeClass()`

2. Scroll Spy
As you scroll through the page manually, the navigation bar automatically detects which section is currently in view and highlights the correct button in real time — no clicking needed.
- Trigger: Scroll event on the window
- jQuery methods used:** `.on('scroll')`, `.addClass()`, `.removeClass()`

3. Project Accordion
Each project card in the Projects section is clickable. Clicking a card expands it to reveal a detailed description, tools used, and sample work images. Clicking again collapses it. Opening one card automatically closes any other that is open.
- Trigger: Click on a project card
- jQuery methods used: `.slideToggle()`, `.slideUp()`

4. Copy to Clipboard
In the Contact section, clicking any contact detail (phone, email, website, etc.) instantly copies its value to your clipboard. The row briefly flashes green as visual confirmation.
- Trigger: Click on a contact list item
- jQuery methods used: `.css()`, `navigator.clipboard` API

5. Contact Form Validation
The message form validates all fields before submission. If any field is empty, a red warning appears. When all fields are filled correctly, a green success message is shown and the form is cleared automatically.
- Trigger: Click the Send Message button
- jQuery methods used: `.val()`, `.text()`, `.append()`, `.css()`

6. Dark Mode Toggle
A fixed button at the bottom-right of the screen toggles the entire site between light and dark themes. The button label updates accordingly between "Dark Mode" and "Light Mode".
- Trigger: Click the Dark Mode / Light Mode button
- jQuery methods used: `.toggleClass()`, `.text()`

Thank you for your time!

