import React from "react";

function PriceLabel(porps) {
  return (
    <div className="disButtonBase-root disChip-root makeStyles-price-23 disChip-outlined">
      <span className="disChip-label">{porps.sellPrice} DANG</span>
    </div>
  );
}
export default PriceLabel;
