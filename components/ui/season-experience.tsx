import Image from "next/image";

interface Activity {
  title: string;
  description: string;
  price: string;
  duration: string;
  schedule: string;
}

interface SeasonExperienceProps {
  season: "spring" | "summer" | "autumn" | "winter";
  title: string;
  description: string;
  image: string;
  activities: Activity[];
  children?: React.ReactNode;
}

const seasonEmojis = {
  spring: "🌸",
  summer: "🍃",
  autumn: "🍁",
  winter: "❄️",
};

export function SeasonExperience({
  season,
  title,
  description,
  image,
  activities,
  children,
}: SeasonExperienceProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
      {children || (
        <div className="relative h-[300px]">
          <Image src={image} alt={title} fill className="object-cover" />
          <div className="absolute top-4 right-4 text-4xl">
            {seasonEmojis[season]}
          </div>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-2">
          {activities.map((activity, index) => (
            <li key={index} className="flex items-center">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
              {activity.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
