import React from 'react';

const stats = [
  { label: 'Active Users', value: '1M+' },
  { label: 'Daily Volume', value: '$500M+' },
  { label: 'Uptime', value: '99.99%' },
  { label: 'Countries', value: '50+' },
];

export const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</p>
              <p className="text-primary-foreground/80 uppercase tracking-widest text-sm font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
