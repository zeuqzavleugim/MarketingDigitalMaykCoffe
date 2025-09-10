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

Route::post('/contact', [ContactoController::class, 'store'])->name('contact.store');


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
