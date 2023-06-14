
/**
 * Client
**/

import * as runtime from './runtime/data-proxy';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model TC_tiposGastos
 * 
 */
export type TC_tiposGastos = {
  id: number
  descripcion: string
  createdAt: Date
  updatedAt: Date
}

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
  fechaInicio: Date
  fechaFin: Date
  suplLevantar: boolean
  empleadaId: number
  pagado: boolean
  createdAt: Date
  updatedAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TC_tiposGastos
 * const tC_tiposGastos = await prisma.tC_tiposGastos.findMany()
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
   * // Fetch zero or more TC_tiposGastos
   * const tC_tiposGastos = await prisma.tC_tiposGastos.findMany()
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
   * `prisma.tC_tiposGastos`: Exposes CRUD operations for the **TC_tiposGastos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TC_tiposGastos
    * const tC_tiposGastos = await prisma.tC_tiposGastos.findMany()
    * ```
    */
  get tC_tiposGastos(): Prisma.TC_tiposGastosDelegate<GlobalReject>;

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
   * Query Engine version: d9a4c5988f480fa576d43970d5a23641aa77bc9c
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
    TC_tiposGastos: 'TC_tiposGastos',
    casa: 'casa',
    empleada: 'empleada',
    servicio: 'servicio'
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
   * Models
   */

  /**
   * Model TC_tiposGastos
   */


  export type AggregateTC_tiposGastos = {
    _count: TC_tiposGastosCountAggregateOutputType | null
    _avg: TC_tiposGastosAvgAggregateOutputType | null
    _sum: TC_tiposGastosSumAggregateOutputType | null
    _min: TC_tiposGastosMinAggregateOutputType | null
    _max: TC_tiposGastosMaxAggregateOutputType | null
  }

  export type TC_tiposGastosAvgAggregateOutputType = {
    id: number | null
  }

  export type TC_tiposGastosSumAggregateOutputType = {
    id: number | null
  }

  export type TC_tiposGastosMinAggregateOutputType = {
    id: number | null
    descripcion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TC_tiposGastosMaxAggregateOutputType = {
    id: number | null
    descripcion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TC_tiposGastosCountAggregateOutputType = {
    id: number
    descripcion: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TC_tiposGastosAvgAggregateInputType = {
    id?: true
  }

  export type TC_tiposGastosSumAggregateInputType = {
    id?: true
  }

  export type TC_tiposGastosMinAggregateInputType = {
    id?: true
    descripcion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TC_tiposGastosMaxAggregateInputType = {
    id?: true
    descripcion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TC_tiposGastosCountAggregateInputType = {
    id?: true
    descripcion?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TC_tiposGastosAggregateArgs = {
    /**
     * Filter which TC_tiposGastos to aggregate.
     */
    where?: TC_tiposGastosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TC_tiposGastos to fetch.
     */
    orderBy?: Enumerable<TC_tiposGastosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TC_tiposGastosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TC_tiposGastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TC_tiposGastos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TC_tiposGastos
    **/
    _count?: true | TC_tiposGastosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TC_tiposGastosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TC_tiposGastosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TC_tiposGastosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TC_tiposGastosMaxAggregateInputType
  }

  export type GetTC_tiposGastosAggregateType<T extends TC_tiposGastosAggregateArgs> = {
        [P in keyof T & keyof AggregateTC_tiposGastos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTC_tiposGastos[P]>
      : GetScalarType<T[P], AggregateTC_tiposGastos[P]>
  }




  export type TC_tiposGastosGroupByArgs = {
    where?: TC_tiposGastosWhereInput
    orderBy?: Enumerable<TC_tiposGastosOrderByWithAggregationInput>
    by: TC_tiposGastosScalarFieldEnum[]
    having?: TC_tiposGastosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TC_tiposGastosCountAggregateInputType | true
    _avg?: TC_tiposGastosAvgAggregateInputType
    _sum?: TC_tiposGastosSumAggregateInputType
    _min?: TC_tiposGastosMinAggregateInputType
    _max?: TC_tiposGastosMaxAggregateInputType
  }


  export type TC_tiposGastosGroupByOutputType = {
    id: number
    descripcion: string
    createdAt: Date
    updatedAt: Date
    _count: TC_tiposGastosCountAggregateOutputType | null
    _avg: TC_tiposGastosAvgAggregateOutputType | null
    _sum: TC_tiposGastosSumAggregateOutputType | null
    _min: TC_tiposGastosMinAggregateOutputType | null
    _max: TC_tiposGastosMaxAggregateOutputType | null
  }

  type GetTC_tiposGastosGroupByPayload<T extends TC_tiposGastosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TC_tiposGastosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TC_tiposGastosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TC_tiposGastosGroupByOutputType[P]>
            : GetScalarType<T[P], TC_tiposGastosGroupByOutputType[P]>
        }
      >
    >


  export type TC_tiposGastosSelect = {
    id?: boolean
    descripcion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type TC_tiposGastosGetPayload<S extends boolean | null | undefined | TC_tiposGastosArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TC_tiposGastos :
    S extends undefined ? never :
    S extends { include: any } & (TC_tiposGastosArgs | TC_tiposGastosFindManyArgs)
    ? TC_tiposGastos 
    : S extends { select: any } & (TC_tiposGastosArgs | TC_tiposGastosFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TC_tiposGastos ? TC_tiposGastos[P] : never
  } 
      : TC_tiposGastos


  type TC_tiposGastosCountArgs = 
    Omit<TC_tiposGastosFindManyArgs, 'select' | 'include'> & {
      select?: TC_tiposGastosCountAggregateInputType | true
    }

  export interface TC_tiposGastosDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TC_tiposGastos that matches the filter.
     * @param {TC_tiposGastosFindUniqueArgs} args - Arguments to find a TC_tiposGastos
     * @example
     * // Get one TC_tiposGastos
     * const tC_tiposGastos = await prisma.tC_tiposGastos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TC_tiposGastosFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TC_tiposGastosFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TC_tiposGastos'> extends True ? Prisma__TC_tiposGastosClient<TC_tiposGastosGetPayload<T>> : Prisma__TC_tiposGastosClient<TC_tiposGastosGetPayload<T> | null, null>

    /**
     * Find one TC_tiposGastos that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TC_tiposGastosFindUniqueOrThrowArgs} args - Arguments to find a TC_tiposGastos
     * @example
     * // Get one TC_tiposGastos
     * const tC_tiposGastos = await prisma.tC_tiposGastos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TC_tiposGastosFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TC_tiposGastosFindUniqueOrThrowArgs>
    ): Prisma__TC_tiposGastosClient<TC_tiposGastosGetPayload<T>>

    /**
     * Find the first TC_tiposGastos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TC_tiposGastosFindFirstArgs} args - Arguments to find a TC_tiposGastos
     * @example
     * // Get one TC_tiposGastos
     * const tC_tiposGastos = await prisma.tC_tiposGastos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TC_tiposGastosFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TC_tiposGastosFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TC_tiposGastos'> extends True ? Prisma__TC_tiposGastosClient<TC_tiposGastosGetPayload<T>> : Prisma__TC_tiposGastosClient<TC_tiposGastosGetPayload<T> | null, null>

    /**
     * Find the first TC_tiposGastos that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TC_tiposGastosFindFirstOrThrowArgs} args - Arguments to find a TC_tiposGastos
     * @example
     * // Get one TC_tiposGastos
     * const tC_tiposGastos = await prisma.tC_tiposGastos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TC_tiposGastosFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TC_tiposGastosFindFirstOrThrowArgs>
    ): Prisma__TC_tiposGastosClient<TC_tiposGastosGetPayload<T>>

    /**
     * Find zero or more TC_tiposGastos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TC_tiposGastosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TC_tiposGastos
     * const tC_tiposGastos = await prisma.tC_tiposGastos.findMany()
     * 
     * // Get first 10 TC_tiposGastos
     * const tC_tiposGastos = await prisma.tC_tiposGastos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tC_tiposGastosWithIdOnly = await prisma.tC_tiposGastos.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TC_tiposGastosFindManyArgs>(
      args?: SelectSubset<T, TC_tiposGastosFindManyArgs>
    ): Prisma.PrismaPromise<Array<TC_tiposGastosGetPayload<T>>>

    /**
     * Create a TC_tiposGastos.
     * @param {TC_tiposGastosCreateArgs} args - Arguments to create a TC_tiposGastos.
     * @example
     * // Create one TC_tiposGastos
     * const TC_tiposGastos = await prisma.tC_tiposGastos.create({
     *   data: {
     *     // ... data to create a TC_tiposGastos
     *   }
     * })
     * 
    **/
    create<T extends TC_tiposGastosCreateArgs>(
      args: SelectSubset<T, TC_tiposGastosCreateArgs>
    ): Prisma__TC_tiposGastosClient<TC_tiposGastosGetPayload<T>>

    /**
     * Create many TC_tiposGastos.
     *     @param {TC_tiposGastosCreateManyArgs} args - Arguments to create many TC_tiposGastos.
     *     @example
     *     // Create many TC_tiposGastos
     *     const tC_tiposGastos = await prisma.tC_tiposGastos.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TC_tiposGastosCreateManyArgs>(
      args?: SelectSubset<T, TC_tiposGastosCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TC_tiposGastos.
     * @param {TC_tiposGastosDeleteArgs} args - Arguments to delete one TC_tiposGastos.
     * @example
     * // Delete one TC_tiposGastos
     * const TC_tiposGastos = await prisma.tC_tiposGastos.delete({
     *   where: {
     *     // ... filter to delete one TC_tiposGastos
     *   }
     * })
     * 
    **/
    delete<T extends TC_tiposGastosDeleteArgs>(
      args: SelectSubset<T, TC_tiposGastosDeleteArgs>
    ): Prisma__TC_tiposGastosClient<TC_tiposGastosGetPayload<T>>

    /**
     * Update one TC_tiposGastos.
     * @param {TC_tiposGastosUpdateArgs} args - Arguments to update one TC_tiposGastos.
     * @example
     * // Update one TC_tiposGastos
     * const tC_tiposGastos = await prisma.tC_tiposGastos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TC_tiposGastosUpdateArgs>(
      args: SelectSubset<T, TC_tiposGastosUpdateArgs>
    ): Prisma__TC_tiposGastosClient<TC_tiposGastosGetPayload<T>>

    /**
     * Delete zero or more TC_tiposGastos.
     * @param {TC_tiposGastosDeleteManyArgs} args - Arguments to filter TC_tiposGastos to delete.
     * @example
     * // Delete a few TC_tiposGastos
     * const { count } = await prisma.tC_tiposGastos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TC_tiposGastosDeleteManyArgs>(
      args?: SelectSubset<T, TC_tiposGastosDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TC_tiposGastos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TC_tiposGastosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TC_tiposGastos
     * const tC_tiposGastos = await prisma.tC_tiposGastos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TC_tiposGastosUpdateManyArgs>(
      args: SelectSubset<T, TC_tiposGastosUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TC_tiposGastos.
     * @param {TC_tiposGastosUpsertArgs} args - Arguments to update or create a TC_tiposGastos.
     * @example
     * // Update or create a TC_tiposGastos
     * const tC_tiposGastos = await prisma.tC_tiposGastos.upsert({
     *   create: {
     *     // ... data to create a TC_tiposGastos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TC_tiposGastos we want to update
     *   }
     * })
    **/
    upsert<T extends TC_tiposGastosUpsertArgs>(
      args: SelectSubset<T, TC_tiposGastosUpsertArgs>
    ): Prisma__TC_tiposGastosClient<TC_tiposGastosGetPayload<T>>

    /**
     * Count the number of TC_tiposGastos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TC_tiposGastosCountArgs} args - Arguments to filter TC_tiposGastos to count.
     * @example
     * // Count the number of TC_tiposGastos
     * const count = await prisma.tC_tiposGastos.count({
     *   where: {
     *     // ... the filter for the TC_tiposGastos we want to count
     *   }
     * })
    **/
    count<T extends TC_tiposGastosCountArgs>(
      args?: Subset<T, TC_tiposGastosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TC_tiposGastosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TC_tiposGastos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TC_tiposGastosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TC_tiposGastosAggregateArgs>(args: Subset<T, TC_tiposGastosAggregateArgs>): Prisma.PrismaPromise<GetTC_tiposGastosAggregateType<T>>

    /**
     * Group by TC_tiposGastos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TC_tiposGastosGroupByArgs} args - Group by arguments.
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
      T extends TC_tiposGastosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TC_tiposGastosGroupByArgs['orderBy'] }
        : { orderBy?: TC_tiposGastosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TC_tiposGastosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTC_tiposGastosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TC_tiposGastos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TC_tiposGastosClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * TC_tiposGastos base type for findUnique actions
   */
  export type TC_tiposGastosFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TC_tiposGastos
     */
    select?: TC_tiposGastosSelect | null
    /**
     * Filter, which TC_tiposGastos to fetch.
     */
    where: TC_tiposGastosWhereUniqueInput
  }

  /**
   * TC_tiposGastos findUnique
   */
  export interface TC_tiposGastosFindUniqueArgs extends TC_tiposGastosFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TC_tiposGastos findUniqueOrThrow
   */
  export type TC_tiposGastosFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TC_tiposGastos
     */
    select?: TC_tiposGastosSelect | null
    /**
     * Filter, which TC_tiposGastos to fetch.
     */
    where: TC_tiposGastosWhereUniqueInput
  }


  /**
   * TC_tiposGastos base type for findFirst actions
   */
  export type TC_tiposGastosFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TC_tiposGastos
     */
    select?: TC_tiposGastosSelect | null
    /**
     * Filter, which TC_tiposGastos to fetch.
     */
    where?: TC_tiposGastosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TC_tiposGastos to fetch.
     */
    orderBy?: Enumerable<TC_tiposGastosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TC_tiposGastos.
     */
    cursor?: TC_tiposGastosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TC_tiposGastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TC_tiposGastos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TC_tiposGastos.
     */
    distinct?: Enumerable<TC_tiposGastosScalarFieldEnum>
  }

  /**
   * TC_tiposGastos findFirst
   */
  export interface TC_tiposGastosFindFirstArgs extends TC_tiposGastosFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TC_tiposGastos findFirstOrThrow
   */
  export type TC_tiposGastosFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TC_tiposGastos
     */
    select?: TC_tiposGastosSelect | null
    /**
     * Filter, which TC_tiposGastos to fetch.
     */
    where?: TC_tiposGastosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TC_tiposGastos to fetch.
     */
    orderBy?: Enumerable<TC_tiposGastosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TC_tiposGastos.
     */
    cursor?: TC_tiposGastosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TC_tiposGastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TC_tiposGastos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TC_tiposGastos.
     */
    distinct?: Enumerable<TC_tiposGastosScalarFieldEnum>
  }


  /**
   * TC_tiposGastos findMany
   */
  export type TC_tiposGastosFindManyArgs = {
    /**
     * Select specific fields to fetch from the TC_tiposGastos
     */
    select?: TC_tiposGastosSelect | null
    /**
     * Filter, which TC_tiposGastos to fetch.
     */
    where?: TC_tiposGastosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TC_tiposGastos to fetch.
     */
    orderBy?: Enumerable<TC_tiposGastosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TC_tiposGastos.
     */
    cursor?: TC_tiposGastosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TC_tiposGastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TC_tiposGastos.
     */
    skip?: number
    distinct?: Enumerable<TC_tiposGastosScalarFieldEnum>
  }


  /**
   * TC_tiposGastos create
   */
  export type TC_tiposGastosCreateArgs = {
    /**
     * Select specific fields to fetch from the TC_tiposGastos
     */
    select?: TC_tiposGastosSelect | null
    /**
     * The data needed to create a TC_tiposGastos.
     */
    data: XOR<TC_tiposGastosCreateInput, TC_tiposGastosUncheckedCreateInput>
  }


  /**
   * TC_tiposGastos createMany
   */
  export type TC_tiposGastosCreateManyArgs = {
    /**
     * The data used to create many TC_tiposGastos.
     */
    data: Enumerable<TC_tiposGastosCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TC_tiposGastos update
   */
  export type TC_tiposGastosUpdateArgs = {
    /**
     * Select specific fields to fetch from the TC_tiposGastos
     */
    select?: TC_tiposGastosSelect | null
    /**
     * The data needed to update a TC_tiposGastos.
     */
    data: XOR<TC_tiposGastosUpdateInput, TC_tiposGastosUncheckedUpdateInput>
    /**
     * Choose, which TC_tiposGastos to update.
     */
    where: TC_tiposGastosWhereUniqueInput
  }


  /**
   * TC_tiposGastos updateMany
   */
  export type TC_tiposGastosUpdateManyArgs = {
    /**
     * The data used to update TC_tiposGastos.
     */
    data: XOR<TC_tiposGastosUpdateManyMutationInput, TC_tiposGastosUncheckedUpdateManyInput>
    /**
     * Filter which TC_tiposGastos to update
     */
    where?: TC_tiposGastosWhereInput
  }


  /**
   * TC_tiposGastos upsert
   */
  export type TC_tiposGastosUpsertArgs = {
    /**
     * Select specific fields to fetch from the TC_tiposGastos
     */
    select?: TC_tiposGastosSelect | null
    /**
     * The filter to search for the TC_tiposGastos to update in case it exists.
     */
    where: TC_tiposGastosWhereUniqueInput
    /**
     * In case the TC_tiposGastos found by the `where` argument doesn't exist, create a new TC_tiposGastos with this data.
     */
    create: XOR<TC_tiposGastosCreateInput, TC_tiposGastosUncheckedCreateInput>
    /**
     * In case the TC_tiposGastos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TC_tiposGastosUpdateInput, TC_tiposGastosUncheckedUpdateInput>
  }


  /**
   * TC_tiposGastos delete
   */
  export type TC_tiposGastosDeleteArgs = {
    /**
     * Select specific fields to fetch from the TC_tiposGastos
     */
    select?: TC_tiposGastosSelect | null
    /**
     * Filter which TC_tiposGastos to delete.
     */
    where: TC_tiposGastosWhereUniqueInput
  }


  /**
   * TC_tiposGastos deleteMany
   */
  export type TC_tiposGastosDeleteManyArgs = {
    /**
     * Filter which TC_tiposGastos to delete
     */
    where?: TC_tiposGastosWhereInput
  }


  /**
   * TC_tiposGastos without action
   */
  export type TC_tiposGastosArgs = {
    /**
     * Select specific fields to fetch from the TC_tiposGastos
     */
    select?: TC_tiposGastosSelect | null
  }



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
  }

  export type ServicioSumAggregateOutputType = {
    id: number | null
    empleadaId: number | null
  }

  export type ServicioMinAggregateOutputType = {
    id: number | null
    fechaInicio: Date | null
    fechaFin: Date | null
    suplLevantar: boolean | null
    empleadaId: number | null
    pagado: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServicioMaxAggregateOutputType = {
    id: number | null
    fechaInicio: Date | null
    fechaFin: Date | null
    suplLevantar: boolean | null
    empleadaId: number | null
    pagado: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServicioCountAggregateOutputType = {
    id: number
    fechaInicio: number
    fechaFin: number
    suplLevantar: number
    empleadaId: number
    pagado: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServicioAvgAggregateInputType = {
    id?: true
    empleadaId?: true
  }

  export type ServicioSumAggregateInputType = {
    id?: true
    empleadaId?: true
  }

  export type ServicioMinAggregateInputType = {
    id?: true
    fechaInicio?: true
    fechaFin?: true
    suplLevantar?: true
    empleadaId?: true
    pagado?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServicioMaxAggregateInputType = {
    id?: true
    fechaInicio?: true
    fechaFin?: true
    suplLevantar?: true
    empleadaId?: true
    pagado?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServicioCountAggregateInputType = {
    id?: true
    fechaInicio?: true
    fechaFin?: true
    suplLevantar?: true
    empleadaId?: true
    pagado?: true
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
    fechaInicio: Date
    fechaFin: Date
    suplLevantar: boolean
    empleadaId: number
    pagado: boolean
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
    fechaInicio?: boolean
    fechaFin?: boolean
    suplLevantar?: boolean
    empleadaId?: boolean
    pagado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    empleada?: boolean | empleadaArgs
  }


  export type servicioInclude = {
    empleada?: boolean | empleadaArgs
  }

  export type servicioGetPayload<S extends boolean | null | undefined | servicioArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? servicio :
    S extends undefined ? never :
    S extends { include: any } & (servicioArgs | servicioFindManyArgs)
    ? servicio  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'empleada' ? empleadaGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (servicioArgs | servicioFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'empleada' ? empleadaGetPayload<S['select'][P]> :  P extends keyof servicio ? servicio[P] : never
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
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CasaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    baja: 'baja',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CasaScalarFieldEnum = (typeof CasaScalarFieldEnum)[keyof typeof CasaScalarFieldEnum]


  export const EmpleadaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    baja: 'baja',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmpleadaScalarFieldEnum = (typeof EmpleadaScalarFieldEnum)[keyof typeof EmpleadaScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ServicioScalarFieldEnum: {
    id: 'id',
    fechaInicio: 'fechaInicio',
    fechaFin: 'fechaFin',
    suplLevantar: 'suplLevantar',
    empleadaId: 'empleadaId',
    pagado: 'pagado',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServicioScalarFieldEnum = (typeof ServicioScalarFieldEnum)[keyof typeof ServicioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TC_tiposGastosScalarFieldEnum: {
    id: 'id',
    descripcion: 'descripcion',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TC_tiposGastosScalarFieldEnum = (typeof TC_tiposGastosScalarFieldEnum)[keyof typeof TC_tiposGastosScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type TC_tiposGastosWhereInput = {
    AND?: Enumerable<TC_tiposGastosWhereInput>
    OR?: Enumerable<TC_tiposGastosWhereInput>
    NOT?: Enumerable<TC_tiposGastosWhereInput>
    id?: IntFilter | number
    descripcion?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TC_tiposGastosOrderByWithRelationInput = {
    id?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TC_tiposGastosWhereUniqueInput = {
    id?: number
  }

  export type TC_tiposGastosOrderByWithAggregationInput = {
    id?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TC_tiposGastosCountOrderByAggregateInput
    _avg?: TC_tiposGastosAvgOrderByAggregateInput
    _max?: TC_tiposGastosMaxOrderByAggregateInput
    _min?: TC_tiposGastosMinOrderByAggregateInput
    _sum?: TC_tiposGastosSumOrderByAggregateInput
  }

  export type TC_tiposGastosScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TC_tiposGastosScalarWhereWithAggregatesInput>
    OR?: Enumerable<TC_tiposGastosScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TC_tiposGastosScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    descripcion?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

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
    fechaInicio?: DateTimeFilter | Date | string
    fechaFin?: DateTimeFilter | Date | string
    suplLevantar?: BoolFilter | boolean
    empleadaId?: IntFilter | number
    pagado?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    empleada?: XOR<EmpleadaRelationFilter, empleadaWhereInput>
  }

  export type servicioOrderByWithRelationInput = {
    id?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    suplLevantar?: SortOrder
    empleadaId?: SortOrder
    pagado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    empleada?: empleadaOrderByWithRelationInput
  }

  export type servicioWhereUniqueInput = {
    id?: number
  }

  export type servicioOrderByWithAggregationInput = {
    id?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    suplLevantar?: SortOrder
    empleadaId?: SortOrder
    pagado?: SortOrder
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
    fechaInicio?: DateTimeWithAggregatesFilter | Date | string
    fechaFin?: DateTimeWithAggregatesFilter | Date | string
    suplLevantar?: BoolWithAggregatesFilter | boolean
    empleadaId?: IntWithAggregatesFilter | number
    pagado?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TC_tiposGastosCreateInput = {
    id: number
    descripcion: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TC_tiposGastosUncheckedCreateInput = {
    id: number
    descripcion: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TC_tiposGastosUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TC_tiposGastosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TC_tiposGastosCreateManyInput = {
    id: number
    descripcion: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TC_tiposGastosUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TC_tiposGastosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    fechaInicio: Date | string
    fechaFin: Date | string
    suplLevantar?: boolean
    pagado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    empleada: empleadaCreateNestedOneWithoutServiciosInput
  }

  export type servicioUncheckedCreateInput = {
    id?: number
    fechaInicio: Date | string
    fechaFin: Date | string
    suplLevantar?: boolean
    empleadaId: number
    pagado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type servicioUpdateInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    suplLevantar?: BoolFieldUpdateOperationsInput | boolean
    pagado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    empleada?: empleadaUpdateOneRequiredWithoutServiciosNestedInput
  }

  export type servicioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    suplLevantar?: BoolFieldUpdateOperationsInput | boolean
    empleadaId?: IntFieldUpdateOperationsInput | number
    pagado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type servicioCreateManyInput = {
    id?: number
    fechaInicio: Date | string
    fechaFin: Date | string
    suplLevantar?: boolean
    empleadaId: number
    pagado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type servicioUpdateManyMutationInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    suplLevantar?: BoolFieldUpdateOperationsInput | boolean
    pagado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type servicioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    suplLevantar?: BoolFieldUpdateOperationsInput | boolean
    empleadaId?: IntFieldUpdateOperationsInput | number
    pagado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type TC_tiposGastosCountOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TC_tiposGastosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TC_tiposGastosMaxOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TC_tiposGastosMinOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TC_tiposGastosSumOrderByAggregateInput = {
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

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
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

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
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

  export type EmpleadaRelationFilter = {
    is?: empleadaWhereInput
    isNot?: empleadaWhereInput
  }

  export type servicioCountOrderByAggregateInput = {
    id?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    suplLevantar?: SortOrder
    empleadaId?: SortOrder
    pagado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type servicioAvgOrderByAggregateInput = {
    id?: SortOrder
    empleadaId?: SortOrder
  }

  export type servicioMaxOrderByAggregateInput = {
    id?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    suplLevantar?: SortOrder
    empleadaId?: SortOrder
    pagado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type servicioMinOrderByAggregateInput = {
    id?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    suplLevantar?: SortOrder
    empleadaId?: SortOrder
    pagado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type servicioSumOrderByAggregateInput = {
    id?: SortOrder
    empleadaId?: SortOrder
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type empleadaUpdateOneRequiredWithoutServiciosNestedInput = {
    create?: XOR<empleadaCreateWithoutServiciosInput, empleadaUncheckedCreateWithoutServiciosInput>
    connectOrCreate?: empleadaCreateOrConnectWithoutServiciosInput
    upsert?: empleadaUpsertWithoutServiciosInput
    connect?: empleadaWhereUniqueInput
    update?: XOR<empleadaUpdateWithoutServiciosInput, empleadaUncheckedUpdateWithoutServiciosInput>
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

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type servicioCreateWithoutEmpleadaInput = {
    fechaInicio: Date | string
    fechaFin: Date | string
    suplLevantar?: boolean
    pagado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type servicioUncheckedCreateWithoutEmpleadaInput = {
    id?: number
    fechaInicio: Date | string
    fechaFin: Date | string
    suplLevantar?: boolean
    pagado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
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
    fechaInicio?: DateTimeFilter | Date | string
    fechaFin?: DateTimeFilter | Date | string
    suplLevantar?: BoolFilter | boolean
    empleadaId?: IntFilter | number
    pagado?: BoolFilter | boolean
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

  export type servicioCreateManyEmpleadaInput = {
    id?: number
    fechaInicio: Date | string
    fechaFin: Date | string
    suplLevantar?: boolean
    pagado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type servicioUpdateWithoutEmpleadaInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    suplLevantar?: BoolFieldUpdateOperationsInput | boolean
    pagado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type servicioUncheckedUpdateWithoutEmpleadaInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    suplLevantar?: BoolFieldUpdateOperationsInput | boolean
    pagado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type servicioUncheckedUpdateManyWithoutServiciosInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    suplLevantar?: BoolFieldUpdateOperationsInput | boolean
    pagado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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