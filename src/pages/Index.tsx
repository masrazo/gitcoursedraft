
import { GitBranch, BookOpen, Code } from "lucide-react";
import FeatureCard from "../components/FeatureCard";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-up">
            Master Git & GitHub
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-up">
            Learn version control and collaborative development through interactive lessons and hands-on exercises.
          </p>
          <div className="flex justify-center gap-4 animate-fade-up">
            <Link
              to="/learn"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Start Learning
            </Link>
            <Link
              to="/exercises"
              className="bg-white text-gray-900 px-6 py-3 rounded-lg border hover:bg-gray-50 transition-colors"
            >
              Try Exercises
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Learn With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={GitBranch}
              title="Learn Git Basics"
              description="Master the fundamentals of version control with clear, concise explanations and real-world examples."
            />
            <FeatureCard
              icon={Code}
              title="Interactive Exercises"
              description="Practice what you learn with hands-on exercises designed to reinforce your understanding."
            />
            <FeatureCard
              icon={BookOpen}
              title="Comprehensive Guide"
              description="From basic commands to advanced workflows, we've got you covered with detailed documentation."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
