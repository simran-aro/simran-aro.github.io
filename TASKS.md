- [x] Create an _index.html_ with a basic HTML page structure
- [x] Create an empty CSS file for the project
- [x] Create an empty JavaScrip file for the project
- [x] Link to the empty CSS file from the bottom of the `head` of your HTML file
- [x] Link to the empty JavaScript file from the bottom of the `body` of your HTML file
- [x] Add a level-1 heading (`h1`) to the body with the app title, just so there's something to see on the page

Check the app in the browser.

- [x] Add a Leaflet map for displaying the list of schools to the page
  * **Tip:** Usually when I'm starting with a new leaflet map, I just Google "leaflet quickstart" and copy a few things from that page. Other times I may use a CDN like 
  * **Recommendation:** Give your map a meaningful ID -- something like `school-map`, and then name the corresponding JavaScript variable something similar, e.g. `schoolMap`.
- [x] Import the data from _site/data/schools.js_ into your JavaScript file.
- [x] Create a function called `makeSchoolFeature` to transform one of the school elements into a GeoJSON-like feature. **This function should be made available globally (on the window object)**.
- [x] Use the function to display all the `schools` data on the map.
- [x] Create a function to show an array of schools on the map.

----------

- [ ] Create a list element (unordered -- `ul`) in the HTML give it an id of `school-list`
- [x] Write a function that fills in the list with list item (`li`) elements for each school in an array
- [x] Add a checkbox for each grade K-12 to the page.
- [x] Add a text box to filter schools that contain a given string. The text box should have an id of `school-name-filter`.
- [ ] Write a predicate function called `shouldShowSchool` that will return `true` if a given school should be shown according to the currently selected filters, and will return `false` if a given school should not be shown. For now, ignore the filters and always return `true`.
