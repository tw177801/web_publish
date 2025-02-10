import { db } from './db.js';

/**
 * 전체 상품 리스트 조회 
 */
export const getList = async() => {
    const sql = `
        select pid,
               pname as name,
               price,
               concat('http://localhost:9000/', upload_file->>'$[0]') as image,
               description as info,
               source_file,
               pdate        
        from shoppy_product
    `;

    const [result] = await db.execute(sql);
    console.log('result--> ', result);
    
    return result;  // [{}, {}, {}]
}

//  concat('http://localhost:9000/', upload_file) as image, 

/**
 * 상품 등록 
 */

export const registerProduct = async (formData) => {

    const sql = `
        insert into shoppy_product(pname, 
                                   price, 
                                   description,
                                   upload_file,
                                   source_file,
                                   pdate)
            values(?,?,?,?,?, now())
    `;

    const values = [
        formData.productName,
        formData.price,
        formData.description,
        formData.uploadFile,
        formData.sourceFile
    ];

    const [result] = await db.execute(sql, values);
    return {"result_rows": result.affectedRows}; 
}

