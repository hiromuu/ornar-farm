import Image from "next/image";

interface StorySectionProps {
  title: string;
  content: string;
  image: string;
  imagePosition?: "left" | "right";
}

export function StorySection({
  title,
  content,
  image,
  imagePosition = "right",
}: StorySectionProps) {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div
          className={`flex flex-col ${
            imagePosition === "right" ? "md:flex-row" : "md:flex-row-reverse"
          } gap-12 items-center`}
        >
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">{title}</h2>
            <div className="prose prose-lg">
              {content.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="flex-1 relative h-[400px]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
