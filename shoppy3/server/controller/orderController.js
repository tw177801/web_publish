import * as repository from '../repository/orderRepository.js';



/**
 * 
 */
export const add = async(req, res) => {
    console.log(req.body);
    const result = await repository.add(req.body);
    res.json(result);
    res.end();
    
}


/**
 * 전체 주문 정보 
 */

export const getOrderList = async (req, res) => {
    const result = await repository.getOrderList(req.body);
    res.json(result);
    res.end();

}