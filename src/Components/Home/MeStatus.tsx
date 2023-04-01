import cnf from 'cms-config.json';
import { memo } from 'react';
import { IMeStatus } from './interfaces/IMeStatus';
const MeStatus = memo(({ ...props }: IMeStatus) => {
  return (
    <div className="me-status">
      <div className="statistics" style={{ borderBottom: 'solid 1px #fe1500' }}>
        <div className="icon health"></div> <strong>{props.credits}</strong>
        &nbsp;{cnf.texts.HOME_CREDITS}
      </div>
      <div className="statistics" style={{ borderBottom: 'solid 1px #5bc025' }}>
        <div className="icon energy"></div> <strong>{props.duckets}</strong>
        &nbsp;{cnf.texts.HOME_DUCKETS}
      </div>
      <div className="statistics" style={{ borderBottom: 'solid 1px #8547be' }}>
        <div className="icon hyg"></div> <strong>{props.diamonds}</strong>
        &nbsp;{cnf.texts.HOME_DIAMONDS}
      </div>
    </div>
  );
});
export default MeStatus;
