import { memo } from 'react';
import { HotelInfo } from './parts/HotelInfo';
import { HotelTips } from './parts/HotelTips';
import { StaffInfo } from './parts/StaffInfo';

export const HelpBox = memo(() => {
  return (
    <div className="help">
      <div className="help-main">
        <div className="help-head">What is Blaze hotel?</div>
        <div className="helpbox">
          <h1>What is Blaze hotel?</h1>
          <HotelInfo />
          <HotelTips />
          <StaffInfo />
        </div>
      </div>
    </div>
  );
});
