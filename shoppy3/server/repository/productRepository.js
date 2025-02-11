import { db } from './db.js';

/**
 * 상품 상세 정보 조회
 */

export const getProduct = async(pid) => {
    console.log('pid-->', pid);
    
    const sql = `
        select pid,
               pname as name,
               price,
               description as info,
               upload_file as uploadFile,
               source_file as sourceFile,
               pdate,
               concat('http://localhost:9000/', upload_file->>'$[0]') as image,
               json_array(
                concat('http://localhost:9000/', upload_file->>'$[0]'),
                concat('http://localhost:9000/', upload_file->>'$[1]'),
                concat('http://localhost:9000/', upload_file->>'$[2]')
                ) as imgList
        from shoppy_product
        where pid = ?
    `;

    const [result] = await db.execute(sql, [pid]);    // result =  [ [{pid:4,~~}], [컬럼명 fields] ]
    console.log('result --> ', result[0]);
    
    return result[0];

}


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
        formData.price || 0,
        formData.description || "",
        formData.uploadFile || null,
        formData.sourceFile || null
    ];

    const [result] = await db.execute(sql, values);
    return {"result_rows": result.affectedRows}; 
}

