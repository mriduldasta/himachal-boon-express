import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Handshake, Leaf, Truck, Shield, Star } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-mountains.jpg";

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  const benefits = [
    {
      icon: Handshake,
      title: "Direct from Farmers",
      description: "No middlemen, ensuring fair prices for farmers and authentic products for you"
    },
    {
      icon: Leaf,
      title: "100% Pure & Organic",
      description: "All products are naturally grown without chemicals or pesticides"
    },
    {
      icon: Truck,
      title: "Free Delivery in Chandigarh",
      description: "Free home delivery on orders above ₹500"
    },
    {
      icon: Shield,
      title: "Money-Back Guarantee",
      description: "Not satisfied? Get 100% refund, no questions asked"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Chandigarh",
      rating: 5,
      text: "The honey is absolutely pure! You can taste the difference. Love supporting local farmers through Himalayan Boon."
    },
    {
      name: "Rajesh Kumar",
      location: "Mohali",
      rating: 5,
      text: "Best rajma I've ever had! Reminds me of my grandmother's cooking. Fast delivery and great packaging."
    },
    {
      name: "Anjali Verma",
      location: "Panchkula",
      rating: 5,
      text: "Finally found authentic Himalayan products! The ghee is amazing and the walnuts are so fresh. Highly recommended!"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
            Pure Himachali Products,<br />Delivered Fresh to Your Doorstep
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Directly from farmers • 100% Authentic • No Middlemen
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button variant="hero" size="lg">
                Shop Now
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-serif">Featured Products</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Handpicked selection of our finest organic products from the Himalayas
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/products">
            <Button variant="secondary" size="lg">
              View All Products
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 font-serif">Why Choose Himalayan Boon?</h2>
            <p className="text-muted-foreground text-lg">
              Bringing the purity of Himalayas to your home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 font-serif">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-serif">What Our Customers Say</h2>
          <p className="text-muted-foreground text-lg">
            Real reviews from real customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 font-serif">
            Ready to Experience Pure Himalayan Goodness?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of happy customers enjoying authentic products from the mountains
          </p>
          <Link to="/products">
            <Button variant="hero" size="lg">
              Start Shopping
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
