"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1920&auto=format&fit=crop"
          alt="農場の風景"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                都市と農村をつなぐ
                <br />
                <span className="text-green-400">新しい農業体験</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
                季節の農作業体験を通じて、持続可能な農業の未来を創造します。
                自然と触れ合い、食の大切さを学ぶ場所。
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/reserve"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                体験を予約する
              </Link>
              <Link
                href="/about"
                className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                詳しく見る
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
