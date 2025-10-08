<?php

namespace Database\Seeders;

use App\Models\Seller;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class SellersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $sellersData = [
            [
                'firstname' => 'John',
                'lastname' => 'Doe',
                'mobile' => '0712345678',
                'password' => 'ADO@test123',
                'position' => 'Sales Manager',
                'village' => 'Colombo',
                'distric' => 'Colombo',
                'status' => 'active',
                'referd' => 'AHTK001'
            ],

        ];

        foreach ($sellersData as $sellerData) {
            $sellerData['password'] = Hash::make($sellerData['password']);
            Seller::updateOrCreate(
                ['mobile' => $sellerData['mobile']],
                $sellerData
            );
            // sellers::create($sellerData);
        }
    }
}
