"use client";
import { Hero } from "@/components/ui/hero";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen">
      <Hero
        title="また帰りたくなる場所へ"
        subtitle="小布施がつなぐ四季と人"
        backgroundImage="https://images.unsplash.com/photo-1587049352844-079bc9f7f80c"
        cta={{ text: "プロジェクトを見る", href: "/about" }}
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="四季の体験"
            description="田植え、栗拾い、焚き火…季節ごとの農体験で暮らしに触れる。"
            image="https://images.unsplash.com/photo-1618005198919-524d5fe10b8b"
            href="/experiences"
          />
          <FeatureCard
            title="オーナー制度"
            description="年間3万円で農家とつながる。第二のふるさとを持つ暮らし。"
            image="https://images.unsplash.com/photo-1556905055-8f358a7a47b2"
            href="/owner"
          />
          <FeatureCard
            title="プロジェクトの想い"
            description="観光以上の関係を。地域と人のつながりを育むしくみ。"
            image="https://images.unsplash.com/photo-1562887089-3c6ce9491064"
            href="/about"
          />
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ title, description, image, href }: any) {
  return (
    <Link href={href}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
        <div className="h-48 relative">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
}
