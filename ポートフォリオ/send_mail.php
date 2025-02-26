<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"], ENT_QUOTES, 'UTF-8');
    $email = htmlspecialchars($_POST["email"], ENT_QUOTES, 'UTF-8');
    $message = htmlspecialchars($_POST["message"], ENT_QUOTES, 'UTF-8');

    // 送信先メールアドレス
    $to = "your-email@example.com";  // ここに受信するメールアドレスを入れる

    // 件名
    $subject = "【お問い合わせ】" . $name . "様より";

    // メール本文
    $body = "お名前: " . $name . "\n";
    $body .= "メールアドレス: " . $email . "\n\n";
    $body .= "【メッセージ】\n" . $message;

    // メールヘッダー
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";

    // メール送信
    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('お問い合わせが送信されました！'); window.location.href='contact.html';</script>";
    } else {
        echo "<script>alert('送信に失敗しました。もう一度お試しください。'); window.location.href='contact.html';</script>";
    }
} else {
    echo "直接アクセスはできません。";
}
?>
