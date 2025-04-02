import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  href: string;
}

export function BlogCard({
  title,
  excerpt,
  image,
  date,
  category,
  author,
  href,
}: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg"
    >
      <Link href={href}>
        <div className="relative h-48">
          <Image src={image} alt={title} fill className="object-cover" />
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
              {category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <time className="text-sm text-gray-500 mb-2 block">{date}</time>
          <h3 className="text-xl font-bold mb-3 line-clamp-2">{title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
          <div className="flex items-center">
            <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
              <Image
                src={author.image}
                alt={author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-medium">{author.name}</p>
              <p className="text-sm text-gray-500">{author.role}</p>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
