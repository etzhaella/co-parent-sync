import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import ScheduleCalendar from '@/components/ScheduleCalendar';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  if (showCalendar) {
    return (
      <div className="min-h-screen bg-background">
        <div className="border-b bg-card shadow-sm">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between" dir="rtl">
            <h1 className="text-2xl font-bold text-card-foreground">לוח הזמנים המשפחתי</h1>
            <Button variant="outline" onClick={() => setShowCalendar(false)}>
              חזור לעמוד הבית
            </Button>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <ScheduleCalendar />
        </div>
      </div>
    );
  }

  return (
    <div onClick={() => setShowCalendar(true)} style={{ cursor: 'pointer' }}>
      <HeroSection />
    </div>
  );
};

export default Index;
