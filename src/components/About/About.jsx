export const About = () => {
  return (
    <>
      <div className="container mx-auto p-4 max-w-6xl">
        <div className="bg-gray-900 text-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold mb-6 text-center">
            About CinemaVault
          </h1>

          {/* Mission Statement */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-300">
              Our Mission
            </h2>
            <p className="text-gray-400 leading-relaxed">
              CinemaVault was created with a simple goal: to help movie
              enthusiasts discover their next favorite film. We believe that
              great cinema transcends entertainment and becomes art that can
              change perspectives and open minds. Our platform is dedicated to
              showcasing both mainstream releases and hidden gems that deserve
              recognition.
            </p>
          </section>

          {/* Team Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-300">
              Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <img
                  src="/api/placeholder/150/150"
                  alt="Team Member"
                  className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
                />
                <h3 className="text-lg font-semibold">Alex Johnson</h3>
                <p className="text-gray-400">Founder & Lead Curator</p>
                <p className="text-sm text-gray-500 mt-2">
                  Film enthusiast with a passion for international cinema and
                  documentaries.
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <img
                  src="/api/placeholder/150/150"
                  alt="Team Member"
                  className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
                />
                <h3 className="text-lg font-semibold">Maya Rodriguez</h3>
                <p className="text-gray-400">Head of Reviews</p>
                <p className="text-sm text-gray-500 mt-2">
                  Former film critic with 10+ years of experience analyzing
                  cinema.
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <img
                  src="/api/placeholder/150/150"
                  alt="Team Member"
                  className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
                />
                <h3 className="text-lg font-semibold">Terrence Wu</h3>
                <p className="text-gray-400">Technical Lead</p>
                <p className="text-sm text-gray-500 mt-2">
                  Developer with a background in UX design and machine learning.
                </p>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-300">
              Our Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Curated Collections
                </h3>
                <p className="text-gray-400">
                  We hand-pick films for themed collections, helping you
                  discover movies based on mood, genre, or cultural
                  significance.
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Detailed Analysis
                </h3>
                <p className="text-gray-400">
                  Our reviews go beyond simple ratings, offering context,
                  analysis, and appreciation for the craft of filmmaking.
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Personalized Recommendations
                </h3>
                <p className="text-gray-400">
                  Our algorithm learns your preferences to suggest films you are
                  likely to enjoy based on your viewing history.
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Community Discussions
                </h3>
                <p className="text-gray-400">
                  Join conversations with fellow movie lovers to share
                  perspectives and discover new dimensions of films.
                </p>
              </div>
            </div>
          </section>

          {/* History Timeline */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-300">
              Our Journey
            </h2>
            <div className="relative border-l-2 border-gray-700 pl-6 ml-6">
              <div className="mb-6 relative">
                <div className="absolute -left-8 w-4 h-4 rounded-full bg-blue-500"></div>
                <h3 className="text-lg font-semibold">2022</h3>
                <p className="text-gray-400">
                  CinemaVault launched with a focus on indie films and
                  documentaries.
                </p>
              </div>
              <div className="mb-6 relative">
                <div className="absolute -left-8 w-4 h-4 rounded-full bg-blue-500"></div>
                <h3 className="text-lg font-semibold">2023</h3>
                <p className="text-gray-400">
                  Expanded our database to include international cinema and
                  classics.
                </p>
              </div>
              <div className="mb-6 relative">
                <div className="absolute -left-8 w-4 h-4 rounded-full bg-blue-500"></div>
                <h3 className="text-lg font-semibold">2024</h3>
                <p className="text-gray-400">
                  Introduced personalized recommendations and community
                  features.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-8 w-4 h-4 rounded-full bg-blue-500"></div>
                <h3 className="text-lg font-semibold">2025</h3>
                <p className="text-gray-400">
                  Celebrating 50,000 registered users and 10,000 curated film
                  reviews.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
