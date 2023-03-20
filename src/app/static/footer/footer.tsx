import { memo } from "react";

export const Footer = memo(() => {
  return (
    <>
      <div className="footermain">
        <div className="fbox">
          <div className="footer-title">
            Blaze Hotel <small>(v0.1)</small>
          </div>
          <p className="footer-desc">
            Blaze Hotel, kendi karakterinizi ve odalarınızı
            tasarlayabileceğiniz, gençler için sanal bir dünyadır. Ayrıca yeni
            arkadaşlarla tanışabilir, sohbet edebilir, parti yapabilir, evcil
            hayvanlara bakabilir, oyun tasarlayabilir ve oynayabilir ve
            görevlerden geçebilirsiniz.
          </p>
          <div className="footer-social">
            <a href="#" style={{ marginRight: "20px" }} target="_blank">
              <i className="fab fa-twitter" style={{ marginRight: "5px" }}></i>{" "}
              Twitter
            </a>
            <a href="#" style={{ marginRight: "20px" }} target="_blank">
              <i
                className="fab fa-instagram"
                style={{ marginRight: "5px" }}
              ></i>{" "}
              Instagram
            </a>
            <a
              href="https://discord.gg/blazehotel"
              target="_blank"
              rel={"noreferrer"}
            >
              <i className="fab fa-discord" style={{ marginRight: "5px" }}></i>{" "}
              Discord
            </a>
          </div>
          <div className="raze-info">
            <a href="#" className="footer-url">
              Kurallar
            </a>
            <a href="#" className="footer-url">
              Kullanım ve şart koşulları
            </a>
            <a href="#" className="footer-url">
              Gizlilik politikası
            </a>
            <a href="#" className="footer-url">
              Çerez politikası
            </a>
          </div>
        </div>
      </div>
      <div className="footer">© 2023 Blaze Hotel</div>
    </>
  );
});
