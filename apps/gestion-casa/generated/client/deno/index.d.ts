
/**
 * Client
**/

import * as runtime from '.././runtime/index.d.ts';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model casa
 * 
 */
export type casa = {
  id: number
  nombre: string
  baja: boolean
  createdAt: Date
  updatedAt: Date
}

/**
 * Model empleada
 * 
 */
export type empleada = {
  id: number
  nombre: string
  baja: boolean
  createdAt: Date
  updatedAt: Date
}

/**
 * Model servicio
 * 
 */
export type servicio = {
  id: number
  fecha: Date
  horaInicio: Date
  horaFin: Date
  suplLevantar: boolean
  empleadaId: number
  pagado: boolean
  horas: number
  minutos: number
  importe: Prisma.Decimal
  observacion: string | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model turno
 * 
 */
export type turno = {
  id: number
  fecha: Date
  quien: string
}

/**
 * Model agenda
 * 
 */
export type agenda = {
  id: number
  fecha: Date
  tipoagendaId: number
  observacion: string
}

/**
 * Model tipoagenda
 * 
 */
export type tipoagenda = {
  id: number
  descripcion: string
  color: string
}

/**
 * Model gasto
 * 
 */
export type gasto = {
  id: number
  fecha: Date
  tipogastoId: number
  importe: Prisma.Decimal
  observacion: string | null
  servicioId: number | null
  pendientecobro: boolean
}

/**
 * Model tipogasto
 * 
 */
export type tipogasto = {
  id: number
  descripcion: string
  color: string
}

/**
 * Model producto
 * 
 */
export type producto = {
  id: number
  descripcion: string
}

/**
 * Model ListaCompra
 * 
 */
export type ListaCompra = {
  productoId: number
}

/**
 * Model configuracion
 * 
 */
export type configuracion = {
  key: string
  value: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Casas
 * const casas = await prisma.casa.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Casas
   * const casas = await prisma.casa.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.casa`: Exposes CRUD operations for the **casa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Casas
    * const casas = await prisma.casa.findMany()
    * ```
    */
  get casa(): Prisma.casaDelegate<GlobalReject>;

  /**
   * `prisma.empleada`: Exposes CRUD operations for the **empleada** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Empleadas
    * const empleadas = await prisma.empleada.findMany()
    * ```
    */
  get empleada(): Prisma.empleadaDelegate<GlobalReject>;

  /**
   * `prisma.servicio`: Exposes CRUD operations for the **servicio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servicios
    * const servicios = await prisma.servicio.findMany()
    * ```
    */
  get servicio(): Prisma.servicioDelegate<GlobalReject>;

  /**
   * `prisma.turno`: Exposes CRUD operations for the **turno** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Turnos
    * const turnos = await prisma.turno.findMany()
    * ```
    */
  get turno(): Prisma.turnoDelegate<GlobalReject>;

  /**
   * `prisma.agenda`: Exposes CRUD operations for the **agenda** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agenda
    * const agenda = await prisma.agenda.findMany()
    * ```
    */
  get agenda(): Prisma.agendaDelegate<GlobalReject>;

  /**
   * `prisma.tipoagenda`: Exposes CRUD operations for the **tipoagenda** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tipoagenda
    * const tipoagenda = await prisma.tipoagenda.findMany()
    * ```
    */
  get tipoagenda(): Prisma.tipoagendaDelegate<GlobalReject>;

  /**
   * `prisma.gasto`: Exposes CRUD operations for the **gasto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gastos
    * const gastos = await prisma.gasto.findMany()
    * ```
    */
  get gasto(): Prisma.gastoDelegate<GlobalReject>;

  /**
   * `prisma.tipogasto`: Exposes CRUD operations for the **tipogasto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tipogastos
    * const tipogastos = await prisma.tipogasto.findMany()
    * ```
    */
  get tipogasto(): Prisma.tipogastoDelegate<GlobalReject>;

  /**
   * `prisma.producto`: Exposes CRUD operations for the **producto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.producto.findMany()
    * ```
    */
  get producto(): Prisma.productoDelegate<GlobalReject>;

  /**
   * `prisma.listaCompra`: Exposes CRUD operations for the **ListaCompra** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ListaCompras
    * const listaCompras = await prisma.listaCompra.findMany()
    * ```
    */
  get listaCompra(): Prisma.ListaCompraDelegate<GlobalReject>;

  /**
   * `prisma.configuracion`: Exposes CRUD operations for the **configuracion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Configuracions
    * const configuracions = await prisma.configuracion.findMany()
    * ```
    */
  get configuracion(): Prisma.configuracionDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.14.1
   * Query Engine version: 0362da9eebca54d94c8ef5edd3b2e90af99ba452
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    casa: 'casa',
    empleada: 'empleada',
    servicio: 'servicio',
    turno: 'turno',
    agenda: 'agenda',
    tipoagenda: 'tipoagenda',
    gasto: 'gasto',
    tipogasto: 'tipogasto',
    producto: 'producto',
    ListaCompra: 'ListaCompra',
    configuracion: 'configuracion'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EmpleadaCountOutputType
   */


  export type EmpleadaCountOutputType = {
    servicios: number
  }

  export type EmpleadaCountOutputTypeSelect = {
    servicios?: boolean
  }

  export type EmpleadaCountOutputTypeGetPayload<S extends boolean | null | undefined | EmpleadaCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? EmpleadaCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (EmpleadaCountOutputTypeArgs)
    ? EmpleadaCountOutputType 
    : S extends { select: any } & (EmpleadaCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof EmpleadaCountOutputType ? EmpleadaCountOutputType[P] : never
  } 
      : EmpleadaCountOutputType




  // Custom InputTypes

  /**
   * EmpleadaCountOutputType without action
   */
  export type EmpleadaCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the EmpleadaCountOutputType
     */
    select?: EmpleadaCountOutputTypeSelect | null
  }



  /**
   * Count Type TipoagendaCountOutputType
   */


  export type TipoagendaCountOutputType = {
    agendas: number
  }

  export type TipoagendaCountOutputTypeSelect = {
    agendas?: boolean
  }

  export type TipoagendaCountOutputTypeGetPayload<S extends boolean | null | undefined | TipoagendaCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TipoagendaCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TipoagendaCountOutputTypeArgs)
    ? TipoagendaCountOutputType 
    : S extends { select: any } & (TipoagendaCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TipoagendaCountOutputType ? TipoagendaCountOutputType[P] : never
  } 
      : TipoagendaCountOutputType




  // Custom InputTypes

  /**
   * TipoagendaCountOutputType without action
   */
  export type TipoagendaCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TipoagendaCountOutputType
     */
    select?: TipoagendaCountOutputTypeSelect | null
  }



  /**
   * Count Type TipogastoCountOutputType
   */


  export type TipogastoCountOutputType = {
    gastos: number
  }

  export type TipogastoCountOutputTypeSelect = {
    gastos?: boolean
  }

  export type TipogastoCountOutputTypeGetPayload<S extends boolean | null | undefined | TipogastoCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TipogastoCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TipogastoCountOutputTypeArgs)
    ? TipogastoCountOutputType 
    : S extends { select: any } & (TipogastoCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TipogastoCountOutputType ? TipogastoCountOutputType[P] : never
  } 
      : TipogastoCountOutputType




  // Custom InputTypes

  /**
   * TipogastoCountOutputType without action
   */
  export type TipogastoCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TipogastoCountOutputType
     */
    select?: TipogastoCountOutputTypeSelect | null
  }



  /**
   * Count Type ProductoCountOutputType
   */


  export type ProductoCountOutputType = {
    ListaCompras: number
  }

  export type ProductoCountOutputTypeSelect = {
    ListaCompras?: boolean
  }

  export type ProductoCountOutputTypeGetPayload<S extends boolean | null | undefined | ProductoCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProductoCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ProductoCountOutputTypeArgs)
    ? ProductoCountOutputType 
    : S extends { select: any } & (ProductoCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ProductoCountOutputType ? ProductoCountOutputType[P] : never
  } 
      : ProductoCountOutputType




  // Custom InputTypes

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProductoCountOutputType
     */
    select?: ProductoCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model casa
   */


  export type AggregateCasa = {
    _count: CasaCountAggregateOutputType | null
    _avg: CasaAvgAggregateOutputType | null
    _sum: CasaSumAggregateOutputType | null
    _min: CasaMinAggregateOutputType | null
    _max: CasaMaxAggregateOutputType | null
  }

  export type CasaAvgAggregateOutputType = {
    id: number | null
  }

  export type CasaSumAggregateOutputType = {
    id: number | null
  }

  export type CasaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    baja: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CasaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    baja: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CasaCountAggregateOutputType = {
    id: number
    nombre: number
    baja: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CasaAvgAggregateInputType = {
    id?: true
  }

  export type CasaSumAggregateInputType = {
    id?: true
  }

  export type CasaMinAggregateInputType = {
    id?: true
    nombre?: true
    baja?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CasaMaxAggregateInputType = {
    id?: true
    nombre?: true
    baja?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CasaCountAggregateInputType = {
    id?: true
    nombre?: true
    baja?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CasaAggregateArgs = {
    /**
     * Filter which casa to aggregate.
     */
    where?: casaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of casas to fetch.
     */
    orderBy?: Enumerable<casaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: casaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` casas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` casas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned casas
    **/
    _count?: true | CasaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CasaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CasaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CasaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CasaMaxAggregateInputType
  }

  export type GetCasaAggregateType<T extends CasaAggregateArgs> = {
        [P in keyof T & keyof AggregateCasa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCasa[P]>
      : GetScalarType<T[P], AggregateCasa[P]>
  }




  export type CasaGroupByArgs = {
    where?: casaWhereInput
    orderBy?: Enumerable<casaOrderByWithAggregationInput>
    by: CasaScalarFieldEnum[]
    having?: casaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CasaCountAggregateInputType | true
    _avg?: CasaAvgAggregateInputType
    _sum?: CasaSumAggregateInputType
    _min?: CasaMinAggregateInputType
    _max?: CasaMaxAggregateInputType
  }


  export type CasaGroupByOutputType = {
    id: number
    nombre: string
    baja: boolean
    createdAt: Date
    updatedAt: Date
    _count: CasaCountAggregateOutputType | null
    _avg: CasaAvgAggregateOutputType | null
    _sum: CasaSumAggregateOutputType | null
    _min: CasaMinAggregateOutputType | null
    _max: CasaMaxAggregateOutputType | null
  }

  type GetCasaGroupByPayload<T extends CasaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CasaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CasaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CasaGroupByOutputType[P]>
            : GetScalarType<T[P], CasaGroupByOutputType[P]>
        }
      >
    >


  export type casaSelect = {
    id?: boolean
    nombre?: boolean
    baja?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type casaGetPayload<S extends boolean | null | undefined | casaArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? casa :
    S extends undefined ? never :
    S extends { include: any } & (casaArgs | casaFindManyArgs)
    ? casa 
    : S extends { select: any } & (casaArgs | casaFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof casa ? casa[P] : never
  } 
      : casa


  type casaCountArgs = 
    Omit<casaFindManyArgs, 'select' | 'include'> & {
      select?: CasaCountAggregateInputType | true
    }

  export interface casaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Casa that matches the filter.
     * @param {casaFindUniqueArgs} args - Arguments to find a Casa
     * @example
     * // Get one Casa
     * const casa = await prisma.casa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends casaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, casaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'casa'> extends True ? Prisma__casaClient<casaGetPayload<T>> : Prisma__casaClient<casaGetPayload<T> | null, null>

    /**
     * Find one Casa that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {casaFindUniqueOrThrowArgs} args - Arguments to find a Casa
     * @example
     * // Get one Casa
     * const casa = await prisma.casa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends casaFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, casaFindUniqueOrThrowArgs>
    ): Prisma__casaClient<casaGetPayload<T>>

    /**
     * Find the first Casa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {casaFindFirstArgs} args - Arguments to find a Casa
     * @example
     * // Get one Casa
     * const casa = await prisma.casa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends casaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, casaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'casa'> extends True ? Prisma__casaClient<casaGetPayload<T>> : Prisma__casaClient<casaGetPayload<T> | null, null>

    /**
     * Find the first Casa that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {casaFindFirstOrThrowArgs} args - Arguments to find a Casa
     * @example
     * // Get one Casa
     * const casa = await prisma.casa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends casaFindFirstOrThrowArgs>(
      args?: SelectSubset<T, casaFindFirstOrThrowArgs>
    ): Prisma__casaClient<casaGetPayload<T>>

    /**
     * Find zero or more Casas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {casaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Casas
     * const casas = await prisma.casa.findMany()
     * 
     * // Get first 10 Casas
     * const casas = await prisma.casa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const casaWithIdOnly = await prisma.casa.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends casaFindManyArgs>(
      args?: SelectSubset<T, casaFindManyArgs>
    ): Prisma.PrismaPromise<Array<casaGetPayload<T>>>

    /**
     * Create a Casa.
     * @param {casaCreateArgs} args - Arguments to create a Casa.
     * @example
     * // Create one Casa
     * const Casa = await prisma.casa.create({
     *   data: {
     *     // ... data to create a Casa
     *   }
     * })
     * 
    **/
    create<T extends casaCreateArgs>(
      args: SelectSubset<T, casaCreateArgs>
    ): Prisma__casaClient<casaGetPayload<T>>

    /**
     * Create many Casas.
     *     @param {casaCreateManyArgs} args - Arguments to create many Casas.
     *     @example
     *     // Create many Casas
     *     const casa = await prisma.casa.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends casaCreateManyArgs>(
      args?: SelectSubset<T, casaCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Casa.
     * @param {casaDeleteArgs} args - Arguments to delete one Casa.
     * @example
     * // Delete one Casa
     * const Casa = await prisma.casa.delete({
     *   where: {
     *     // ... filter to delete one Casa
     *   }
     * })
     * 
    **/
    delete<T extends casaDeleteArgs>(
      args: SelectSubset<T, casaDeleteArgs>
    ): Prisma__casaClient<casaGetPayload<T>>

    /**
     * Update one Casa.
     * @param {casaUpdateArgs} args - Arguments to update one Casa.
     * @example
     * // Update one Casa
     * const casa = await prisma.casa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends casaUpdateArgs>(
      args: SelectSubset<T, casaUpdateArgs>
    ): Prisma__casaClient<casaGetPayload<T>>

    /**
     * Delete zero or more Casas.
     * @param {casaDeleteManyArgs} args - Arguments to filter Casas to delete.
     * @example
     * // Delete a few Casas
     * const { count } = await prisma.casa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends casaDeleteManyArgs>(
      args?: SelectSubset<T, casaDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Casas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {casaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Casas
     * const casa = await prisma.casa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends casaUpdateManyArgs>(
      args: SelectSubset<T, casaUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Casa.
     * @param {casaUpsertArgs} args - Arguments to update or create a Casa.
     * @example
     * // Update or create a Casa
     * const casa = await prisma.casa.upsert({
     *   create: {
     *     // ... data to create a Casa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Casa we want to update
     *   }
     * })
    **/
    upsert<T extends casaUpsertArgs>(
      args: SelectSubset<T, casaUpsertArgs>
    ): Prisma__casaClient<casaGetPayload<T>>

    /**
     * Count the number of Casas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {casaCountArgs} args - Arguments to filter Casas to count.
     * @example
     * // Count the number of Casas
     * const count = await prisma.casa.count({
     *   where: {
     *     // ... the filter for the Casas we want to count
     *   }
     * })
    **/
    count<T extends casaCountArgs>(
      args?: Subset<T, casaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CasaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Casa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CasaAggregateArgs>(args: Subset<T, CasaAggregateArgs>): Prisma.PrismaPromise<GetCasaAggregateType<T>>

    /**
     * Group by Casa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CasaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CasaGroupByArgs['orderBy'] }
        : { orderBy?: CasaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CasaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCasaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for casa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__casaClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * casa base type for findUnique actions
   */
  export type casaFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the casa
     */
    select?: casaSelect | null
    /**
     * Filter, which casa to fetch.
     */
    where: casaWhereUniqueInput
  }

  /**
   * casa findUnique
   */
  export interface casaFindUniqueArgs extends casaFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * casa findUniqueOrThrow
   */
  export type casaFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the casa
     */
    select?: casaSelect | null
    /**
     * Filter, which casa to fetch.
     */
    where: casaWhereUniqueInput
  }


  /**
   * casa base type for findFirst actions
   */
  export type casaFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the casa
     */
    select?: casaSelect | null
    /**
     * Filter, which casa to fetch.
     */
    where?: casaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of casas to fetch.
     */
    orderBy?: Enumerable<casaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for casas.
     */
    cursor?: casaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` casas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` casas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of casas.
     */
    distinct?: Enumerable<CasaScalarFieldEnum>
  }

  /**
   * casa findFirst
   */
  export interface casaFindFirstArgs extends casaFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * casa findFirstOrThrow
   */
  export type casaFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the casa
     */
    select?: casaSelect | null
    /**
     * Filter, which casa to fetch.
     */
    where?: casaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of casas to fetch.
     */
    orderBy?: Enumerable<casaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for casas.
     */
    cursor?: casaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` casas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` casas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of casas.
     */
    distinct?: Enumerable<CasaScalarFieldEnum>
  }


  /**
   * casa findMany
   */
  export type casaFindManyArgs = {
    /**
     * Select specific fields to fetch from the casa
     */
    select?: casaSelect | null
    /**
     * Filter, which casas to fetch.
     */
    where?: casaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of casas to fetch.
     */
    orderBy?: Enumerable<casaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing casas.
     */
    cursor?: casaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` casas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` casas.
     */
    skip?: number
    distinct?: Enumerable<CasaScalarFieldEnum>
  }


  /**
   * casa create
   */
  export type casaCreateArgs = {
    /**
     * Select specific fields to fetch from the casa
     */
    select?: casaSelect | null
    /**
     * The data needed to create a casa.
     */
    data: XOR<casaCreateInput, casaUncheckedCreateInput>
  }


  /**
   * casa createMany
   */
  export type casaCreateManyArgs = {
    /**
     * The data used to create many casas.
     */
    data: Enumerable<casaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * casa update
   */
  export type casaUpdateArgs = {
    /**
     * Select specific fields to fetch from the casa
     */
    select?: casaSelect | null
    /**
     * The data needed to update a casa.
     */
    data: XOR<casaUpdateInput, casaUncheckedUpdateInput>
    /**
     * Choose, which casa to update.
     */
    where: casaWhereUniqueInput
  }


  /**
   * casa updateMany
   */
  export type casaUpdateManyArgs = {
    /**
     * The data used to update casas.
     */
    data: XOR<casaUpdateManyMutationInput, casaUncheckedUpdateManyInput>
    /**
     * Filter which casas to update
     */
    where?: casaWhereInput
  }


  /**
   * casa upsert
   */
  export type casaUpsertArgs = {
    /**
     * Select specific fields to fetch from the casa
     */
    select?: casaSelect | null
    /**
     * The filter to search for the casa to update in case it exists.
     */
    where: casaWhereUniqueInput
    /**
     * In case the casa found by the `where` argument doesn't exist, create a new casa with this data.
     */
    create: XOR<casaCreateInput, casaUncheckedCreateInput>
    /**
     * In case the casa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<casaUpdateInput, casaUncheckedUpdateInput>
  }


  /**
   * casa delete
   */
  export type casaDeleteArgs = {
    /**
     * Select specific fields to fetch from the casa
     */
    select?: casaSelect | null
    /**
     * Filter which casa to delete.
     */
    where: casaWhereUniqueInput
  }


  /**
   * casa deleteMany
   */
  export type casaDeleteManyArgs = {
    /**
     * Filter which casas to delete
     */
    where?: casaWhereInput
  }


  /**
   * casa without action
   */
  export type casaArgs = {
    /**
     * Select specific fields to fetch from the casa
     */
    select?: casaSelect | null
  }



  /**
   * Model empleada
   */


  export type AggregateEmpleada = {
    _count: EmpleadaCountAggregateOutputType | null
    _avg: EmpleadaAvgAggregateOutputType | null
    _sum: EmpleadaSumAggregateOutputType | null
    _min: EmpleadaMinAggregateOutputType | null
    _max: EmpleadaMaxAggregateOutputType | null
  }

  export type EmpleadaAvgAggregateOutputType = {
    id: number | null
  }

  export type EmpleadaSumAggregateOutputType = {
    id: number | null
  }

  export type EmpleadaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    baja: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmpleadaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    baja: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmpleadaCountAggregateOutputType = {
    id: number
    nombre: number
    baja: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmpleadaAvgAggregateInputType = {
    id?: true
  }

  export type EmpleadaSumAggregateInputType = {
    id?: true
  }

  export type EmpleadaMinAggregateInputType = {
    id?: true
    nombre?: true
    baja?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmpleadaMaxAggregateInputType = {
    id?: true
    nombre?: true
    baja?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmpleadaCountAggregateInputType = {
    id?: true
    nombre?: true
    baja?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmpleadaAggregateArgs = {
    /**
     * Filter which empleada to aggregate.
     */
    where?: empleadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of empleadas to fetch.
     */
    orderBy?: Enumerable<empleadaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: empleadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` empleadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` empleadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned empleadas
    **/
    _count?: true | EmpleadaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmpleadaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmpleadaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmpleadaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmpleadaMaxAggregateInputType
  }

  export type GetEmpleadaAggregateType<T extends EmpleadaAggregateArgs> = {
        [P in keyof T & keyof AggregateEmpleada]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmpleada[P]>
      : GetScalarType<T[P], AggregateEmpleada[P]>
  }




  export type EmpleadaGroupByArgs = {
    where?: empleadaWhereInput
    orderBy?: Enumerable<empleadaOrderByWithAggregationInput>
    by: EmpleadaScalarFieldEnum[]
    having?: empleadaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmpleadaCountAggregateInputType | true
    _avg?: EmpleadaAvgAggregateInputType
    _sum?: EmpleadaSumAggregateInputType
    _min?: EmpleadaMinAggregateInputType
    _max?: EmpleadaMaxAggregateInputType
  }


  export type EmpleadaGroupByOutputType = {
    id: number
    nombre: string
    baja: boolean
    createdAt: Date
    updatedAt: Date
    _count: EmpleadaCountAggregateOutputType | null
    _avg: EmpleadaAvgAggregateOutputType | null
    _sum: EmpleadaSumAggregateOutputType | null
    _min: EmpleadaMinAggregateOutputType | null
    _max: EmpleadaMaxAggregateOutputType | null
  }

  type GetEmpleadaGroupByPayload<T extends EmpleadaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<EmpleadaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmpleadaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmpleadaGroupByOutputType[P]>
            : GetScalarType<T[P], EmpleadaGroupByOutputType[P]>
        }
      >
    >


  export type empleadaSelect = {
    id?: boolean
    nombre?: boolean
    baja?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    servicios?: boolean | empleada$serviciosArgs
    _count?: boolean | EmpleadaCountOutputTypeArgs
  }


  export type empleadaInclude = {
    servicios?: boolean | empleada$serviciosArgs
    _count?: boolean | EmpleadaCountOutputTypeArgs
  }

  export type empleadaGetPayload<S extends boolean | null | undefined | empleadaArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? empleada :
    S extends undefined ? never :
    S extends { include: any } & (empleadaArgs | empleadaFindManyArgs)
    ? empleada  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'servicios' ? Array < servicioGetPayload<S['include'][P]>>  :
        P extends '_count' ? EmpleadaCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (empleadaArgs | empleadaFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'servicios' ? Array < servicioGetPayload<S['select'][P]>>  :
        P extends '_count' ? EmpleadaCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof empleada ? empleada[P] : never
  } 
      : empleada


  type empleadaCountArgs = 
    Omit<empleadaFindManyArgs, 'select' | 'include'> & {
      select?: EmpleadaCountAggregateInputType | true
    }

  export interface empleadaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Empleada that matches the filter.
     * @param {empleadaFindUniqueArgs} args - Arguments to find a Empleada
     * @example
     * // Get one Empleada
     * const empleada = await prisma.empleada.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends empleadaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, empleadaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'empleada'> extends True ? Prisma__empleadaClient<empleadaGetPayload<T>> : Prisma__empleadaClient<empleadaGetPayload<T> | null, null>

    /**
     * Find one Empleada that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {empleadaFindUniqueOrThrowArgs} args - Arguments to find a Empleada
     * @example
     * // Get one Empleada
     * const empleada = await prisma.empleada.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends empleadaFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, empleadaFindUniqueOrThrowArgs>
    ): Prisma__empleadaClient<empleadaGetPayload<T>>

    /**
     * Find the first Empleada that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empleadaFindFirstArgs} args - Arguments to find a Empleada
     * @example
     * // Get one Empleada
     * const empleada = await prisma.empleada.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends empleadaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, empleadaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'empleada'> extends True ? Prisma__empleadaClient<empleadaGetPayload<T>> : Prisma__empleadaClient<empleadaGetPayload<T> | null, null>

    /**
     * Find the first Empleada that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empleadaFindFirstOrThrowArgs} args - Arguments to find a Empleada
     * @example
     * // Get one Empleada
     * const empleada = await prisma.empleada.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends empleadaFindFirstOrThrowArgs>(
      args?: SelectSubset<T, empleadaFindFirstOrThrowArgs>
    ): Prisma__empleadaClient<empleadaGetPayload<T>>

    /**
     * Find zero or more Empleadas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empleadaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Empleadas
     * const empleadas = await prisma.empleada.findMany()
     * 
     * // Get first 10 Empleadas
     * const empleadas = await prisma.empleada.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const empleadaWithIdOnly = await prisma.empleada.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends empleadaFindManyArgs>(
      args?: SelectSubset<T, empleadaFindManyArgs>
    ): Prisma.PrismaPromise<Array<empleadaGetPayload<T>>>

    /**
     * Create a Empleada.
     * @param {empleadaCreateArgs} args - Arguments to create a Empleada.
     * @example
     * // Create one Empleada
     * const Empleada = await prisma.empleada.create({
     *   data: {
     *     // ... data to create a Empleada
     *   }
     * })
     * 
    **/
    create<T extends empleadaCreateArgs>(
      args: SelectSubset<T, empleadaCreateArgs>
    ): Prisma__empleadaClient<empleadaGetPayload<T>>

    /**
     * Create many Empleadas.
     *     @param {empleadaCreateManyArgs} args - Arguments to create many Empleadas.
     *     @example
     *     // Create many Empleadas
     *     const empleada = await prisma.empleada.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends empleadaCreateManyArgs>(
      args?: SelectSubset<T, empleadaCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Empleada.
     * @param {empleadaDeleteArgs} args - Arguments to delete one Empleada.
     * @example
     * // Delete one Empleada
     * const Empleada = await prisma.empleada.delete({
     *   where: {
     *     // ... filter to delete one Empleada
     *   }
     * })
     * 
    **/
    delete<T extends empleadaDeleteArgs>(
      args: SelectSubset<T, empleadaDeleteArgs>
    ): Prisma__empleadaClient<empleadaGetPayload<T>>

    /**
     * Update one Empleada.
     * @param {empleadaUpdateArgs} args - Arguments to update one Empleada.
     * @example
     * // Update one Empleada
     * const empleada = await prisma.empleada.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends empleadaUpdateArgs>(
      args: SelectSubset<T, empleadaUpdateArgs>
    ): Prisma__empleadaClient<empleadaGetPayload<T>>

    /**
     * Delete zero or more Empleadas.
     * @param {empleadaDeleteManyArgs} args - Arguments to filter Empleadas to delete.
     * @example
     * // Delete a few Empleadas
     * const { count } = await prisma.empleada.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends empleadaDeleteManyArgs>(
      args?: SelectSubset<T, empleadaDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empleadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empleadaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Empleadas
     * const empleada = await prisma.empleada.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends empleadaUpdateManyArgs>(
      args: SelectSubset<T, empleadaUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Empleada.
     * @param {empleadaUpsertArgs} args - Arguments to update or create a Empleada.
     * @example
     * // Update or create a Empleada
     * const empleada = await prisma.empleada.upsert({
     *   create: {
     *     // ... data to create a Empleada
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Empleada we want to update
     *   }
     * })
    **/
    upsert<T extends empleadaUpsertArgs>(
      args: SelectSubset<T, empleadaUpsertArgs>
    ): Prisma__empleadaClient<empleadaGetPayload<T>>

    /**
     * Count the number of Empleadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empleadaCountArgs} args - Arguments to filter Empleadas to count.
     * @example
     * // Count the number of Empleadas
     * const count = await prisma.empleada.count({
     *   where: {
     *     // ... the filter for the Empleadas we want to count
     *   }
     * })
    **/
    count<T extends empleadaCountArgs>(
      args?: Subset<T, empleadaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmpleadaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Empleada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmpleadaAggregateArgs>(args: Subset<T, EmpleadaAggregateArgs>): Prisma.PrismaPromise<GetEmpleadaAggregateType<T>>

    /**
     * Group by Empleada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmpleadaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmpleadaGroupByArgs['orderBy'] }
        : { orderBy?: EmpleadaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmpleadaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpleadaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for empleada.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__empleadaClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    servicios<T extends empleada$serviciosArgs= {}>(args?: Subset<T, empleada$serviciosArgs>): Prisma.PrismaPromise<Array<servicioGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * empleada base type for findUnique actions
   */
  export type empleadaFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the empleada
     */
    select?: empleadaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: empleadaInclude | null
    /**
     * Filter, which empleada to fetch.
     */
    where: empleadaWhereUniqueInput
  }

  /**
   * empleada findUnique
   */
  export interface empleadaFindUniqueArgs extends empleadaFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * empleada findUniqueOrThrow
   */
  export type empleadaFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the empleada
     */
    select?: empleadaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: empleadaInclude | null
    /**
     * Filter, which empleada to fetch.
     */
    where: empleadaWhereUniqueInput
  }


  /**
   * empleada base type for findFirst actions
   */
  export type empleadaFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the empleada
     */
    select?: empleadaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: empleadaInclude | null
    /**
     * Filter, which empleada to fetch.
     */
    where?: empleadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of empleadas to fetch.
     */
    orderBy?: Enumerable<empleadaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for empleadas.
     */
    cursor?: empleadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` empleadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` empleadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of empleadas.
     */
    distinct?: Enumerable<EmpleadaScalarFieldEnum>
  }

  /**
   * empleada findFirst
   */
  export interface empleadaFindFirstArgs extends empleadaFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * empleada findFirstOrThrow
   */
  export type empleadaFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the empleada
     */
    select?: empleadaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: empleadaInclude | null
    /**
     * Filter, which empleada to fetch.
     */
    where?: empleadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of empleadas to fetch.
     */
    orderBy?: Enumerable<empleadaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for empleadas.
     */
    cursor?: empleadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` empleadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` empleadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of empleadas.
     */
    distinct?: Enumerable<EmpleadaScalarFieldEnum>
  }


  /**
   * empleada findMany
   */
  export type empleadaFindManyArgs = {
    /**
     * Select specific fields to fetch from the empleada
     */
    select?: empleadaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: empleadaInclude | null
    /**
     * Filter, which empleadas to fetch.
     */
    where?: empleadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of empleadas to fetch.
     */
    orderBy?: Enumerable<empleadaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing empleadas.
     */
    cursor?: empleadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` empleadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` empleadas.
     */
    skip?: number
    distinct?: Enumerable<EmpleadaScalarFieldEnum>
  }


  /**
   * empleada create
   */
  export type empleadaCreateArgs = {
    /**
     * Select specific fields to fetch from the empleada
     */
    select?: empleadaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: empleadaInclude | null
    /**
     * The data needed to create a empleada.
     */
    data: XOR<empleadaCreateInput, empleadaUncheckedCreateInput>
  }


  /**
   * empleada createMany
   */
  export type empleadaCreateManyArgs = {
    /**
     * The data used to create many empleadas.
     */
    data: Enumerable<empleadaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * empleada update
   */
  export type empleadaUpdateArgs = {
    /**
     * Select specific fields to fetch from the empleada
     */
    select?: empleadaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: empleadaInclude | null
    /**
     * The data needed to update a empleada.
     */
    data: XOR<empleadaUpdateInput, empleadaUncheckedUpdateInput>
    /**
     * Choose, which empleada to update.
     */
    where: empleadaWhereUniqueInput
  }


  /**
   * empleada updateMany
   */
  export type empleadaUpdateManyArgs = {
    /**
     * The data used to update empleadas.
     */
    data: XOR<empleadaUpdateManyMutationInput, empleadaUncheckedUpdateManyInput>
    /**
     * Filter which empleadas to update
     */
    where?: empleadaWhereInput
  }


  /**
   * empleada upsert
   */
  export type empleadaUpsertArgs = {
    /**
     * Select specific fields to fetch from the empleada
     */
    select?: empleadaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: empleadaInclude | null
    /**
     * The filter to search for the empleada to update in case it exists.
     */
    where: empleadaWhereUniqueInput
    /**
     * In case the empleada found by the `where` argument doesn't exist, create a new empleada with this data.
     */
    create: XOR<empleadaCreateInput, empleadaUncheckedCreateInput>
    /**
     * In case the empleada was found with the provided `where` argument, update it with this data.
     */
    update: XOR<empleadaUpdateInput, empleadaUncheckedUpdateInput>
  }


  /**
   * empleada delete
   */
  export type empleadaDeleteArgs = {
    /**
     * Select specific fields to fetch from the empleada
     */
    select?: empleadaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: empleadaInclude | null
    /**
     * Filter which empleada to delete.
     */
    where: empleadaWhereUniqueInput
  }


  /**
   * empleada deleteMany
   */
  export type empleadaDeleteManyArgs = {
    /**
     * Filter which empleadas to delete
     */
    where?: empleadaWhereInput
  }


  /**
   * empleada.servicios
   */
  export type empleada$serviciosArgs = {
    /**
     * Select specific fields to fetch from the servicio
     */
    select?: servicioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: servicioInclude | null
    where?: servicioWhereInput
    orderBy?: Enumerable<servicioOrderByWithRelationInput>
    cursor?: servicioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ServicioScalarFieldEnum>
  }


  /**
   * empleada without action
   */
  export type empleadaArgs = {
    /**
     * Select specific fields to fetch from the empleada
     */
    select?: empleadaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: empleadaInclude | null
  }



  /**
   * Model servicio
   */


  export type AggregateServicio = {
    _count: ServicioCountAggregateOutputType | null
    _avg: ServicioAvgAggregateOutputType | null
    _sum: ServicioSumAggregateOutputType | null
    _min: ServicioMinAggregateOutputType | null
    _max: ServicioMaxAggregateOutputType | null
  }

  export type ServicioAvgAggregateOutputType = {
    id: number | null
    empleadaId: number | null
    horas: number | null
    minutos: number | null
    importe: Decimal | null
  }

  export type ServicioSumAggregateOutputType = {
    id: number | null
    empleadaId: number | null
    horas: number | null
    minutos: number | null
    importe: Decimal | null
  }

  export type ServicioMinAggregateOutputType = {
    id: number | null
    fecha: Date | null
    horaInicio: Date | null
    horaFin: Date | null
    suplLevantar: boolean | null
    empleadaId: number | null
    pagado: boolean | null
    horas: number | null
    minutos: number | null
    importe: Decimal | null
    observacion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServicioMaxAggregateOutputType = {
    id: number | null
    fecha: Date | null
    horaInicio: Date | null
    horaFin: Date | null
    suplLevantar: boolean | null
    empleadaId: number | null
    pagado: boolean | null
    horas: number | null
    minutos: number | null
    importe: Decimal | null
    observacion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServicioCountAggregateOutputType = {
    id: number
    fecha: number
    horaInicio: number
    horaFin: number
    suplLevantar: number
    empleadaId: number
    pagado: number
    horas: number
    minutos: number
    importe: number
    observacion: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServicioAvgAggregateInputType = {
    id?: true
    empleadaId?: true
    horas?: true
    minutos?: true
    importe?: true
  }

  export type ServicioSumAggregateInputType = {
    id?: true
    empleadaId?: true
    horas?: true
    minutos?: true
    importe?: true
  }

  export type ServicioMinAggregateInputType = {
    id?: true
    fecha?: true
    horaInicio?: true
    horaFin?: true
    suplLevantar?: true
    empleadaId?: true
    pagado?: true
    horas?: true
    minutos?: true
    importe?: true
    observacion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServicioMaxAggregateInputType = {
    id?: true
    fecha?: true
    horaInicio?: true
    horaFin?: true
    suplLevantar?: true
    empleadaId?: true
    pagado?: true
    horas?: true
    minutos?: true
    importe?: true
    observacion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServicioCountAggregateInputType = {
    id?: true
    fecha?: true
    horaInicio?: true
    horaFin?: true
    suplLevantar?: true
    empleadaId?: true
    pagado?: true
    horas?: true
    minutos?: true
    importe?: true
    observacion?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServicioAggregateArgs = {
    /**
     * Filter which servicio to aggregate.
     */
    where?: servicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicios to fetch.
     */
    orderBy?: Enumerable<servicioOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: servicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned servicios
    **/
    _count?: true | ServicioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicioMaxAggregateInputType
  }

  export type GetServicioAggregateType<T extends ServicioAggregateArgs> = {
        [P in keyof T & keyof AggregateServicio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServicio[P]>
      : GetScalarType<T[P], AggregateServicio[P]>
  }




  export type ServicioGroupByArgs = {
    where?: servicioWhereInput
    orderBy?: Enumerable<servicioOrderByWithAggregationInput>
    by: ServicioScalarFieldEnum[]
    having?: servicioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicioCountAggregateInputType | true
    _avg?: ServicioAvgAggregateInputType
    _sum?: ServicioSumAggregateInputType
    _min?: ServicioMinAggregateInputType
    _max?: ServicioMaxAggregateInputType
  }


  export type ServicioGroupByOutputType = {
    id: number
    fecha: Date
    horaInicio: Date
    horaFin: Date
    suplLevantar: boolean
    empleadaId: number
    pagado: boolean
    horas: number
    minutos: number
    importe: Decimal
    observacion: string | null
    createdAt: Date
    updatedAt: Date
    _count: ServicioCountAggregateOutputType | null
    _avg: ServicioAvgAggregateOutputType | null
    _sum: ServicioSumAggregateOutputType | null
    _min: ServicioMinAggregateOutputType | null
    _max: ServicioMaxAggregateOutputType | null
  }

  type GetServicioGroupByPayload<T extends ServicioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ServicioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicioGroupByOutputType[P]>
            : GetScalarType<T[P], ServicioGroupByOutputType[P]>
        }
      >
    >


  export type servicioSelect = {
    id?: boolean
    fecha?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    suplLevantar?: boolean
    empleadaId?: boolean
    pagado?: boolean
    horas?: boolean
    minutos?: boolean
    importe?: boolean
    observacion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    empleada?: boolean | empleadaArgs
    gasto?: boolean | gastoArgs
  }


  export type servicioInclude = {
    empleada?: boolean | empleadaArgs
    gasto?: boolean | gastoArgs
  }

  export type servicioGetPayload<S extends boolean | null | undefined | servicioArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? servicio :
    S extends undefined ? never :
    S extends { include: any } & (servicioArgs | servicioFindManyArgs)
    ? servicio  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'empleada' ? empleadaGetPayload<S['include'][P]> :
        P extends 'gasto' ? gastoGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (servicioArgs | servicioFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'empleada' ? empleadaGetPayload<S['select'][P]> :
        P extends 'gasto' ? gastoGetPayload<S['select'][P]> | null :  P extends keyof servicio ? servicio[P] : never
  } 
      : servicio


  type servicioCountArgs = 
    Omit<servicioFindManyArgs, 'select' | 'include'> & {
      select?: ServicioCountAggregateInputType | true
    }

  export interface servicioDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Servicio that matches the filter.
     * @param {servicioFindUniqueArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends servicioFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, servicioFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'servicio'> extends True ? Prisma__servicioClient<servicioGetPayload<T>> : Prisma__servicioClient<servicioGetPayload<T> | null, null>

    /**
     * Find one Servicio that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {servicioFindUniqueOrThrowArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends servicioFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, servicioFindUniqueOrThrowArgs>
    ): Prisma__servicioClient<servicioGetPayload<T>>

    /**
     * Find the first Servicio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicioFindFirstArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends servicioFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, servicioFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'servicio'> extends True ? Prisma__servicioClient<servicioGetPayload<T>> : Prisma__servicioClient<servicioGetPayload<T> | null, null>

    /**
     * Find the first Servicio that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicioFindFirstOrThrowArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends servicioFindFirstOrThrowArgs>(
      args?: SelectSubset<T, servicioFindFirstOrThrowArgs>
    ): Prisma__servicioClient<servicioGetPayload<T>>

    /**
     * Find zero or more Servicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicioFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servicios
     * const servicios = await prisma.servicio.findMany()
     * 
     * // Get first 10 Servicios
     * const servicios = await prisma.servicio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicioWithIdOnly = await prisma.servicio.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends servicioFindManyArgs>(
      args?: SelectSubset<T, servicioFindManyArgs>
    ): Prisma.PrismaPromise<Array<servicioGetPayload<T>>>

    /**
     * Create a Servicio.
     * @param {servicioCreateArgs} args - Arguments to create a Servicio.
     * @example
     * // Create one Servicio
     * const Servicio = await prisma.servicio.create({
     *   data: {
     *     // ... data to create a Servicio
     *   }
     * })
     * 
    **/
    create<T extends servicioCreateArgs>(
      args: SelectSubset<T, servicioCreateArgs>
    ): Prisma__servicioClient<servicioGetPayload<T>>

    /**
     * Create many Servicios.
     *     @param {servicioCreateManyArgs} args - Arguments to create many Servicios.
     *     @example
     *     // Create many Servicios
     *     const servicio = await prisma.servicio.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends servicioCreateManyArgs>(
      args?: SelectSubset<T, servicioCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Servicio.
     * @param {servicioDeleteArgs} args - Arguments to delete one Servicio.
     * @example
     * // Delete one Servicio
     * const Servicio = await prisma.servicio.delete({
     *   where: {
     *     // ... filter to delete one Servicio
     *   }
     * })
     * 
    **/
    delete<T extends servicioDeleteArgs>(
      args: SelectSubset<T, servicioDeleteArgs>
    ): Prisma__servicioClient<servicioGetPayload<T>>

    /**
     * Update one Servicio.
     * @param {servicioUpdateArgs} args - Arguments to update one Servicio.
     * @example
     * // Update one Servicio
     * const servicio = await prisma.servicio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends servicioUpdateArgs>(
      args: SelectSubset<T, servicioUpdateArgs>
    ): Prisma__servicioClient<servicioGetPayload<T>>

    /**
     * Delete zero or more Servicios.
     * @param {servicioDeleteManyArgs} args - Arguments to filter Servicios to delete.
     * @example
     * // Delete a few Servicios
     * const { count } = await prisma.servicio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends servicioDeleteManyArgs>(
      args?: SelectSubset<T, servicioDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servicios
     * const servicio = await prisma.servicio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends servicioUpdateManyArgs>(
      args: SelectSubset<T, servicioUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Servicio.
     * @param {servicioUpsertArgs} args - Arguments to update or create a Servicio.
     * @example
     * // Update or create a Servicio
     * const servicio = await prisma.servicio.upsert({
     *   create: {
     *     // ... data to create a Servicio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servicio we want to update
     *   }
     * })
    **/
    upsert<T extends servicioUpsertArgs>(
      args: SelectSubset<T, servicioUpsertArgs>
    ): Prisma__servicioClient<servicioGetPayload<T>>

    /**
     * Count the number of Servicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicioCountArgs} args - Arguments to filter Servicios to count.
     * @example
     * // Count the number of Servicios
     * const count = await prisma.servicio.count({
     *   where: {
     *     // ... the filter for the Servicios we want to count
     *   }
     * })
    **/
    count<T extends servicioCountArgs>(
      args?: Subset<T, servicioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServicioAggregateArgs>(args: Subset<T, ServicioAggregateArgs>): Prisma.PrismaPromise<GetServicioAggregateType<T>>

    /**
     * Group by Servicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServicioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicioGroupByArgs['orderBy'] }
        : { orderBy?: ServicioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for servicio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__servicioClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    empleada<T extends empleadaArgs= {}>(args?: Subset<T, empleadaArgs>): Prisma__empleadaClient<empleadaGetPayload<T> | Null>;

    gasto<T extends gastoArgs= {}>(args?: Subset<T, gastoArgs>): Prisma__gastoClient<gastoGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * servicio base type for findUnique actions
   */
  export type servicioFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the servicio
     */
    select?: servicioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: servicioInclude | null
    /**
     * Filter, which servicio to fetch.
     */
    where: servicioWhereUniqueInput
  }

  /**
   * servicio findUnique
   */
  export interface servicioFindUniqueArgs extends servicioFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * servicio findUniqueOrThrow
   */
  export type servicioFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the servicio
     */
    select?: servicioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: servicioInclude | null
    /**
     * Filter, which servicio to fetch.
     */
    where: servicioWhereUniqueInput
  }


  /**
   * servicio base type for findFirst actions
   */
  export type servicioFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the servicio
     */
    select?: servicioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: servicioInclude | null
    /**
     * Filter, which servicio to fetch.
     */
    where?: servicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicios to fetch.
     */
    orderBy?: Enumerable<servicioOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for servicios.
     */
    cursor?: servicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of servicios.
     */
    distinct?: Enumerable<ServicioScalarFieldEnum>
  }

  /**
   * servicio findFirst
   */
  export interface servicioFindFirstArgs extends servicioFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * servicio findFirstOrThrow
   */
  export type servicioFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the servicio
     */
    select?: servicioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: servicioInclude | null
    /**
     * Filter, which servicio to fetch.
     */
    where?: servicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicios to fetch.
     */
    orderBy?: Enumerable<servicioOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for servicios.
     */
    cursor?: servicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of servicios.
     */
    distinct?: Enumerable<ServicioScalarFieldEnum>
  }


  /**
   * servicio findMany
   */
  export type servicioFindManyArgs = {
    /**
     * Select specific fields to fetch from the servicio
     */
    select?: servicioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: servicioInclude | null
    /**
     * Filter, which servicios to fetch.
     */
    where?: servicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicios to fetch.
     */
    orderBy?: Enumerable<servicioOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing servicios.
     */
    cursor?: servicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicios.
     */
    skip?: number
    distinct?: Enumerable<ServicioScalarFieldEnum>
  }


  /**
   * servicio create
   */
  export type servicioCreateArgs = {
    /**
     * Select specific fields to fetch from the servicio
     */
    select?: servicioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: servicioInclude | null
    /**
     * The data needed to create a servicio.
     */
    data: XOR<servicioCreateInput, servicioUncheckedCreateInput>
  }


  /**
   * servicio createMany
   */
  export type servicioCreateManyArgs = {
    /**
     * The data used to create many servicios.
     */
    data: Enumerable<servicioCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * servicio update
   */
  export type servicioUpdateArgs = {
    /**
     * Select specific fields to fetch from the servicio
     */
    select?: servicioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: servicioInclude | null
    /**
     * The data needed to update a servicio.
     */
    data: XOR<servicioUpdateInput, servicioUncheckedUpdateInput>
    /**
     * Choose, which servicio to update.
     */
    where: servicioWhereUniqueInput
  }


  /**
   * servicio updateMany
   */
  export type servicioUpdateManyArgs = {
    /**
     * The data used to update servicios.
     */
    data: XOR<servicioUpdateManyMutationInput, servicioUncheckedUpdateManyInput>
    /**
     * Filter which servicios to update
     */
    where?: servicioWhereInput
  }


  /**
   * servicio upsert
   */
  export type servicioUpsertArgs = {
    /**
     * Select specific fields to fetch from the servicio
     */
    select?: servicioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: servicioInclude | null
    /**
     * The filter to search for the servicio to update in case it exists.
     */
    where: servicioWhereUniqueInput
    /**
     * In case the servicio found by the `where` argument doesn't exist, create a new servicio with this data.
     */
    create: XOR<servicioCreateInput, servicioUncheckedCreateInput>
    /**
     * In case the servicio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<servicioUpdateInput, servicioUncheckedUpdateInput>
  }


  /**
   * servicio delete
   */
  export type servicioDeleteArgs = {
    /**
     * Select specific fields to fetch from the servicio
     */
    select?: servicioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: servicioInclude | null
    /**
     * Filter which servicio to delete.
     */
    where: servicioWhereUniqueInput
  }


  /**
   * servicio deleteMany
   */
  export type servicioDeleteManyArgs = {
    /**
     * Filter which servicios to delete
     */
    where?: servicioWhereInput
  }


  /**
   * servicio without action
   */
  export type servicioArgs = {
    /**
     * Select specific fields to fetch from the servicio
     */
    select?: servicioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: servicioInclude | null
  }



  /**
   * Model turno
   */


  export type AggregateTurno = {
    _count: TurnoCountAggregateOutputType | null
    _avg: TurnoAvgAggregateOutputType | null
    _sum: TurnoSumAggregateOutputType | null
    _min: TurnoMinAggregateOutputType | null
    _max: TurnoMaxAggregateOutputType | null
  }

  export type TurnoAvgAggregateOutputType = {
    id: number | null
  }

  export type TurnoSumAggregateOutputType = {
    id: number | null
  }

  export type TurnoMinAggregateOutputType = {
    id: number | null
    fecha: Date | null
    quien: string | null
  }

  export type TurnoMaxAggregateOutputType = {
    id: number | null
    fecha: Date | null
    quien: string | null
  }

  export type TurnoCountAggregateOutputType = {
    id: number
    fecha: number
    quien: number
    _all: number
  }


  export type TurnoAvgAggregateInputType = {
    id?: true
  }

  export type TurnoSumAggregateInputType = {
    id?: true
  }

  export type TurnoMinAggregateInputType = {
    id?: true
    fecha?: true
    quien?: true
  }

  export type TurnoMaxAggregateInputType = {
    id?: true
    fecha?: true
    quien?: true
  }

  export type TurnoCountAggregateInputType = {
    id?: true
    fecha?: true
    quien?: true
    _all?: true
  }

  export type TurnoAggregateArgs = {
    /**
     * Filter which turno to aggregate.
     */
    where?: turnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of turnos to fetch.
     */
    orderBy?: Enumerable<turnoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: turnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` turnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` turnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned turnos
    **/
    _count?: true | TurnoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TurnoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TurnoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TurnoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TurnoMaxAggregateInputType
  }

  export type GetTurnoAggregateType<T extends TurnoAggregateArgs> = {
        [P in keyof T & keyof AggregateTurno]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTurno[P]>
      : GetScalarType<T[P], AggregateTurno[P]>
  }




  export type TurnoGroupByArgs = {
    where?: turnoWhereInput
    orderBy?: Enumerable<turnoOrderByWithAggregationInput>
    by: TurnoScalarFieldEnum[]
    having?: turnoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TurnoCountAggregateInputType | true
    _avg?: TurnoAvgAggregateInputType
    _sum?: TurnoSumAggregateInputType
    _min?: TurnoMinAggregateInputType
    _max?: TurnoMaxAggregateInputType
  }


  export type TurnoGroupByOutputType = {
    id: number
    fecha: Date
    quien: string
    _count: TurnoCountAggregateOutputType | null
    _avg: TurnoAvgAggregateOutputType | null
    _sum: TurnoSumAggregateOutputType | null
    _min: TurnoMinAggregateOutputType | null
    _max: TurnoMaxAggregateOutputType | null
  }

  type GetTurnoGroupByPayload<T extends TurnoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TurnoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TurnoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TurnoGroupByOutputType[P]>
            : GetScalarType<T[P], TurnoGroupByOutputType[P]>
        }
      >
    >


  export type turnoSelect = {
    id?: boolean
    fecha?: boolean
    quien?: boolean
  }


  export type turnoGetPayload<S extends boolean | null | undefined | turnoArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? turno :
    S extends undefined ? never :
    S extends { include: any } & (turnoArgs | turnoFindManyArgs)
    ? turno 
    : S extends { select: any } & (turnoArgs | turnoFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof turno ? turno[P] : never
  } 
      : turno


  type turnoCountArgs = 
    Omit<turnoFindManyArgs, 'select' | 'include'> & {
      select?: TurnoCountAggregateInputType | true
    }

  export interface turnoDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Turno that matches the filter.
     * @param {turnoFindUniqueArgs} args - Arguments to find a Turno
     * @example
     * // Get one Turno
     * const turno = await prisma.turno.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends turnoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, turnoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'turno'> extends True ? Prisma__turnoClient<turnoGetPayload<T>> : Prisma__turnoClient<turnoGetPayload<T> | null, null>

    /**
     * Find one Turno that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {turnoFindUniqueOrThrowArgs} args - Arguments to find a Turno
     * @example
     * // Get one Turno
     * const turno = await prisma.turno.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends turnoFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, turnoFindUniqueOrThrowArgs>
    ): Prisma__turnoClient<turnoGetPayload<T>>

    /**
     * Find the first Turno that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {turnoFindFirstArgs} args - Arguments to find a Turno
     * @example
     * // Get one Turno
     * const turno = await prisma.turno.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends turnoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, turnoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'turno'> extends True ? Prisma__turnoClient<turnoGetPayload<T>> : Prisma__turnoClient<turnoGetPayload<T> | null, null>

    /**
     * Find the first Turno that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {turnoFindFirstOrThrowArgs} args - Arguments to find a Turno
     * @example
     * // Get one Turno
     * const turno = await prisma.turno.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends turnoFindFirstOrThrowArgs>(
      args?: SelectSubset<T, turnoFindFirstOrThrowArgs>
    ): Prisma__turnoClient<turnoGetPayload<T>>

    /**
     * Find zero or more Turnos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {turnoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Turnos
     * const turnos = await prisma.turno.findMany()
     * 
     * // Get first 10 Turnos
     * const turnos = await prisma.turno.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const turnoWithIdOnly = await prisma.turno.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends turnoFindManyArgs>(
      args?: SelectSubset<T, turnoFindManyArgs>
    ): Prisma.PrismaPromise<Array<turnoGetPayload<T>>>

    /**
     * Create a Turno.
     * @param {turnoCreateArgs} args - Arguments to create a Turno.
     * @example
     * // Create one Turno
     * const Turno = await prisma.turno.create({
     *   data: {
     *     // ... data to create a Turno
     *   }
     * })
     * 
    **/
    create<T extends turnoCreateArgs>(
      args: SelectSubset<T, turnoCreateArgs>
    ): Prisma__turnoClient<turnoGetPayload<T>>

    /**
     * Create many Turnos.
     *     @param {turnoCreateManyArgs} args - Arguments to create many Turnos.
     *     @example
     *     // Create many Turnos
     *     const turno = await prisma.turno.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends turnoCreateManyArgs>(
      args?: SelectSubset<T, turnoCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Turno.
     * @param {turnoDeleteArgs} args - Arguments to delete one Turno.
     * @example
     * // Delete one Turno
     * const Turno = await prisma.turno.delete({
     *   where: {
     *     // ... filter to delete one Turno
     *   }
     * })
     * 
    **/
    delete<T extends turnoDeleteArgs>(
      args: SelectSubset<T, turnoDeleteArgs>
    ): Prisma__turnoClient<turnoGetPayload<T>>

    /**
     * Update one Turno.
     * @param {turnoUpdateArgs} args - Arguments to update one Turno.
     * @example
     * // Update one Turno
     * const turno = await prisma.turno.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends turnoUpdateArgs>(
      args: SelectSubset<T, turnoUpdateArgs>
    ): Prisma__turnoClient<turnoGetPayload<T>>

    /**
     * Delete zero or more Turnos.
     * @param {turnoDeleteManyArgs} args - Arguments to filter Turnos to delete.
     * @example
     * // Delete a few Turnos
     * const { count } = await prisma.turno.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends turnoDeleteManyArgs>(
      args?: SelectSubset<T, turnoDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Turnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {turnoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Turnos
     * const turno = await prisma.turno.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends turnoUpdateManyArgs>(
      args: SelectSubset<T, turnoUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Turno.
     * @param {turnoUpsertArgs} args - Arguments to update or create a Turno.
     * @example
     * // Update or create a Turno
     * const turno = await prisma.turno.upsert({
     *   create: {
     *     // ... data to create a Turno
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Turno we want to update
     *   }
     * })
    **/
    upsert<T extends turnoUpsertArgs>(
      args: SelectSubset<T, turnoUpsertArgs>
    ): Prisma__turnoClient<turnoGetPayload<T>>

    /**
     * Count the number of Turnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {turnoCountArgs} args - Arguments to filter Turnos to count.
     * @example
     * // Count the number of Turnos
     * const count = await prisma.turno.count({
     *   where: {
     *     // ... the filter for the Turnos we want to count
     *   }
     * })
    **/
    count<T extends turnoCountArgs>(
      args?: Subset<T, turnoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TurnoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Turno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TurnoAggregateArgs>(args: Subset<T, TurnoAggregateArgs>): Prisma.PrismaPromise<GetTurnoAggregateType<T>>

    /**
     * Group by Turno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TurnoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TurnoGroupByArgs['orderBy'] }
        : { orderBy?: TurnoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TurnoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTurnoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for turno.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__turnoClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * turno base type for findUnique actions
   */
  export type turnoFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the turno
     */
    select?: turnoSelect | null
    /**
     * Filter, which turno to fetch.
     */
    where: turnoWhereUniqueInput
  }

  /**
   * turno findUnique
   */
  export interface turnoFindUniqueArgs extends turnoFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * turno findUniqueOrThrow
   */
  export type turnoFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the turno
     */
    select?: turnoSelect | null
    /**
     * Filter, which turno to fetch.
     */
    where: turnoWhereUniqueInput
  }


  /**
   * turno base type for findFirst actions
   */
  export type turnoFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the turno
     */
    select?: turnoSelect | null
    /**
     * Filter, which turno to fetch.
     */
    where?: turnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of turnos to fetch.
     */
    orderBy?: Enumerable<turnoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for turnos.
     */
    cursor?: turnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` turnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` turnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of turnos.
     */
    distinct?: Enumerable<TurnoScalarFieldEnum>
  }

  /**
   * turno findFirst
   */
  export interface turnoFindFirstArgs extends turnoFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * turno findFirstOrThrow
   */
  export type turnoFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the turno
     */
    select?: turnoSelect | null
    /**
     * Filter, which turno to fetch.
     */
    where?: turnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of turnos to fetch.
     */
    orderBy?: Enumerable<turnoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for turnos.
     */
    cursor?: turnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` turnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` turnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of turnos.
     */
    distinct?: Enumerable<TurnoScalarFieldEnum>
  }


  /**
   * turno findMany
   */
  export type turnoFindManyArgs = {
    /**
     * Select specific fields to fetch from the turno
     */
    select?: turnoSelect | null
    /**
     * Filter, which turnos to fetch.
     */
    where?: turnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of turnos to fetch.
     */
    orderBy?: Enumerable<turnoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing turnos.
     */
    cursor?: turnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` turnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` turnos.
     */
    skip?: number
    distinct?: Enumerable<TurnoScalarFieldEnum>
  }


  /**
   * turno create
   */
  export type turnoCreateArgs = {
    /**
     * Select specific fields to fetch from the turno
     */
    select?: turnoSelect | null
    /**
     * The data needed to create a turno.
     */
    data: XOR<turnoCreateInput, turnoUncheckedCreateInput>
  }


  /**
   * turno createMany
   */
  export type turnoCreateManyArgs = {
    /**
     * The data used to create many turnos.
     */
    data: Enumerable<turnoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * turno update
   */
  export type turnoUpdateArgs = {
    /**
     * Select specific fields to fetch from the turno
     */
    select?: turnoSelect | null
    /**
     * The data needed to update a turno.
     */
    data: XOR<turnoUpdateInput, turnoUncheckedUpdateInput>
    /**
     * Choose, which turno to update.
     */
    where: turnoWhereUniqueInput
  }


  /**
   * turno updateMany
   */
  export type turnoUpdateManyArgs = {
    /**
     * The data used to update turnos.
     */
    data: XOR<turnoUpdateManyMutationInput, turnoUncheckedUpdateManyInput>
    /**
     * Filter which turnos to update
     */
    where?: turnoWhereInput
  }


  /**
   * turno upsert
   */
  export type turnoUpsertArgs = {
    /**
     * Select specific fields to fetch from the turno
     */
    select?: turnoSelect | null
    /**
     * The filter to search for the turno to update in case it exists.
     */
    where: turnoWhereUniqueInput
    /**
     * In case the turno found by the `where` argument doesn't exist, create a new turno with this data.
     */
    create: XOR<turnoCreateInput, turnoUncheckedCreateInput>
    /**
     * In case the turno was found with the provided `where` argument, update it with this data.
     */
    update: XOR<turnoUpdateInput, turnoUncheckedUpdateInput>
  }


  /**
   * turno delete
   */
  export type turnoDeleteArgs = {
    /**
     * Select specific fields to fetch from the turno
     */
    select?: turnoSelect | null
    /**
     * Filter which turno to delete.
     */
    where: turnoWhereUniqueInput
  }


  /**
   * turno deleteMany
   */
  export type turnoDeleteManyArgs = {
    /**
     * Filter which turnos to delete
     */
    where?: turnoWhereInput
  }


  /**
   * turno without action
   */
  export type turnoArgs = {
    /**
     * Select specific fields to fetch from the turno
     */
    select?: turnoSelect | null
  }



  /**
   * Model agenda
   */


  export type AggregateAgenda = {
    _count: AgendaCountAggregateOutputType | null
    _avg: AgendaAvgAggregateOutputType | null
    _sum: AgendaSumAggregateOutputType | null
    _min: AgendaMinAggregateOutputType | null
    _max: AgendaMaxAggregateOutputType | null
  }

  export type AgendaAvgAggregateOutputType = {
    id: number | null
    tipoagendaId: number | null
  }

  export type AgendaSumAggregateOutputType = {
    id: number | null
    tipoagendaId: number | null
  }

  export type AgendaMinAggregateOutputType = {
    id: number | null
    fecha: Date | null
    tipoagendaId: number | null
    observacion: string | null
  }

  export type AgendaMaxAggregateOutputType = {
    id: number | null
    fecha: Date | null
    tipoagendaId: number | null
    observacion: string | null
  }

  export type AgendaCountAggregateOutputType = {
    id: number
    fecha: number
    tipoagendaId: number
    observacion: number
    _all: number
  }


  export type AgendaAvgAggregateInputType = {
    id?: true
    tipoagendaId?: true
  }

  export type AgendaSumAggregateInputType = {
    id?: true
    tipoagendaId?: true
  }

  export type AgendaMinAggregateInputType = {
    id?: true
    fecha?: true
    tipoagendaId?: true
    observacion?: true
  }

  export type AgendaMaxAggregateInputType = {
    id?: true
    fecha?: true
    tipoagendaId?: true
    observacion?: true
  }

  export type AgendaCountAggregateInputType = {
    id?: true
    fecha?: true
    tipoagendaId?: true
    observacion?: true
    _all?: true
  }

  export type AgendaAggregateArgs = {
    /**
     * Filter which agenda to aggregate.
     */
    where?: agendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agenda to fetch.
     */
    orderBy?: Enumerable<agendaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: agendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agenda.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned agenda
    **/
    _count?: true | AgendaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgendaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgendaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgendaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgendaMaxAggregateInputType
  }

  export type GetAgendaAggregateType<T extends AgendaAggregateArgs> = {
        [P in keyof T & keyof AggregateAgenda]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgenda[P]>
      : GetScalarType<T[P], AggregateAgenda[P]>
  }




  export type AgendaGroupByArgs = {
    where?: agendaWhereInput
    orderBy?: Enumerable<agendaOrderByWithAggregationInput>
    by: AgendaScalarFieldEnum[]
    having?: agendaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgendaCountAggregateInputType | true
    _avg?: AgendaAvgAggregateInputType
    _sum?: AgendaSumAggregateInputType
    _min?: AgendaMinAggregateInputType
    _max?: AgendaMaxAggregateInputType
  }


  export type AgendaGroupByOutputType = {
    id: number
    fecha: Date
    tipoagendaId: number
    observacion: string
    _count: AgendaCountAggregateOutputType | null
    _avg: AgendaAvgAggregateOutputType | null
    _sum: AgendaSumAggregateOutputType | null
    _min: AgendaMinAggregateOutputType | null
    _max: AgendaMaxAggregateOutputType | null
  }

  type GetAgendaGroupByPayload<T extends AgendaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AgendaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgendaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgendaGroupByOutputType[P]>
            : GetScalarType<T[P], AgendaGroupByOutputType[P]>
        }
      >
    >


  export type agendaSelect = {
    id?: boolean
    fecha?: boolean
    tipoagendaId?: boolean
    observacion?: boolean
    tipo?: boolean | tipoagendaArgs
  }


  export type agendaInclude = {
    tipo?: boolean | tipoagendaArgs
  }

  export type agendaGetPayload<S extends boolean | null | undefined | agendaArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? agenda :
    S extends undefined ? never :
    S extends { include: any } & (agendaArgs | agendaFindManyArgs)
    ? agenda  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'tipo' ? tipoagendaGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (agendaArgs | agendaFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'tipo' ? tipoagendaGetPayload<S['select'][P]> :  P extends keyof agenda ? agenda[P] : never
  } 
      : agenda


  type agendaCountArgs = 
    Omit<agendaFindManyArgs, 'select' | 'include'> & {
      select?: AgendaCountAggregateInputType | true
    }

  export interface agendaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Agenda that matches the filter.
     * @param {agendaFindUniqueArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends agendaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, agendaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'agenda'> extends True ? Prisma__agendaClient<agendaGetPayload<T>> : Prisma__agendaClient<agendaGetPayload<T> | null, null>

    /**
     * Find one Agenda that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {agendaFindUniqueOrThrowArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends agendaFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, agendaFindUniqueOrThrowArgs>
    ): Prisma__agendaClient<agendaGetPayload<T>>

    /**
     * Find the first Agenda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendaFindFirstArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends agendaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, agendaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'agenda'> extends True ? Prisma__agendaClient<agendaGetPayload<T>> : Prisma__agendaClient<agendaGetPayload<T> | null, null>

    /**
     * Find the first Agenda that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendaFindFirstOrThrowArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends agendaFindFirstOrThrowArgs>(
      args?: SelectSubset<T, agendaFindFirstOrThrowArgs>
    ): Prisma__agendaClient<agendaGetPayload<T>>

    /**
     * Find zero or more Agenda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agenda
     * const agenda = await prisma.agenda.findMany()
     * 
     * // Get first 10 Agenda
     * const agenda = await prisma.agenda.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agendaWithIdOnly = await prisma.agenda.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends agendaFindManyArgs>(
      args?: SelectSubset<T, agendaFindManyArgs>
    ): Prisma.PrismaPromise<Array<agendaGetPayload<T>>>

    /**
     * Create a Agenda.
     * @param {agendaCreateArgs} args - Arguments to create a Agenda.
     * @example
     * // Create one Agenda
     * const Agenda = await prisma.agenda.create({
     *   data: {
     *     // ... data to create a Agenda
     *   }
     * })
     * 
    **/
    create<T extends agendaCreateArgs>(
      args: SelectSubset<T, agendaCreateArgs>
    ): Prisma__agendaClient<agendaGetPayload<T>>

    /**
     * Create many Agenda.
     *     @param {agendaCreateManyArgs} args - Arguments to create many Agenda.
     *     @example
     *     // Create many Agenda
     *     const agenda = await prisma.agenda.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends agendaCreateManyArgs>(
      args?: SelectSubset<T, agendaCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Agenda.
     * @param {agendaDeleteArgs} args - Arguments to delete one Agenda.
     * @example
     * // Delete one Agenda
     * const Agenda = await prisma.agenda.delete({
     *   where: {
     *     // ... filter to delete one Agenda
     *   }
     * })
     * 
    **/
    delete<T extends agendaDeleteArgs>(
      args: SelectSubset<T, agendaDeleteArgs>
    ): Prisma__agendaClient<agendaGetPayload<T>>

    /**
     * Update one Agenda.
     * @param {agendaUpdateArgs} args - Arguments to update one Agenda.
     * @example
     * // Update one Agenda
     * const agenda = await prisma.agenda.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends agendaUpdateArgs>(
      args: SelectSubset<T, agendaUpdateArgs>
    ): Prisma__agendaClient<agendaGetPayload<T>>

    /**
     * Delete zero or more Agenda.
     * @param {agendaDeleteManyArgs} args - Arguments to filter Agenda to delete.
     * @example
     * // Delete a few Agenda
     * const { count } = await prisma.agenda.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends agendaDeleteManyArgs>(
      args?: SelectSubset<T, agendaDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agenda
     * const agenda = await prisma.agenda.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends agendaUpdateManyArgs>(
      args: SelectSubset<T, agendaUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Agenda.
     * @param {agendaUpsertArgs} args - Arguments to update or create a Agenda.
     * @example
     * // Update or create a Agenda
     * const agenda = await prisma.agenda.upsert({
     *   create: {
     *     // ... data to create a Agenda
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agenda we want to update
     *   }
     * })
    **/
    upsert<T extends agendaUpsertArgs>(
      args: SelectSubset<T, agendaUpsertArgs>
    ): Prisma__agendaClient<agendaGetPayload<T>>

    /**
     * Count the number of Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendaCountArgs} args - Arguments to filter Agenda to count.
     * @example
     * // Count the number of Agenda
     * const count = await prisma.agenda.count({
     *   where: {
     *     // ... the filter for the Agenda we want to count
     *   }
     * })
    **/
    count<T extends agendaCountArgs>(
      args?: Subset<T, agendaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgendaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgendaAggregateArgs>(args: Subset<T, AgendaAggregateArgs>): Prisma.PrismaPromise<GetAgendaAggregateType<T>>

    /**
     * Group by Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgendaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgendaGroupByArgs['orderBy'] }
        : { orderBy?: AgendaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgendaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgendaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for agenda.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__agendaClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    tipo<T extends tipoagendaArgs= {}>(args?: Subset<T, tipoagendaArgs>): Prisma__tipoagendaClient<tipoagendaGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * agenda base type for findUnique actions
   */
  export type agendaFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agendaInclude | null
    /**
     * Filter, which agenda to fetch.
     */
    where: agendaWhereUniqueInput
  }

  /**
   * agenda findUnique
   */
  export interface agendaFindUniqueArgs extends agendaFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * agenda findUniqueOrThrow
   */
  export type agendaFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agendaInclude | null
    /**
     * Filter, which agenda to fetch.
     */
    where: agendaWhereUniqueInput
  }


  /**
   * agenda base type for findFirst actions
   */
  export type agendaFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agendaInclude | null
    /**
     * Filter, which agenda to fetch.
     */
    where?: agendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agenda to fetch.
     */
    orderBy?: Enumerable<agendaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for agenda.
     */
    cursor?: agendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agenda.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of agenda.
     */
    distinct?: Enumerable<AgendaScalarFieldEnum>
  }

  /**
   * agenda findFirst
   */
  export interface agendaFindFirstArgs extends agendaFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * agenda findFirstOrThrow
   */
  export type agendaFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agendaInclude | null
    /**
     * Filter, which agenda to fetch.
     */
    where?: agendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agenda to fetch.
     */
    orderBy?: Enumerable<agendaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for agenda.
     */
    cursor?: agendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agenda.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of agenda.
     */
    distinct?: Enumerable<AgendaScalarFieldEnum>
  }


  /**
   * agenda findMany
   */
  export type agendaFindManyArgs = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agendaInclude | null
    /**
     * Filter, which agenda to fetch.
     */
    where?: agendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agenda to fetch.
     */
    orderBy?: Enumerable<agendaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing agenda.
     */
    cursor?: agendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agenda.
     */
    skip?: number
    distinct?: Enumerable<AgendaScalarFieldEnum>
  }


  /**
   * agenda create
   */
  export type agendaCreateArgs = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agendaInclude | null
    /**
     * The data needed to create a agenda.
     */
    data: XOR<agendaCreateInput, agendaUncheckedCreateInput>
  }


  /**
   * agenda createMany
   */
  export type agendaCreateManyArgs = {
    /**
     * The data used to create many agenda.
     */
    data: Enumerable<agendaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * agenda update
   */
  export type agendaUpdateArgs = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agendaInclude | null
    /**
     * The data needed to update a agenda.
     */
    data: XOR<agendaUpdateInput, agendaUncheckedUpdateInput>
    /**
     * Choose, which agenda to update.
     */
    where: agendaWhereUniqueInput
  }


  /**
   * agenda updateMany
   */
  export type agendaUpdateManyArgs = {
    /**
     * The data used to update agenda.
     */
    data: XOR<agendaUpdateManyMutationInput, agendaUncheckedUpdateManyInput>
    /**
     * Filter which agenda to update
     */
    where?: agendaWhereInput
  }


  /**
   * agenda upsert
   */
  export type agendaUpsertArgs = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agendaInclude | null
    /**
     * The filter to search for the agenda to update in case it exists.
     */
    where: agendaWhereUniqueInput
    /**
     * In case the agenda found by the `where` argument doesn't exist, create a new agenda with this data.
     */
    create: XOR<agendaCreateInput, agendaUncheckedCreateInput>
    /**
     * In case the agenda was found with the provided `where` argument, update it with this data.
     */
    update: XOR<agendaUpdateInput, agendaUncheckedUpdateInput>
  }


  /**
   * agenda delete
   */
  export type agendaDeleteArgs = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agendaInclude | null
    /**
     * Filter which agenda to delete.
     */
    where: agendaWhereUniqueInput
  }


  /**
   * agenda deleteMany
   */
  export type agendaDeleteManyArgs = {
    /**
     * Filter which agenda to delete
     */
    where?: agendaWhereInput
  }


  /**
   * agenda without action
   */
  export type agendaArgs = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agendaInclude | null
  }



  /**
   * Model tipoagenda
   */


  export type AggregateTipoagenda = {
    _count: TipoagendaCountAggregateOutputType | null
    _avg: TipoagendaAvgAggregateOutputType | null
    _sum: TipoagendaSumAggregateOutputType | null
    _min: TipoagendaMinAggregateOutputType | null
    _max: TipoagendaMaxAggregateOutputType | null
  }

  export type TipoagendaAvgAggregateOutputType = {
    id: number | null
  }

  export type TipoagendaSumAggregateOutputType = {
    id: number | null
  }

  export type TipoagendaMinAggregateOutputType = {
    id: number | null
    descripcion: string | null
    color: string | null
  }

  export type TipoagendaMaxAggregateOutputType = {
    id: number | null
    descripcion: string | null
    color: string | null
  }

  export type TipoagendaCountAggregateOutputType = {
    id: number
    descripcion: number
    color: number
    _all: number
  }


  export type TipoagendaAvgAggregateInputType = {
    id?: true
  }

  export type TipoagendaSumAggregateInputType = {
    id?: true
  }

  export type TipoagendaMinAggregateInputType = {
    id?: true
    descripcion?: true
    color?: true
  }

  export type TipoagendaMaxAggregateInputType = {
    id?: true
    descripcion?: true
    color?: true
  }

  export type TipoagendaCountAggregateInputType = {
    id?: true
    descripcion?: true
    color?: true
    _all?: true
  }

  export type TipoagendaAggregateArgs = {
    /**
     * Filter which tipoagenda to aggregate.
     */
    where?: tipoagendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipoagenda to fetch.
     */
    orderBy?: Enumerable<tipoagendaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tipoagendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipoagenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipoagenda.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tipoagenda
    **/
    _count?: true | TipoagendaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoagendaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoagendaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoagendaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoagendaMaxAggregateInputType
  }

  export type GetTipoagendaAggregateType<T extends TipoagendaAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoagenda]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoagenda[P]>
      : GetScalarType<T[P], AggregateTipoagenda[P]>
  }




  export type TipoagendaGroupByArgs = {
    where?: tipoagendaWhereInput
    orderBy?: Enumerable<tipoagendaOrderByWithAggregationInput>
    by: TipoagendaScalarFieldEnum[]
    having?: tipoagendaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoagendaCountAggregateInputType | true
    _avg?: TipoagendaAvgAggregateInputType
    _sum?: TipoagendaSumAggregateInputType
    _min?: TipoagendaMinAggregateInputType
    _max?: TipoagendaMaxAggregateInputType
  }


  export type TipoagendaGroupByOutputType = {
    id: number
    descripcion: string
    color: string
    _count: TipoagendaCountAggregateOutputType | null
    _avg: TipoagendaAvgAggregateOutputType | null
    _sum: TipoagendaSumAggregateOutputType | null
    _min: TipoagendaMinAggregateOutputType | null
    _max: TipoagendaMaxAggregateOutputType | null
  }

  type GetTipoagendaGroupByPayload<T extends TipoagendaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TipoagendaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoagendaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoagendaGroupByOutputType[P]>
            : GetScalarType<T[P], TipoagendaGroupByOutputType[P]>
        }
      >
    >


  export type tipoagendaSelect = {
    id?: boolean
    descripcion?: boolean
    color?: boolean
    agendas?: boolean | tipoagenda$agendasArgs
    _count?: boolean | TipoagendaCountOutputTypeArgs
  }


  export type tipoagendaInclude = {
    agendas?: boolean | tipoagenda$agendasArgs
    _count?: boolean | TipoagendaCountOutputTypeArgs
  }

  export type tipoagendaGetPayload<S extends boolean | null | undefined | tipoagendaArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? tipoagenda :
    S extends undefined ? never :
    S extends { include: any } & (tipoagendaArgs | tipoagendaFindManyArgs)
    ? tipoagenda  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'agendas' ? Array < agendaGetPayload<S['include'][P]>>  :
        P extends '_count' ? TipoagendaCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (tipoagendaArgs | tipoagendaFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'agendas' ? Array < agendaGetPayload<S['select'][P]>>  :
        P extends '_count' ? TipoagendaCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof tipoagenda ? tipoagenda[P] : never
  } 
      : tipoagenda


  type tipoagendaCountArgs = 
    Omit<tipoagendaFindManyArgs, 'select' | 'include'> & {
      select?: TipoagendaCountAggregateInputType | true
    }

  export interface tipoagendaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Tipoagenda that matches the filter.
     * @param {tipoagendaFindUniqueArgs} args - Arguments to find a Tipoagenda
     * @example
     * // Get one Tipoagenda
     * const tipoagenda = await prisma.tipoagenda.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tipoagendaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, tipoagendaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'tipoagenda'> extends True ? Prisma__tipoagendaClient<tipoagendaGetPayload<T>> : Prisma__tipoagendaClient<tipoagendaGetPayload<T> | null, null>

    /**
     * Find one Tipoagenda that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tipoagendaFindUniqueOrThrowArgs} args - Arguments to find a Tipoagenda
     * @example
     * // Get one Tipoagenda
     * const tipoagenda = await prisma.tipoagenda.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tipoagendaFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, tipoagendaFindUniqueOrThrowArgs>
    ): Prisma__tipoagendaClient<tipoagendaGetPayload<T>>

    /**
     * Find the first Tipoagenda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipoagendaFindFirstArgs} args - Arguments to find a Tipoagenda
     * @example
     * // Get one Tipoagenda
     * const tipoagenda = await prisma.tipoagenda.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tipoagendaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, tipoagendaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'tipoagenda'> extends True ? Prisma__tipoagendaClient<tipoagendaGetPayload<T>> : Prisma__tipoagendaClient<tipoagendaGetPayload<T> | null, null>

    /**
     * Find the first Tipoagenda that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipoagendaFindFirstOrThrowArgs} args - Arguments to find a Tipoagenda
     * @example
     * // Get one Tipoagenda
     * const tipoagenda = await prisma.tipoagenda.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tipoagendaFindFirstOrThrowArgs>(
      args?: SelectSubset<T, tipoagendaFindFirstOrThrowArgs>
    ): Prisma__tipoagendaClient<tipoagendaGetPayload<T>>

    /**
     * Find zero or more Tipoagenda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipoagendaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tipoagenda
     * const tipoagenda = await prisma.tipoagenda.findMany()
     * 
     * // Get first 10 Tipoagenda
     * const tipoagenda = await prisma.tipoagenda.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipoagendaWithIdOnly = await prisma.tipoagenda.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends tipoagendaFindManyArgs>(
      args?: SelectSubset<T, tipoagendaFindManyArgs>
    ): Prisma.PrismaPromise<Array<tipoagendaGetPayload<T>>>

    /**
     * Create a Tipoagenda.
     * @param {tipoagendaCreateArgs} args - Arguments to create a Tipoagenda.
     * @example
     * // Create one Tipoagenda
     * const Tipoagenda = await prisma.tipoagenda.create({
     *   data: {
     *     // ... data to create a Tipoagenda
     *   }
     * })
     * 
    **/
    create<T extends tipoagendaCreateArgs>(
      args: SelectSubset<T, tipoagendaCreateArgs>
    ): Prisma__tipoagendaClient<tipoagendaGetPayload<T>>

    /**
     * Create many Tipoagenda.
     *     @param {tipoagendaCreateManyArgs} args - Arguments to create many Tipoagenda.
     *     @example
     *     // Create many Tipoagenda
     *     const tipoagenda = await prisma.tipoagenda.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tipoagendaCreateManyArgs>(
      args?: SelectSubset<T, tipoagendaCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tipoagenda.
     * @param {tipoagendaDeleteArgs} args - Arguments to delete one Tipoagenda.
     * @example
     * // Delete one Tipoagenda
     * const Tipoagenda = await prisma.tipoagenda.delete({
     *   where: {
     *     // ... filter to delete one Tipoagenda
     *   }
     * })
     * 
    **/
    delete<T extends tipoagendaDeleteArgs>(
      args: SelectSubset<T, tipoagendaDeleteArgs>
    ): Prisma__tipoagendaClient<tipoagendaGetPayload<T>>

    /**
     * Update one Tipoagenda.
     * @param {tipoagendaUpdateArgs} args - Arguments to update one Tipoagenda.
     * @example
     * // Update one Tipoagenda
     * const tipoagenda = await prisma.tipoagenda.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tipoagendaUpdateArgs>(
      args: SelectSubset<T, tipoagendaUpdateArgs>
    ): Prisma__tipoagendaClient<tipoagendaGetPayload<T>>

    /**
     * Delete zero or more Tipoagenda.
     * @param {tipoagendaDeleteManyArgs} args - Arguments to filter Tipoagenda to delete.
     * @example
     * // Delete a few Tipoagenda
     * const { count } = await prisma.tipoagenda.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tipoagendaDeleteManyArgs>(
      args?: SelectSubset<T, tipoagendaDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipoagenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipoagendaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tipoagenda
     * const tipoagenda = await prisma.tipoagenda.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tipoagendaUpdateManyArgs>(
      args: SelectSubset<T, tipoagendaUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tipoagenda.
     * @param {tipoagendaUpsertArgs} args - Arguments to update or create a Tipoagenda.
     * @example
     * // Update or create a Tipoagenda
     * const tipoagenda = await prisma.tipoagenda.upsert({
     *   create: {
     *     // ... data to create a Tipoagenda
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tipoagenda we want to update
     *   }
     * })
    **/
    upsert<T extends tipoagendaUpsertArgs>(
      args: SelectSubset<T, tipoagendaUpsertArgs>
    ): Prisma__tipoagendaClient<tipoagendaGetPayload<T>>

    /**
     * Count the number of Tipoagenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipoagendaCountArgs} args - Arguments to filter Tipoagenda to count.
     * @example
     * // Count the number of Tipoagenda
     * const count = await prisma.tipoagenda.count({
     *   where: {
     *     // ... the filter for the Tipoagenda we want to count
     *   }
     * })
    **/
    count<T extends tipoagendaCountArgs>(
      args?: Subset<T, tipoagendaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoagendaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tipoagenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoagendaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TipoagendaAggregateArgs>(args: Subset<T, TipoagendaAggregateArgs>): Prisma.PrismaPromise<GetTipoagendaAggregateType<T>>

    /**
     * Group by Tipoagenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoagendaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TipoagendaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoagendaGroupByArgs['orderBy'] }
        : { orderBy?: TipoagendaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TipoagendaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoagendaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for tipoagenda.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__tipoagendaClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    agendas<T extends tipoagenda$agendasArgs= {}>(args?: Subset<T, tipoagenda$agendasArgs>): Prisma.PrismaPromise<Array<agendaGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * tipoagenda base type for findUnique actions
   */
  export type tipoagendaFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the tipoagenda
     */
    select?: tipoagendaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipoagendaInclude | null
    /**
     * Filter, which tipoagenda to fetch.
     */
    where: tipoagendaWhereUniqueInput
  }

  /**
   * tipoagenda findUnique
   */
  export interface tipoagendaFindUniqueArgs extends tipoagendaFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tipoagenda findUniqueOrThrow
   */
  export type tipoagendaFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the tipoagenda
     */
    select?: tipoagendaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipoagendaInclude | null
    /**
     * Filter, which tipoagenda to fetch.
     */
    where: tipoagendaWhereUniqueInput
  }


  /**
   * tipoagenda base type for findFirst actions
   */
  export type tipoagendaFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the tipoagenda
     */
    select?: tipoagendaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipoagendaInclude | null
    /**
     * Filter, which tipoagenda to fetch.
     */
    where?: tipoagendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipoagenda to fetch.
     */
    orderBy?: Enumerable<tipoagendaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipoagenda.
     */
    cursor?: tipoagendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipoagenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipoagenda.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipoagenda.
     */
    distinct?: Enumerable<TipoagendaScalarFieldEnum>
  }

  /**
   * tipoagenda findFirst
   */
  export interface tipoagendaFindFirstArgs extends tipoagendaFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tipoagenda findFirstOrThrow
   */
  export type tipoagendaFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the tipoagenda
     */
    select?: tipoagendaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipoagendaInclude | null
    /**
     * Filter, which tipoagenda to fetch.
     */
    where?: tipoagendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipoagenda to fetch.
     */
    orderBy?: Enumerable<tipoagendaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipoagenda.
     */
    cursor?: tipoagendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipoagenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipoagenda.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipoagenda.
     */
    distinct?: Enumerable<TipoagendaScalarFieldEnum>
  }


  /**
   * tipoagenda findMany
   */
  export type tipoagendaFindManyArgs = {
    /**
     * Select specific fields to fetch from the tipoagenda
     */
    select?: tipoagendaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipoagendaInclude | null
    /**
     * Filter, which tipoagenda to fetch.
     */
    where?: tipoagendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipoagenda to fetch.
     */
    orderBy?: Enumerable<tipoagendaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tipoagenda.
     */
    cursor?: tipoagendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipoagenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipoagenda.
     */
    skip?: number
    distinct?: Enumerable<TipoagendaScalarFieldEnum>
  }


  /**
   * tipoagenda create
   */
  export type tipoagendaCreateArgs = {
    /**
     * Select specific fields to fetch from the tipoagenda
     */
    select?: tipoagendaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipoagendaInclude | null
    /**
     * The data needed to create a tipoagenda.
     */
    data: XOR<tipoagendaCreateInput, tipoagendaUncheckedCreateInput>
  }


  /**
   * tipoagenda createMany
   */
  export type tipoagendaCreateManyArgs = {
    /**
     * The data used to create many tipoagenda.
     */
    data: Enumerable<tipoagendaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * tipoagenda update
   */
  export type tipoagendaUpdateArgs = {
    /**
     * Select specific fields to fetch from the tipoagenda
     */
    select?: tipoagendaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipoagendaInclude | null
    /**
     * The data needed to update a tipoagenda.
     */
    data: XOR<tipoagendaUpdateInput, tipoagendaUncheckedUpdateInput>
    /**
     * Choose, which tipoagenda to update.
     */
    where: tipoagendaWhereUniqueInput
  }


  /**
   * tipoagenda updateMany
   */
  export type tipoagendaUpdateManyArgs = {
    /**
     * The data used to update tipoagenda.
     */
    data: XOR<tipoagendaUpdateManyMutationInput, tipoagendaUncheckedUpdateManyInput>
    /**
     * Filter which tipoagenda to update
     */
    where?: tipoagendaWhereInput
  }


  /**
   * tipoagenda upsert
   */
  export type tipoagendaUpsertArgs = {
    /**
     * Select specific fields to fetch from the tipoagenda
     */
    select?: tipoagendaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipoagendaInclude | null
    /**
     * The filter to search for the tipoagenda to update in case it exists.
     */
    where: tipoagendaWhereUniqueInput
    /**
     * In case the tipoagenda found by the `where` argument doesn't exist, create a new tipoagenda with this data.
     */
    create: XOR<tipoagendaCreateInput, tipoagendaUncheckedCreateInput>
    /**
     * In case the tipoagenda was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tipoagendaUpdateInput, tipoagendaUncheckedUpdateInput>
  }


  /**
   * tipoagenda delete
   */
  export type tipoagendaDeleteArgs = {
    /**
     * Select specific fields to fetch from the tipoagenda
     */
    select?: tipoagendaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipoagendaInclude | null
    /**
     * Filter which tipoagenda to delete.
     */
    where: tipoagendaWhereUniqueInput
  }


  /**
   * tipoagenda deleteMany
   */
  export type tipoagendaDeleteManyArgs = {
    /**
     * Filter which tipoagenda to delete
     */
    where?: tipoagendaWhereInput
  }


  /**
   * tipoagenda.agendas
   */
  export type tipoagenda$agendasArgs = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agendaInclude | null
    where?: agendaWhereInput
    orderBy?: Enumerable<agendaOrderByWithRelationInput>
    cursor?: agendaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AgendaScalarFieldEnum>
  }


  /**
   * tipoagenda without action
   */
  export type tipoagendaArgs = {
    /**
     * Select specific fields to fetch from the tipoagenda
     */
    select?: tipoagendaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipoagendaInclude | null
  }



  /**
   * Model gasto
   */


  export type AggregateGasto = {
    _count: GastoCountAggregateOutputType | null
    _avg: GastoAvgAggregateOutputType | null
    _sum: GastoSumAggregateOutputType | null
    _min: GastoMinAggregateOutputType | null
    _max: GastoMaxAggregateOutputType | null
  }

  export type GastoAvgAggregateOutputType = {
    id: number | null
    tipogastoId: number | null
    importe: Decimal | null
    servicioId: number | null
  }

  export type GastoSumAggregateOutputType = {
    id: number | null
    tipogastoId: number | null
    importe: Decimal | null
    servicioId: number | null
  }

  export type GastoMinAggregateOutputType = {
    id: number | null
    fecha: Date | null
    tipogastoId: number | null
    importe: Decimal | null
    observacion: string | null
    servicioId: number | null
    pendientecobro: boolean | null
  }

  export type GastoMaxAggregateOutputType = {
    id: number | null
    fecha: Date | null
    tipogastoId: number | null
    importe: Decimal | null
    observacion: string | null
    servicioId: number | null
    pendientecobro: boolean | null
  }

  export type GastoCountAggregateOutputType = {
    id: number
    fecha: number
    tipogastoId: number
    importe: number
    observacion: number
    servicioId: number
    pendientecobro: number
    _all: number
  }


  export type GastoAvgAggregateInputType = {
    id?: true
    tipogastoId?: true
    importe?: true
    servicioId?: true
  }

  export type GastoSumAggregateInputType = {
    id?: true
    tipogastoId?: true
    importe?: true
    servicioId?: true
  }

  export type GastoMinAggregateInputType = {
    id?: true
    fecha?: true
    tipogastoId?: true
    importe?: true
    observacion?: true
    servicioId?: true
    pendientecobro?: true
  }

  export type GastoMaxAggregateInputType = {
    id?: true
    fecha?: true
    tipogastoId?: true
    importe?: true
    observacion?: true
    servicioId?: true
    pendientecobro?: true
  }

  export type GastoCountAggregateInputType = {
    id?: true
    fecha?: true
    tipogastoId?: true
    importe?: true
    observacion?: true
    servicioId?: true
    pendientecobro?: true
    _all?: true
  }

  export type GastoAggregateArgs = {
    /**
     * Filter which gasto to aggregate.
     */
    where?: gastoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gastos to fetch.
     */
    orderBy?: Enumerable<gastoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: gastoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gastos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned gastos
    **/
    _count?: true | GastoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GastoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GastoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GastoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GastoMaxAggregateInputType
  }

  export type GetGastoAggregateType<T extends GastoAggregateArgs> = {
        [P in keyof T & keyof AggregateGasto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGasto[P]>
      : GetScalarType<T[P], AggregateGasto[P]>
  }




  export type GastoGroupByArgs = {
    where?: gastoWhereInput
    orderBy?: Enumerable<gastoOrderByWithAggregationInput>
    by: GastoScalarFieldEnum[]
    having?: gastoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GastoCountAggregateInputType | true
    _avg?: GastoAvgAggregateInputType
    _sum?: GastoSumAggregateInputType
    _min?: GastoMinAggregateInputType
    _max?: GastoMaxAggregateInputType
  }


  export type GastoGroupByOutputType = {
    id: number
    fecha: Date
    tipogastoId: number
    importe: Decimal
    observacion: string | null
    servicioId: number | null
    pendientecobro: boolean
    _count: GastoCountAggregateOutputType | null
    _avg: GastoAvgAggregateOutputType | null
    _sum: GastoSumAggregateOutputType | null
    _min: GastoMinAggregateOutputType | null
    _max: GastoMaxAggregateOutputType | null
  }

  type GetGastoGroupByPayload<T extends GastoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<GastoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GastoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GastoGroupByOutputType[P]>
            : GetScalarType<T[P], GastoGroupByOutputType[P]>
        }
      >
    >


  export type gastoSelect = {
    id?: boolean
    fecha?: boolean
    tipogastoId?: boolean
    importe?: boolean
    observacion?: boolean
    servicioId?: boolean
    pendientecobro?: boolean
    tipo?: boolean | tipogastoArgs
    servicio?: boolean | servicioArgs
  }


  export type gastoInclude = {
    tipo?: boolean | tipogastoArgs
    servicio?: boolean | servicioArgs
  }

  export type gastoGetPayload<S extends boolean | null | undefined | gastoArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? gasto :
    S extends undefined ? never :
    S extends { include: any } & (gastoArgs | gastoFindManyArgs)
    ? gasto  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'tipo' ? tipogastoGetPayload<S['include'][P]> :
        P extends 'servicio' ? servicioGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (gastoArgs | gastoFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'tipo' ? tipogastoGetPayload<S['select'][P]> :
        P extends 'servicio' ? servicioGetPayload<S['select'][P]> | null :  P extends keyof gasto ? gasto[P] : never
  } 
      : gasto


  type gastoCountArgs = 
    Omit<gastoFindManyArgs, 'select' | 'include'> & {
      select?: GastoCountAggregateInputType | true
    }

  export interface gastoDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Gasto that matches the filter.
     * @param {gastoFindUniqueArgs} args - Arguments to find a Gasto
     * @example
     * // Get one Gasto
     * const gasto = await prisma.gasto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends gastoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, gastoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'gasto'> extends True ? Prisma__gastoClient<gastoGetPayload<T>> : Prisma__gastoClient<gastoGetPayload<T> | null, null>

    /**
     * Find one Gasto that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {gastoFindUniqueOrThrowArgs} args - Arguments to find a Gasto
     * @example
     * // Get one Gasto
     * const gasto = await prisma.gasto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends gastoFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, gastoFindUniqueOrThrowArgs>
    ): Prisma__gastoClient<gastoGetPayload<T>>

    /**
     * Find the first Gasto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gastoFindFirstArgs} args - Arguments to find a Gasto
     * @example
     * // Get one Gasto
     * const gasto = await prisma.gasto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends gastoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, gastoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'gasto'> extends True ? Prisma__gastoClient<gastoGetPayload<T>> : Prisma__gastoClient<gastoGetPayload<T> | null, null>

    /**
     * Find the first Gasto that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gastoFindFirstOrThrowArgs} args - Arguments to find a Gasto
     * @example
     * // Get one Gasto
     * const gasto = await prisma.gasto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends gastoFindFirstOrThrowArgs>(
      args?: SelectSubset<T, gastoFindFirstOrThrowArgs>
    ): Prisma__gastoClient<gastoGetPayload<T>>

    /**
     * Find zero or more Gastos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gastoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gastos
     * const gastos = await prisma.gasto.findMany()
     * 
     * // Get first 10 Gastos
     * const gastos = await prisma.gasto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gastoWithIdOnly = await prisma.gasto.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends gastoFindManyArgs>(
      args?: SelectSubset<T, gastoFindManyArgs>
    ): Prisma.PrismaPromise<Array<gastoGetPayload<T>>>

    /**
     * Create a Gasto.
     * @param {gastoCreateArgs} args - Arguments to create a Gasto.
     * @example
     * // Create one Gasto
     * const Gasto = await prisma.gasto.create({
     *   data: {
     *     // ... data to create a Gasto
     *   }
     * })
     * 
    **/
    create<T extends gastoCreateArgs>(
      args: SelectSubset<T, gastoCreateArgs>
    ): Prisma__gastoClient<gastoGetPayload<T>>

    /**
     * Create many Gastos.
     *     @param {gastoCreateManyArgs} args - Arguments to create many Gastos.
     *     @example
     *     // Create many Gastos
     *     const gasto = await prisma.gasto.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends gastoCreateManyArgs>(
      args?: SelectSubset<T, gastoCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Gasto.
     * @param {gastoDeleteArgs} args - Arguments to delete one Gasto.
     * @example
     * // Delete one Gasto
     * const Gasto = await prisma.gasto.delete({
     *   where: {
     *     // ... filter to delete one Gasto
     *   }
     * })
     * 
    **/
    delete<T extends gastoDeleteArgs>(
      args: SelectSubset<T, gastoDeleteArgs>
    ): Prisma__gastoClient<gastoGetPayload<T>>

    /**
     * Update one Gasto.
     * @param {gastoUpdateArgs} args - Arguments to update one Gasto.
     * @example
     * // Update one Gasto
     * const gasto = await prisma.gasto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends gastoUpdateArgs>(
      args: SelectSubset<T, gastoUpdateArgs>
    ): Prisma__gastoClient<gastoGetPayload<T>>

    /**
     * Delete zero or more Gastos.
     * @param {gastoDeleteManyArgs} args - Arguments to filter Gastos to delete.
     * @example
     * // Delete a few Gastos
     * const { count } = await prisma.gasto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends gastoDeleteManyArgs>(
      args?: SelectSubset<T, gastoDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gastos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gastoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gastos
     * const gasto = await prisma.gasto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends gastoUpdateManyArgs>(
      args: SelectSubset<T, gastoUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Gasto.
     * @param {gastoUpsertArgs} args - Arguments to update or create a Gasto.
     * @example
     * // Update or create a Gasto
     * const gasto = await prisma.gasto.upsert({
     *   create: {
     *     // ... data to create a Gasto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gasto we want to update
     *   }
     * })
    **/
    upsert<T extends gastoUpsertArgs>(
      args: SelectSubset<T, gastoUpsertArgs>
    ): Prisma__gastoClient<gastoGetPayload<T>>

    /**
     * Count the number of Gastos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gastoCountArgs} args - Arguments to filter Gastos to count.
     * @example
     * // Count the number of Gastos
     * const count = await prisma.gasto.count({
     *   where: {
     *     // ... the filter for the Gastos we want to count
     *   }
     * })
    **/
    count<T extends gastoCountArgs>(
      args?: Subset<T, gastoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GastoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gasto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GastoAggregateArgs>(args: Subset<T, GastoAggregateArgs>): Prisma.PrismaPromise<GetGastoAggregateType<T>>

    /**
     * Group by Gasto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GastoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GastoGroupByArgs['orderBy'] }
        : { orderBy?: GastoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GastoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGastoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for gasto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__gastoClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    tipo<T extends tipogastoArgs= {}>(args?: Subset<T, tipogastoArgs>): Prisma__tipogastoClient<tipogastoGetPayload<T> | Null>;

    servicio<T extends servicioArgs= {}>(args?: Subset<T, servicioArgs>): Prisma__servicioClient<servicioGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * gasto base type for findUnique actions
   */
  export type gastoFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the gasto
     */
    select?: gastoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gastoInclude | null
    /**
     * Filter, which gasto to fetch.
     */
    where: gastoWhereUniqueInput
  }

  /**
   * gasto findUnique
   */
  export interface gastoFindUniqueArgs extends gastoFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * gasto findUniqueOrThrow
   */
  export type gastoFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the gasto
     */
    select?: gastoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gastoInclude | null
    /**
     * Filter, which gasto to fetch.
     */
    where: gastoWhereUniqueInput
  }


  /**
   * gasto base type for findFirst actions
   */
  export type gastoFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the gasto
     */
    select?: gastoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gastoInclude | null
    /**
     * Filter, which gasto to fetch.
     */
    where?: gastoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gastos to fetch.
     */
    orderBy?: Enumerable<gastoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gastos.
     */
    cursor?: gastoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gastos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gastos.
     */
    distinct?: Enumerable<GastoScalarFieldEnum>
  }

  /**
   * gasto findFirst
   */
  export interface gastoFindFirstArgs extends gastoFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * gasto findFirstOrThrow
   */
  export type gastoFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the gasto
     */
    select?: gastoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gastoInclude | null
    /**
     * Filter, which gasto to fetch.
     */
    where?: gastoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gastos to fetch.
     */
    orderBy?: Enumerable<gastoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gastos.
     */
    cursor?: gastoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gastos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gastos.
     */
    distinct?: Enumerable<GastoScalarFieldEnum>
  }


  /**
   * gasto findMany
   */
  export type gastoFindManyArgs = {
    /**
     * Select specific fields to fetch from the gasto
     */
    select?: gastoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gastoInclude | null
    /**
     * Filter, which gastos to fetch.
     */
    where?: gastoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gastos to fetch.
     */
    orderBy?: Enumerable<gastoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing gastos.
     */
    cursor?: gastoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gastos.
     */
    skip?: number
    distinct?: Enumerable<GastoScalarFieldEnum>
  }


  /**
   * gasto create
   */
  export type gastoCreateArgs = {
    /**
     * Select specific fields to fetch from the gasto
     */
    select?: gastoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gastoInclude | null
    /**
     * The data needed to create a gasto.
     */
    data: XOR<gastoCreateInput, gastoUncheckedCreateInput>
  }


  /**
   * gasto createMany
   */
  export type gastoCreateManyArgs = {
    /**
     * The data used to create many gastos.
     */
    data: Enumerable<gastoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * gasto update
   */
  export type gastoUpdateArgs = {
    /**
     * Select specific fields to fetch from the gasto
     */
    select?: gastoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gastoInclude | null
    /**
     * The data needed to update a gasto.
     */
    data: XOR<gastoUpdateInput, gastoUncheckedUpdateInput>
    /**
     * Choose, which gasto to update.
     */
    where: gastoWhereUniqueInput
  }


  /**
   * gasto updateMany
   */
  export type gastoUpdateManyArgs = {
    /**
     * The data used to update gastos.
     */
    data: XOR<gastoUpdateManyMutationInput, gastoUncheckedUpdateManyInput>
    /**
     * Filter which gastos to update
     */
    where?: gastoWhereInput
  }


  /**
   * gasto upsert
   */
  export type gastoUpsertArgs = {
    /**
     * Select specific fields to fetch from the gasto
     */
    select?: gastoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gastoInclude | null
    /**
     * The filter to search for the gasto to update in case it exists.
     */
    where: gastoWhereUniqueInput
    /**
     * In case the gasto found by the `where` argument doesn't exist, create a new gasto with this data.
     */
    create: XOR<gastoCreateInput, gastoUncheckedCreateInput>
    /**
     * In case the gasto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gastoUpdateInput, gastoUncheckedUpdateInput>
  }


  /**
   * gasto delete
   */
  export type gastoDeleteArgs = {
    /**
     * Select specific fields to fetch from the gasto
     */
    select?: gastoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gastoInclude | null
    /**
     * Filter which gasto to delete.
     */
    where: gastoWhereUniqueInput
  }


  /**
   * gasto deleteMany
   */
  export type gastoDeleteManyArgs = {
    /**
     * Filter which gastos to delete
     */
    where?: gastoWhereInput
  }


  /**
   * gasto without action
   */
  export type gastoArgs = {
    /**
     * Select specific fields to fetch from the gasto
     */
    select?: gastoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gastoInclude | null
  }



  /**
   * Model tipogasto
   */


  export type AggregateTipogasto = {
    _count: TipogastoCountAggregateOutputType | null
    _avg: TipogastoAvgAggregateOutputType | null
    _sum: TipogastoSumAggregateOutputType | null
    _min: TipogastoMinAggregateOutputType | null
    _max: TipogastoMaxAggregateOutputType | null
  }

  export type TipogastoAvgAggregateOutputType = {
    id: number | null
  }

  export type TipogastoSumAggregateOutputType = {
    id: number | null
  }

  export type TipogastoMinAggregateOutputType = {
    id: number | null
    descripcion: string | null
    color: string | null
  }

  export type TipogastoMaxAggregateOutputType = {
    id: number | null
    descripcion: string | null
    color: string | null
  }

  export type TipogastoCountAggregateOutputType = {
    id: number
    descripcion: number
    color: number
    _all: number
  }


  export type TipogastoAvgAggregateInputType = {
    id?: true
  }

  export type TipogastoSumAggregateInputType = {
    id?: true
  }

  export type TipogastoMinAggregateInputType = {
    id?: true
    descripcion?: true
    color?: true
  }

  export type TipogastoMaxAggregateInputType = {
    id?: true
    descripcion?: true
    color?: true
  }

  export type TipogastoCountAggregateInputType = {
    id?: true
    descripcion?: true
    color?: true
    _all?: true
  }

  export type TipogastoAggregateArgs = {
    /**
     * Filter which tipogasto to aggregate.
     */
    where?: tipogastoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipogastos to fetch.
     */
    orderBy?: Enumerable<tipogastoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tipogastoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipogastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipogastos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tipogastos
    **/
    _count?: true | TipogastoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipogastoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipogastoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipogastoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipogastoMaxAggregateInputType
  }

  export type GetTipogastoAggregateType<T extends TipogastoAggregateArgs> = {
        [P in keyof T & keyof AggregateTipogasto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipogasto[P]>
      : GetScalarType<T[P], AggregateTipogasto[P]>
  }




  export type TipogastoGroupByArgs = {
    where?: tipogastoWhereInput
    orderBy?: Enumerable<tipogastoOrderByWithAggregationInput>
    by: TipogastoScalarFieldEnum[]
    having?: tipogastoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipogastoCountAggregateInputType | true
    _avg?: TipogastoAvgAggregateInputType
    _sum?: TipogastoSumAggregateInputType
    _min?: TipogastoMinAggregateInputType
    _max?: TipogastoMaxAggregateInputType
  }


  export type TipogastoGroupByOutputType = {
    id: number
    descripcion: string
    color: string
    _count: TipogastoCountAggregateOutputType | null
    _avg: TipogastoAvgAggregateOutputType | null
    _sum: TipogastoSumAggregateOutputType | null
    _min: TipogastoMinAggregateOutputType | null
    _max: TipogastoMaxAggregateOutputType | null
  }

  type GetTipogastoGroupByPayload<T extends TipogastoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TipogastoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipogastoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipogastoGroupByOutputType[P]>
            : GetScalarType<T[P], TipogastoGroupByOutputType[P]>
        }
      >
    >


  export type tipogastoSelect = {
    id?: boolean
    descripcion?: boolean
    color?: boolean
    gastos?: boolean | tipogasto$gastosArgs
    _count?: boolean | TipogastoCountOutputTypeArgs
  }


  export type tipogastoInclude = {
    gastos?: boolean | tipogasto$gastosArgs
    _count?: boolean | TipogastoCountOutputTypeArgs
  }

  export type tipogastoGetPayload<S extends boolean | null | undefined | tipogastoArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? tipogasto :
    S extends undefined ? never :
    S extends { include: any } & (tipogastoArgs | tipogastoFindManyArgs)
    ? tipogasto  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'gastos' ? Array < gastoGetPayload<S['include'][P]>>  :
        P extends '_count' ? TipogastoCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (tipogastoArgs | tipogastoFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'gastos' ? Array < gastoGetPayload<S['select'][P]>>  :
        P extends '_count' ? TipogastoCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof tipogasto ? tipogasto[P] : never
  } 
      : tipogasto


  type tipogastoCountArgs = 
    Omit<tipogastoFindManyArgs, 'select' | 'include'> & {
      select?: TipogastoCountAggregateInputType | true
    }

  export interface tipogastoDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Tipogasto that matches the filter.
     * @param {tipogastoFindUniqueArgs} args - Arguments to find a Tipogasto
     * @example
     * // Get one Tipogasto
     * const tipogasto = await prisma.tipogasto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tipogastoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, tipogastoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'tipogasto'> extends True ? Prisma__tipogastoClient<tipogastoGetPayload<T>> : Prisma__tipogastoClient<tipogastoGetPayload<T> | null, null>

    /**
     * Find one Tipogasto that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tipogastoFindUniqueOrThrowArgs} args - Arguments to find a Tipogasto
     * @example
     * // Get one Tipogasto
     * const tipogasto = await prisma.tipogasto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tipogastoFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, tipogastoFindUniqueOrThrowArgs>
    ): Prisma__tipogastoClient<tipogastoGetPayload<T>>

    /**
     * Find the first Tipogasto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipogastoFindFirstArgs} args - Arguments to find a Tipogasto
     * @example
     * // Get one Tipogasto
     * const tipogasto = await prisma.tipogasto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tipogastoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, tipogastoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'tipogasto'> extends True ? Prisma__tipogastoClient<tipogastoGetPayload<T>> : Prisma__tipogastoClient<tipogastoGetPayload<T> | null, null>

    /**
     * Find the first Tipogasto that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipogastoFindFirstOrThrowArgs} args - Arguments to find a Tipogasto
     * @example
     * // Get one Tipogasto
     * const tipogasto = await prisma.tipogasto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tipogastoFindFirstOrThrowArgs>(
      args?: SelectSubset<T, tipogastoFindFirstOrThrowArgs>
    ): Prisma__tipogastoClient<tipogastoGetPayload<T>>

    /**
     * Find zero or more Tipogastos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipogastoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tipogastos
     * const tipogastos = await prisma.tipogasto.findMany()
     * 
     * // Get first 10 Tipogastos
     * const tipogastos = await prisma.tipogasto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipogastoWithIdOnly = await prisma.tipogasto.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends tipogastoFindManyArgs>(
      args?: SelectSubset<T, tipogastoFindManyArgs>
    ): Prisma.PrismaPromise<Array<tipogastoGetPayload<T>>>

    /**
     * Create a Tipogasto.
     * @param {tipogastoCreateArgs} args - Arguments to create a Tipogasto.
     * @example
     * // Create one Tipogasto
     * const Tipogasto = await prisma.tipogasto.create({
     *   data: {
     *     // ... data to create a Tipogasto
     *   }
     * })
     * 
    **/
    create<T extends tipogastoCreateArgs>(
      args: SelectSubset<T, tipogastoCreateArgs>
    ): Prisma__tipogastoClient<tipogastoGetPayload<T>>

    /**
     * Create many Tipogastos.
     *     @param {tipogastoCreateManyArgs} args - Arguments to create many Tipogastos.
     *     @example
     *     // Create many Tipogastos
     *     const tipogasto = await prisma.tipogasto.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tipogastoCreateManyArgs>(
      args?: SelectSubset<T, tipogastoCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tipogasto.
     * @param {tipogastoDeleteArgs} args - Arguments to delete one Tipogasto.
     * @example
     * // Delete one Tipogasto
     * const Tipogasto = await prisma.tipogasto.delete({
     *   where: {
     *     // ... filter to delete one Tipogasto
     *   }
     * })
     * 
    **/
    delete<T extends tipogastoDeleteArgs>(
      args: SelectSubset<T, tipogastoDeleteArgs>
    ): Prisma__tipogastoClient<tipogastoGetPayload<T>>

    /**
     * Update one Tipogasto.
     * @param {tipogastoUpdateArgs} args - Arguments to update one Tipogasto.
     * @example
     * // Update one Tipogasto
     * const tipogasto = await prisma.tipogasto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tipogastoUpdateArgs>(
      args: SelectSubset<T, tipogastoUpdateArgs>
    ): Prisma__tipogastoClient<tipogastoGetPayload<T>>

    /**
     * Delete zero or more Tipogastos.
     * @param {tipogastoDeleteManyArgs} args - Arguments to filter Tipogastos to delete.
     * @example
     * // Delete a few Tipogastos
     * const { count } = await prisma.tipogasto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tipogastoDeleteManyArgs>(
      args?: SelectSubset<T, tipogastoDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipogastos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipogastoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tipogastos
     * const tipogasto = await prisma.tipogasto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tipogastoUpdateManyArgs>(
      args: SelectSubset<T, tipogastoUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tipogasto.
     * @param {tipogastoUpsertArgs} args - Arguments to update or create a Tipogasto.
     * @example
     * // Update or create a Tipogasto
     * const tipogasto = await prisma.tipogasto.upsert({
     *   create: {
     *     // ... data to create a Tipogasto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tipogasto we want to update
     *   }
     * })
    **/
    upsert<T extends tipogastoUpsertArgs>(
      args: SelectSubset<T, tipogastoUpsertArgs>
    ): Prisma__tipogastoClient<tipogastoGetPayload<T>>

    /**
     * Count the number of Tipogastos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipogastoCountArgs} args - Arguments to filter Tipogastos to count.
     * @example
     * // Count the number of Tipogastos
     * const count = await prisma.tipogasto.count({
     *   where: {
     *     // ... the filter for the Tipogastos we want to count
     *   }
     * })
    **/
    count<T extends tipogastoCountArgs>(
      args?: Subset<T, tipogastoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipogastoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tipogasto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipogastoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TipogastoAggregateArgs>(args: Subset<T, TipogastoAggregateArgs>): Prisma.PrismaPromise<GetTipogastoAggregateType<T>>

    /**
     * Group by Tipogasto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipogastoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TipogastoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipogastoGroupByArgs['orderBy'] }
        : { orderBy?: TipogastoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TipogastoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipogastoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for tipogasto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__tipogastoClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    gastos<T extends tipogasto$gastosArgs= {}>(args?: Subset<T, tipogasto$gastosArgs>): Prisma.PrismaPromise<Array<gastoGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * tipogasto base type for findUnique actions
   */
  export type tipogastoFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the tipogasto
     */
    select?: tipogastoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipogastoInclude | null
    /**
     * Filter, which tipogasto to fetch.
     */
    where: tipogastoWhereUniqueInput
  }

  /**
   * tipogasto findUnique
   */
  export interface tipogastoFindUniqueArgs extends tipogastoFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tipogasto findUniqueOrThrow
   */
  export type tipogastoFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the tipogasto
     */
    select?: tipogastoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipogastoInclude | null
    /**
     * Filter, which tipogasto to fetch.
     */
    where: tipogastoWhereUniqueInput
  }


  /**
   * tipogasto base type for findFirst actions
   */
  export type tipogastoFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the tipogasto
     */
    select?: tipogastoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipogastoInclude | null
    /**
     * Filter, which tipogasto to fetch.
     */
    where?: tipogastoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipogastos to fetch.
     */
    orderBy?: Enumerable<tipogastoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipogastos.
     */
    cursor?: tipogastoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipogastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipogastos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipogastos.
     */
    distinct?: Enumerable<TipogastoScalarFieldEnum>
  }

  /**
   * tipogasto findFirst
   */
  export interface tipogastoFindFirstArgs extends tipogastoFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tipogasto findFirstOrThrow
   */
  export type tipogastoFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the tipogasto
     */
    select?: tipogastoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipogastoInclude | null
    /**
     * Filter, which tipogasto to fetch.
     */
    where?: tipogastoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipogastos to fetch.
     */
    orderBy?: Enumerable<tipogastoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipogastos.
     */
    cursor?: tipogastoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipogastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipogastos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipogastos.
     */
    distinct?: Enumerable<TipogastoScalarFieldEnum>
  }


  /**
   * tipogasto findMany
   */
  export type tipogastoFindManyArgs = {
    /**
     * Select specific fields to fetch from the tipogasto
     */
    select?: tipogastoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipogastoInclude | null
    /**
     * Filter, which tipogastos to fetch.
     */
    where?: tipogastoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipogastos to fetch.
     */
    orderBy?: Enumerable<tipogastoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tipogastos.
     */
    cursor?: tipogastoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipogastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipogastos.
     */
    skip?: number
    distinct?: Enumerable<TipogastoScalarFieldEnum>
  }


  /**
   * tipogasto create
   */
  export type tipogastoCreateArgs = {
    /**
     * Select specific fields to fetch from the tipogasto
     */
    select?: tipogastoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipogastoInclude | null
    /**
     * The data needed to create a tipogasto.
     */
    data: XOR<tipogastoCreateInput, tipogastoUncheckedCreateInput>
  }


  /**
   * tipogasto createMany
   */
  export type tipogastoCreateManyArgs = {
    /**
     * The data used to create many tipogastos.
     */
    data: Enumerable<tipogastoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * tipogasto update
   */
  export type tipogastoUpdateArgs = {
    /**
     * Select specific fields to fetch from the tipogasto
     */
    select?: tipogastoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipogastoInclude | null
    /**
     * The data needed to update a tipogasto.
     */
    data: XOR<tipogastoUpdateInput, tipogastoUncheckedUpdateInput>
    /**
     * Choose, which tipogasto to update.
     */
    where: tipogastoWhereUniqueInput
  }


  /**
   * tipogasto updateMany
   */
  export type tipogastoUpdateManyArgs = {
    /**
     * The data used to update tipogastos.
     */
    data: XOR<tipogastoUpdateManyMutationInput, tipogastoUncheckedUpdateManyInput>
    /**
     * Filter which tipogastos to update
     */
    where?: tipogastoWhereInput
  }


  /**
   * tipogasto upsert
   */
  export type tipogastoUpsertArgs = {
    /**
     * Select specific fields to fetch from the tipogasto
     */
    select?: tipogastoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipogastoInclude | null
    /**
     * The filter to search for the tipogasto to update in case it exists.
     */
    where: tipogastoWhereUniqueInput
    /**
     * In case the tipogasto found by the `where` argument doesn't exist, create a new tipogasto with this data.
     */
    create: XOR<tipogastoCreateInput, tipogastoUncheckedCreateInput>
    /**
     * In case the tipogasto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tipogastoUpdateInput, tipogastoUncheckedUpdateInput>
  }


  /**
   * tipogasto delete
   */
  export type tipogastoDeleteArgs = {
    /**
     * Select specific fields to fetch from the tipogasto
     */
    select?: tipogastoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipogastoInclude | null
    /**
     * Filter which tipogasto to delete.
     */
    where: tipogastoWhereUniqueInput
  }


  /**
   * tipogasto deleteMany
   */
  export type tipogastoDeleteManyArgs = {
    /**
     * Filter which tipogastos to delete
     */
    where?: tipogastoWhereInput
  }


  /**
   * tipogasto.gastos
   */
  export type tipogasto$gastosArgs = {
    /**
     * Select specific fields to fetch from the gasto
     */
    select?: gastoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gastoInclude | null
    where?: gastoWhereInput
    orderBy?: Enumerable<gastoOrderByWithRelationInput>
    cursor?: gastoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<GastoScalarFieldEnum>
  }


  /**
   * tipogasto without action
   */
  export type tipogastoArgs = {
    /**
     * Select specific fields to fetch from the tipogasto
     */
    select?: tipogastoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipogastoInclude | null
  }



  /**
   * Model producto
   */


  export type AggregateProducto = {
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  export type ProductoAvgAggregateOutputType = {
    id: number | null
  }

  export type ProductoSumAggregateOutputType = {
    id: number | null
  }

  export type ProductoMinAggregateOutputType = {
    id: number | null
    descripcion: string | null
  }

  export type ProductoMaxAggregateOutputType = {
    id: number | null
    descripcion: string | null
  }

  export type ProductoCountAggregateOutputType = {
    id: number
    descripcion: number
    _all: number
  }


  export type ProductoAvgAggregateInputType = {
    id?: true
  }

  export type ProductoSumAggregateInputType = {
    id?: true
  }

  export type ProductoMinAggregateInputType = {
    id?: true
    descripcion?: true
  }

  export type ProductoMaxAggregateInputType = {
    id?: true
    descripcion?: true
  }

  export type ProductoCountAggregateInputType = {
    id?: true
    descripcion?: true
    _all?: true
  }

  export type ProductoAggregateArgs = {
    /**
     * Filter which producto to aggregate.
     */
    where?: productoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: Enumerable<productoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned productos
    **/
    _count?: true | ProductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductoMaxAggregateInputType
  }

  export type GetProductoAggregateType<T extends ProductoAggregateArgs> = {
        [P in keyof T & keyof AggregateProducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducto[P]>
      : GetScalarType<T[P], AggregateProducto[P]>
  }




  export type ProductoGroupByArgs = {
    where?: productoWhereInput
    orderBy?: Enumerable<productoOrderByWithAggregationInput>
    by: ProductoScalarFieldEnum[]
    having?: productoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductoCountAggregateInputType | true
    _avg?: ProductoAvgAggregateInputType
    _sum?: ProductoSumAggregateInputType
    _min?: ProductoMinAggregateInputType
    _max?: ProductoMaxAggregateInputType
  }


  export type ProductoGroupByOutputType = {
    id: number
    descripcion: string
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  type GetProductoGroupByPayload<T extends ProductoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ProductoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductoGroupByOutputType[P]>
            : GetScalarType<T[P], ProductoGroupByOutputType[P]>
        }
      >
    >


  export type productoSelect = {
    id?: boolean
    descripcion?: boolean
    ListaCompras?: boolean | producto$ListaComprasArgs
    _count?: boolean | ProductoCountOutputTypeArgs
  }


  export type productoInclude = {
    ListaCompras?: boolean | producto$ListaComprasArgs
    _count?: boolean | ProductoCountOutputTypeArgs
  }

  export type productoGetPayload<S extends boolean | null | undefined | productoArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? producto :
    S extends undefined ? never :
    S extends { include: any } & (productoArgs | productoFindManyArgs)
    ? producto  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'ListaCompras' ? Array < ListaCompraGetPayload<S['include'][P]>>  :
        P extends '_count' ? ProductoCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (productoArgs | productoFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'ListaCompras' ? Array < ListaCompraGetPayload<S['select'][P]>>  :
        P extends '_count' ? ProductoCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof producto ? producto[P] : never
  } 
      : producto


  type productoCountArgs = 
    Omit<productoFindManyArgs, 'select' | 'include'> & {
      select?: ProductoCountAggregateInputType | true
    }

  export interface productoDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Producto that matches the filter.
     * @param {productoFindUniqueArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends productoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, productoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'producto'> extends True ? Prisma__productoClient<productoGetPayload<T>> : Prisma__productoClient<productoGetPayload<T> | null, null>

    /**
     * Find one Producto that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {productoFindUniqueOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends productoFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, productoFindUniqueOrThrowArgs>
    ): Prisma__productoClient<productoGetPayload<T>>

    /**
     * Find the first Producto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productoFindFirstArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends productoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, productoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'producto'> extends True ? Prisma__productoClient<productoGetPayload<T>> : Prisma__productoClient<productoGetPayload<T> | null, null>

    /**
     * Find the first Producto that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productoFindFirstOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends productoFindFirstOrThrowArgs>(
      args?: SelectSubset<T, productoFindFirstOrThrowArgs>
    ): Prisma__productoClient<productoGetPayload<T>>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.producto.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.producto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productoWithIdOnly = await prisma.producto.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends productoFindManyArgs>(
      args?: SelectSubset<T, productoFindManyArgs>
    ): Prisma.PrismaPromise<Array<productoGetPayload<T>>>

    /**
     * Create a Producto.
     * @param {productoCreateArgs} args - Arguments to create a Producto.
     * @example
     * // Create one Producto
     * const Producto = await prisma.producto.create({
     *   data: {
     *     // ... data to create a Producto
     *   }
     * })
     * 
    **/
    create<T extends productoCreateArgs>(
      args: SelectSubset<T, productoCreateArgs>
    ): Prisma__productoClient<productoGetPayload<T>>

    /**
     * Create many Productos.
     *     @param {productoCreateManyArgs} args - Arguments to create many Productos.
     *     @example
     *     // Create many Productos
     *     const producto = await prisma.producto.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends productoCreateManyArgs>(
      args?: SelectSubset<T, productoCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Producto.
     * @param {productoDeleteArgs} args - Arguments to delete one Producto.
     * @example
     * // Delete one Producto
     * const Producto = await prisma.producto.delete({
     *   where: {
     *     // ... filter to delete one Producto
     *   }
     * })
     * 
    **/
    delete<T extends productoDeleteArgs>(
      args: SelectSubset<T, productoDeleteArgs>
    ): Prisma__productoClient<productoGetPayload<T>>

    /**
     * Update one Producto.
     * @param {productoUpdateArgs} args - Arguments to update one Producto.
     * @example
     * // Update one Producto
     * const producto = await prisma.producto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends productoUpdateArgs>(
      args: SelectSubset<T, productoUpdateArgs>
    ): Prisma__productoClient<productoGetPayload<T>>

    /**
     * Delete zero or more Productos.
     * @param {productoDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.producto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends productoDeleteManyArgs>(
      args?: SelectSubset<T, productoDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends productoUpdateManyArgs>(
      args: SelectSubset<T, productoUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Producto.
     * @param {productoUpsertArgs} args - Arguments to update or create a Producto.
     * @example
     * // Update or create a Producto
     * const producto = await prisma.producto.upsert({
     *   create: {
     *     // ... data to create a Producto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Producto we want to update
     *   }
     * })
    **/
    upsert<T extends productoUpsertArgs>(
      args: SelectSubset<T, productoUpsertArgs>
    ): Prisma__productoClient<productoGetPayload<T>>

    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productoCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.producto.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends productoCountArgs>(
      args?: Subset<T, productoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductoAggregateArgs>(args: Subset<T, ProductoAggregateArgs>): Prisma.PrismaPromise<GetProductoAggregateType<T>>

    /**
     * Group by Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductoGroupByArgs['orderBy'] }
        : { orderBy?: ProductoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for producto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__productoClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    ListaCompras<T extends producto$ListaComprasArgs= {}>(args?: Subset<T, producto$ListaComprasArgs>): Prisma.PrismaPromise<Array<ListaCompraGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * producto base type for findUnique actions
   */
  export type productoFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productoInclude | null
    /**
     * Filter, which producto to fetch.
     */
    where: productoWhereUniqueInput
  }

  /**
   * producto findUnique
   */
  export interface productoFindUniqueArgs extends productoFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * producto findUniqueOrThrow
   */
  export type productoFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productoInclude | null
    /**
     * Filter, which producto to fetch.
     */
    where: productoWhereUniqueInput
  }


  /**
   * producto base type for findFirst actions
   */
  export type productoFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productoInclude | null
    /**
     * Filter, which producto to fetch.
     */
    where?: productoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: Enumerable<productoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productos.
     */
    cursor?: productoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productos.
     */
    distinct?: Enumerable<ProductoScalarFieldEnum>
  }

  /**
   * producto findFirst
   */
  export interface productoFindFirstArgs extends productoFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * producto findFirstOrThrow
   */
  export type productoFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productoInclude | null
    /**
     * Filter, which producto to fetch.
     */
    where?: productoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: Enumerable<productoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productos.
     */
    cursor?: productoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productos.
     */
    distinct?: Enumerable<ProductoScalarFieldEnum>
  }


  /**
   * producto findMany
   */
  export type productoFindManyArgs = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productoInclude | null
    /**
     * Filter, which productos to fetch.
     */
    where?: productoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: Enumerable<productoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing productos.
     */
    cursor?: productoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    distinct?: Enumerable<ProductoScalarFieldEnum>
  }


  /**
   * producto create
   */
  export type productoCreateArgs = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productoInclude | null
    /**
     * The data needed to create a producto.
     */
    data: XOR<productoCreateInput, productoUncheckedCreateInput>
  }


  /**
   * producto createMany
   */
  export type productoCreateManyArgs = {
    /**
     * The data used to create many productos.
     */
    data: Enumerable<productoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * producto update
   */
  export type productoUpdateArgs = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productoInclude | null
    /**
     * The data needed to update a producto.
     */
    data: XOR<productoUpdateInput, productoUncheckedUpdateInput>
    /**
     * Choose, which producto to update.
     */
    where: productoWhereUniqueInput
  }


  /**
   * producto updateMany
   */
  export type productoUpdateManyArgs = {
    /**
     * The data used to update productos.
     */
    data: XOR<productoUpdateManyMutationInput, productoUncheckedUpdateManyInput>
    /**
     * Filter which productos to update
     */
    where?: productoWhereInput
  }


  /**
   * producto upsert
   */
  export type productoUpsertArgs = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productoInclude | null
    /**
     * The filter to search for the producto to update in case it exists.
     */
    where: productoWhereUniqueInput
    /**
     * In case the producto found by the `where` argument doesn't exist, create a new producto with this data.
     */
    create: XOR<productoCreateInput, productoUncheckedCreateInput>
    /**
     * In case the producto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productoUpdateInput, productoUncheckedUpdateInput>
  }


  /**
   * producto delete
   */
  export type productoDeleteArgs = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productoInclude | null
    /**
     * Filter which producto to delete.
     */
    where: productoWhereUniqueInput
  }


  /**
   * producto deleteMany
   */
  export type productoDeleteManyArgs = {
    /**
     * Filter which productos to delete
     */
    where?: productoWhereInput
  }


  /**
   * producto.ListaCompras
   */
  export type producto$ListaComprasArgs = {
    /**
     * Select specific fields to fetch from the ListaCompra
     */
    select?: ListaCompraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListaCompraInclude | null
    where?: ListaCompraWhereInput
    orderBy?: Enumerable<ListaCompraOrderByWithRelationInput>
    cursor?: ListaCompraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ListaCompraScalarFieldEnum>
  }


  /**
   * producto without action
   */
  export type productoArgs = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productoInclude | null
  }



  /**
   * Model ListaCompra
   */


  export type AggregateListaCompra = {
    _count: ListaCompraCountAggregateOutputType | null
    _avg: ListaCompraAvgAggregateOutputType | null
    _sum: ListaCompraSumAggregateOutputType | null
    _min: ListaCompraMinAggregateOutputType | null
    _max: ListaCompraMaxAggregateOutputType | null
  }

  export type ListaCompraAvgAggregateOutputType = {
    productoId: number | null
  }

  export type ListaCompraSumAggregateOutputType = {
    productoId: number | null
  }

  export type ListaCompraMinAggregateOutputType = {
    productoId: number | null
  }

  export type ListaCompraMaxAggregateOutputType = {
    productoId: number | null
  }

  export type ListaCompraCountAggregateOutputType = {
    productoId: number
    _all: number
  }


  export type ListaCompraAvgAggregateInputType = {
    productoId?: true
  }

  export type ListaCompraSumAggregateInputType = {
    productoId?: true
  }

  export type ListaCompraMinAggregateInputType = {
    productoId?: true
  }

  export type ListaCompraMaxAggregateInputType = {
    productoId?: true
  }

  export type ListaCompraCountAggregateInputType = {
    productoId?: true
    _all?: true
  }

  export type ListaCompraAggregateArgs = {
    /**
     * Filter which ListaCompra to aggregate.
     */
    where?: ListaCompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaCompras to fetch.
     */
    orderBy?: Enumerable<ListaCompraOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListaCompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ListaCompras
    **/
    _count?: true | ListaCompraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListaCompraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListaCompraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListaCompraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListaCompraMaxAggregateInputType
  }

  export type GetListaCompraAggregateType<T extends ListaCompraAggregateArgs> = {
        [P in keyof T & keyof AggregateListaCompra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListaCompra[P]>
      : GetScalarType<T[P], AggregateListaCompra[P]>
  }




  export type ListaCompraGroupByArgs = {
    where?: ListaCompraWhereInput
    orderBy?: Enumerable<ListaCompraOrderByWithAggregationInput>
    by: ListaCompraScalarFieldEnum[]
    having?: ListaCompraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListaCompraCountAggregateInputType | true
    _avg?: ListaCompraAvgAggregateInputType
    _sum?: ListaCompraSumAggregateInputType
    _min?: ListaCompraMinAggregateInputType
    _max?: ListaCompraMaxAggregateInputType
  }


  export type ListaCompraGroupByOutputType = {
    productoId: number
    _count: ListaCompraCountAggregateOutputType | null
    _avg: ListaCompraAvgAggregateOutputType | null
    _sum: ListaCompraSumAggregateOutputType | null
    _min: ListaCompraMinAggregateOutputType | null
    _max: ListaCompraMaxAggregateOutputType | null
  }

  type GetListaCompraGroupByPayload<T extends ListaCompraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ListaCompraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListaCompraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListaCompraGroupByOutputType[P]>
            : GetScalarType<T[P], ListaCompraGroupByOutputType[P]>
        }
      >
    >


  export type ListaCompraSelect = {
    productoId?: boolean
    producto?: boolean | productoArgs
  }


  export type ListaCompraInclude = {
    producto?: boolean | productoArgs
  }

  export type ListaCompraGetPayload<S extends boolean | null | undefined | ListaCompraArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ListaCompra :
    S extends undefined ? never :
    S extends { include: any } & (ListaCompraArgs | ListaCompraFindManyArgs)
    ? ListaCompra  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'producto' ? productoGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ListaCompraArgs | ListaCompraFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'producto' ? productoGetPayload<S['select'][P]> :  P extends keyof ListaCompra ? ListaCompra[P] : never
  } 
      : ListaCompra


  type ListaCompraCountArgs = 
    Omit<ListaCompraFindManyArgs, 'select' | 'include'> & {
      select?: ListaCompraCountAggregateInputType | true
    }

  export interface ListaCompraDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one ListaCompra that matches the filter.
     * @param {ListaCompraFindUniqueArgs} args - Arguments to find a ListaCompra
     * @example
     * // Get one ListaCompra
     * const listaCompra = await prisma.listaCompra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ListaCompraFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ListaCompraFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ListaCompra'> extends True ? Prisma__ListaCompraClient<ListaCompraGetPayload<T>> : Prisma__ListaCompraClient<ListaCompraGetPayload<T> | null, null>

    /**
     * Find one ListaCompra that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ListaCompraFindUniqueOrThrowArgs} args - Arguments to find a ListaCompra
     * @example
     * // Get one ListaCompra
     * const listaCompra = await prisma.listaCompra.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ListaCompraFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ListaCompraFindUniqueOrThrowArgs>
    ): Prisma__ListaCompraClient<ListaCompraGetPayload<T>>

    /**
     * Find the first ListaCompra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaCompraFindFirstArgs} args - Arguments to find a ListaCompra
     * @example
     * // Get one ListaCompra
     * const listaCompra = await prisma.listaCompra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ListaCompraFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ListaCompraFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ListaCompra'> extends True ? Prisma__ListaCompraClient<ListaCompraGetPayload<T>> : Prisma__ListaCompraClient<ListaCompraGetPayload<T> | null, null>

    /**
     * Find the first ListaCompra that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaCompraFindFirstOrThrowArgs} args - Arguments to find a ListaCompra
     * @example
     * // Get one ListaCompra
     * const listaCompra = await prisma.listaCompra.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ListaCompraFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ListaCompraFindFirstOrThrowArgs>
    ): Prisma__ListaCompraClient<ListaCompraGetPayload<T>>

    /**
     * Find zero or more ListaCompras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaCompraFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ListaCompras
     * const listaCompras = await prisma.listaCompra.findMany()
     * 
     * // Get first 10 ListaCompras
     * const listaCompras = await prisma.listaCompra.findMany({ take: 10 })
     * 
     * // Only select the `productoId`
     * const listaCompraWithProductoIdOnly = await prisma.listaCompra.findMany({ select: { productoId: true } })
     * 
    **/
    findMany<T extends ListaCompraFindManyArgs>(
      args?: SelectSubset<T, ListaCompraFindManyArgs>
    ): Prisma.PrismaPromise<Array<ListaCompraGetPayload<T>>>

    /**
     * Create a ListaCompra.
     * @param {ListaCompraCreateArgs} args - Arguments to create a ListaCompra.
     * @example
     * // Create one ListaCompra
     * const ListaCompra = await prisma.listaCompra.create({
     *   data: {
     *     // ... data to create a ListaCompra
     *   }
     * })
     * 
    **/
    create<T extends ListaCompraCreateArgs>(
      args: SelectSubset<T, ListaCompraCreateArgs>
    ): Prisma__ListaCompraClient<ListaCompraGetPayload<T>>

    /**
     * Create many ListaCompras.
     *     @param {ListaCompraCreateManyArgs} args - Arguments to create many ListaCompras.
     *     @example
     *     // Create many ListaCompras
     *     const listaCompra = await prisma.listaCompra.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ListaCompraCreateManyArgs>(
      args?: SelectSubset<T, ListaCompraCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ListaCompra.
     * @param {ListaCompraDeleteArgs} args - Arguments to delete one ListaCompra.
     * @example
     * // Delete one ListaCompra
     * const ListaCompra = await prisma.listaCompra.delete({
     *   where: {
     *     // ... filter to delete one ListaCompra
     *   }
     * })
     * 
    **/
    delete<T extends ListaCompraDeleteArgs>(
      args: SelectSubset<T, ListaCompraDeleteArgs>
    ): Prisma__ListaCompraClient<ListaCompraGetPayload<T>>

    /**
     * Update one ListaCompra.
     * @param {ListaCompraUpdateArgs} args - Arguments to update one ListaCompra.
     * @example
     * // Update one ListaCompra
     * const listaCompra = await prisma.listaCompra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ListaCompraUpdateArgs>(
      args: SelectSubset<T, ListaCompraUpdateArgs>
    ): Prisma__ListaCompraClient<ListaCompraGetPayload<T>>

    /**
     * Delete zero or more ListaCompras.
     * @param {ListaCompraDeleteManyArgs} args - Arguments to filter ListaCompras to delete.
     * @example
     * // Delete a few ListaCompras
     * const { count } = await prisma.listaCompra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ListaCompraDeleteManyArgs>(
      args?: SelectSubset<T, ListaCompraDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListaCompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaCompraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ListaCompras
     * const listaCompra = await prisma.listaCompra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ListaCompraUpdateManyArgs>(
      args: SelectSubset<T, ListaCompraUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ListaCompra.
     * @param {ListaCompraUpsertArgs} args - Arguments to update or create a ListaCompra.
     * @example
     * // Update or create a ListaCompra
     * const listaCompra = await prisma.listaCompra.upsert({
     *   create: {
     *     // ... data to create a ListaCompra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ListaCompra we want to update
     *   }
     * })
    **/
    upsert<T extends ListaCompraUpsertArgs>(
      args: SelectSubset<T, ListaCompraUpsertArgs>
    ): Prisma__ListaCompraClient<ListaCompraGetPayload<T>>

    /**
     * Count the number of ListaCompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaCompraCountArgs} args - Arguments to filter ListaCompras to count.
     * @example
     * // Count the number of ListaCompras
     * const count = await prisma.listaCompra.count({
     *   where: {
     *     // ... the filter for the ListaCompras we want to count
     *   }
     * })
    **/
    count<T extends ListaCompraCountArgs>(
      args?: Subset<T, ListaCompraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListaCompraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ListaCompra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaCompraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ListaCompraAggregateArgs>(args: Subset<T, ListaCompraAggregateArgs>): Prisma.PrismaPromise<GetListaCompraAggregateType<T>>

    /**
     * Group by ListaCompra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaCompraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ListaCompraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListaCompraGroupByArgs['orderBy'] }
        : { orderBy?: ListaCompraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ListaCompraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListaCompraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ListaCompra.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ListaCompraClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    producto<T extends productoArgs= {}>(args?: Subset<T, productoArgs>): Prisma__productoClient<productoGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ListaCompra base type for findUnique actions
   */
  export type ListaCompraFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ListaCompra
     */
    select?: ListaCompraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListaCompraInclude | null
    /**
     * Filter, which ListaCompra to fetch.
     */
    where: ListaCompraWhereUniqueInput
  }

  /**
   * ListaCompra findUnique
   */
  export interface ListaCompraFindUniqueArgs extends ListaCompraFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ListaCompra findUniqueOrThrow
   */
  export type ListaCompraFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ListaCompra
     */
    select?: ListaCompraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListaCompraInclude | null
    /**
     * Filter, which ListaCompra to fetch.
     */
    where: ListaCompraWhereUniqueInput
  }


  /**
   * ListaCompra base type for findFirst actions
   */
  export type ListaCompraFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ListaCompra
     */
    select?: ListaCompraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListaCompraInclude | null
    /**
     * Filter, which ListaCompra to fetch.
     */
    where?: ListaCompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaCompras to fetch.
     */
    orderBy?: Enumerable<ListaCompraOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListaCompras.
     */
    cursor?: ListaCompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListaCompras.
     */
    distinct?: Enumerable<ListaCompraScalarFieldEnum>
  }

  /**
   * ListaCompra findFirst
   */
  export interface ListaCompraFindFirstArgs extends ListaCompraFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ListaCompra findFirstOrThrow
   */
  export type ListaCompraFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ListaCompra
     */
    select?: ListaCompraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListaCompraInclude | null
    /**
     * Filter, which ListaCompra to fetch.
     */
    where?: ListaCompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaCompras to fetch.
     */
    orderBy?: Enumerable<ListaCompraOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListaCompras.
     */
    cursor?: ListaCompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListaCompras.
     */
    distinct?: Enumerable<ListaCompraScalarFieldEnum>
  }


  /**
   * ListaCompra findMany
   */
  export type ListaCompraFindManyArgs = {
    /**
     * Select specific fields to fetch from the ListaCompra
     */
    select?: ListaCompraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListaCompraInclude | null
    /**
     * Filter, which ListaCompras to fetch.
     */
    where?: ListaCompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaCompras to fetch.
     */
    orderBy?: Enumerable<ListaCompraOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ListaCompras.
     */
    cursor?: ListaCompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaCompras.
     */
    skip?: number
    distinct?: Enumerable<ListaCompraScalarFieldEnum>
  }


  /**
   * ListaCompra create
   */
  export type ListaCompraCreateArgs = {
    /**
     * Select specific fields to fetch from the ListaCompra
     */
    select?: ListaCompraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListaCompraInclude | null
    /**
     * The data needed to create a ListaCompra.
     */
    data: XOR<ListaCompraCreateInput, ListaCompraUncheckedCreateInput>
  }


  /**
   * ListaCompra createMany
   */
  export type ListaCompraCreateManyArgs = {
    /**
     * The data used to create many ListaCompras.
     */
    data: Enumerable<ListaCompraCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ListaCompra update
   */
  export type ListaCompraUpdateArgs = {
    /**
     * Select specific fields to fetch from the ListaCompra
     */
    select?: ListaCompraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListaCompraInclude | null
    /**
     * The data needed to update a ListaCompra.
     */
    data: XOR<ListaCompraUpdateInput, ListaCompraUncheckedUpdateInput>
    /**
     * Choose, which ListaCompra to update.
     */
    where: ListaCompraWhereUniqueInput
  }


  /**
   * ListaCompra updateMany
   */
  export type ListaCompraUpdateManyArgs = {
    /**
     * The data used to update ListaCompras.
     */
    data: XOR<ListaCompraUpdateManyMutationInput, ListaCompraUncheckedUpdateManyInput>
    /**
     * Filter which ListaCompras to update
     */
    where?: ListaCompraWhereInput
  }


  /**
   * ListaCompra upsert
   */
  export type ListaCompraUpsertArgs = {
    /**
     * Select specific fields to fetch from the ListaCompra
     */
    select?: ListaCompraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListaCompraInclude | null
    /**
     * The filter to search for the ListaCompra to update in case it exists.
     */
    where: ListaCompraWhereUniqueInput
    /**
     * In case the ListaCompra found by the `where` argument doesn't exist, create a new ListaCompra with this data.
     */
    create: XOR<ListaCompraCreateInput, ListaCompraUncheckedCreateInput>
    /**
     * In case the ListaCompra was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListaCompraUpdateInput, ListaCompraUncheckedUpdateInput>
  }


  /**
   * ListaCompra delete
   */
  export type ListaCompraDeleteArgs = {
    /**
     * Select specific fields to fetch from the ListaCompra
     */
    select?: ListaCompraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListaCompraInclude | null
    /**
     * Filter which ListaCompra to delete.
     */
    where: ListaCompraWhereUniqueInput
  }


  /**
   * ListaCompra deleteMany
   */
  export type ListaCompraDeleteManyArgs = {
    /**
     * Filter which ListaCompras to delete
     */
    where?: ListaCompraWhereInput
  }


  /**
   * ListaCompra without action
   */
  export type ListaCompraArgs = {
    /**
     * Select specific fields to fetch from the ListaCompra
     */
    select?: ListaCompraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListaCompraInclude | null
  }



  /**
   * Model configuracion
   */


  export type AggregateConfiguracion = {
    _count: ConfiguracionCountAggregateOutputType | null
    _min: ConfiguracionMinAggregateOutputType | null
    _max: ConfiguracionMaxAggregateOutputType | null
  }

  export type ConfiguracionMinAggregateOutputType = {
    key: string | null
    value: string | null
  }

  export type ConfiguracionMaxAggregateOutputType = {
    key: string | null
    value: string | null
  }

  export type ConfiguracionCountAggregateOutputType = {
    key: number
    value: number
    _all: number
  }


  export type ConfiguracionMinAggregateInputType = {
    key?: true
    value?: true
  }

  export type ConfiguracionMaxAggregateInputType = {
    key?: true
    value?: true
  }

  export type ConfiguracionCountAggregateInputType = {
    key?: true
    value?: true
    _all?: true
  }

  export type ConfiguracionAggregateArgs = {
    /**
     * Filter which configuracion to aggregate.
     */
    where?: configuracionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configuracions to fetch.
     */
    orderBy?: Enumerable<configuracionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: configuracionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configuracions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configuracions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned configuracions
    **/
    _count?: true | ConfiguracionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfiguracionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfiguracionMaxAggregateInputType
  }

  export type GetConfiguracionAggregateType<T extends ConfiguracionAggregateArgs> = {
        [P in keyof T & keyof AggregateConfiguracion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfiguracion[P]>
      : GetScalarType<T[P], AggregateConfiguracion[P]>
  }




  export type ConfiguracionGroupByArgs = {
    where?: configuracionWhereInput
    orderBy?: Enumerable<configuracionOrderByWithAggregationInput>
    by: ConfiguracionScalarFieldEnum[]
    having?: configuracionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfiguracionCountAggregateInputType | true
    _min?: ConfiguracionMinAggregateInputType
    _max?: ConfiguracionMaxAggregateInputType
  }


  export type ConfiguracionGroupByOutputType = {
    key: string
    value: string
    _count: ConfiguracionCountAggregateOutputType | null
    _min: ConfiguracionMinAggregateOutputType | null
    _max: ConfiguracionMaxAggregateOutputType | null
  }

  type GetConfiguracionGroupByPayload<T extends ConfiguracionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ConfiguracionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfiguracionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfiguracionGroupByOutputType[P]>
            : GetScalarType<T[P], ConfiguracionGroupByOutputType[P]>
        }
      >
    >


  export type configuracionSelect = {
    key?: boolean
    value?: boolean
  }


  export type configuracionGetPayload<S extends boolean | null | undefined | configuracionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? configuracion :
    S extends undefined ? never :
    S extends { include: any } & (configuracionArgs | configuracionFindManyArgs)
    ? configuracion 
    : S extends { select: any } & (configuracionArgs | configuracionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof configuracion ? configuracion[P] : never
  } 
      : configuracion


  type configuracionCountArgs = 
    Omit<configuracionFindManyArgs, 'select' | 'include'> & {
      select?: ConfiguracionCountAggregateInputType | true
    }

  export interface configuracionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Configuracion that matches the filter.
     * @param {configuracionFindUniqueArgs} args - Arguments to find a Configuracion
     * @example
     * // Get one Configuracion
     * const configuracion = await prisma.configuracion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends configuracionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, configuracionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'configuracion'> extends True ? Prisma__configuracionClient<configuracionGetPayload<T>> : Prisma__configuracionClient<configuracionGetPayload<T> | null, null>

    /**
     * Find one Configuracion that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {configuracionFindUniqueOrThrowArgs} args - Arguments to find a Configuracion
     * @example
     * // Get one Configuracion
     * const configuracion = await prisma.configuracion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends configuracionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, configuracionFindUniqueOrThrowArgs>
    ): Prisma__configuracionClient<configuracionGetPayload<T>>

    /**
     * Find the first Configuracion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracionFindFirstArgs} args - Arguments to find a Configuracion
     * @example
     * // Get one Configuracion
     * const configuracion = await prisma.configuracion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends configuracionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, configuracionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'configuracion'> extends True ? Prisma__configuracionClient<configuracionGetPayload<T>> : Prisma__configuracionClient<configuracionGetPayload<T> | null, null>

    /**
     * Find the first Configuracion that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracionFindFirstOrThrowArgs} args - Arguments to find a Configuracion
     * @example
     * // Get one Configuracion
     * const configuracion = await prisma.configuracion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends configuracionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, configuracionFindFirstOrThrowArgs>
    ): Prisma__configuracionClient<configuracionGetPayload<T>>

    /**
     * Find zero or more Configuracions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Configuracions
     * const configuracions = await prisma.configuracion.findMany()
     * 
     * // Get first 10 Configuracions
     * const configuracions = await prisma.configuracion.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const configuracionWithKeyOnly = await prisma.configuracion.findMany({ select: { key: true } })
     * 
    **/
    findMany<T extends configuracionFindManyArgs>(
      args?: SelectSubset<T, configuracionFindManyArgs>
    ): Prisma.PrismaPromise<Array<configuracionGetPayload<T>>>

    /**
     * Create a Configuracion.
     * @param {configuracionCreateArgs} args - Arguments to create a Configuracion.
     * @example
     * // Create one Configuracion
     * const Configuracion = await prisma.configuracion.create({
     *   data: {
     *     // ... data to create a Configuracion
     *   }
     * })
     * 
    **/
    create<T extends configuracionCreateArgs>(
      args: SelectSubset<T, configuracionCreateArgs>
    ): Prisma__configuracionClient<configuracionGetPayload<T>>

    /**
     * Create many Configuracions.
     *     @param {configuracionCreateManyArgs} args - Arguments to create many Configuracions.
     *     @example
     *     // Create many Configuracions
     *     const configuracion = await prisma.configuracion.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends configuracionCreateManyArgs>(
      args?: SelectSubset<T, configuracionCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Configuracion.
     * @param {configuracionDeleteArgs} args - Arguments to delete one Configuracion.
     * @example
     * // Delete one Configuracion
     * const Configuracion = await prisma.configuracion.delete({
     *   where: {
     *     // ... filter to delete one Configuracion
     *   }
     * })
     * 
    **/
    delete<T extends configuracionDeleteArgs>(
      args: SelectSubset<T, configuracionDeleteArgs>
    ): Prisma__configuracionClient<configuracionGetPayload<T>>

    /**
     * Update one Configuracion.
     * @param {configuracionUpdateArgs} args - Arguments to update one Configuracion.
     * @example
     * // Update one Configuracion
     * const configuracion = await prisma.configuracion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends configuracionUpdateArgs>(
      args: SelectSubset<T, configuracionUpdateArgs>
    ): Prisma__configuracionClient<configuracionGetPayload<T>>

    /**
     * Delete zero or more Configuracions.
     * @param {configuracionDeleteManyArgs} args - Arguments to filter Configuracions to delete.
     * @example
     * // Delete a few Configuracions
     * const { count } = await prisma.configuracion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends configuracionDeleteManyArgs>(
      args?: SelectSubset<T, configuracionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configuracions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Configuracions
     * const configuracion = await prisma.configuracion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends configuracionUpdateManyArgs>(
      args: SelectSubset<T, configuracionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Configuracion.
     * @param {configuracionUpsertArgs} args - Arguments to update or create a Configuracion.
     * @example
     * // Update or create a Configuracion
     * const configuracion = await prisma.configuracion.upsert({
     *   create: {
     *     // ... data to create a Configuracion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Configuracion we want to update
     *   }
     * })
    **/
    upsert<T extends configuracionUpsertArgs>(
      args: SelectSubset<T, configuracionUpsertArgs>
    ): Prisma__configuracionClient<configuracionGetPayload<T>>

    /**
     * Count the number of Configuracions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracionCountArgs} args - Arguments to filter Configuracions to count.
     * @example
     * // Count the number of Configuracions
     * const count = await prisma.configuracion.count({
     *   where: {
     *     // ... the filter for the Configuracions we want to count
     *   }
     * })
    **/
    count<T extends configuracionCountArgs>(
      args?: Subset<T, configuracionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfiguracionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Configuracion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConfiguracionAggregateArgs>(args: Subset<T, ConfiguracionAggregateArgs>): Prisma.PrismaPromise<GetConfiguracionAggregateType<T>>

    /**
     * Group by Configuracion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConfiguracionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConfiguracionGroupByArgs['orderBy'] }
        : { orderBy?: ConfiguracionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConfiguracionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfiguracionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for configuracion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__configuracionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * configuracion base type for findUnique actions
   */
  export type configuracionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the configuracion
     */
    select?: configuracionSelect | null
    /**
     * Filter, which configuracion to fetch.
     */
    where: configuracionWhereUniqueInput
  }

  /**
   * configuracion findUnique
   */
  export interface configuracionFindUniqueArgs extends configuracionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * configuracion findUniqueOrThrow
   */
  export type configuracionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the configuracion
     */
    select?: configuracionSelect | null
    /**
     * Filter, which configuracion to fetch.
     */
    where: configuracionWhereUniqueInput
  }


  /**
   * configuracion base type for findFirst actions
   */
  export type configuracionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the configuracion
     */
    select?: configuracionSelect | null
    /**
     * Filter, which configuracion to fetch.
     */
    where?: configuracionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configuracions to fetch.
     */
    orderBy?: Enumerable<configuracionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for configuracions.
     */
    cursor?: configuracionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configuracions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configuracions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of configuracions.
     */
    distinct?: Enumerable<ConfiguracionScalarFieldEnum>
  }

  /**
   * configuracion findFirst
   */
  export interface configuracionFindFirstArgs extends configuracionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * configuracion findFirstOrThrow
   */
  export type configuracionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the configuracion
     */
    select?: configuracionSelect | null
    /**
     * Filter, which configuracion to fetch.
     */
    where?: configuracionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configuracions to fetch.
     */
    orderBy?: Enumerable<configuracionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for configuracions.
     */
    cursor?: configuracionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configuracions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configuracions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of configuracions.
     */
    distinct?: Enumerable<ConfiguracionScalarFieldEnum>
  }


  /**
   * configuracion findMany
   */
  export type configuracionFindManyArgs = {
    /**
     * Select specific fields to fetch from the configuracion
     */
    select?: configuracionSelect | null
    /**
     * Filter, which configuracions to fetch.
     */
    where?: configuracionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configuracions to fetch.
     */
    orderBy?: Enumerable<configuracionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing configuracions.
     */
    cursor?: configuracionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configuracions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configuracions.
     */
    skip?: number
    distinct?: Enumerable<ConfiguracionScalarFieldEnum>
  }


  /**
   * configuracion create
   */
  export type configuracionCreateArgs = {
    /**
     * Select specific fields to fetch from the configuracion
     */
    select?: configuracionSelect | null
    /**
     * The data needed to create a configuracion.
     */
    data: XOR<configuracionCreateInput, configuracionUncheckedCreateInput>
  }


  /**
   * configuracion createMany
   */
  export type configuracionCreateManyArgs = {
    /**
     * The data used to create many configuracions.
     */
    data: Enumerable<configuracionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * configuracion update
   */
  export type configuracionUpdateArgs = {
    /**
     * Select specific fields to fetch from the configuracion
     */
    select?: configuracionSelect | null
    /**
     * The data needed to update a configuracion.
     */
    data: XOR<configuracionUpdateInput, configuracionUncheckedUpdateInput>
    /**
     * Choose, which configuracion to update.
     */
    where: configuracionWhereUniqueInput
  }


  /**
   * configuracion updateMany
   */
  export type configuracionUpdateManyArgs = {
    /**
     * The data used to update configuracions.
     */
    data: XOR<configuracionUpdateManyMutationInput, configuracionUncheckedUpdateManyInput>
    /**
     * Filter which configuracions to update
     */
    where?: configuracionWhereInput
  }


  /**
   * configuracion upsert
   */
  export type configuracionUpsertArgs = {
    /**
     * Select specific fields to fetch from the configuracion
     */
    select?: configuracionSelect | null
    /**
     * The filter to search for the configuracion to update in case it exists.
     */
    where: configuracionWhereUniqueInput
    /**
     * In case the configuracion found by the `where` argument doesn't exist, create a new configuracion with this data.
     */
    create: XOR<configuracionCreateInput, configuracionUncheckedCreateInput>
    /**
     * In case the configuracion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<configuracionUpdateInput, configuracionUncheckedUpdateInput>
  }


  /**
   * configuracion delete
   */
  export type configuracionDeleteArgs = {
    /**
     * Select specific fields to fetch from the configuracion
     */
    select?: configuracionSelect | null
    /**
     * Filter which configuracion to delete.
     */
    where: configuracionWhereUniqueInput
  }


  /**
   * configuracion deleteMany
   */
  export type configuracionDeleteManyArgs = {
    /**
     * Filter which configuracions to delete
     */
    where?: configuracionWhereInput
  }


  /**
   * configuracion without action
   */
  export type configuracionArgs = {
    /**
     * Select specific fields to fetch from the configuracion
     */
    select?: configuracionSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AgendaScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    tipoagendaId: 'tipoagendaId',
    observacion: 'observacion'
  };

  export type AgendaScalarFieldEnum = (typeof AgendaScalarFieldEnum)[keyof typeof AgendaScalarFieldEnum]


  export const CasaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    baja: 'baja',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CasaScalarFieldEnum = (typeof CasaScalarFieldEnum)[keyof typeof CasaScalarFieldEnum]


  export const ConfiguracionScalarFieldEnum: {
    key: 'key',
    value: 'value'
  };

  export type ConfiguracionScalarFieldEnum = (typeof ConfiguracionScalarFieldEnum)[keyof typeof ConfiguracionScalarFieldEnum]


  export const EmpleadaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    baja: 'baja',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmpleadaScalarFieldEnum = (typeof EmpleadaScalarFieldEnum)[keyof typeof EmpleadaScalarFieldEnum]


  export const GastoScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    tipogastoId: 'tipogastoId',
    importe: 'importe',
    observacion: 'observacion',
    servicioId: 'servicioId',
    pendientecobro: 'pendientecobro'
  };

  export type GastoScalarFieldEnum = (typeof GastoScalarFieldEnum)[keyof typeof GastoScalarFieldEnum]


  export const ListaCompraScalarFieldEnum: {
    productoId: 'productoId'
  };

  export type ListaCompraScalarFieldEnum = (typeof ListaCompraScalarFieldEnum)[keyof typeof ListaCompraScalarFieldEnum]


  export const ProductoScalarFieldEnum: {
    id: 'id',
    descripcion: 'descripcion'
  };

  export type ProductoScalarFieldEnum = (typeof ProductoScalarFieldEnum)[keyof typeof ProductoScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ServicioScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    horaInicio: 'horaInicio',
    horaFin: 'horaFin',
    suplLevantar: 'suplLevantar',
    empleadaId: 'empleadaId',
    pagado: 'pagado',
    horas: 'horas',
    minutos: 'minutos',
    importe: 'importe',
    observacion: 'observacion',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServicioScalarFieldEnum = (typeof ServicioScalarFieldEnum)[keyof typeof ServicioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TipoagendaScalarFieldEnum: {
    id: 'id',
    descripcion: 'descripcion',
    color: 'color'
  };

  export type TipoagendaScalarFieldEnum = (typeof TipoagendaScalarFieldEnum)[keyof typeof TipoagendaScalarFieldEnum]


  export const TipogastoScalarFieldEnum: {
    id: 'id',
    descripcion: 'descripcion',
    color: 'color'
  };

  export type TipogastoScalarFieldEnum = (typeof TipogastoScalarFieldEnum)[keyof typeof TipogastoScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TurnoScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    quien: 'quien'
  };

  export type TurnoScalarFieldEnum = (typeof TurnoScalarFieldEnum)[keyof typeof TurnoScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type casaWhereInput = {
    AND?: Enumerable<casaWhereInput>
    OR?: Enumerable<casaWhereInput>
    NOT?: Enumerable<casaWhereInput>
    id?: IntFilter | number
    nombre?: StringFilter | string
    baja?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type casaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    baja?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type casaWhereUniqueInput = {
    id?: number
    nombre?: string
  }

  export type casaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    baja?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: casaCountOrderByAggregateInput
    _avg?: casaAvgOrderByAggregateInput
    _max?: casaMaxOrderByAggregateInput
    _min?: casaMinOrderByAggregateInput
    _sum?: casaSumOrderByAggregateInput
  }

  export type casaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<casaScalarWhereWithAggregatesInput>
    OR?: Enumerable<casaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<casaScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    nombre?: StringWithAggregatesFilter | string
    baja?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type empleadaWhereInput = {
    AND?: Enumerable<empleadaWhereInput>
    OR?: Enumerable<empleadaWhereInput>
    NOT?: Enumerable<empleadaWhereInput>
    id?: IntFilter | number
    nombre?: StringFilter | string
    baja?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    servicios?: ServicioListRelationFilter
  }

  export type empleadaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    baja?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    servicios?: servicioOrderByRelationAggregateInput
  }

  export type empleadaWhereUniqueInput = {
    id?: number
    nombre?: string
  }

  export type empleadaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    baja?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: empleadaCountOrderByAggregateInput
    _avg?: empleadaAvgOrderByAggregateInput
    _max?: empleadaMaxOrderByAggregateInput
    _min?: empleadaMinOrderByAggregateInput
    _sum?: empleadaSumOrderByAggregateInput
  }

  export type empleadaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<empleadaScalarWhereWithAggregatesInput>
    OR?: Enumerable<empleadaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<empleadaScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    nombre?: StringWithAggregatesFilter | string
    baja?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type servicioWhereInput = {
    AND?: Enumerable<servicioWhereInput>
    OR?: Enumerable<servicioWhereInput>
    NOT?: Enumerable<servicioWhereInput>
    id?: IntFilter | number
    fecha?: DateTimeFilter | Date | string
    horaInicio?: DateTimeFilter | Date | string
    horaFin?: DateTimeFilter | Date | string
    suplLevantar?: BoolFilter | boolean
    empleadaId?: IntFilter | number
    pagado?: BoolFilter | boolean
    horas?: IntFilter | number
    minutos?: IntFilter | number
    importe?: DecimalFilter | Decimal | DecimalJsLike | number | string
    observacion?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    empleada?: XOR<EmpleadaRelationFilter, empleadaWhereInput>
    gasto?: XOR<GastoRelationFilter, gastoWhereInput> | null
  }

  export type servicioOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    suplLevantar?: SortOrder
    empleadaId?: SortOrder
    pagado?: SortOrder
    horas?: SortOrder
    minutos?: SortOrder
    importe?: SortOrder
    observacion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    empleada?: empleadaOrderByWithRelationInput
    gasto?: gastoOrderByWithRelationInput
  }

  export type servicioWhereUniqueInput = {
    id?: number
  }

  export type servicioOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    suplLevantar?: SortOrder
    empleadaId?: SortOrder
    pagado?: SortOrder
    horas?: SortOrder
    minutos?: SortOrder
    importe?: SortOrder
    observacion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: servicioCountOrderByAggregateInput
    _avg?: servicioAvgOrderByAggregateInput
    _max?: servicioMaxOrderByAggregateInput
    _min?: servicioMinOrderByAggregateInput
    _sum?: servicioSumOrderByAggregateInput
  }

  export type servicioScalarWhereWithAggregatesInput = {
    AND?: Enumerable<servicioScalarWhereWithAggregatesInput>
    OR?: Enumerable<servicioScalarWhereWithAggregatesInput>
    NOT?: Enumerable<servicioScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    fecha?: DateTimeWithAggregatesFilter | Date | string
    horaInicio?: DateTimeWithAggregatesFilter | Date | string
    horaFin?: DateTimeWithAggregatesFilter | Date | string
    suplLevantar?: BoolWithAggregatesFilter | boolean
    empleadaId?: IntWithAggregatesFilter | number
    pagado?: BoolWithAggregatesFilter | boolean
    horas?: IntWithAggregatesFilter | number
    minutos?: IntWithAggregatesFilter | number
    importe?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    observacion?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type turnoWhereInput = {
    AND?: Enumerable<turnoWhereInput>
    OR?: Enumerable<turnoWhereInput>
    NOT?: Enumerable<turnoWhereInput>
    id?: IntFilter | number
    fecha?: DateTimeFilter | Date | string
    quien?: StringFilter | string
  }

  export type turnoOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    quien?: SortOrder
  }

  export type turnoWhereUniqueInput = {
    id?: number
  }

  export type turnoOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    quien?: SortOrder
    _count?: turnoCountOrderByAggregateInput
    _avg?: turnoAvgOrderByAggregateInput
    _max?: turnoMaxOrderByAggregateInput
    _min?: turnoMinOrderByAggregateInput
    _sum?: turnoSumOrderByAggregateInput
  }

  export type turnoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<turnoScalarWhereWithAggregatesInput>
    OR?: Enumerable<turnoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<turnoScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    fecha?: DateTimeWithAggregatesFilter | Date | string
    quien?: StringWithAggregatesFilter | string
  }

  export type agendaWhereInput = {
    AND?: Enumerable<agendaWhereInput>
    OR?: Enumerable<agendaWhereInput>
    NOT?: Enumerable<agendaWhereInput>
    id?: IntFilter | number
    fecha?: DateTimeFilter | Date | string
    tipoagendaId?: IntFilter | number
    observacion?: StringFilter | string
    tipo?: XOR<TipoagendaRelationFilter, tipoagendaWhereInput>
  }

  export type agendaOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    tipoagendaId?: SortOrder
    observacion?: SortOrder
    tipo?: tipoagendaOrderByWithRelationInput
  }

  export type agendaWhereUniqueInput = {
    id?: number
  }

  export type agendaOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    tipoagendaId?: SortOrder
    observacion?: SortOrder
    _count?: agendaCountOrderByAggregateInput
    _avg?: agendaAvgOrderByAggregateInput
    _max?: agendaMaxOrderByAggregateInput
    _min?: agendaMinOrderByAggregateInput
    _sum?: agendaSumOrderByAggregateInput
  }

  export type agendaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<agendaScalarWhereWithAggregatesInput>
    OR?: Enumerable<agendaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<agendaScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    fecha?: DateTimeWithAggregatesFilter | Date | string
    tipoagendaId?: IntWithAggregatesFilter | number
    observacion?: StringWithAggregatesFilter | string
  }

  export type tipoagendaWhereInput = {
    AND?: Enumerable<tipoagendaWhereInput>
    OR?: Enumerable<tipoagendaWhereInput>
    NOT?: Enumerable<tipoagendaWhereInput>
    id?: IntFilter | number
    descripcion?: StringFilter | string
    color?: StringFilter | string
    agendas?: AgendaListRelationFilter
  }

  export type tipoagendaOrderByWithRelationInput = {
    id?: SortOrder
    descripcion?: SortOrder
    color?: SortOrder
    agendas?: agendaOrderByRelationAggregateInput
  }

  export type tipoagendaWhereUniqueInput = {
    id?: number
    descripcion?: string
  }

  export type tipoagendaOrderByWithAggregationInput = {
    id?: SortOrder
    descripcion?: SortOrder
    color?: SortOrder
    _count?: tipoagendaCountOrderByAggregateInput
    _avg?: tipoagendaAvgOrderByAggregateInput
    _max?: tipoagendaMaxOrderByAggregateInput
    _min?: tipoagendaMinOrderByAggregateInput
    _sum?: tipoagendaSumOrderByAggregateInput
  }

  export type tipoagendaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<tipoagendaScalarWhereWithAggregatesInput>
    OR?: Enumerable<tipoagendaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<tipoagendaScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    descripcion?: StringWithAggregatesFilter | string
    color?: StringWithAggregatesFilter | string
  }

  export type gastoWhereInput = {
    AND?: Enumerable<gastoWhereInput>
    OR?: Enumerable<gastoWhereInput>
    NOT?: Enumerable<gastoWhereInput>
    id?: IntFilter | number
    fecha?: DateTimeFilter | Date | string
    tipogastoId?: IntFilter | number
    importe?: DecimalFilter | Decimal | DecimalJsLike | number | string
    observacion?: StringNullableFilter | string | null
    servicioId?: IntNullableFilter | number | null
    pendientecobro?: BoolFilter | boolean
    tipo?: XOR<TipogastoRelationFilter, tipogastoWhereInput>
    servicio?: XOR<ServicioRelationFilter, servicioWhereInput> | null
  }

  export type gastoOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    tipogastoId?: SortOrder
    importe?: SortOrder
    observacion?: SortOrder
    servicioId?: SortOrder
    pendientecobro?: SortOrder
    tipo?: tipogastoOrderByWithRelationInput
    servicio?: servicioOrderByWithRelationInput
  }

  export type gastoWhereUniqueInput = {
    id?: number
    servicioId?: number
  }

  export type gastoOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    tipogastoId?: SortOrder
    importe?: SortOrder
    observacion?: SortOrder
    servicioId?: SortOrder
    pendientecobro?: SortOrder
    _count?: gastoCountOrderByAggregateInput
    _avg?: gastoAvgOrderByAggregateInput
    _max?: gastoMaxOrderByAggregateInput
    _min?: gastoMinOrderByAggregateInput
    _sum?: gastoSumOrderByAggregateInput
  }

  export type gastoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<gastoScalarWhereWithAggregatesInput>
    OR?: Enumerable<gastoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<gastoScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    fecha?: DateTimeWithAggregatesFilter | Date | string
    tipogastoId?: IntWithAggregatesFilter | number
    importe?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    observacion?: StringNullableWithAggregatesFilter | string | null
    servicioId?: IntNullableWithAggregatesFilter | number | null
    pendientecobro?: BoolWithAggregatesFilter | boolean
  }

  export type tipogastoWhereInput = {
    AND?: Enumerable<tipogastoWhereInput>
    OR?: Enumerable<tipogastoWhereInput>
    NOT?: Enumerable<tipogastoWhereInput>
    id?: IntFilter | number
    descripcion?: StringFilter | string
    color?: StringFilter | string
    gastos?: GastoListRelationFilter
  }

  export type tipogastoOrderByWithRelationInput = {
    id?: SortOrder
    descripcion?: SortOrder
    color?: SortOrder
    gastos?: gastoOrderByRelationAggregateInput
  }

  export type tipogastoWhereUniqueInput = {
    id?: number
    descripcion?: string
  }

  export type tipogastoOrderByWithAggregationInput = {
    id?: SortOrder
    descripcion?: SortOrder
    color?: SortOrder
    _count?: tipogastoCountOrderByAggregateInput
    _avg?: tipogastoAvgOrderByAggregateInput
    _max?: tipogastoMaxOrderByAggregateInput
    _min?: tipogastoMinOrderByAggregateInput
    _sum?: tipogastoSumOrderByAggregateInput
  }

  export type tipogastoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<tipogastoScalarWhereWithAggregatesInput>
    OR?: Enumerable<tipogastoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<tipogastoScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    descripcion?: StringWithAggregatesFilter | string
    color?: StringWithAggregatesFilter | string
  }

  export type productoWhereInput = {
    AND?: Enumerable<productoWhereInput>
    OR?: Enumerable<productoWhereInput>
    NOT?: Enumerable<productoWhereInput>
    id?: IntFilter | number
    descripcion?: StringFilter | string
    ListaCompras?: ListaCompraListRelationFilter
  }

  export type productoOrderByWithRelationInput = {
    id?: SortOrder
    descripcion?: SortOrder
    ListaCompras?: ListaCompraOrderByRelationAggregateInput
  }

  export type productoWhereUniqueInput = {
    id?: number
    descripcion?: string
  }

  export type productoOrderByWithAggregationInput = {
    id?: SortOrder
    descripcion?: SortOrder
    _count?: productoCountOrderByAggregateInput
    _avg?: productoAvgOrderByAggregateInput
    _max?: productoMaxOrderByAggregateInput
    _min?: productoMinOrderByAggregateInput
    _sum?: productoSumOrderByAggregateInput
  }

  export type productoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<productoScalarWhereWithAggregatesInput>
    OR?: Enumerable<productoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<productoScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    descripcion?: StringWithAggregatesFilter | string
  }

  export type ListaCompraWhereInput = {
    AND?: Enumerable<ListaCompraWhereInput>
    OR?: Enumerable<ListaCompraWhereInput>
    NOT?: Enumerable<ListaCompraWhereInput>
    productoId?: IntFilter | number
    producto?: XOR<ProductoRelationFilter, productoWhereInput>
  }

  export type ListaCompraOrderByWithRelationInput = {
    productoId?: SortOrder
    producto?: productoOrderByWithRelationInput
  }

  export type ListaCompraWhereUniqueInput = {
    productoId?: number
  }

  export type ListaCompraOrderByWithAggregationInput = {
    productoId?: SortOrder
    _count?: ListaCompraCountOrderByAggregateInput
    _avg?: ListaCompraAvgOrderByAggregateInput
    _max?: ListaCompraMaxOrderByAggregateInput
    _min?: ListaCompraMinOrderByAggregateInput
    _sum?: ListaCompraSumOrderByAggregateInput
  }

  export type ListaCompraScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ListaCompraScalarWhereWithAggregatesInput>
    OR?: Enumerable<ListaCompraScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ListaCompraScalarWhereWithAggregatesInput>
    productoId?: IntWithAggregatesFilter | number
  }

  export type configuracionWhereInput = {
    AND?: Enumerable<configuracionWhereInput>
    OR?: Enumerable<configuracionWhereInput>
    NOT?: Enumerable<configuracionWhereInput>
    key?: StringFilter | string
    value?: StringFilter | string
  }

  export type configuracionOrderByWithRelationInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type configuracionWhereUniqueInput = {
    key?: string
  }

  export type configuracionOrderByWithAggregationInput = {
    key?: SortOrder
    value?: SortOrder
    _count?: configuracionCountOrderByAggregateInput
    _max?: configuracionMaxOrderByAggregateInput
    _min?: configuracionMinOrderByAggregateInput
  }

  export type configuracionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<configuracionScalarWhereWithAggregatesInput>
    OR?: Enumerable<configuracionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<configuracionScalarWhereWithAggregatesInput>
    key?: StringWithAggregatesFilter | string
    value?: StringWithAggregatesFilter | string
  }

  export type casaCreateInput = {
    nombre: string
    baja: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type casaUncheckedCreateInput = {
    id?: number
    nombre: string
    baja: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type casaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    baja?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type casaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    baja?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type casaCreateManyInput = {
    id?: number
    nombre: string
    baja: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type casaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    baja?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type casaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    baja?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type empleadaCreateInput = {
    nombre: string
    baja: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    servicios?: servicioCreateNestedManyWithoutEmpleadaInput
  }

  export type empleadaUncheckedCreateInput = {
    id?: number
    nombre: string
    baja: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    servicios?: servicioUncheckedCreateNestedManyWithoutEmpleadaInput
  }

  export type empleadaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    baja?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicios?: servicioUpdateManyWithoutEmpleadaNestedInput
  }

  export type empleadaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    baja?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicios?: servicioUncheckedUpdateManyWithoutEmpleadaNestedInput
  }

  export type empleadaCreateManyInput = {
    id?: number
    nombre: string
    baja: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type empleadaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    baja?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type empleadaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    baja?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type servicioCreateInput = {
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    suplLevantar?: boolean
    pagado?: boolean
    horas: number
    minutos: number
    importe: Decimal | DecimalJsLike | number | string
    observacion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    empleada: empleadaCreateNestedOneWithoutServiciosInput
    gasto?: gastoCreateNestedOneWithoutServicioInput
  }

  export type servicioUncheckedCreateInput = {
    id?: number
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    suplLevantar?: boolean
    empleadaId: number
    pagado?: boolean
    horas: number
    minutos: number
    importe: Decimal | DecimalJsLike | number | string
    observacion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gasto?: gastoUncheckedCreateNestedOneWithoutServicioInput
  }

  export type servicioUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    suplLevantar?: BoolFieldUpdateOperationsInput | boolean
    pagado?: BoolFieldUpdateOperationsInput | boolean
    horas?: IntFieldUpdateOperationsInput | number
    minutos?: IntFieldUpdateOperationsInput | number
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    empleada?: empleadaUpdateOneRequiredWithoutServiciosNestedInput
    gasto?: gastoUpdateOneWithoutServicioNestedInput
  }

  export type servicioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    suplLevantar?: BoolFieldUpdateOperationsInput | boolean
    empleadaId?: IntFieldUpdateOperationsInput | number
    pagado?: BoolFieldUpdateOperationsInput | boolean
    horas?: IntFieldUpdateOperationsInput | number
    minutos?: IntFieldUpdateOperationsInput | number
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gasto?: gastoUncheckedUpdateOneWithoutServicioNestedInput
  }

  export type servicioCreateManyInput = {
    id?: number
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    suplLevantar?: boolean
    empleadaId: number
    pagado?: boolean
    horas: number
    minutos: number
    importe: Decimal | DecimalJsLike | number | string
    observacion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type servicioUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    suplLevantar?: BoolFieldUpdateOperationsInput | boolean
    pagado?: BoolFieldUpdateOperationsInput | boolean
    horas?: IntFieldUpdateOperationsInput | number
    minutos?: IntFieldUpdateOperationsInput | number
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type servicioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    suplLevantar?: BoolFieldUpdateOperationsInput | boolean
    empleadaId?: IntFieldUpdateOperationsInput | number
    pagado?: BoolFieldUpdateOperationsInput | boolean
    horas?: IntFieldUpdateOperationsInput | number
    minutos?: IntFieldUpdateOperationsInput | number
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type turnoCreateInput = {
    fecha: Date | string
    quien: string
  }

  export type turnoUncheckedCreateInput = {
    id?: number
    fecha: Date | string
    quien: string
  }

  export type turnoUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    quien?: StringFieldUpdateOperationsInput | string
  }

  export type turnoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    quien?: StringFieldUpdateOperationsInput | string
  }

  export type turnoCreateManyInput = {
    id?: number
    fecha: Date | string
    quien: string
  }

  export type turnoUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    quien?: StringFieldUpdateOperationsInput | string
  }

  export type turnoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    quien?: StringFieldUpdateOperationsInput | string
  }

  export type agendaCreateInput = {
    fecha: Date | string
    observacion: string
    tipo: tipoagendaCreateNestedOneWithoutAgendasInput
  }

  export type agendaUncheckedCreateInput = {
    id?: number
    fecha: Date | string
    tipoagendaId: number
    observacion: string
  }

  export type agendaUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    observacion?: StringFieldUpdateOperationsInput | string
    tipo?: tipoagendaUpdateOneRequiredWithoutAgendasNestedInput
  }

  export type agendaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoagendaId?: IntFieldUpdateOperationsInput | number
    observacion?: StringFieldUpdateOperationsInput | string
  }

  export type agendaCreateManyInput = {
    id?: number
    fecha: Date | string
    tipoagendaId: number
    observacion: string
  }

  export type agendaUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    observacion?: StringFieldUpdateOperationsInput | string
  }

  export type agendaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoagendaId?: IntFieldUpdateOperationsInput | number
    observacion?: StringFieldUpdateOperationsInput | string
  }

  export type tipoagendaCreateInput = {
    descripcion: string
    color: string
    agendas?: agendaCreateNestedManyWithoutTipoInput
  }

  export type tipoagendaUncheckedCreateInput = {
    id?: number
    descripcion: string
    color: string
    agendas?: agendaUncheckedCreateNestedManyWithoutTipoInput
  }

  export type tipoagendaUpdateInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    agendas?: agendaUpdateManyWithoutTipoNestedInput
  }

  export type tipoagendaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    agendas?: agendaUncheckedUpdateManyWithoutTipoNestedInput
  }

  export type tipoagendaCreateManyInput = {
    id?: number
    descripcion: string
    color: string
  }

  export type tipoagendaUpdateManyMutationInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type tipoagendaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type gastoCreateInput = {
    fecha: Date | string
    importe: Decimal | DecimalJsLike | number | string
    observacion?: string | null
    pendientecobro?: boolean
    tipo: tipogastoCreateNestedOneWithoutGastosInput
    servicio?: servicioCreateNestedOneWithoutGastoInput
  }

  export type gastoUncheckedCreateInput = {
    id?: number
    fecha: Date | string
    tipogastoId: number
    importe: Decimal | DecimalJsLike | number | string
    observacion?: string | null
    servicioId?: number | null
    pendientecobro?: boolean
  }

  export type gastoUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    pendientecobro?: BoolFieldUpdateOperationsInput | boolean
    tipo?: tipogastoUpdateOneRequiredWithoutGastosNestedInput
    servicio?: servicioUpdateOneWithoutGastoNestedInput
  }

  export type gastoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    tipogastoId?: IntFieldUpdateOperationsInput | number
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    servicioId?: NullableIntFieldUpdateOperationsInput | number | null
    pendientecobro?: BoolFieldUpdateOperationsInput | boolean
  }

  export type gastoCreateManyInput = {
    id?: number
    fecha: Date | string
    tipogastoId: number
    importe: Decimal | DecimalJsLike | number | string
    observacion?: string | null
    servicioId?: number | null
    pendientecobro?: boolean
  }

  export type gastoUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    pendientecobro?: BoolFieldUpdateOperationsInput | boolean
  }

  export type gastoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    tipogastoId?: IntFieldUpdateOperationsInput | number
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    servicioId?: NullableIntFieldUpdateOperationsInput | number | null
    pendientecobro?: BoolFieldUpdateOperationsInput | boolean
  }

  export type tipogastoCreateInput = {
    descripcion: string
    color: string
    gastos?: gastoCreateNestedManyWithoutTipoInput
  }

  export type tipogastoUncheckedCreateInput = {
    id?: number
    descripcion: string
    color: string
    gastos?: gastoUncheckedCreateNestedManyWithoutTipoInput
  }

  export type tipogastoUpdateInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    gastos?: gastoUpdateManyWithoutTipoNestedInput
  }

  export type tipogastoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    gastos?: gastoUncheckedUpdateManyWithoutTipoNestedInput
  }

  export type tipogastoCreateManyInput = {
    id?: number
    descripcion: string
    color: string
  }

  export type tipogastoUpdateManyMutationInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type tipogastoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type productoCreateInput = {
    descripcion: string
    ListaCompras?: ListaCompraCreateNestedManyWithoutProductoInput
  }

  export type productoUncheckedCreateInput = {
    id?: number
    descripcion: string
    ListaCompras?: ListaCompraUncheckedCreateNestedManyWithoutProductoInput
  }

  export type productoUpdateInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    ListaCompras?: ListaCompraUpdateManyWithoutProductoNestedInput
  }

  export type productoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    ListaCompras?: ListaCompraUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type productoCreateManyInput = {
    id?: number
    descripcion: string
  }

  export type productoUpdateManyMutationInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type productoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type ListaCompraCreateInput = {
    producto: productoCreateNestedOneWithoutListaComprasInput
  }

  export type ListaCompraUncheckedCreateInput = {
    productoId: number
  }

  export type ListaCompraUpdateInput = {
    producto?: productoUpdateOneRequiredWithoutListaComprasNestedInput
  }

  export type ListaCompraUncheckedUpdateInput = {
    productoId?: IntFieldUpdateOperationsInput | number
  }

  export type ListaCompraCreateManyInput = {
    productoId: number
  }

  export type ListaCompraUpdateManyMutationInput = {

  }

  export type ListaCompraUncheckedUpdateManyInput = {
    productoId?: IntFieldUpdateOperationsInput | number
  }

  export type configuracionCreateInput = {
    key: string
    value: string
  }

  export type configuracionUncheckedCreateInput = {
    key: string
    value: string
  }

  export type configuracionUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type configuracionUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type configuracionCreateManyInput = {
    key: string
    value: string
  }

  export type configuracionUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type configuracionUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type casaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    baja?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type casaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type casaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    baja?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type casaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    baja?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type casaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type ServicioListRelationFilter = {
    every?: servicioWhereInput
    some?: servicioWhereInput
    none?: servicioWhereInput
  }

  export type servicioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type empleadaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    baja?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type empleadaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type empleadaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    baja?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type empleadaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    baja?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type empleadaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalFilter | Decimal | DecimalJsLike | number | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type EmpleadaRelationFilter = {
    is?: empleadaWhereInput
    isNot?: empleadaWhereInput
  }

  export type GastoRelationFilter = {
    is?: gastoWhereInput | null
    isNot?: gastoWhereInput | null
  }

  export type servicioCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    suplLevantar?: SortOrder
    empleadaId?: SortOrder
    pagado?: SortOrder
    horas?: SortOrder
    minutos?: SortOrder
    importe?: SortOrder
    observacion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type servicioAvgOrderByAggregateInput = {
    id?: SortOrder
    empleadaId?: SortOrder
    horas?: SortOrder
    minutos?: SortOrder
    importe?: SortOrder
  }

  export type servicioMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    suplLevantar?: SortOrder
    empleadaId?: SortOrder
    pagado?: SortOrder
    horas?: SortOrder
    minutos?: SortOrder
    importe?: SortOrder
    observacion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type servicioMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    suplLevantar?: SortOrder
    empleadaId?: SortOrder
    pagado?: SortOrder
    horas?: SortOrder
    minutos?: SortOrder
    importe?: SortOrder
    observacion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type servicioSumOrderByAggregateInput = {
    id?: SortOrder
    empleadaId?: SortOrder
    horas?: SortOrder
    minutos?: SortOrder
    importe?: SortOrder
  }

  export type DecimalWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type turnoCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    quien?: SortOrder
  }

  export type turnoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type turnoMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    quien?: SortOrder
  }

  export type turnoMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    quien?: SortOrder
  }

  export type turnoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TipoagendaRelationFilter = {
    is?: tipoagendaWhereInput
    isNot?: tipoagendaWhereInput
  }

  export type agendaCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    tipoagendaId?: SortOrder
    observacion?: SortOrder
  }

  export type agendaAvgOrderByAggregateInput = {
    id?: SortOrder
    tipoagendaId?: SortOrder
  }

  export type agendaMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    tipoagendaId?: SortOrder
    observacion?: SortOrder
  }

  export type agendaMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    tipoagendaId?: SortOrder
    observacion?: SortOrder
  }

  export type agendaSumOrderByAggregateInput = {
    id?: SortOrder
    tipoagendaId?: SortOrder
  }

  export type AgendaListRelationFilter = {
    every?: agendaWhereInput
    some?: agendaWhereInput
    none?: agendaWhereInput
  }

  export type agendaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tipoagendaCountOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
    color?: SortOrder
  }

  export type tipoagendaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tipoagendaMaxOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
    color?: SortOrder
  }

  export type tipoagendaMinOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
    color?: SortOrder
  }

  export type tipoagendaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type TipogastoRelationFilter = {
    is?: tipogastoWhereInput
    isNot?: tipogastoWhereInput
  }

  export type ServicioRelationFilter = {
    is?: servicioWhereInput | null
    isNot?: servicioWhereInput | null
  }

  export type gastoCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    tipogastoId?: SortOrder
    importe?: SortOrder
    observacion?: SortOrder
    servicioId?: SortOrder
    pendientecobro?: SortOrder
  }

  export type gastoAvgOrderByAggregateInput = {
    id?: SortOrder
    tipogastoId?: SortOrder
    importe?: SortOrder
    servicioId?: SortOrder
  }

  export type gastoMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    tipogastoId?: SortOrder
    importe?: SortOrder
    observacion?: SortOrder
    servicioId?: SortOrder
    pendientecobro?: SortOrder
  }

  export type gastoMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    tipogastoId?: SortOrder
    importe?: SortOrder
    observacion?: SortOrder
    servicioId?: SortOrder
    pendientecobro?: SortOrder
  }

  export type gastoSumOrderByAggregateInput = {
    id?: SortOrder
    tipogastoId?: SortOrder
    importe?: SortOrder
    servicioId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type GastoListRelationFilter = {
    every?: gastoWhereInput
    some?: gastoWhereInput
    none?: gastoWhereInput
  }

  export type gastoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tipogastoCountOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
    color?: SortOrder
  }

  export type tipogastoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tipogastoMaxOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
    color?: SortOrder
  }

  export type tipogastoMinOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
    color?: SortOrder
  }

  export type tipogastoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ListaCompraListRelationFilter = {
    every?: ListaCompraWhereInput
    some?: ListaCompraWhereInput
    none?: ListaCompraWhereInput
  }

  export type ListaCompraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productoCountOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
  }

  export type productoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type productoMaxOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
  }

  export type productoMinOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
  }

  export type productoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProductoRelationFilter = {
    is?: productoWhereInput
    isNot?: productoWhereInput
  }

  export type ListaCompraCountOrderByAggregateInput = {
    productoId?: SortOrder
  }

  export type ListaCompraAvgOrderByAggregateInput = {
    productoId?: SortOrder
  }

  export type ListaCompraMaxOrderByAggregateInput = {
    productoId?: SortOrder
  }

  export type ListaCompraMinOrderByAggregateInput = {
    productoId?: SortOrder
  }

  export type ListaCompraSumOrderByAggregateInput = {
    productoId?: SortOrder
  }

  export type configuracionCountOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type configuracionMaxOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type configuracionMinOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type servicioCreateNestedManyWithoutEmpleadaInput = {
    create?: XOR<Enumerable<servicioCreateWithoutEmpleadaInput>, Enumerable<servicioUncheckedCreateWithoutEmpleadaInput>>
    connectOrCreate?: Enumerable<servicioCreateOrConnectWithoutEmpleadaInput>
    createMany?: servicioCreateManyEmpleadaInputEnvelope
    connect?: Enumerable<servicioWhereUniqueInput>
  }

  export type servicioUncheckedCreateNestedManyWithoutEmpleadaInput = {
    create?: XOR<Enumerable<servicioCreateWithoutEmpleadaInput>, Enumerable<servicioUncheckedCreateWithoutEmpleadaInput>>
    connectOrCreate?: Enumerable<servicioCreateOrConnectWithoutEmpleadaInput>
    createMany?: servicioCreateManyEmpleadaInputEnvelope
    connect?: Enumerable<servicioWhereUniqueInput>
  }

  export type servicioUpdateManyWithoutEmpleadaNestedInput = {
    create?: XOR<Enumerable<servicioCreateWithoutEmpleadaInput>, Enumerable<servicioUncheckedCreateWithoutEmpleadaInput>>
    connectOrCreate?: Enumerable<servicioCreateOrConnectWithoutEmpleadaInput>
    upsert?: Enumerable<servicioUpsertWithWhereUniqueWithoutEmpleadaInput>
    createMany?: servicioCreateManyEmpleadaInputEnvelope
    set?: Enumerable<servicioWhereUniqueInput>
    disconnect?: Enumerable<servicioWhereUniqueInput>
    delete?: Enumerable<servicioWhereUniqueInput>
    connect?: Enumerable<servicioWhereUniqueInput>
    update?: Enumerable<servicioUpdateWithWhereUniqueWithoutEmpleadaInput>
    updateMany?: Enumerable<servicioUpdateManyWithWhereWithoutEmpleadaInput>
    deleteMany?: Enumerable<servicioScalarWhereInput>
  }

  export type servicioUncheckedUpdateManyWithoutEmpleadaNestedInput = {
    create?: XOR<Enumerable<servicioCreateWithoutEmpleadaInput>, Enumerable<servicioUncheckedCreateWithoutEmpleadaInput>>
    connectOrCreate?: Enumerable<servicioCreateOrConnectWithoutEmpleadaInput>
    upsert?: Enumerable<servicioUpsertWithWhereUniqueWithoutEmpleadaInput>
    createMany?: servicioCreateManyEmpleadaInputEnvelope
    set?: Enumerable<servicioWhereUniqueInput>
    disconnect?: Enumerable<servicioWhereUniqueInput>
    delete?: Enumerable<servicioWhereUniqueInput>
    connect?: Enumerable<servicioWhereUniqueInput>
    update?: Enumerable<servicioUpdateWithWhereUniqueWithoutEmpleadaInput>
    updateMany?: Enumerable<servicioUpdateManyWithWhereWithoutEmpleadaInput>
    deleteMany?: Enumerable<servicioScalarWhereInput>
  }

  export type empleadaCreateNestedOneWithoutServiciosInput = {
    create?: XOR<empleadaCreateWithoutServiciosInput, empleadaUncheckedCreateWithoutServiciosInput>
    connectOrCreate?: empleadaCreateOrConnectWithoutServiciosInput
    connect?: empleadaWhereUniqueInput
  }

  export type gastoCreateNestedOneWithoutServicioInput = {
    create?: XOR<gastoCreateWithoutServicioInput, gastoUncheckedCreateWithoutServicioInput>
    connectOrCreate?: gastoCreateOrConnectWithoutServicioInput
    connect?: gastoWhereUniqueInput
  }

  export type gastoUncheckedCreateNestedOneWithoutServicioInput = {
    create?: XOR<gastoCreateWithoutServicioInput, gastoUncheckedCreateWithoutServicioInput>
    connectOrCreate?: gastoCreateOrConnectWithoutServicioInput
    connect?: gastoWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type empleadaUpdateOneRequiredWithoutServiciosNestedInput = {
    create?: XOR<empleadaCreateWithoutServiciosInput, empleadaUncheckedCreateWithoutServiciosInput>
    connectOrCreate?: empleadaCreateOrConnectWithoutServiciosInput
    upsert?: empleadaUpsertWithoutServiciosInput
    connect?: empleadaWhereUniqueInput
    update?: XOR<empleadaUpdateWithoutServiciosInput, empleadaUncheckedUpdateWithoutServiciosInput>
  }

  export type gastoUpdateOneWithoutServicioNestedInput = {
    create?: XOR<gastoCreateWithoutServicioInput, gastoUncheckedCreateWithoutServicioInput>
    connectOrCreate?: gastoCreateOrConnectWithoutServicioInput
    upsert?: gastoUpsertWithoutServicioInput
    disconnect?: boolean
    delete?: boolean
    connect?: gastoWhereUniqueInput
    update?: XOR<gastoUpdateWithoutServicioInput, gastoUncheckedUpdateWithoutServicioInput>
  }

  export type gastoUncheckedUpdateOneWithoutServicioNestedInput = {
    create?: XOR<gastoCreateWithoutServicioInput, gastoUncheckedCreateWithoutServicioInput>
    connectOrCreate?: gastoCreateOrConnectWithoutServicioInput
    upsert?: gastoUpsertWithoutServicioInput
    disconnect?: boolean
    delete?: boolean
    connect?: gastoWhereUniqueInput
    update?: XOR<gastoUpdateWithoutServicioInput, gastoUncheckedUpdateWithoutServicioInput>
  }

  export type tipoagendaCreateNestedOneWithoutAgendasInput = {
    create?: XOR<tipoagendaCreateWithoutAgendasInput, tipoagendaUncheckedCreateWithoutAgendasInput>
    connectOrCreate?: tipoagendaCreateOrConnectWithoutAgendasInput
    connect?: tipoagendaWhereUniqueInput
  }

  export type tipoagendaUpdateOneRequiredWithoutAgendasNestedInput = {
    create?: XOR<tipoagendaCreateWithoutAgendasInput, tipoagendaUncheckedCreateWithoutAgendasInput>
    connectOrCreate?: tipoagendaCreateOrConnectWithoutAgendasInput
    upsert?: tipoagendaUpsertWithoutAgendasInput
    connect?: tipoagendaWhereUniqueInput
    update?: XOR<tipoagendaUpdateWithoutAgendasInput, tipoagendaUncheckedUpdateWithoutAgendasInput>
  }

  export type agendaCreateNestedManyWithoutTipoInput = {
    create?: XOR<Enumerable<agendaCreateWithoutTipoInput>, Enumerable<agendaUncheckedCreateWithoutTipoInput>>
    connectOrCreate?: Enumerable<agendaCreateOrConnectWithoutTipoInput>
    createMany?: agendaCreateManyTipoInputEnvelope
    connect?: Enumerable<agendaWhereUniqueInput>
  }

  export type agendaUncheckedCreateNestedManyWithoutTipoInput = {
    create?: XOR<Enumerable<agendaCreateWithoutTipoInput>, Enumerable<agendaUncheckedCreateWithoutTipoInput>>
    connectOrCreate?: Enumerable<agendaCreateOrConnectWithoutTipoInput>
    createMany?: agendaCreateManyTipoInputEnvelope
    connect?: Enumerable<agendaWhereUniqueInput>
  }

  export type agendaUpdateManyWithoutTipoNestedInput = {
    create?: XOR<Enumerable<agendaCreateWithoutTipoInput>, Enumerable<agendaUncheckedCreateWithoutTipoInput>>
    connectOrCreate?: Enumerable<agendaCreateOrConnectWithoutTipoInput>
    upsert?: Enumerable<agendaUpsertWithWhereUniqueWithoutTipoInput>
    createMany?: agendaCreateManyTipoInputEnvelope
    set?: Enumerable<agendaWhereUniqueInput>
    disconnect?: Enumerable<agendaWhereUniqueInput>
    delete?: Enumerable<agendaWhereUniqueInput>
    connect?: Enumerable<agendaWhereUniqueInput>
    update?: Enumerable<agendaUpdateWithWhereUniqueWithoutTipoInput>
    updateMany?: Enumerable<agendaUpdateManyWithWhereWithoutTipoInput>
    deleteMany?: Enumerable<agendaScalarWhereInput>
  }

  export type agendaUncheckedUpdateManyWithoutTipoNestedInput = {
    create?: XOR<Enumerable<agendaCreateWithoutTipoInput>, Enumerable<agendaUncheckedCreateWithoutTipoInput>>
    connectOrCreate?: Enumerable<agendaCreateOrConnectWithoutTipoInput>
    upsert?: Enumerable<agendaUpsertWithWhereUniqueWithoutTipoInput>
    createMany?: agendaCreateManyTipoInputEnvelope
    set?: Enumerable<agendaWhereUniqueInput>
    disconnect?: Enumerable<agendaWhereUniqueInput>
    delete?: Enumerable<agendaWhereUniqueInput>
    connect?: Enumerable<agendaWhereUniqueInput>
    update?: Enumerable<agendaUpdateWithWhereUniqueWithoutTipoInput>
    updateMany?: Enumerable<agendaUpdateManyWithWhereWithoutTipoInput>
    deleteMany?: Enumerable<agendaScalarWhereInput>
  }

  export type tipogastoCreateNestedOneWithoutGastosInput = {
    create?: XOR<tipogastoCreateWithoutGastosInput, tipogastoUncheckedCreateWithoutGastosInput>
    connectOrCreate?: tipogastoCreateOrConnectWithoutGastosInput
    connect?: tipogastoWhereUniqueInput
  }

  export type servicioCreateNestedOneWithoutGastoInput = {
    create?: XOR<servicioCreateWithoutGastoInput, servicioUncheckedCreateWithoutGastoInput>
    connectOrCreate?: servicioCreateOrConnectWithoutGastoInput
    connect?: servicioWhereUniqueInput
  }

  export type tipogastoUpdateOneRequiredWithoutGastosNestedInput = {
    create?: XOR<tipogastoCreateWithoutGastosInput, tipogastoUncheckedCreateWithoutGastosInput>
    connectOrCreate?: tipogastoCreateOrConnectWithoutGastosInput
    upsert?: tipogastoUpsertWithoutGastosInput
    connect?: tipogastoWhereUniqueInput
    update?: XOR<tipogastoUpdateWithoutGastosInput, tipogastoUncheckedUpdateWithoutGastosInput>
  }

  export type servicioUpdateOneWithoutGastoNestedInput = {
    create?: XOR<servicioCreateWithoutGastoInput, servicioUncheckedCreateWithoutGastoInput>
    connectOrCreate?: servicioCreateOrConnectWithoutGastoInput
    upsert?: servicioUpsertWithoutGastoInput
    disconnect?: boolean
    delete?: boolean
    connect?: servicioWhereUniqueInput
    update?: XOR<servicioUpdateWithoutGastoInput, servicioUncheckedUpdateWithoutGastoInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type gastoCreateNestedManyWithoutTipoInput = {
    create?: XOR<Enumerable<gastoCreateWithoutTipoInput>, Enumerable<gastoUncheckedCreateWithoutTipoInput>>
    connectOrCreate?: Enumerable<gastoCreateOrConnectWithoutTipoInput>
    createMany?: gastoCreateManyTipoInputEnvelope
    connect?: Enumerable<gastoWhereUniqueInput>
  }

  export type gastoUncheckedCreateNestedManyWithoutTipoInput = {
    create?: XOR<Enumerable<gastoCreateWithoutTipoInput>, Enumerable<gastoUncheckedCreateWithoutTipoInput>>
    connectOrCreate?: Enumerable<gastoCreateOrConnectWithoutTipoInput>
    createMany?: gastoCreateManyTipoInputEnvelope
    connect?: Enumerable<gastoWhereUniqueInput>
  }

  export type gastoUpdateManyWithoutTipoNestedInput = {
    create?: XOR<Enumerable<gastoCreateWithoutTipoInput>, Enumerable<gastoUncheckedCreateWithoutTipoInput>>
    connectOrCreate?: Enumerable<gastoCreateOrConnectWithoutTipoInput>
    upsert?: Enumerable<gastoUpsertWithWhereUniqueWithoutTipoInput>
    createMany?: gastoCreateManyTipoInputEnvelope
    set?: Enumerable<gastoWhereUniqueInput>
    disconnect?: Enumerable<gastoWhereUniqueInput>
    delete?: Enumerable<gastoWhereUniqueInput>
    connect?: Enumerable<gastoWhereUniqueInput>
    update?: Enumerable<gastoUpdateWithWhereUniqueWithoutTipoInput>
    updateMany?: Enumerable<gastoUpdateManyWithWhereWithoutTipoInput>
    deleteMany?: Enumerable<gastoScalarWhereInput>
  }

  export type gastoUncheckedUpdateManyWithoutTipoNestedInput = {
    create?: XOR<Enumerable<gastoCreateWithoutTipoInput>, Enumerable<gastoUncheckedCreateWithoutTipoInput>>
    connectOrCreate?: Enumerable<gastoCreateOrConnectWithoutTipoInput>
    upsert?: Enumerable<gastoUpsertWithWhereUniqueWithoutTipoInput>
    createMany?: gastoCreateManyTipoInputEnvelope
    set?: Enumerable<gastoWhereUniqueInput>
    disconnect?: Enumerable<gastoWhereUniqueInput>
    delete?: Enumerable<gastoWhereUniqueInput>
    connect?: Enumerable<gastoWhereUniqueInput>
    update?: Enumerable<gastoUpdateWithWhereUniqueWithoutTipoInput>
    updateMany?: Enumerable<gastoUpdateManyWithWhereWithoutTipoInput>
    deleteMany?: Enumerable<gastoScalarWhereInput>
  }

  export type ListaCompraCreateNestedManyWithoutProductoInput = {
    create?: XOR<Enumerable<ListaCompraCreateWithoutProductoInput>, Enumerable<ListaCompraUncheckedCreateWithoutProductoInput>>
    connectOrCreate?: Enumerable<ListaCompraCreateOrConnectWithoutProductoInput>
    createMany?: ListaCompraCreateManyProductoInputEnvelope
    connect?: Enumerable<ListaCompraWhereUniqueInput>
  }

  export type ListaCompraUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<Enumerable<ListaCompraCreateWithoutProductoInput>, Enumerable<ListaCompraUncheckedCreateWithoutProductoInput>>
    connectOrCreate?: Enumerable<ListaCompraCreateOrConnectWithoutProductoInput>
    createMany?: ListaCompraCreateManyProductoInputEnvelope
    connect?: Enumerable<ListaCompraWhereUniqueInput>
  }

  export type ListaCompraUpdateManyWithoutProductoNestedInput = {
    create?: XOR<Enumerable<ListaCompraCreateWithoutProductoInput>, Enumerable<ListaCompraUncheckedCreateWithoutProductoInput>>
    connectOrCreate?: Enumerable<ListaCompraCreateOrConnectWithoutProductoInput>
    createMany?: ListaCompraCreateManyProductoInputEnvelope
    set?: Enumerable<ListaCompraWhereUniqueInput>
    disconnect?: Enumerable<ListaCompraWhereUniqueInput>
    delete?: Enumerable<ListaCompraWhereUniqueInput>
    connect?: Enumerable<ListaCompraWhereUniqueInput>
    update?: Enumerable<ListaCompraUpdateWithWhereUniqueWithoutProductoInput>
    updateMany?: Enumerable<ListaCompraUpdateManyWithWhereWithoutProductoInput>
    deleteMany?: Enumerable<ListaCompraScalarWhereInput>
  }

  export type ListaCompraUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<Enumerable<ListaCompraCreateWithoutProductoInput>, Enumerable<ListaCompraUncheckedCreateWithoutProductoInput>>
    connectOrCreate?: Enumerable<ListaCompraCreateOrConnectWithoutProductoInput>
    createMany?: ListaCompraCreateManyProductoInputEnvelope
    set?: Enumerable<ListaCompraWhereUniqueInput>
    disconnect?: Enumerable<ListaCompraWhereUniqueInput>
    delete?: Enumerable<ListaCompraWhereUniqueInput>
    connect?: Enumerable<ListaCompraWhereUniqueInput>
    update?: Enumerable<ListaCompraUpdateWithWhereUniqueWithoutProductoInput>
    updateMany?: Enumerable<ListaCompraUpdateManyWithWhereWithoutProductoInput>
    deleteMany?: Enumerable<ListaCompraScalarWhereInput>
  }

  export type productoCreateNestedOneWithoutListaComprasInput = {
    create?: XOR<productoCreateWithoutListaComprasInput, productoUncheckedCreateWithoutListaComprasInput>
    connectOrCreate?: productoCreateOrConnectWithoutListaComprasInput
    connect?: productoWhereUniqueInput
  }

  export type productoUpdateOneRequiredWithoutListaComprasNestedInput = {
    create?: XOR<productoCreateWithoutListaComprasInput, productoUncheckedCreateWithoutListaComprasInput>
    connectOrCreate?: productoCreateOrConnectWithoutListaComprasInput
    upsert?: productoUpsertWithoutListaComprasInput
    connect?: productoWhereUniqueInput
    update?: XOR<productoUpdateWithoutListaComprasInput, productoUncheckedUpdateWithoutListaComprasInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedDecimalFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalFilter | Decimal | DecimalJsLike | number | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDecimalWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type servicioCreateWithoutEmpleadaInput = {
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    suplLevantar?: boolean
    pagado?: boolean
    horas: number
    minutos: number
    importe: Decimal | DecimalJsLike | number | string
    observacion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gasto?: gastoCreateNestedOneWithoutServicioInput
  }

  export type servicioUncheckedCreateWithoutEmpleadaInput = {
    id?: number
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    suplLevantar?: boolean
    pagado?: boolean
    horas: number
    minutos: number
    importe: Decimal | DecimalJsLike | number | string
    observacion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gasto?: gastoUncheckedCreateNestedOneWithoutServicioInput
  }

  export type servicioCreateOrConnectWithoutEmpleadaInput = {
    where: servicioWhereUniqueInput
    create: XOR<servicioCreateWithoutEmpleadaInput, servicioUncheckedCreateWithoutEmpleadaInput>
  }

  export type servicioCreateManyEmpleadaInputEnvelope = {
    data: Enumerable<servicioCreateManyEmpleadaInput>
    skipDuplicates?: boolean
  }

  export type servicioUpsertWithWhereUniqueWithoutEmpleadaInput = {
    where: servicioWhereUniqueInput
    update: XOR<servicioUpdateWithoutEmpleadaInput, servicioUncheckedUpdateWithoutEmpleadaInput>
    create: XOR<servicioCreateWithoutEmpleadaInput, servicioUncheckedCreateWithoutEmpleadaInput>
  }

  export type servicioUpdateWithWhereUniqueWithoutEmpleadaInput = {
    where: servicioWhereUniqueInput
    data: XOR<servicioUpdateWithoutEmpleadaInput, servicioUncheckedUpdateWithoutEmpleadaInput>
  }

  export type servicioUpdateManyWithWhereWithoutEmpleadaInput = {
    where: servicioScalarWhereInput
    data: XOR<servicioUpdateManyMutationInput, servicioUncheckedUpdateManyWithoutServiciosInput>
  }

  export type servicioScalarWhereInput = {
    AND?: Enumerable<servicioScalarWhereInput>
    OR?: Enumerable<servicioScalarWhereInput>
    NOT?: Enumerable<servicioScalarWhereInput>
    id?: IntFilter | number
    fecha?: DateTimeFilter | Date | string
    horaInicio?: DateTimeFilter | Date | string
    horaFin?: DateTimeFilter | Date | string
    suplLevantar?: BoolFilter | boolean
    empleadaId?: IntFilter | number
    pagado?: BoolFilter | boolean
    horas?: IntFilter | number
    minutos?: IntFilter | number
    importe?: DecimalFilter | Decimal | DecimalJsLike | number | string
    observacion?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type empleadaCreateWithoutServiciosInput = {
    nombre: string
    baja: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type empleadaUncheckedCreateWithoutServiciosInput = {
    id?: number
    nombre: string
    baja: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type empleadaCreateOrConnectWithoutServiciosInput = {
    where: empleadaWhereUniqueInput
    create: XOR<empleadaCreateWithoutServiciosInput, empleadaUncheckedCreateWithoutServiciosInput>
  }

  export type gastoCreateWithoutServicioInput = {
    fecha: Date | string
    importe: Decimal | DecimalJsLike | number | string
    observacion?: string | null
    pendientecobro?: boolean
    tipo: tipogastoCreateNestedOneWithoutGastosInput
  }

  export type gastoUncheckedCreateWithoutServicioInput = {
    id?: number
    fecha: Date | string
    tipogastoId: number
    importe: Decimal | DecimalJsLike | number | string
    observacion?: string | null
    pendientecobro?: boolean
  }

  export type gastoCreateOrConnectWithoutServicioInput = {
    where: gastoWhereUniqueInput
    create: XOR<gastoCreateWithoutServicioInput, gastoUncheckedCreateWithoutServicioInput>
  }

  export type empleadaUpsertWithoutServiciosInput = {
    update: XOR<empleadaUpdateWithoutServiciosInput, empleadaUncheckedUpdateWithoutServiciosInput>
    create: XOR<empleadaCreateWithoutServiciosInput, empleadaUncheckedCreateWithoutServiciosInput>
  }

  export type empleadaUpdateWithoutServiciosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    baja?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type empleadaUncheckedUpdateWithoutServiciosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    baja?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gastoUpsertWithoutServicioInput = {
    update: XOR<gastoUpdateWithoutServicioInput, gastoUncheckedUpdateWithoutServicioInput>
    create: XOR<gastoCreateWithoutServicioInput, gastoUncheckedCreateWithoutServicioInput>
  }

  export type gastoUpdateWithoutServicioInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    pendientecobro?: BoolFieldUpdateOperationsInput | boolean
    tipo?: tipogastoUpdateOneRequiredWithoutGastosNestedInput
  }

  export type gastoUncheckedUpdateWithoutServicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    tipogastoId?: IntFieldUpdateOperationsInput | number
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    pendientecobro?: BoolFieldUpdateOperationsInput | boolean
  }

  export type tipoagendaCreateWithoutAgendasInput = {
    descripcion: string
    color: string
  }

  export type tipoagendaUncheckedCreateWithoutAgendasInput = {
    id?: number
    descripcion: string
    color: string
  }

  export type tipoagendaCreateOrConnectWithoutAgendasInput = {
    where: tipoagendaWhereUniqueInput
    create: XOR<tipoagendaCreateWithoutAgendasInput, tipoagendaUncheckedCreateWithoutAgendasInput>
  }

  export type tipoagendaUpsertWithoutAgendasInput = {
    update: XOR<tipoagendaUpdateWithoutAgendasInput, tipoagendaUncheckedUpdateWithoutAgendasInput>
    create: XOR<tipoagendaCreateWithoutAgendasInput, tipoagendaUncheckedCreateWithoutAgendasInput>
  }

  export type tipoagendaUpdateWithoutAgendasInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type tipoagendaUncheckedUpdateWithoutAgendasInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type agendaCreateWithoutTipoInput = {
    fecha: Date | string
    observacion: string
  }

  export type agendaUncheckedCreateWithoutTipoInput = {
    id?: number
    fecha: Date | string
    observacion: string
  }

  export type agendaCreateOrConnectWithoutTipoInput = {
    where: agendaWhereUniqueInput
    create: XOR<agendaCreateWithoutTipoInput, agendaUncheckedCreateWithoutTipoInput>
  }

  export type agendaCreateManyTipoInputEnvelope = {
    data: Enumerable<agendaCreateManyTipoInput>
    skipDuplicates?: boolean
  }

  export type agendaUpsertWithWhereUniqueWithoutTipoInput = {
    where: agendaWhereUniqueInput
    update: XOR<agendaUpdateWithoutTipoInput, agendaUncheckedUpdateWithoutTipoInput>
    create: XOR<agendaCreateWithoutTipoInput, agendaUncheckedCreateWithoutTipoInput>
  }

  export type agendaUpdateWithWhereUniqueWithoutTipoInput = {
    where: agendaWhereUniqueInput
    data: XOR<agendaUpdateWithoutTipoInput, agendaUncheckedUpdateWithoutTipoInput>
  }

  export type agendaUpdateManyWithWhereWithoutTipoInput = {
    where: agendaScalarWhereInput
    data: XOR<agendaUpdateManyMutationInput, agendaUncheckedUpdateManyWithoutAgendasInput>
  }

  export type agendaScalarWhereInput = {
    AND?: Enumerable<agendaScalarWhereInput>
    OR?: Enumerable<agendaScalarWhereInput>
    NOT?: Enumerable<agendaScalarWhereInput>
    id?: IntFilter | number
    fecha?: DateTimeFilter | Date | string
    tipoagendaId?: IntFilter | number
    observacion?: StringFilter | string
  }

  export type tipogastoCreateWithoutGastosInput = {
    descripcion: string
    color: string
  }

  export type tipogastoUncheckedCreateWithoutGastosInput = {
    id?: number
    descripcion: string
    color: string
  }

  export type tipogastoCreateOrConnectWithoutGastosInput = {
    where: tipogastoWhereUniqueInput
    create: XOR<tipogastoCreateWithoutGastosInput, tipogastoUncheckedCreateWithoutGastosInput>
  }

  export type servicioCreateWithoutGastoInput = {
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    suplLevantar?: boolean
    pagado?: boolean
    horas: number
    minutos: number
    importe: Decimal | DecimalJsLike | number | string
    observacion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    empleada: empleadaCreateNestedOneWithoutServiciosInput
  }

  export type servicioUncheckedCreateWithoutGastoInput = {
    id?: number
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    suplLevantar?: boolean
    empleadaId: number
    pagado?: boolean
    horas: number
    minutos: number
    importe: Decimal | DecimalJsLike | number | string
    observacion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type servicioCreateOrConnectWithoutGastoInput = {
    where: servicioWhereUniqueInput
    create: XOR<servicioCreateWithoutGastoInput, servicioUncheckedCreateWithoutGastoInput>
  }

  export type tipogastoUpsertWithoutGastosInput = {
    update: XOR<tipogastoUpdateWithoutGastosInput, tipogastoUncheckedUpdateWithoutGastosInput>
    create: XOR<tipogastoCreateWithoutGastosInput, tipogastoUncheckedCreateWithoutGastosInput>
  }

  export type tipogastoUpdateWithoutGastosInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type tipogastoUncheckedUpdateWithoutGastosInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type servicioUpsertWithoutGastoInput = {
    update: XOR<servicioUpdateWithoutGastoInput, servicioUncheckedUpdateWithoutGastoInput>
    create: XOR<servicioCreateWithoutGastoInput, servicioUncheckedCreateWithoutGastoInput>
  }

  export type servicioUpdateWithoutGastoInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    suplLevantar?: BoolFieldUpdateOperationsInput | boolean
    pagado?: BoolFieldUpdateOperationsInput | boolean
    horas?: IntFieldUpdateOperationsInput | number
    minutos?: IntFieldUpdateOperationsInput | number
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    empleada?: empleadaUpdateOneRequiredWithoutServiciosNestedInput
  }

  export type servicioUncheckedUpdateWithoutGastoInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    suplLevantar?: BoolFieldUpdateOperationsInput | boolean
    empleadaId?: IntFieldUpdateOperationsInput | number
    pagado?: BoolFieldUpdateOperationsInput | boolean
    horas?: IntFieldUpdateOperationsInput | number
    minutos?: IntFieldUpdateOperationsInput | number
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gastoCreateWithoutTipoInput = {
    fecha: Date | string
    importe: Decimal | DecimalJsLike | number | string
    observacion?: string | null
    pendientecobro?: boolean
    servicio?: servicioCreateNestedOneWithoutGastoInput
  }

  export type gastoUncheckedCreateWithoutTipoInput = {
    id?: number
    fecha: Date | string
    importe: Decimal | DecimalJsLike | number | string
    observacion?: string | null
    servicioId?: number | null
    pendientecobro?: boolean
  }

  export type gastoCreateOrConnectWithoutTipoInput = {
    where: gastoWhereUniqueInput
    create: XOR<gastoCreateWithoutTipoInput, gastoUncheckedCreateWithoutTipoInput>
  }

  export type gastoCreateManyTipoInputEnvelope = {
    data: Enumerable<gastoCreateManyTipoInput>
    skipDuplicates?: boolean
  }

  export type gastoUpsertWithWhereUniqueWithoutTipoInput = {
    where: gastoWhereUniqueInput
    update: XOR<gastoUpdateWithoutTipoInput, gastoUncheckedUpdateWithoutTipoInput>
    create: XOR<gastoCreateWithoutTipoInput, gastoUncheckedCreateWithoutTipoInput>
  }

  export type gastoUpdateWithWhereUniqueWithoutTipoInput = {
    where: gastoWhereUniqueInput
    data: XOR<gastoUpdateWithoutTipoInput, gastoUncheckedUpdateWithoutTipoInput>
  }

  export type gastoUpdateManyWithWhereWithoutTipoInput = {
    where: gastoScalarWhereInput
    data: XOR<gastoUpdateManyMutationInput, gastoUncheckedUpdateManyWithoutGastosInput>
  }

  export type gastoScalarWhereInput = {
    AND?: Enumerable<gastoScalarWhereInput>
    OR?: Enumerable<gastoScalarWhereInput>
    NOT?: Enumerable<gastoScalarWhereInput>
    id?: IntFilter | number
    fecha?: DateTimeFilter | Date | string
    tipogastoId?: IntFilter | number
    importe?: DecimalFilter | Decimal | DecimalJsLike | number | string
    observacion?: StringNullableFilter | string | null
    servicioId?: IntNullableFilter | number | null
    pendientecobro?: BoolFilter | boolean
  }

  export type ListaCompraCreateWithoutProductoInput = {

  }

  export type ListaCompraUncheckedCreateWithoutProductoInput = {

  }

  export type ListaCompraCreateOrConnectWithoutProductoInput = {
    where: ListaCompraWhereUniqueInput
    create: XOR<ListaCompraCreateWithoutProductoInput, ListaCompraUncheckedCreateWithoutProductoInput>
  }

  export type ListaCompraCreateManyProductoInputEnvelope = {
    data: Enumerable<ListaCompraCreateManyProductoInput>
    skipDuplicates?: boolean
  }

  export type ListaCompraUpdateWithWhereUniqueWithoutProductoInput = {
    where: ListaCompraWhereUniqueInput
    data: XOR<ListaCompraUpdateWithoutProductoInput, ListaCompraUncheckedUpdateWithoutProductoInput>
  }

  export type ListaCompraUpdateManyWithWhereWithoutProductoInput = {
    where: ListaCompraScalarWhereInput
    data: XOR<ListaCompraUpdateManyMutationInput, ListaCompraUncheckedUpdateManyWithoutListaComprasInput>
  }

  export type ListaCompraScalarWhereInput = {
    AND?: Enumerable<ListaCompraScalarWhereInput>
    OR?: Enumerable<ListaCompraScalarWhereInput>
    NOT?: Enumerable<ListaCompraScalarWhereInput>
    productoId?: IntFilter | number
  }

  export type productoCreateWithoutListaComprasInput = {
    descripcion: string
  }

  export type productoUncheckedCreateWithoutListaComprasInput = {
    id?: number
    descripcion: string
  }

  export type productoCreateOrConnectWithoutListaComprasInput = {
    where: productoWhereUniqueInput
    create: XOR<productoCreateWithoutListaComprasInput, productoUncheckedCreateWithoutListaComprasInput>
  }

  export type productoUpsertWithoutListaComprasInput = {
    update: XOR<productoUpdateWithoutListaComprasInput, productoUncheckedUpdateWithoutListaComprasInput>
    create: XOR<productoCreateWithoutListaComprasInput, productoUncheckedCreateWithoutListaComprasInput>
  }

  export type productoUpdateWithoutListaComprasInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type productoUncheckedUpdateWithoutListaComprasInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type servicioCreateManyEmpleadaInput = {
    id?: number
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    suplLevantar?: boolean
    pagado?: boolean
    horas: number
    minutos: number
    importe: Decimal | DecimalJsLike | number | string
    observacion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type servicioUpdateWithoutEmpleadaInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    suplLevantar?: BoolFieldUpdateOperationsInput | boolean
    pagado?: BoolFieldUpdateOperationsInput | boolean
    horas?: IntFieldUpdateOperationsInput | number
    minutos?: IntFieldUpdateOperationsInput | number
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gasto?: gastoUpdateOneWithoutServicioNestedInput
  }

  export type servicioUncheckedUpdateWithoutEmpleadaInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    suplLevantar?: BoolFieldUpdateOperationsInput | boolean
    pagado?: BoolFieldUpdateOperationsInput | boolean
    horas?: IntFieldUpdateOperationsInput | number
    minutos?: IntFieldUpdateOperationsInput | number
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gasto?: gastoUncheckedUpdateOneWithoutServicioNestedInput
  }

  export type servicioUncheckedUpdateManyWithoutServiciosInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    suplLevantar?: BoolFieldUpdateOperationsInput | boolean
    pagado?: BoolFieldUpdateOperationsInput | boolean
    horas?: IntFieldUpdateOperationsInput | number
    minutos?: IntFieldUpdateOperationsInput | number
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type agendaCreateManyTipoInput = {
    id?: number
    fecha: Date | string
    observacion: string
  }

  export type agendaUpdateWithoutTipoInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    observacion?: StringFieldUpdateOperationsInput | string
  }

  export type agendaUncheckedUpdateWithoutTipoInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    observacion?: StringFieldUpdateOperationsInput | string
  }

  export type agendaUncheckedUpdateManyWithoutAgendasInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    observacion?: StringFieldUpdateOperationsInput | string
  }

  export type gastoCreateManyTipoInput = {
    id?: number
    fecha: Date | string
    importe: Decimal | DecimalJsLike | number | string
    observacion?: string | null
    servicioId?: number | null
    pendientecobro?: boolean
  }

  export type gastoUpdateWithoutTipoInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    pendientecobro?: BoolFieldUpdateOperationsInput | boolean
    servicio?: servicioUpdateOneWithoutGastoNestedInput
  }

  export type gastoUncheckedUpdateWithoutTipoInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    servicioId?: NullableIntFieldUpdateOperationsInput | number | null
    pendientecobro?: BoolFieldUpdateOperationsInput | boolean
  }

  export type gastoUncheckedUpdateManyWithoutGastosInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    servicioId?: NullableIntFieldUpdateOperationsInput | number | null
    pendientecobro?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ListaCompraCreateManyProductoInput = {

  }

  export type ListaCompraUpdateWithoutProductoInput = {

  }

  export type ListaCompraUncheckedUpdateWithoutProductoInput = {

  }

  export type ListaCompraUncheckedUpdateManyWithoutListaComprasInput = {

  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}