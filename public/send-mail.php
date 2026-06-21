<?php
// =====================================================================
//  Virtual Art Production — Réception des formulaires (Devis + Contact)
//  Envoie le message PAR E-MAIL avec les fichiers EN PIÈCES JOINTES.
//
//  >>> À CONFIGURER : remplacez les deux adresses ci-dessous si besoin.
//      - $TO    : l'adresse qui RECEVRA les demandes.
//      - $FROM  : DOIT être une adresse de VOTRE domaine (pour la délivrabilité).
//  Déposez ce fichier à la racine du site (il est déjà inclus dans /build).
// =====================================================================

$TO   = 'contact@virtualart-dz.com';
$FROM = 'no-reply@virtualart-dz.com';   // adresse de votre domaine
$SITE = 'Virtual Art Production';

$MAX_FILE  = 8  * 1024 * 1024;   // 8 Mo par fichier
$MAX_TOTAL = 20 * 1024 * 1024;   // 20 Mo au total
$ALLOWED   = ['pdf','doc','docx','xls','xlsx','ppt','pptx','txt',
              'jpg','jpeg','png','gif','webp','svg',
              'mp4','mov','avi','mkv','zip','rar','ai','psd'];

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['success' => false, 'error' => 'method_not_allowed']);
  exit;
}

// Empêche l'injection d'en-têtes via retours à la ligne.
function clean_header($s) {
  return trim(str_replace(["\r", "\n", "%0a", "%0d", "%0A", "%0D"], '', (string)$s));
}

// Honeypot anti-spam (au cas où) : si rempli, on simule un succès.
if (!empty($_POST['website']) || !empty($_POST['_gotcha'])) {
  echo json_encode(['success' => true]);
  exit;
}

$subject = clean_header($_POST['subject'] ?? 'Nouveau message — site web');
$message = (string)($_POST['message'] ?? '');
$reply   = clean_header($_POST['reply_to'] ?? '');
$to      = (isset($_POST['to_email']) && filter_var($_POST['to_email'], FILTER_VALIDATE_EMAIL))
           ? $_POST['to_email'] : $TO;

// ---- Collecte et validation des pièces jointes (champ files[]) ----
$attachments = [];
$total = 0;
if (!empty($_FILES['files']) && isset($_FILES['files']['name'])) {
  $f = $_FILES['files'];
  $names = (array)$f['name'];
  for ($i = 0; $i < count($names); $i++) {
    if (($f['error'][$i] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_OK) continue;
    $name = (string)$names[$i];
    $tmp  = $f['tmp_name'][$i];
    $size = (int)$f['size'][$i];
    $ext  = strtolower(pathinfo($name, PATHINFO_EXTENSION));
    if (!in_array($ext, $ALLOWED, true)) continue;
    if ($size <= 0 || $size > $MAX_FILE)  continue;
    if (!is_uploaded_file($tmp))          continue;
    $total += $size;
    if ($total > $MAX_TOTAL) break;
    $safe = preg_replace('/[\r\n"\\\\]/', '', basename($name));
    $attachments[] = ['name' => $safe, 'data' => file_get_contents($tmp)];
  }
}

// ---- Construction du message MIME (multipart/mixed) ----
$boundary = '=_' . md5(uniqid((string)time(), true));
$eol = "\r\n";

$headers  = "From: {$SITE} <{$FROM}>{$eol}";
if ($reply && filter_var($reply, FILTER_VALIDATE_EMAIL)) {
  $headers .= "Reply-To: {$reply}{$eol}";
}
$headers .= "MIME-Version: 1.0{$eol}";
$headers .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"";

$body  = "--{$boundary}{$eol}";
$body .= "Content-Type: text/plain; charset=UTF-8{$eol}";
$body .= "Content-Transfer-Encoding: 8bit{$eol}{$eol}";
$body .= $message . $eol . $eol;

foreach ($attachments as $a) {
  $body .= "--{$boundary}{$eol}";
  $body .= "Content-Type: application/octet-stream; name=\"{$a['name']}\"{$eol}";
  $body .= "Content-Transfer-Encoding: base64{$eol}";
  $body .= "Content-Disposition: attachment; filename=\"{$a['name']}\"{$eol}{$eol}";
  $body .= chunk_split(base64_encode($a['data'])) . $eol;
}
$body .= "--{$boundary}--";

$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
$ok = @mail($to, $encodedSubject, $body, $headers);

if ($ok) {
  echo json_encode(['success' => true, 'attachments' => count($attachments)]);
} else {
  http_response_code(500);
  echo json_encode(['success' => false, 'error' => 'send_failed']);
}
