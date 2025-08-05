import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Heart } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for culinary excellence and outstanding service",
    },
    {
      icon: Users,
      title: "Expert Chefs",
      description: "Our talented team creates memorable dining experiences",
    },
    {
      icon: Clock,
      title: "25+ Years",
      description: "A quarter-century of serving exceptional cuisine",
    },
    {
      icon: Heart,
      title: "Made with Love",
      description:
        "Every dish is prepared with passion and attention to detail",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Story of
              <span className="block text-amber-600">Culinary Passion</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 1999, Bella Vista has been a cornerstone of fine
              dining, combining traditional techniques with innovative flavors.
              Our commitment to sourcing the finest local ingredients and
              supporting sustainable farming practices makes every meal an
              ethical and delicious choice.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Led by Executive Chef Maria Rodriguez, our kitchen team creates
              seasonal menus that celebrate both classic and contemporary
              cuisine, ensuring every visit offers something new to discover.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border-none shadow-sm hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-4 text-center">
                    <feature.icon className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/about1.webp"
                  alt="Chef preparing food"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="/about2.jpeg"
                  alt="Restaurant interior"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="/about3.jpeg"
                  alt="Fresh ingredients"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="/about4.jpeg"
                  alt="Plated dish"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
