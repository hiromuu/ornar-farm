"use client";
import Layout from "@/components/Layout";
import { AnimatedSection } from "@/components/ui/animated-section";
import { StorySection } from "@/components/ui/story-section";

export default function AboutPage() {
  return (
    <Layout>
      <div className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection>
            <h1 className="text-4xl font-bold text-center mb-8">
              プロジェクトについて
            </h1>
            <p className="text-center text-gray-600 mb-12">
              小布施の農と人をつなぐ、新しいコミュニティの形
            </p>
          </AnimatedSection>

          <div className="space-y-20">
            <AnimatedSection>
              <StorySection
                title="私たちの想い"
                content={`小布施は、北斎が晩年を過ごした町として知られ、栗菓子の名産地としても有名です。
しかし、観光地としての一面はあるものの、地域の農家さんたちは日々の農業に追われ、
都市部とのつながりを持つ機会は限られていました。

私たちは、この状況を変えたいと考えています。
都市部に住む人々が、小布施の農と人とつながり、継続的に関わり続けられる
新しいコミュニティの形を作りたいのです。`}
                image="/images/IMG_5896.jpg"
                imagePosition="right"
              />
            </AnimatedSection>

            <AnimatedSection>
              <StorySection
                title="目指す未来"
                content={`オーナー制度を通じて、都市部に住む人々が小布施の農とつながり、
四季折々の農作業や収穫を体験できるようになります。

農家さんたちは、オーナーメンバーとの交流を通じて、
農業の価値を再発見し、収益の安定化にもつながります。

そして、小布施全体が、都市部の人々にとって
「また帰りたくなる場所」となっていくのです。`}
                image="/images/IMG_5896.jpg"
                imagePosition="left"
              />
            </AnimatedSection>

            <AnimatedSection>
              <StorySection
                title="活動内容"
                content={`・四季折々の農作業体験
・収穫物の購入機会
・農家さんとの交流会
・オンラインでの農場情報配信
・地域のイベント参加

これらの活動を通じて、都市部に住む人々が
小布施の農と人とつながり、継続的に関わり続けられる
新しいコミュニティの形を作っていきます。`}
                image="/images/IMG_5896.jpg"
                imagePosition="right"
              />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </Layout>
  );
}
