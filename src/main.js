//  Global Variables:
var newIdea;
var ideas = [];

//  Query Selectors:
var showStarred = document.querySelector("#showStarred");
var titleInput = document.querySelector("#titleInput");
var bodyInput = document.querySelector("#bodyInput");
var saveButton = document.querySelector("#saveButton");
var searchInput = document.querySelector("#searchInput");
var starIcon = document.querySelector("#starIcon");
var deleteIcon = document.querySelector("#deleteIcon");
var commentIcon = document.querySelector("#commentIcon");

/*
  Event Listeners:
- Show Starred Ideas (click)
- Save button (click)
- Search Ideas form input (keystroke)
- Star (favorite) icon
- Delete icon
- Comment icon

  Functions:
- Show Starred Ideas - Hides instances where `isStarred = false`
- Save button - creates new instance of idea class *enabled upon conditions met*
- Search (filter) - takes form string and scans our instances for it (both title and body)
- Star icon - Sets the instance isStarred value to `true`/ changes icon
  *toggles value and icon upon conditions met*
- Delete icon - Changes icon on mousedown/
  removes item from array on mouse up/ displays fresh view

*/
