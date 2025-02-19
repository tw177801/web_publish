import * as repository from '../repository/orderRepository.js';

/**
 * 전체 주문 정보 
 */

export const getOrderList = async (req, res) => {
    const result = await repository.getOrderList(req.body);
    res.json(result);
    res.end();

}