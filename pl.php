<?php

//AIzaSyCdKzuOzJ3Tji5wi8UNQM1383feFoezgvw

$id = $_GET['id'];
//$id = 'PL-L0t4skOkWFCeHUG52U9FOkZ4zWOGaSp';




$data = @file_get_contents('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId='.$id.'&key=AIzaSyCdKzuOzJ3Tji5wi8UNQM1383feFoezgvw');

$output = array();



$data = json_decode($data);


if (!empty($data->items)) {


    $output['items'] = array();


    foreach ($data->items as $item) {

        $output['items'][] = array(
            'src' =>'https://www.youtube.com/watch?v=' . $item->snippet->resourceId->videoId,
            'title' => $item->snippet->title,
            'thumbnail' => $item->snippet->thumbnails->default

        );


    }

    $data = @file_get_contents('https://www.googleapis.com/youtube/v3/playlists?part=snippet&id='.$id.'&key=AIzaSyCdKzuOzJ3Tji5wi8UNQM1383feFoezgvw');

    $data = json_decode($data);

    $output['title'] = $data->items[0]->snippet->title;


    //print '<pre>';var_dump();die();


}

header('Content-Type: application/json');
echo json_encode($output);