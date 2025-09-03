'use client';

import { useState } from 'react';
import { ConnectWallet } from '@coinbase/onchainkit/wallet';
import { HeroSection } from './components/HeroSection';
import { SearchBar } from './components/SearchBar';
import { SampleCard } from './components/SampleCard';
import { AnalysisResult } from './components/AnalysisResult';
import { CTAButton } from './components/CTAButton';
import { UserAvatar } from './components/UserAvatar';
import { useSearch } from './hooks/useSearch';
import { useAnalysis } from './hooks/useAnalysis';
import { Upload, Search, Zap } from 'lucide-react';

type AppMode = 'welcome' | 'search' | 'analyze';

export default function Home() {
  const [mode, setMode] = useState<AppMode>('welcome');
  const [file, setFile] = useState<File | null>(null);
  const { searchSamples, isSearching, results, clearResults } = useSearch();
  const { analyzeRemix, isAnalyzing, result, clearResult } = useAnalysis();

  const handleSearch = (query: string) => {
    clearResults();
    searchSamples(query);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  const handleAnalyze = () => {
    if (file) {
      clearResult();
      analyzeRemix(file);
    }
  };

  return (
    <div className="container">
      <HeroSection />

      {/* Wallet Connection */}
      <div className="card mb-6 flex items-center justify-between">
        <div className="flex items-center">
          <UserAvatar size="md" />
          <div className="ml-3">
            <p className="text-sm font-medium text-textPrimary">Connect to get started</p>
            <p className="text-xs text-textSecondary">Secure payments & clearance tracking</p>
          </div>
        </div>
        <ConnectWallet />
      </div>

      {/* Navigation Tabs */}
      {mode === 'welcome' && (
        <div className="space-y-4 mb-6">
          <CTAButton
            onClick={() => setMode('search')}
            className="w-full flex items-center justify-center"
          >
            <Search size={20} className="mr-2" />
            Search Sample Database
          </CTAButton>
          
          <CTAButton
            onClick={() => setMode('analyze')}
            variant="secondary"
            className="w-full flex items-center justify-center"
          >
            <Zap size={20} className="mr-2" />
            Analyze My Remix
          </CTAButton>
        </div>
      )}

      {/* Search Mode */}
      {mode === 'search' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-textPrimary">Sample Database</h2>
            <button
              onClick={() => setMode('welcome')}
              className="text-sm text-primary hover:underline"
            >
              Back
            </button>
          </div>

          <SearchBar 
            onSearch={handleSearch}
            isLoading={isSearching}
            placeholder="Enter track title, artist, or lyrics..."
          />

          {isSearching && (
            <div className="card text-center">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
              <p className="text-textSecondary">Searching sample database...</p>
            </div>
          )}

          {results.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-textPrimary">Found {results.length} samples</h3>
              {results.map((sample) => (
                <SampleCard key={sample.sampleId} sample={sample} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Analysis Mode */}
      {mode === 'analyze' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-textPrimary">DMCA Risk Analysis</h2>
            <button
              onClick={() => setMode('welcome')}
              className="text-sm text-primary hover:underline"
            >
              Back
            </button>
          </div>

          <div className="card">
            <h3 className="font-medium text-textPrimary mb-4">Upload Your Remix</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload size={32} className="mx-auto text-gray-400 mb-3" />
              <input
                type="file"
                accept="audio/*"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label 
                htmlFor="file-upload" 
                className="cursor-pointer text-primary hover:underline font-medium"
              >
                Choose audio file
              </label>
              <p className="text-sm text-textSecondary mt-2">
                Supports MP3, WAV, FLAC (max 10MB)
              </p>
              {file && (
                <p className="text-sm text-primary mt-2">
                  Selected: {file.name}
                </p>
              )}
            </div>

            {file && (
              <CTAButton
                onClick={handleAnalyze}
                loading={isAnalyzing}
                className="w-full mt-4"
              >
                Analyze for DMCA Risk
              </CTAButton>
            )}
          </div>

          {result && (
            <AnalysisResult
              riskScore={result.riskScore}
              variant={result.riskLevel}
              details={result.details}
              suggestions={result.suggestions}
            />
          )}
        </div>
      )}

      {/* Footer */}
      <div className="mt-12 text-center text-sm text-textSecondary border-t border-gray-100 pt-6">
        <p>Powered by Base • Built for creators</p>
        <p className="mt-1">© 2024 Sampleflow. Clear samples, create freely.</p>
      </div>
    </div>
  );
}
