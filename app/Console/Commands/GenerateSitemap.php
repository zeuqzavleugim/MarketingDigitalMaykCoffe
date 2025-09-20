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
            ->add(Url::create('/blogs/SEO-el-activo-invisible-que-genera-ventas-a-largo-plazo'))
            ->add(Url::create('/blogs/razones-para-contratar-una-agencia-de-marketing-digital'))
            ->add(Url::create('/blogs/marketing-digital-organico'))
            ->add(Url::create('/blogs/marketing-digital-B2B-en-2025'))
            ->add(Url::create('/blogs/Marketing-digital-para-PyMES-en-2025'))
            ->add(Url::create('/blogs/Instagram-para-empresas-en-2025'))
            ->add(Url::create('/blogs/Diferencias-entre-una-Agencia-de-Marketing-y-una-Agencia-de-Publicidad'))
            ->add(Url::create('/blogs/Que-es-el-eCommerce-y-por-que-es-clave-para-los-negocios-en-2025'))
            ->add(Url::create('/blogs/Paginas-Web-No-Seguras-Que-Son-y-Como-Protegerte-en-2025'))
            ->add(Url::create('/blogs/Paginas-web-ventajas-y-desventajas-en-2025'))
            ->add(Url::create('/blogs/Tipos-de-paginas-web-guia-completa-2025'))
            ->add(Url::create('/blogs/Publicidad-para-negocios-conoce-los-tipos-que-existen-en-2025'))
            ->add(Url::create('/blogs/Diseno-de-paginas-web-de-que-se-trata-y-cuales-son-sus-elementos-esenciales'))
            ->add(Url::create('/blogs/Cuanto-cuesta-anunciarse-en-Google-Ads-en-2025'))
            ->add(Url::create('/blogs/Que-hacen-realmente-los-desarrolladores-de-paginas-web-en-2025'))
            ->add(Url::create('/blogs/Que-importancia-tiene-Google-en-el-Marketing-Digital-en-2025'))
            ->writeToFile(public_path('sitemap.xml'));

        $this->info('✅ Sitemap generado correctamente en public/sitemap.xml');
    }
}
