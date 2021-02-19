<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Travel Tool - Weekly Updates</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400" rel="stylesheet" /> <!-- https://fonts.google.com/ -->
    <link href="css/bootstrap.min.css" rel="stylesheet" /> <!-- https://getbootstrap.com/ -->
    <link href="fontawesome/css/all.min.css" rel="stylesheet" /> <!-- https://fontawesome.com/ -->
    <link href="css/templatemo-diagoona.css" rel="stylesheet" />
    <link rel="icon" href="https://img.icons8.com/ios-filled/50/000000/trave-diary.png">
<!--

TemplateMo 550 Diagoona

https://templatemo.com/tm-550-diagoona

-->
</head>

<body>
    <div class="tm-container">        
        <div>
            <div class="tm-row pt-4">
                <div class="tm-col-left">
                    <div class="tm-site-header media">
                        <i class="fas fa-umbrella-beach fa-3x mt-1 tm-logo"></i>
                        <div class="media-body">
                            <h1 class="tm-sitename text-uppercase">Travel Tool</h1>
                            <p class="tm-slogon">A Travel Planning Tool</p>
                        </div>        
                    </div>
                </div>
                <div class="tm-col-right">
                    <nav class="navbar navbar-expand-lg" id="tm-main-nav">
                        <button class="navbar-toggler toggler-example mr-0 ml-auto" type="button" 
                            data-toggle="collapse" data-target="#navbar-nav" 
                            aria-controls="navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span><i class="fas fa-bars"></i></span>
                        </button>
                        <div class="collapse navbar-collapse tm-nav" id="navbar-nav">
                            <ul class="navbar-nav text-uppercase">
                                <li class="nav-item">
                                    <a class="nav-link tm-nav-link" href="index.html">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link tm-nav-link" href="about.html">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link tm-nav-link" href="weeklyupdates.html">Weekly Updates</a>
                                </li>                            
                                <li class="nav-item">
                                    <a class="nav-link tm-nav-link" href="documentation.html">Documentation</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link tm-nav-link" href="team.html">Meet the Team</a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link tm-nav-link" href="tripplanner.html">Plan Your Trip <span class="sr-only">(current)</span></a>
                                </li>
                            </ul>                            
                        </div>                        
                    </nav>
                </div>
            </div>
            <div class="tm-row">
                <div class="tm-col-left"></div>
                <main class="tm-col-right">
                    <section class="tm-content tm-about">
                        <h2 class="mb-5 tm-content-title">Results</h2>
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
    


   echo file_get_contents($txtFile);
   ?>
                        <hr class="mb-5">
                   </section>
               </main>
           </div>
        </div>
        
        <div class="tm-row">
            <div class="tm-col-left text-center">            
                <ul class="tm-bg-controls-wrapper">
                    <li class="tm-bg-control active" data-id="0"></li>
                    <li class="tm-bg-control" data-id="1"></li>
                    <li class="tm-bg-control" data-id="2"></li>
                </ul>            
            </div>        
            <div class="tm-col-right tm-col-footer">
                <footer class="tm-site-footer text-right">
                   <h6>Travel Tool by Gregory Bittinger, Jacob Johnson, Rudolph Hanzes, Kaleb Piper and Robert Minerd</h6>
                </footer>
            </div>  
        </div>        

        <!-- Diagonal background design -->
        <div class="tm-bg">
            <div class="tm-bg-left"></div>
            <div class="tm-bg-right"></div>
        </div>
    </div>

    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.backstretch.min.js"></script>
    <script src="js/templatemo-script.js"></script>
</body>

</html>
