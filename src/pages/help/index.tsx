import AnnouncementBar from '@/Components/static/Components/AnnouncementBar/AnnouncementBar';
import { Footer } from '@/Components/static/Components/footer/footer';
import Header from '@/Components/static/Components/header/header';
import Main from '@/Components/static/Components/Main/main';
import Navigator from '@/Components/static/Components/nav/navigator';
import Head from 'next/head';
import '/styles/styles.css';
export default function HelpPage() {
  return (
    <>
      <Head>
        <title>Help</title>
      </Head>
      <Navigator />
      <Header />
      <AnnouncementBar title={'What is Blaze'} description={'test'} />
      <Main
        child={
          <div className="help">
            <div className="help-main">
              <div className="help-head">What is Blaze hotel?</div>
              <div className="helpbox">
                <h1>What is Blaze hotel?</h1>
                <div className="item-box hotel-info">
                  <p>
                    Blaze is a retro version of Habbo Hotel that aims to
                    recreate the classic Habbo experience. Here are some things
                    you should know:
                  </p>
                  <ul>
                    <li>
                      Blaze is run by a team of dedicated staff members who are
                      committed to making the hotel a fun and safe place to hang
                      out.
                    </li>
                    <li>
                      You can create an avatar, or "Habbo," and customize it
                      with a variety of clothing and accessories.
                    </li>
                    <li>
                      There are a wide variety of rooms to explore, each with
                      its own theme and style.
                    </li>
                    <li>
                      You can chat with other users from around the world, make
                      friends, and join groups and communities.
                    </li>
                    <li>
                      There are also a variety of games and activities to enjoy,
                      such as Battle Ball, Snow Storm, and more.
                    </li>
                    <li>
                      If you ever have any questions or issues, you can reach
                      out to the staff team for help.
                    </li>
                  </ul>
                </div>
                <img src="https://images.habbo.com/c_images/HabboWay/habboway_2a.png" />

                <div className="item-box hotel-tips">
                  <p>Here are some tips for getting started on Blaze:</p>
                  <ol>
                    <li>
                      Create an account and log in to start exploring the hotel.
                    </li>
                    <li>
                      Check out the different rooms and find ones that interest
                      you.
                    </li>
                    <li>
                      Join a group or community to connect with like-minded
                      users.
                    </li>
                    <li>
                      Play some games and earn coins to buy new items for your
                      Habbo.
                    </li>
                    <li>
                      Be respectful of other users and follow the rules to
                      ensure a positive experience for everyone.
                    </li>
                  </ol>
                </div>
                <img src="https://images.habbo.com/c_images/HabboWay/habboway_1a.png" />
                <div className="item-box hotel-staffInfo">
                  <p>
                    Finally, here are some important things to know about the
                    staff team at Blaze:
                  </p>
                  <ul>
                    <li>
                      The staff team is responsible for enforcing the rules and
                      ensuring that everyone has a safe and enjoyable
                      experience.
                    </li>
                    <li>
                      If you ever have any issues or concerns, you can reach out
                      to a staff member for help.
                    </li>
                    <li>
                      There are a variety of staff positions, each with its own
                      responsibilities and duties.
                    </li>
                    <li>
                      Staff members are expected to be professional, friendly,
                      and helpful at all times.
                    </li>
                  </ul>
                </div>
                <img src="https://images.habbo.com/c_images/WhatIsHabbo/ill_15.png" />
              </div>
            </div>
          </div>
        }
      />
      <Footer />
    </>
  );
}
