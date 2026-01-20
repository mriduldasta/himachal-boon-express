import { useParams, Link } from "react-router-dom";
import { ShoppingCart, ArrowLeft, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link to="/products">
            <Button variant="secondary">Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link to="/products">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </Link>

        {/* Product Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden shadow-large">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-4 left-4 flex gap-2">
              {product.isNew && (
                <Badge className="bg-secondary text-secondary-foreground">New</Badge>
              )}
              {product.isPopular && (
                <Badge className="bg-primary text-primary-foreground">Popular</Badge>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold mb-4 font-serif">{product.name}</h1>
            <p className="text-muted-foreground text-lg mb-6">{product.description}</p>

            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-4xl font-bold text-primary">₹{product.price}</span>
              <span className="text-lg text-muted-foreground">/ {product.weight}</span>
            </div>

            {product.stock > 0 ? (
              <div className="flex items-center gap-2 mb-6 text-primary">
                <Check className="h-5 w-5" />
                <span className="font-medium">In Stock ({product.stock} available)</span>
              </div>
            ) : (
              <Badge variant="destructive" className="mb-6">Out of Stock</Badge>
            )}

            <div className="flex gap-3 mb-8">
              <Button
                variant="secondary"
                size="lg"
                className="flex-1"
                onClick={() => addToCart(product)}
                disabled={product.stock === 0}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <a
                href={`https://wa.me/918278793606?text=${encodeURIComponent(`Hi! I want to order:\n\n📦 ${product.name}\n💰 Price: ₹${product.price}\n📏 Weight: ${product.weight}\n\nPlease confirm availability and delivery details.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button
                  size="lg"
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white"
                  disabled={product.stock === 0}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Buy on WhatsApp
                </Button>
              </a>
            </div>

            <Card>
              <CardContent className="p-6 space-y-6">
                {product.source && (
                  <div>
                    <h3 className="font-semibold mb-2 font-serif">Source</h3>
                    <p className="text-muted-foreground">{product.source}</p>
                  </div>
                )}

                {product.benefits && (
                  <div>
                    <h3 className="font-semibold mb-2 font-serif">Benefits</h3>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Separator />

                {product.usage && (
                  <div>
                    <h3 className="font-semibold mb-2 font-serif">Usage</h3>
                    <p className="text-muted-foreground">{product.usage}</p>
                  </div>
                )}

                {product.storage && (
                  <div>
                    <h3 className="font-semibold mb-2 font-serif">Storage Instructions</h3>
                    <p className="text-muted-foreground">{product.storage}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <Card>
                <CardContent className="p-4 text-center">
                  <Badge className="bg-primary text-primary-foreground mb-2">100% Pure</Badge>
                  <p className="text-xs text-muted-foreground">Authentic</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Badge className="bg-primary text-primary-foreground mb-2">Direct</Badge>
                  <p className="text-xs text-muted-foreground">From Farmers</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Badge className="bg-primary text-primary-foreground mb-2">FSSAI</Badge>
                  <p className="text-xs text-muted-foreground">Licensed</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-8 font-serif">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
