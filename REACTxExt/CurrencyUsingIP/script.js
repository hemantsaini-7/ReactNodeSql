const curr1 = document.querySelector(".curr1");
const curr2 = document.querySelector(".curr2");
const curr3 = document.querySelector(".curr3");
const amount1 = document.querySelector(".amount1");
const amount2 = document.querySelector(".amount2");
const amount3 = document.querySelector(".amount3");

$.get(
  "https://ipinfo.io",
  function (response) {
    $("#IP").html("IP:<b>" + response.ip + "<b>");
    $("#Country").html("Country:<b>" + response.country + "<b>");
    const IP = response.ip;
    const Country = response.country;

    if (Country == "IN") {
      curr1.innerHTML = "&nbsp; ₹";
      curr2.innerHTML = "&nbsp; ₹";
      curr3.innerHTML = "&nbsp; ₹";

      amount1.innerText = "3000";
      amount2.innerText = "5000";
      amount3.innerText = "7000";

      curr1.style.display = "flex";
      curr2.style.display = "flex";
      curr3.style.display = "flex";

      amount1.style.display = "flex";
      amount2.style.display = "flex";
      amount3.style.display = "flex";
    } else if (
      Country == "US" || //USA
      Country == "CA" || //CANADA
      Country == "AU" || //AUSTRAILIA
      Country == "NZ" || //NEWZ
      Country == "MX" || //MEXICO
      Country == "CL" || //CHILE
      Country == "BR" || //BRAZIL
      Country == "HK" || //HONGKONG
      Country == "SG" //SINGAPORE
    ) {
      curr1.innerHTML = "&nbsp; $";
      curr2.innerHTML = "&nbsp; $";
      curr3.innerHTML = "&nbsp; $";

      amount1.innerText = "40";
      amount2.innerText = "68";
      amount3.innerText = "95";

      curr1.style.display = "flex";
      curr2.style.display = "flex";
      curr3.style.display = "flex";

      amount1.style.display = "flex";
      amount2.style.display = "flex";
      amount3.style.display = "flex";
    } else if (Country == "GB") {
      //GREATB
      curr1.innerHTML = "&nbsp; £";
      curr2.innerHTML = "&nbsp; £";
      curr3.innerHTML = "&nbsp; £";
      curr1.style.display = "flex";
      curr2.style.display = "flex";
      curr3.style.display = "flex";
      amount1.innerText = "31";
      amount2.innerText = "53";
      amount3.innerText = "74";
      amount1.style.display = "flex";
      amount2.style.display = "flex";
      amount3.style.display = "flex";
    } else if (Country == "EU" || Country == "DE") {
      //EURO & GERMANY
      curr1.innerHTML = "&nbsp; €";
      curr2.innerHTML = "&nbsp; €";
      curr3.innerHTML = "&nbsp; €";
      curr1.style.display = "flex";
      curr2.style.display = "flex";
      curr3.style.display = "flex";

      amount1.innerText = "35";
      amount2.innerText = "57";
      amount3.innerText = "80";
      amount1.style.display = "flex";
      amount2.style.display = "flex";
      amount3.style.display = "flex";
    } else if (Country == "JP" || Country == "CN") {
      //JAPAN AND CHINA
      curr1.innerHTML = "&nbsp; ¥";
      curr2.innerHTML = "&nbsp; ¥";
      curr3.innerHTML = "&nbsp; ¥";
      curr1.style.display = "flex";
      curr2.style.display = "flex";
      curr3.style.display = "flex";

      amount1.innerText = "4200";
      amount2.innerText = "7100";
      amount3.innerText = "9940";
      amount1.style.display = "flex";
      amount2.style.display = "flex";
      amount3.style.display = "flex";
    } else if (Country == "RU") {
      //RUSSIA
      curr1.innerHTML = "&nbsp; ₽";
      curr2.innerHTML = "&nbsp; ₽";
      curr3.innerHTML = "&nbsp; ₽";
      curr1.style.display = "flex";
      curr2.style.display = "flex";
      curr3.style.display = "flex";

      amount1.innerText = "3100";
      amount2.innerText = "5100";
      amount3.innerText = "7200";
      amount1.style.display = "flex";
      amount2.style.display = "flex";
      amount3.style.display = "flex";
    } else if (Country == "ZA") {
      //S.AFRICA
      curr1.innerHTML = "&nbsp; R";
      curr2.innerHTML = "&nbsp; R";
      curr3.innerHTML = "&nbsp; R";
      curr1.style.display = "flex";
      curr2.style.display = "flex";
      curr3.style.display = "flex";

      amount1.innerText = "685";
      amount2.innerText = "1140";
      amount3.innerText = "1600";
      amount1.style.display = "flex";
      amount2.style.display = "flex";
      amount3.style.display = "flex";
    } else if (Country == "BD") {
      //BANGLADESH
      curr1.innerHTML = "&nbsp; ৳";
      curr2.innerHTML = "&nbsp; ৳";
      curr3.innerHTML = "&nbsp; ৳";
      curr1.style.display = "flex";
      curr2.style.display = "flex";
      curr3.style.display = "flex";

      amount1.innerText = "3465";
      amount2.innerText = "5770";
      amount3.innerText = "8080";
      amount1.style.display = "flex";
      amount2.style.display = "flex";
      amount3.style.display = "flex";
    } else if (Country == "PK" || Country == "LK") {
      //PK AND SL
      curr1.innerHTML = "&nbsp; Rs";
      curr2.innerHTML = "&nbsp; Rs";
      curr3.innerHTML = "&nbsp; Rs";
      curr1.style.display = "flex";
      curr2.style.display = "flex";
      curr3.style.display = "flex";

      amount1.innerText = "6790";
      amount2.innerText = "11310";
      amount3.innerText = "15840";
      amount1.style.display = "flex";
      amount2.style.display = "flex";
      amount3.style.display = "flex";
    } else if (Country == "KR") {
      //S.KOREA
      curr1.innerHTML = "&nbsp; ₩";
      curr2.innerHTML = "&nbsp; ₩";
      curr3.innerHTML = "&nbsp; ₩";
      curr1.style.display = "flex";
      curr2.style.display = "flex";
      curr3.style.display = "flex";

      amount1.innerText = "47500";
      amount2.innerText = "79170";
      amount3.innerText = "110830";
      amount1.style.display = "flex";
      amount2.style.display = "flex";
      amount3.style.display = "flex";
    } else {
      console.log("Not Accessible");
    }
  },
  "json"
);
