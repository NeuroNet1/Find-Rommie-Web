import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, Laptop, MessageCircle } from "lucide-react";

const profiles = [
  {
    id: 1,
    name: "María G.",
    age: 26,
    city: "Ciudad de México",
    occupation: "Profesional",
    occupationIcon: Briefcase,
    interests: ["Tacos", "Cocina", "Mascotas"],
    bio: "Trabajo remoto, busco ambiente tranquilo y organizado.",
    avatar: "MG",
    color: "bg-primary/20 text-primary",
  },
  {
    id: 2,
    name: "Carlos M.",
    age: 23,
    city: "Guadalajara",
    occupation: "Estudiante",
    occupationIcon: GraduationCap,
    interests: ["Música", "Lucha libre", "Fútbol"],
    bio: "Estudiante de ingeniería, responsable y sociable.",
    avatar: "CM",
    color: "bg-secondary/20 text-secondary",
  },
  {
    id: 3,
    name: "Ana P.",
    age: 29,
    city: "Monterrey",
    occupation: "Nómada digital",
    occupationIcon: Laptop,
    interests: ["Viajes", "Fotografía", "Café de olla"],
    bio: "Trabajo remoto, paso temporadas en diferentes ciudades de México.",
    avatar: "AP",
    color: "bg-accent text-accent-foreground",
  },
];

const FindRoomie = () => {
  return (
    <section id="roomies" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 gradient-soft opacity-50" />

      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-accent rounded-full text-accent-foreground text-sm font-medium mb-4">
            Encuentra tu roomie
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Conecta con personas{" "}
            <span className="text-red-700">afines a ti</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Descubre perfiles de personas que buscan compartir con estilos de vida compatibles con el tuyo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="group bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-14 h-14 rounded-full ${profile.color} flex items-center justify-center text-lg font-bold`}>
                    {profile.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{profile.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {profile.age} años · {profile.city}
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-accent rounded-lg text-xs text-accent-foreground">
                  <profile.occupationIcon className="w-3 h-3" />
                  {profile.occupation}
                </span>
              </div>

              {/* Bio */}
              <p className="text-muted-foreground text-sm mb-4">
                "{profile.bio}"
              </p>

              {/* Interests */}
              <div className="flex flex-wrap gap-2 mb-5">
                {profile.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-muted rounded-lg text-xs text-muted-foreground"
                  >
                    {interest}
                  </span>
                ))}
              </div>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FindRoomie;
