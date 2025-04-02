"use client";
import Layout from "@/components/Layout";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SeasonExperience } from "@/components/ui/season-experience";

export default function ExperiencesPage() {
  const experiences: {
    season: "spring" | "summer" | "autumn" | "winter";
    title: string;
    description: string;
    image: string;
    activities: {
      title: string;
      description: string;
      price: string;
      duration: string;
      schedule: string;
    }[];
  }[] = [
    {
      season: "spring",
      title: "春——芽吹きの季節",
      description:
        "冬を越えた畑に種を蒔き、田んぼに水を張る。泥に足をつけながら、命が芽吹く瞬間を感じる。",
      image: "/images/IMG_5896.jpg",
      activities: [
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
          description: "冬を越えた野菜を収穫し、その場で調理して味わう。",
          price: "4,000円",
          duration: "3時間",
          schedule: "4月〜5月",
        },
      ],
    },
    {
      season: "summer",
      title: "夏——畑の恵み",
      description:
        "広がる畑で野菜を収穫し、農家と一緒にバーベキュー。夜になれば、浴衣に袖を通し、町の盆踊りへ。",
      image: "/images/IMG_5896.jpg",
      activities: [
        {
          title: "夏野菜の収穫",
          description: "トマトやキュウリ、ナスなど、夏野菜を収穫する。",
          price: "4,000円",
          duration: "3時間",
          schedule: "7月〜8月",
        },
        {
          title: "バーベキュー",
          description: "収穫した野菜を使って、農家と一緒にバーベキュー。",
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
      ],
    },
    {
      season: "autumn",
      title: "秋——実りの時間",
      description:
        "収穫の秋、栗やぶどうを収穫し、そのままスイーツづくりへ。農家や職人の手ほどきを受けながら、収穫した果実をスイーツに変える。",
      image: "/images/IMG_5896.jpg",
      activities: [
        {
          title: "栗拾い",
          description: "小布施名物の栗を収穫し、その場で焼き栗を味わう。",
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
      ],
    },
    {
      season: "winter",
      title: "冬——ぬくもりの時間",
      description:
        "農閑期の冬は、焚き火で焼きリンゴ。炎の揺らぎを眺めながら、農家と一緒に料理をつくる。",
      image: "/images/IMG_5896.jpg",
      activities: [
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
          description: "収穫した野菜を使って、農家と一緒に料理を作る。",
          price: "5,000円",
          duration: "4時間",
          schedule: "12月〜2月",
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
              体験プログラム
            </h1>
            <p className="text-center text-gray-600 mb-12">
              小布施の四季を感じる、特別な体験をお届けします
            </p>
          </AnimatedSection>

          <div className="space-y-20">
            {experiences.map((experience, index) => (
              <AnimatedSection key={index}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <SeasonExperience {...experience} />
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {experience.activities.map((activity, activityIndex) => (
                        <div
                          key={activityIndex}
                          className="bg-gray-50 p-4 rounded-lg"
                        >
                          <h3 className="font-bold text-lg mb-2">
                            {activity.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {activity.description}
                          </p>
                          <div className="space-y-2">
                            <p className="text-sm text-gray-500">
                              料金: {activity.price}
                            </p>
                            <p className="text-sm text-gray-500">
                              所要時間: {activity.duration}
                            </p>
                            <p className="text-sm text-gray-500">
                              開催時期: {activity.schedule}
                            </p>
                          </div>
                          <button className="mt-4 w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors">
                            予約する
                          </button>
                        </div>
                      ))}
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
