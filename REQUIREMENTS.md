# Requirements

## Core
- [x] An text box on the page that can be used to filter based on the name of a school. When the value of this text box changes, only schools that have the value as a substring of their name should be shown on the map and in the list.
  
  **The `input` element should be available on the global `window` object as a variable named `window.schoolNameFilter`.**

- [x] A set of checkboxes that can be used to filter based on the grades (K-12) served at a school. When a box is checked, only schools that serve the corresponding grade should be shown on the map. (_You can alternatively choose to include filters for grade levels. If you do, only include options for Elementary, Middle, High, and Transition/Overage -- not, for example, `Elementary-Middle`_).
  
  **An array of `input` elements should be available on the global `window` object as a variable named `window.schoolLevelFilters` (or `window.schoolLevelFilters` if using school levels instead of grades).**

- [x] A marker should be present on the map for each school that meets the current filter criteria, and no markers should be present for schools that _do not_ meet the filter criteria.

  **The Leaflet Map object that represents the map on the page should be available on the global `window` objects as a variable named `window.schoolMap`.**

- [x] A list item should be present in the schools list for each school that meets the current filter criteria, and no list items should be present for schools that _do not_ meet the filter criteria. List items should contain at least:
  - School name
  - Grades served

  **The element represeting the list (i.e. the `ul` or `ol`) should be available on the global `window` object as a variable named `window.schoolList`.**

## Stretch 1: Selecting Schools

- [ ] When you click on a school in the list or map, the school should be highlighted. The corresponding school in the map or list should also be highlighted.

- [ ] When a school is highlighted, that school's catchment area should be shown on the map. If the school is not a neighborhood school (i.e., doesn't have a catchment), then the outline of the city should be shown.

## Stretch 2: Comparing Schools

- [ ] When a school is highlighted, it should be added to a table where multiple schools can be campared side-by-side.

## Stretch 3: Sharing School Selections

- [ ] When a school is highlighted, the ID of the school should be added to a comma-separated list in the hash of the URL

- [ ] When the page is loaded with a hash, the comma-separated list in the hash should be set as the school selection.