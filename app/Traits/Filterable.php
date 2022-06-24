<?php

namespace App\Traits;

use Illuminate\Support\Str;

trait Filterable {
    /**
     * add filtering.
     *
     * @param  $builder: query builder.
     * @param  $filters: array of filters.
     * @return query builder.
     */

    public function scopeFilter($query, $request)
    {
        $param = $request->all();
        //lap qua param, dua theo field goi ham tuong ung
        foreach ($param as $field =>$value){
            $method = 'filter' . Str::studly($field);
        if ($value !=''){
            if (method_exists($this, $method)){
                $this->{$method}($query, $value);
            } else {
                if(!empty($this->filterable) && is_array($this->filterable) ){ //check
                    if(in_array($field, $this->filterable)){
                        $query->where($this->table. '.'.$field, $value);
                    } elseif (key_exists($field, $this->filterable)){
                        $query->where($this->table. '.'. $this->filterable[$field], $value);
                    }
                }
            }
        }

        }
        return $query;
    }
}
