<template>
  <div class="container">


    <ul class="title">    
    <!-- <li class="banner"><base-card><base-banner></base-banner></base-card></li> -->

      <base-card>
        <li><p class="p">لینک سریع</p><BoxLink> </BoxLink></li>

        <li>
          <box-link></box-link></li
      ></base-card>
    </ul>
  </div>
  <div class="group container">
    <ul>
      
      <base-card v-for="list in lists" :key="list.group" class="base">
        <li>
          <p class="p">{{ list.group }}</p>
        </li>
        <div>
          <li v-for="(link, index) in list.address" :key="link.link">
            <base-card class="link" :mode="link"
              ><a
                :href="link.link"
                target="_blank"
                :style="'font-weight:bold;'+'color:' + Palette[index]"
                >{{ link.name }}</a
              ></base-card
            >
          </li>
        </div>
      </base-card>
    </ul>
  </div>
</template>

<script>
import Palette from "./array.js";
//import BaseBanner from './components/ui/BaseBanner.vue'
export default {
  name: "App",
  //components: {BaseBanner},
  data() {
    return {
      Palette,
      lists: [
        {
          group: "وب سایت های داخلی",
          address: [
            {
              id: "47",
              name: "شماره های داخلی",
              link: "http://10.10.10.6:800",
              cat: "1",
              visibility: "1",
            },
            {
              id: "1",
              name: "سیستم بهبود کیفیت بیمارستانی",
              link: "http://10.10.10.6//mosh//",
              cat: "1",
              visibility: "1",
            },
            {
              id: "16",
              name: "ثبت خطای بیمارستانی",
              link: "http://10.10.10.6//mosh//plugin//formerror//formerror.php",
              cat: "1",
              visibility: "1",
            },
            {
              id: "19",
              name: "وب سایت بیمارستان",
              link: "http://kih.lums.ac.ir//",
              cat: "1",
              visibility: "1",
            },
            {
              id: "29",
              name: "قرآن کریم",
              link: "http://10.10.10.6//mosh//plugin//flash//quran//1.html",
              cat: "1",
              visibility: "1",
            },
            {
              id: "30",
              name: "سامانه جابجایی",
              link: "http://10.10.10.6//mosh/plugin/transfer/login.php",
              cat: "1",
              visibility: "1",
            },
            {
              id: "35",
              name: "پشتیبانی IT",
              link: "http://10.10.10.6:10",
              cat: "1",
              visibility: "1",
            },
            {
              id: "28",
              name: "شبیه ساز آریتمی های قلبی",
              link: "http://10.10.10.6/mosh/plugin/flash/ECG/1.html",
              cat: "1",
              visibility: "1",
            },
          ],
        },
        {
          group: "وب سایت های ستادی",
          address: [
            {
              id: "2",
              name: "سامانه فیش",
              link: "http://fish.lums.ac.ir",
              cat: "2",
              visibility: "1",
            },
            {
              id: "8",
              name: "ستاد دانشگاه علوم ‍‍‍‍‍‍پزشکی استان لرستان",
              link: "http://lums.ac.ir",
              cat: "2",
              visibility: "1",
            },
            {
              id: "11",
              name: "سامانه بهره برداری اطلاعات",
              link: "http://saba.lums.ac.ir",
              cat: "2",
              visibility: "1",
            },
            {
              id: "21",
              name: "اتوماسیون اداری",
              link: "http://auto.lums.ac.ir/FarzinSoft/eOrgan/Login/LoginFrm.aspx?",
              cat: "2",
              visibility: "1",
            },
            {
              id: "24",
              name: "سبا",
              link: "http://saba.lums.ac.ir",
              cat: "2",
              visibility: "1",
            },
            {
              id: "26",
              name: "سامانه تدارکات الکترونیکی دولت",
              link: "http://setadiran.ir/setad/cms",
              cat: "2",
              visibility: "1",
            },
            {
              id: "44",
              name: "سامانه کش",
              link: "http://cash.lums.ac.ir//",
              cat: "2",
              visibility: "1",
            },
            {
              id: "27",
              name: "آذرخش",
              link: "http://sys.lums.ac.ir",
              cat: "2",
              visibility: "1",
            },
          ],
        },
        {
          group: "وب سایت های وزارتی",
          address: [
            {
              id: "43",
              name: "مشاوره شیردهی",
              link: "http://health.gov.ir/family",
              cat: "3",
              visibility: "1",
            },
            {
              id: "42",
              name: "سامانه آواب",
              link: "https://avab.behdasht.gov.ir/Avab/user/Login",
              cat: "3",
              visibility: "1",
            },
            {
              id: "38",
              name: "سامانه سیب",
              link: "http://sib.sbmu.ac.ir",
              cat: "3",
              visibility: "1",
            },
            {
              id: "36",
              name: "EQAP",
              link: "http://eqap.iacld.com",
              cat: "3",
              visibility: "1",
            },
            {
              id: "34",
              name: "وزارت بهداشت",
              link: "https://behdasht.gov.ir//",
              cat: "3",
              visibility: "1",
            },
            {
              id: "32",
              name: "سامانه HSE",
              link: "http://hse.health.gov.ir//",
              cat: "3",
              visibility: "1",
            },
            {
              id: "23",
              name: "سامانه مراقبت عفونت بیمارستانی",
              link: "http://inis.health.gov.ir//",
              cat: "3",
              visibility: "1",
            },
            {
              id: "20",
              name: "وب سایت نیازمندان",
              link: "http://medcare.health.gov.ir",
              cat: "3",
              visibility: "1",
            },
            {
              id: "17",
              name: "سامانه ی اعزام",
              link: "http://mcmc.sums.ac.ir/msgFormOrjhans.aspx",
              cat: "3",
              visibility: "1",
            },
            {
              id: "15",
              name: "نگهداشت",
              link: "http://cmms.behdasht.gov.ir/afpmobile/#/login",
              cat: "3",
              visibility: "1",
            },
            {
              id: "25",
              name: "دیابت",
              link: "http://medcare.health.gov.ir/diseases/ccb/Diabetes/Response/Diabet.aspx",
              cat: "3",
              visibility: "1",
            },
            {
              id: "12",
              name: "سامانه مادران و نوزادان",
              link: "http://www.iman.health.gov.ir//SitePages//%D8%AE%D8%A7%D9%86%D9%87.aspx",
              cat: "3",
              visibility: "1",
            },
            {
              id: "6",
              name: "قاصدک",
              link: "http://pbp.behdasht.gov.ir/",
              cat: "3",
              visibility: "1",
            },
          ],
        },

        {
          group: "وب سایت های بیمه ای",
          address: [
            {
              id: "3",
              name: "سامانه رسا",
              link: "https://rasatpa.ir",
              cat: "5",
              visibility: "1",
            },
            {
              id: "4",
              name: "تامین اجتماعی",
              link: "https://darman.tamin.ir/captchaCheck.aspx?pagename=",
              cat: "5",
              visibility: "1",
            },
            {
              id: "5",
              name: "سوابق بیمه شدگان تامین اجتماعی",
              link: "https://www.tamin.ir/News/Item/6506/2/6506.html",
              cat: "5",
              visibility: "1",
            },
            {
              id: "7",
              name: "سامانه رسیدگی الکترونیکی اسناد بستری\r\n",
              link: "https://iehr.ihio.gov.ir/sso/login",
              cat: "5",
              visibility: "1",
            },

            {
              id: "14",
              name: "ثبت خدمات دیالیز",
              link: "https://mdp.ihio.gov.ir/login",
              cat: "5",
              visibility: "1",
            },
            {
              id: "31",
              name: "نیروهای مسلح",
              link: "https://sakhad.esata.ir:9091/",
              cat: "5",
              visibility: "1",
            },
            {
              id: "33",
              name: "صدور دفترچه ایرانیان",
              link: "https://eserviews.ihio.go.ir/isc",
              cat: "5",
              visibility: "1",
            },
            {
              id: "39",
              name: "نیروهای مسلح",
              link: "https://esakhad.esata.ir:9094",
              cat: "5",
              visibility: "1",
            },
            {
              id: "40",
              name: "ثبت نسخ الکترونیک خدمات درمانی",
            link:"https://eservices.ihio.gov.ir/sso/?sourceApp=https://eservices.ihio.gov.ir/ihioerx/",
              cat: "5",
              visibility: "1",
            },
            {
              id: "41",
              name: "ثبت نسخ الکترونیک تامین اجتماعی",
              link: "https://ep.tamin.ir",
              cat: "5",
              visibility: "1",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.title{
  margin-top: 5%;
}
basebanner{
margin-top: 10%;
}
.p {
  margin: 0 auto;
  display: flex;
  font-size: 30px;
  font-weight: bold;
}
thead {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner{
  margin-top: 1%;
  margin-bottom: 1%;

}

.link:hover,
a:hover {
  cursor: pointer;
  background: rgb(19, 86, 185);
  color: hotpink;
}

a {
  color: rgb(19, 4, 4);
    

  text-decoration: none;
  text-decoration-style: dotted;
}
.container {
  
    max-width: 95%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  list-style: none;
  margin: 0 auto;
}
.group ul {
margin:0 auto;
  width: 100%;
  height: 200px;
max-width: 90%;
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.group li {
  margin: 0 auto;
}
.base{
  width: 25%;
  margin: 0 auto;
}
</style>
