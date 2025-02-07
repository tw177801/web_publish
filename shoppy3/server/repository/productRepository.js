import { db } from './db.js';


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

