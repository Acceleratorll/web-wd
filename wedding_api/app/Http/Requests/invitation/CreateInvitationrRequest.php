<?php

namespace App\Http\Requests\invitation;

use Illuminate\Foundation\Http\FormRequest;

class CreateInvitationrRequest extends FormRequest
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
            'template_id' => 'required|int|max:25',
            'date' => 'date|max:255',
            'time_start' => 'time|max:255',
            'time_end' => 'time|max:255'
        ];
    }
}
