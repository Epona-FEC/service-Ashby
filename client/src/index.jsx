const React = require('react');
const ReactDOM = require('react-dom');

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('app')
);


/*
visual on ideas for component layout

!title

---
| (bestseller tag)
|
| ---       ---
| |!price   | (sale adjust)
| ---       ---
| ---
| |(savings)
| |(sales ending tag - time remaining)
| ---
---

---
| ---
| | (options, may be more than one - in dropdowns)
| | title of option
| | dropdown - populate with option list
| ---
| ---
| | (personalization - includes text area)
| | personalization label
| | text area for pers.
| ---
| ---
| | (quantity can place an order for in dropdown)
| | quantity label
| | quantity dropdown - up to max order qty
| ---
| !button - add to cart
| (digital download)
| (free shipping icon & note)
| (low stock icon & note)
| (in other carts icon & note)
---

---
| (handmade icon)
| (vintage icon)
| ---
| | !material(s) - mini header and large text (if several, does a "more" underlined that shows the rest)
| | materials header
| | ---
| | | materials list - limit display to one line w/ a click to expand
| | ---
| ---
| (dimensions -  mini header and larg text)
| ---
| | !description - mini header with a bit larger text, has "Learn more about this item button" to show the rest
| | description header
| | ---
| | | actual description - limit display size
| | | button - opens rest of description
| | ---
| ---
---

---
| ---                                 ---
| | "Ready to ship in"   <whitespace> | "From"
| | timeframe            <whitespace> | country/state/city
| ---                                 ---
| ("Cost to ship" --> not there for digital)
| (shipping cost)
| (Get shipping cost - button, includes down/up carrot to open shipping module
| shipping module - has dropdown for country (if int'l ship) --> not there for digital
| (return short blurb)
---

---
| shop policies - button that pops up shop policies reader that lays on top of page
| (terms and conditions - works like shop policies)
| (Gift wrapping available , dashed underline - hover brings up blurb)
| (FAQs - button just like shipping)
---

*/