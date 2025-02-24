
import { CheckCircle, Clock, BookOpen } from "lucide-react";

const exercises = [
  {
    title: "Git Basics",
    description: "Learn the fundamental Git commands and workflows",
    difficulty: "Beginner",
    duration: "30 mins",
    status: "available",
  },
  {
    title: "Branching & Merging",
    description: "Master the art of working with branches",
    difficulty: "Intermediate",
    duration: "45 mins",
    status: "coming-soon",
  },
  {
    title: "Collaborative Development",
    description: "Work with remote repositories and pull requests",
    difficulty: "Advanced",
    duration: "60 mins",
    status: "coming-soon",
  },
];

const Exercises = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Practice Exercises</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map((exercise, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    exercise.difficulty === "Beginner"
                      ? "bg-green-100 text-green-800"
                      : exercise.difficulty === "Intermediate"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {exercise.difficulty}
                </span>
                {exercise.status === "available" ? (
                  <CheckCircle className="text-green-500" size={20} />
                ) : (
                  <Clock className="text-gray-400" size={20} />
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">{exercise.title}</h3>
              <p className="text-gray-600 mb-4">{exercise.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-500">
                  <Clock size={16} className="mr-1" />
                  <span className="text-sm">{exercise.duration}</span>
                </div>
                <button
                  className={`px-4 py-2 rounded-lg ${
                    exercise.status === "available"
                      ? "bg-gray-900 text-white hover:bg-gray-800"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  } transition-colors`}
                  disabled={exercise.status !== "available"}
                >
                  {exercise.status === "available" ? (
                    "Start Exercise"
                  ) : (
                    "Coming Soon"
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exercises;
