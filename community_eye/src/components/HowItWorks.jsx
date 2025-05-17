// src/components/HowItWorks.jsx
const steps = [
    {
      title: "Capture the Issue",
      description: "Take a photo or video of any problem in your community.",
    },
    {
      title: "Fill in Report Details",
      description: "Select category, location, and write a short description.",
    },
    {
      title: "Submit Anonymously",
      description: "Send it without an account. Your identity is protected.",
    },
    {
      title: "Track & Vote",
      description: "Monitor report progress or vote on issues that matter.",
    },
  ];
  
  export default function HowItWorks() {
    return (
      <section className="bg-gray-100 py-16 px-4 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">How It Works</h2>
  
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0 md:items-stretch">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center md:w-1/4 relative px-4"
              >
                {/* Circle + step number */}
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-semibold z-10">
                  {index + 1}
                </div>
  
                {/* Line/chain connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 right-[-50.5%] w-[125%] border-t border-dashed border-blue-400 z-0"></div>
                )}
  
                {/* Step content */}
                <div className="mt-6 text-center md:text-left">
                  <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
  
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/report"
              className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Report Now
            </a>
            <a
              href="/dashboard"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
            >
              Explore Reports
            </a>
          </div>
        </div>
      </section>
    );
  }
  