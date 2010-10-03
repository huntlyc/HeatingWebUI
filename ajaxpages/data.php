<?php
//
// A very simple example that gets a HTTP page.
//rwar
//

$ch = curl_init();

curl_setopt ($ch, CURLOPT_URL, "http://172.16.11.220/get.html");
curl_setopt ($ch, CURLOPT_HEADER, 0);

curl_exec ($ch);
curl_close ($ch);
?>

