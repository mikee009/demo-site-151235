import React from 'react';
import ShellShotWidget from './widgets/ShellShotWidget';
import KlingWidget from './widgets/KlingWidget';
import RetakeWidget from './widgets/RetakeWidget';
import ScailWidget from './widgets/ScailWidget';
import WanWidget from './widgets/WanWidget';

const AgentGrid: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 pb-32">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-min">
        {/* Row 1 */}
        <ShellShotWidget />
        <div className="md:col-start-4 md:row-start-1">
             <ScailWidget />
        </div>

        {/* Dynamic Column */}
        <div className="md:col-start-3 md:row-span-2 md:row-start-1 h-full">
            <KlingWidget />
        </div>
        
        {/* Row 2 */}
        <div className="md:col-span-2 md:row-start-2">
            <RetakeWidget />
        </div>
        <div className="md:col-start-4 md:row-start-2">
             <WanWidget />
        </div>
      </div>
    </div>
  );
};

export default AgentGrid;