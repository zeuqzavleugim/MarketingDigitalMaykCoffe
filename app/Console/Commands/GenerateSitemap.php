<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class GenerateSitemap extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:generate-sitemap';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        //
        Sitemap::create()
            ->add(Url::create('/'))
            ->add(Url::create('/contacto'))
            ->add(Url::create('/portafolio'))
            ->add(Url::create('/servicios-desarrollo-web-seo-mexico'))
            ->add(Url::create('/servicios/crear-landing-page-profesional'))
            ->add(Url::create('/servicios/creacion-de-sitios-web'))
            ->add(Url::create('/servicios/consultoria-seo-tecnica-estrategica'))
            ->add(Url::create('/servicios/seo-onpage-tecnica'))
            ->add(Url::create('/blogs'))
            ->add(Url::create('/Aviso-de-privacidad-Terminos-y-condiciones'))
            ->writeToFile(public_path('sitemap.xml'));

        $this->info('✅ Sitemap generado correctamente en public/sitemap.xml');
    }
}
