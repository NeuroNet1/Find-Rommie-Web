import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube } from 'swiper/modules';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import 'swiper/css';
import 'swiper/css/effect-cube';

import room1 from "@/assets/room-1.jpg";
import room2 from "@/assets/room-2.jpg";
import room3 from "@/assets/room-3.jpg";

const rooms = [
  {
    id: 1,
    images: [room1, room2, room3],
    city: "Ciudad de México",
    neighborhood: "Condesa",
    price: 8500,
    type: "Habitación privada",
    features: ["WiFi", "Cocina compartida", "Baño privado"],
  },
  {
    id: 2,
    images: [room2, room3, room1],
    city: "Guadalajara",
    neighborhood: "Chapalita",
    price: 7000,
    type: "Habitación con vista",
    features: ["Amueblada", "Gimnasio", "Seguridad 24h"],
  },
  {
    id: 3,
    images: [room3, room1, room2],
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
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section id="habitaciones" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 scroll-animate slide-fade-left ${titleVisible ? 'visible' : ''}`}
        >
          <div>
            <span className="inline-block px-4 py-2 bg-accent rounded-full text-accent-foreground text-sm font-medium mb-4">
              Habitaciones destacadas
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Espacios que te{" "}
              <span className="text-red-700">encantarán</span>
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {rooms.map((room, index) => {
            const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
            const staggerClass = `stagger-${index + 1}`;

            return (
              <article
                key={room.id}
                ref={elementRef}
                className={`group bg-background rounded-2xl overflow-hidden border border-border/50 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 scroll-animate fade-in-up ${staggerClass} ${isVisible ? 'visible' : ''}`}
              >
                {/* Swiper Cube Image Gallery */}
                <div className="relative aspect-square overflow-hidden">
                  <Swiper
                    effect={'cube'}
                    grabCursor={true}
                    cubeEffect={{
                      shadow: false,
                      slideShadows: false,
                    }}
                    modules={[EffectCube]}
                    className="w-full h-full room-swiper"
                  >
                    {room.images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={image}
                          alt={`${room.type} en ${room.neighborhood}, ${room.city} - Foto ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <div className="absolute bottom-4 left-4 z-10">
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
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;
