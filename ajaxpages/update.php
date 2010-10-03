<?php
  
$id = $_GET['id'];
$val = $_GET['val'];
  
$qry_str = "?id={$id}&val={$val}";
$ch = curl_init();

// Set query data here with the URL
curl_setopt($ch, CURLOPT_URL, 'http://172.16.11.220/set.html' . $qry_str); 

curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_TIMEOUT, '60');
$content = trim(curl_exec($ch));
curl_close($ch);
?>
