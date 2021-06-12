//*----------------------------*
//*  TOPページのヘッダー変化 (スクロール)
//*----------------------------*

// $(function() {
//   let header = $(".header");
//   let headerLogoImg = $(".header__logo a img");
//   let headerLogoSpan = $(".header__logo a span");
//   let headerNav = $(".header__nav a");
//   let hamburgerLine = $(".hamburger__line");

//   $(window).scroll(function() {
//     // 80px以上スクロールした時
//     if($(window).scrollTop() > 80 ) { 

//       header.addClass("scroll-bg");                     /* ヘッダー背景色、白へ */
//       headerLogoImg.attr("src", "images/logo02.svg");   /* ロゴ画像黒へ */
//       headerLogoSpan.css("color", "#000");              /* ロゴテキスト黒へ */
//       headerNav.css("color", "#000");                   /* ナビメニュー黒へ */
//       hamburgerLine.css("background-color", "#000");    /* ハンバーガー真ん中の棒、黒へ */

//     } else { /* 80px以上スクロールしてない時 */
//       header.removeClass("scroll-bg");                    /* 背景色、透明へ戻す */
//       headerLogoImg.attr("src", "images/logo01.svg");     /* ロゴ画像白へ戻す */
//       headerLogoSpan.css("color", "#fff");                /* ロゴテキスト白へ */
//       headerNav.css("color", "#fff");                     /* ナビメニュー白へ */
//       hamburgerLine.css("background-color", "#fff");      /* ハンバーガー真ん中の棒、白へ */
//     }
//   });

  //*----------------------------*
  //*  ハンバーガーメニュー(トップページ)
  //*----------------------------*

//   //#js-hamburgerをクリックすると
//   $('#js-hamburger').on('click',function(){

//     // TOPからスクロールされた長さを取得した数値
//     var position = $(window).scrollTop();

//     //#js-hamburgerにcloseクラスを付与(ボタンのアニメーション)
//     $('#js-hamburger').toggleClass('close');

//     //#js-hamburgerにcloseクラスを付与されているか確認(false or tlue)
//     var isHamburger = $('#js-hamburger').hasClass('close');

//     // TOPからスクロールされた長さを取得した数値が80以内
//     // かつ、#js-hamburgerにcloseクラスを付与されていたら
//     if(position <= 80 && isHamburger) {
//       header.addClass("scroll-bg");                     /* ヘッダー背景色、白へ */
//       headerLogoImg.attr("src", "images/logo02.svg");   /* ロゴ画像黒へ */
//       headerLogoSpan.css("color", "#000");              /* ロゴテキスト黒へ */
//       headerNav.css("color", "#000");                   /* ナビメニュー黒へ */
//       hamburgerLine.css("background-color", "#000");    /* ハンバーガー真ん中の棒、黒へ */
    
//     // TOPからスクロールされた長さを取得した数値が80以内
//     // かつ、#js-hamburgerにcloseクラスを付与されていなければ
//     } else if (position <= 80 && !isHamburger) {
//       header.removeClass("scroll-bg");                    /* 背景色、透明へ戻す */
//       headerLogoImg.attr("src", "images/logo01.svg");     /* ロゴ画像白へ戻す */
//       headerLogoSpan.css("color", "#fff");                /* ロゴテキスト白へ */
//       headerNav.css("color", "#fff");                     /* ナビメニュー白へ */
//       hamburgerLine.css("background-color", "#fff");      /* ハンバーガー真ん中の棒、白へ */
//     }

//     //.nav-wrapperが0.5秒でフェードイン(メニューのフェードイン)
//     $('.header__nav-wrapper').fadeToggle(500);

//     //bodyにnoscrollクラスを付与(スクロールを固定)
//     $('body').toggleClass('noscroll');  
//   });
// });


//*----------------------------*
//*  スライダー（フェード＆ズームイン）
//*----------------------------*

// スライダー
// const slide = $(".slider");
// slide.slick({
//   autoplay: true,        // 自動再生
//   autoplaySpeed: 3000,   // 自動スライド切り替え速度
//   fade: true,            // fedeオン
//   speed: 2000,           // 画像切り替えにかかる時間（ミリ秒）
//   cssEase: "linear",     // 開始から終了まで一定に変化する
//   arrows: false,         // 矢印表示・非表示
//   slidesToShow: 1,       // スライド表示数
//   slidesToScroll: 1,     // スライドする数
//   infinite: true         // 無限リピート オン・オフ
// })
// .on({     // ズームイン
//   beforeChange: function(event, slick, currentSlide, nextSlide) {
//     $(".slick-slide", this).eq(currentSlide).addClass("preve-slide");
//     $(".slick-slide", this).eq(nextSlide).addClass("slide-animation");
//   },
//   afterChange: function() {
//     $(".preve-slide", this).removeClass("preve-slide slide-animation");
//   }
// });
// slide.find(".slick-slide").eq(0).addClass("slide-animation");


//*----------------------------*
//*  ハンバーガーメニュー２(下層ページ)
//*----------------------------*

//#js-hamburgerをクリックすると
// $('#js-hamburger-2').on('click',function(){

//   //#js-hamburgerにcloseクラスを付与(ボタンのアニメーション)
//   $('#js-hamburger-2').toggleClass('close');

//   //.nav-wrapperが0.5秒でフェードイン(メニューのフェードイン)
//   $('.header-2__nav-wrapper').fadeToggle(500);

//   //bodyにnoscrollクラスを付与(スクロールを固定)
//   $('body').toggleClass('noscroll');  
// });

// //*------------------*
// //*  予約モーダル
// //*------------------*
// $(function () {
//   $('#openModal').click(function(){
//     $('#modalArea').fadeIn();
//     //bodyにnoscrollクラスを付与(スクロールを固定)
//     $('body').toggleClass('noscroll');  
//     return false;
//   });
//   $('#closeModal , #modalBg').click(function(){
//     $(".alert").hide();
//     $('#modalArea').fadeOut();
//     $('.modal__form-inner label').css('margin-bottom','10px');
//     // bodyにnoscrollクラスを付与(スクロールを固定)
//     $('body').toggleClass('noscroll');
//     return false;
//   });
  
// });

//*---------------------*
//*  フォーム
//*---------------------*

// $(function () {

//   // 全てのアラートを消す
//   $(".alert").hide();

//   // #submitBtnをクリックした時
//   $("#submitBtn").click(function() {
//     // 変数sendFlagにtureを代入
//     let sendFlag = true;

//     // もし、#nameのvalue属性の値を取得して何もなかったら、
//     if(!$("#name").val()) {

//       // #nameSectionのalretを表示する
//       $("#nameSection .alert").show();
//       // 変数sendFlagにfalseを再代入
//       sendFlag = false;
//       $('.modal__form-name label').css('margin-bottom','3px');

//       // #nameのvalue属性の値を取得して何かあったら、
//     } else {
//       // #nameSectionのalertを非表示にする
//       $("#nameSection .alert").hide();
//       $('.modal__form-name label').css('margin-bottom','10px');
//     }

//     // メールアドレス
//     if(!$("#mail").val()) {
//       $("#mailSection .alert").show();
//       sendFlag = false;
//       $('.modal__form-mail label').css('margin-bottom','3px');

//     } else {
//       $("#mailSection .alert").hide();
//       $('.modal__form-mail label').css('margin-bottom','10px');
//     }

//     // 宿泊プラン選択（セレクトボックス）
//     if(!$("select").val()) {
//       $("#planSection .alert").show();
//       sendFlag = false;
//       $('.modal__form-plan label').css('margin-bottom','3px');
//     } else {
//       $("#planSection .alert").hide();
//       $('.modal__form-plan label').css('margin-bottom','10px');
//     }

//     // 日程選択
//     if(!$("#modalCalendar").val()) {
//       $("#timeSection .alert").show();
//       sendFlag = false;
//       $('.modal__form-time label').css('margin-bottom','3px');
//     } else {
//       $("#timeSection .alert").hide();
//       $('.modal__form-time label').css('margin-bottom','10px');
//     }

//     // 変数sendFlagがfalseなら送信できない
//     if(sendFlag == false) {
//       return false;
//     }
//   });
// });

//*---------------------*
//*  「お知らせ」のタブ
//*---------------------*
// $(function() {
//   // タブ２を隠す
//   $('#tab2').hide();

//   // タブリストのaをクリックしたら
//   $('.news__list a').click(function() {

//     // タブ全部隠す
//     $('.js-tab').hide();

//     // クリックしたaのhrefの値を取得（id）、それを表示する
//     $($(this).attr("href")).show(); 
//     return false;
//   });
// });