// const pool = require("../../config/database");
// module.exports = {


//     productSearch: (product_label, callBack) =>{
     
        


//         pool.query('SELECT * FROM product WHERE product_label = ? ',[product_label], function (error, results, fields) {
//             if(error){
//                 return callBack(error);
//             }
                
//             return callBack(null , results);
                    
//             }
    
//         );
   
    
        
    
//     },
//     // productFetch: callBack =>{
     
        


//     //     pool.query('SELECT * FROM product ', function (error, results, fields) {
//     //         if(error){
//     //             return callBack(error);
//     //         }
                
//     //         return callBack(null , results);
                    
//     //         }
    
//     //     );
   
    
        
    
//     // },
//         productFetch: callBack =>{
     
        


//         pool.query('SELECT CONVERT(FBproductreview USING utf8) AS FBproductreview  FROM FBproduct ', function (error, results, fields) {
//             if(error){
//                 return callBack(error);
//             }
                
//             return callBack(null , results);
                    
//             }
    
//         );
   
        
        
    
//     }

// };




const pool = require("../../config/database");
module.exports = {

    create: (data, callBack) =>{

    
    pool.query('SELECT * FROM FacebookProducts WHERE product_id = ?',[data.product_id],async function (error, results, fields) {
        if (error) {

        return callBack(error)
        }else{
          if(results.length >0){
            pool.query('update FacebookProducts set product_availability=? , product_price=?,product_sale_price=?,product_image_url=?,product_brand=?,product_description=?,product_name=?,product_url=?,product_label=?,product_catlogName=?,product_pageName=?,product_pageUrl=?,product_supplier=?,product_pageId=? where product_id = ? ',[
                data.product_availability,data.product_price,data.product_sale_price,
                 data.product_image_url,data.product_brand,data.product_description,data.product_name,
                 data.product_url,data.product_label,data.product_catlogName,
                 data.product_pageName,data.product_pageUrl,data.product_supplier,data.product_pageId,data.product_id
              ],function (error, results, fields) {
                  if(error){
                      return callBack(error);
                  }
                      
                  return callBack(null , results);
                          
                  }
          
              );

          }
          else{

        pool.query(
            `insert into FacebookProducts (product_id, product_availability ,
                 product_price,product_sale_price,product_image_url,product_brand,product_description,
                 product_name,product_url,product_label,product_catlogName,product_catalogId,product_pageName,
                 product_pageUrl,product_supplier,product_pageId)
                          value(? , ? , ? ,? ,? ,? , ?, ?, ?, ?, ?, ?, ? , ?, ?, ? )` , [
                              data.product_id,data.product_availability,data.product_price,data.product_sale_price,
                              data.product_image_url,data.product_brand,data.product_description,data.product_name,
                              data.product_url,data.product_label,data.product_catlogName,data.product_catalogId,
                              data.product_pageName,data.product_pageUrl,data.product_supplier,data.product_pageId
                          ], function (error,results,fields)  {
            if(error){
                return callBack(error);
            }
            return callBack(null , results);

        }
      );

        }
        }
        });
        
    
    },
    productSearch: (product_label, callBack) =>{


        pool.query('SELECT product_id,product_name,product_brand,product_description,product_price,product_sale_price,product_image_url,product_availability ,product_supplier,product_pageName,product_pageUrl,product_url  FROM FacebookProducts WHERE product_label = ? ',[product_label], function (error, results, fields) {
            if(error){
                return callBack(error);
            }
                
            return callBack(null , results);
                    
            }
    
        );
   
    
        
    
    },

    //     productSearch: (product_label, callBack) =>{
     
        


    //     pool.query('SELECT * FROM product WHERE product_label = ? ',[product_label], function (error, results, fields) {
    //         if(error){
    //             return callBack(error);
    //         }
                
    //         return callBack(null , results);
                    
    //         }
    
    //     );
   
    
        
    
    // },
    productFetch:( callBack )=>{
     
        


        pool.query('SELECT * FROM products ', function (error, results, fields) {
            if(error){
                return callBack(error);
            }
                
            return callBack(null , results);
                    
            }
    
        );
   
    },
    updateProduct:(data, callBack)=>{
        
         pool.query('update FacebookProducts set product_availability=? , product_price=?,product_sale_price=?,product_image_url=?,product_brand=?,product_description=?,product_name=?,product_url=?,product_label=?,product_catlogName=?,product_pageName=?,product_pageUrl=?,product_supplier=? where product_catalogId =?  ',[
           data.product_availability,data.product_price,data.product_sale_price,
            data.product_image_url,data.product_brand,data.product_description,data.product_name,
            data.product_url,data.product_label,data.product_catlogName,
            data.product_pageName,data.product_pageUrl,data.product_supplier,data.product_catalogId
         ],function (error, results, fields) {
             if(error){
                 return callBack(error);
             }
                 
             return callBack(null , results);
                     
             }
     
         );
    
     
         
     },
    reviewFetch: (data, callBack) =>{
        //SELECT CONVERT(product_reviews USING utf8) AS product_reviews  FROM FBproduct 
     
        pool.query('SELECT CONVERT(product_reviews USING utf8) AS product_reviews FROM FacebookProducts WHERE product_id = ? ',[data.product_id], function (error, results, fields) {
            if(error){
                return callBack(error);
            }
                
            return callBack(null , results);
                    
            }
    
        );
   
    
        
    
    }


  
    




};