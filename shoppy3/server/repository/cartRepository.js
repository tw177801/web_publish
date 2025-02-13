import {db} from './db.js';

/**
 * 장바구니 추가 
 */

export const addCart = async({id, cartList}) => {
    
    cartList.map(async(item)=> {
        // try {
            const values= [item.size, item.qty, id, item.pid];
            // console.log('values--> ', values);
            const sql = `
                insert into shoppy_cart(size, qty, id, pid, cdate)
                    values(?, ?, ?, ?, now())
            `;
            const [result] = await db.execute(sql, values);
            console.log(result.affectedRows);
            
        // } catch (error) {

        // }
    });

    return '';
}

