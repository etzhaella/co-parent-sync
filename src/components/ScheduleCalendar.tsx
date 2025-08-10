import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, Users } from 'lucide-react';

interface ScheduleEvent {
  id: string;
  date: Date;
  title: string;
  type: 'parent1' | 'parent2' | 'shared';
  time?: string;
}

const ScheduleCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [events] = useState<ScheduleEvent[]>([
    {
      id: '1',
      date: new Date(2024, 11, 15),
      title: 'זמן עם הורה א׳',
      type: 'parent1',
      time: '09:00-17:00'
    },
    {
      id: '2', 
      date: new Date(2024, 11, 16),
      title: 'זמן עם הורה ב׳',
      type: 'parent2',
      time: '09:00-17:00'
    },
    {
      id: '3',
      date: new Date(2024, 11, 20),
      title: 'אירוע משותף',
      type: 'shared',
      time: '15:00-18:00'
    }
  ]);

  const getEventsForDate = (date: Date) => {
    return events.filter(event => 
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    );
  };

  const selectedEvents = selectedDate ? getEventsForDate(selectedDate) : [];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'parent1': return 'bg-gradient-primary text-primary-foreground border-0';
      case 'parent2': return 'bg-gradient-secondary text-secondary-foreground border-0';
      case 'shared': return 'bg-gradient-purple text-purple-foreground border-0';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in" dir="rtl">
      <Card className="lg:col-span-2 shadow-card hover:shadow-hover transition-all duration-300">
        <CardHeader className="bg-gradient-card">
          <CardTitle className="flex items-center gap-2 text-card-foreground">
            <CalendarDays className="h-5 w-5 text-primary animate-float" />
            לוח השנה המשותף
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border-0"
            modifiers={{
              hasEvent: events.map(e => e.date)
            }}
            modifiersStyles={{
              hasEvent: {
                backgroundColor: 'hsl(var(--primary))',
                color: 'hsl(var(--primary-foreground))',
                borderRadius: '50%'
              }
            }}
          />
        </CardContent>
      </Card>

      <div className="space-y-4">
        <Card className="shadow-card hover:shadow-hover transition-all duration-300 animate-scale-in">
          <CardHeader className="bg-gradient-card">
            <CardTitle className="flex items-center gap-2 text-card-foreground">
              <Clock className="h-5 w-5 text-info animate-float" />
              {selectedDate ? `אירועים ב-${selectedDate.toLocaleDateString('he-IL')}` : 'בחר תאריך'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {selectedEvents.length > 0 ? (
              selectedEvents.map(event => (
                <div key={event.id} className="flex items-start gap-3 p-3 rounded-lg bg-gradient-calm hover:scale-105 transition-all duration-300 border border-border/20">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="secondary" className={`${getEventTypeColor(event.type)} animate-scale-in`}>
                        {event.type === 'parent1' ? 'הורה א׳' : 
                         event.type === 'parent2' ? 'הורה ב׳' : 'משותף'}
                      </Badge>
                      {event.time && <span className="text-sm text-muted-foreground">{event.time}</span>}
                    </div>
                    <p className="font-medium text-calm-foreground">{event.title}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-muted-foreground text-center py-4">
                אין אירועים מתוכננים לתאריך זה
              </p>
            )}
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-hover transition-all duration-300 animate-scale-in">
          <CardHeader className="bg-gradient-card">
            <CardTitle className="flex items-center gap-2 text-card-foreground">
              <Users className="h-5 w-5 text-warning animate-float" />
              פעולות מהירות
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="success" className="w-full justify-start hover:scale-105 transition-all duration-300">
              הוסף אירוע חדש
            </Button>
            <Button variant="warning" className="w-full justify-start hover:scale-105 transition-all duration-300">
              בקש שינוי בלוח הזמנים
            </Button>
            <Button variant="purple" className="w-full justify-start hover:scale-105 transition-all duration-300">
              הצג היסטוריית שינויים
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ScheduleCalendar;