import cnf from 'lang/en.json';
import { memo } from 'react';
import { IMeStatus } from './interfaces/IMeStatus';
const MeStatus = memo(({ ...props }: IMeStatus) => {
  return (
    <div className="me-status">
      <div className="statistics" style={{ borderBottom: 'solid 1px #e0a25e' }}>
        <div className="icon credits"></div> <strong>{props.credits}</strong>
        &nbsp;{cnf.texts.HOME_CREDITS}
      </div>
      <div className="statistics" style={{ borderBottom: 'solid 1px #bc7abc' }}>
        <div className="icon duckets"></div> <strong>{props.duckets}</strong>
        &nbsp;{cnf.texts.HOME_DUCKETS}
      </div>
      <div className="statistics" style={{ borderBottom: 'solid 1px #82d6db' }}>
        <div className="icon diamonds"></div> <strong>{props.diamonds}</strong>
        &nbsp;{cnf.texts.HOME_DIAMONDS}
      </div>
    </div>
  );
});
export default MeStatus;
