import React from "react";

// Importa i dati relativi alle esperienze lavorative
import { workExperience } from "@/data";

// Importa il componente Button, che ha un effetto di bordi animati
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      {/* Titolo della sezione */}
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      {/* Griglia che organizza le esperienze lavorative */}
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {/* Itera su ogni esperienza lavorativa */}
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000} // Imposta una durata casuale per l'animazione dei bordi tra 10s e 20s
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)", // Sfondo principale
              backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)", // Gradiente di sfondo
              borderRadius: `calc(1.75rem * 0.96)`, // Bordo arrotondato leggermente ridotto
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            {/* Contenuto della card */}
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              {/* Immagine rappresentativa dell'esperienza */}
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                {/* Titolo dell'esperienza lavorativa */}
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                {/* Descrizione dell'esperienza lavorativa */}
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
