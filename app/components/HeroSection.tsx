'use client';

import { Music, Clock, BarChart3, AlertTriangle } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="text-center mb-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-textPrimary mb-2">
          Sampleflow
        </h1>
        <p className="text-lg text-textSecondary">
          Clear Samples, Create Freely.
        </p>
      </div>

      {/* Stats Section inspired by the image */}
      <div className="card mb-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="text-center mb-4">
          <p className="text-textSecondary mb-4">
            remix artists <span className="italic">discover</span> you've <span className="font-bold text-primary">moved?</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="flex flex-col items-center">
            <Clock size={48} className="text-accent mb-2" />
            <div className="text-2xl font-bold text-textPrimary">20-30 hours</div>
            <div className="text-sm text-textSecondary">spent on sample research</div>
          </div>

          <div className="flex flex-col items-center">
            <BarChart3 size={48} className="text-primary mb-2" />
            <div className="text-2xl font-bold text-textPrimary">34%</div>
            <div className="text-sm text-textSecondary">of remixes are secure sample rights</div>
          </div>

          <div className="flex flex-col items-center">
            <AlertTriangle size={48} className="text-yellow-500 mb-2" />
            <div className="text-sm text-textSecondary">Due to uncleared samples</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-700 to-teal-800 text-white text-center py-4 rounded-lg">
          <div className="text-xl font-bold">DMCA takedowns</div>
        </div>
      </div>
    </div>
  );
}
