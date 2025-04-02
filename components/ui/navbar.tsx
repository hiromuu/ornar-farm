import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          Obuse Seasons
        </Link>
        <div className="space-x-6 text-sm">
          <Link href="/about" className="hover:underline">
            プロジェクト
          </Link>
          <Link href="/experiences" className="hover:underline">
            体験
          </Link>
          <Link href="/owner" className="hover:underline">
            オーナー制度
          </Link>
          <Link href="/contact" className="hover:underline">
            お問い合わせ
          </Link>
        </div>
      </div>
    </nav>
  );
}
