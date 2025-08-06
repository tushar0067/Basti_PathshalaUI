const Hero = () => {
  return (
    <section id="home" className="relative bg-cover bg-center object-cover h-screen flex items-center justify-center text-white" style={{ backgroundImage: "url('https://www.cry.org/wp-content/themes/cry/images/children-banner.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Basti Ki Pathshala
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
            Lighting the Path to Knowledge
        </p>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Empowering children in underserved communities through the gift of education.
        </p>
        <a href="#volunteer" className="bg-orange-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300 transform hover:scale-105">
          Volunteer Now
        </a>
      </div>
    </section>
  );
};

export default Hero;    