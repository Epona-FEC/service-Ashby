import React from 'react';
import TimeframeContainer from './TimeframeContainer';
import ShipSourceContainer from './ShipSourceContainer';

function ShippingContainer() {
  return (
    <div>
      <TimeframeContainer />
      <ShipSourceContainer />
      <div>(cost to ship)</div>
      <div>(shipping cost)</div>
      <div>(Get shipping cost button) -- drops to make shipping module</div>
      <div>(returns blurb)</div>
    </div>
  );
}

export default ShippingContainer;

/*
Shipping Container
---
| Timeframe Container                 Ship Source Container
| ---                                 ---
| | "Ready to ship in"   <whitespace> | "From"
| | timeframe            <whitespace> | country/state/city
| ---                                 ---
|
| ("Cost to ship" --> not there for digital)
| (shipping cost)
| (Get shipping cost - button, includes down/up carrot to open shipping module
| --shipping module - has dropdown for country (if int'l ship) --> not there for digital
| (return short blurb)
---
*/
