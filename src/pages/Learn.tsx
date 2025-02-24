
import { useState } from "react";
import { GitBranch, Github } from "lucide-react";

const Learn = () => {
  const [activeTab, setActiveTab] = useState("git");

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Tabs */}
          <div className="flex space-x-4 mb-8">
            <button
              onClick={() => setActiveTab("git")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                activeTab === "git"
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <GitBranch size={20} />
              <span>Git</span>
            </button>
            <button
              onClick={() => setActiveTab("github")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                activeTab === "github"
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <Github size={20} />
              <span>GitHub</span>
            </button>
          </div>

          {/* Content */}
          <div className="prose max-w-none">
            {activeTab === "git" ? (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-6">What is Git?</h2>
                <p className="text-gray-600 mb-4">
                  Git is a distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers collaboratively developing source code during software development.
                </p>
                <h3 className="text-xl font-semibold mb-4">Key Concepts</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Repository - A storage location for your project</li>
                  <li>Commit - A snapshot of your files at a specific point in time</li>
                  <li>Branch - A parallel version of your repository</li>
                  <li>Merge - Combining changes from different branches</li>
                </ul>
              </div>
            ) : (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-6">What is GitHub?</h2>
                <p className="text-gray-600 mb-4">
                  GitHub is a web-based hosting service for version control using Git. It provides the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project.
                </p>
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Repository Hosting - Store your Git repositories online</li>
                  <li>Pull Requests - Propose changes to others' code</li>
                  <li>Issues - Track bugs and feature requests</li>
                  <li>Actions - Automate your development workflow</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
