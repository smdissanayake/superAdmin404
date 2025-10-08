<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::redirect('/', '/login');


Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/employees', function () {
        return Inertia::render('Employees');
    })->name('employees');

    Route::get('/add-employee', function () {
        return Inertia::render('AddEmployee');
    })->name('employees.create');

    Route::get('/reports', function () {
        return Inertia::render('Reports');
    })->name('reports');

    Route::get('/documents', function () {
        return Inertia::render('Documents');
    })->name('documents');

    Route::get('/settings', function () {
        return Inertia::render('Settings');
    })->name('settings');
});

require __DIR__.'/auth.php';

