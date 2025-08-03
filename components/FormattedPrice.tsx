import React from "react";

interface FormattedPriceProps {
  price: number; 
  className?: string;
}

export const FormattedPrice: React.FC<FormattedPriceProps> = ({ price, className }) => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return <span className={className}>{formattedPrice}</span>;
};

