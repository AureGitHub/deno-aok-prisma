
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model categoria
 * 
 */
export type categoria = {
  id: number
  descripcion: string
}

/**
 * Model categoriaxproducto
 * 
 */
export type categoriaxproducto = {
  id: number
  categoriaI: number
  descripcion: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categorias
 * const categorias = await prisma.categoria.findMany()
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
   * // Fetch zero or more Categorias
   * const categorias = await prisma.categoria.findMany()
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
   * `prisma.categoria`: Exposes CRUD operations for the **categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.categoriaDelegate<GlobalReject>;

  /**
   * `prisma.categoriaxproducto`: Exposes CRUD operations for the **categoriaxproducto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categoriaxproductos
    * const categoriaxproductos = await prisma.categoriaxproducto.findMany()
    * ```
    */
  get categoriaxproducto(): Prisma.categoriaxproductoDelegate<GlobalReject>;
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
    categoria: 'categoria',
    categoriaxproducto: 'categoriaxproducto'
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
   * Count Type CategoriaCountOutputType
   */


  export type CategoriaCountOutputType = {
    categoriaxproducto: number
  }

  export type CategoriaCountOutputTypeSelect = {
    categoriaxproducto?: boolean
  }

  export type CategoriaCountOutputTypeGetPayload<S extends boolean | null | undefined | CategoriaCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CategoriaCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CategoriaCountOutputTypeArgs)
    ? CategoriaCountOutputType 
    : S extends { select: any } & (CategoriaCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CategoriaCountOutputType ? CategoriaCountOutputType[P] : never
  } 
      : CategoriaCountOutputType




  // Custom InputTypes

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model categoria
   */


  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: number | null
    descripcion: string | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: number | null
    descripcion: string | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    descripcion: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id?: true
  }

  export type CategoriaSumAggregateInputType = {
    id?: true
  }

  export type CategoriaMinAggregateInputType = {
    id?: true
    descripcion?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    descripcion?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    descripcion?: true
    _all?: true
  }

  export type CategoriaAggregateArgs = {
    /**
     * Filter which categoria to aggregate.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: Enumerable<categoriaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs = {
    where?: categoriaWhereInput
    orderBy?: Enumerable<categoriaOrderByWithAggregationInput>
    by: CategoriaScalarFieldEnum[]
    having?: categoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }


  export type CategoriaGroupByOutputType = {
    id: number
    descripcion: string
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type categoriaSelect = {
    id?: boolean
    descripcion?: boolean
    categoriaxproducto?: boolean | categoria$categoriaxproductoArgs
    _count?: boolean | CategoriaCountOutputTypeArgs
  }


  export type categoriaInclude = {
    categoriaxproducto?: boolean | categoria$categoriaxproductoArgs
    _count?: boolean | CategoriaCountOutputTypeArgs
  }

  export type categoriaGetPayload<S extends boolean | null | undefined | categoriaArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? categoria :
    S extends undefined ? never :
    S extends { include: any } & (categoriaArgs | categoriaFindManyArgs)
    ? categoria  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'categoriaxproducto' ? Array < categoriaxproductoGetPayload<S['include'][P]>>  :
        P extends '_count' ? CategoriaCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (categoriaArgs | categoriaFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'categoriaxproducto' ? Array < categoriaxproductoGetPayload<S['select'][P]>>  :
        P extends '_count' ? CategoriaCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof categoria ? categoria[P] : never
  } 
      : categoria


  type categoriaCountArgs = 
    Omit<categoriaFindManyArgs, 'select' | 'include'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface categoriaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Categoria that matches the filter.
     * @param {categoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends categoriaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, categoriaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'categoria'> extends True ? Prisma__categoriaClient<categoriaGetPayload<T>> : Prisma__categoriaClient<categoriaGetPayload<T> | null, null>

    /**
     * Find one Categoria that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {categoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends categoriaFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, categoriaFindUniqueOrThrowArgs>
    ): Prisma__categoriaClient<categoriaGetPayload<T>>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends categoriaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, categoriaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'categoria'> extends True ? Prisma__categoriaClient<categoriaGetPayload<T>> : Prisma__categoriaClient<categoriaGetPayload<T> | null, null>

    /**
     * Find the first Categoria that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends categoriaFindFirstOrThrowArgs>(
      args?: SelectSubset<T, categoriaFindFirstOrThrowArgs>
    ): Prisma__categoriaClient<categoriaGetPayload<T>>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends categoriaFindManyArgs>(
      args?: SelectSubset<T, categoriaFindManyArgs>
    ): Prisma.PrismaPromise<Array<categoriaGetPayload<T>>>

    /**
     * Create a Categoria.
     * @param {categoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
    **/
    create<T extends categoriaCreateArgs>(
      args: SelectSubset<T, categoriaCreateArgs>
    ): Prisma__categoriaClient<categoriaGetPayload<T>>

    /**
     * Create many Categorias.
     *     @param {categoriaCreateManyArgs} args - Arguments to create many Categorias.
     *     @example
     *     // Create many Categorias
     *     const categoria = await prisma.categoria.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends categoriaCreateManyArgs>(
      args?: SelectSubset<T, categoriaCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categoria.
     * @param {categoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
    **/
    delete<T extends categoriaDeleteArgs>(
      args: SelectSubset<T, categoriaDeleteArgs>
    ): Prisma__categoriaClient<categoriaGetPayload<T>>

    /**
     * Update one Categoria.
     * @param {categoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends categoriaUpdateArgs>(
      args: SelectSubset<T, categoriaUpdateArgs>
    ): Prisma__categoriaClient<categoriaGetPayload<T>>

    /**
     * Delete zero or more Categorias.
     * @param {categoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends categoriaDeleteManyArgs>(
      args?: SelectSubset<T, categoriaDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends categoriaUpdateManyArgs>(
      args: SelectSubset<T, categoriaUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categoria.
     * @param {categoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
    **/
    upsert<T extends categoriaUpsertArgs>(
      args: SelectSubset<T, categoriaUpsertArgs>
    ): Prisma__categoriaClient<categoriaGetPayload<T>>

    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends categoriaCountArgs>(
      args?: Subset<T, categoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
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
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__categoriaClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    categoriaxproducto<T extends categoria$categoriaxproductoArgs= {}>(args?: Subset<T, categoria$categoriaxproductoArgs>): Prisma.PrismaPromise<Array<categoriaxproductoGetPayload<T>>| Null>;

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
   * categoria base type for findUnique actions
   */
  export type categoriaFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriaInclude | null
    /**
     * Filter, which categoria to fetch.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria findUnique
   */
  export interface categoriaFindUniqueArgs extends categoriaFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * categoria findUniqueOrThrow
   */
  export type categoriaFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriaInclude | null
    /**
     * Filter, which categoria to fetch.
     */
    where: categoriaWhereUniqueInput
  }


  /**
   * categoria base type for findFirst actions
   */
  export type categoriaFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriaInclude | null
    /**
     * Filter, which categoria to fetch.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: Enumerable<categoriaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: Enumerable<CategoriaScalarFieldEnum>
  }

  /**
   * categoria findFirst
   */
  export interface categoriaFindFirstArgs extends categoriaFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * categoria findFirstOrThrow
   */
  export type categoriaFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriaInclude | null
    /**
     * Filter, which categoria to fetch.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: Enumerable<categoriaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: Enumerable<CategoriaScalarFieldEnum>
  }


  /**
   * categoria findMany
   */
  export type categoriaFindManyArgs = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriaInclude | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: Enumerable<categoriaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categorias.
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    distinct?: Enumerable<CategoriaScalarFieldEnum>
  }


  /**
   * categoria create
   */
  export type categoriaCreateArgs = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriaInclude | null
    /**
     * The data needed to create a categoria.
     */
    data: XOR<categoriaCreateInput, categoriaUncheckedCreateInput>
  }


  /**
   * categoria createMany
   */
  export type categoriaCreateManyArgs = {
    /**
     * The data used to create many categorias.
     */
    data: Enumerable<categoriaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * categoria update
   */
  export type categoriaUpdateArgs = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriaInclude | null
    /**
     * The data needed to update a categoria.
     */
    data: XOR<categoriaUpdateInput, categoriaUncheckedUpdateInput>
    /**
     * Choose, which categoria to update.
     */
    where: categoriaWhereUniqueInput
  }


  /**
   * categoria updateMany
   */
  export type categoriaUpdateManyArgs = {
    /**
     * The data used to update categorias.
     */
    data: XOR<categoriaUpdateManyMutationInput, categoriaUncheckedUpdateManyInput>
    /**
     * Filter which categorias to update
     */
    where?: categoriaWhereInput
  }


  /**
   * categoria upsert
   */
  export type categoriaUpsertArgs = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriaInclude | null
    /**
     * The filter to search for the categoria to update in case it exists.
     */
    where: categoriaWhereUniqueInput
    /**
     * In case the categoria found by the `where` argument doesn't exist, create a new categoria with this data.
     */
    create: XOR<categoriaCreateInput, categoriaUncheckedCreateInput>
    /**
     * In case the categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriaUpdateInput, categoriaUncheckedUpdateInput>
  }


  /**
   * categoria delete
   */
  export type categoriaDeleteArgs = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriaInclude | null
    /**
     * Filter which categoria to delete.
     */
    where: categoriaWhereUniqueInput
  }


  /**
   * categoria deleteMany
   */
  export type categoriaDeleteManyArgs = {
    /**
     * Filter which categorias to delete
     */
    where?: categoriaWhereInput
  }


  /**
   * categoria.categoriaxproducto
   */
  export type categoria$categoriaxproductoArgs = {
    /**
     * Select specific fields to fetch from the categoriaxproducto
     */
    select?: categoriaxproductoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriaxproductoInclude | null
    where?: categoriaxproductoWhereInput
    orderBy?: Enumerable<categoriaxproductoOrderByWithRelationInput>
    cursor?: categoriaxproductoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CategoriaxproductoScalarFieldEnum>
  }


  /**
   * categoria without action
   */
  export type categoriaArgs = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriaInclude | null
  }



  /**
   * Model categoriaxproducto
   */


  export type AggregateCategoriaxproducto = {
    _count: CategoriaxproductoCountAggregateOutputType | null
    _avg: CategoriaxproductoAvgAggregateOutputType | null
    _sum: CategoriaxproductoSumAggregateOutputType | null
    _min: CategoriaxproductoMinAggregateOutputType | null
    _max: CategoriaxproductoMaxAggregateOutputType | null
  }

  export type CategoriaxproductoAvgAggregateOutputType = {
    id: number | null
    categoriaI: number | null
  }

  export type CategoriaxproductoSumAggregateOutputType = {
    id: number | null
    categoriaI: number | null
  }

  export type CategoriaxproductoMinAggregateOutputType = {
    id: number | null
    categoriaI: number | null
    descripcion: string | null
  }

  export type CategoriaxproductoMaxAggregateOutputType = {
    id: number | null
    categoriaI: number | null
    descripcion: string | null
  }

  export type CategoriaxproductoCountAggregateOutputType = {
    id: number
    categoriaI: number
    descripcion: number
    _all: number
  }


  export type CategoriaxproductoAvgAggregateInputType = {
    id?: true
    categoriaI?: true
  }

  export type CategoriaxproductoSumAggregateInputType = {
    id?: true
    categoriaI?: true
  }

  export type CategoriaxproductoMinAggregateInputType = {
    id?: true
    categoriaI?: true
    descripcion?: true
  }

  export type CategoriaxproductoMaxAggregateInputType = {
    id?: true
    categoriaI?: true
    descripcion?: true
  }

  export type CategoriaxproductoCountAggregateInputType = {
    id?: true
    categoriaI?: true
    descripcion?: true
    _all?: true
  }

  export type CategoriaxproductoAggregateArgs = {
    /**
     * Filter which categoriaxproducto to aggregate.
     */
    where?: categoriaxproductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categoriaxproductos to fetch.
     */
    orderBy?: Enumerable<categoriaxproductoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriaxproductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categoriaxproductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categoriaxproductos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categoriaxproductos
    **/
    _count?: true | CategoriaxproductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaxproductoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaxproductoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaxproductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaxproductoMaxAggregateInputType
  }

  export type GetCategoriaxproductoAggregateType<T extends CategoriaxproductoAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoriaxproducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoriaxproducto[P]>
      : GetScalarType<T[P], AggregateCategoriaxproducto[P]>
  }




  export type CategoriaxproductoGroupByArgs = {
    where?: categoriaxproductoWhereInput
    orderBy?: Enumerable<categoriaxproductoOrderByWithAggregationInput>
    by: CategoriaxproductoScalarFieldEnum[]
    having?: categoriaxproductoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaxproductoCountAggregateInputType | true
    _avg?: CategoriaxproductoAvgAggregateInputType
    _sum?: CategoriaxproductoSumAggregateInputType
    _min?: CategoriaxproductoMinAggregateInputType
    _max?: CategoriaxproductoMaxAggregateInputType
  }


  export type CategoriaxproductoGroupByOutputType = {
    id: number
    categoriaI: number
    descripcion: string
    _count: CategoriaxproductoCountAggregateOutputType | null
    _avg: CategoriaxproductoAvgAggregateOutputType | null
    _sum: CategoriaxproductoSumAggregateOutputType | null
    _min: CategoriaxproductoMinAggregateOutputType | null
    _max: CategoriaxproductoMaxAggregateOutputType | null
  }

  type GetCategoriaxproductoGroupByPayload<T extends CategoriaxproductoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CategoriaxproductoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaxproductoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaxproductoGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaxproductoGroupByOutputType[P]>
        }
      >
    >


  export type categoriaxproductoSelect = {
    id?: boolean
    categoriaI?: boolean
    descripcion?: boolean
    categoria?: boolean | categoriaArgs
  }


  export type categoriaxproductoInclude = {
    categoria?: boolean | categoriaArgs
  }

  export type categoriaxproductoGetPayload<S extends boolean | null | undefined | categoriaxproductoArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? categoriaxproducto :
    S extends undefined ? never :
    S extends { include: any } & (categoriaxproductoArgs | categoriaxproductoFindManyArgs)
    ? categoriaxproducto  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'categoria' ? categoriaGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (categoriaxproductoArgs | categoriaxproductoFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'categoria' ? categoriaGetPayload<S['select'][P]> :  P extends keyof categoriaxproducto ? categoriaxproducto[P] : never
  } 
      : categoriaxproducto


  type categoriaxproductoCountArgs = 
    Omit<categoriaxproductoFindManyArgs, 'select' | 'include'> & {
      select?: CategoriaxproductoCountAggregateInputType | true
    }

  export interface categoriaxproductoDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Categoriaxproducto that matches the filter.
     * @param {categoriaxproductoFindUniqueArgs} args - Arguments to find a Categoriaxproducto
     * @example
     * // Get one Categoriaxproducto
     * const categoriaxproducto = await prisma.categoriaxproducto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends categoriaxproductoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, categoriaxproductoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'categoriaxproducto'> extends True ? Prisma__categoriaxproductoClient<categoriaxproductoGetPayload<T>> : Prisma__categoriaxproductoClient<categoriaxproductoGetPayload<T> | null, null>

    /**
     * Find one Categoriaxproducto that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {categoriaxproductoFindUniqueOrThrowArgs} args - Arguments to find a Categoriaxproducto
     * @example
     * // Get one Categoriaxproducto
     * const categoriaxproducto = await prisma.categoriaxproducto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends categoriaxproductoFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, categoriaxproductoFindUniqueOrThrowArgs>
    ): Prisma__categoriaxproductoClient<categoriaxproductoGetPayload<T>>

    /**
     * Find the first Categoriaxproducto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaxproductoFindFirstArgs} args - Arguments to find a Categoriaxproducto
     * @example
     * // Get one Categoriaxproducto
     * const categoriaxproducto = await prisma.categoriaxproducto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends categoriaxproductoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, categoriaxproductoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'categoriaxproducto'> extends True ? Prisma__categoriaxproductoClient<categoriaxproductoGetPayload<T>> : Prisma__categoriaxproductoClient<categoriaxproductoGetPayload<T> | null, null>

    /**
     * Find the first Categoriaxproducto that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaxproductoFindFirstOrThrowArgs} args - Arguments to find a Categoriaxproducto
     * @example
     * // Get one Categoriaxproducto
     * const categoriaxproducto = await prisma.categoriaxproducto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends categoriaxproductoFindFirstOrThrowArgs>(
      args?: SelectSubset<T, categoriaxproductoFindFirstOrThrowArgs>
    ): Prisma__categoriaxproductoClient<categoriaxproductoGetPayload<T>>

    /**
     * Find zero or more Categoriaxproductos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaxproductoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categoriaxproductos
     * const categoriaxproductos = await prisma.categoriaxproducto.findMany()
     * 
     * // Get first 10 Categoriaxproductos
     * const categoriaxproductos = await prisma.categoriaxproducto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaxproductoWithIdOnly = await prisma.categoriaxproducto.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends categoriaxproductoFindManyArgs>(
      args?: SelectSubset<T, categoriaxproductoFindManyArgs>
    ): Prisma.PrismaPromise<Array<categoriaxproductoGetPayload<T>>>

    /**
     * Create a Categoriaxproducto.
     * @param {categoriaxproductoCreateArgs} args - Arguments to create a Categoriaxproducto.
     * @example
     * // Create one Categoriaxproducto
     * const Categoriaxproducto = await prisma.categoriaxproducto.create({
     *   data: {
     *     // ... data to create a Categoriaxproducto
     *   }
     * })
     * 
    **/
    create<T extends categoriaxproductoCreateArgs>(
      args: SelectSubset<T, categoriaxproductoCreateArgs>
    ): Prisma__categoriaxproductoClient<categoriaxproductoGetPayload<T>>

    /**
     * Create many Categoriaxproductos.
     *     @param {categoriaxproductoCreateManyArgs} args - Arguments to create many Categoriaxproductos.
     *     @example
     *     // Create many Categoriaxproductos
     *     const categoriaxproducto = await prisma.categoriaxproducto.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends categoriaxproductoCreateManyArgs>(
      args?: SelectSubset<T, categoriaxproductoCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categoriaxproducto.
     * @param {categoriaxproductoDeleteArgs} args - Arguments to delete one Categoriaxproducto.
     * @example
     * // Delete one Categoriaxproducto
     * const Categoriaxproducto = await prisma.categoriaxproducto.delete({
     *   where: {
     *     // ... filter to delete one Categoriaxproducto
     *   }
     * })
     * 
    **/
    delete<T extends categoriaxproductoDeleteArgs>(
      args: SelectSubset<T, categoriaxproductoDeleteArgs>
    ): Prisma__categoriaxproductoClient<categoriaxproductoGetPayload<T>>

    /**
     * Update one Categoriaxproducto.
     * @param {categoriaxproductoUpdateArgs} args - Arguments to update one Categoriaxproducto.
     * @example
     * // Update one Categoriaxproducto
     * const categoriaxproducto = await prisma.categoriaxproducto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends categoriaxproductoUpdateArgs>(
      args: SelectSubset<T, categoriaxproductoUpdateArgs>
    ): Prisma__categoriaxproductoClient<categoriaxproductoGetPayload<T>>

    /**
     * Delete zero or more Categoriaxproductos.
     * @param {categoriaxproductoDeleteManyArgs} args - Arguments to filter Categoriaxproductos to delete.
     * @example
     * // Delete a few Categoriaxproductos
     * const { count } = await prisma.categoriaxproducto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends categoriaxproductoDeleteManyArgs>(
      args?: SelectSubset<T, categoriaxproductoDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categoriaxproductos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaxproductoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categoriaxproductos
     * const categoriaxproducto = await prisma.categoriaxproducto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends categoriaxproductoUpdateManyArgs>(
      args: SelectSubset<T, categoriaxproductoUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categoriaxproducto.
     * @param {categoriaxproductoUpsertArgs} args - Arguments to update or create a Categoriaxproducto.
     * @example
     * // Update or create a Categoriaxproducto
     * const categoriaxproducto = await prisma.categoriaxproducto.upsert({
     *   create: {
     *     // ... data to create a Categoriaxproducto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoriaxproducto we want to update
     *   }
     * })
    **/
    upsert<T extends categoriaxproductoUpsertArgs>(
      args: SelectSubset<T, categoriaxproductoUpsertArgs>
    ): Prisma__categoriaxproductoClient<categoriaxproductoGetPayload<T>>

    /**
     * Count the number of Categoriaxproductos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaxproductoCountArgs} args - Arguments to filter Categoriaxproductos to count.
     * @example
     * // Count the number of Categoriaxproductos
     * const count = await prisma.categoriaxproducto.count({
     *   where: {
     *     // ... the filter for the Categoriaxproductos we want to count
     *   }
     * })
    **/
    count<T extends categoriaxproductoCountArgs>(
      args?: Subset<T, categoriaxproductoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaxproductoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoriaxproducto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaxproductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriaxproductoAggregateArgs>(args: Subset<T, CategoriaxproductoAggregateArgs>): Prisma.PrismaPromise<GetCategoriaxproductoAggregateType<T>>

    /**
     * Group by Categoriaxproducto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaxproductoGroupByArgs} args - Group by arguments.
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
      T extends CategoriaxproductoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaxproductoGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaxproductoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriaxproductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaxproductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for categoriaxproducto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__categoriaxproductoClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    categoria<T extends categoriaArgs= {}>(args?: Subset<T, categoriaArgs>): Prisma__categoriaClient<categoriaGetPayload<T> | Null>;

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
   * categoriaxproducto base type for findUnique actions
   */
  export type categoriaxproductoFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the categoriaxproducto
     */
    select?: categoriaxproductoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriaxproductoInclude | null
    /**
     * Filter, which categoriaxproducto to fetch.
     */
    where: categoriaxproductoWhereUniqueInput
  }

  /**
   * categoriaxproducto findUnique
   */
  export interface categoriaxproductoFindUniqueArgs extends categoriaxproductoFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * categoriaxproducto findUniqueOrThrow
   */
  export type categoriaxproductoFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the categoriaxproducto
     */
    select?: categoriaxproductoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriaxproductoInclude | null
    /**
     * Filter, which categoriaxproducto to fetch.
     */
    where: categoriaxproductoWhereUniqueInput
  }


  /**
   * categoriaxproducto base type for findFirst actions
   */
  export type categoriaxproductoFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the categoriaxproducto
     */
    select?: categoriaxproductoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriaxproductoInclude | null
    /**
     * Filter, which categoriaxproducto to fetch.
     */
    where?: categoriaxproductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categoriaxproductos to fetch.
     */
    orderBy?: Enumerable<categoriaxproductoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categoriaxproductos.
     */
    cursor?: categoriaxproductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categoriaxproductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categoriaxproductos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categoriaxproductos.
     */
    distinct?: Enumerable<CategoriaxproductoScalarFieldEnum>
  }

  /**
   * categoriaxproducto findFirst
   */
  export interface categoriaxproductoFindFirstArgs extends categoriaxproductoFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * categoriaxproducto findFirstOrThrow
   */
  export type categoriaxproductoFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the categoriaxproducto
     */
    select?: categoriaxproductoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriaxproductoInclude | null
    /**
     * Filter, which categoriaxproducto to fetch.
     */
    where?: categoriaxproductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categoriaxproductos to fetch.
     */
    orderBy?: Enumerable<categoriaxproductoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categoriaxproductos.
     */
    cursor?: categoriaxproductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categoriaxproductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categoriaxproductos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categoriaxproductos.
     */
    distinct?: Enumerable<CategoriaxproductoScalarFieldEnum>
  }


  /**
   * categoriaxproducto findMany
   */
  export type categoriaxproductoFindManyArgs = {
    /**
     * Select specific fields to fetch from the categoriaxproducto
     */
    select?: categoriaxproductoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriaxproductoInclude | null
    /**
     * Filter, which categoriaxproductos to fetch.
     */
    where?: categoriaxproductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categoriaxproductos to fetch.
     */
    orderBy?: Enumerable<categoriaxproductoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categoriaxproductos.
     */
    cursor?: categoriaxproductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categoriaxproductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categoriaxproductos.
     */
    skip?: number
    distinct?: Enumerable<CategoriaxproductoScalarFieldEnum>
  }


  /**
   * categoriaxproducto create
   */
  export type categoriaxproductoCreateArgs = {
    /**
     * Select specific fields to fetch from the categoriaxproducto
     */
    select?: categoriaxproductoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriaxproductoInclude | null
    /**
     * The data needed to create a categoriaxproducto.
     */
    data: XOR<categoriaxproductoCreateInput, categoriaxproductoUncheckedCreateInput>
  }


  /**
   * categoriaxproducto createMany
   */
  export type categoriaxproductoCreateManyArgs = {
    /**
     * The data used to create many categoriaxproductos.
     */
    data: Enumerable<categoriaxproductoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * categoriaxproducto update
   */
  export type categoriaxproductoUpdateArgs = {
    /**
     * Select specific fields to fetch from the categoriaxproducto
     */
    select?: categoriaxproductoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriaxproductoInclude | null
    /**
     * The data needed to update a categoriaxproducto.
     */
    data: XOR<categoriaxproductoUpdateInput, categoriaxproductoUncheckedUpdateInput>
    /**
     * Choose, which categoriaxproducto to update.
     */
    where: categoriaxproductoWhereUniqueInput
  }


  /**
   * categoriaxproducto updateMany
   */
  export type categoriaxproductoUpdateManyArgs = {
    /**
     * The data used to update categoriaxproductos.
     */
    data: XOR<categoriaxproductoUpdateManyMutationInput, categoriaxproductoUncheckedUpdateManyInput>
    /**
     * Filter which categoriaxproductos to update
     */
    where?: categoriaxproductoWhereInput
  }


  /**
   * categoriaxproducto upsert
   */
  export type categoriaxproductoUpsertArgs = {
    /**
     * Select specific fields to fetch from the categoriaxproducto
     */
    select?: categoriaxproductoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriaxproductoInclude | null
    /**
     * The filter to search for the categoriaxproducto to update in case it exists.
     */
    where: categoriaxproductoWhereUniqueInput
    /**
     * In case the categoriaxproducto found by the `where` argument doesn't exist, create a new categoriaxproducto with this data.
     */
    create: XOR<categoriaxproductoCreateInput, categoriaxproductoUncheckedCreateInput>
    /**
     * In case the categoriaxproducto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriaxproductoUpdateInput, categoriaxproductoUncheckedUpdateInput>
  }


  /**
   * categoriaxproducto delete
   */
  export type categoriaxproductoDeleteArgs = {
    /**
     * Select specific fields to fetch from the categoriaxproducto
     */
    select?: categoriaxproductoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriaxproductoInclude | null
    /**
     * Filter which categoriaxproducto to delete.
     */
    where: categoriaxproductoWhereUniqueInput
  }


  /**
   * categoriaxproducto deleteMany
   */
  export type categoriaxproductoDeleteManyArgs = {
    /**
     * Filter which categoriaxproductos to delete
     */
    where?: categoriaxproductoWhereInput
  }


  /**
   * categoriaxproducto without action
   */
  export type categoriaxproductoArgs = {
    /**
     * Select specific fields to fetch from the categoriaxproducto
     */
    select?: categoriaxproductoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriaxproductoInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CategoriaScalarFieldEnum: {
    id: 'id',
    descripcion: 'descripcion'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const CategoriaxproductoScalarFieldEnum: {
    id: 'id',
    categoriaI: 'categoriaI',
    descripcion: 'descripcion'
  };

  export type CategoriaxproductoScalarFieldEnum = (typeof CategoriaxproductoScalarFieldEnum)[keyof typeof CategoriaxproductoScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  export type categoriaWhereInput = {
    AND?: Enumerable<categoriaWhereInput>
    OR?: Enumerable<categoriaWhereInput>
    NOT?: Enumerable<categoriaWhereInput>
    id?: IntFilter | number
    descripcion?: StringFilter | string
    categoriaxproducto?: CategoriaxproductoListRelationFilter
  }

  export type categoriaOrderByWithRelationInput = {
    id?: SortOrder
    descripcion?: SortOrder
    categoriaxproducto?: categoriaxproductoOrderByRelationAggregateInput
  }

  export type categoriaWhereUniqueInput = {
    id?: number
    descripcion?: string
  }

  export type categoriaOrderByWithAggregationInput = {
    id?: SortOrder
    descripcion?: SortOrder
    _count?: categoriaCountOrderByAggregateInput
    _avg?: categoriaAvgOrderByAggregateInput
    _max?: categoriaMaxOrderByAggregateInput
    _min?: categoriaMinOrderByAggregateInput
    _sum?: categoriaSumOrderByAggregateInput
  }

  export type categoriaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<categoriaScalarWhereWithAggregatesInput>
    OR?: Enumerable<categoriaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<categoriaScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    descripcion?: StringWithAggregatesFilter | string
  }

  export type categoriaxproductoWhereInput = {
    AND?: Enumerable<categoriaxproductoWhereInput>
    OR?: Enumerable<categoriaxproductoWhereInput>
    NOT?: Enumerable<categoriaxproductoWhereInput>
    id?: IntFilter | number
    categoriaI?: IntFilter | number
    descripcion?: StringFilter | string
    categoria?: XOR<CategoriaRelationFilter, categoriaWhereInput>
  }

  export type categoriaxproductoOrderByWithRelationInput = {
    id?: SortOrder
    categoriaI?: SortOrder
    descripcion?: SortOrder
    categoria?: categoriaOrderByWithRelationInput
  }

  export type categoriaxproductoWhereUniqueInput = {
    id?: number
  }

  export type categoriaxproductoOrderByWithAggregationInput = {
    id?: SortOrder
    categoriaI?: SortOrder
    descripcion?: SortOrder
    _count?: categoriaxproductoCountOrderByAggregateInput
    _avg?: categoriaxproductoAvgOrderByAggregateInput
    _max?: categoriaxproductoMaxOrderByAggregateInput
    _min?: categoriaxproductoMinOrderByAggregateInput
    _sum?: categoriaxproductoSumOrderByAggregateInput
  }

  export type categoriaxproductoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<categoriaxproductoScalarWhereWithAggregatesInput>
    OR?: Enumerable<categoriaxproductoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<categoriaxproductoScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    categoriaI?: IntWithAggregatesFilter | number
    descripcion?: StringWithAggregatesFilter | string
  }

  export type categoriaCreateInput = {
    id: number
    descripcion: string
    categoriaxproducto?: categoriaxproductoCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaUncheckedCreateInput = {
    id: number
    descripcion: string
    categoriaxproducto?: categoriaxproductoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    categoriaxproducto?: categoriaxproductoUpdateManyWithoutCategoriaNestedInput
  }

  export type categoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    categoriaxproducto?: categoriaxproductoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type categoriaCreateManyInput = {
    id: number
    descripcion: string
  }

  export type categoriaUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type categoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type categoriaxproductoCreateInput = {
    id: number
    descripcion: string
    categoria: categoriaCreateNestedOneWithoutCategoriaxproductoInput
  }

  export type categoriaxproductoUncheckedCreateInput = {
    id: number
    categoriaI: number
    descripcion: string
  }

  export type categoriaxproductoUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    categoria?: categoriaUpdateOneRequiredWithoutCategoriaxproductoNestedInput
  }

  export type categoriaxproductoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoriaI?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type categoriaxproductoCreateManyInput = {
    id: number
    categoriaI: number
    descripcion: string
  }

  export type categoriaxproductoUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type categoriaxproductoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoriaI?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
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

  export type CategoriaxproductoListRelationFilter = {
    every?: categoriaxproductoWhereInput
    some?: categoriaxproductoWhereInput
    none?: categoriaxproductoWhereInput
  }

  export type categoriaxproductoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriaCountOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
  }

  export type categoriaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
  }

  export type categoriaMinOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
  }

  export type categoriaSumOrderByAggregateInput = {
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

  export type CategoriaRelationFilter = {
    is?: categoriaWhereInput
    isNot?: categoriaWhereInput
  }

  export type categoriaxproductoCountOrderByAggregateInput = {
    id?: SortOrder
    categoriaI?: SortOrder
    descripcion?: SortOrder
  }

  export type categoriaxproductoAvgOrderByAggregateInput = {
    id?: SortOrder
    categoriaI?: SortOrder
  }

  export type categoriaxproductoMaxOrderByAggregateInput = {
    id?: SortOrder
    categoriaI?: SortOrder
    descripcion?: SortOrder
  }

  export type categoriaxproductoMinOrderByAggregateInput = {
    id?: SortOrder
    categoriaI?: SortOrder
    descripcion?: SortOrder
  }

  export type categoriaxproductoSumOrderByAggregateInput = {
    id?: SortOrder
    categoriaI?: SortOrder
  }

  export type categoriaxproductoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<Enumerable<categoriaxproductoCreateWithoutCategoriaInput>, Enumerable<categoriaxproductoUncheckedCreateWithoutCategoriaInput>>
    connectOrCreate?: Enumerable<categoriaxproductoCreateOrConnectWithoutCategoriaInput>
    createMany?: categoriaxproductoCreateManyCategoriaInputEnvelope
    connect?: Enumerable<categoriaxproductoWhereUniqueInput>
  }

  export type categoriaxproductoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<Enumerable<categoriaxproductoCreateWithoutCategoriaInput>, Enumerable<categoriaxproductoUncheckedCreateWithoutCategoriaInput>>
    connectOrCreate?: Enumerable<categoriaxproductoCreateOrConnectWithoutCategoriaInput>
    createMany?: categoriaxproductoCreateManyCategoriaInputEnvelope
    connect?: Enumerable<categoriaxproductoWhereUniqueInput>
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

  export type categoriaxproductoUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<Enumerable<categoriaxproductoCreateWithoutCategoriaInput>, Enumerable<categoriaxproductoUncheckedCreateWithoutCategoriaInput>>
    connectOrCreate?: Enumerable<categoriaxproductoCreateOrConnectWithoutCategoriaInput>
    upsert?: Enumerable<categoriaxproductoUpsertWithWhereUniqueWithoutCategoriaInput>
    createMany?: categoriaxproductoCreateManyCategoriaInputEnvelope
    set?: Enumerable<categoriaxproductoWhereUniqueInput>
    disconnect?: Enumerable<categoriaxproductoWhereUniqueInput>
    delete?: Enumerable<categoriaxproductoWhereUniqueInput>
    connect?: Enumerable<categoriaxproductoWhereUniqueInput>
    update?: Enumerable<categoriaxproductoUpdateWithWhereUniqueWithoutCategoriaInput>
    updateMany?: Enumerable<categoriaxproductoUpdateManyWithWhereWithoutCategoriaInput>
    deleteMany?: Enumerable<categoriaxproductoScalarWhereInput>
  }

  export type categoriaxproductoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<Enumerable<categoriaxproductoCreateWithoutCategoriaInput>, Enumerable<categoriaxproductoUncheckedCreateWithoutCategoriaInput>>
    connectOrCreate?: Enumerable<categoriaxproductoCreateOrConnectWithoutCategoriaInput>
    upsert?: Enumerable<categoriaxproductoUpsertWithWhereUniqueWithoutCategoriaInput>
    createMany?: categoriaxproductoCreateManyCategoriaInputEnvelope
    set?: Enumerable<categoriaxproductoWhereUniqueInput>
    disconnect?: Enumerable<categoriaxproductoWhereUniqueInput>
    delete?: Enumerable<categoriaxproductoWhereUniqueInput>
    connect?: Enumerable<categoriaxproductoWhereUniqueInput>
    update?: Enumerable<categoriaxproductoUpdateWithWhereUniqueWithoutCategoriaInput>
    updateMany?: Enumerable<categoriaxproductoUpdateManyWithWhereWithoutCategoriaInput>
    deleteMany?: Enumerable<categoriaxproductoScalarWhereInput>
  }

  export type categoriaCreateNestedOneWithoutCategoriaxproductoInput = {
    create?: XOR<categoriaCreateWithoutCategoriaxproductoInput, categoriaUncheckedCreateWithoutCategoriaxproductoInput>
    connectOrCreate?: categoriaCreateOrConnectWithoutCategoriaxproductoInput
    connect?: categoriaWhereUniqueInput
  }

  export type categoriaUpdateOneRequiredWithoutCategoriaxproductoNestedInput = {
    create?: XOR<categoriaCreateWithoutCategoriaxproductoInput, categoriaUncheckedCreateWithoutCategoriaxproductoInput>
    connectOrCreate?: categoriaCreateOrConnectWithoutCategoriaxproductoInput
    upsert?: categoriaUpsertWithoutCategoriaxproductoInput
    connect?: categoriaWhereUniqueInput
    update?: XOR<categoriaUpdateWithoutCategoriaxproductoInput, categoriaUncheckedUpdateWithoutCategoriaxproductoInput>
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

  export type categoriaxproductoCreateWithoutCategoriaInput = {
    id: number
    descripcion: string
  }

  export type categoriaxproductoUncheckedCreateWithoutCategoriaInput = {
    id: number
    descripcion: string
  }

  export type categoriaxproductoCreateOrConnectWithoutCategoriaInput = {
    where: categoriaxproductoWhereUniqueInput
    create: XOR<categoriaxproductoCreateWithoutCategoriaInput, categoriaxproductoUncheckedCreateWithoutCategoriaInput>
  }

  export type categoriaxproductoCreateManyCategoriaInputEnvelope = {
    data: Enumerable<categoriaxproductoCreateManyCategoriaInput>
    skipDuplicates?: boolean
  }

  export type categoriaxproductoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: categoriaxproductoWhereUniqueInput
    update: XOR<categoriaxproductoUpdateWithoutCategoriaInput, categoriaxproductoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<categoriaxproductoCreateWithoutCategoriaInput, categoriaxproductoUncheckedCreateWithoutCategoriaInput>
  }

  export type categoriaxproductoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: categoriaxproductoWhereUniqueInput
    data: XOR<categoriaxproductoUpdateWithoutCategoriaInput, categoriaxproductoUncheckedUpdateWithoutCategoriaInput>
  }

  export type categoriaxproductoUpdateManyWithWhereWithoutCategoriaInput = {
    where: categoriaxproductoScalarWhereInput
    data: XOR<categoriaxproductoUpdateManyMutationInput, categoriaxproductoUncheckedUpdateManyWithoutCategoriaxproductoInput>
  }

  export type categoriaxproductoScalarWhereInput = {
    AND?: Enumerable<categoriaxproductoScalarWhereInput>
    OR?: Enumerable<categoriaxproductoScalarWhereInput>
    NOT?: Enumerable<categoriaxproductoScalarWhereInput>
    id?: IntFilter | number
    categoriaI?: IntFilter | number
    descripcion?: StringFilter | string
  }

  export type categoriaCreateWithoutCategoriaxproductoInput = {
    id: number
    descripcion: string
  }

  export type categoriaUncheckedCreateWithoutCategoriaxproductoInput = {
    id: number
    descripcion: string
  }

  export type categoriaCreateOrConnectWithoutCategoriaxproductoInput = {
    where: categoriaWhereUniqueInput
    create: XOR<categoriaCreateWithoutCategoriaxproductoInput, categoriaUncheckedCreateWithoutCategoriaxproductoInput>
  }

  export type categoriaUpsertWithoutCategoriaxproductoInput = {
    update: XOR<categoriaUpdateWithoutCategoriaxproductoInput, categoriaUncheckedUpdateWithoutCategoriaxproductoInput>
    create: XOR<categoriaCreateWithoutCategoriaxproductoInput, categoriaUncheckedCreateWithoutCategoriaxproductoInput>
  }

  export type categoriaUpdateWithoutCategoriaxproductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type categoriaUncheckedUpdateWithoutCategoriaxproductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type categoriaxproductoCreateManyCategoriaInput = {
    id: number
    descripcion: string
  }

  export type categoriaxproductoUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type categoriaxproductoUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type categoriaxproductoUncheckedUpdateManyWithoutCategoriaxproductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
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