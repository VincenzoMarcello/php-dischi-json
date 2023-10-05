<?php

//# IMPORTO IL FILE JSON QUI
$json_discs = file_get_contents("./dischi_json.json");

//# FACCIO IL DECODE E TRASFORMO IL FILE JSON IN UN ARRAY
$discs = json_decode($json_discs);

//# DICO AL BROWSER CHE STO PER INVIARE UN'APPLICAZIONE JSON
header("Content-Type: application/json");

//# FACCIO L'ECHO E STAMPO A SCHERMO
echo json_encode($discs);