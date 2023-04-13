import { memo } from 'react';

export const HotelInfo = memo(() => {
  return (
    <>
      <div className="item-box hotel-info">
        <p>
          Blaze is a retro version of Habbo Hotel that aims to recreate the
          classic Habbo experience.
          <br /> Here are some things you should know:
        </p>
        <ul>
          <li>
            Blaze is run by a team of dedicated staff members who are committed
            to making the hotel a fun and safe place to hang out.
          </li>
          <li>
            You can create an avatar, or "Habbo," and customize it with a
            variety of clothing and accessories.
          </li>
          <li>
            There are a wide variety of rooms to explore, each with its own
            theme and style.
          </li>
          <li>
            You can chat with other users from around the world, make friends,
            and join groups and communities.
          </li>
          <li>
            There are also a variety of games and activities to enjoy, such as
            Battle Ball, Snow Storm, and more.
          </li>
          <li>
            If you ever have any questions or issues, you can reach out to the
            staff team for help.
          </li>
        </ul>
      </div>
      <img src="/assets/images/info-chat.png" />
    </>
  );
});
