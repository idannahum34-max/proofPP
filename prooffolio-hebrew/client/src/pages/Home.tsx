import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useState } from "react";

interface Portfolio {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface Review {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}

const portfolios: Portfolio[] = [
  {
    id: 1,
    title: "דירה בפנטהאוז",
    category: "נדלן",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663632510684/dzHtvkWsn2XUqeVh2Z67TM/portfolio-real-estate-1-TGMDoZNAMg62nhrbLTK3Wa.webp",
    description: "מכירת דירת פנטהאוז בעלת נוף עיר מרהיב"
  },
  {
    id: 2,
    title: "הדרכת כושר אישית",
    category: "כושר",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663632510684/dzHtvkWsn2XUqeVh2Z67TM/portfolio-fitness-coach-fLWbBxhwFxZQkeKYi3Lyr8.webp",
    description: "תוכנית הדרכה אישית שהביאה ללקוח ירידה של 15 קילוגרם"
  },
  {
    id: 3,
    title: "עיצוב גרפי מקצועי",
    category: "עיצוב",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663632510684/dzHtvkWsn2XUqeVh2Z67TM/portfolio-creative-professional-AcTyVgFoMyNeGa9D9JmdUk.webp",
    description: "פיתוח זהות ברנד מלאה"
  },
  {
    id: 4,
    title: "שירות חשמל מקצועי",
    category: "שירותים",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663632510684/dzHtvkWsn2XUqeVh2Z67TM/portfolio-service-provider-MQGFBmdbPV8nGdkiCszJNg.webp",
    description: "התקנת מערכת חשמל חדשה"
  }
];

const reviews: Review[] = [
  { id: 1, name: "דוד כהן", role: "קונה דירה", text: "שירות מעולה!", rating: 5 },
  { id: 2, name: "שרה לוי", role: "אימון כושר", text: "מדהים!", rating: 5 },
  { id: 3, name: "אלכס רוזנברג", role: "בעל עסק", text: "מקצועי וייחודי", rating: 5 },
  { id: 4, name: "מיכל גרטנר", role: "מנהלת בנייה", text: "בזמן ובתקציב", rating: 5 }
];

export default function Home() {
  const [activePortfolio, setActivePortfolio] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <nav className="container flex items-center justify-between py-4">
          <span className="text-xl font-bold text-primary">פרופוליו</span>
          <div className="flex items-center gap-6">
            <a href="#portfolio">תיק עבודות</a>
            <a href="#reviews">ביקורות</a>
            <Button>צור קשר</Button>
          </div>
        </nav>
      </header>

      <section className="py-20">
        <div className="container">
          <h1 className="text-5xl font-bold text-primary">הצג את הכישרון שלך לעולם</h1>
          <p className="text-lg text-foreground/80 mt-4">פרופוליו הוא הפתרון המושלם לאנשי מקצוע</p>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary text-center mb-16">תיק עבודות לדוגמה</h2>
          <div className="grid grid-cols-2 gap-8">
            {portfolios.map((p) => (
              <Card key={p.id} className="overflow-hidden hover:shadow-2xl">
                <img src={p.image} alt={p.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary">{p.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary text-center mb-16">ביקורות</h2>
          <div className="grid grid-cols-2 gap-8">
            {reviews.map((r) => (
              <Card key={r.id} className="p-8 hover:shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6">"{r.text}"</p>
                <p className="font-bold text-primary">{r.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container text-center">
          <p>&copy; 2024 פרופוליו</p>
        </div>
      </footer>
    </div>
  );
}
