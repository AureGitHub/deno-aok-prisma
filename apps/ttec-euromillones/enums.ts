export enum Estado {  
      activo = 1,
      baja = 2,
      bloqueado = 3,
      cambiar_pass = 4
}



export enum Role {  
    god = 1,
    admin = 2,
    normal = 3
}

export enum UserXMovimientoXTipo {  
    reintegro = 1,  // pago apuesta
    ingreso = 2,    // aumento de saldo
    ganado = 3,      // repato premio
    inicial = 4    // cuando haga el transpaso de datos
}


export enum ApuestaXEstado {  
    abierta = 1,  
    cerrada = 2,    
    finalizada = 3      
}

export enum BizumXEstado {  
    pendiente = 1,  
    confirmado = 2,
    cerrado = 3,

}
