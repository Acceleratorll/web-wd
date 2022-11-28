<?php

namespace App\Http\Requests\Groom;

use Illuminate\Foundation\Http\FormRequest;

class CreateGroomRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name_groom' => 'required|string|max:255',
            'father_groom' => 'string|max:255',
            'mother_groom' => 'string|max:255',
        ];
    }
}
