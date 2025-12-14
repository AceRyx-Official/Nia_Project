'use client';

import { ArrowRight } from 'lucide-react';

const Machinery = () => {
  const machines = [
    {
      id: 1,
      name: 'Transit Mixer',
      image: '/Fleet/01_Transit.jpg',
      description: 'High-capacity concrete mixing trucks',
      specs: 'Capacity: 8 units'
    },
    {
      id: 2,
      name: 'Tipper Truck',
      image: '/Fleet/02_TipperTruck.png',
      description: 'Heavy-duty material transport vehicles',
      specs: 'Capacity: 6 units'
    },
    {
      id: 3,
      name: 'Ready-Mix Concrete',
      image: '/Fleet/03_RMC.jpg',
      description: 'Advanced concrete production facilities',
      specs: 'Capacity: 4 plants'
    },
    {
      id: 4,
      name: 'Backhoe Loader',
      image: '/Fleet/04_BackHoe.jpg',
      description: 'Versatile excavation and loading equipment',
      specs: 'Capacity: 3 units'
    },
    {
      id: 5,
      name: 'Water Tanker',
      image: '/Fleet/05_WaterTanker.png',
      description: 'Water supply and dust suppression',
      specs: 'Capacity: 2 units'
    },
    {
      id: 6,
      name: 'Road Roller',
      image: '/Fleet/06_RoadRoller.jpg',
      description: 'Road surface compaction machinery',
      specs: 'Capacity: 2 units'
    },
    {
      id: 7,
      name: 'Ecoman VSI Crusher',
      image: '/Fleet/07_Ecoman-VSI.jpeg',
      description: 'Advanced vertical shaft impact crusher',
      specs: 'Capacity: 1 unit'
    },
    {
      id: 8,
      name: 'Soil Compactor',
      image: '/Fleet/08_SoilCompactor.jpg',
      description: 'Ground preparation and compaction',
      specs: 'Capacity: 1 unit'
    },
    {
      id: 9,
      name: 'Motor Grader',
      image: '/Fleet/09_MotorG.jpeg',
      description: 'Precision road grading equipment',
      specs: 'Capacity: 1 unit'
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">

      {/* Top Geometric Separator — kept, background neutralized */}
      <div className="absolute top-0 left-0 right-0 h-16 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 32L1200 0L1200 64L0 64V32Z"
            fill="transparent"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-4">
                OUR FLEET
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Advanced Machinery for Superior Construction
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              Our state-of-the-art machinery fleet represents a significant investment in quality construction equipment. Each machine is meticulously maintained and operated by trained professionals to ensure optimal performance and safety standards on every project.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">Modern, well-maintained equipment</span>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">Expert operators and technicians</span>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">Regular maintenance and safety checks</span>
              </div>
            </div>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center gap-2">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Content - Isometric Block */}
          <div className="relative h-[32rem] lg:h-[36rem] flex items-center justify-center">
  <div className="w-full max-w-5xl">
    <img
      src="/3D_Images/005b.png"
      alt="Construction Machinery Fleet 3D"
      className="w-full h-auto object-contain drop-shadow-2xl
                 transition-transform duration-500 ease-out
                 hover:scale-110"
    />
  </div>
</div>

        </div>

        {/* Machinery Grid */}
        {/* <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-10">Fleet Inventory</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {machines.map((machine) => (
              <div
                key={machine.id}
                className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div
                    className={`absolute top-4 right-4 inline-flex items-center justify-center w-12 h-12 rounded-full font-bold text-white text-lg ${
                      machine.id === 1 ? 'bg-blue-500' :
                      machine.id === 2 ? 'bg-green-500' :
                      machine.id === 3 ? 'bg-orange-500' :
                      machine.id === 4 ? 'bg-purple-500' :
                      machine.id === 5 ? 'bg-cyan-500' :
                      machine.id === 6 ? 'bg-yellow-500' :
                      machine.id === 7 ? 'bg-red-500' :
                      machine.id === 8 ? 'bg-indigo-500' :
                      'bg-teal-500'
                    } shadow-lg`}
                  >
                    {(machine.specs.match(/\d+/) || ['1'])[0]}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h4 className="text-lg font-semibold text-gray-900">{machine.name}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{machine.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Bottom Stats */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-orange-500">30+</p>
              <p className="text-gray-600 font-medium">Machines & Equipment</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-orange-500">₹50Cr+</p>
              <p className="text-gray-600 font-medium">Fleet Investment Value</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-orange-500">99%</p>
              <p className="text-gray-600 font-medium">Fleet Availability</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {machines.map((machine) => (
              <div
                key={machine.id}
                className="relative rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-64 group"
                style={{
                  backgroundImage: `url('${machine.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/10 transition-colors duration-300" />

                <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 opacity-100 group-hover:opacity-0 transition-opacity duration-300 text-center">
                  <p className="text-6xl font-bold text-white">
                    {(machine.specs.match(/\d+/) || ['1'])[0]}
                  </p>
                  <h4 className="font-semibold text-white text-lg mt-4">
                    {machine.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Machinery;
