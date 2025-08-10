import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MessageCircle, Shield, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-calm animate-fade-in" dir="rtl">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-scale-in">
            תיאום לוח זמנים
            <span className="block bg-gradient-hero bg-clip-text text-transparent animate-float">לזוגות גרושים</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            פלטפורמה דיגיטלית פשוטה ויעילה לתיאום לוח זמנים בין הורים גרושים, 
            המקלה על ניהול זמני השהייה של הילדים ומפחיתה קונפליקטים
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" variant="hero" className="px-8 py-4 text-lg">
              התחל עכשיו
            </Button>
            <Button size="lg" variant="purple" className="px-8 py-4 text-lg">
              למד עוד
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center p-6 bg-gradient-card hover:shadow-hover transition-all duration-300 hover:scale-105 animate-fade-in">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 mx-auto bg-gradient-primary rounded-full flex items-center justify-center animate-float">
                <Calendar className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold">לוח זמנים משותף</h3>
              <p className="text-muted-foreground text-sm">
                ראייה ברורה של לוח הזמנים המשותף עם עדכונים בזמן אמת
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 bg-gradient-card hover:shadow-hover transition-all duration-300 hover:scale-105 animate-fade-in">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 mx-auto bg-gradient-secondary rounded-full flex items-center justify-center animate-float">
                <MessageCircle className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-semibold">תקשורת מובנית</h3>
              <p className="text-muted-foreground text-sm">
                מערכת הודעות פשוטה לתיאום ושינויים בלוח הזמנים
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 bg-gradient-card hover:shadow-hover transition-all duration-300 hover:scale-105 animate-fade-in">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 mx-auto bg-gradient-accent rounded-full flex items-center justify-center animate-float">
                <Shield className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold">פרטיות מלאה</h3>
              <p className="text-muted-foreground text-sm">
                הגנה מלאה על הפרטיות שלכם ושל הילדים
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 bg-gradient-card hover:shadow-hover transition-all duration-300 hover:scale-105 animate-fade-in">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 mx-auto bg-gradient-purple rounded-full flex items-center justify-center animate-float">
                <Clock className="h-6 w-6 text-purple-foreground" />
              </div>
              <h3 className="text-lg font-semibold">תזכורות אוטומטיות</h3>
              <p className="text-muted-foreground text-sm">
                קבלת התראות ותזכורות על אירועים ושינויים מתוכננים
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-card rounded-2xl p-8 shadow-glow animate-fade-in">
          <h2 className="text-3xl font-bold text-card-foreground mb-4">
            מוכנים להתחיל?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            הצטרפו לאלפי הורים שכבר משתמשים במערכת לתיאום יעיל ושקט של לוח הזמנים המשפחתי
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="hero" className="px-10 py-4 text-lg">
              יצירת חשבון חינם
            </Button>
            <Button size="lg" variant="success" className="px-10 py-4 text-lg">
              צור קשר לייעוץ
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;