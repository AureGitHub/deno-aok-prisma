
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
 * Model User
 * 
 */
export type User = {
  id: number
  email: string
  password: string
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model App
 * 
 */
export type App = {
  id: number
  descripcion: string
}

/**
 * Model UserxApp
 * 
 */
export type UserxApp = {
  userId: number
  appId: number
  role: Role
  estado: Estado
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const Estado: {
  ACTIVE: 'ACTIVE',
  BLOCK: 'BLOCK',
  UNSUBSCRIBED: 'UNSUBSCRIBED'
};

export type Estado = (typeof Estado)[keyof typeof Estado]


export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  GOD: 'GOD'
};

export type Role = (typeof Role)[keyof typeof Role]


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
   * `prisma.app`: Exposes CRUD operations for the **App** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Apps
    * const apps = await prisma.app.findMany()
    * ```
    */
  get app(): Prisma.AppDelegate<GlobalReject>;

  /**
   * `prisma.userxApp`: Exposes CRUD operations for the **UserxApp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserxApps
    * const userxApps = await prisma.userxApp.findMany()
    * ```
    */
  get userxApp(): Prisma.UserxAppDelegate<GlobalReject>;
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
    App: 'App',
    UserxApp: 'UserxApp'
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
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    apps: number
  }

  export type UserCountOutputTypeSelect = {
    apps?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type AppCountOutputType
   */


  export type AppCountOutputType = {
    users: number
  }

  export type AppCountOutputTypeSelect = {
    users?: boolean
  }

  export type AppCountOutputTypeGetPayload<S extends boolean | null | undefined | AppCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AppCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (AppCountOutputTypeArgs)
    ? AppCountOutputType 
    : S extends { select: any } & (AppCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof AppCountOutputType ? AppCountOutputType[P] : never
  } 
      : AppCountOutputType




  // Custom InputTypes

  /**
   * AppCountOutputType without action
   */
  export type AppCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AppCountOutputType
     */
    select?: AppCountOutputTypeSelect | null
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
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
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
    email: string
    password: string
    name: string
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
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    apps?: boolean | User$appsArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    apps?: boolean | User$appsArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'apps' ? Array < UserxAppGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'apps' ? Array < UserxAppGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
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

    apps<T extends User$appsArgs= {}>(args?: Subset<T, User$appsArgs>): Prisma.PrismaPromise<Array<UserxAppGetPayload<T>>| Null>;

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
   * User.apps
   */
  export type User$appsArgs = {
    /**
     * Select specific fields to fetch from the UserxApp
     */
    select?: UserxAppSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserxAppInclude | null
    where?: UserxAppWhereInput
    orderBy?: Enumerable<UserxAppOrderByWithRelationInput>
    cursor?: UserxAppWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserxAppScalarFieldEnum>
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
   * Model App
   */


  export type AggregateApp = {
    _count: AppCountAggregateOutputType | null
    _avg: AppAvgAggregateOutputType | null
    _sum: AppSumAggregateOutputType | null
    _min: AppMinAggregateOutputType | null
    _max: AppMaxAggregateOutputType | null
  }

  export type AppAvgAggregateOutputType = {
    id: number | null
  }

  export type AppSumAggregateOutputType = {
    id: number | null
  }

  export type AppMinAggregateOutputType = {
    id: number | null
    descripcion: string | null
  }

  export type AppMaxAggregateOutputType = {
    id: number | null
    descripcion: string | null
  }

  export type AppCountAggregateOutputType = {
    id: number
    descripcion: number
    _all: number
  }


  export type AppAvgAggregateInputType = {
    id?: true
  }

  export type AppSumAggregateInputType = {
    id?: true
  }

  export type AppMinAggregateInputType = {
    id?: true
    descripcion?: true
  }

  export type AppMaxAggregateInputType = {
    id?: true
    descripcion?: true
  }

  export type AppCountAggregateInputType = {
    id?: true
    descripcion?: true
    _all?: true
  }

  export type AppAggregateArgs = {
    /**
     * Filter which App to aggregate.
     */
    where?: AppWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apps to fetch.
     */
    orderBy?: Enumerable<AppOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Apps
    **/
    _count?: true | AppCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppMaxAggregateInputType
  }

  export type GetAppAggregateType<T extends AppAggregateArgs> = {
        [P in keyof T & keyof AggregateApp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApp[P]>
      : GetScalarType<T[P], AggregateApp[P]>
  }




  export type AppGroupByArgs = {
    where?: AppWhereInput
    orderBy?: Enumerable<AppOrderByWithAggregationInput>
    by: AppScalarFieldEnum[]
    having?: AppScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppCountAggregateInputType | true
    _avg?: AppAvgAggregateInputType
    _sum?: AppSumAggregateInputType
    _min?: AppMinAggregateInputType
    _max?: AppMaxAggregateInputType
  }


  export type AppGroupByOutputType = {
    id: number
    descripcion: string
    _count: AppCountAggregateOutputType | null
    _avg: AppAvgAggregateOutputType | null
    _sum: AppSumAggregateOutputType | null
    _min: AppMinAggregateOutputType | null
    _max: AppMaxAggregateOutputType | null
  }

  type GetAppGroupByPayload<T extends AppGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AppGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppGroupByOutputType[P]>
            : GetScalarType<T[P], AppGroupByOutputType[P]>
        }
      >
    >


  export type AppSelect = {
    id?: boolean
    descripcion?: boolean
    users?: boolean | App$usersArgs
    _count?: boolean | AppCountOutputTypeArgs
  }


  export type AppInclude = {
    users?: boolean | App$usersArgs
    _count?: boolean | AppCountOutputTypeArgs
  }

  export type AppGetPayload<S extends boolean | null | undefined | AppArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? App :
    S extends undefined ? never :
    S extends { include: any } & (AppArgs | AppFindManyArgs)
    ? App  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'users' ? Array < UserxAppGetPayload<S['include'][P]>>  :
        P extends '_count' ? AppCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AppArgs | AppFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'users' ? Array < UserxAppGetPayload<S['select'][P]>>  :
        P extends '_count' ? AppCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof App ? App[P] : never
  } 
      : App


  type AppCountArgs = 
    Omit<AppFindManyArgs, 'select' | 'include'> & {
      select?: AppCountAggregateInputType | true
    }

  export interface AppDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one App that matches the filter.
     * @param {AppFindUniqueArgs} args - Arguments to find a App
     * @example
     * // Get one App
     * const app = await prisma.app.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AppFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AppFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'App'> extends True ? Prisma__AppClient<AppGetPayload<T>> : Prisma__AppClient<AppGetPayload<T> | null, null>

    /**
     * Find one App that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AppFindUniqueOrThrowArgs} args - Arguments to find a App
     * @example
     * // Get one App
     * const app = await prisma.app.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AppFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AppFindUniqueOrThrowArgs>
    ): Prisma__AppClient<AppGetPayload<T>>

    /**
     * Find the first App that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppFindFirstArgs} args - Arguments to find a App
     * @example
     * // Get one App
     * const app = await prisma.app.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AppFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AppFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'App'> extends True ? Prisma__AppClient<AppGetPayload<T>> : Prisma__AppClient<AppGetPayload<T> | null, null>

    /**
     * Find the first App that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppFindFirstOrThrowArgs} args - Arguments to find a App
     * @example
     * // Get one App
     * const app = await prisma.app.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AppFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AppFindFirstOrThrowArgs>
    ): Prisma__AppClient<AppGetPayload<T>>

    /**
     * Find zero or more Apps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Apps
     * const apps = await prisma.app.findMany()
     * 
     * // Get first 10 Apps
     * const apps = await prisma.app.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appWithIdOnly = await prisma.app.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AppFindManyArgs>(
      args?: SelectSubset<T, AppFindManyArgs>
    ): Prisma.PrismaPromise<Array<AppGetPayload<T>>>

    /**
     * Create a App.
     * @param {AppCreateArgs} args - Arguments to create a App.
     * @example
     * // Create one App
     * const App = await prisma.app.create({
     *   data: {
     *     // ... data to create a App
     *   }
     * })
     * 
    **/
    create<T extends AppCreateArgs>(
      args: SelectSubset<T, AppCreateArgs>
    ): Prisma__AppClient<AppGetPayload<T>>

    /**
     * Create many Apps.
     *     @param {AppCreateManyArgs} args - Arguments to create many Apps.
     *     @example
     *     // Create many Apps
     *     const app = await prisma.app.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AppCreateManyArgs>(
      args?: SelectSubset<T, AppCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a App.
     * @param {AppDeleteArgs} args - Arguments to delete one App.
     * @example
     * // Delete one App
     * const App = await prisma.app.delete({
     *   where: {
     *     // ... filter to delete one App
     *   }
     * })
     * 
    **/
    delete<T extends AppDeleteArgs>(
      args: SelectSubset<T, AppDeleteArgs>
    ): Prisma__AppClient<AppGetPayload<T>>

    /**
     * Update one App.
     * @param {AppUpdateArgs} args - Arguments to update one App.
     * @example
     * // Update one App
     * const app = await prisma.app.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AppUpdateArgs>(
      args: SelectSubset<T, AppUpdateArgs>
    ): Prisma__AppClient<AppGetPayload<T>>

    /**
     * Delete zero or more Apps.
     * @param {AppDeleteManyArgs} args - Arguments to filter Apps to delete.
     * @example
     * // Delete a few Apps
     * const { count } = await prisma.app.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AppDeleteManyArgs>(
      args?: SelectSubset<T, AppDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Apps
     * const app = await prisma.app.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AppUpdateManyArgs>(
      args: SelectSubset<T, AppUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one App.
     * @param {AppUpsertArgs} args - Arguments to update or create a App.
     * @example
     * // Update or create a App
     * const app = await prisma.app.upsert({
     *   create: {
     *     // ... data to create a App
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the App we want to update
     *   }
     * })
    **/
    upsert<T extends AppUpsertArgs>(
      args: SelectSubset<T, AppUpsertArgs>
    ): Prisma__AppClient<AppGetPayload<T>>

    /**
     * Count the number of Apps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppCountArgs} args - Arguments to filter Apps to count.
     * @example
     * // Count the number of Apps
     * const count = await prisma.app.count({
     *   where: {
     *     // ... the filter for the Apps we want to count
     *   }
     * })
    **/
    count<T extends AppCountArgs>(
      args?: Subset<T, AppCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a App.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppAggregateArgs>(args: Subset<T, AppAggregateArgs>): Prisma.PrismaPromise<GetAppAggregateType<T>>

    /**
     * Group by App.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppGroupByArgs} args - Group by arguments.
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
      T extends AppGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppGroupByArgs['orderBy'] }
        : { orderBy?: AppGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for App.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AppClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    users<T extends App$usersArgs= {}>(args?: Subset<T, App$usersArgs>): Prisma.PrismaPromise<Array<UserxAppGetPayload<T>>| Null>;

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
   * App base type for findUnique actions
   */
  export type AppFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppInclude | null
    /**
     * Filter, which App to fetch.
     */
    where: AppWhereUniqueInput
  }

  /**
   * App findUnique
   */
  export interface AppFindUniqueArgs extends AppFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * App findUniqueOrThrow
   */
  export type AppFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppInclude | null
    /**
     * Filter, which App to fetch.
     */
    where: AppWhereUniqueInput
  }


  /**
   * App base type for findFirst actions
   */
  export type AppFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppInclude | null
    /**
     * Filter, which App to fetch.
     */
    where?: AppWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apps to fetch.
     */
    orderBy?: Enumerable<AppOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apps.
     */
    cursor?: AppWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apps.
     */
    distinct?: Enumerable<AppScalarFieldEnum>
  }

  /**
   * App findFirst
   */
  export interface AppFindFirstArgs extends AppFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * App findFirstOrThrow
   */
  export type AppFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppInclude | null
    /**
     * Filter, which App to fetch.
     */
    where?: AppWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apps to fetch.
     */
    orderBy?: Enumerable<AppOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apps.
     */
    cursor?: AppWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apps.
     */
    distinct?: Enumerable<AppScalarFieldEnum>
  }


  /**
   * App findMany
   */
  export type AppFindManyArgs = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppInclude | null
    /**
     * Filter, which Apps to fetch.
     */
    where?: AppWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apps to fetch.
     */
    orderBy?: Enumerable<AppOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Apps.
     */
    cursor?: AppWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apps.
     */
    skip?: number
    distinct?: Enumerable<AppScalarFieldEnum>
  }


  /**
   * App create
   */
  export type AppCreateArgs = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppInclude | null
    /**
     * The data needed to create a App.
     */
    data: XOR<AppCreateInput, AppUncheckedCreateInput>
  }


  /**
   * App createMany
   */
  export type AppCreateManyArgs = {
    /**
     * The data used to create many Apps.
     */
    data: Enumerable<AppCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * App update
   */
  export type AppUpdateArgs = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppInclude | null
    /**
     * The data needed to update a App.
     */
    data: XOR<AppUpdateInput, AppUncheckedUpdateInput>
    /**
     * Choose, which App to update.
     */
    where: AppWhereUniqueInput
  }


  /**
   * App updateMany
   */
  export type AppUpdateManyArgs = {
    /**
     * The data used to update Apps.
     */
    data: XOR<AppUpdateManyMutationInput, AppUncheckedUpdateManyInput>
    /**
     * Filter which Apps to update
     */
    where?: AppWhereInput
  }


  /**
   * App upsert
   */
  export type AppUpsertArgs = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppInclude | null
    /**
     * The filter to search for the App to update in case it exists.
     */
    where: AppWhereUniqueInput
    /**
     * In case the App found by the `where` argument doesn't exist, create a new App with this data.
     */
    create: XOR<AppCreateInput, AppUncheckedCreateInput>
    /**
     * In case the App was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppUpdateInput, AppUncheckedUpdateInput>
  }


  /**
   * App delete
   */
  export type AppDeleteArgs = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppInclude | null
    /**
     * Filter which App to delete.
     */
    where: AppWhereUniqueInput
  }


  /**
   * App deleteMany
   */
  export type AppDeleteManyArgs = {
    /**
     * Filter which Apps to delete
     */
    where?: AppWhereInput
  }


  /**
   * App.users
   */
  export type App$usersArgs = {
    /**
     * Select specific fields to fetch from the UserxApp
     */
    select?: UserxAppSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserxAppInclude | null
    where?: UserxAppWhereInput
    orderBy?: Enumerable<UserxAppOrderByWithRelationInput>
    cursor?: UserxAppWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserxAppScalarFieldEnum>
  }


  /**
   * App without action
   */
  export type AppArgs = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppInclude | null
  }



  /**
   * Model UserxApp
   */


  export type AggregateUserxApp = {
    _count: UserxAppCountAggregateOutputType | null
    _avg: UserxAppAvgAggregateOutputType | null
    _sum: UserxAppSumAggregateOutputType | null
    _min: UserxAppMinAggregateOutputType | null
    _max: UserxAppMaxAggregateOutputType | null
  }

  export type UserxAppAvgAggregateOutputType = {
    userId: number | null
    appId: number | null
  }

  export type UserxAppSumAggregateOutputType = {
    userId: number | null
    appId: number | null
  }

  export type UserxAppMinAggregateOutputType = {
    userId: number | null
    appId: number | null
    role: Role | null
    estado: Estado | null
  }

  export type UserxAppMaxAggregateOutputType = {
    userId: number | null
    appId: number | null
    role: Role | null
    estado: Estado | null
  }

  export type UserxAppCountAggregateOutputType = {
    userId: number
    appId: number
    role: number
    estado: number
    _all: number
  }


  export type UserxAppAvgAggregateInputType = {
    userId?: true
    appId?: true
  }

  export type UserxAppSumAggregateInputType = {
    userId?: true
    appId?: true
  }

  export type UserxAppMinAggregateInputType = {
    userId?: true
    appId?: true
    role?: true
    estado?: true
  }

  export type UserxAppMaxAggregateInputType = {
    userId?: true
    appId?: true
    role?: true
    estado?: true
  }

  export type UserxAppCountAggregateInputType = {
    userId?: true
    appId?: true
    role?: true
    estado?: true
    _all?: true
  }

  export type UserxAppAggregateArgs = {
    /**
     * Filter which UserxApp to aggregate.
     */
    where?: UserxAppWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserxApps to fetch.
     */
    orderBy?: Enumerable<UserxAppOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserxAppWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserxApps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserxApps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserxApps
    **/
    _count?: true | UserxAppCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserxAppAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserxAppSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserxAppMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserxAppMaxAggregateInputType
  }

  export type GetUserxAppAggregateType<T extends UserxAppAggregateArgs> = {
        [P in keyof T & keyof AggregateUserxApp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserxApp[P]>
      : GetScalarType<T[P], AggregateUserxApp[P]>
  }




  export type UserxAppGroupByArgs = {
    where?: UserxAppWhereInput
    orderBy?: Enumerable<UserxAppOrderByWithAggregationInput>
    by: UserxAppScalarFieldEnum[]
    having?: UserxAppScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserxAppCountAggregateInputType | true
    _avg?: UserxAppAvgAggregateInputType
    _sum?: UserxAppSumAggregateInputType
    _min?: UserxAppMinAggregateInputType
    _max?: UserxAppMaxAggregateInputType
  }


  export type UserxAppGroupByOutputType = {
    userId: number
    appId: number
    role: Role
    estado: Estado
    _count: UserxAppCountAggregateOutputType | null
    _avg: UserxAppAvgAggregateOutputType | null
    _sum: UserxAppSumAggregateOutputType | null
    _min: UserxAppMinAggregateOutputType | null
    _max: UserxAppMaxAggregateOutputType | null
  }

  type GetUserxAppGroupByPayload<T extends UserxAppGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserxAppGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserxAppGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserxAppGroupByOutputType[P]>
            : GetScalarType<T[P], UserxAppGroupByOutputType[P]>
        }
      >
    >


  export type UserxAppSelect = {
    userId?: boolean
    appId?: boolean
    role?: boolean
    estado?: boolean
    user?: boolean | UserArgs
    app?: boolean | AppArgs
  }


  export type UserxAppInclude = {
    user?: boolean | UserArgs
    app?: boolean | AppArgs
  }

  export type UserxAppGetPayload<S extends boolean | null | undefined | UserxAppArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserxApp :
    S extends undefined ? never :
    S extends { include: any } & (UserxAppArgs | UserxAppFindManyArgs)
    ? UserxApp  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'app' ? AppGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserxAppArgs | UserxAppFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'app' ? AppGetPayload<S['select'][P]> :  P extends keyof UserxApp ? UserxApp[P] : never
  } 
      : UserxApp


  type UserxAppCountArgs = 
    Omit<UserxAppFindManyArgs, 'select' | 'include'> & {
      select?: UserxAppCountAggregateInputType | true
    }

  export interface UserxAppDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one UserxApp that matches the filter.
     * @param {UserxAppFindUniqueArgs} args - Arguments to find a UserxApp
     * @example
     * // Get one UserxApp
     * const userxApp = await prisma.userxApp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserxAppFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserxAppFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserxApp'> extends True ? Prisma__UserxAppClient<UserxAppGetPayload<T>> : Prisma__UserxAppClient<UserxAppGetPayload<T> | null, null>

    /**
     * Find one UserxApp that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserxAppFindUniqueOrThrowArgs} args - Arguments to find a UserxApp
     * @example
     * // Get one UserxApp
     * const userxApp = await prisma.userxApp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserxAppFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserxAppFindUniqueOrThrowArgs>
    ): Prisma__UserxAppClient<UserxAppGetPayload<T>>

    /**
     * Find the first UserxApp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserxAppFindFirstArgs} args - Arguments to find a UserxApp
     * @example
     * // Get one UserxApp
     * const userxApp = await prisma.userxApp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserxAppFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserxAppFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserxApp'> extends True ? Prisma__UserxAppClient<UserxAppGetPayload<T>> : Prisma__UserxAppClient<UserxAppGetPayload<T> | null, null>

    /**
     * Find the first UserxApp that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserxAppFindFirstOrThrowArgs} args - Arguments to find a UserxApp
     * @example
     * // Get one UserxApp
     * const userxApp = await prisma.userxApp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserxAppFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserxAppFindFirstOrThrowArgs>
    ): Prisma__UserxAppClient<UserxAppGetPayload<T>>

    /**
     * Find zero or more UserxApps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserxAppFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserxApps
     * const userxApps = await prisma.userxApp.findMany()
     * 
     * // Get first 10 UserxApps
     * const userxApps = await prisma.userxApp.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userxAppWithUserIdOnly = await prisma.userxApp.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends UserxAppFindManyArgs>(
      args?: SelectSubset<T, UserxAppFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserxAppGetPayload<T>>>

    /**
     * Create a UserxApp.
     * @param {UserxAppCreateArgs} args - Arguments to create a UserxApp.
     * @example
     * // Create one UserxApp
     * const UserxApp = await prisma.userxApp.create({
     *   data: {
     *     // ... data to create a UserxApp
     *   }
     * })
     * 
    **/
    create<T extends UserxAppCreateArgs>(
      args: SelectSubset<T, UserxAppCreateArgs>
    ): Prisma__UserxAppClient<UserxAppGetPayload<T>>

    /**
     * Create many UserxApps.
     *     @param {UserxAppCreateManyArgs} args - Arguments to create many UserxApps.
     *     @example
     *     // Create many UserxApps
     *     const userxApp = await prisma.userxApp.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserxAppCreateManyArgs>(
      args?: SelectSubset<T, UserxAppCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserxApp.
     * @param {UserxAppDeleteArgs} args - Arguments to delete one UserxApp.
     * @example
     * // Delete one UserxApp
     * const UserxApp = await prisma.userxApp.delete({
     *   where: {
     *     // ... filter to delete one UserxApp
     *   }
     * })
     * 
    **/
    delete<T extends UserxAppDeleteArgs>(
      args: SelectSubset<T, UserxAppDeleteArgs>
    ): Prisma__UserxAppClient<UserxAppGetPayload<T>>

    /**
     * Update one UserxApp.
     * @param {UserxAppUpdateArgs} args - Arguments to update one UserxApp.
     * @example
     * // Update one UserxApp
     * const userxApp = await prisma.userxApp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserxAppUpdateArgs>(
      args: SelectSubset<T, UserxAppUpdateArgs>
    ): Prisma__UserxAppClient<UserxAppGetPayload<T>>

    /**
     * Delete zero or more UserxApps.
     * @param {UserxAppDeleteManyArgs} args - Arguments to filter UserxApps to delete.
     * @example
     * // Delete a few UserxApps
     * const { count } = await prisma.userxApp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserxAppDeleteManyArgs>(
      args?: SelectSubset<T, UserxAppDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserxApps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserxAppUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserxApps
     * const userxApp = await prisma.userxApp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserxAppUpdateManyArgs>(
      args: SelectSubset<T, UserxAppUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserxApp.
     * @param {UserxAppUpsertArgs} args - Arguments to update or create a UserxApp.
     * @example
     * // Update or create a UserxApp
     * const userxApp = await prisma.userxApp.upsert({
     *   create: {
     *     // ... data to create a UserxApp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserxApp we want to update
     *   }
     * })
    **/
    upsert<T extends UserxAppUpsertArgs>(
      args: SelectSubset<T, UserxAppUpsertArgs>
    ): Prisma__UserxAppClient<UserxAppGetPayload<T>>

    /**
     * Count the number of UserxApps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserxAppCountArgs} args - Arguments to filter UserxApps to count.
     * @example
     * // Count the number of UserxApps
     * const count = await prisma.userxApp.count({
     *   where: {
     *     // ... the filter for the UserxApps we want to count
     *   }
     * })
    **/
    count<T extends UserxAppCountArgs>(
      args?: Subset<T, UserxAppCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserxAppCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserxApp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserxAppAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserxAppAggregateArgs>(args: Subset<T, UserxAppAggregateArgs>): Prisma.PrismaPromise<GetUserxAppAggregateType<T>>

    /**
     * Group by UserxApp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserxAppGroupByArgs} args - Group by arguments.
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
      T extends UserxAppGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserxAppGroupByArgs['orderBy'] }
        : { orderBy?: UserxAppGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserxAppGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserxAppGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for UserxApp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserxAppClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    app<T extends AppArgs= {}>(args?: Subset<T, AppArgs>): Prisma__AppClient<AppGetPayload<T> | Null>;

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
   * UserxApp base type for findUnique actions
   */
  export type UserxAppFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserxApp
     */
    select?: UserxAppSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserxAppInclude | null
    /**
     * Filter, which UserxApp to fetch.
     */
    where: UserxAppWhereUniqueInput
  }

  /**
   * UserxApp findUnique
   */
  export interface UserxAppFindUniqueArgs extends UserxAppFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserxApp findUniqueOrThrow
   */
  export type UserxAppFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserxApp
     */
    select?: UserxAppSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserxAppInclude | null
    /**
     * Filter, which UserxApp to fetch.
     */
    where: UserxAppWhereUniqueInput
  }


  /**
   * UserxApp base type for findFirst actions
   */
  export type UserxAppFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserxApp
     */
    select?: UserxAppSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserxAppInclude | null
    /**
     * Filter, which UserxApp to fetch.
     */
    where?: UserxAppWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserxApps to fetch.
     */
    orderBy?: Enumerable<UserxAppOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserxApps.
     */
    cursor?: UserxAppWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserxApps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserxApps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserxApps.
     */
    distinct?: Enumerable<UserxAppScalarFieldEnum>
  }

  /**
   * UserxApp findFirst
   */
  export interface UserxAppFindFirstArgs extends UserxAppFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserxApp findFirstOrThrow
   */
  export type UserxAppFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserxApp
     */
    select?: UserxAppSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserxAppInclude | null
    /**
     * Filter, which UserxApp to fetch.
     */
    where?: UserxAppWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserxApps to fetch.
     */
    orderBy?: Enumerable<UserxAppOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserxApps.
     */
    cursor?: UserxAppWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserxApps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserxApps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserxApps.
     */
    distinct?: Enumerable<UserxAppScalarFieldEnum>
  }


  /**
   * UserxApp findMany
   */
  export type UserxAppFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserxApp
     */
    select?: UserxAppSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserxAppInclude | null
    /**
     * Filter, which UserxApps to fetch.
     */
    where?: UserxAppWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserxApps to fetch.
     */
    orderBy?: Enumerable<UserxAppOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserxApps.
     */
    cursor?: UserxAppWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserxApps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserxApps.
     */
    skip?: number
    distinct?: Enumerable<UserxAppScalarFieldEnum>
  }


  /**
   * UserxApp create
   */
  export type UserxAppCreateArgs = {
    /**
     * Select specific fields to fetch from the UserxApp
     */
    select?: UserxAppSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserxAppInclude | null
    /**
     * The data needed to create a UserxApp.
     */
    data: XOR<UserxAppCreateInput, UserxAppUncheckedCreateInput>
  }


  /**
   * UserxApp createMany
   */
  export type UserxAppCreateManyArgs = {
    /**
     * The data used to create many UserxApps.
     */
    data: Enumerable<UserxAppCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserxApp update
   */
  export type UserxAppUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserxApp
     */
    select?: UserxAppSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserxAppInclude | null
    /**
     * The data needed to update a UserxApp.
     */
    data: XOR<UserxAppUpdateInput, UserxAppUncheckedUpdateInput>
    /**
     * Choose, which UserxApp to update.
     */
    where: UserxAppWhereUniqueInput
  }


  /**
   * UserxApp updateMany
   */
  export type UserxAppUpdateManyArgs = {
    /**
     * The data used to update UserxApps.
     */
    data: XOR<UserxAppUpdateManyMutationInput, UserxAppUncheckedUpdateManyInput>
    /**
     * Filter which UserxApps to update
     */
    where?: UserxAppWhereInput
  }


  /**
   * UserxApp upsert
   */
  export type UserxAppUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserxApp
     */
    select?: UserxAppSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserxAppInclude | null
    /**
     * The filter to search for the UserxApp to update in case it exists.
     */
    where: UserxAppWhereUniqueInput
    /**
     * In case the UserxApp found by the `where` argument doesn't exist, create a new UserxApp with this data.
     */
    create: XOR<UserxAppCreateInput, UserxAppUncheckedCreateInput>
    /**
     * In case the UserxApp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserxAppUpdateInput, UserxAppUncheckedUpdateInput>
  }


  /**
   * UserxApp delete
   */
  export type UserxAppDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserxApp
     */
    select?: UserxAppSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserxAppInclude | null
    /**
     * Filter which UserxApp to delete.
     */
    where: UserxAppWhereUniqueInput
  }


  /**
   * UserxApp deleteMany
   */
  export type UserxAppDeleteManyArgs = {
    /**
     * Filter which UserxApps to delete
     */
    where?: UserxAppWhereInput
  }


  /**
   * UserxApp without action
   */
  export type UserxAppArgs = {
    /**
     * Select specific fields to fetch from the UserxApp
     */
    select?: UserxAppSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserxAppInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AppScalarFieldEnum: {
    id: 'id',
    descripcion: 'descripcion'
  };

  export type AppScalarFieldEnum = (typeof AppScalarFieldEnum)[keyof typeof AppScalarFieldEnum]


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
    email: 'email',
    password: 'password',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserxAppScalarFieldEnum: {
    userId: 'userId',
    appId: 'appId',
    role: 'role',
    estado: 'estado'
  };

  export type UserxAppScalarFieldEnum = (typeof UserxAppScalarFieldEnum)[keyof typeof UserxAppScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    password?: StringFilter | string
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    apps?: UserxAppListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    apps?: UserxAppOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
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
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type AppWhereInput = {
    AND?: Enumerable<AppWhereInput>
    OR?: Enumerable<AppWhereInput>
    NOT?: Enumerable<AppWhereInput>
    id?: IntFilter | number
    descripcion?: StringFilter | string
    users?: UserxAppListRelationFilter
  }

  export type AppOrderByWithRelationInput = {
    id?: SortOrder
    descripcion?: SortOrder
    users?: UserxAppOrderByRelationAggregateInput
  }

  export type AppWhereUniqueInput = {
    id?: number
    descripcion?: string
  }

  export type AppOrderByWithAggregationInput = {
    id?: SortOrder
    descripcion?: SortOrder
    _count?: AppCountOrderByAggregateInput
    _avg?: AppAvgOrderByAggregateInput
    _max?: AppMaxOrderByAggregateInput
    _min?: AppMinOrderByAggregateInput
    _sum?: AppSumOrderByAggregateInput
  }

  export type AppScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AppScalarWhereWithAggregatesInput>
    OR?: Enumerable<AppScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AppScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    descripcion?: StringWithAggregatesFilter | string
  }

  export type UserxAppWhereInput = {
    AND?: Enumerable<UserxAppWhereInput>
    OR?: Enumerable<UserxAppWhereInput>
    NOT?: Enumerable<UserxAppWhereInput>
    userId?: IntFilter | number
    appId?: IntFilter | number
    role?: EnumRoleFilter | Role
    estado?: EnumEstadoFilter | Estado
    user?: XOR<UserRelationFilter, UserWhereInput>
    app?: XOR<AppRelationFilter, AppWhereInput>
  }

  export type UserxAppOrderByWithRelationInput = {
    userId?: SortOrder
    appId?: SortOrder
    role?: SortOrder
    estado?: SortOrder
    user?: UserOrderByWithRelationInput
    app?: AppOrderByWithRelationInput
  }

  export type UserxAppWhereUniqueInput = {
    userId_appId?: UserxAppUserIdAppIdCompoundUniqueInput
  }

  export type UserxAppOrderByWithAggregationInput = {
    userId?: SortOrder
    appId?: SortOrder
    role?: SortOrder
    estado?: SortOrder
    _count?: UserxAppCountOrderByAggregateInput
    _avg?: UserxAppAvgOrderByAggregateInput
    _max?: UserxAppMaxOrderByAggregateInput
    _min?: UserxAppMinOrderByAggregateInput
    _sum?: UserxAppSumOrderByAggregateInput
  }

  export type UserxAppScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserxAppScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserxAppScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserxAppScalarWhereWithAggregatesInput>
    userId?: IntWithAggregatesFilter | number
    appId?: IntWithAggregatesFilter | number
    role?: EnumRoleWithAggregatesFilter | Role
    estado?: EnumEstadoWithAggregatesFilter | Estado
  }

  export type UserCreateInput = {
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    apps?: UserxAppCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    apps?: UserxAppUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apps?: UserxAppUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apps?: UserxAppUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppCreateInput = {
    id: number
    descripcion: string
    users?: UserxAppCreateNestedManyWithoutAppInput
  }

  export type AppUncheckedCreateInput = {
    id: number
    descripcion: string
    users?: UserxAppUncheckedCreateNestedManyWithoutAppInput
  }

  export type AppUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    users?: UserxAppUpdateManyWithoutAppNestedInput
  }

  export type AppUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    users?: UserxAppUncheckedUpdateManyWithoutAppNestedInput
  }

  export type AppCreateManyInput = {
    id: number
    descripcion: string
  }

  export type AppUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type AppUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type UserxAppCreateInput = {
    role?: Role
    estado?: Estado
    user: UserCreateNestedOneWithoutAppsInput
    app: AppCreateNestedOneWithoutUsersInput
  }

  export type UserxAppUncheckedCreateInput = {
    userId: number
    appId: number
    role?: Role
    estado?: Estado
  }

  export type UserxAppUpdateInput = {
    role?: EnumRoleFieldUpdateOperationsInput | Role
    estado?: EnumEstadoFieldUpdateOperationsInput | Estado
    user?: UserUpdateOneRequiredWithoutAppsNestedInput
    app?: AppUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserxAppUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    appId?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | Role
    estado?: EnumEstadoFieldUpdateOperationsInput | Estado
  }

  export type UserxAppCreateManyInput = {
    userId: number
    appId: number
    role?: Role
    estado?: Estado
  }

  export type UserxAppUpdateManyMutationInput = {
    role?: EnumRoleFieldUpdateOperationsInput | Role
    estado?: EnumEstadoFieldUpdateOperationsInput | Estado
  }

  export type UserxAppUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    appId?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | Role
    estado?: EnumEstadoFieldUpdateOperationsInput | Estado
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

  export type UserxAppListRelationFilter = {
    every?: UserxAppWhereInput
    some?: UserxAppWhereInput
    none?: UserxAppWhereInput
  }

  export type UserxAppOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
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

  export type AppCountOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
  }

  export type AppAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AppMaxOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
  }

  export type AppMinOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
  }

  export type AppSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type EnumEstadoFilter = {
    equals?: Estado
    in?: Enumerable<Estado>
    notIn?: Enumerable<Estado>
    not?: NestedEnumEstadoFilter | Estado
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AppRelationFilter = {
    is?: AppWhereInput
    isNot?: AppWhereInput
  }

  export type UserxAppUserIdAppIdCompoundUniqueInput = {
    userId: number
    appId: number
  }

  export type UserxAppCountOrderByAggregateInput = {
    userId?: SortOrder
    appId?: SortOrder
    role?: SortOrder
    estado?: SortOrder
  }

  export type UserxAppAvgOrderByAggregateInput = {
    userId?: SortOrder
    appId?: SortOrder
  }

  export type UserxAppMaxOrderByAggregateInput = {
    userId?: SortOrder
    appId?: SortOrder
    role?: SortOrder
    estado?: SortOrder
  }

  export type UserxAppMinOrderByAggregateInput = {
    userId?: SortOrder
    appId?: SortOrder
    role?: SortOrder
    estado?: SortOrder
  }

  export type UserxAppSumOrderByAggregateInput = {
    userId?: SortOrder
    appId?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type EnumEstadoWithAggregatesFilter = {
    equals?: Estado
    in?: Enumerable<Estado>
    notIn?: Enumerable<Estado>
    not?: NestedEnumEstadoWithAggregatesFilter | Estado
    _count?: NestedIntFilter
    _min?: NestedEnumEstadoFilter
    _max?: NestedEnumEstadoFilter
  }

  export type UserxAppCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserxAppCreateWithoutUserInput>, Enumerable<UserxAppUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserxAppCreateOrConnectWithoutUserInput>
    createMany?: UserxAppCreateManyUserInputEnvelope
    connect?: Enumerable<UserxAppWhereUniqueInput>
  }

  export type UserxAppUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserxAppCreateWithoutUserInput>, Enumerable<UserxAppUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserxAppCreateOrConnectWithoutUserInput>
    createMany?: UserxAppCreateManyUserInputEnvelope
    connect?: Enumerable<UserxAppWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserxAppUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<UserxAppCreateWithoutUserInput>, Enumerable<UserxAppUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserxAppCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserxAppUpsertWithWhereUniqueWithoutUserInput>
    createMany?: UserxAppCreateManyUserInputEnvelope
    set?: Enumerable<UserxAppWhereUniqueInput>
    disconnect?: Enumerable<UserxAppWhereUniqueInput>
    delete?: Enumerable<UserxAppWhereUniqueInput>
    connect?: Enumerable<UserxAppWhereUniqueInput>
    update?: Enumerable<UserxAppUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserxAppUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserxAppScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserxAppUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<UserxAppCreateWithoutUserInput>, Enumerable<UserxAppUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserxAppCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserxAppUpsertWithWhereUniqueWithoutUserInput>
    createMany?: UserxAppCreateManyUserInputEnvelope
    set?: Enumerable<UserxAppWhereUniqueInput>
    disconnect?: Enumerable<UserxAppWhereUniqueInput>
    delete?: Enumerable<UserxAppWhereUniqueInput>
    connect?: Enumerable<UserxAppWhereUniqueInput>
    update?: Enumerable<UserxAppUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserxAppUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserxAppScalarWhereInput>
  }

  export type UserxAppCreateNestedManyWithoutAppInput = {
    create?: XOR<Enumerable<UserxAppCreateWithoutAppInput>, Enumerable<UserxAppUncheckedCreateWithoutAppInput>>
    connectOrCreate?: Enumerable<UserxAppCreateOrConnectWithoutAppInput>
    createMany?: UserxAppCreateManyAppInputEnvelope
    connect?: Enumerable<UserxAppWhereUniqueInput>
  }

  export type UserxAppUncheckedCreateNestedManyWithoutAppInput = {
    create?: XOR<Enumerable<UserxAppCreateWithoutAppInput>, Enumerable<UserxAppUncheckedCreateWithoutAppInput>>
    connectOrCreate?: Enumerable<UserxAppCreateOrConnectWithoutAppInput>
    createMany?: UserxAppCreateManyAppInputEnvelope
    connect?: Enumerable<UserxAppWhereUniqueInput>
  }

  export type UserxAppUpdateManyWithoutAppNestedInput = {
    create?: XOR<Enumerable<UserxAppCreateWithoutAppInput>, Enumerable<UserxAppUncheckedCreateWithoutAppInput>>
    connectOrCreate?: Enumerable<UserxAppCreateOrConnectWithoutAppInput>
    upsert?: Enumerable<UserxAppUpsertWithWhereUniqueWithoutAppInput>
    createMany?: UserxAppCreateManyAppInputEnvelope
    set?: Enumerable<UserxAppWhereUniqueInput>
    disconnect?: Enumerable<UserxAppWhereUniqueInput>
    delete?: Enumerable<UserxAppWhereUniqueInput>
    connect?: Enumerable<UserxAppWhereUniqueInput>
    update?: Enumerable<UserxAppUpdateWithWhereUniqueWithoutAppInput>
    updateMany?: Enumerable<UserxAppUpdateManyWithWhereWithoutAppInput>
    deleteMany?: Enumerable<UserxAppScalarWhereInput>
  }

  export type UserxAppUncheckedUpdateManyWithoutAppNestedInput = {
    create?: XOR<Enumerable<UserxAppCreateWithoutAppInput>, Enumerable<UserxAppUncheckedCreateWithoutAppInput>>
    connectOrCreate?: Enumerable<UserxAppCreateOrConnectWithoutAppInput>
    upsert?: Enumerable<UserxAppUpsertWithWhereUniqueWithoutAppInput>
    createMany?: UserxAppCreateManyAppInputEnvelope
    set?: Enumerable<UserxAppWhereUniqueInput>
    disconnect?: Enumerable<UserxAppWhereUniqueInput>
    delete?: Enumerable<UserxAppWhereUniqueInput>
    connect?: Enumerable<UserxAppWhereUniqueInput>
    update?: Enumerable<UserxAppUpdateWithWhereUniqueWithoutAppInput>
    updateMany?: Enumerable<UserxAppUpdateManyWithWhereWithoutAppInput>
    deleteMany?: Enumerable<UserxAppScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutAppsInput = {
    create?: XOR<UserCreateWithoutAppsInput, UserUncheckedCreateWithoutAppsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppsInput
    connect?: UserWhereUniqueInput
  }

  export type AppCreateNestedOneWithoutUsersInput = {
    create?: XOR<AppCreateWithoutUsersInput, AppUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AppCreateOrConnectWithoutUsersInput
    connect?: AppWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: Role
  }

  export type EnumEstadoFieldUpdateOperationsInput = {
    set?: Estado
  }

  export type UserUpdateOneRequiredWithoutAppsNestedInput = {
    create?: XOR<UserCreateWithoutAppsInput, UserUncheckedCreateWithoutAppsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppsInput
    upsert?: UserUpsertWithoutAppsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutAppsInput, UserUncheckedUpdateWithoutAppsInput>
  }

  export type AppUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<AppCreateWithoutUsersInput, AppUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AppCreateOrConnectWithoutUsersInput
    upsert?: AppUpsertWithoutUsersInput
    connect?: AppWhereUniqueInput
    update?: XOR<AppUpdateWithoutUsersInput, AppUncheckedUpdateWithoutUsersInput>
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

  export type NestedEnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type NestedEnumEstadoFilter = {
    equals?: Estado
    in?: Enumerable<Estado>
    notIn?: Enumerable<Estado>
    not?: NestedEnumEstadoFilter | Estado
  }

  export type NestedEnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type NestedEnumEstadoWithAggregatesFilter = {
    equals?: Estado
    in?: Enumerable<Estado>
    notIn?: Enumerable<Estado>
    not?: NestedEnumEstadoWithAggregatesFilter | Estado
    _count?: NestedIntFilter
    _min?: NestedEnumEstadoFilter
    _max?: NestedEnumEstadoFilter
  }

  export type UserxAppCreateWithoutUserInput = {
    role?: Role
    estado?: Estado
    app: AppCreateNestedOneWithoutUsersInput
  }

  export type UserxAppUncheckedCreateWithoutUserInput = {
    appId: number
    role?: Role
    estado?: Estado
  }

  export type UserxAppCreateOrConnectWithoutUserInput = {
    where: UserxAppWhereUniqueInput
    create: XOR<UserxAppCreateWithoutUserInput, UserxAppUncheckedCreateWithoutUserInput>
  }

  export type UserxAppCreateManyUserInputEnvelope = {
    data: Enumerable<UserxAppCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type UserxAppUpsertWithWhereUniqueWithoutUserInput = {
    where: UserxAppWhereUniqueInput
    update: XOR<UserxAppUpdateWithoutUserInput, UserxAppUncheckedUpdateWithoutUserInput>
    create: XOR<UserxAppCreateWithoutUserInput, UserxAppUncheckedCreateWithoutUserInput>
  }

  export type UserxAppUpdateWithWhereUniqueWithoutUserInput = {
    where: UserxAppWhereUniqueInput
    data: XOR<UserxAppUpdateWithoutUserInput, UserxAppUncheckedUpdateWithoutUserInput>
  }

  export type UserxAppUpdateManyWithWhereWithoutUserInput = {
    where: UserxAppScalarWhereInput
    data: XOR<UserxAppUpdateManyMutationInput, UserxAppUncheckedUpdateManyWithoutAppsInput>
  }

  export type UserxAppScalarWhereInput = {
    AND?: Enumerable<UserxAppScalarWhereInput>
    OR?: Enumerable<UserxAppScalarWhereInput>
    NOT?: Enumerable<UserxAppScalarWhereInput>
    userId?: IntFilter | number
    appId?: IntFilter | number
    role?: EnumRoleFilter | Role
    estado?: EnumEstadoFilter | Estado
  }

  export type UserxAppCreateWithoutAppInput = {
    role?: Role
    estado?: Estado
    user: UserCreateNestedOneWithoutAppsInput
  }

  export type UserxAppUncheckedCreateWithoutAppInput = {
    userId: number
    role?: Role
    estado?: Estado
  }

  export type UserxAppCreateOrConnectWithoutAppInput = {
    where: UserxAppWhereUniqueInput
    create: XOR<UserxAppCreateWithoutAppInput, UserxAppUncheckedCreateWithoutAppInput>
  }

  export type UserxAppCreateManyAppInputEnvelope = {
    data: Enumerable<UserxAppCreateManyAppInput>
    skipDuplicates?: boolean
  }

  export type UserxAppUpsertWithWhereUniqueWithoutAppInput = {
    where: UserxAppWhereUniqueInput
    update: XOR<UserxAppUpdateWithoutAppInput, UserxAppUncheckedUpdateWithoutAppInput>
    create: XOR<UserxAppCreateWithoutAppInput, UserxAppUncheckedCreateWithoutAppInput>
  }

  export type UserxAppUpdateWithWhereUniqueWithoutAppInput = {
    where: UserxAppWhereUniqueInput
    data: XOR<UserxAppUpdateWithoutAppInput, UserxAppUncheckedUpdateWithoutAppInput>
  }

  export type UserxAppUpdateManyWithWhereWithoutAppInput = {
    where: UserxAppScalarWhereInput
    data: XOR<UserxAppUpdateManyMutationInput, UserxAppUncheckedUpdateManyWithoutUsersInput>
  }

  export type UserCreateWithoutAppsInput = {
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutAppsInput = {
    id?: number
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutAppsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAppsInput, UserUncheckedCreateWithoutAppsInput>
  }

  export type AppCreateWithoutUsersInput = {
    id: number
    descripcion: string
  }

  export type AppUncheckedCreateWithoutUsersInput = {
    id: number
    descripcion: string
  }

  export type AppCreateOrConnectWithoutUsersInput = {
    where: AppWhereUniqueInput
    create: XOR<AppCreateWithoutUsersInput, AppUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutAppsInput = {
    update: XOR<UserUpdateWithoutAppsInput, UserUncheckedUpdateWithoutAppsInput>
    create: XOR<UserCreateWithoutAppsInput, UserUncheckedCreateWithoutAppsInput>
  }

  export type UserUpdateWithoutAppsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutAppsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppUpsertWithoutUsersInput = {
    update: XOR<AppUpdateWithoutUsersInput, AppUncheckedUpdateWithoutUsersInput>
    create: XOR<AppCreateWithoutUsersInput, AppUncheckedCreateWithoutUsersInput>
  }

  export type AppUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type AppUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type UserxAppCreateManyUserInput = {
    appId: number
    role?: Role
    estado?: Estado
  }

  export type UserxAppUpdateWithoutUserInput = {
    role?: EnumRoleFieldUpdateOperationsInput | Role
    estado?: EnumEstadoFieldUpdateOperationsInput | Estado
    app?: AppUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserxAppUncheckedUpdateWithoutUserInput = {
    appId?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | Role
    estado?: EnumEstadoFieldUpdateOperationsInput | Estado
  }

  export type UserxAppUncheckedUpdateManyWithoutAppsInput = {
    appId?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | Role
    estado?: EnumEstadoFieldUpdateOperationsInput | Estado
  }

  export type UserxAppCreateManyAppInput = {
    userId: number
    role?: Role
    estado?: Estado
  }

  export type UserxAppUpdateWithoutAppInput = {
    role?: EnumRoleFieldUpdateOperationsInput | Role
    estado?: EnumEstadoFieldUpdateOperationsInput | Estado
    user?: UserUpdateOneRequiredWithoutAppsNestedInput
  }

  export type UserxAppUncheckedUpdateWithoutAppInput = {
    userId?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | Role
    estado?: EnumEstadoFieldUpdateOperationsInput | Estado
  }

  export type UserxAppUncheckedUpdateManyWithoutUsersInput = {
    userId?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | Role
    estado?: EnumEstadoFieldUpdateOperationsInput | Estado
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