"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    // ローカルストレージから訪問履歴をチェック
    const visited = localStorage.getItem("hasVisited");
    if (visited) {
      setIsVisible(false);
      return;
    }

    // 初回訪問の場合、3秒後にスプラッシュ画面を非表示
    const timer = setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem("hasVisited", "true");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50"
      >
        {/* 背景パターン */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.08 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #10B981 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
          {/* 装飾的な円 */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.03 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.03 }}
            transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-500 rounded-full blur-3xl"
          />
          {/* 葉っぱの装飾 */}
          <motion.div
            initial={{ rotate: -45, opacity: 0 }}
            animate={{ rotate: 0, opacity: 0.1 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
            className="absolute top-1/3 right-1/3 w-24 h-24"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2310B981'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'/%3E%3C/svg%3E")`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>

        {/* メインコンテンツ */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="relative text-center"
        >
          {/* ロゴコンテナ */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            className="relative w-56 h-56 mx-auto mb-12"
          >
            {/* ロゴの背景エフェクト */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.08 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0 bg-emerald-500 rounded-full blur-2xl"
            />
            {/* 装飾的なリング */}
            <motion.div
              initial={{ scale: 0.8, rotate: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-4 border-emerald-500/20 rounded-full"
            />
            <motion.div
              initial={{ scale: 0.8, rotate: 0 }}
              animate={{ scale: 1, rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 border-2 border-teal-500/20 rounded-full"
            />
            <Image
              src="/images/logo.svg"
              alt="Ornar Farm Logo"
              fill
              className="object-contain drop-shadow-lg"
              priority
            />
          </motion.div>

          {/* タイトル */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-8"
          >
            <div className="relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                className="absolute -top-4 left-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500"
              />
              <h1 className="text-7xl font-bold text-gray-900 mb-2 tracking-tight font-serif">
                Ornar Farm
              </h1>
            </div>
            <div className="relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500"
              />
              <p className="text-2xl text-gray-600 font-light tracking-wide italic">
                自然と共に生きる
              </p>
            </div>
          </motion.div>

          {/* 装飾的な要素 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent"
          />
          {/* 装飾的な葉っぱ */}
          <motion.div
            initial={{ scale: 0, rotate: -45, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 0.1 }}
            transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
            className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 w-16 h-16"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2310B981'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'/%3E%3C/svg%3E")`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
