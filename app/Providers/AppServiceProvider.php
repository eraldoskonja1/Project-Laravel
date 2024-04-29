<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Route;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Set the default route for unauthenticated users to the login route
        Route::middleware('web')
            ->group(function () {
                Route::get('/', function () {
                    return redirect()->route('login');
                });
            });
    }
}
