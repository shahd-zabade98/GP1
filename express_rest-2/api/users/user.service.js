const pool = require("../../config/database");
module.exports = {
    create: (data, callBack) =>{
     
        //var checkusername=data.user_name;

        var checkusername= data.user_name;
        var checkemail= data.email;
        var BusinessOwner = false;
        pool.query('SELECT * FROM zahra.users WHERE userName = ?',[checkusername],async function (error, results, fields) {
            if (error) {

            return callBack(error)
            }else{
              if(results.length >0){
                return callBack("user exists")

              }
              else{
                pool.query('SELECT * FROM zahra.users WHERE email = ?',[checkemail],async function (error, results, fields) {
                    if (error) {
        
                    return callBack(error)
                    }else{
                      if(results.length >0){
                        return callBack("email exists")
        
                      }
                      else{

                pool.query(
                    `insert into zahra.users (userName, email , password,hasBusiness)
                                  value(? , ? , ? ,? )` ,
                    [
                     data.user_name,
                     data.email,
                     data.password,
                     BusinessOwner
                   ],
                (error,results,fields) => {
                    if(error){
                        return callBack(error);
                    }
                    return callBack(null , results);
        
                }
              );

            }
        }
        });
              }
            }
            });
    
        
    
    },
    getUsersByUserName : (user_name, callBack)  =>{
      
        pool.query(
            'SELECT * FROM users WHERE username = ?' ,[user_name],  function (error, results, fields) {
                if (error) {
                    return callBack(error);
                  }
                    return callBack(null,results[0] );
                
            });

        },   
        
        getIdfromUsername : (user_name, callBack)  =>{
          //var user_name = data.user_name
          pool.query(
              'SELECT * FROM users WHERE username = ?' ,[user_name],  function (error, results, fields) {
                  if (error) {
                      return callBack(error);
                    }
                      return callBack(null,results );
                  
              });
  
          },




          insert_page: (data, callBack) =>{

            pool.query('SELECT * FROM BusinessAccount WHERE user_facebookID = ?',[data.user_facebookID],async function (error, results, fields) {
                if (error) {
        
                return callBack(error)
                }else{
                  if(results.length >0){
                    pool.query('update BusinessAccount set page_name=? , page_image=?,page_link=?,page_id=?,user_id=?',[
                        data.page_name,data.page_image,data.page_link,
                         data.page_id,data.user_id
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
                    `insert into BusinessAccount (page_id, page_name ,
                        page_image,page_link,user_facebookID,user_id)
                                  value(? , ? , ? ,? ,? ,?  )` , [
                                      data.page_id,data.page_name,data.page_image,data.page_link,
                                      data.user_facebookID,data.user_id
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
            add_location: (data, callBack) =>{
// pool.query('update BusinessAccount set page_city=? , page_country=?,page_street=?,page_zip=?,page_lati=?,page_lang=? WHERE page_id=?'
//                       ,[
//                           data.page_city,data.page_country,data.page_street,
//                            data.page_zip,data.page_lati,data.page_lang,data.page_id
//                         ]

//,function (error, results, fields) {
//                             if(error){
//                                 return callBack(error);
//                             }
                                
//                             return callBack(null , results);
                                    
//                             }
                    
//                         );

pool.query('SELECT * FROM BusinessAccount WHERE user_facebookID = ?',[data.user_facebookID],async function (error, results, fields) {
  if (error) {

  return callBack(error)
  }else{
    if(results.length >0){
      pool.query('update BusinessAccount set page_city=? , page_country=?,page_street=?,page_zip=?,page_lati=?,page_lang=? where user_facebookID =?  '
      ,[
          data.page_city,data.page_country,data.page_street,
           data.page_zip,data.page_lati,data.page_lang,data.user_facebookID
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
      `insert into BusinessAccount (page_city, page_country ,
        page_street,page_zip,page_lati,page_lang)
                    value(? , ? , ? ,? ,? ,?  )` , [
                        data.page_city,data.page_country,data.page_street,data.page_zip,
                        data.page_lati,data.page_lang
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

          page_fetch: (data, callBack) =>{
      //SELECT CONVERT(product_reviews USING utf8) AS product_reviews  FROM FBproduct 
   
          pool.query('SELECT * FROM BusinessAccount WHERE user_facebookID = ?  ',[data.user_facebookID], function (error, results, fields) {
          if(error){
              return callBack(error);
          }
              
          return callBack(null , results);
                  
          }
  
         );
 
  
      
  
  },
         change_Bool: (data,callBack) =>{
    //SELECT CONVERT(product_reviews USING utf8) AS product_reviews  FROM FBproduct 
                     var changeBusinessOwner = true;
            pool.query('update users set hasBusiness=?, FacebookId=? where ID =? ' ,[changeBusinessOwner,data.FacebookId,data.user_id], function (error, results, fields) {
          if(error){
            return callBack(error);
          }
            
          return callBack(null , results);
                
           }

       );

       }

    
};