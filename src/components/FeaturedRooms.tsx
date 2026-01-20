import { Button } from "@/components/ui/button";
import { MapPin, Heart } from "lucide-react";
import room1 from "@/assets/room-1.jpg";
import room2 from "@/assets/room-2.jpg";
import room3 from "@/assets/room-3.jpg";
const rooms = [
  {
    id: 1,
    image: room1,
    city: "Ciudad de México",
    neighborhood: "Condesa",
    price: 8500,
    type: "Habitación privada",
    features: ["WiFi", "Cocina compartida", "Baño privado"],
  },
  {
    id: 2,
    image: room2,
    city: "Guadalajara",
    neighborhood: "Chapalita",
    price: 7000,
    type: "Habitación con vista",
    features: ["Amueblada", "Gimnasio", "Seguridad 24h"],
  },
  {
    id: 3,
    image: room3,
    city: "Monterrey",
    neighborhood: "San Pedro",
    price: 9500,
    type: "Habitación doble",
    features: ["Terraza", "Estacionamiento", "Pet friendly"],
  },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

const FeaturedRooms = () => {
  return (
    <section id="habitaciones" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="inline-block px-4 py-2 bg-accent rounded-full text-accent-foreground text-sm font-medium mb-4">
              Habitaciones destacadas
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Espacios que te{" "}
              <span className="text-green-600">encantarán</span>
            </h2>
          </div>
          <Button variant="outline" className="self-start sm:self-auto">
            Ver todas las habitaciones
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {rooms.map((room) => (
            <article
              key={room.id}
              className="group bg-background rounded-2xl overflow-hidden border border-border/50 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={room.image}
                  alt={`${room.type} en ${room.neighborhood}, ${room.city}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors">
                  <Heart className="w-5 h-5 text-muted-foreground hover:text-secondary transition-colors" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-sm font-medium text-foreground">
                    {room.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
                  <MapPin className="w-4 h-4" />
                  {room.neighborhood}, {room.city}
                </div>

                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-2xl font-bold text-foreground">
                    {formatPrice(room.price)}
                  </span>
                  <span className="text-muted-foreground">/mes</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {room.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-accent rounded-lg text-xs text-accent-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button variant="default" className="w-full">
                  Ver detalles
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;
