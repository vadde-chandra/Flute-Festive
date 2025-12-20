import { Music, Calendar, MapPin, Clock, Users, LogOut, Award, Heart } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

type HomeProps = {
  onRegisterClick: () => void;
  onSignupClick: () => void;
};

export default function Home({ onRegisterClick, onSignupClick }: HomeProps) {
  const { signOut, user } = useAuth();

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-2 rounded-lg">
                <Music className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Hyderabad Flute Festival</span>
            </div>
            <div className="flex items-center space-x-4">
              {user && (
                <>
                  <span className="text-sm text-gray-600 hidden sm:block">{user?.email}</span>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition text-gray-700"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      <section className="relative bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hyderabad Flute Festival
          </h1>
          <p className="text-2xl md:text-3xl mb-2 font-light">
            Celebrating the Legacy of Late Sri Manda BalaRama Sarma
          </p>
          <p className="text-xl md:text-2xl opacity-90">
            A Musical Tribute by Family & Students
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Heart className="w-8 h-8 text-amber-600" />
                <h2 className="text-4xl font-bold text-gray-900">About the Festival</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  The Hyderabad Flute Festival is dedicated to the birth anniversary of the legendary flutist <strong>Late Sri Manda BalaRama Sarma Garu</strong>.
                </p>
                <p>
                  Organized by <strong>SeshaLatha Manda</strong>, his daughter, along with his students, this festival celebrates his lifelong contributions to flute music, teaching, and cultural heritage.
                </p>
                <p>
                 This special event brings together all his students performing as one ensemble, showcasing Classical Flute  Music in a heartfelt tribute to his memory.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/cropped_circle_image_(1) copy.png"
                alt="Late Sri BalaRama Sarma"
                className="w-full max-w-sm rounded-full shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

     <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-12">
      <Award className="w-12 h-12 text-amber-600 mx-auto mb-4" />
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Festival Highlights
      </h2>
    </div>

    <div className="grid md:grid-cols-2 gap-8">

      {/* Card 1 */}
      <div className="bg-white rounded-xl shadow-lg  hover:shadow-2xl transition-shadow">
        <img
          src="/final_classical.png"
          alt="Sesha Latha Manda"
          className="w-full mt-10 h-48 object-cover rounded-lg mb-6"
        />

        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Classical Performance
        </h3>

        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-amber-600 mr-2">•</span>
            <span>
              Presentation of Carnatic ragas in traditional format with violin
              and mridangam accompaniment.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-amber-600 mr-2">•</span>
            <span>
              Performed by SeshaLatha Manda, disciple and daughter of Late Sri
              Manda Balarama Sarma.
            </span>
          </li>
        </ul>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
        <img
          src="/venu_nadha_neerajanam.jpeg"
          alt="Venu Nadha Neerajanam"
          className="w-full h-48 object-cover rounded-lg mb-6"
        />

        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Venu Gaana Neerajanam
        </h3>

        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-amber-600 mr-2">•</span>
            <span>
              Unified student ensemble under the guidance of Shesham Ramana Garu.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-amber-600 mr-2">•</span>
            <span>
              Tribute to Late Sri Manda Balarama Sarma Garu’s musical legacy.
            </span>
          </li>
        </ul>
      </div>

    </div> {/* ✅ close grid */}
  </div>   {/* ✅ close container */}
</section> {/* ✅ close section */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center space-x-3 mb-6">
            <Calendar className="w-8 h-8 text-amber-600" />
            <h2 className="text-4xl font-bold text-gray-900">Itinerary Programme Schedule</h2>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">December 30</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 bg-white rounded-lg p-4 shadow-sm">
                <Clock className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">5:30 PM – 5:40 PM</p>
                  <p className="text-gray-700">Welcome Address & Lighting of the Lamp</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-white rounded-lg p-4 shadow-sm">
                <Clock className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">5:40 PM – 5:55 PM</p>
                  <p className="text-gray-700">Flute Solo by Seshalatha  Manda</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-white rounded-lg p-4 shadow-sm">
                <Clock className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">5:55 PM – 6:15 PM</p>
                  <p className="text-gray-700">Flute Ensemble by Shesham Ramana & His Students</p>
                     <p className="text-gray-700">Accompaniments Dr.P.Srinivasa Gopalan (Mridangagam) & Anantha Sowri rajan (Violin)</p>
                  <p className="text-sm text-gray-600 mt-1">Followed by Distribution of Gifts to Students</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-amber-50 rounded-xl">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Performance Styles</h3>
              <p className="text-gray-700">Caratic flute style rich in gamakas and bhava</p>
            </div>
            <div className="p-6 bg-orange-50 rounded-xl">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Musical Legacy</h3>
              <p className="text-gray-700">Encouraging emerging musicians and keeping his lineage alive</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img
                  src="https://images.pexels.com/photos/1616470/pexels-photo-1616470.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Shilparamam venue"
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <MapPin className="w-8 h-8 text-amber-600" />
                  <h2 className="text-4xl font-bold text-gray-900">Venue & Details</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-amber-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Location</p>
                      <p className="text-gray-700">Shilparamam, Hyderabad</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-amber-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Duration</p>
                      <p className="text-gray-700">45 minutes performance</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-amber-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Audience</p>
                      <p className="text-gray-700">Open to all visitors at Shilparamam</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="w-8 h-8 text-amber-600" />
            <h2 className="text-4xl font-bold text-gray-900">Organized By</h2>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            <strong>SeshaLatha Manda</strong>, daughter of Late Sri Manda BalaRama Sarma
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Organising Committee – Supporters</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-amber-50 rounded-lg text-center">
                <p className="font-semibold text-gray-900">Achyut Reddy</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg text-center">
                <p className="font-semibold text-gray-900">Purnachandra</p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg text-center">
                <p className="font-semibold text-gray-900">Krishna Charith</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Event Organizing Contact</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Name</p>
                  <p className="text-lg font-semibold text-gray-900">Seshalatha Manda</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Phone</p>
                  <p className="text-lg font-semibold text-gray-900">+91 9962243380</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Email</p>
                  <p className="text-lg font-semibold text-gray-900">Latha.manda99@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Sponsors</h2>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-amber-50 rounded-lg text-center">
                  <p className="font-semibold text-gray-900">Seshalatha Manda(Daughter)</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg text-center">
                  <p className="font-semibold text-gray-900">Krishna Charith(GrandSon)</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Website Developed By</h3>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">Purna Chandra</p>
                <p className="text-sm text-gray-700">Mobile: +91 7075069816</p>
                <p className="text-sm text-gray-700">Email: purnachandra.sde@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Be Part of This Musical Journey
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Join us in celebrating the legacy of a legendary flutist
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {user ? (
              <button
                onClick={onRegisterClick}
                className="bg-white text-amber-600 px-12 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
              >
                Participate / Watch
              </button>
            ) : (
              <>
                <button
                  onClick={onSignupClick}
                  className="bg-white text-amber-600 px-12 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
                >
                  Sign Up to Participate
                </button>
                <button
                  onClick={onRegisterClick}
                  className="bg-amber-600 text-white px-12 py-4 rounded-full text-xl font-bold hover:bg-amber-700 transition-all transform hover:scale-105 shadow-2xl border-2 border-white"
                >
                  Watch Event
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Hyderabad Flute Festival. A tribute to Late Sri Manda BalaRama Sarma.
          </p>
        </div>
      </footer>
    </div>
  );
}
