<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class BasicTemplateController extends AbstractController
{
    #[Route('/basic_template/{id}', name: 'app_basic_template')]
    public function index($id): Response
    {
        return $this->render('basic_template_'.$id.'.html.twig');
    }
}
