// src/components/Donate.jsx

const Donate = () => {
  return (
    <section id="donate" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Support Our Mission</h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Your contribution provides essential resources like books, meals, and learning materials to children who need them most.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-gray-50 p-8 rounded-lg shadow-md">
          <div className="md:w-1/2">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJhrYAd0gyAbc_2FR7yQNyz2J_VGRFTJ2B5qAN6KSzEP68XFzAiuJc9oo&s"
              alt="Hands offering a small plant"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2 text-gray-700 space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800">Every Rupee Makes a Difference</h3>
            <p>Join us in building a brighter future for the children of our community. Your generosity fuels our work.</p>
            
            <div className="flex justify-center md:justify-start flex-wrap gap-3">
              <button className="bg-white border-2 border-orange-500 text-orange-500 font-semibold py-2 px-5 rounded-full hover:bg-orange-50 transition">₹500</button>
              <button className="bg-white border-2 border-orange-500 text-orange-500 font-semibold py-2 px-5 rounded-full hover:bg-orange-50 transition">₹1,000</button>
              <button className="bg-white border-2 border-orange-500 text-orange-500 font-semibold py-2 px-5 rounded-full hover:bg-orange-50 transition">₹2,000</button>
            </div>
            
            <a
              href="https://razorpay.com/" // IMPORTANT: Replace with your actual payment link
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300 transform hover:scale-105"
            >
              Donate Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;