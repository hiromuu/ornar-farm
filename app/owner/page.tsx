"use client";
import Layout from "@/components/Layout";
import { AnimatedSection } from "@/components/ui/animated-section";
import { OwnerProgram } from "@/components/ui/owner-program";

export default function OwnerPage() {
  const programs = [
    {
      title: "年間オーナー",
      description:
        "年間3万円で、収穫や農作業に通年で参加できる仕組み。都市にいながらも、小布施の農とつながり続けられる。",
      price: "30,000円",
      image: "/images/IMG_5896.jpg",
      benefits: [
        "通年の農作業参加権",
        "収穫物の優先購入権",
        "農家との交流会参加",
        "オンラインでの農場情報配信",
      ],
      details: [
        {
          title: "参加期間",
          content: "1年間（4月〜翌年3月）",
        },
        {
          title: "参加回数",
          content: "年間12回まで",
        },
        {
          title: "収穫物の購入",
          content: "収穫物の優先購入権（市場価格の20%割引）",
        },
        {
          title: "その他の特典",
          content: "農家との交流会参加、オンラインでの農場情報配信",
        },
      ],
    },
    {
      title: "シーズンオーナー",
      description:
        "季節ごとの参加プラン。好きな季節に集中して参加できる、柔軟なプラン。",
      price: "10,000円/シーズン",
      image: "/images/IMG_5896.jpg",
      benefits: [
        "シーズン中の農作業参加権",
        "収穫物の購入権",
        "季節のイベント参加",
        "農場情報の配信",
      ],
      details: [
        {
          title: "参加期間",
          content: "1シーズン（3ヶ月）",
        },
        {
          title: "参加回数",
          content: "シーズン中6回まで",
        },
        {
          title: "収穫物の購入",
          content: "収穫物の購入権（市場価格の10%割引）",
        },
        {
          title: "その他の特典",
          content: "季節のイベント参加、農場情報の配信",
        },
      ],
    },
  ];

  return (
    <Layout>
      <div className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection>
            <h1 className="text-4xl font-bold text-center mb-8">
              オーナー制度
            </h1>
            <p className="text-center text-gray-600 mb-12">
              小布施の農とつながり、四季を感じる暮らしを
            </p>
          </AnimatedSection>

          <div className="space-y-20">
            {programs.map((program, index) => (
              <AnimatedSection key={index}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <OwnerProgram {...program} />
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold mb-4">特典の詳細</h3>
                        <div className="space-y-4">
                          {program.details.map((detail, detailIndex) => (
                            <div key={detailIndex}>
                              <h4 className="font-bold">{detail.title}</h4>
                              <p className="text-gray-600">{detail.content}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-4">お申し込み</h3>
                        <p className="text-gray-600 mb-6">
                          オーナー制度への参加をご希望の方は、以下のボタンからお申し込みください。
                          お申し込み後、担当者よりご連絡させていただきます。
                        </p>
                        <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors">
                          お申し込みする
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
