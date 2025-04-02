"use client";
import Layout from "@/components/Layout";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ContactForm } from "@/components/ui/contact-form";

export default function ContactPage() {
  return (
    <Layout>
      <div className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection>
            <h1 className="text-4xl font-bold text-center mb-8">
              お問い合わせ
            </h1>
            <p className="text-center text-gray-600 mb-12">
              プロジェクトについてのご質問やご相談は、以下のフォームからお気軽にお問い合わせください。
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">
                  お問い合わせフォーム
                </h2>
                <ContactForm />
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">よくあるご質問</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold">
                        Q: 体験プログラムの予約はいつからできますか？
                      </h3>
                      <p className="text-gray-600">
                        各プログラムの開催日の1ヶ月前から予約を受け付けています。
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold">
                        Q: オーナー制度の参加はいつから可能ですか？
                      </h3>
                      <p className="text-gray-600">
                        年間オーナーは4月から、シーズンオーナーは各シーズンの開始月から参加可能です。
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold">
                        Q: 体験プログラムの参加に特別な準備は必要ですか？
                      </h3>
                      <p className="text-gray-600">
                        動きやすい服装と、必要に応じて長靴や手袋をご用意ください。詳細は予約時にご案内いたします。
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">お問い合わせ先</h2>
                  <div className="space-y-2">
                    <p className="text-gray-600">
                      <span className="font-bold">住所：</span>
                      長野県上高井郡小布施町
                    </p>
                    <p className="text-gray-600">
                      <span className="font-bold">電話：</span>
                      026-XXX-XXXX
                    </p>
                    <p className="text-gray-600">
                      <span className="font-bold">メール：</span>
                      info@example.com
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </Layout>
  );
}
