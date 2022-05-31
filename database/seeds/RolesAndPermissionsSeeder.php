<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        app()['cache']->forget('spatie.permission.cache');

        Role::create(['name'=>'Siswa']);
        Role::create(['name'=>'Pengajar']);
        Role::create(['name'=>'Supervisor']);
        Role::create(['name'=>'Admin']);
        Role::create(['name'=>'Wali Siswa']);

        DB::table('model_has_roles')->insert(
            [
                [
                    'role_id' => '4',
                    'model_type' => 'App\User',
                    'model_id' => '1'
                ],
                [
                    'role_id' => '3',
                    'model_type' => 'App\User',
                    'model_id' => '2'
                ],
                [
                    'role_id' => '2',
                    'model_type' => 'App\User',
                    'model_id' => '3'
                ],
                [
                    'role_id' => '1',
                    'model_type' => 'App\User',
                    'model_id' => '5'
                ],
                [
                    'role_id' => '5',
                    'model_type' => 'App\User',
                    'model_id' => '5'
                ]
            ]
        );
    }
}
