<?php

//AIzaSyCdKzuOzJ3Tji5wi8UNQM1383feFoezgvw

$id = $_GET['id'];
//$id = 'PL-L0t4skOkWFCeHUG52U9FOkZ4zWOGaSp';




$data = @file_get_contents('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId='.$id.'&key=AIzaSyCdKzuOzJ3Tji5wi8UNQM1383feFoezgvw');

$output = array();



$data = json_decode($data);

//print '<pre>';var_dump($data);die();

if (!empty($data->items)) {




    foreach ($data->items as $item) {

        $output[] = array(
            'src' =>'https://www.youtube.com/watch?v=' . $item->snippet->resourceId->videoId,
            'title' => $item->snippet->title,
            'thumbnail' => $item->snippet->thumbnails->default

        );


    }


}

header('Content-Type: application/json');
echo json_encode($output);