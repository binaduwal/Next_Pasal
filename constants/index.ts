
interface Facility {
  id: number;
  title: string;
  description: string;
  icon: IconKey; 
}

export const navLink = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Shop",
    link: "/shop",
  },
  {
    title: "Cart",
    link: "/cart",
  },
  {
    title: "Sign in",
    link: "/signin",
  },
  {
    title: "Dashboard",
    link: "/dashboard",
  },
];

export const footerLinks = [
  {
    id: "1",
    title: "Get to Know Us",
    links: [
      "Careers",
      "Blog",
      "About Amazon",
      "Investor Relations",
      "Shoppers Devices",
      "Shoppers Science",
    ],
  },
  {
    id: "2",
    title: "Make Money with Us",
    links: [
      "Sell products on Shoppers",
      "Sell on Amazon Business",
      "Sell apps on Amazon",
      "Become an Affiliate",
      "Advertise Your Products",
      "Sell Product with Us",
      "Host an Shoppers Hub",
      "See More Make Money with Us",
    ],
  },
  {
    id: "3",
    title: "Shoppers Payment Products",
    links: [
      "Shoppers Business Card",
      "Shop with Points",
      "Reload Your Balance",
      "Shoppers Currency Converter",
    ],
  },
  {
    id: "4",
    title: "Let Us Help You",
    links: [
      "Shoppers and COVID-19",
      "Your Account",
      "Your Orders",
      "Shipping Rates & Policies",
      "Returns & Replacements",
      "Manage Your Content and Devices",
      "Shoppers Assistant",
      "FAQ & Help",
    ],
  },
];

export const facilities: (Facility & { icon: IconKey })[] = [
  {
    id: 100,
    title: "Free Delivery",
    description: "When ordering above $500",
    icon: "FaShippingFast",
  },
  {
    id: 200,
    title: "90 Days Return",
    description: "If goods have problems",
    icon: "FaUndo",
  },
  {
    id: 300,
    title: "Secure Payment",
    description: "100% secure payment",
    icon: "FaLock",
  },
  {
    id: 400,
    title: "24/7 Support",
    description: "Dedicated support",
    icon: "FaHeadset",
  },
];
