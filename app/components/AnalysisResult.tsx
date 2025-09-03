'use client';

import { RiskLevel } from '../types';
import { AlertTriangle, CheckCircle, Shield, Info } from 'lucide-react';

interface AnalysisResultProps {
  riskScore: number;
  variant?: RiskLevel;
  details?: string;
  suggestions?: string[];
}

export function AnalysisResult({ riskScore, variant, details, suggestions }: AnalysisResultProps) {
  const getRiskLevel = (): RiskLevel => {
    if (riskScore <= 0.3) return 'low';
    if (riskScore <= 0.7) return 'medium';
    return 'high';
  };

  const currentRisk = variant || getRiskLevel();

  const getRiskIcon = () => {
    switch (currentRisk) {
      case 'low':
        return <CheckCircle size={24} />;
      case 'medium':
        return <Shield size={24} />;
      case 'high':
        return <AlertTriangle size={24} />;
    }
  };

  const getRiskClass = () => {
    return `risk-${currentRisk}`;
  };

  const getRiskText = () => {
    switch (currentRisk) {
      case 'low':
        return 'Low Risk';
      case 'medium':
        return 'Medium Risk';
      case 'high':
        return 'High Risk';
    }
  };

  const getRiskDescription = () => {
    switch (currentRisk) {
      case 'low':
        return 'Your remix appears to have minimal DMCA takedown risk. The samples detected are likely cleared or fall under fair use.';
      case 'medium':
        return 'Some potential issues detected. Consider reviewing the highlighted samples and their clearance status before publishing.';
      case 'high':
        return 'High probability of DMCA takedown detected. We strongly recommend clearing samples or finding alternatives before release.';
    }
  };

  return (
    <div className="card animate-slide-up">
      <div className={`${getRiskClass()} text-white rounded-lg p-4 mb-4`}>
        <div className="flex items-center mb-3">
          {getRiskIcon()}
          <div className="ml-3">
            <h3 className="text-xl font-semibold">{getRiskText()}</h3>
            <p className="text-sm opacity-90">Risk Score: {Math.round(riskScore * 100)}%</p>
          </div>
        </div>
        <p className="text-sm opacity-90">{getRiskDescription()}</p>
      </div>

      {details && (
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <Info size={16} className="mr-2 text-primary" />
            <h4 className="font-medium text-textPrimary">Analysis Details</h4>
          </div>
          <p className="text-sm text-textSecondary bg-gray-50 p-3 rounded-md">{details}</p>
        </div>
      )}

      {suggestions && suggestions.length > 0 && (
        <div>
          <h4 className="font-medium text-textPrimary mb-3">Recommendations:</h4>
          <ul className="space-y-2">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="flex items-start text-sm text-textSecondary">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex gap-3 mt-6">
        <button className="btn-primary flex-1">
          View Alternatives
        </button>
        <button className="btn-secondary flex-1">
          Get Full Report
        </button>
      </div>
    </div>
  );
}
