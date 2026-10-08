import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, Star, Stethoscope } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [stat1, setStat1] = useState(0);
  const [stat2, setStat2] = useState(0);
  const [stat3, setStat3] = useState(0);
  const [stat4, setStat4] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 2800; // ms
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(1, elapsed / duration);

            let easeProgress = 0;
            if (progress < 0.7) {
              easeProgress = 0.82 * Math.sin((progress / 0.7) * (Math.PI / 2));
            } else {
              const stage2Progress = (progress - 0.7) / 0.3;
              easeProgress = 0.82 + 0.18 * Math.sin(stage2Progress * (Math.PI / 2));
            }

            setStat1(Math.round(easeProgress * 15));
            setStat2(Math.round(easeProgress * 10000));
            setStat3(Number((easeProgress * 4.9).toFixed(1)));
            setStat4(Math.round(easeProgress * 700));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setStat1(15);
              setStat2(10000);
              setStat3(4.9);
              setStat4(700);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.15 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const stats = [
    {
      value: `${stat1}+`,
      label: 'Years Caring for Dental Patients',
      icon: Award,
    },
    {
      value: `${stat2.toLocaleString()}+`,
      label: 'Healthy Smiles Treated',
      icon: Users,
    },
    {
      value: `${stat3.toFixed(1)} / 5`,
      label: 'Verified Patient Rating on Google & ZocDoc',
      icon: Star,
    },
    {
      value: `${stat4}+`,
      label: 'Comprehensive Treatments',
      icon: Stethoscope,
    },
  ];

  return (
    <section ref={statsRef} className="bg-white border-y border-[#DCE5E3] py-10" aria-label="Clinic Track Record">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex flex-col items-start space-y-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 rounded-lg bg-[#DDF3EE] flex items-center justify-center text-[#0F5B5B]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#0F5B5B] tracking-tight tabular-nums">
                    {stat.value}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-[#172323] leading-snug">
                  {stat.label}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
