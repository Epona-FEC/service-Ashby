import React from 'react';
import MarkdownContainer from './MarkdownContainer.jsx';

function CostContainer() {
  return (
    <div>
      <div>(possible bestseller tag)</div>
      <div>Price (might be a markdown pice)</div>
      <div>(goes to right of price, possible full price if on markdown)</div>
      <MarkdownContainer />
    </div>
  );
};

export default CostContainer;

/*
Cost Container
---
| (bestseller tag)
|
| PriceNow   NormalFullPrice (seperate component? part of pricenow?)
| ---       ---
| |!price   | (sale adjust)
| ---       ---
|
| Markdown Container
| ---
| |(savings)
| |(sales ending tag - time remaining)
| ---
---
*/