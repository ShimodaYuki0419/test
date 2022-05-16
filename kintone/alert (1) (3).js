(function () {
  "use strict";

  kintone.events.on("app.record.index.show", function (event) {
    // var tyumon = kintone.app.getFieldElements("注文書日付");
    // var limit = document.getElementsByClassName("recordlist-row-gaia");
    // var kari = document.getElementsByClassName("value-5802389");

    //本日の日時を取得
    // var toDay = new Date();

    // for (let i = 0; i < limit.length; i++) {
    //   var kariDay = kari[i].firstElementChild;
    //   //仮注文・着工日付の日付を取得
    //   var kariDayValue = kariDay.firstElementChild.textContent;
    //   //2か月後を計算
    //   var alert = moment(kariDayValue).add(2, "months").toDate();
    //   //3か月後を計算
    //   var alert2 = moment(kariDayValue).add(3, "months").toDate();
    //   //注文書日付の日付を取得
    //   var tyumonDay = tyumon[i].firstElementChild;
    //   var tyumonDayContent = tyumonDay.firstElementChild.textContent;
    //   if (alert2 < toDay && tyumonDayContent === "") {
    //     var limit = document.getElementsByClassName("recordlist-row-gaia");

    //     limit[i].style.background = "#FF4500";
    //     limit[i].style.color = '#fff'
    //   } else if (alert < toDay && tyumonDayContent === "") {
    //     var limit = document.getElementsByClassName("recordlist-row-gaia");

    //     limit[i].style.background = "yellow";
    //   }
    // }

    //header情報を取得
    var spanElement = document.getElementsByClassName(
      "recordlist-header-label-gaia"
    );
    var headerList = document.getElementsByClassName(
      "recordlist-header-cell-inner-wrapper-gaia"
    );

    for (let i = 0; i < headerList.length; i++) {
      //要素の基準を一覧画面のheader要素にする
      headerList[i].style.position = "relative";
      //headerの子要素に外枠を作成
      var child = document.createElement("div");
      //外枠の中に文字を入力するために作成
      var childContent = document.createElement("div");
      //外枠のクラスを指定
      child.classList.add("hidden");
      //文字のクラスを指定
      childContent.classList.add("childContent");
      //テキスト情報をheaderから取得
      childContent.innerText = spanElement[i].textContent;
      //テキストを外枠の子要素に指定
      child.appendChild(childContent);
      //外枠をheaderの子要素に指定
      headerList[i].appendChild(child);
      //作成した外枠のスタイルを指定
      child.style.position = "absolute";
      child.style.top = "-100%";
      // child.style.left = "30px";
      child.style.height = "50px";
      child.style.width = "200px";
      child.style.background = "white";
      child.style.zIndex = 999;
      child.style.border = "1px solid #333";
      child.style.textAlign = "center";
      //作成したテキストのスタイルを作成
      childContent.style.position = "absolute";
      childContent.style.top = "50%";
      childContent.style.left = "50%";
      childContent.style.transform = "translate(-50%,-50%)";

      //マウスが要素上に入った時に作成したdivにshowクラスを追加
      headerList[i].addEventListener(
        "mouseover",
        function (event1) {
          var child = document.querySelectorAll(".hidden");
          child[i].classList.add("show");
          return event1;
        },
        false
      );

      //マウスが要素上から離れた時に作成したdivのshowクラスを削除
      headerList[i].addEventListener(
        "mouseleave",
        function (event2) {
          var child = document.querySelectorAll(".hidden");
          child[i].classList.remove("show");
          return event2;
        },
        false
      );
    }

    return event;
  });
})();
