import React from "react";

const philosophers = [
  { name: "Aristotle", image: "https://cdn.discordapp.com/attachments/1073542307699245097/1073893298932043826/DALLE_2023-02-11_22.06.45_-_expand_all_sides.png" },
  { name: "Plato", image: "https://cdn.discordapp.com/attachments/1073542307699245097/1073893298932043826/DALLE_2023-02-11_22.06.45_-_expand_all_sides.png" },
  { name: "Immanuel Kant", image: "https://cdn.discordapp.com/attachments/1073542307699245097/1073893298932043826/DALLE_2023-02-11_22.06.45_-_expand_all_sides.png" },
  { name: "Friedrich Nietzsche", image: "https://cdn.discordapp.com/attachments/1073542307699245097/1073893298932043826/DALLE_2023-02-11_22.06.45_-_expand_all_sides.png" },
  { name: "Søren Kierkegaard", image: "https://cdn.discordapp.com/attachments/1073542307699245097/1073893298932043826/DALLE_2023-02-11_22.06.45_-_expand_all_sides.png" },
  { name: "Rene Descartes", image: "https://cdn.discordapp.com/attachments/1073542307699245097/1073893298932043826/DALLE_2023-02-11_22.06.45_-_expand_all_sides.png" },
  { name: "David Hume", image: "https://cdn.discordapp.com/attachments/1073542307699245097/1073893298932043826/DALLE_2023-02-11_22.06.45_-_expand_all_sides.png" },
  { name: "Baruch Spinoza", image: "https://cdn.discordapp.com/attachments/1073542307699245097/1073893298932043826/DALLE_2023-02-11_22.06.45_-_expand_all_sides.png" },
];

const PhilosophersLayout = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-8">
      {philosophers.map((philosopher) => (
        <div
          key={philosopher.name}
          className="w-56 h-72 bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 transform hover:-translate-y-2"
        >
          <img
            src={philosopher.image}
            alt={philosopher.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{philosopher.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhilosophersLayout;






