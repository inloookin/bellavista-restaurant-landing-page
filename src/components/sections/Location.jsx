import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, Utensils } from "lucide-react";

export function Location() {
  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visit Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Located in the heart of the culinary district, we&apos;re easily
            accessible and ready to welcome you for an unforgettable dining
            experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gray-300 rounded-lg overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center relative"
                style={{
                  backgroundImage: "url('/location-bg.webp')",
                }}
              >
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-xl font-semibold">Interactive Map</p>
                    <p className="text-lg">Click to view directions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-amber-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      123 Gourmet Street
                      <br />
                      Culinary District
                      <br />
                      Metropolitan City, MC 12345
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-amber-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Hours
                    </h3>
                    <div className="space-y-1 text-gray-600">
                      <div className="flex justify-between">
                        <span>Monday - Thursday</span>
                        <span>5:00 PM - 10:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Friday - Saturday</span>
                        <span>5:00 PM - 11:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>4:00 PM - 9:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-amber-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Contact
                    </h3>
                    <p className="text-gray-600">
                      Phone: +1 (555) 123-4567
                      <br />
                      Email: info@bellavista.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Utensils className="h-6 w-6 text-amber-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Reservations
                    </h3>
                    <p className="text-gray-600">
                      Reservations recommended for optimal seating.
                      <br />
                      Walk-ins welcome based on availability.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
