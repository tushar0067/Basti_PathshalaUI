// src/components/Stats.jsx

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const statsData = [
  { value: '31245', label: 'Lives Changed' },
  { value: '28976', label: 'Meals Served' },
  { value: '19854', label: 'Interns' },
  { value: '10989', label: 'Supporters' },
];

const Stats = () => {
  // This hook tells us when the component is in view
  // triggerOnce: true makes the animation run only once
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  return (
    <section 
      ref={ref} // Attach the ref to the section
      className="relative bg-cover bg-center py-20 text-white" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      <div className="relative container mx-auto px-6 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div key={index}>
              <h3 className="text-4xl lg:text-5xl font-bold text-yellow-400">
                {/* The CountUp component will only start when 'inView' is true */}
                {inView && (
                  <CountUp 
                    start={0} 
                    end={parseInt(stat.value)} 
                    duration={2.5} 
                    separator="," 
                  />
                )}
              </h3>
              <p className="mt-2 text-lg text-white">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;