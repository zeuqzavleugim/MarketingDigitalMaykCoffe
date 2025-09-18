<?php

use App\Http\Controllers\ContactoController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () { return Inertia::render('home'); })->name('home');

Route::get('/portafolio', function () { return Inertia::render('portafolio'); })->name('portafolio');

Route::get('/servicios-desarrollo-web-seo-mexico', function () {
    return Inertia::render('servicios'); })->name('servicios');

Route::get('/contacto', function () {
    return Inertia::render('contacto'); })->name('contacto');

Route::get('/servicios/crear-landing-page-profesional', function () {
    return Inertia::render('services/landingPage'); })->name('landingPage');

Route::get('/servicios/creacion-de-sitios-web', function () {
    return Inertia::render('services/creacionSitiosWeb'); })->name('creacionDeSitiosWeb');

Route::get('/servicios/consultoria-seo-tecnica-estrategica', function () {
    return Inertia::render('services/consultoriaSEO'); })->name('consultoriaSEO');

Route::get('/servicios/seo-onpage-tecnica', function () {
    return Inertia::render('services/OptimizacionSEO'); })->name('optimizacionSEO');

Route::get('/blogs', function () {
    return Inertia::render('blogs'); })->name('blogs');

Route::get('/Aviso-de-privacidad-Terminos-y-condiciones', function () {
    return Inertia::render('politicasDePrivacidad'); })->name('politicas');

Route::get('/estamos-trabajando-para-ti', function () {
    return Inertia::render('construccion'); })->name('construccion');

// Blogs
Route::get('/blogs/SEO-el-activo-invisible-que-genera-ventas-a-largo-plazo', function () {
    return Inertia::render('blogs/SEOActivoInvisible'); })->name('SEOActivoInvisible');
Route::get('/blogs/razones-para-contratar-una-agencia-de-marketing-digital', function () {
    return Inertia::render('blogs/RazonesContratarAgencia'); })->name('RazonesContratarAgencia');
Route::get('/blogs/marketing-digital-organico', function () {
    return Inertia::render('blogs/MarketingDigitalOrganico'); })->name('MarketingDigitalOrganico');
Route::get('/blogs/marketing-digital-B2B-en-2025', function () {
    return Inertia::render('blogs/MarketingDigitalB2B'); })->name('MarketingDigitalB2B');
Route::get('/blogs/Marketing-digital-para-PyMES-en-2025', function () {
    return Inertia::render('blogs/MaketingDigitalPymes'); })->name('MaketingDigitalPymes');
Route::get('/blogs/Instagram-para-empresas-en-2025', function () {
    return Inertia::render('blogs/InstagramEmpresas'); })->name('InstagramEmpresas');
Route::get('/blogs/Diferencias-entre-una-Agencia-de-Marketing-y-una-Agencia-de-Publicidad', function () {
    return Inertia::render('blogs/MarketingVSPublicidad'); })->name('MarketingVSPublicidad');
Route::get('/blogs/Que-es-el-eCommerce-y-por-que-es-clave-para-los-negocios-en-2025', function () {
    return Inertia::render('blogs/QueEsEcommerce'); })->name('QueEsEcommerce');
Route::get('/blogs/Paginas-Web-No-Seguras-Que-Son-y-Como-Protegerte-en-2025', function () {
    return Inertia::render('blogs/PaginasNoSeguras'); })->name('PaginasNoSeguras');
Route::get('/blogs/Paginas-web-ventajas-y-desventajas-en-2025', function () {
    return Inertia::render('blogs/PaginasVentajasDesventajas'); })->name('PaginasVentajasDesventajas');
Route::get('/blogs/Tipos-de-paginas-web-guia-completa-2025', function () {
    return Inertia::render('blogs/TiposDePaginas'); })->name('TiposDePaginas');
Route::get('/blogs/Publicidad-para-negocios-conoce-los-tipos-que-existen-en-2025', function () {
    return Inertia::render('blogs/PublicidadNegocios'); })->name('PublicidadNegocios');
Route::get('/blogs/Diseno-de-paginas-web-de-que-se-trata-y-cuales-son-sus-elementos-esenciales', function () {
    return Inertia::render('blogs/DisenoPaginasWeb'); })->name('DisenoPaginasWeb');
Route::get('/blogs/Cuanto-cuesta-anunciarse-en-Google-Ads-en-2025', function () {
    return Inertia::render('blogs/AnunciarseenGoogle'); })->name('AnunciarseenGoogle');
Route::get('/blogs/Que-hacen-realmente-los-desarrolladores-de-paginas-web-en-2025', function () {
    return Inertia::render('blogs/DesarrolladoresDePginas'); })->name('DesarrolladoresDePginas');


Route::post('/contact', [ContactoController::class, 'store'])->name('contact.store');


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
