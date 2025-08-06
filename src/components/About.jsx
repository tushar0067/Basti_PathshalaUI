const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">About Basti Ki Pathshala</h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Our mission is to break the cycle of poverty by providing quality education and a nurturing environment for every child in the community.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop" 
              alt="Children learning" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div className="md:w-1/2 text-gray-700 space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
            <p>
              We envision a world where every child, regardless of their background, has the opportunity to reach their full potential. 'Basti Ki Pathshala' is more than a school; it's a safe haven where curiosity is sparked, talents are nurtured, and futures are built.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mt-6">What We Do</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Provide free, quality primary education.</li>
              <li>Offer nutritional support to ensure healthy development.</li>
              <li>Organize extracurricular activities for holistic growth.</li>
              <li>Engage with the community to create a supportive learning ecosystem.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;