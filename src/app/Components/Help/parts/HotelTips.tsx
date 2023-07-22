import { memo } from 'react';

export const HotelTips = memo(() => {
  return (
    <>
      <div className="item-box hotel-tips">
        <p>Here are some tips for getting started on Blaze:</p>
        <ol>
          <li>Create an account and log in to start exploring the hotel.</li>
          <li>
            Check out the different rooms and find ones that interest you.
          </li>
          <li>Join a group or community to connect with like-minded users.</li>
          <li>
            Play some games and earn coins to buy new items for your Habbo.
          </li>
          <li>
            Be respectful of other users and follow the rules to ensure a
            positive experience for everyone.
          </li>
        </ol>
      </div>
      <img src="/assets/images/info-football.png" />
    </>
  );
});
