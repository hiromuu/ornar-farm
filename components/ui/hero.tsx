import Image from "next/image";
import Link from "next/link";

export function Hero({ title, subtitle, backgroundImage, cta }: any) {
  return (
    <div className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      <Image
        src={backgroundImage}
        alt="Hero"
        fill
        className="object-cover brightness-75"
        priority
      />
      <div className="absolute z-10 text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold tracking-tight drop-shadow-md">
          {title}
        </h1>
        <p className="text-white text-lg md:text-2xl mt-4 drop-shadow-md">
          {subtitle}
        </p>
        {cta && (
          <Link
            href={cta.href}
            className="inline-block mt-6 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition"
          >
            {cta.text}
          </Link>
        )}
      </div>
    </div>
  );
}
