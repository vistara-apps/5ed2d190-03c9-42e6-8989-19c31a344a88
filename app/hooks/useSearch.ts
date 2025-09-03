'use client';

import { useState } from 'react';
import { Sample } from '../types';

export function useSearch() {
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<Sample[]>([]);
  const [error, setError] = useState<string | null>(null);

  const searchSamples = async (query: string) => {
    setIsSearching(true);
    setError(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Mock search results
      const mockResults: Sample[] = [
        {
          sampleId: 'sample_001',
          originalTrackId: 'track_123',
          sampleStart: 30.5,
          sampleEnd: 45.2,
          originalArtist: query || 'Unknown Artist',
          isCleared: true,
          clearanceProcess: 'Contact publisher via ASCAP. Standard mechanical license available.',
          rightsHolder: 'Sony Music Publishing',
          similarityScore: 0.95
        },
        {
          sampleId: 'sample_002',
          originalTrackId: 'track_456',
          sampleStart: 15.0,
          sampleEnd: 25.8,
          originalArtist: query || 'Unknown Artist',
          isCleared: false,
          clearanceProcess: 'Rights holder requires direct negotiation. Contact required before use.',
          rightsHolder: 'Independent Artist Rights',
          similarityScore: 0.87
        },
        {
          sampleId: 'sample_003',
          originalTrackId: 'track_789',
          sampleStart: 60.2,
          sampleEnd: 72.5,
          originalArtist: query || 'Unknown Artist',
          isCleared: false,
          clearanceProcess: undefined,
          rightsHolder: undefined,
          similarityScore: 0.73
        }
      ];

      setResults(mockResults);
    } catch (err) {
      setError('Failed to search samples. Please try again.');
      console.error('Search error:', err);
    } finally {
      setIsSearching(false);
    }
  };

  return {
    searchSamples,
    isSearching,
    results,
    error,
    clearResults: () => setResults([])
  };
}
