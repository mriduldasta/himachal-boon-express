import { Product } from "@/types/product";
import honeyImg from "@/assets/product-honey.jpg";
import rajmaImg from "@/assets/product-rajma.jpg";
import walnutsImg from "@/assets/product-walnuts.jpg";
import gheeImg from "@/assets/product-ghee.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Pure Himalayan Honey",
    description: "100% natural honey harvested from wildflowers in the pristine valleys of Himachal Pradesh. Rich in antioxidants and natural enzymes.",
    price: 599,
    image: honeyImg,
    category: "Honey",
    weight: "500g",
    stock: 45,
    isPopular: true,
    benefits: [
      "Rich in antioxidants",
      "Natural energy booster",
      "Aids digestion",
      "Antibacterial properties"
    ],
    source: "Rohru, Himachal Pradesh",
    usage: "Perfect for daily consumption, tea, or as a natural sweetener",
    storage: "Store in a cool, dry place. Crystallization is natural and indicates purity."
  },
  {
    id: "2",
    name: "Premium Himachali Rajma",
    description: "Dark red kidney beans grown in the high-altitude farms of Himachal. Known for their unique taste and texture.",
    price: 249,
    image: rajmaImg,
    category: "Pulses",
    weight: "1kg",
    stock: 60,
    isNew: true,
    benefits: [
      "High in protein and fiber",
      "Rich in iron",
      "Supports heart health",
      "Helps in weight management"
    ],
    source: "Mountain farms of Himachal Pradesh",
    usage: "Perfect for making authentic Rajma curry, soups, and salads",
    storage: "Store in an airtight container in a cool, dry place"
  },
  {
    id: "3",
    name: "Premium Himalayan Walnuts",
    description: "Fresh, hand-picked walnuts from Himachal orchards. Crunchy texture with rich, buttery flavor.",
    price: 899,
    image: walnutsImg,
    category: "Dry Fruits",
    weight: "500g",
    stock: 30,
    isPopular: true,
    benefits: [
      "Rich in Omega-3 fatty acids",
      "Boosts brain health",
      "High in antioxidants",
      "Supports heart health"
    ],
    source: "Walnut orchards of Shimla & Kinnaur",
    usage: "Eat raw, add to cereals, baked goods, or as a healthy snack",
    storage: "Refrigerate for longer freshness. Best consumed within 3 months."
  },
  {
    id: "4",
    name: "Pure Desi Ghee",
    description: "Traditional hand-churned ghee made from grass-fed cow milk. Golden, aromatic, and packed with nutrients.",
    price: 749,
    image: gheeImg,
    category: "Dairy",
    weight: "500ml",
    stock: 25,
    isPopular: true,
    isNew: true,
    benefits: [
      "Rich in vitamins A, D, E, K",
      "Aids digestion",
      "Boosts immunity",
      "Improves bone health"
    ],
    source: "Traditional gaushalas in Himachal valleys",
    usage: "Perfect for cooking, frying, or as a topping on rotis and rice",
    storage: "Store in an airtight container. No refrigeration needed."
  }
];
