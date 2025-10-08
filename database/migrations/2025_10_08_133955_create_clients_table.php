<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('seller_id'); 
            $table->string('firstname');
            $table->string('shopname');
            $table->string('mobile')->unique();
            $table->string('latitude')->nullable()->unique();
            $table->string('longitude')->nullable()->unique();
            $table->string('address')->nullable();
            $table->string('village')->nullable();
            $table->string('district')->nullable();
            $table->string('buying_status')->nullable()->default('pending');
            $table->string('payment_status')->default('pending');
            $table->string('payment_date')->nullable()->useCurrent();
            $table->string('payment_amount')->nullable();   
            $table->string('note')->nullable();
            $table->string('status')->default('active');
            $table->timestamps();


            $table->foreign('seller_id')->references('id')->on('sellers')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clients');
    }
};
