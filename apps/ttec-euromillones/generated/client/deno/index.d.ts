
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
 * Model User
 * 
 */
export type User = {
  id: number
  name: string
  email: string
  password: string
  roleId: number
  estadoId: number
  saldo: Prisma.Decimal
  createdAt: Date
  updatedAt: Date
}

/**
 * Model UserXRole
 * 
 */
export type UserXRole = {
  id: number
  descripcion: string
}

/**
 * Model UserXEstado
 * 
 */
export type UserXEstado = {
  id: number
  descripcion: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.userXRole`: Exposes CRUD operations for the **UserXRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserXRoles
    * const userXRoles = await prisma.userXRole.findMany()
    * ```
    */
  get userXRole(): Prisma.UserXRoleDelegate<GlobalReject>;

  /**
   * `prisma.userXEstado`: Exposes CRUD operations for the **UserXEstado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserXEstados
    * const userXEstados = await prisma.userXEstado.findMany()
    * ```
    */
  get userXEstado(): Prisma.UserXEstadoDelegate<GlobalReject>;
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
    User: 'User',
    UserXRole: 'UserXRole',
    UserXEstado: 'UserXEstado'
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
   * Count Type UserXRoleCountOutputType
   */


  export type UserXRoleCountOutputType = {
    user: number
  }

  export type UserXRoleCountOutputTypeSelect = {
    user?: boolean
  }

  export type UserXRoleCountOutputTypeGetPayload<S extends boolean | null | undefined | UserXRoleCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserXRoleCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserXRoleCountOutputTypeArgs)
    ? UserXRoleCountOutputType 
    : S extends { select: any } & (UserXRoleCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserXRoleCountOutputType ? UserXRoleCountOutputType[P] : never
  } 
      : UserXRoleCountOutputType




  // Custom InputTypes

  /**
   * UserXRoleCountOutputType without action
   */
  export type UserXRoleCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserXRoleCountOutputType
     */
    select?: UserXRoleCountOutputTypeSelect | null
  }



  /**
   * Count Type UserXEstadoCountOutputType
   */


  export type UserXEstadoCountOutputType = {
    user: number
  }

  export type UserXEstadoCountOutputTypeSelect = {
    user?: boolean
  }

  export type UserXEstadoCountOutputTypeGetPayload<S extends boolean | null | undefined | UserXEstadoCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserXEstadoCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserXEstadoCountOutputTypeArgs)
    ? UserXEstadoCountOutputType 
    : S extends { select: any } & (UserXEstadoCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserXEstadoCountOutputType ? UserXEstadoCountOutputType[P] : never
  } 
      : UserXEstadoCountOutputType




  // Custom InputTypes

  /**
   * UserXEstadoCountOutputType without action
   */
  export type UserXEstadoCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserXEstadoCountOutputType
     */
    select?: UserXEstadoCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    roleId: number | null
    estadoId: number | null
    saldo: Decimal | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    roleId: number | null
    estadoId: number | null
    saldo: Decimal | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    roleId: number | null
    estadoId: number | null
    saldo: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    roleId: number | null
    estadoId: number | null
    saldo: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    roleId: number
    estadoId: number
    saldo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    roleId?: true
    estadoId?: true
    saldo?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    roleId?: true
    estadoId?: true
    saldo?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    roleId?: true
    estadoId?: true
    saldo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    roleId?: true
    estadoId?: true
    saldo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    roleId?: true
    estadoId?: true
    saldo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    roleId: number
    estadoId: number
    saldo: Decimal
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    roleId?: boolean
    estadoId?: boolean
    saldo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    UserXRole?: boolean | UserXRoleArgs
    UserXEstado?: boolean | UserXEstadoArgs
  }


  export type UserInclude = {
    UserXRole?: boolean | UserXRoleArgs
    UserXEstado?: boolean | UserXEstadoArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'UserXRole' ? UserXRoleGetPayload<S['include'][P]> :
        P extends 'UserXEstado' ? UserXEstadoGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'UserXRole' ? UserXRoleGetPayload<S['select'][P]> :
        P extends 'UserXEstado' ? UserXEstadoGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    UserXRole<T extends UserXRoleArgs= {}>(args?: Subset<T, UserXRoleArgs>): Prisma__UserXRoleClient<UserXRoleGetPayload<T> | Null>;

    UserXEstado<T extends UserXEstadoArgs= {}>(args?: Subset<T, UserXEstadoArgs>): Prisma__UserXEstadoClient<UserXEstadoGetPayload<T> | Null>;

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
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
  }



  /**
   * Model UserXRole
   */


  export type AggregateUserXRole = {
    _count: UserXRoleCountAggregateOutputType | null
    _avg: UserXRoleAvgAggregateOutputType | null
    _sum: UserXRoleSumAggregateOutputType | null
    _min: UserXRoleMinAggregateOutputType | null
    _max: UserXRoleMaxAggregateOutputType | null
  }

  export type UserXRoleAvgAggregateOutputType = {
    id: number | null
  }

  export type UserXRoleSumAggregateOutputType = {
    id: number | null
  }

  export type UserXRoleMinAggregateOutputType = {
    id: number | null
    descripcion: string | null
  }

  export type UserXRoleMaxAggregateOutputType = {
    id: number | null
    descripcion: string | null
  }

  export type UserXRoleCountAggregateOutputType = {
    id: number
    descripcion: number
    _all: number
  }


  export type UserXRoleAvgAggregateInputType = {
    id?: true
  }

  export type UserXRoleSumAggregateInputType = {
    id?: true
  }

  export type UserXRoleMinAggregateInputType = {
    id?: true
    descripcion?: true
  }

  export type UserXRoleMaxAggregateInputType = {
    id?: true
    descripcion?: true
  }

  export type UserXRoleCountAggregateInputType = {
    id?: true
    descripcion?: true
    _all?: true
  }

  export type UserXRoleAggregateArgs = {
    /**
     * Filter which UserXRole to aggregate.
     */
    where?: UserXRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserXRoles to fetch.
     */
    orderBy?: Enumerable<UserXRoleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserXRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserXRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserXRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserXRoles
    **/
    _count?: true | UserXRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserXRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserXRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserXRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserXRoleMaxAggregateInputType
  }

  export type GetUserXRoleAggregateType<T extends UserXRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserXRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserXRole[P]>
      : GetScalarType<T[P], AggregateUserXRole[P]>
  }




  export type UserXRoleGroupByArgs = {
    where?: UserXRoleWhereInput
    orderBy?: Enumerable<UserXRoleOrderByWithAggregationInput>
    by: UserXRoleScalarFieldEnum[]
    having?: UserXRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserXRoleCountAggregateInputType | true
    _avg?: UserXRoleAvgAggregateInputType
    _sum?: UserXRoleSumAggregateInputType
    _min?: UserXRoleMinAggregateInputType
    _max?: UserXRoleMaxAggregateInputType
  }


  export type UserXRoleGroupByOutputType = {
    id: number
    descripcion: string
    _count: UserXRoleCountAggregateOutputType | null
    _avg: UserXRoleAvgAggregateOutputType | null
    _sum: UserXRoleSumAggregateOutputType | null
    _min: UserXRoleMinAggregateOutputType | null
    _max: UserXRoleMaxAggregateOutputType | null
  }

  type GetUserXRoleGroupByPayload<T extends UserXRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserXRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserXRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserXRoleGroupByOutputType[P]>
            : GetScalarType<T[P], UserXRoleGroupByOutputType[P]>
        }
      >
    >


  export type UserXRoleSelect = {
    id?: boolean
    descripcion?: boolean
    user?: boolean | UserXRole$userArgs
    _count?: boolean | UserXRoleCountOutputTypeArgs
  }


  export type UserXRoleInclude = {
    user?: boolean | UserXRole$userArgs
    _count?: boolean | UserXRoleCountOutputTypeArgs
  }

  export type UserXRoleGetPayload<S extends boolean | null | undefined | UserXRoleArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserXRole :
    S extends undefined ? never :
    S extends { include: any } & (UserXRoleArgs | UserXRoleFindManyArgs)
    ? UserXRole  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserXRoleCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserXRoleArgs | UserXRoleFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserXRoleCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof UserXRole ? UserXRole[P] : never
  } 
      : UserXRole


  type UserXRoleCountArgs = 
    Omit<UserXRoleFindManyArgs, 'select' | 'include'> & {
      select?: UserXRoleCountAggregateInputType | true
    }

  export interface UserXRoleDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one UserXRole that matches the filter.
     * @param {UserXRoleFindUniqueArgs} args - Arguments to find a UserXRole
     * @example
     * // Get one UserXRole
     * const userXRole = await prisma.userXRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserXRoleFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserXRoleFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserXRole'> extends True ? Prisma__UserXRoleClient<UserXRoleGetPayload<T>> : Prisma__UserXRoleClient<UserXRoleGetPayload<T> | null, null>

    /**
     * Find one UserXRole that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserXRoleFindUniqueOrThrowArgs} args - Arguments to find a UserXRole
     * @example
     * // Get one UserXRole
     * const userXRole = await prisma.userXRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserXRoleFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserXRoleFindUniqueOrThrowArgs>
    ): Prisma__UserXRoleClient<UserXRoleGetPayload<T>>

    /**
     * Find the first UserXRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXRoleFindFirstArgs} args - Arguments to find a UserXRole
     * @example
     * // Get one UserXRole
     * const userXRole = await prisma.userXRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserXRoleFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserXRoleFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserXRole'> extends True ? Prisma__UserXRoleClient<UserXRoleGetPayload<T>> : Prisma__UserXRoleClient<UserXRoleGetPayload<T> | null, null>

    /**
     * Find the first UserXRole that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXRoleFindFirstOrThrowArgs} args - Arguments to find a UserXRole
     * @example
     * // Get one UserXRole
     * const userXRole = await prisma.userXRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserXRoleFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserXRoleFindFirstOrThrowArgs>
    ): Prisma__UserXRoleClient<UserXRoleGetPayload<T>>

    /**
     * Find zero or more UserXRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXRoleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserXRoles
     * const userXRoles = await prisma.userXRole.findMany()
     * 
     * // Get first 10 UserXRoles
     * const userXRoles = await prisma.userXRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userXRoleWithIdOnly = await prisma.userXRole.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserXRoleFindManyArgs>(
      args?: SelectSubset<T, UserXRoleFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserXRoleGetPayload<T>>>

    /**
     * Create a UserXRole.
     * @param {UserXRoleCreateArgs} args - Arguments to create a UserXRole.
     * @example
     * // Create one UserXRole
     * const UserXRole = await prisma.userXRole.create({
     *   data: {
     *     // ... data to create a UserXRole
     *   }
     * })
     * 
    **/
    create<T extends UserXRoleCreateArgs>(
      args: SelectSubset<T, UserXRoleCreateArgs>
    ): Prisma__UserXRoleClient<UserXRoleGetPayload<T>>

    /**
     * Create many UserXRoles.
     *     @param {UserXRoleCreateManyArgs} args - Arguments to create many UserXRoles.
     *     @example
     *     // Create many UserXRoles
     *     const userXRole = await prisma.userXRole.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserXRoleCreateManyArgs>(
      args?: SelectSubset<T, UserXRoleCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserXRole.
     * @param {UserXRoleDeleteArgs} args - Arguments to delete one UserXRole.
     * @example
     * // Delete one UserXRole
     * const UserXRole = await prisma.userXRole.delete({
     *   where: {
     *     // ... filter to delete one UserXRole
     *   }
     * })
     * 
    **/
    delete<T extends UserXRoleDeleteArgs>(
      args: SelectSubset<T, UserXRoleDeleteArgs>
    ): Prisma__UserXRoleClient<UserXRoleGetPayload<T>>

    /**
     * Update one UserXRole.
     * @param {UserXRoleUpdateArgs} args - Arguments to update one UserXRole.
     * @example
     * // Update one UserXRole
     * const userXRole = await prisma.userXRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserXRoleUpdateArgs>(
      args: SelectSubset<T, UserXRoleUpdateArgs>
    ): Prisma__UserXRoleClient<UserXRoleGetPayload<T>>

    /**
     * Delete zero or more UserXRoles.
     * @param {UserXRoleDeleteManyArgs} args - Arguments to filter UserXRoles to delete.
     * @example
     * // Delete a few UserXRoles
     * const { count } = await prisma.userXRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserXRoleDeleteManyArgs>(
      args?: SelectSubset<T, UserXRoleDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserXRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserXRoles
     * const userXRole = await prisma.userXRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserXRoleUpdateManyArgs>(
      args: SelectSubset<T, UserXRoleUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserXRole.
     * @param {UserXRoleUpsertArgs} args - Arguments to update or create a UserXRole.
     * @example
     * // Update or create a UserXRole
     * const userXRole = await prisma.userXRole.upsert({
     *   create: {
     *     // ... data to create a UserXRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserXRole we want to update
     *   }
     * })
    **/
    upsert<T extends UserXRoleUpsertArgs>(
      args: SelectSubset<T, UserXRoleUpsertArgs>
    ): Prisma__UserXRoleClient<UserXRoleGetPayload<T>>

    /**
     * Count the number of UserXRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXRoleCountArgs} args - Arguments to filter UserXRoles to count.
     * @example
     * // Count the number of UserXRoles
     * const count = await prisma.userXRole.count({
     *   where: {
     *     // ... the filter for the UserXRoles we want to count
     *   }
     * })
    **/
    count<T extends UserXRoleCountArgs>(
      args?: Subset<T, UserXRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserXRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserXRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserXRoleAggregateArgs>(args: Subset<T, UserXRoleAggregateArgs>): Prisma.PrismaPromise<GetUserXRoleAggregateType<T>>

    /**
     * Group by UserXRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXRoleGroupByArgs} args - Group by arguments.
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
      T extends UserXRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserXRoleGroupByArgs['orderBy'] }
        : { orderBy?: UserXRoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserXRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserXRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for UserXRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserXRoleClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    user<T extends UserXRole$userArgs= {}>(args?: Subset<T, UserXRole$userArgs>): Prisma.PrismaPromise<Array<UserGetPayload<T>>| Null>;

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
   * UserXRole base type for findUnique actions
   */
  export type UserXRoleFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserXRole
     */
    select?: UserXRoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXRoleInclude | null
    /**
     * Filter, which UserXRole to fetch.
     */
    where: UserXRoleWhereUniqueInput
  }

  /**
   * UserXRole findUnique
   */
  export interface UserXRoleFindUniqueArgs extends UserXRoleFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserXRole findUniqueOrThrow
   */
  export type UserXRoleFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserXRole
     */
    select?: UserXRoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXRoleInclude | null
    /**
     * Filter, which UserXRole to fetch.
     */
    where: UserXRoleWhereUniqueInput
  }


  /**
   * UserXRole base type for findFirst actions
   */
  export type UserXRoleFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserXRole
     */
    select?: UserXRoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXRoleInclude | null
    /**
     * Filter, which UserXRole to fetch.
     */
    where?: UserXRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserXRoles to fetch.
     */
    orderBy?: Enumerable<UserXRoleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserXRoles.
     */
    cursor?: UserXRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserXRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserXRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserXRoles.
     */
    distinct?: Enumerable<UserXRoleScalarFieldEnum>
  }

  /**
   * UserXRole findFirst
   */
  export interface UserXRoleFindFirstArgs extends UserXRoleFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserXRole findFirstOrThrow
   */
  export type UserXRoleFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserXRole
     */
    select?: UserXRoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXRoleInclude | null
    /**
     * Filter, which UserXRole to fetch.
     */
    where?: UserXRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserXRoles to fetch.
     */
    orderBy?: Enumerable<UserXRoleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserXRoles.
     */
    cursor?: UserXRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserXRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserXRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserXRoles.
     */
    distinct?: Enumerable<UserXRoleScalarFieldEnum>
  }


  /**
   * UserXRole findMany
   */
  export type UserXRoleFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserXRole
     */
    select?: UserXRoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXRoleInclude | null
    /**
     * Filter, which UserXRoles to fetch.
     */
    where?: UserXRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserXRoles to fetch.
     */
    orderBy?: Enumerable<UserXRoleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserXRoles.
     */
    cursor?: UserXRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserXRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserXRoles.
     */
    skip?: number
    distinct?: Enumerable<UserXRoleScalarFieldEnum>
  }


  /**
   * UserXRole create
   */
  export type UserXRoleCreateArgs = {
    /**
     * Select specific fields to fetch from the UserXRole
     */
    select?: UserXRoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXRoleInclude | null
    /**
     * The data needed to create a UserXRole.
     */
    data: XOR<UserXRoleCreateInput, UserXRoleUncheckedCreateInput>
  }


  /**
   * UserXRole createMany
   */
  export type UserXRoleCreateManyArgs = {
    /**
     * The data used to create many UserXRoles.
     */
    data: Enumerable<UserXRoleCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserXRole update
   */
  export type UserXRoleUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserXRole
     */
    select?: UserXRoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXRoleInclude | null
    /**
     * The data needed to update a UserXRole.
     */
    data: XOR<UserXRoleUpdateInput, UserXRoleUncheckedUpdateInput>
    /**
     * Choose, which UserXRole to update.
     */
    where: UserXRoleWhereUniqueInput
  }


  /**
   * UserXRole updateMany
   */
  export type UserXRoleUpdateManyArgs = {
    /**
     * The data used to update UserXRoles.
     */
    data: XOR<UserXRoleUpdateManyMutationInput, UserXRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserXRoles to update
     */
    where?: UserXRoleWhereInput
  }


  /**
   * UserXRole upsert
   */
  export type UserXRoleUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserXRole
     */
    select?: UserXRoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXRoleInclude | null
    /**
     * The filter to search for the UserXRole to update in case it exists.
     */
    where: UserXRoleWhereUniqueInput
    /**
     * In case the UserXRole found by the `where` argument doesn't exist, create a new UserXRole with this data.
     */
    create: XOR<UserXRoleCreateInput, UserXRoleUncheckedCreateInput>
    /**
     * In case the UserXRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserXRoleUpdateInput, UserXRoleUncheckedUpdateInput>
  }


  /**
   * UserXRole delete
   */
  export type UserXRoleDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserXRole
     */
    select?: UserXRoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXRoleInclude | null
    /**
     * Filter which UserXRole to delete.
     */
    where: UserXRoleWhereUniqueInput
  }


  /**
   * UserXRole deleteMany
   */
  export type UserXRoleDeleteManyArgs = {
    /**
     * Filter which UserXRoles to delete
     */
    where?: UserXRoleWhereInput
  }


  /**
   * UserXRole.user
   */
  export type UserXRole$userArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * UserXRole without action
   */
  export type UserXRoleArgs = {
    /**
     * Select specific fields to fetch from the UserXRole
     */
    select?: UserXRoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXRoleInclude | null
  }



  /**
   * Model UserXEstado
   */


  export type AggregateUserXEstado = {
    _count: UserXEstadoCountAggregateOutputType | null
    _avg: UserXEstadoAvgAggregateOutputType | null
    _sum: UserXEstadoSumAggregateOutputType | null
    _min: UserXEstadoMinAggregateOutputType | null
    _max: UserXEstadoMaxAggregateOutputType | null
  }

  export type UserXEstadoAvgAggregateOutputType = {
    id: number | null
  }

  export type UserXEstadoSumAggregateOutputType = {
    id: number | null
  }

  export type UserXEstadoMinAggregateOutputType = {
    id: number | null
    descripcion: string | null
  }

  export type UserXEstadoMaxAggregateOutputType = {
    id: number | null
    descripcion: string | null
  }

  export type UserXEstadoCountAggregateOutputType = {
    id: number
    descripcion: number
    _all: number
  }


  export type UserXEstadoAvgAggregateInputType = {
    id?: true
  }

  export type UserXEstadoSumAggregateInputType = {
    id?: true
  }

  export type UserXEstadoMinAggregateInputType = {
    id?: true
    descripcion?: true
  }

  export type UserXEstadoMaxAggregateInputType = {
    id?: true
    descripcion?: true
  }

  export type UserXEstadoCountAggregateInputType = {
    id?: true
    descripcion?: true
    _all?: true
  }

  export type UserXEstadoAggregateArgs = {
    /**
     * Filter which UserXEstado to aggregate.
     */
    where?: UserXEstadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserXEstados to fetch.
     */
    orderBy?: Enumerable<UserXEstadoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserXEstadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserXEstados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserXEstados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserXEstados
    **/
    _count?: true | UserXEstadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserXEstadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserXEstadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserXEstadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserXEstadoMaxAggregateInputType
  }

  export type GetUserXEstadoAggregateType<T extends UserXEstadoAggregateArgs> = {
        [P in keyof T & keyof AggregateUserXEstado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserXEstado[P]>
      : GetScalarType<T[P], AggregateUserXEstado[P]>
  }




  export type UserXEstadoGroupByArgs = {
    where?: UserXEstadoWhereInput
    orderBy?: Enumerable<UserXEstadoOrderByWithAggregationInput>
    by: UserXEstadoScalarFieldEnum[]
    having?: UserXEstadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserXEstadoCountAggregateInputType | true
    _avg?: UserXEstadoAvgAggregateInputType
    _sum?: UserXEstadoSumAggregateInputType
    _min?: UserXEstadoMinAggregateInputType
    _max?: UserXEstadoMaxAggregateInputType
  }


  export type UserXEstadoGroupByOutputType = {
    id: number
    descripcion: string
    _count: UserXEstadoCountAggregateOutputType | null
    _avg: UserXEstadoAvgAggregateOutputType | null
    _sum: UserXEstadoSumAggregateOutputType | null
    _min: UserXEstadoMinAggregateOutputType | null
    _max: UserXEstadoMaxAggregateOutputType | null
  }

  type GetUserXEstadoGroupByPayload<T extends UserXEstadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserXEstadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserXEstadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserXEstadoGroupByOutputType[P]>
            : GetScalarType<T[P], UserXEstadoGroupByOutputType[P]>
        }
      >
    >


  export type UserXEstadoSelect = {
    id?: boolean
    descripcion?: boolean
    user?: boolean | UserXEstado$userArgs
    _count?: boolean | UserXEstadoCountOutputTypeArgs
  }


  export type UserXEstadoInclude = {
    user?: boolean | UserXEstado$userArgs
    _count?: boolean | UserXEstadoCountOutputTypeArgs
  }

  export type UserXEstadoGetPayload<S extends boolean | null | undefined | UserXEstadoArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserXEstado :
    S extends undefined ? never :
    S extends { include: any } & (UserXEstadoArgs | UserXEstadoFindManyArgs)
    ? UserXEstado  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserXEstadoCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserXEstadoArgs | UserXEstadoFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserXEstadoCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof UserXEstado ? UserXEstado[P] : never
  } 
      : UserXEstado


  type UserXEstadoCountArgs = 
    Omit<UserXEstadoFindManyArgs, 'select' | 'include'> & {
      select?: UserXEstadoCountAggregateInputType | true
    }

  export interface UserXEstadoDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one UserXEstado that matches the filter.
     * @param {UserXEstadoFindUniqueArgs} args - Arguments to find a UserXEstado
     * @example
     * // Get one UserXEstado
     * const userXEstado = await prisma.userXEstado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserXEstadoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserXEstadoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserXEstado'> extends True ? Prisma__UserXEstadoClient<UserXEstadoGetPayload<T>> : Prisma__UserXEstadoClient<UserXEstadoGetPayload<T> | null, null>

    /**
     * Find one UserXEstado that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserXEstadoFindUniqueOrThrowArgs} args - Arguments to find a UserXEstado
     * @example
     * // Get one UserXEstado
     * const userXEstado = await prisma.userXEstado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserXEstadoFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserXEstadoFindUniqueOrThrowArgs>
    ): Prisma__UserXEstadoClient<UserXEstadoGetPayload<T>>

    /**
     * Find the first UserXEstado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXEstadoFindFirstArgs} args - Arguments to find a UserXEstado
     * @example
     * // Get one UserXEstado
     * const userXEstado = await prisma.userXEstado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserXEstadoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserXEstadoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserXEstado'> extends True ? Prisma__UserXEstadoClient<UserXEstadoGetPayload<T>> : Prisma__UserXEstadoClient<UserXEstadoGetPayload<T> | null, null>

    /**
     * Find the first UserXEstado that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXEstadoFindFirstOrThrowArgs} args - Arguments to find a UserXEstado
     * @example
     * // Get one UserXEstado
     * const userXEstado = await prisma.userXEstado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserXEstadoFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserXEstadoFindFirstOrThrowArgs>
    ): Prisma__UserXEstadoClient<UserXEstadoGetPayload<T>>

    /**
     * Find zero or more UserXEstados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXEstadoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserXEstados
     * const userXEstados = await prisma.userXEstado.findMany()
     * 
     * // Get first 10 UserXEstados
     * const userXEstados = await prisma.userXEstado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userXEstadoWithIdOnly = await prisma.userXEstado.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserXEstadoFindManyArgs>(
      args?: SelectSubset<T, UserXEstadoFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserXEstadoGetPayload<T>>>

    /**
     * Create a UserXEstado.
     * @param {UserXEstadoCreateArgs} args - Arguments to create a UserXEstado.
     * @example
     * // Create one UserXEstado
     * const UserXEstado = await prisma.userXEstado.create({
     *   data: {
     *     // ... data to create a UserXEstado
     *   }
     * })
     * 
    **/
    create<T extends UserXEstadoCreateArgs>(
      args: SelectSubset<T, UserXEstadoCreateArgs>
    ): Prisma__UserXEstadoClient<UserXEstadoGetPayload<T>>

    /**
     * Create many UserXEstados.
     *     @param {UserXEstadoCreateManyArgs} args - Arguments to create many UserXEstados.
     *     @example
     *     // Create many UserXEstados
     *     const userXEstado = await prisma.userXEstado.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserXEstadoCreateManyArgs>(
      args?: SelectSubset<T, UserXEstadoCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserXEstado.
     * @param {UserXEstadoDeleteArgs} args - Arguments to delete one UserXEstado.
     * @example
     * // Delete one UserXEstado
     * const UserXEstado = await prisma.userXEstado.delete({
     *   where: {
     *     // ... filter to delete one UserXEstado
     *   }
     * })
     * 
    **/
    delete<T extends UserXEstadoDeleteArgs>(
      args: SelectSubset<T, UserXEstadoDeleteArgs>
    ): Prisma__UserXEstadoClient<UserXEstadoGetPayload<T>>

    /**
     * Update one UserXEstado.
     * @param {UserXEstadoUpdateArgs} args - Arguments to update one UserXEstado.
     * @example
     * // Update one UserXEstado
     * const userXEstado = await prisma.userXEstado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserXEstadoUpdateArgs>(
      args: SelectSubset<T, UserXEstadoUpdateArgs>
    ): Prisma__UserXEstadoClient<UserXEstadoGetPayload<T>>

    /**
     * Delete zero or more UserXEstados.
     * @param {UserXEstadoDeleteManyArgs} args - Arguments to filter UserXEstados to delete.
     * @example
     * // Delete a few UserXEstados
     * const { count } = await prisma.userXEstado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserXEstadoDeleteManyArgs>(
      args?: SelectSubset<T, UserXEstadoDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserXEstados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXEstadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserXEstados
     * const userXEstado = await prisma.userXEstado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserXEstadoUpdateManyArgs>(
      args: SelectSubset<T, UserXEstadoUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserXEstado.
     * @param {UserXEstadoUpsertArgs} args - Arguments to update or create a UserXEstado.
     * @example
     * // Update or create a UserXEstado
     * const userXEstado = await prisma.userXEstado.upsert({
     *   create: {
     *     // ... data to create a UserXEstado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserXEstado we want to update
     *   }
     * })
    **/
    upsert<T extends UserXEstadoUpsertArgs>(
      args: SelectSubset<T, UserXEstadoUpsertArgs>
    ): Prisma__UserXEstadoClient<UserXEstadoGetPayload<T>>

    /**
     * Count the number of UserXEstados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXEstadoCountArgs} args - Arguments to filter UserXEstados to count.
     * @example
     * // Count the number of UserXEstados
     * const count = await prisma.userXEstado.count({
     *   where: {
     *     // ... the filter for the UserXEstados we want to count
     *   }
     * })
    **/
    count<T extends UserXEstadoCountArgs>(
      args?: Subset<T, UserXEstadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserXEstadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserXEstado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXEstadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserXEstadoAggregateArgs>(args: Subset<T, UserXEstadoAggregateArgs>): Prisma.PrismaPromise<GetUserXEstadoAggregateType<T>>

    /**
     * Group by UserXEstado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXEstadoGroupByArgs} args - Group by arguments.
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
      T extends UserXEstadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserXEstadoGroupByArgs['orderBy'] }
        : { orderBy?: UserXEstadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserXEstadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserXEstadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for UserXEstado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserXEstadoClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    user<T extends UserXEstado$userArgs= {}>(args?: Subset<T, UserXEstado$userArgs>): Prisma.PrismaPromise<Array<UserGetPayload<T>>| Null>;

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
   * UserXEstado base type for findUnique actions
   */
  export type UserXEstadoFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserXEstado
     */
    select?: UserXEstadoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXEstadoInclude | null
    /**
     * Filter, which UserXEstado to fetch.
     */
    where: UserXEstadoWhereUniqueInput
  }

  /**
   * UserXEstado findUnique
   */
  export interface UserXEstadoFindUniqueArgs extends UserXEstadoFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserXEstado findUniqueOrThrow
   */
  export type UserXEstadoFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserXEstado
     */
    select?: UserXEstadoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXEstadoInclude | null
    /**
     * Filter, which UserXEstado to fetch.
     */
    where: UserXEstadoWhereUniqueInput
  }


  /**
   * UserXEstado base type for findFirst actions
   */
  export type UserXEstadoFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserXEstado
     */
    select?: UserXEstadoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXEstadoInclude | null
    /**
     * Filter, which UserXEstado to fetch.
     */
    where?: UserXEstadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserXEstados to fetch.
     */
    orderBy?: Enumerable<UserXEstadoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserXEstados.
     */
    cursor?: UserXEstadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserXEstados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserXEstados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserXEstados.
     */
    distinct?: Enumerable<UserXEstadoScalarFieldEnum>
  }

  /**
   * UserXEstado findFirst
   */
  export interface UserXEstadoFindFirstArgs extends UserXEstadoFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserXEstado findFirstOrThrow
   */
  export type UserXEstadoFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserXEstado
     */
    select?: UserXEstadoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXEstadoInclude | null
    /**
     * Filter, which UserXEstado to fetch.
     */
    where?: UserXEstadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserXEstados to fetch.
     */
    orderBy?: Enumerable<UserXEstadoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserXEstados.
     */
    cursor?: UserXEstadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserXEstados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserXEstados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserXEstados.
     */
    distinct?: Enumerable<UserXEstadoScalarFieldEnum>
  }


  /**
   * UserXEstado findMany
   */
  export type UserXEstadoFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserXEstado
     */
    select?: UserXEstadoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXEstadoInclude | null
    /**
     * Filter, which UserXEstados to fetch.
     */
    where?: UserXEstadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserXEstados to fetch.
     */
    orderBy?: Enumerable<UserXEstadoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserXEstados.
     */
    cursor?: UserXEstadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserXEstados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserXEstados.
     */
    skip?: number
    distinct?: Enumerable<UserXEstadoScalarFieldEnum>
  }


  /**
   * UserXEstado create
   */
  export type UserXEstadoCreateArgs = {
    /**
     * Select specific fields to fetch from the UserXEstado
     */
    select?: UserXEstadoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXEstadoInclude | null
    /**
     * The data needed to create a UserXEstado.
     */
    data: XOR<UserXEstadoCreateInput, UserXEstadoUncheckedCreateInput>
  }


  /**
   * UserXEstado createMany
   */
  export type UserXEstadoCreateManyArgs = {
    /**
     * The data used to create many UserXEstados.
     */
    data: Enumerable<UserXEstadoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserXEstado update
   */
  export type UserXEstadoUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserXEstado
     */
    select?: UserXEstadoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXEstadoInclude | null
    /**
     * The data needed to update a UserXEstado.
     */
    data: XOR<UserXEstadoUpdateInput, UserXEstadoUncheckedUpdateInput>
    /**
     * Choose, which UserXEstado to update.
     */
    where: UserXEstadoWhereUniqueInput
  }


  /**
   * UserXEstado updateMany
   */
  export type UserXEstadoUpdateManyArgs = {
    /**
     * The data used to update UserXEstados.
     */
    data: XOR<UserXEstadoUpdateManyMutationInput, UserXEstadoUncheckedUpdateManyInput>
    /**
     * Filter which UserXEstados to update
     */
    where?: UserXEstadoWhereInput
  }


  /**
   * UserXEstado upsert
   */
  export type UserXEstadoUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserXEstado
     */
    select?: UserXEstadoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXEstadoInclude | null
    /**
     * The filter to search for the UserXEstado to update in case it exists.
     */
    where: UserXEstadoWhereUniqueInput
    /**
     * In case the UserXEstado found by the `where` argument doesn't exist, create a new UserXEstado with this data.
     */
    create: XOR<UserXEstadoCreateInput, UserXEstadoUncheckedCreateInput>
    /**
     * In case the UserXEstado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserXEstadoUpdateInput, UserXEstadoUncheckedUpdateInput>
  }


  /**
   * UserXEstado delete
   */
  export type UserXEstadoDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserXEstado
     */
    select?: UserXEstadoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXEstadoInclude | null
    /**
     * Filter which UserXEstado to delete.
     */
    where: UserXEstadoWhereUniqueInput
  }


  /**
   * UserXEstado deleteMany
   */
  export type UserXEstadoDeleteManyArgs = {
    /**
     * Filter which UserXEstados to delete
     */
    where?: UserXEstadoWhereInput
  }


  /**
   * UserXEstado.user
   */
  export type UserXEstado$userArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * UserXEstado without action
   */
  export type UserXEstadoArgs = {
    /**
     * Select specific fields to fetch from the UserXEstado
     */
    select?: UserXEstadoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXEstadoInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    roleId: 'roleId',
    estadoId: 'estadoId',
    saldo: 'saldo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserXEstadoScalarFieldEnum: {
    id: 'id',
    descripcion: 'descripcion'
  };

  export type UserXEstadoScalarFieldEnum = (typeof UserXEstadoScalarFieldEnum)[keyof typeof UserXEstadoScalarFieldEnum]


  export const UserXRoleScalarFieldEnum: {
    id: 'id',
    descripcion: 'descripcion'
  };

  export type UserXRoleScalarFieldEnum = (typeof UserXRoleScalarFieldEnum)[keyof typeof UserXRoleScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    roleId?: IntFilter | number
    estadoId?: IntFilter | number
    saldo?: DecimalFilter | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    UserXRole?: XOR<UserXRoleRelationFilter, UserXRoleWhereInput>
    UserXEstado?: XOR<UserXEstadoRelationFilter, UserXEstadoWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
    estadoId?: SortOrder
    saldo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    UserXRole?: UserXRoleOrderByWithRelationInput
    UserXEstado?: UserXEstadoOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
    estadoId?: SortOrder
    saldo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    roleId?: IntWithAggregatesFilter | number
    estadoId?: IntWithAggregatesFilter | number
    saldo?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserXRoleWhereInput = {
    AND?: Enumerable<UserXRoleWhereInput>
    OR?: Enumerable<UserXRoleWhereInput>
    NOT?: Enumerable<UserXRoleWhereInput>
    id?: IntFilter | number
    descripcion?: StringFilter | string
    user?: UserListRelationFilter
  }

  export type UserXRoleOrderByWithRelationInput = {
    id?: SortOrder
    descripcion?: SortOrder
    user?: UserOrderByRelationAggregateInput
  }

  export type UserXRoleWhereUniqueInput = {
    id?: number
    descripcion?: string
  }

  export type UserXRoleOrderByWithAggregationInput = {
    id?: SortOrder
    descripcion?: SortOrder
    _count?: UserXRoleCountOrderByAggregateInput
    _avg?: UserXRoleAvgOrderByAggregateInput
    _max?: UserXRoleMaxOrderByAggregateInput
    _min?: UserXRoleMinOrderByAggregateInput
    _sum?: UserXRoleSumOrderByAggregateInput
  }

  export type UserXRoleScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserXRoleScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserXRoleScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserXRoleScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    descripcion?: StringWithAggregatesFilter | string
  }

  export type UserXEstadoWhereInput = {
    AND?: Enumerable<UserXEstadoWhereInput>
    OR?: Enumerable<UserXEstadoWhereInput>
    NOT?: Enumerable<UserXEstadoWhereInput>
    id?: IntFilter | number
    descripcion?: StringFilter | string
    user?: UserListRelationFilter
  }

  export type UserXEstadoOrderByWithRelationInput = {
    id?: SortOrder
    descripcion?: SortOrder
    user?: UserOrderByRelationAggregateInput
  }

  export type UserXEstadoWhereUniqueInput = {
    id?: number
    descripcion?: string
  }

  export type UserXEstadoOrderByWithAggregationInput = {
    id?: SortOrder
    descripcion?: SortOrder
    _count?: UserXEstadoCountOrderByAggregateInput
    _avg?: UserXEstadoAvgOrderByAggregateInput
    _max?: UserXEstadoMaxOrderByAggregateInput
    _min?: UserXEstadoMinOrderByAggregateInput
    _sum?: UserXEstadoSumOrderByAggregateInput
  }

  export type UserXEstadoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserXEstadoScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserXEstadoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserXEstadoScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    descripcion?: StringWithAggregatesFilter | string
  }

  export type UserCreateInput = {
    id: number
    name: string
    email: string
    password: string
    saldo: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    UserXRole: UserXRoleCreateNestedOneWithoutUserInput
    UserXEstado: UserXEstadoCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: number
    name: string
    email: string
    password: string
    roleId: number
    estadoId: number
    saldo: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserXRole?: UserXRoleUpdateOneRequiredWithoutUserNestedInput
    UserXEstado?: UserXEstadoUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    estadoId?: IntFieldUpdateOperationsInput | number
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id: number
    name: string
    email: string
    password: string
    roleId: number
    estadoId: number
    saldo: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    estadoId?: IntFieldUpdateOperationsInput | number
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserXRoleCreateInput = {
    id: number
    descripcion: string
    user?: UserCreateNestedManyWithoutUserXRoleInput
  }

  export type UserXRoleUncheckedCreateInput = {
    id: number
    descripcion: string
    user?: UserUncheckedCreateNestedManyWithoutUserXRoleInput
  }

  export type UserXRoleUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateManyWithoutUserXRoleNestedInput
  }

  export type UserXRoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    user?: UserUncheckedUpdateManyWithoutUserXRoleNestedInput
  }

  export type UserXRoleCreateManyInput = {
    id: number
    descripcion: string
  }

  export type UserXRoleUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type UserXRoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type UserXEstadoCreateInput = {
    id: number
    descripcion: string
    user?: UserCreateNestedManyWithoutUserXEstadoInput
  }

  export type UserXEstadoUncheckedCreateInput = {
    id: number
    descripcion: string
    user?: UserUncheckedCreateNestedManyWithoutUserXEstadoInput
  }

  export type UserXEstadoUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateManyWithoutUserXEstadoNestedInput
  }

  export type UserXEstadoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    user?: UserUncheckedUpdateManyWithoutUserXEstadoNestedInput
  }

  export type UserXEstadoCreateManyInput = {
    id: number
    descripcion: string
  }

  export type UserXEstadoUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type UserXEstadoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
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

  export type UserXRoleRelationFilter = {
    is?: UserXRoleWhereInput
    isNot?: UserXRoleWhereInput
  }

  export type UserXEstadoRelationFilter = {
    is?: UserXEstadoWhereInput
    isNot?: UserXEstadoWhereInput
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
    estadoId?: SortOrder
    saldo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    estadoId?: SortOrder
    saldo?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
    estadoId?: SortOrder
    saldo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
    estadoId?: SortOrder
    saldo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    estadoId?: SortOrder
    saldo?: SortOrder
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserXRoleCountOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
  }

  export type UserXRoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserXRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
  }

  export type UserXRoleMinOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
  }

  export type UserXRoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserXEstadoCountOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
  }

  export type UserXEstadoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserXEstadoMaxOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
  }

  export type UserXEstadoMinOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
  }

  export type UserXEstadoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserXRoleCreateNestedOneWithoutUserInput = {
    create?: XOR<UserXRoleCreateWithoutUserInput, UserXRoleUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserXRoleCreateOrConnectWithoutUserInput
    connect?: UserXRoleWhereUniqueInput
  }

  export type UserXEstadoCreateNestedOneWithoutUserInput = {
    create?: XOR<UserXEstadoCreateWithoutUserInput, UserXEstadoUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserXEstadoCreateOrConnectWithoutUserInput
    connect?: UserXEstadoWhereUniqueInput
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

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserXRoleUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<UserXRoleCreateWithoutUserInput, UserXRoleUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserXRoleCreateOrConnectWithoutUserInput
    upsert?: UserXRoleUpsertWithoutUserInput
    connect?: UserXRoleWhereUniqueInput
    update?: XOR<UserXRoleUpdateWithoutUserInput, UserXRoleUncheckedUpdateWithoutUserInput>
  }

  export type UserXEstadoUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<UserXEstadoCreateWithoutUserInput, UserXEstadoUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserXEstadoCreateOrConnectWithoutUserInput
    upsert?: UserXEstadoUpsertWithoutUserInput
    connect?: UserXEstadoWhereUniqueInput
    update?: XOR<UserXEstadoUpdateWithoutUserInput, UserXEstadoUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedManyWithoutUserXRoleInput = {
    create?: XOR<Enumerable<UserCreateWithoutUserXRoleInput>, Enumerable<UserUncheckedCreateWithoutUserXRoleInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutUserXRoleInput>
    createMany?: UserCreateManyUserXRoleInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutUserXRoleInput = {
    create?: XOR<Enumerable<UserCreateWithoutUserXRoleInput>, Enumerable<UserUncheckedCreateWithoutUserXRoleInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutUserXRoleInput>
    createMany?: UserCreateManyUserXRoleInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserUpdateManyWithoutUserXRoleNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutUserXRoleInput>, Enumerable<UserUncheckedCreateWithoutUserXRoleInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutUserXRoleInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutUserXRoleInput>
    createMany?: UserCreateManyUserXRoleInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutUserXRoleInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutUserXRoleInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutUserXRoleNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutUserXRoleInput>, Enumerable<UserUncheckedCreateWithoutUserXRoleInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutUserXRoleInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutUserXRoleInput>
    createMany?: UserCreateManyUserXRoleInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutUserXRoleInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutUserXRoleInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserCreateNestedManyWithoutUserXEstadoInput = {
    create?: XOR<Enumerable<UserCreateWithoutUserXEstadoInput>, Enumerable<UserUncheckedCreateWithoutUserXEstadoInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutUserXEstadoInput>
    createMany?: UserCreateManyUserXEstadoInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutUserXEstadoInput = {
    create?: XOR<Enumerable<UserCreateWithoutUserXEstadoInput>, Enumerable<UserUncheckedCreateWithoutUserXEstadoInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutUserXEstadoInput>
    createMany?: UserCreateManyUserXEstadoInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserUpdateManyWithoutUserXEstadoNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutUserXEstadoInput>, Enumerable<UserUncheckedCreateWithoutUserXEstadoInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutUserXEstadoInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutUserXEstadoInput>
    createMany?: UserCreateManyUserXEstadoInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutUserXEstadoInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutUserXEstadoInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutUserXEstadoNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutUserXEstadoInput>, Enumerable<UserUncheckedCreateWithoutUserXEstadoInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutUserXEstadoInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutUserXEstadoInput>
    createMany?: UserCreateManyUserXEstadoInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutUserXEstadoInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutUserXEstadoInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
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

  export type UserXRoleCreateWithoutUserInput = {
    id: number
    descripcion: string
  }

  export type UserXRoleUncheckedCreateWithoutUserInput = {
    id: number
    descripcion: string
  }

  export type UserXRoleCreateOrConnectWithoutUserInput = {
    where: UserXRoleWhereUniqueInput
    create: XOR<UserXRoleCreateWithoutUserInput, UserXRoleUncheckedCreateWithoutUserInput>
  }

  export type UserXEstadoCreateWithoutUserInput = {
    id: number
    descripcion: string
  }

  export type UserXEstadoUncheckedCreateWithoutUserInput = {
    id: number
    descripcion: string
  }

  export type UserXEstadoCreateOrConnectWithoutUserInput = {
    where: UserXEstadoWhereUniqueInput
    create: XOR<UserXEstadoCreateWithoutUserInput, UserXEstadoUncheckedCreateWithoutUserInput>
  }

  export type UserXRoleUpsertWithoutUserInput = {
    update: XOR<UserXRoleUpdateWithoutUserInput, UserXRoleUncheckedUpdateWithoutUserInput>
    create: XOR<UserXRoleCreateWithoutUserInput, UserXRoleUncheckedCreateWithoutUserInput>
  }

  export type UserXRoleUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type UserXRoleUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type UserXEstadoUpsertWithoutUserInput = {
    update: XOR<UserXEstadoUpdateWithoutUserInput, UserXEstadoUncheckedUpdateWithoutUserInput>
    create: XOR<UserXEstadoCreateWithoutUserInput, UserXEstadoUncheckedCreateWithoutUserInput>
  }

  export type UserXEstadoUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type UserXEstadoUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutUserXRoleInput = {
    id: number
    name: string
    email: string
    password: string
    saldo: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    UserXEstado: UserXEstadoCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserXRoleInput = {
    id: number
    name: string
    email: string
    password: string
    estadoId: number
    saldo: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutUserXRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserXRoleInput, UserUncheckedCreateWithoutUserXRoleInput>
  }

  export type UserCreateManyUserXRoleInputEnvelope = {
    data: Enumerable<UserCreateManyUserXRoleInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutUserXRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutUserXRoleInput, UserUncheckedUpdateWithoutUserXRoleInput>
    create: XOR<UserCreateWithoutUserXRoleInput, UserUncheckedCreateWithoutUserXRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutUserXRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutUserXRoleInput, UserUncheckedUpdateWithoutUserXRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutUserXRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUserInput>
  }

  export type UserScalarWhereInput = {
    AND?: Enumerable<UserScalarWhereInput>
    OR?: Enumerable<UserScalarWhereInput>
    NOT?: Enumerable<UserScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    roleId?: IntFilter | number
    estadoId?: IntFilter | number
    saldo?: DecimalFilter | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type UserCreateWithoutUserXEstadoInput = {
    id: number
    name: string
    email: string
    password: string
    saldo: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    UserXRole: UserXRoleCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserXEstadoInput = {
    id: number
    name: string
    email: string
    password: string
    roleId: number
    saldo: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutUserXEstadoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserXEstadoInput, UserUncheckedCreateWithoutUserXEstadoInput>
  }

  export type UserCreateManyUserXEstadoInputEnvelope = {
    data: Enumerable<UserCreateManyUserXEstadoInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutUserXEstadoInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutUserXEstadoInput, UserUncheckedUpdateWithoutUserXEstadoInput>
    create: XOR<UserCreateWithoutUserXEstadoInput, UserUncheckedCreateWithoutUserXEstadoInput>
  }

  export type UserUpdateWithWhereUniqueWithoutUserXEstadoInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutUserXEstadoInput, UserUncheckedUpdateWithoutUserXEstadoInput>
  }

  export type UserUpdateManyWithWhereWithoutUserXEstadoInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCreateManyUserXRoleInput = {
    id: number
    name: string
    email: string
    password: string
    estadoId: number
    saldo: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutUserXRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserXEstado?: UserXEstadoUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserXRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    estadoId?: IntFieldUpdateOperationsInput | number
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    estadoId?: IntFieldUpdateOperationsInput | number
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyUserXEstadoInput = {
    id: number
    name: string
    email: string
    password: string
    roleId: number
    saldo: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutUserXEstadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserXRole?: UserXRoleUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserXEstadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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