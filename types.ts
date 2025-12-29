import React from 'react';

export interface Agent {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  type: 'video' | 'image' | 'interactive' | 'comparison' | 'morph';
  mediaUrl?: string;
  mediaUrl2?: string; // For comparison or morph
}