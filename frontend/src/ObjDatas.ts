export const tabs = [
  {
    id: "tab1",
    label: "Introduction",
    content:
      "Welcome to Modave Store, your premier destination for fashion-forward clothing and accessories. We pride ourselves on offering a curated selection of rare and beautiful items sourced both locally and globally. Our mission is to bring you the latest trends and timeless styles, ensuring every piece reflects quality and elegance. Discover the perfect addition to your wardrobe at Modave Store.",
  },
  {
    id: "tab2",
    label: "Our Vision",
    content:
      "At Modave Store, our vision is to inspire confidence and individuality through fashion. We aim to create a shopping experience that blends style, quality, and innovation, making fashion accessible to everyone.",
  },
  {
    id: "tab3",
    label: "What Sets Us Apart",
    content:
      "What sets Modave Store apart is our commitment to quality, sustainability, and customer satisfaction. Each item in our collection is carefully chosen to meet the highest standards.",
  },
  {
    id: "tab4",
    label: "Our Commitment",
    content:
      "Our commitment is to you, our valued customer. We promise to continue bringing you the best in fashion, keeping you updated with the latest trends while maintaining quality and affordability.",
  },
];

export const listOfFaqs = {
  faqs: [
    {
      category: "General",
      questions: [
        {
          question: "How do I create an account?",
          answer:
            "Click on the 'Sign Up' button on the homepage, enter your details, and follow the instructions to verify your email.",
        },
        {
          question: "Do I need an account to place an order?",
          answer:
            "No, you can checkout as a guest, but creating an account allows you to track orders and save your preferences.",
        },
        {
          question: "How can I reset my password?",
          answer:
            "Click on 'Forgot Password' at the login page and follow the instructions to reset it.",
        },
      ],
    },
    {
      category: "Orders & Shipping",
      questions: [
        {
          question: "How do I track my order?",
          answer:
            "You can track your order by logging into your account and clicking on 'My Orders' or using the tracking link sent via email.",
        },
        {
          question: "How long does delivery take?",
          answer:
            "Delivery times vary based on location and shipping method. Standard delivery takes 3-7 business days.",
        },
        {
          question: "Do you offer international shipping?",
          answer:
            "Yes, we ship worldwide! Shipping costs and delivery times vary by country.",
        },
      ],
    },
    {
      category: "Payments & Refunds",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept credit/debit cards, PayPal, Apple Pay, and other secure payment options.",
        },
        {
          question: "Can I cancel or modify my order after placing it?",
          answer:
            "Orders can only be canceled or modified within 1 hour of placing them. Contact our support team for assistance.",
        },
        {
          question: "How do refunds work?",
          answer:
            "Refunds are processed within 5-7 business days after your return is received and approved.",
        },
      ],
    },
    {
      category: "Returns & Exchanges",
      questions: [
        {
          question: "What is your return policy?",
          answer:
            "We accept returns within 30 days of purchase. Items must be unused and in their original packaging.",
        },
        {
          question: "How do I return an item?",
          answer:
            "Visit our 'Returns & Exchanges' page, enter your order details, and follow the return process.",
        },
        {
          question: "Can I exchange an item for a different size?",
          answer:
            "Yes, exchanges are allowed within 30 days if the item is in stock.",
        },
      ],
    },
    {
      category: "Customer Support",
      questions: [
        {
          question: "How can I contact customer support?",
          answer:
            "You can reach us via email, live chat, or our contact form on the website.",
        },
        {
          question: "Do you offer discounts or promo codes?",
          answer:
            "Yes! Subscribe to our newsletter or check our homepage for ongoing promotions.",
        },
      ],
    },
  ],
};

export const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Products", path: "/products" },
  { name: "Blog", path: "/blog" },
  {
    name: "Pages",
    subLinks: [
      { name: "About Us", path: "/aboutus" },
      { name: "Store List", path: "/storelist" },
      { name: "Contact Us", path: "/contactus" },
      { name: "FAQs", path: "/faqs" },
      { name: "Customer Feedbacks", path: "/feedbacks" },
    ],
  },
  { name: "Buy Theme", path: "/buytheme" },
];
