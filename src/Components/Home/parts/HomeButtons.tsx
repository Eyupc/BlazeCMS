import { memo } from 'react';

const HomeButtons = memo(() => {
  return (
    <div className="hotel-button">
      <div className="enterhotel">OTELE GİR</div>
      <div className="razewiki">DISCORD</div>
    </div>
  );
});
export default HomeButtons;
