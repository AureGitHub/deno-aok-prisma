export const getFilter = (colums : any[]) =>{
    let cadena =  `WHERE 1=1 `;
    colums.forEach(col => {
      if(col['filter']){
        cadena+=` and ${col.prop} like '%${col['filter']}%' `;
      }

      if(col['filterInit']){
        cadena+=` and ${col['filterInit']} `;
      }

    })
    
    return  cadena ;
  }
  
  
  
  export   const getOrderBy = (colums : any[]) =>{
    let cadena =  colums.some(a=>a.order || a.OrderInit)  ? 'order by ' : '';
    colums.forEach(col => {
      if(col['order']){
        cadena+=` ${col.prop} ${col['order']},`;
      }

      if(col['OrderInit']){
        cadena+=` ${col.prop} ${col['OrderInit']},`;
      }

    })
    return  cadena.substring(0,cadena.length-1) ;
  } 