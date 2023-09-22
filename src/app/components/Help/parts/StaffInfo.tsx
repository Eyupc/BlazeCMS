import { memo } from 'react';

export const StaffInfo = memo(() => {
  return (
    <>
      <div className="item-box hotel-staffInfo">
        <p>
          Finally, here are some important things to know about the staff team
          at Blaze:
        </p>
        <ul>
          <li>
            The staff team is responsible for enforcing the rules and ensuring
            that everyone has a safe and enjoyable experience.
          </li>
          <li>
            If you ever have any issues or concerns, you can reach out to a
            staff member for help.
          </li>
          <li>
            There are a variety of staff positions, each with its own
            responsibilities and duties.
          </li>
          <li>
            Staff members are expected to be professional, friendly, and helpful
            at all times.
          </li>
        </ul>
      </div>
      <img src="/assets/images/info-question.png" />
    </>
  );
});
