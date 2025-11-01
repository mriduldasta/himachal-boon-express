import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Award, Users, TrendingUp } from "lucide-react";
import farmersImage from "@/assets/about-farmers.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Authenticity",
      description: "Every product is 100% genuine, sourced directly from verified Himalayan farmers"
    },
    {
      icon: Award,
      title: "Quality",
      description: "We never compromise on quality. Each product undergoes strict quality checks"
    },
    {
      icon: Users,
      title: "Fair Trade",
      description: "By eliminating middlemen, we ensure fair prices for both farmers and customers"
    },
    {
      icon: TrendingUp,
      title: "Sustainability",
      description: "Supporting traditional farming methods and sustainable agricultural practices"
    }
  ];

  const milestones = [
    { year: "2023", event: "Founded Himalayan Boon with a mission to connect farmers directly to consumers" },
    { year: "2023", event: "Partnered with 20+ farmers across Rohru and surrounding villages" },
    { year: "2024", event: "Served 500+ happy customers in Chandigarh and Tri-City" },
    { year: "2024", event: "Expanded product range to include 50+ authentic Himalayan products" },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 font-serif">Our Story</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From the pristine mountains of Rohru to your doorstep in Chandigarh - 
            A journey of authenticity, trust, and pure Himalayan goodness
          </p>
        </div>

        {/* Founder Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="rounded-lg overflow-hidden shadow-large">
            <img
              src={farmersImage}
              alt="Himalayan Farmers"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <Badge className="w-fit mb-4 bg-secondary text-secondary-foreground">Our Mission</Badge>
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Bridging Mountains and Cities
            </h2>
            <p className="text-muted-foreground mb-4">
              Himalayan Boon was born from a simple observation: while urban consumers in Chandigarh 
              were paying premium prices for "organic" products, the hardworking farmers in Himachal 
              Pradesh were barely getting fair prices for their authentic produce.
            </p>
            <p className="text-muted-foreground mb-4">
              Having grown up in Rohru, I witnessed firsthand the incredible quality of products that 
              Himalayan farmers produce - pure honey from wildflowers, rajma grown in high-altitude 
              farms, hand-picked walnuts, and traditional desi ghee. Yet, multiple middlemen were 
              taking the lion's share of profits.
            </p>
            <p className="text-muted-foreground">
              Himalayan Boon eliminates these middlemen, creating a direct bridge between the farmers 
              I know personally and the conscious consumers of Chandigarh. Every purchase supports 
              farming families and guarantees you authentic products at fair prices.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 font-serif">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 font-serif">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 font-serif">Our Journey</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Badge className="h-fit bg-primary text-primary-foreground">{milestone.year}</Badge>
                    <p className="text-muted-foreground">{milestone.event}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quality Guarantee */}
        <div className="gradient-hero text-primary-foreground rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-6 font-serif">Our Quality Guarantee</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold text-xl mb-2">100% Authentic</h3>
              <p className="text-primary-foreground/90">
                Every product sourced directly from verified farmers
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">FSSAI Licensed</h3>
              <p className="text-primary-foreground/90">
                All products meet food safety standards
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Money Back</h3>
              <p className="text-primary-foreground/90">
                Not satisfied? Get 100% refund, no questions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
