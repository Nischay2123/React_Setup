import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card';
import { TrendingUp, Shield, Zap, BarChart3 } from 'lucide-react';

const features = [
  {
    title: 'Instant Trading',
    description: 'Execute trades in milliseconds with our lightning-fast order matching engine.',
    icon: Zap,
  },
  {
    title: 'Secure by Design',
    description: 'Military-grade encryption and multi-factor authentication for your peace of mind.',
    icon: Shield,
  },
  {
    title: 'Advanced Analytics',
    description: 'Deep dive into market trends with our powerful charting tools and technical indicators.',
    icon: BarChart3,
  },
  {
    title: 'Market Insights',
    description: 'Stay ahead of the curve with real-time news and expert market analysis.',
    icon: TrendingUp,
  },
];

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why choose BrokerApp?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We provide the tools and security you need to trade with confidence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
