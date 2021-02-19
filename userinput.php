<html>
<head><title>Travel Tool Test Page</title>
</head>

 <body>


<?php


	$txtFile = "inputdata.txt";
	$isFile = is_file($txtFile);

  $file = fopen ($txtFile, "a+");
  if (fseek($file, 0, SEEK_END)!=-1){
//    if (!$isFile){
//    	fputs($file, "Name\tProjectName\tMotivation\tFunctionalities\tImplementation\tPotentialUsers\tSupplementary\n");
//    }


    fputs($file, $_POST["origin"]);
    fputs($file, "\t");

    fputs($file, $_POST["destination"]);
    fputs($file, "\t");

    /*$originalmotivation = $_POST["motivation"];
    $newmotivation = str_replace("\r\n", "\&", $originalmotivation);
    fputs($file, "$newmotivation\t");


    $originalfunctionalities = $_POST["functionalities"];
    $newfunctionalities = str_replace("\r\n", "\&", $originalfunctionalities);
    fputs($file, "$newfunctionalities\t");


    $originalimplement = $_POST["implement"];
    $newimplement = str_replace("\r\n", "\&", $originalimplement);
    fputs($file, "$newimplement\t");


    $originalpotentialusers = $_POST["potentialusers"];
    $newpotentialusers = str_replace("\r\n", "\&", $originalpotentialusers);
    fputs($file, "$newpotentialusers\t");


    $originalsupplementary = $_POST["supplementary"];
    $newsupplementary = str_replace("\r\n", "\&", $originalsupplementary);
    fputs($file, "$newsupplementary\n");*/

  }
  if ($file)
	fclose($file);
    


   echo("<h2>Thank you!</h2> <h3>You have successfully entered your origin and destination. <br >
   </h3>");
   ?>

  </body>
</html>
