<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use App\Repositories\Order\OrderRepository;
use Illuminate\Http\Request;


class OrderController extends Controller
{
    protected $orderRepository;
    public function __construct(OrderRepository $orderRepository)
    {
<<<<<<< HEAD
        $this->orderRepository = $orderRepository;
    }
    public function store(Request $request)
    {
        return $this->orderRepository->store($request);
    }
=======
        $this->orderRepository= $orderRepository;
    }
    public function store(Request $request){
        return $this->orderRepository->store($request);
    }

>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
}
