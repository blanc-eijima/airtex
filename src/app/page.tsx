import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const products = [
  {
    id: 1,
    name: "先端製造システム",
    description: "最新のIoT技術を活用した製造システム",
    imageUrl: "https://picsum.photos/600/400?random=1",
  },
  {
    id: 2,
    name: "自動化ソリューション",
    description: "効率的な生産を実現する自動化システム",
    imageUrl: "https://picsum.photos/600/400?random=2",
  },
  {
    id: 3,
    name: "品質管理システム",
    description: "AIを活用した高精度な品質管理",
    imageUrl: "https://picsum.photos/600/400?random=3",
  },
  {
    id: 4,
    name: "環境配慮型設備",
    description: "サステナブルな製造プロセス",
    imageUrl: "https://picsum.photos/600/400?random=4",
  },
];

const news = [
  {
    id: 1,
    title: "新製品発表：次世代製造システムの開発完了",
    date: "2024.04.15",
    category: "プレスリリース",
    href: "#",
  },
  {
    id: 2,
    title: "海外展開：アジア地域での事業拡大を発表",
    date: "2024.04.10",
    category: "ニュース",
    href: "#",
  },
  {
    id: 3,
    title: "技術革新：AI搭載型品質管理システムの実証実験開始",
    date: "2024.04.05",
    category: "技術情報",
    href: "#",
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      
      {/* ヒーローセクション */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/1920/1080?random=0"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003087]/70 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="lg:ml-10">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              革新的な製造技術で
              <br />
              未来を創造する
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              KODAKAは、最先端の製造技術と革新的なソリューションを提供し、
              <br />
              お客様のビジネスの成長と発展をサポートします。
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#003087] shadow-sm hover:bg-gray-100"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 製品紹介セクション */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">製品紹介</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              最新のテクノロジーを活用した製品ラインナップ
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {products.map((product) => (
              <article key={product.id} className="flex flex-col items-start">
                <div className="relative w-full">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={600}
                    height={400}
                    className="aspect-[3/2] w-full rounded-2xl object-cover"
                  />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{product.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* ニュースセクション */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              最新情報
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              KODAKAの最新のニュースとお知らせ
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {news.map((item) => (
              <article key={item.id} className="flex flex-col items-start">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={item.date} className="text-gray-500">
                    {item.date}
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600">
                    {item.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={item.href}>
                      <span className="absolute inset-0" />
                      {item.title}
                    </Link>
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
