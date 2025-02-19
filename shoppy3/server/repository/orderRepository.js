import {db} from './db.js'; 


export const getOrderList = async({id}) => {  
    const sql = `
        SELECT  SC.CID,
                SC.SIZE,
                SC.QTY,
                SM.ID,
                SM.NAME,
                SM.PHONE,
                CONCAT(SM.EMAILNAME, '@', SM.EMAILDOMAIN) AS EMAIL,
                SM.EMAILDOMAIN,
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