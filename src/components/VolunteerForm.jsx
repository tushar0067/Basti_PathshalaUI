const VolunteerForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle form submission, e.g., send data to a server
    alert('Thank you for your interest! We will get back to you soon.');
    e.target.reset();
  };

  return (
    <section id="volunteer" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Join Our Cause</h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Your time and skills can make a world of difference. Fill out the form below to get involved.
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" required />
              </div>
            </div>
             <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Why do you want to volunteer?</label>
              <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-orange-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300 transform hover:scale-105">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default VolunteerForm;