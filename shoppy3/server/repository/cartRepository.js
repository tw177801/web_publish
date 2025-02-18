import {db} from './db.js';


/**
 * 장바구니 상품 수량 업데이트
 */
export const updateQty = async({cid, type}) => {

    console.log('cid :: ', cid);
    console.log('type :: ', type);
    const str = type === "increase" ? "qty=qty+1" : "qty=qty-1"

    const sql = `
        update shoppy_cart
            set ${str}
            where cid = ?
    `;
    const [result] = await db.execute(sql, [cid]);
    return {"result_rows" : result.affectedRows};
}


/**
 * 장바구니 전체 카운트 조회 
 */
export const getCount = async({id}) => {
    const sql = `
        select count(*) as count from shoppy_cart
        where id= ?
    `;
    const [result] = await db.execute(sql, [id]); // [{count: 4}] [count 필드 정보]
    return result [0];
}



/**
 * 장바구니 전체 조회 
 */

export const getItems = async({id}) => {
    const sql = `
            SELECT SC.CID,
            SC.SIZE,
            SC.QTY,
            SM.ID,
            SM.ZIPCODE,
            SM.ADDRESS,
            SP.PID,
            SP.PNAME,
            SP.PRICE,
            SP.DESCRIPTION as info,
            CONCAT('http://localhost:9000/', SP.UPLOAD_FILE->>'$[0]') as image
                FROM SHOPPY_CART SC, 
                    SHOPPY_MEMBER SM,
                    SHOPPY_PRODUCT SP
                WHERE SC.ID = SM.ID 
                        AND SC.PID = SP.PID
                        AND SM.ID = ?
    `;
    const [result] = await db.execute(sql, [id]);
    return result;
}



/**
 * 장바구니 추가 
 */

export const addCart = async({id, cartList}) => {
    let result_rows = 0;

    const result = await Promise.all(   // [1, 1, 1, 1, 1, 1]
        cartList.map(async(item)=> {
                const values= [item.size, item.qty, id, item.pid];
                const sql = `
                    insert into shoppy_cart(size, qty, id, pid, cdate)
                        values(?, ?, ?, ?, now())
                `;
                const [result] = await db.execute(sql, values); // Promise 형태로 실행
                return result.affectedRows;
        })
    )
    // console.log('result->', result);
    result_rows = result.reduce((acc, cur)=> acc + cur, 0);
    // console.log({"result_rows": result_rows});
    
    return {"result_rows":result_rows};
}

