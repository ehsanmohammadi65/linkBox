<template>
  <link rel="stylesheet" href="/css/foundation.css" />

  <div class="row">
    <div class="small-12 columns">
      <ul
        class="link-box small-block-grid-2 medium-block-grid-3 large-block-grid-4"
        dir="rtl"
      >
        <li>
          <a
            class="link-box__link"
            href="https://ep.tamin.ir/"
            title="Quick Link"
            target="_blank"
          >
            <figure class="link-box__item">
              <img src="/img/tamin.jpg" alt="img03" />
              <figcaption class="link-box__caption">
                <h3>نسخ الکترونیک تامین</h3>
                <p>ثبت نسخ الکترونیک بیمه تامین اجتماعی</p>
              </figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a
            class="link-box__link"
            href="https://eservices.ihio.gov.ir/sso/?sourceApp=https://eservices.ihio.gov.ir/ihioerx/"
            title="Quick Link"
            target="_blank"
          
          >
            <figure class="link-box__item">
              <img src="/img/khadamat.jpg" alt="img01" />
              <figcaption class="link-box__caption">
                <h3>نسخ الکترونیک بیمه سلامت</h3>
                <p>سامانه ثبت نسخ الکترونیک بیمه سلامت</p>
              </figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a
            class="link-box__link"
            href="http://10.10.10.6:800/"
            title="Quick Link"
            target="_blank"
          >
            <figure class="link-box__item">
              <img src="/img/contact.jpg" alt="img01" />
              <figcaption class="link-box__caption">
                <h3>دفترچه تلفن</h3>
                <p>لیست شماره تلفن های بیمارستان و ...</p>
              </figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a
            class="link-box__link"
            href="http://auto.lums.ac.ir/FarzinSoft/eOrgan/Login/LoginFrm.aspx?"
            title="Quick Link"
            target="_blank"
          >
            <figure class="link-box__item">
              <img src="/img/auto.jpg" alt="img01" />
              <figcaption class="link-box__caption">
                <h3>اتوماسیون اداری</h3>
                <p>اتوماسیون اداری دانشگاه علوم پزشکی لرستان</p>
              </figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a
            class="link-box__link"
            href="http://fish.lums.ac.ir/"
            title="Quick Link"
            target="_blank"
          >
            <figure class="link-box__item">
              <img src="/img/fish.jpg" alt="img01" />
              <figcaption class="link-box__caption">
                <h3>سامانه فیش</h3>
                <p>آموزش,سامانه فیش حقوقی,کنترل تردد</p>
              </figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a
            class="link-box__link"
            href="http://10.10.10.6/mosh/plugin/transfer/login.php"
            title="Quick Link"
            target="_blank"
          >
            <figure class="link-box__item">
              <img src="/img/seven.jpg" alt="img01" />
              <figcaption class="link-box__caption">
                <h3>سامانه جابجایی</h3>
                <p>سامانه جابجایی شیفت پرسنل درمان</p>
              </figcaption>
            </figure>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.link-box {
  min-width: 300px;
}
.link-box .link-box__link {
  display: block;
}
.link-box .link-box__item {
  margin: 0;
  position: relative;
  overflow: hidden;
  max-height: 240px;
}
.link-box .link-box__item:hover .link-box__caption::before {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.link-box .link-box__item .link-box__caption {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backround: blue;
}
.link-box .link-box__item .link-box__caption::before {
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: -webkit-linear-gradient(
    top,
    rgba(39, 63, 122, 0) 0%,
    rgba(39, 63, 122, 0.8) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(39, 63, 122, 0) 0%,
    rgba(39, 63, 122, 0.8) 100%
  );
  content: "";
  opacity: 0;
  -webkit-transform: translate3d(0, 50%, 0);
  transform: translate3d(0, 50%, 0);
}
.link-box .link-box__item img {
  position: relative;
  display: block;
  min-height: 100%;
  max-width: 100%;
  opacity: 0.9;
}
.link-box .link-box__item h3 {
  position: absolute;
  bottom: 0;
  _background: rgba(39, 63, 122, 0.5);
  margin: 0;
  left: 0;
  padding: 0.1rem 1rem;
  text-align: center;
  width: 100%;
  color: #273f7a;
  _color: #f4d16f;
  -webkit-transition: -webkit-transform 0.35s, color 0.35s;
  transition: transform 0.35s, color 0.35s;
  _-webkit-transform: translate3d(0, -50%, 0);
  _transform: translate3d(0, -50%, 0);
}
.link-box .link-box__item p {
  color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1em;
  width: 100%;
  opacity: 0;
  -webkit-transform: translate3d(0, 10px, 0);
  transform: translate3d(0, 10px, 0);
  max-height: 50%;
  margin: 0;
}
.link-box .link-box__item:hover img {
  opacity: 0.5;
}
.link-box .link-box__item:hover h3 {
  color: #f4d16f;
  -webkit-transform: translate3d(0, -100%, 0) translate3d(0, -40px, 0);
  transform: translate3d(0, -100%, 0) translate3d(0, -40px, 0);
  background: transparent;
}
.ie9 .link-box .link-box__item:hover h3 {
  top: 20%;
}
.link-box .link-box__item:hover p {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.ie9 .link-box__item:hover .link-box__caption {
  background: #000;
  background: rgba(39, 63, 122, 0.7);
}
</style>
