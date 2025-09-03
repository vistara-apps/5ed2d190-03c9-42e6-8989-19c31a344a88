'use client';

import { Sample, ClearanceStatus } from '../types';
import { CheckCircle, XCircle, AlertCircle, Clock, User, DollarSign } from 'lucide-react';

interface SampleCardProps {
  sample: Sample;
  variant?: ClearanceStatus;
}

export function SampleCard({ sample, variant }: SampleCardProps) {
  const getStatusIcon = () => {
    if (sample.isCleared) return <CheckCircle size={20} />;
    if (sample.isCleared === false) return <XCircle size={20} />;
    return <AlertCircle size={20} />;
  };

  const getStatusClass = () => {
    if (sample.isCleared) return 'status-cleared';
    if (sample.isCleared === false) return 'status-uncleared';
    return 'status-unknown';
  };

  const getStatusText = () => {
    if (sample.isCleared) return 'Cleared';
    if (sample.isCleared === false) return 'Not Cleared';
    return 'Status Unknown';
  };

  return (
    <div className="card animate-slide-up hover:shadow-lg transition-shadow duration-250">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-textPrimary mb-2">
            Sample from "{sample.originalArtist}"
          </h3>
          <div className="flex items-center text-sm text-textSecondary mb-2">
            <Clock size={16} className="mr-2" />
            {sample.sampleStart}s - {sample.sampleEnd}s
          </div>
        </div>
        <div className={`px-3 py-1 rounded-md text-sm font-medium flex items-center ${getStatusClass()}`}>
          {getStatusIcon()}
          <span className="ml-2">{getStatusText()}</span>
        </div>
      </div>

      {sample.rightsHolder && (
        <div className="flex items-center text-sm text-textSecondary mb-3">
          <User size={16} className="mr-2" />
          Rights Holder: {sample.rightsHolder}
        </div>
      )}

      {sample.clearanceProcess && (
        <div className="bg-gray-50 rounded-md p-3 mb-3">
          <h4 className="font-medium text-textPrimary mb-2">Clearance Process:</h4>
          <p className="text-sm text-textSecondary">{sample.clearanceProcess}</p>
        </div>
      )}

      <div className="flex justify-between items-center pt-3 border-t border-gray-100">
        <div className="text-sm text-textSecondary">
          Sample ID: {sample.sampleId.substring(0, 8)}...
        </div>
        {sample.isCleared === false && (
          <button className="btn-secondary text-sm py-2 px-4">
            <DollarSign size={16} className="mr-1" />
            Request Clearance
          </button>
        )}
      </div>
    </div>
  );
}
