"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("appetizers");

  const categories = [
    { id: "appetizers", name: "Appetizers" },
    { id: "mains", name: "Main Courses" },
    { id: "desserts", name: "Desserts" },
    { id: "beverages", name: "Beverages" },
  ];

  const menuItems = {
    appetizers: [
      {
        name: "Truffle Arancini",
        description:
          "Crispy risotto balls with black truffle, parmesan, and sage aioli",
        price: "$18",
        image: "/menu1.jpeg",
        dietary: ["vegetarian"],
      },
      {
        name: "Seared Scallops",
        description:
          "Pan-seared scallops with cauliflower purée and pancetta chips",
        price: "$24",
        image: "/menu2.jpeg",
      },
      {
        name: "Burrata Caprese",
        description:
          "Fresh burrata with heirloom tomatoes, basil oil, and aged balsamic",
        price: "$16",
        image: "/menu3.jpeg",
        dietary: ["vegetarian"],
      },
    ],
    mains: [
      {
        name: "Wagyu Beef Tenderloin",
        description:
          "Grade A5 wagyu with roasted bone marrow, seasonal vegetables, and red wine jus",
        price: "$85",
        image: "/menu4.jpeg",
      },
      {
        name: "Wild Salmon",
        description:
          "Alaskan salmon with quinoa pilaf, roasted vegetables, and lemon herb butter",
        price: "$42",
        image: "/menu5.webp",
      },
      {
        name: "Duck Confit",
        description:
          "Slow-cooked duck leg with cherry gastrique, duck fat potatoes, and wilted greens",
        price: "$38",
        image: "/menu6.jpeg",
      },
    ],
    desserts: [
      {
        name: "Chocolate Soufflé",
        description:
          "Dark chocolate soufflé with vanilla bean ice cream and berry coulis",
        price: "$14",
        image: "/menu7.jpeg",
        dietary: ["vegetarian"],
      },
      {
        name: "Tiramisu",
        description:
          "Classic Italian tiramisu with espresso-soaked ladyfingers and mascarpone",
        price: "$12",
        image: "/menu8.jpeg",
        dietary: ["vegetarian"],
      },
    ],
    beverages: [
      {
        name: "Wine Selection",
        description: "Curated selection of local and international wines",
        price: "$12-$150",
        image: "/menu9.jpeg",
      },
      {
        name: "Craft Cocktails",
        description:
          "Signature cocktails crafted with premium spirits and fresh ingredients",
        price: "$16-$22",
        image: "/menu10.webp",
      },
    ],
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted dishes made with the finest
            ingredients and presented with artistic flair
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`${
                activeCategory === category.id
                  ? "bg-amber-600 hover:bg-amber-700 text-white"
                  : "border-amber-600 text-amber-600 hover:bg-amber-50"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems[activeCategory]?.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                {item.dietary && (
                  <div className="absolute top-2 right-2">
                    {item.dietary.map((diet) => (
                      <Badge
                        key={diet}
                        variant="secondary"
                        className="bg-green-100 text-green-800"
                      >
                        {diet}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <span className="text-lg font-bold text-amber-600">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
