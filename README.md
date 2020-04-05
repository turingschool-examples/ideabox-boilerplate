# Ideabox Group Project

Every developer has more ideas than time. As David Allen likes to say "the human brain is for creating ideas, not remembering them." In this project, we'll be building an application a new client that records and archives our ideas (good and bad alike).

Throughout the project, one of our focuses will be on providing a fluid and responsive client-side interface. To this end, we'll rely on JavaScript and to implement snappy filtering in the browser, and `localStorage` to persist our wonderful ideas between sessions.  Our goal is to also incorporate an agile workflow by incorporating two weekly sprints.

*Note*: Expectations listed for Iteration 0-1 should be complete by your first check-in. No JavaScript should be written before that check-in, unless you get approval to move ahead with functionality from your Project Manager.

## Learning Goals

* Continue to improve on building responsive client-side applications with good user feedback
* Understand how to implement client-side data persistence using `localStorage`
* Understand what it looks like to have a separate data model (using a class) and DOM model
* Utilize `data-*` attributes
* Incorporate & iterate over arrays in order to filter what is being displayed
* Craft code with clean style, using small functions that show trends toward DRYness and SRP

## Setup

- Complete a DTR
- Create a slack channel for all team members and your Project Manager.
- Fork [the boilerplate
  repository](https://github.com/turingschool-examples/ideabox-boilerplate). Add all team members and your Project Manager as collaborators.
- Deploy your application to GitHub Pages.
- In the team channel, drop the repo link and GitHub pages link.

## Progression

### Iteration 0 - Desktop Layout

Plan then write the HTML and CSS so that your application matches this comp. Based on what you are building, you can anticipate that the Idea "cards" will not always be there on page load, but for now, they should.

Use the same text on your cards that is used in the spec so you can ensure your spacing/sizing is accurate.

![Desktop Layout](https://frontend.turing.io/projects/module-1/assets/ideabox-group/desktop.jpg)
![Colors](https://frontend.turing.io/projects/module-1/assets/ideabox-group/colors.jpg)
![Colors](https://frontend.turing.io/projects/module-1/assets/ideabox-group/icons.jpg)

You will need the `svg` files for the star, delete, and menu icons. [Here's the link to download the `svg` icons.](https://drive.google.com/drive/folders/18xpWplI0tpXIK1omBZeq04LEx2OMzzMK?usp=sharing)

### Iteration 1 - Mobile Layout

Now that your Desktop Layout is in place, it's time to write some media queries so this is a responsive site.

Full mobile layout:

![Mobile Layout](https://frontend.turing.io/projects/module-1/assets/ideabox-group/mobile.jpg)

Full mobile layout with open navigation:

![Mobile Layout with Dropdown](https://frontend.turing.io/projects/module-1/assets/ideabox-group/mobile-dropdown.jpg)

### Iteration 2 and beyond

After you have completed Iterations 0-1, your Project Manager will provide you with the next iteration.

## Rubric

### Functional Expectations

* **4:** Application meets all of the expectations from Iteration 4 and most functionality from Iteration 5.
* **3:** Application meets all of the expectations from Iteration 4.
* **2:** Application meets all of the expectations of Iteration 3.
* **1:** Application meets all of the expectations of Iteration 2.

### Comp Recreation

* **4:** Additional elements that have been added match the visuals established in the comps. Every little detail was built out thoughtfully - from hover states to placeholders, etc.
* **3:** Application implements all major comp details accurately and correctly on desktop and mobile (colors, fonts, icons, spacing, alignment, etc.) with **smooth transitions between screen sizes**. Additional elements added generally match the visuals established in the comps, but may be slightly awkward.
* **2:** Application implements most major comp details accurately and correctly on **desktop and mobile** (colors, fonts, icons, spacing, alignment, etc.). Transitions between screen sizes may not be smooth.
* **1:** Application implements all major comp details on desktop only (colors, fonts, icons, spacing, alignment, etc.), OR masonry layout is not implemented.

### Git Workflow & Documentation

* **4:** A PR template was used. A code review was requested and completed by a mentor, and all team members can speak to how the feedback in code review was implemented (and point to the commit(s) that implemented the feedback).
* **3:** Every team member (on a team of 3) authors between 25%-40% of the commits. Most commits are formatted correctly. Every team member contributes to at least 2 meaningful PR conversations. The README is formatted well and contains:
  - Overview of project and goals
  - Overview of technologies used, challenges, and wins, any other reflections
  - Screenshots of comp and your app
  - Credit all teammates
* **2:** Every team member (on a team of 3) authors between 20%-45% of the commits. More than a few commits are formatted incorrectly. The README is formatted well but may be lacking in detail.
* **1:** Commit and PR history does not tell a story of the application OR a README has not been created/has minimal information.

### JavaScript - Style and Implementation

* **4:**
  * All loops are refactored into the proper array prototype iteration methods
  * Uses logical operators instead of if/else statements where applicable
  * When 'Filtering and Searching by Text' and 'Viewing Urgent ToDo Cards', to-dos that do not need to be shown on the DOM should be completely removed from the DOM, instead of only being hidden from view
* **3:**
  * Application uses the Data Model exclusively to track changes to the ideas,
    and display of ideas happens after the Data Model has been updated
  * DRY and SRP practices are demonstrated in codebase and students can speak to implementation decisions
  * All functions are less than 10 lines
  * There are no nested if/else statements
  * There are no global variables aside from query selectors and an array for your to-dos
  * Uses event delegation correctly on dynamic elements for deleting, checking tasks off, and marking a to-do urgent
* **2:** Application correctly implements data model for the `Idea` class including all required methods
* **1:** Crafts JS according to the [Turing JS Style Guide](https://github.com/turingschool-examples/javascript/tree/master/es5)
