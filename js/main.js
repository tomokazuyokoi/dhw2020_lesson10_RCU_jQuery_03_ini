$(function(){
    /**
     * ハンバーガーメニュー
     */
    var openImage = 'img/sp/open.svg';
    var closeImage = 'img/sp/close.svg';

    $('#menuButton').on('click', function(){
        $('#menuButton').toggleClass('active');
        $('#nav').toggleClass('active');
    });

    /**
     * スライドショー
     */
    $('#slideContents').slick({
        // 自動再生
        autoplay: true,
        // 再生スピード
        autoplaySpeed: 2000, // ミリ秒
        // ページ遷移のスピード
        speed: 500,
        // ページ送りの表示
        dots: true,
        // マウスホバー時にスライドを止めない
        pauseOnHover: false,
        // ドット選択時にスライドを止めない
        pauseOnFocus: false,
        // フェード
        fade: true,
    });
});