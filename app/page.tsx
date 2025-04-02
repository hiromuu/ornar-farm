"use client";
import Layout from "@/components/Layout";
import {
  AnimatedCard,
  AnimatedSection,
} from "@/components/ui/animated-section";
import { BlogCard } from "@/components/ui/blog-card";
import { ContactForm } from "@/components/ui/contact-form";
import { Hero } from "@/components/ui/hero";
import { OwnerProgram } from "@/components/ui/owner-program";
import { SeasonExperience } from "@/components/ui/season-experience";
import { ShareButtons } from "@/components/ui/share-buttons";
import { StorySection } from "@/components/ui/story-section";
import Image from "next/image";

export default function HomePage() {
  const blogPosts = [
    {
      title: "春の田植え体験レポート",
      excerpt:
        "小布施の春の風物詩、田植え体験の様子をお届けします。泥に足をつけながら、命が芽吹く瞬間を感じる特別な時間。",
      image: "/images/IMG_5896.jpg",
      date: "2024年4月1日",
      category: "体験レポート",
      author: {
        name: "山田太郎",
        role: "オーナーメンバー",
        image: "/images/IMG_5896.jpg",
      },
      href: "/blog/spring-rice-planting",
    },
    {
      title: "農家インタビュー：小布施の栗農家",
      excerpt:
        "代々続く栗農家の歴史と、小布施の栗作りの特徴について、現役の農家さんにインタビューしました。",
      image: "/images/IMG_5896.jpg",
      date: "2024年3月28日",
      category: "農家インタビュー",
      author: {
        name: "佐藤花子",
        role: "プロジェクトスタッフ",
        image: "/images/IMG_5896.jpg",
      },
      href: "/blog/farmer-interview",
    },
    {
      title: "冬の焚き火体験会レポート",
      excerpt:
        "寒い冬の夜、焚き火を囲んで農家さんと語らう特別な時間。参加者の声とともに、その様子をお届けします。",
      image: "/images/IMG_5896.jpg",
      date: "2024年3月25日",
      category: "体験レポート",
      author: {
        name: "鈴木一郎",
        role: "オーナーメンバー",
        image: "/images/IMG_5896.jpg",
      },
      href: "/blog/winter-bonfire",
    },
  ];

  return (
    <Layout>
      <Hero
        title="また帰りたくなる場所へ"
        subtitle="小布施がつなぐ四季と人"
        backgroundImage="/images/IMG_5896.jpg"
        cta={{ text: "プロジェクトを見る", href: "/about" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/IMG_5896.jpg')`,
          }}
        ></div>
      </Hero>

      <AnimatedSection>
        <StorySection
          title="出会い：「また来たい」と思えない観光地のジレンマ"
          content={`春が訪れる小布施。満開の桜と新緑に包まれるこの町は、北斎が愛した風景そのものだ。観光客は花見を楽しみ、栗菓子を頬張り、カフェでひと息つく。でも、やがて皆、帰っていく。

秋の栗のシーズンには多くの人が訪れるが、それ以外の季節は足が遠のく。観光とは一瞬の出会いで終わるものなのか？

一方で、農家たちは揺れる想いを抱えている。
「観光は盛り上がるけど、それが農業の収益の安定には直結しない。」
「地域と関わる人は増えてきたけど、継続して関わり続けてもらうのが難しい。」`}
          image="/images/IMG_5896.jpg"
          imagePosition="left"
        />
      </AnimatedSection>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12">
              四季を巡る、小布施の暮らしを体験する
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCard>
              <SeasonExperience
                season="spring"
                title="春——芽吹きの季節"
                description="冬を越えた畑に種を蒔き、田んぼに水を張る。泥に足をつけながら、命が芽吹く瞬間を感じる。"
                image="/images/IMG_5896.jpg"
                activities={[
                  {
                    title: "田植え体験",
                    description:
                      "泥に足をつけながら、苗を植えていく。命が芽吹く瞬間を感じる特別な時間。",
                    price: "5,000円",
                    duration: "半日",
                    schedule: "4月〜5月",
                  },
                  {
                    title: "種まき体験",
                    description:
                      "畑に種を蒔き、水をやり、芽が出るのを待つ。命の始まりを感じる時間。",
                    price: "3,000円",
                    duration: "3時間",
                    schedule: "3月〜4月",
                  },
                  {
                    title: "春の収穫体験",
                    description:
                      "冬を越えた野菜を収穫し、その場で調理して味わう。",
                    price: "4,000円",
                    duration: "3時間",
                    schedule: "4月〜5月",
                  },
                  {
                    title: "農家との交流会",
                    description: "農家さんと一緒に、農業や地域の話を語り合う。",
                    price: "2,000円",
                    duration: "2時間",
                    schedule: "通年",
                  },
                ]}
              >
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/images/IMG_5896.jpg"
                    alt="農場の風景"
                    fill
                    className="object-cover"
                  />
                </div>
              </SeasonExperience>
            </AnimatedCard>
            <AnimatedCard>
              <SeasonExperience
                season="summer"
                title="夏——畑の恵み"
                description="広がる畑で野菜を収穫し、農家と一緒にバーベキュー。夜になれば、浴衣に袖を通し、町の盆踊りへ。"
                image="/images/IMG_5896.jpg"
                activities={[
                  {
                    title: "夏野菜の収穫",
                    description:
                      "トマトやキュウリ、ナスなど、夏野菜を収穫する。",
                    price: "4,000円",
                    duration: "3時間",
                    schedule: "7月〜8月",
                  },
                  {
                    title: "バーベキュー",
                    description:
                      "収穫した野菜を使って、農家と一緒にバーベキュー。",
                    price: "6,000円",
                    duration: "4時間",
                    schedule: "7月〜8月",
                  },
                  {
                    title: "盆踊り参加",
                    description: "浴衣に袖を通し、町の盆踊りに参加する。",
                    price: "2,000円",
                    duration: "2時間",
                    schedule: "8月",
                  },
                  {
                    title: "農作業体験",
                    description: "夏の農作業を体験し、農家の暮らしを知る。",
                    price: "3,000円",
                    duration: "3時間",
                    schedule: "6月〜8月",
                  },
                ]}
              >
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/images/IMG_5896.jpg"
                    alt="農場の風景"
                    fill
                    className="object-cover"
                  />
                </div>
              </SeasonExperience>
            </AnimatedCard>
            <AnimatedCard>
              <SeasonExperience
                season="autumn"
                title="秋——実りの時間"
                description="収穫の秋、栗やぶどうを収穫し、そのままスイーツづくりへ。農家や職人の手ほどきを受けながら、収穫した果実をスイーツに変える。"
                image="/images/IMG_5896.jpg"
                activities={[
                  {
                    title: "栗拾い",
                    description:
                      "小布施名物の栗を収穫し、その場で焼き栗を味わう。",
                    price: "5,000円",
                    duration: "3時間",
                    schedule: "9月〜10月",
                  },
                  {
                    title: "ぶどう収穫",
                    description: "ぶどう園で収穫体験をし、その場で味わう。",
                    price: "4,000円",
                    duration: "2時間",
                    schedule: "9月〜10月",
                  },
                  {
                    title: "スイーツ作り",
                    description: "収穫した栗やぶどうを使って、スイーツを作る。",
                    price: "6,000円",
                    duration: "4時間",
                    schedule: "9月〜10月",
                  },
                  {
                    title: "収穫祭",
                    description: "秋の収穫を祝い、地域の人々と交流する。",
                    price: "3,000円",
                    duration: "3時間",
                    schedule: "10月",
                  },
                ]}
              >
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/images/IMG_5896.jpg"
                    alt="農場の風景"
                    fill
                    className="object-cover"
                  />
                </div>
              </SeasonExperience>
            </AnimatedCard>
            <AnimatedCard>
              <SeasonExperience
                season="winter"
                title="冬——ぬくもりの時間"
                description="農閑期の冬は、焚き火で焼きリンゴ。炎の揺らぎを眺めながら、農家と一緒に料理をつくる。"
                image="/images/IMG_5896.jpg"
                activities={[
                  {
                    title: "焚き火体験",
                    description: "焚き火を囲んで、焼きリンゴや焼き芋を味わう。",
                    price: "3,000円",
                    duration: "2時間",
                    schedule: "12月〜2月",
                  },
                  {
                    title: "冬野菜の収穫",
                    description: "大根や白菜など、冬野菜を収穫する。",
                    price: "4,000円",
                    duration: "3時間",
                    schedule: "12月〜2月",
                  },
                  {
                    title: "料理教室",
                    description:
                      "収穫した野菜を使って、農家と一緒に料理を作る。",
                    price: "5,000円",
                    duration: "4時間",
                    schedule: "12月〜2月",
                  },
                  {
                    title: "農家との交流会",
                    description: "冬の農閑期に、農家さんとゆっくり語り合う。",
                    price: "2,000円",
                    duration: "2時間",
                    schedule: "12月〜2月",
                  },
                ]}
              >
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/images/IMG_5896.jpg"
                    alt="農場の風景"
                    fill
                    className="object-cover"
                  />
                </div>
              </SeasonExperience>
            </AnimatedCard>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12">
              オーナー制度
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedCard>
              <OwnerProgram
                title="年間オーナー"
                description="年間3万円で、収穫や農作業に通年で参加できる仕組み。都市にいながらも、小布施の農とつながり続けられる。"
                price="30,000円"
                image="/images/IMG_5896.jpg"
                benefits={[
                  "通年の農作業参加権",
                  "収穫物の優先購入権",
                  "農家との交流会参加",
                  "オンラインでの農場情報配信",
                ]}
              >
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/images/IMG_5896.jpg"
                    alt="農場の風景"
                    fill
                    className="object-cover"
                  />
                </div>
              </OwnerProgram>
            </AnimatedCard>
            <AnimatedCard>
              <OwnerProgram
                title="シーズンオーナー"
                description="季節ごとの参加プラン。好きな季節に集中して参加できる、柔軟なプラン。"
                price="10,000円/シーズン"
                image="/images/IMG_5896.jpg"
                benefits={[
                  "シーズン中の農作業参加権",
                  "収穫物の購入権",
                  "季節のイベント参加",
                  "農場情報の配信",
                ]}
              >
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/images/IMG_5896.jpg"
                    alt="農場の風景"
                    fill
                    className="object-cover"
                  />
                </div>
              </OwnerProgram>
            </AnimatedCard>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12">ブログ</h2>
            <p className="text-center text-gray-600 mb-8">
              小布施の四季の移ろいや、体験者の声をお届けします。
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={index}
                {...post}
                image="/images/IMG_5896.jpg"
                author={{
                  ...post.author,
                  image: "/images/IMG_5896.jpg",
                }}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/blog"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              ブログをもっと見る
            </a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12">
              お問い合わせ
            </h2>
            <p className="text-center text-gray-600 mb-8">
              プロジェクトについてのご質問やご相談は、以下のフォームからお気軽にお問い合わせください。
            </p>
          </AnimatedSection>
          <ContactForm />
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">このページをシェアする</h3>
              <ShareButtons
                title="また帰りたくなる場所へ——小布施がつなぐ四季と人"
                url="https://example.com"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
