import Image from "next/image";

interface OwnerProgramProps {
  title: string;
  description: string;
  price: string;
  benefits: string[];
  image: string;
  children?: React.ReactNode;
}

export function OwnerProgram({
  title,
  description,
  price,
  benefits,
  image,
  children,
}: OwnerProgramProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
      {children || (
        <div className="relative h-[400px]">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      )}
      <div className="p-8">
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="bg-primary-50 p-6 rounded-lg mb-8">
          <p className="text-2xl font-bold text-primary-600">{price}</p>
          <p className="text-sm text-gray-500">年間料金</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">特典</h4>
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-primary-600">✓</span>
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
