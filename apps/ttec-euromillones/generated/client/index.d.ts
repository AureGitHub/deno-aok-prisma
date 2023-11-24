
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
 * Model UserXBizum
 * 
 */
export type UserXBizum = {
  id: number
  importe: Prisma.Decimal
  userId: number
  movimientoId: number
  pendiente: boolean
  createdAt: Date
}

/**
 * Model UserXMovimiento
 * 
 */
export type UserXMovimiento = {
  id: number
  importe: Prisma.Decimal
  userId: number
  tipoId: number
  createdAt: Date
}

/**
 * Model UserXMovimientoXTipo
 * 
 */
export type UserXMovimientoXTipo = {
  id: number
  descripcion: string
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
 * Model CodeSecure
 * 
 */
export type CodeSecure = {
  code: string
  type: number
  userId: number
  createdAt: Date
}

/**
 * Model Apuesta
 * 
 */
export type Apuesta = {
  id: number
  fecha: Date
  apostado: Prisma.Decimal
  ganado: Prisma.Decimal
  estadoId: number
  createdAt: Date
}

/**
 * Model ApuestaXEstado
 * 
 */
export type ApuestaXEstado = {
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
   * `prisma.userXBizum`: Exposes CRUD operations for the **UserXBizum** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserXBizums
    * const userXBizums = await prisma.userXBizum.findMany()
    * ```
    */
  get userXBizum(): Prisma.UserXBizumDelegate<GlobalReject>;

  /**
   * `prisma.userXMovimiento`: Exposes CRUD operations for the **UserXMovimiento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserXMovimientos
    * const userXMovimientos = await prisma.userXMovimiento.findMany()
    * ```
    */
  get userXMovimiento(): Prisma.UserXMovimientoDelegate<GlobalReject>;

  /**
   * `prisma.userXMovimientoXTipo`: Exposes CRUD operations for the **UserXMovimientoXTipo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserXMovimientoXTipos
    * const userXMovimientoXTipos = await prisma.userXMovimientoXTipo.findMany()
    * ```
    */
  get userXMovimientoXTipo(): Prisma.UserXMovimientoXTipoDelegate<GlobalReject>;

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

  /**
   * `prisma.codeSecure`: Exposes CRUD operations for the **CodeSecure** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CodeSecures
    * const codeSecures = await prisma.codeSecure.findMany()
    * ```
    */
  get codeSecure(): Prisma.CodeSecureDelegate<GlobalReject>;

  /**
   * `prisma.apuesta`: Exposes CRUD operations for the **Apuesta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Apuestas
    * const apuestas = await prisma.apuesta.findMany()
    * ```
    */
  get apuesta(): Prisma.ApuestaDelegate<GlobalReject>;

  /**
   * `prisma.apuestaXEstado`: Exposes CRUD operations for the **ApuestaXEstado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApuestaXEstados
    * const apuestaXEstados = await prisma.apuestaXEstado.findMany()
    * ```
    */
  get apuestaXEstado(): Prisma.ApuestaXEstadoDelegate<GlobalReject>;
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
    UserXBizum: 'UserXBizum',
    UserXMovimiento: 'UserXMovimiento',
    UserXMovimientoXTipo: 'UserXMovimientoXTipo',
    UserXRole: 'UserXRole',
    UserXEstado: 'UserXEstado',
    CodeSecure: 'CodeSecure',
    Apuesta: 'Apuesta',
    ApuestaXEstado: 'ApuestaXEstado'
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
    CodeSecure: number
    UserXBizum: number
    UserXMovimiento: number
  }

  export type UserCountOutputTypeSelect = {
    CodeSecure?: boolean
    UserXBizum?: boolean
    UserXMovimiento?: boolean
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
   * Count Type UserXMovimientoCountOutputType
   */


  export type UserXMovimientoCountOutputType = {
    UserXBizum: number
  }

  export type UserXMovimientoCountOutputTypeSelect = {
    UserXBizum?: boolean
  }

  export type UserXMovimientoCountOutputTypeGetPayload<S extends boolean | null | undefined | UserXMovimientoCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserXMovimientoCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserXMovimientoCountOutputTypeArgs)
    ? UserXMovimientoCountOutputType 
    : S extends { select: any } & (UserXMovimientoCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserXMovimientoCountOutputType ? UserXMovimientoCountOutputType[P] : never
  } 
      : UserXMovimientoCountOutputType




  // Custom InputTypes

  /**
   * UserXMovimientoCountOutputType without action
   */
  export type UserXMovimientoCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserXMovimientoCountOutputType
     */
    select?: UserXMovimientoCountOutputTypeSelect | null
  }



  /**
   * Count Type UserXMovimientoXTipoCountOutputType
   */


  export type UserXMovimientoXTipoCountOutputType = {
    UserXMovimiento: number
  }

  export type UserXMovimientoXTipoCountOutputTypeSelect = {
    UserXMovimiento?: boolean
  }

  export type UserXMovimientoXTipoCountOutputTypeGetPayload<S extends boolean | null | undefined | UserXMovimientoXTipoCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserXMovimientoXTipoCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserXMovimientoXTipoCountOutputTypeArgs)
    ? UserXMovimientoXTipoCountOutputType 
    : S extends { select: any } & (UserXMovimientoXTipoCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserXMovimientoXTipoCountOutputType ? UserXMovimientoXTipoCountOutputType[P] : never
  } 
      : UserXMovimientoXTipoCountOutputType




  // Custom InputTypes

  /**
   * UserXMovimientoXTipoCountOutputType without action
   */
  export type UserXMovimientoXTipoCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserXMovimientoXTipoCountOutputType
     */
    select?: UserXMovimientoXTipoCountOutputTypeSelect | null
  }



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
   * Count Type ApuestaXEstadoCountOutputType
   */


  export type ApuestaXEstadoCountOutputType = {
    Apuesta: number
  }

  export type ApuestaXEstadoCountOutputTypeSelect = {
    Apuesta?: boolean
  }

  export type ApuestaXEstadoCountOutputTypeGetPayload<S extends boolean | null | undefined | ApuestaXEstadoCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ApuestaXEstadoCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ApuestaXEstadoCountOutputTypeArgs)
    ? ApuestaXEstadoCountOutputType 
    : S extends { select: any } & (ApuestaXEstadoCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ApuestaXEstadoCountOutputType ? ApuestaXEstadoCountOutputType[P] : never
  } 
      : ApuestaXEstadoCountOutputType




  // Custom InputTypes

  /**
   * ApuestaXEstadoCountOutputType without action
   */
  export type ApuestaXEstadoCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ApuestaXEstadoCountOutputType
     */
    select?: ApuestaXEstadoCountOutputTypeSelect | null
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
    CodeSecure?: boolean | User$CodeSecureArgs
    UserXBizum?: boolean | User$UserXBizumArgs
    UserXMovimiento?: boolean | User$UserXMovimientoArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    UserXRole?: boolean | UserXRoleArgs
    UserXEstado?: boolean | UserXEstadoArgs
    CodeSecure?: boolean | User$CodeSecureArgs
    UserXBizum?: boolean | User$UserXBizumArgs
    UserXMovimiento?: boolean | User$UserXMovimientoArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'UserXRole' ? UserXRoleGetPayload<S['include'][P]> :
        P extends 'UserXEstado' ? UserXEstadoGetPayload<S['include'][P]> :
        P extends 'CodeSecure' ? Array < CodeSecureGetPayload<S['include'][P]>>  :
        P extends 'UserXBizum' ? Array < UserXBizumGetPayload<S['include'][P]>>  :
        P extends 'UserXMovimiento' ? Array < UserXMovimientoGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'UserXRole' ? UserXRoleGetPayload<S['select'][P]> :
        P extends 'UserXEstado' ? UserXEstadoGetPayload<S['select'][P]> :
        P extends 'CodeSecure' ? Array < CodeSecureGetPayload<S['select'][P]>>  :
        P extends 'UserXBizum' ? Array < UserXBizumGetPayload<S['select'][P]>>  :
        P extends 'UserXMovimiento' ? Array < UserXMovimientoGetPayload<S['select'][P]>>  :
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

    UserXRole<T extends UserXRoleArgs= {}>(args?: Subset<T, UserXRoleArgs>): Prisma__UserXRoleClient<UserXRoleGetPayload<T> | Null>;

    UserXEstado<T extends UserXEstadoArgs= {}>(args?: Subset<T, UserXEstadoArgs>): Prisma__UserXEstadoClient<UserXEstadoGetPayload<T> | Null>;

    CodeSecure<T extends User$CodeSecureArgs= {}>(args?: Subset<T, User$CodeSecureArgs>): Prisma.PrismaPromise<Array<CodeSecureGetPayload<T>>| Null>;

    UserXBizum<T extends User$UserXBizumArgs= {}>(args?: Subset<T, User$UserXBizumArgs>): Prisma.PrismaPromise<Array<UserXBizumGetPayload<T>>| Null>;

    UserXMovimiento<T extends User$UserXMovimientoArgs= {}>(args?: Subset<T, User$UserXMovimientoArgs>): Prisma.PrismaPromise<Array<UserXMovimientoGetPayload<T>>| Null>;

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
   * User.CodeSecure
   */
  export type User$CodeSecureArgs = {
    /**
     * Select specific fields to fetch from the CodeSecure
     */
    select?: CodeSecureSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CodeSecureInclude | null
    where?: CodeSecureWhereInput
    orderBy?: Enumerable<CodeSecureOrderByWithRelationInput>
    cursor?: CodeSecureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CodeSecureScalarFieldEnum>
  }


  /**
   * User.UserXBizum
   */
  export type User$UserXBizumArgs = {
    /**
     * Select specific fields to fetch from the UserXBizum
     */
    select?: UserXBizumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXBizumInclude | null
    where?: UserXBizumWhereInput
    orderBy?: Enumerable<UserXBizumOrderByWithRelationInput>
    cursor?: UserXBizumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserXBizumScalarFieldEnum>
  }


  /**
   * User.UserXMovimiento
   */
  export type User$UserXMovimientoArgs = {
    /**
     * Select specific fields to fetch from the UserXMovimiento
     */
    select?: UserXMovimientoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXMovimientoInclude | null
    where?: UserXMovimientoWhereInput
    orderBy?: Enumerable<UserXMovimientoOrderByWithRelationInput>
    cursor?: UserXMovimientoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserXMovimientoScalarFieldEnum>
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
   * Model UserXBizum
   */


  export type AggregateUserXBizum = {
    _count: UserXBizumCountAggregateOutputType | null
    _avg: UserXBizumAvgAggregateOutputType | null
    _sum: UserXBizumSumAggregateOutputType | null
    _min: UserXBizumMinAggregateOutputType | null
    _max: UserXBizumMaxAggregateOutputType | null
  }

  export type UserXBizumAvgAggregateOutputType = {
    id: number | null
    importe: Decimal | null
    userId: number | null
    movimientoId: number | null
  }

  export type UserXBizumSumAggregateOutputType = {
    id: number | null
    importe: Decimal | null
    userId: number | null
    movimientoId: number | null
  }

  export type UserXBizumMinAggregateOutputType = {
    id: number | null
    importe: Decimal | null
    userId: number | null
    movimientoId: number | null
    pendiente: boolean | null
    createdAt: Date | null
  }

  export type UserXBizumMaxAggregateOutputType = {
    id: number | null
    importe: Decimal | null
    userId: number | null
    movimientoId: number | null
    pendiente: boolean | null
    createdAt: Date | null
  }

  export type UserXBizumCountAggregateOutputType = {
    id: number
    importe: number
    userId: number
    movimientoId: number
    pendiente: number
    createdAt: number
    _all: number
  }


  export type UserXBizumAvgAggregateInputType = {
    id?: true
    importe?: true
    userId?: true
    movimientoId?: true
  }

  export type UserXBizumSumAggregateInputType = {
    id?: true
    importe?: true
    userId?: true
    movimientoId?: true
  }

  export type UserXBizumMinAggregateInputType = {
    id?: true
    importe?: true
    userId?: true
    movimientoId?: true
    pendiente?: true
    createdAt?: true
  }

  export type UserXBizumMaxAggregateInputType = {
    id?: true
    importe?: true
    userId?: true
    movimientoId?: true
    pendiente?: true
    createdAt?: true
  }

  export type UserXBizumCountAggregateInputType = {
    id?: true
    importe?: true
    userId?: true
    movimientoId?: true
    pendiente?: true
    createdAt?: true
    _all?: true
  }

  export type UserXBizumAggregateArgs = {
    /**
     * Filter which UserXBizum to aggregate.
     */
    where?: UserXBizumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserXBizums to fetch.
     */
    orderBy?: Enumerable<UserXBizumOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserXBizumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserXBizums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserXBizums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserXBizums
    **/
    _count?: true | UserXBizumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserXBizumAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserXBizumSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserXBizumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserXBizumMaxAggregateInputType
  }

  export type GetUserXBizumAggregateType<T extends UserXBizumAggregateArgs> = {
        [P in keyof T & keyof AggregateUserXBizum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserXBizum[P]>
      : GetScalarType<T[P], AggregateUserXBizum[P]>
  }




  export type UserXBizumGroupByArgs = {
    where?: UserXBizumWhereInput
    orderBy?: Enumerable<UserXBizumOrderByWithAggregationInput>
    by: UserXBizumScalarFieldEnum[]
    having?: UserXBizumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserXBizumCountAggregateInputType | true
    _avg?: UserXBizumAvgAggregateInputType
    _sum?: UserXBizumSumAggregateInputType
    _min?: UserXBizumMinAggregateInputType
    _max?: UserXBizumMaxAggregateInputType
  }


  export type UserXBizumGroupByOutputType = {
    id: number
    importe: Decimal
    userId: number
    movimientoId: number
    pendiente: boolean
    createdAt: Date
    _count: UserXBizumCountAggregateOutputType | null
    _avg: UserXBizumAvgAggregateOutputType | null
    _sum: UserXBizumSumAggregateOutputType | null
    _min: UserXBizumMinAggregateOutputType | null
    _max: UserXBizumMaxAggregateOutputType | null
  }

  type GetUserXBizumGroupByPayload<T extends UserXBizumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserXBizumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserXBizumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserXBizumGroupByOutputType[P]>
            : GetScalarType<T[P], UserXBizumGroupByOutputType[P]>
        }
      >
    >


  export type UserXBizumSelect = {
    id?: boolean
    importe?: boolean
    userId?: boolean
    movimientoId?: boolean
    pendiente?: boolean
    createdAt?: boolean
    User?: boolean | UserArgs
    UserXMovimiento?: boolean | UserXMovimientoArgs
  }


  export type UserXBizumInclude = {
    User?: boolean | UserArgs
    UserXMovimiento?: boolean | UserXMovimientoArgs
  }

  export type UserXBizumGetPayload<S extends boolean | null | undefined | UserXBizumArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserXBizum :
    S extends undefined ? never :
    S extends { include: any } & (UserXBizumArgs | UserXBizumFindManyArgs)
    ? UserXBizum  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> :
        P extends 'UserXMovimiento' ? UserXMovimientoGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserXBizumArgs | UserXBizumFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> :
        P extends 'UserXMovimiento' ? UserXMovimientoGetPayload<S['select'][P]> :  P extends keyof UserXBizum ? UserXBizum[P] : never
  } 
      : UserXBizum


  type UserXBizumCountArgs = 
    Omit<UserXBizumFindManyArgs, 'select' | 'include'> & {
      select?: UserXBizumCountAggregateInputType | true
    }

  export interface UserXBizumDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one UserXBizum that matches the filter.
     * @param {UserXBizumFindUniqueArgs} args - Arguments to find a UserXBizum
     * @example
     * // Get one UserXBizum
     * const userXBizum = await prisma.userXBizum.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserXBizumFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserXBizumFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserXBizum'> extends True ? Prisma__UserXBizumClient<UserXBizumGetPayload<T>> : Prisma__UserXBizumClient<UserXBizumGetPayload<T> | null, null>

    /**
     * Find one UserXBizum that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserXBizumFindUniqueOrThrowArgs} args - Arguments to find a UserXBizum
     * @example
     * // Get one UserXBizum
     * const userXBizum = await prisma.userXBizum.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserXBizumFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserXBizumFindUniqueOrThrowArgs>
    ): Prisma__UserXBizumClient<UserXBizumGetPayload<T>>

    /**
     * Find the first UserXBizum that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXBizumFindFirstArgs} args - Arguments to find a UserXBizum
     * @example
     * // Get one UserXBizum
     * const userXBizum = await prisma.userXBizum.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserXBizumFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserXBizumFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserXBizum'> extends True ? Prisma__UserXBizumClient<UserXBizumGetPayload<T>> : Prisma__UserXBizumClient<UserXBizumGetPayload<T> | null, null>

    /**
     * Find the first UserXBizum that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXBizumFindFirstOrThrowArgs} args - Arguments to find a UserXBizum
     * @example
     * // Get one UserXBizum
     * const userXBizum = await prisma.userXBizum.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserXBizumFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserXBizumFindFirstOrThrowArgs>
    ): Prisma__UserXBizumClient<UserXBizumGetPayload<T>>

    /**
     * Find zero or more UserXBizums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXBizumFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserXBizums
     * const userXBizums = await prisma.userXBizum.findMany()
     * 
     * // Get first 10 UserXBizums
     * const userXBizums = await prisma.userXBizum.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userXBizumWithIdOnly = await prisma.userXBizum.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserXBizumFindManyArgs>(
      args?: SelectSubset<T, UserXBizumFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserXBizumGetPayload<T>>>

    /**
     * Create a UserXBizum.
     * @param {UserXBizumCreateArgs} args - Arguments to create a UserXBizum.
     * @example
     * // Create one UserXBizum
     * const UserXBizum = await prisma.userXBizum.create({
     *   data: {
     *     // ... data to create a UserXBizum
     *   }
     * })
     * 
    **/
    create<T extends UserXBizumCreateArgs>(
      args: SelectSubset<T, UserXBizumCreateArgs>
    ): Prisma__UserXBizumClient<UserXBizumGetPayload<T>>

    /**
     * Create many UserXBizums.
     *     @param {UserXBizumCreateManyArgs} args - Arguments to create many UserXBizums.
     *     @example
     *     // Create many UserXBizums
     *     const userXBizum = await prisma.userXBizum.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserXBizumCreateManyArgs>(
      args?: SelectSubset<T, UserXBizumCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserXBizum.
     * @param {UserXBizumDeleteArgs} args - Arguments to delete one UserXBizum.
     * @example
     * // Delete one UserXBizum
     * const UserXBizum = await prisma.userXBizum.delete({
     *   where: {
     *     // ... filter to delete one UserXBizum
     *   }
     * })
     * 
    **/
    delete<T extends UserXBizumDeleteArgs>(
      args: SelectSubset<T, UserXBizumDeleteArgs>
    ): Prisma__UserXBizumClient<UserXBizumGetPayload<T>>

    /**
     * Update one UserXBizum.
     * @param {UserXBizumUpdateArgs} args - Arguments to update one UserXBizum.
     * @example
     * // Update one UserXBizum
     * const userXBizum = await prisma.userXBizum.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserXBizumUpdateArgs>(
      args: SelectSubset<T, UserXBizumUpdateArgs>
    ): Prisma__UserXBizumClient<UserXBizumGetPayload<T>>

    /**
     * Delete zero or more UserXBizums.
     * @param {UserXBizumDeleteManyArgs} args - Arguments to filter UserXBizums to delete.
     * @example
     * // Delete a few UserXBizums
     * const { count } = await prisma.userXBizum.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserXBizumDeleteManyArgs>(
      args?: SelectSubset<T, UserXBizumDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserXBizums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXBizumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserXBizums
     * const userXBizum = await prisma.userXBizum.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserXBizumUpdateManyArgs>(
      args: SelectSubset<T, UserXBizumUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserXBizum.
     * @param {UserXBizumUpsertArgs} args - Arguments to update or create a UserXBizum.
     * @example
     * // Update or create a UserXBizum
     * const userXBizum = await prisma.userXBizum.upsert({
     *   create: {
     *     // ... data to create a UserXBizum
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserXBizum we want to update
     *   }
     * })
    **/
    upsert<T extends UserXBizumUpsertArgs>(
      args: SelectSubset<T, UserXBizumUpsertArgs>
    ): Prisma__UserXBizumClient<UserXBizumGetPayload<T>>

    /**
     * Count the number of UserXBizums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXBizumCountArgs} args - Arguments to filter UserXBizums to count.
     * @example
     * // Count the number of UserXBizums
     * const count = await prisma.userXBizum.count({
     *   where: {
     *     // ... the filter for the UserXBizums we want to count
     *   }
     * })
    **/
    count<T extends UserXBizumCountArgs>(
      args?: Subset<T, UserXBizumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserXBizumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserXBizum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXBizumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserXBizumAggregateArgs>(args: Subset<T, UserXBizumAggregateArgs>): Prisma.PrismaPromise<GetUserXBizumAggregateType<T>>

    /**
     * Group by UserXBizum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXBizumGroupByArgs} args - Group by arguments.
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
      T extends UserXBizumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserXBizumGroupByArgs['orderBy'] }
        : { orderBy?: UserXBizumGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserXBizumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserXBizumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for UserXBizum.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserXBizumClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    User<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    UserXMovimiento<T extends UserXMovimientoArgs= {}>(args?: Subset<T, UserXMovimientoArgs>): Prisma__UserXMovimientoClient<UserXMovimientoGetPayload<T> | Null>;

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
   * UserXBizum base type for findUnique actions
   */
  export type UserXBizumFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserXBizum
     */
    select?: UserXBizumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXBizumInclude | null
    /**
     * Filter, which UserXBizum to fetch.
     */
    where: UserXBizumWhereUniqueInput
  }

  /**
   * UserXBizum findUnique
   */
  export interface UserXBizumFindUniqueArgs extends UserXBizumFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserXBizum findUniqueOrThrow
   */
  export type UserXBizumFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserXBizum
     */
    select?: UserXBizumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXBizumInclude | null
    /**
     * Filter, which UserXBizum to fetch.
     */
    where: UserXBizumWhereUniqueInput
  }


  /**
   * UserXBizum base type for findFirst actions
   */
  export type UserXBizumFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserXBizum
     */
    select?: UserXBizumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXBizumInclude | null
    /**
     * Filter, which UserXBizum to fetch.
     */
    where?: UserXBizumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserXBizums to fetch.
     */
    orderBy?: Enumerable<UserXBizumOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserXBizums.
     */
    cursor?: UserXBizumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserXBizums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserXBizums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserXBizums.
     */
    distinct?: Enumerable<UserXBizumScalarFieldEnum>
  }

  /**
   * UserXBizum findFirst
   */
  export interface UserXBizumFindFirstArgs extends UserXBizumFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserXBizum findFirstOrThrow
   */
  export type UserXBizumFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserXBizum
     */
    select?: UserXBizumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXBizumInclude | null
    /**
     * Filter, which UserXBizum to fetch.
     */
    where?: UserXBizumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserXBizums to fetch.
     */
    orderBy?: Enumerable<UserXBizumOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserXBizums.
     */
    cursor?: UserXBizumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserXBizums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserXBizums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserXBizums.
     */
    distinct?: Enumerable<UserXBizumScalarFieldEnum>
  }


  /**
   * UserXBizum findMany
   */
  export type UserXBizumFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserXBizum
     */
    select?: UserXBizumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXBizumInclude | null
    /**
     * Filter, which UserXBizums to fetch.
     */
    where?: UserXBizumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserXBizums to fetch.
     */
    orderBy?: Enumerable<UserXBizumOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserXBizums.
     */
    cursor?: UserXBizumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserXBizums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserXBizums.
     */
    skip?: number
    distinct?: Enumerable<UserXBizumScalarFieldEnum>
  }


  /**
   * UserXBizum create
   */
  export type UserXBizumCreateArgs = {
    /**
     * Select specific fields to fetch from the UserXBizum
     */
    select?: UserXBizumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXBizumInclude | null
    /**
     * The data needed to create a UserXBizum.
     */
    data: XOR<UserXBizumCreateInput, UserXBizumUncheckedCreateInput>
  }


  /**
   * UserXBizum createMany
   */
  export type UserXBizumCreateManyArgs = {
    /**
     * The data used to create many UserXBizums.
     */
    data: Enumerable<UserXBizumCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserXBizum update
   */
  export type UserXBizumUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserXBizum
     */
    select?: UserXBizumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXBizumInclude | null
    /**
     * The data needed to update a UserXBizum.
     */
    data: XOR<UserXBizumUpdateInput, UserXBizumUncheckedUpdateInput>
    /**
     * Choose, which UserXBizum to update.
     */
    where: UserXBizumWhereUniqueInput
  }


  /**
   * UserXBizum updateMany
   */
  export type UserXBizumUpdateManyArgs = {
    /**
     * The data used to update UserXBizums.
     */
    data: XOR<UserXBizumUpdateManyMutationInput, UserXBizumUncheckedUpdateManyInput>
    /**
     * Filter which UserXBizums to update
     */
    where?: UserXBizumWhereInput
  }


  /**
   * UserXBizum upsert
   */
  export type UserXBizumUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserXBizum
     */
    select?: UserXBizumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXBizumInclude | null
    /**
     * The filter to search for the UserXBizum to update in case it exists.
     */
    where: UserXBizumWhereUniqueInput
    /**
     * In case the UserXBizum found by the `where` argument doesn't exist, create a new UserXBizum with this data.
     */
    create: XOR<UserXBizumCreateInput, UserXBizumUncheckedCreateInput>
    /**
     * In case the UserXBizum was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserXBizumUpdateInput, UserXBizumUncheckedUpdateInput>
  }


  /**
   * UserXBizum delete
   */
  export type UserXBizumDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserXBizum
     */
    select?: UserXBizumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXBizumInclude | null
    /**
     * Filter which UserXBizum to delete.
     */
    where: UserXBizumWhereUniqueInput
  }


  /**
   * UserXBizum deleteMany
   */
  export type UserXBizumDeleteManyArgs = {
    /**
     * Filter which UserXBizums to delete
     */
    where?: UserXBizumWhereInput
  }


  /**
   * UserXBizum without action
   */
  export type UserXBizumArgs = {
    /**
     * Select specific fields to fetch from the UserXBizum
     */
    select?: UserXBizumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXBizumInclude | null
  }



  /**
   * Model UserXMovimiento
   */


  export type AggregateUserXMovimiento = {
    _count: UserXMovimientoCountAggregateOutputType | null
    _avg: UserXMovimientoAvgAggregateOutputType | null
    _sum: UserXMovimientoSumAggregateOutputType | null
    _min: UserXMovimientoMinAggregateOutputType | null
    _max: UserXMovimientoMaxAggregateOutputType | null
  }

  export type UserXMovimientoAvgAggregateOutputType = {
    id: number | null
    importe: Decimal | null
    userId: number | null
    tipoId: number | null
  }

  export type UserXMovimientoSumAggregateOutputType = {
    id: number | null
    importe: Decimal | null
    userId: number | null
    tipoId: number | null
  }

  export type UserXMovimientoMinAggregateOutputType = {
    id: number | null
    importe: Decimal | null
    userId: number | null
    tipoId: number | null
    createdAt: Date | null
  }

  export type UserXMovimientoMaxAggregateOutputType = {
    id: number | null
    importe: Decimal | null
    userId: number | null
    tipoId: number | null
    createdAt: Date | null
  }

  export type UserXMovimientoCountAggregateOutputType = {
    id: number
    importe: number
    userId: number
    tipoId: number
    createdAt: number
    _all: number
  }


  export type UserXMovimientoAvgAggregateInputType = {
    id?: true
    importe?: true
    userId?: true
    tipoId?: true
  }

  export type UserXMovimientoSumAggregateInputType = {
    id?: true
    importe?: true
    userId?: true
    tipoId?: true
  }

  export type UserXMovimientoMinAggregateInputType = {
    id?: true
    importe?: true
    userId?: true
    tipoId?: true
    createdAt?: true
  }

  export type UserXMovimientoMaxAggregateInputType = {
    id?: true
    importe?: true
    userId?: true
    tipoId?: true
    createdAt?: true
  }

  export type UserXMovimientoCountAggregateInputType = {
    id?: true
    importe?: true
    userId?: true
    tipoId?: true
    createdAt?: true
    _all?: true
  }

  export type UserXMovimientoAggregateArgs = {
    /**
     * Filter which UserXMovimiento to aggregate.
     */
    where?: UserXMovimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserXMovimientos to fetch.
     */
    orderBy?: Enumerable<UserXMovimientoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserXMovimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserXMovimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserXMovimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserXMovimientos
    **/
    _count?: true | UserXMovimientoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserXMovimientoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserXMovimientoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserXMovimientoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserXMovimientoMaxAggregateInputType
  }

  export type GetUserXMovimientoAggregateType<T extends UserXMovimientoAggregateArgs> = {
        [P in keyof T & keyof AggregateUserXMovimiento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserXMovimiento[P]>
      : GetScalarType<T[P], AggregateUserXMovimiento[P]>
  }




  export type UserXMovimientoGroupByArgs = {
    where?: UserXMovimientoWhereInput
    orderBy?: Enumerable<UserXMovimientoOrderByWithAggregationInput>
    by: UserXMovimientoScalarFieldEnum[]
    having?: UserXMovimientoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserXMovimientoCountAggregateInputType | true
    _avg?: UserXMovimientoAvgAggregateInputType
    _sum?: UserXMovimientoSumAggregateInputType
    _min?: UserXMovimientoMinAggregateInputType
    _max?: UserXMovimientoMaxAggregateInputType
  }


  export type UserXMovimientoGroupByOutputType = {
    id: number
    importe: Decimal
    userId: number
    tipoId: number
    createdAt: Date
    _count: UserXMovimientoCountAggregateOutputType | null
    _avg: UserXMovimientoAvgAggregateOutputType | null
    _sum: UserXMovimientoSumAggregateOutputType | null
    _min: UserXMovimientoMinAggregateOutputType | null
    _max: UserXMovimientoMaxAggregateOutputType | null
  }

  type GetUserXMovimientoGroupByPayload<T extends UserXMovimientoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserXMovimientoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserXMovimientoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserXMovimientoGroupByOutputType[P]>
            : GetScalarType<T[P], UserXMovimientoGroupByOutputType[P]>
        }
      >
    >


  export type UserXMovimientoSelect = {
    id?: boolean
    importe?: boolean
    userId?: boolean
    tipoId?: boolean
    createdAt?: boolean
    User?: boolean | UserArgs
    UserXMovimientoXTipo?: boolean | UserXMovimientoXTipoArgs
    UserXBizum?: boolean | UserXMovimiento$UserXBizumArgs
    _count?: boolean | UserXMovimientoCountOutputTypeArgs
  }


  export type UserXMovimientoInclude = {
    User?: boolean | UserArgs
    UserXMovimientoXTipo?: boolean | UserXMovimientoXTipoArgs
    UserXBizum?: boolean | UserXMovimiento$UserXBizumArgs
    _count?: boolean | UserXMovimientoCountOutputTypeArgs
  }

  export type UserXMovimientoGetPayload<S extends boolean | null | undefined | UserXMovimientoArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserXMovimiento :
    S extends undefined ? never :
    S extends { include: any } & (UserXMovimientoArgs | UserXMovimientoFindManyArgs)
    ? UserXMovimiento  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> :
        P extends 'UserXMovimientoXTipo' ? UserXMovimientoXTipoGetPayload<S['include'][P]> :
        P extends 'UserXBizum' ? Array < UserXBizumGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserXMovimientoCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserXMovimientoArgs | UserXMovimientoFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> :
        P extends 'UserXMovimientoXTipo' ? UserXMovimientoXTipoGetPayload<S['select'][P]> :
        P extends 'UserXBizum' ? Array < UserXBizumGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserXMovimientoCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof UserXMovimiento ? UserXMovimiento[P] : never
  } 
      : UserXMovimiento


  type UserXMovimientoCountArgs = 
    Omit<UserXMovimientoFindManyArgs, 'select' | 'include'> & {
      select?: UserXMovimientoCountAggregateInputType | true
    }

  export interface UserXMovimientoDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one UserXMovimiento that matches the filter.
     * @param {UserXMovimientoFindUniqueArgs} args - Arguments to find a UserXMovimiento
     * @example
     * // Get one UserXMovimiento
     * const userXMovimiento = await prisma.userXMovimiento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserXMovimientoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserXMovimientoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserXMovimiento'> extends True ? Prisma__UserXMovimientoClient<UserXMovimientoGetPayload<T>> : Prisma__UserXMovimientoClient<UserXMovimientoGetPayload<T> | null, null>

    /**
     * Find one UserXMovimiento that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserXMovimientoFindUniqueOrThrowArgs} args - Arguments to find a UserXMovimiento
     * @example
     * // Get one UserXMovimiento
     * const userXMovimiento = await prisma.userXMovimiento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserXMovimientoFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserXMovimientoFindUniqueOrThrowArgs>
    ): Prisma__UserXMovimientoClient<UserXMovimientoGetPayload<T>>

    /**
     * Find the first UserXMovimiento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXMovimientoFindFirstArgs} args - Arguments to find a UserXMovimiento
     * @example
     * // Get one UserXMovimiento
     * const userXMovimiento = await prisma.userXMovimiento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserXMovimientoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserXMovimientoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserXMovimiento'> extends True ? Prisma__UserXMovimientoClient<UserXMovimientoGetPayload<T>> : Prisma__UserXMovimientoClient<UserXMovimientoGetPayload<T> | null, null>

    /**
     * Find the first UserXMovimiento that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXMovimientoFindFirstOrThrowArgs} args - Arguments to find a UserXMovimiento
     * @example
     * // Get one UserXMovimiento
     * const userXMovimiento = await prisma.userXMovimiento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserXMovimientoFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserXMovimientoFindFirstOrThrowArgs>
    ): Prisma__UserXMovimientoClient<UserXMovimientoGetPayload<T>>

    /**
     * Find zero or more UserXMovimientos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXMovimientoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserXMovimientos
     * const userXMovimientos = await prisma.userXMovimiento.findMany()
     * 
     * // Get first 10 UserXMovimientos
     * const userXMovimientos = await prisma.userXMovimiento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userXMovimientoWithIdOnly = await prisma.userXMovimiento.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserXMovimientoFindManyArgs>(
      args?: SelectSubset<T, UserXMovimientoFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserXMovimientoGetPayload<T>>>

    /**
     * Create a UserXMovimiento.
     * @param {UserXMovimientoCreateArgs} args - Arguments to create a UserXMovimiento.
     * @example
     * // Create one UserXMovimiento
     * const UserXMovimiento = await prisma.userXMovimiento.create({
     *   data: {
     *     // ... data to create a UserXMovimiento
     *   }
     * })
     * 
    **/
    create<T extends UserXMovimientoCreateArgs>(
      args: SelectSubset<T, UserXMovimientoCreateArgs>
    ): Prisma__UserXMovimientoClient<UserXMovimientoGetPayload<T>>

    /**
     * Create many UserXMovimientos.
     *     @param {UserXMovimientoCreateManyArgs} args - Arguments to create many UserXMovimientos.
     *     @example
     *     // Create many UserXMovimientos
     *     const userXMovimiento = await prisma.userXMovimiento.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserXMovimientoCreateManyArgs>(
      args?: SelectSubset<T, UserXMovimientoCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserXMovimiento.
     * @param {UserXMovimientoDeleteArgs} args - Arguments to delete one UserXMovimiento.
     * @example
     * // Delete one UserXMovimiento
     * const UserXMovimiento = await prisma.userXMovimiento.delete({
     *   where: {
     *     // ... filter to delete one UserXMovimiento
     *   }
     * })
     * 
    **/
    delete<T extends UserXMovimientoDeleteArgs>(
      args: SelectSubset<T, UserXMovimientoDeleteArgs>
    ): Prisma__UserXMovimientoClient<UserXMovimientoGetPayload<T>>

    /**
     * Update one UserXMovimiento.
     * @param {UserXMovimientoUpdateArgs} args - Arguments to update one UserXMovimiento.
     * @example
     * // Update one UserXMovimiento
     * const userXMovimiento = await prisma.userXMovimiento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserXMovimientoUpdateArgs>(
      args: SelectSubset<T, UserXMovimientoUpdateArgs>
    ): Prisma__UserXMovimientoClient<UserXMovimientoGetPayload<T>>

    /**
     * Delete zero or more UserXMovimientos.
     * @param {UserXMovimientoDeleteManyArgs} args - Arguments to filter UserXMovimientos to delete.
     * @example
     * // Delete a few UserXMovimientos
     * const { count } = await prisma.userXMovimiento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserXMovimientoDeleteManyArgs>(
      args?: SelectSubset<T, UserXMovimientoDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserXMovimientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXMovimientoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserXMovimientos
     * const userXMovimiento = await prisma.userXMovimiento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserXMovimientoUpdateManyArgs>(
      args: SelectSubset<T, UserXMovimientoUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserXMovimiento.
     * @param {UserXMovimientoUpsertArgs} args - Arguments to update or create a UserXMovimiento.
     * @example
     * // Update or create a UserXMovimiento
     * const userXMovimiento = await prisma.userXMovimiento.upsert({
     *   create: {
     *     // ... data to create a UserXMovimiento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserXMovimiento we want to update
     *   }
     * })
    **/
    upsert<T extends UserXMovimientoUpsertArgs>(
      args: SelectSubset<T, UserXMovimientoUpsertArgs>
    ): Prisma__UserXMovimientoClient<UserXMovimientoGetPayload<T>>

    /**
     * Count the number of UserXMovimientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXMovimientoCountArgs} args - Arguments to filter UserXMovimientos to count.
     * @example
     * // Count the number of UserXMovimientos
     * const count = await prisma.userXMovimiento.count({
     *   where: {
     *     // ... the filter for the UserXMovimientos we want to count
     *   }
     * })
    **/
    count<T extends UserXMovimientoCountArgs>(
      args?: Subset<T, UserXMovimientoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserXMovimientoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserXMovimiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXMovimientoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserXMovimientoAggregateArgs>(args: Subset<T, UserXMovimientoAggregateArgs>): Prisma.PrismaPromise<GetUserXMovimientoAggregateType<T>>

    /**
     * Group by UserXMovimiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXMovimientoGroupByArgs} args - Group by arguments.
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
      T extends UserXMovimientoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserXMovimientoGroupByArgs['orderBy'] }
        : { orderBy?: UserXMovimientoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserXMovimientoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserXMovimientoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for UserXMovimiento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserXMovimientoClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    User<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    UserXMovimientoXTipo<T extends UserXMovimientoXTipoArgs= {}>(args?: Subset<T, UserXMovimientoXTipoArgs>): Prisma__UserXMovimientoXTipoClient<UserXMovimientoXTipoGetPayload<T> | Null>;

    UserXBizum<T extends UserXMovimiento$UserXBizumArgs= {}>(args?: Subset<T, UserXMovimiento$UserXBizumArgs>): Prisma.PrismaPromise<Array<UserXBizumGetPayload<T>>| Null>;

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
   * UserXMovimiento base type for findUnique actions
   */
  export type UserXMovimientoFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserXMovimiento
     */
    select?: UserXMovimientoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXMovimientoInclude | null
    /**
     * Filter, which UserXMovimiento to fetch.
     */
    where: UserXMovimientoWhereUniqueInput
  }

  /**
   * UserXMovimiento findUnique
   */
  export interface UserXMovimientoFindUniqueArgs extends UserXMovimientoFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserXMovimiento findUniqueOrThrow
   */
  export type UserXMovimientoFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserXMovimiento
     */
    select?: UserXMovimientoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXMovimientoInclude | null
    /**
     * Filter, which UserXMovimiento to fetch.
     */
    where: UserXMovimientoWhereUniqueInput
  }


  /**
   * UserXMovimiento base type for findFirst actions
   */
  export type UserXMovimientoFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserXMovimiento
     */
    select?: UserXMovimientoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXMovimientoInclude | null
    /**
     * Filter, which UserXMovimiento to fetch.
     */
    where?: UserXMovimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserXMovimientos to fetch.
     */
    orderBy?: Enumerable<UserXMovimientoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserXMovimientos.
     */
    cursor?: UserXMovimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserXMovimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserXMovimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserXMovimientos.
     */
    distinct?: Enumerable<UserXMovimientoScalarFieldEnum>
  }

  /**
   * UserXMovimiento findFirst
   */
  export interface UserXMovimientoFindFirstArgs extends UserXMovimientoFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserXMovimiento findFirstOrThrow
   */
  export type UserXMovimientoFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserXMovimiento
     */
    select?: UserXMovimientoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXMovimientoInclude | null
    /**
     * Filter, which UserXMovimiento to fetch.
     */
    where?: UserXMovimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserXMovimientos to fetch.
     */
    orderBy?: Enumerable<UserXMovimientoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserXMovimientos.
     */
    cursor?: UserXMovimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserXMovimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserXMovimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserXMovimientos.
     */
    distinct?: Enumerable<UserXMovimientoScalarFieldEnum>
  }


  /**
   * UserXMovimiento findMany
   */
  export type UserXMovimientoFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserXMovimiento
     */
    select?: UserXMovimientoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXMovimientoInclude | null
    /**
     * Filter, which UserXMovimientos to fetch.
     */
    where?: UserXMovimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserXMovimientos to fetch.
     */
    orderBy?: Enumerable<UserXMovimientoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserXMovimientos.
     */
    cursor?: UserXMovimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserXMovimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserXMovimientos.
     */
    skip?: number
    distinct?: Enumerable<UserXMovimientoScalarFieldEnum>
  }


  /**
   * UserXMovimiento create
   */
  export type UserXMovimientoCreateArgs = {
    /**
     * Select specific fields to fetch from the UserXMovimiento
     */
    select?: UserXMovimientoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXMovimientoInclude | null
    /**
     * The data needed to create a UserXMovimiento.
     */
    data: XOR<UserXMovimientoCreateInput, UserXMovimientoUncheckedCreateInput>
  }


  /**
   * UserXMovimiento createMany
   */
  export type UserXMovimientoCreateManyArgs = {
    /**
     * The data used to create many UserXMovimientos.
     */
    data: Enumerable<UserXMovimientoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserXMovimiento update
   */
  export type UserXMovimientoUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserXMovimiento
     */
    select?: UserXMovimientoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXMovimientoInclude | null
    /**
     * The data needed to update a UserXMovimiento.
     */
    data: XOR<UserXMovimientoUpdateInput, UserXMovimientoUncheckedUpdateInput>
    /**
     * Choose, which UserXMovimiento to update.
     */
    where: UserXMovimientoWhereUniqueInput
  }


  /**
   * UserXMovimiento updateMany
   */
  export type UserXMovimientoUpdateManyArgs = {
    /**
     * The data used to update UserXMovimientos.
     */
    data: XOR<UserXMovimientoUpdateManyMutationInput, UserXMovimientoUncheckedUpdateManyInput>
    /**
     * Filter which UserXMovimientos to update
     */
    where?: UserXMovimientoWhereInput
  }


  /**
   * UserXMovimiento upsert
   */
  export type UserXMovimientoUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserXMovimiento
     */
    select?: UserXMovimientoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXMovimientoInclude | null
    /**
     * The filter to search for the UserXMovimiento to update in case it exists.
     */
    where: UserXMovimientoWhereUniqueInput
    /**
     * In case the UserXMovimiento found by the `where` argument doesn't exist, create a new UserXMovimiento with this data.
     */
    create: XOR<UserXMovimientoCreateInput, UserXMovimientoUncheckedCreateInput>
    /**
     * In case the UserXMovimiento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserXMovimientoUpdateInput, UserXMovimientoUncheckedUpdateInput>
  }


  /**
   * UserXMovimiento delete
   */
  export type UserXMovimientoDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserXMovimiento
     */
    select?: UserXMovimientoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXMovimientoInclude | null
    /**
     * Filter which UserXMovimiento to delete.
     */
    where: UserXMovimientoWhereUniqueInput
  }


  /**
   * UserXMovimiento deleteMany
   */
  export type UserXMovimientoDeleteManyArgs = {
    /**
     * Filter which UserXMovimientos to delete
     */
    where?: UserXMovimientoWhereInput
  }


  /**
   * UserXMovimiento.UserXBizum
   */
  export type UserXMovimiento$UserXBizumArgs = {
    /**
     * Select specific fields to fetch from the UserXBizum
     */
    select?: UserXBizumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXBizumInclude | null
    where?: UserXBizumWhereInput
    orderBy?: Enumerable<UserXBizumOrderByWithRelationInput>
    cursor?: UserXBizumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserXBizumScalarFieldEnum>
  }


  /**
   * UserXMovimiento without action
   */
  export type UserXMovimientoArgs = {
    /**
     * Select specific fields to fetch from the UserXMovimiento
     */
    select?: UserXMovimientoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXMovimientoInclude | null
  }



  /**
   * Model UserXMovimientoXTipo
   */


  export type AggregateUserXMovimientoXTipo = {
    _count: UserXMovimientoXTipoCountAggregateOutputType | null
    _avg: UserXMovimientoXTipoAvgAggregateOutputType | null
    _sum: UserXMovimientoXTipoSumAggregateOutputType | null
    _min: UserXMovimientoXTipoMinAggregateOutputType | null
    _max: UserXMovimientoXTipoMaxAggregateOutputType | null
  }

  export type UserXMovimientoXTipoAvgAggregateOutputType = {
    id: number | null
  }

  export type UserXMovimientoXTipoSumAggregateOutputType = {
    id: number | null
  }

  export type UserXMovimientoXTipoMinAggregateOutputType = {
    id: number | null
    descripcion: string | null
  }

  export type UserXMovimientoXTipoMaxAggregateOutputType = {
    id: number | null
    descripcion: string | null
  }

  export type UserXMovimientoXTipoCountAggregateOutputType = {
    id: number
    descripcion: number
    _all: number
  }


  export type UserXMovimientoXTipoAvgAggregateInputType = {
    id?: true
  }

  export type UserXMovimientoXTipoSumAggregateInputType = {
    id?: true
  }

  export type UserXMovimientoXTipoMinAggregateInputType = {
    id?: true
    descripcion?: true
  }

  export type UserXMovimientoXTipoMaxAggregateInputType = {
    id?: true
    descripcion?: true
  }

  export type UserXMovimientoXTipoCountAggregateInputType = {
    id?: true
    descripcion?: true
    _all?: true
  }

  export type UserXMovimientoXTipoAggregateArgs = {
    /**
     * Filter which UserXMovimientoXTipo to aggregate.
     */
    where?: UserXMovimientoXTipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserXMovimientoXTipos to fetch.
     */
    orderBy?: Enumerable<UserXMovimientoXTipoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserXMovimientoXTipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserXMovimientoXTipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserXMovimientoXTipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserXMovimientoXTipos
    **/
    _count?: true | UserXMovimientoXTipoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserXMovimientoXTipoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserXMovimientoXTipoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserXMovimientoXTipoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserXMovimientoXTipoMaxAggregateInputType
  }

  export type GetUserXMovimientoXTipoAggregateType<T extends UserXMovimientoXTipoAggregateArgs> = {
        [P in keyof T & keyof AggregateUserXMovimientoXTipo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserXMovimientoXTipo[P]>
      : GetScalarType<T[P], AggregateUserXMovimientoXTipo[P]>
  }




  export type UserXMovimientoXTipoGroupByArgs = {
    where?: UserXMovimientoXTipoWhereInput
    orderBy?: Enumerable<UserXMovimientoXTipoOrderByWithAggregationInput>
    by: UserXMovimientoXTipoScalarFieldEnum[]
    having?: UserXMovimientoXTipoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserXMovimientoXTipoCountAggregateInputType | true
    _avg?: UserXMovimientoXTipoAvgAggregateInputType
    _sum?: UserXMovimientoXTipoSumAggregateInputType
    _min?: UserXMovimientoXTipoMinAggregateInputType
    _max?: UserXMovimientoXTipoMaxAggregateInputType
  }


  export type UserXMovimientoXTipoGroupByOutputType = {
    id: number
    descripcion: string
    _count: UserXMovimientoXTipoCountAggregateOutputType | null
    _avg: UserXMovimientoXTipoAvgAggregateOutputType | null
    _sum: UserXMovimientoXTipoSumAggregateOutputType | null
    _min: UserXMovimientoXTipoMinAggregateOutputType | null
    _max: UserXMovimientoXTipoMaxAggregateOutputType | null
  }

  type GetUserXMovimientoXTipoGroupByPayload<T extends UserXMovimientoXTipoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserXMovimientoXTipoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserXMovimientoXTipoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserXMovimientoXTipoGroupByOutputType[P]>
            : GetScalarType<T[P], UserXMovimientoXTipoGroupByOutputType[P]>
        }
      >
    >


  export type UserXMovimientoXTipoSelect = {
    id?: boolean
    descripcion?: boolean
    UserXMovimiento?: boolean | UserXMovimientoXTipo$UserXMovimientoArgs
    _count?: boolean | UserXMovimientoXTipoCountOutputTypeArgs
  }


  export type UserXMovimientoXTipoInclude = {
    UserXMovimiento?: boolean | UserXMovimientoXTipo$UserXMovimientoArgs
    _count?: boolean | UserXMovimientoXTipoCountOutputTypeArgs
  }

  export type UserXMovimientoXTipoGetPayload<S extends boolean | null | undefined | UserXMovimientoXTipoArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserXMovimientoXTipo :
    S extends undefined ? never :
    S extends { include: any } & (UserXMovimientoXTipoArgs | UserXMovimientoXTipoFindManyArgs)
    ? UserXMovimientoXTipo  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'UserXMovimiento' ? Array < UserXMovimientoGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserXMovimientoXTipoCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserXMovimientoXTipoArgs | UserXMovimientoXTipoFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'UserXMovimiento' ? Array < UserXMovimientoGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserXMovimientoXTipoCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof UserXMovimientoXTipo ? UserXMovimientoXTipo[P] : never
  } 
      : UserXMovimientoXTipo


  type UserXMovimientoXTipoCountArgs = 
    Omit<UserXMovimientoXTipoFindManyArgs, 'select' | 'include'> & {
      select?: UserXMovimientoXTipoCountAggregateInputType | true
    }

  export interface UserXMovimientoXTipoDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one UserXMovimientoXTipo that matches the filter.
     * @param {UserXMovimientoXTipoFindUniqueArgs} args - Arguments to find a UserXMovimientoXTipo
     * @example
     * // Get one UserXMovimientoXTipo
     * const userXMovimientoXTipo = await prisma.userXMovimientoXTipo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserXMovimientoXTipoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserXMovimientoXTipoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserXMovimientoXTipo'> extends True ? Prisma__UserXMovimientoXTipoClient<UserXMovimientoXTipoGetPayload<T>> : Prisma__UserXMovimientoXTipoClient<UserXMovimientoXTipoGetPayload<T> | null, null>

    /**
     * Find one UserXMovimientoXTipo that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserXMovimientoXTipoFindUniqueOrThrowArgs} args - Arguments to find a UserXMovimientoXTipo
     * @example
     * // Get one UserXMovimientoXTipo
     * const userXMovimientoXTipo = await prisma.userXMovimientoXTipo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserXMovimientoXTipoFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserXMovimientoXTipoFindUniqueOrThrowArgs>
    ): Prisma__UserXMovimientoXTipoClient<UserXMovimientoXTipoGetPayload<T>>

    /**
     * Find the first UserXMovimientoXTipo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXMovimientoXTipoFindFirstArgs} args - Arguments to find a UserXMovimientoXTipo
     * @example
     * // Get one UserXMovimientoXTipo
     * const userXMovimientoXTipo = await prisma.userXMovimientoXTipo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserXMovimientoXTipoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserXMovimientoXTipoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserXMovimientoXTipo'> extends True ? Prisma__UserXMovimientoXTipoClient<UserXMovimientoXTipoGetPayload<T>> : Prisma__UserXMovimientoXTipoClient<UserXMovimientoXTipoGetPayload<T> | null, null>

    /**
     * Find the first UserXMovimientoXTipo that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXMovimientoXTipoFindFirstOrThrowArgs} args - Arguments to find a UserXMovimientoXTipo
     * @example
     * // Get one UserXMovimientoXTipo
     * const userXMovimientoXTipo = await prisma.userXMovimientoXTipo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserXMovimientoXTipoFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserXMovimientoXTipoFindFirstOrThrowArgs>
    ): Prisma__UserXMovimientoXTipoClient<UserXMovimientoXTipoGetPayload<T>>

    /**
     * Find zero or more UserXMovimientoXTipos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXMovimientoXTipoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserXMovimientoXTipos
     * const userXMovimientoXTipos = await prisma.userXMovimientoXTipo.findMany()
     * 
     * // Get first 10 UserXMovimientoXTipos
     * const userXMovimientoXTipos = await prisma.userXMovimientoXTipo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userXMovimientoXTipoWithIdOnly = await prisma.userXMovimientoXTipo.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserXMovimientoXTipoFindManyArgs>(
      args?: SelectSubset<T, UserXMovimientoXTipoFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserXMovimientoXTipoGetPayload<T>>>

    /**
     * Create a UserXMovimientoXTipo.
     * @param {UserXMovimientoXTipoCreateArgs} args - Arguments to create a UserXMovimientoXTipo.
     * @example
     * // Create one UserXMovimientoXTipo
     * const UserXMovimientoXTipo = await prisma.userXMovimientoXTipo.create({
     *   data: {
     *     // ... data to create a UserXMovimientoXTipo
     *   }
     * })
     * 
    **/
    create<T extends UserXMovimientoXTipoCreateArgs>(
      args: SelectSubset<T, UserXMovimientoXTipoCreateArgs>
    ): Prisma__UserXMovimientoXTipoClient<UserXMovimientoXTipoGetPayload<T>>

    /**
     * Create many UserXMovimientoXTipos.
     *     @param {UserXMovimientoXTipoCreateManyArgs} args - Arguments to create many UserXMovimientoXTipos.
     *     @example
     *     // Create many UserXMovimientoXTipos
     *     const userXMovimientoXTipo = await prisma.userXMovimientoXTipo.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserXMovimientoXTipoCreateManyArgs>(
      args?: SelectSubset<T, UserXMovimientoXTipoCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserXMovimientoXTipo.
     * @param {UserXMovimientoXTipoDeleteArgs} args - Arguments to delete one UserXMovimientoXTipo.
     * @example
     * // Delete one UserXMovimientoXTipo
     * const UserXMovimientoXTipo = await prisma.userXMovimientoXTipo.delete({
     *   where: {
     *     // ... filter to delete one UserXMovimientoXTipo
     *   }
     * })
     * 
    **/
    delete<T extends UserXMovimientoXTipoDeleteArgs>(
      args: SelectSubset<T, UserXMovimientoXTipoDeleteArgs>
    ): Prisma__UserXMovimientoXTipoClient<UserXMovimientoXTipoGetPayload<T>>

    /**
     * Update one UserXMovimientoXTipo.
     * @param {UserXMovimientoXTipoUpdateArgs} args - Arguments to update one UserXMovimientoXTipo.
     * @example
     * // Update one UserXMovimientoXTipo
     * const userXMovimientoXTipo = await prisma.userXMovimientoXTipo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserXMovimientoXTipoUpdateArgs>(
      args: SelectSubset<T, UserXMovimientoXTipoUpdateArgs>
    ): Prisma__UserXMovimientoXTipoClient<UserXMovimientoXTipoGetPayload<T>>

    /**
     * Delete zero or more UserXMovimientoXTipos.
     * @param {UserXMovimientoXTipoDeleteManyArgs} args - Arguments to filter UserXMovimientoXTipos to delete.
     * @example
     * // Delete a few UserXMovimientoXTipos
     * const { count } = await prisma.userXMovimientoXTipo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserXMovimientoXTipoDeleteManyArgs>(
      args?: SelectSubset<T, UserXMovimientoXTipoDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserXMovimientoXTipos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXMovimientoXTipoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserXMovimientoXTipos
     * const userXMovimientoXTipo = await prisma.userXMovimientoXTipo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserXMovimientoXTipoUpdateManyArgs>(
      args: SelectSubset<T, UserXMovimientoXTipoUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserXMovimientoXTipo.
     * @param {UserXMovimientoXTipoUpsertArgs} args - Arguments to update or create a UserXMovimientoXTipo.
     * @example
     * // Update or create a UserXMovimientoXTipo
     * const userXMovimientoXTipo = await prisma.userXMovimientoXTipo.upsert({
     *   create: {
     *     // ... data to create a UserXMovimientoXTipo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserXMovimientoXTipo we want to update
     *   }
     * })
    **/
    upsert<T extends UserXMovimientoXTipoUpsertArgs>(
      args: SelectSubset<T, UserXMovimientoXTipoUpsertArgs>
    ): Prisma__UserXMovimientoXTipoClient<UserXMovimientoXTipoGetPayload<T>>

    /**
     * Count the number of UserXMovimientoXTipos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXMovimientoXTipoCountArgs} args - Arguments to filter UserXMovimientoXTipos to count.
     * @example
     * // Count the number of UserXMovimientoXTipos
     * const count = await prisma.userXMovimientoXTipo.count({
     *   where: {
     *     // ... the filter for the UserXMovimientoXTipos we want to count
     *   }
     * })
    **/
    count<T extends UserXMovimientoXTipoCountArgs>(
      args?: Subset<T, UserXMovimientoXTipoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserXMovimientoXTipoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserXMovimientoXTipo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXMovimientoXTipoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserXMovimientoXTipoAggregateArgs>(args: Subset<T, UserXMovimientoXTipoAggregateArgs>): Prisma.PrismaPromise<GetUserXMovimientoXTipoAggregateType<T>>

    /**
     * Group by UserXMovimientoXTipo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXMovimientoXTipoGroupByArgs} args - Group by arguments.
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
      T extends UserXMovimientoXTipoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserXMovimientoXTipoGroupByArgs['orderBy'] }
        : { orderBy?: UserXMovimientoXTipoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserXMovimientoXTipoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserXMovimientoXTipoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for UserXMovimientoXTipo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserXMovimientoXTipoClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    UserXMovimiento<T extends UserXMovimientoXTipo$UserXMovimientoArgs= {}>(args?: Subset<T, UserXMovimientoXTipo$UserXMovimientoArgs>): Prisma.PrismaPromise<Array<UserXMovimientoGetPayload<T>>| Null>;

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
   * UserXMovimientoXTipo base type for findUnique actions
   */
  export type UserXMovimientoXTipoFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserXMovimientoXTipo
     */
    select?: UserXMovimientoXTipoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXMovimientoXTipoInclude | null
    /**
     * Filter, which UserXMovimientoXTipo to fetch.
     */
    where: UserXMovimientoXTipoWhereUniqueInput
  }

  /**
   * UserXMovimientoXTipo findUnique
   */
  export interface UserXMovimientoXTipoFindUniqueArgs extends UserXMovimientoXTipoFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserXMovimientoXTipo findUniqueOrThrow
   */
  export type UserXMovimientoXTipoFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserXMovimientoXTipo
     */
    select?: UserXMovimientoXTipoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXMovimientoXTipoInclude | null
    /**
     * Filter, which UserXMovimientoXTipo to fetch.
     */
    where: UserXMovimientoXTipoWhereUniqueInput
  }


  /**
   * UserXMovimientoXTipo base type for findFirst actions
   */
  export type UserXMovimientoXTipoFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserXMovimientoXTipo
     */
    select?: UserXMovimientoXTipoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXMovimientoXTipoInclude | null
    /**
     * Filter, which UserXMovimientoXTipo to fetch.
     */
    where?: UserXMovimientoXTipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserXMovimientoXTipos to fetch.
     */
    orderBy?: Enumerable<UserXMovimientoXTipoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserXMovimientoXTipos.
     */
    cursor?: UserXMovimientoXTipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserXMovimientoXTipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserXMovimientoXTipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserXMovimientoXTipos.
     */
    distinct?: Enumerable<UserXMovimientoXTipoScalarFieldEnum>
  }

  /**
   * UserXMovimientoXTipo findFirst
   */
  export interface UserXMovimientoXTipoFindFirstArgs extends UserXMovimientoXTipoFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserXMovimientoXTipo findFirstOrThrow
   */
  export type UserXMovimientoXTipoFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserXMovimientoXTipo
     */
    select?: UserXMovimientoXTipoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXMovimientoXTipoInclude | null
    /**
     * Filter, which UserXMovimientoXTipo to fetch.
     */
    where?: UserXMovimientoXTipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserXMovimientoXTipos to fetch.
     */
    orderBy?: Enumerable<UserXMovimientoXTipoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserXMovimientoXTipos.
     */
    cursor?: UserXMovimientoXTipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserXMovimientoXTipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserXMovimientoXTipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserXMovimientoXTipos.
     */
    distinct?: Enumerable<UserXMovimientoXTipoScalarFieldEnum>
  }


  /**
   * UserXMovimientoXTipo findMany
   */
  export type UserXMovimientoXTipoFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserXMovimientoXTipo
     */
    select?: UserXMovimientoXTipoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXMovimientoXTipoInclude | null
    /**
     * Filter, which UserXMovimientoXTipos to fetch.
     */
    where?: UserXMovimientoXTipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserXMovimientoXTipos to fetch.
     */
    orderBy?: Enumerable<UserXMovimientoXTipoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserXMovimientoXTipos.
     */
    cursor?: UserXMovimientoXTipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserXMovimientoXTipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserXMovimientoXTipos.
     */
    skip?: number
    distinct?: Enumerable<UserXMovimientoXTipoScalarFieldEnum>
  }


  /**
   * UserXMovimientoXTipo create
   */
  export type UserXMovimientoXTipoCreateArgs = {
    /**
     * Select specific fields to fetch from the UserXMovimientoXTipo
     */
    select?: UserXMovimientoXTipoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXMovimientoXTipoInclude | null
    /**
     * The data needed to create a UserXMovimientoXTipo.
     */
    data: XOR<UserXMovimientoXTipoCreateInput, UserXMovimientoXTipoUncheckedCreateInput>
  }


  /**
   * UserXMovimientoXTipo createMany
   */
  export type UserXMovimientoXTipoCreateManyArgs = {
    /**
     * The data used to create many UserXMovimientoXTipos.
     */
    data: Enumerable<UserXMovimientoXTipoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserXMovimientoXTipo update
   */
  export type UserXMovimientoXTipoUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserXMovimientoXTipo
     */
    select?: UserXMovimientoXTipoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXMovimientoXTipoInclude | null
    /**
     * The data needed to update a UserXMovimientoXTipo.
     */
    data: XOR<UserXMovimientoXTipoUpdateInput, UserXMovimientoXTipoUncheckedUpdateInput>
    /**
     * Choose, which UserXMovimientoXTipo to update.
     */
    where: UserXMovimientoXTipoWhereUniqueInput
  }


  /**
   * UserXMovimientoXTipo updateMany
   */
  export type UserXMovimientoXTipoUpdateManyArgs = {
    /**
     * The data used to update UserXMovimientoXTipos.
     */
    data: XOR<UserXMovimientoXTipoUpdateManyMutationInput, UserXMovimientoXTipoUncheckedUpdateManyInput>
    /**
     * Filter which UserXMovimientoXTipos to update
     */
    where?: UserXMovimientoXTipoWhereInput
  }


  /**
   * UserXMovimientoXTipo upsert
   */
  export type UserXMovimientoXTipoUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserXMovimientoXTipo
     */
    select?: UserXMovimientoXTipoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXMovimientoXTipoInclude | null
    /**
     * The filter to search for the UserXMovimientoXTipo to update in case it exists.
     */
    where: UserXMovimientoXTipoWhereUniqueInput
    /**
     * In case the UserXMovimientoXTipo found by the `where` argument doesn't exist, create a new UserXMovimientoXTipo with this data.
     */
    create: XOR<UserXMovimientoXTipoCreateInput, UserXMovimientoXTipoUncheckedCreateInput>
    /**
     * In case the UserXMovimientoXTipo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserXMovimientoXTipoUpdateInput, UserXMovimientoXTipoUncheckedUpdateInput>
  }


  /**
   * UserXMovimientoXTipo delete
   */
  export type UserXMovimientoXTipoDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserXMovimientoXTipo
     */
    select?: UserXMovimientoXTipoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXMovimientoXTipoInclude | null
    /**
     * Filter which UserXMovimientoXTipo to delete.
     */
    where: UserXMovimientoXTipoWhereUniqueInput
  }


  /**
   * UserXMovimientoXTipo deleteMany
   */
  export type UserXMovimientoXTipoDeleteManyArgs = {
    /**
     * Filter which UserXMovimientoXTipos to delete
     */
    where?: UserXMovimientoXTipoWhereInput
  }


  /**
   * UserXMovimientoXTipo.UserXMovimiento
   */
  export type UserXMovimientoXTipo$UserXMovimientoArgs = {
    /**
     * Select specific fields to fetch from the UserXMovimiento
     */
    select?: UserXMovimientoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXMovimientoInclude | null
    where?: UserXMovimientoWhereInput
    orderBy?: Enumerable<UserXMovimientoOrderByWithRelationInput>
    cursor?: UserXMovimientoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserXMovimientoScalarFieldEnum>
  }


  /**
   * UserXMovimientoXTipo without action
   */
  export type UserXMovimientoXTipoArgs = {
    /**
     * Select specific fields to fetch from the UserXMovimientoXTipo
     */
    select?: UserXMovimientoXTipoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXMovimientoXTipoInclude | null
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
   * Model CodeSecure
   */


  export type AggregateCodeSecure = {
    _count: CodeSecureCountAggregateOutputType | null
    _avg: CodeSecureAvgAggregateOutputType | null
    _sum: CodeSecureSumAggregateOutputType | null
    _min: CodeSecureMinAggregateOutputType | null
    _max: CodeSecureMaxAggregateOutputType | null
  }

  export type CodeSecureAvgAggregateOutputType = {
    type: number | null
    userId: number | null
  }

  export type CodeSecureSumAggregateOutputType = {
    type: number | null
    userId: number | null
  }

  export type CodeSecureMinAggregateOutputType = {
    code: string | null
    type: number | null
    userId: number | null
    createdAt: Date | null
  }

  export type CodeSecureMaxAggregateOutputType = {
    code: string | null
    type: number | null
    userId: number | null
    createdAt: Date | null
  }

  export type CodeSecureCountAggregateOutputType = {
    code: number
    type: number
    userId: number
    createdAt: number
    _all: number
  }


  export type CodeSecureAvgAggregateInputType = {
    type?: true
    userId?: true
  }

  export type CodeSecureSumAggregateInputType = {
    type?: true
    userId?: true
  }

  export type CodeSecureMinAggregateInputType = {
    code?: true
    type?: true
    userId?: true
    createdAt?: true
  }

  export type CodeSecureMaxAggregateInputType = {
    code?: true
    type?: true
    userId?: true
    createdAt?: true
  }

  export type CodeSecureCountAggregateInputType = {
    code?: true
    type?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type CodeSecureAggregateArgs = {
    /**
     * Filter which CodeSecure to aggregate.
     */
    where?: CodeSecureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeSecures to fetch.
     */
    orderBy?: Enumerable<CodeSecureOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CodeSecureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeSecures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeSecures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CodeSecures
    **/
    _count?: true | CodeSecureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CodeSecureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CodeSecureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CodeSecureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CodeSecureMaxAggregateInputType
  }

  export type GetCodeSecureAggregateType<T extends CodeSecureAggregateArgs> = {
        [P in keyof T & keyof AggregateCodeSecure]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCodeSecure[P]>
      : GetScalarType<T[P], AggregateCodeSecure[P]>
  }




  export type CodeSecureGroupByArgs = {
    where?: CodeSecureWhereInput
    orderBy?: Enumerable<CodeSecureOrderByWithAggregationInput>
    by: CodeSecureScalarFieldEnum[]
    having?: CodeSecureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CodeSecureCountAggregateInputType | true
    _avg?: CodeSecureAvgAggregateInputType
    _sum?: CodeSecureSumAggregateInputType
    _min?: CodeSecureMinAggregateInputType
    _max?: CodeSecureMaxAggregateInputType
  }


  export type CodeSecureGroupByOutputType = {
    code: string
    type: number
    userId: number
    createdAt: Date
    _count: CodeSecureCountAggregateOutputType | null
    _avg: CodeSecureAvgAggregateOutputType | null
    _sum: CodeSecureSumAggregateOutputType | null
    _min: CodeSecureMinAggregateOutputType | null
    _max: CodeSecureMaxAggregateOutputType | null
  }

  type GetCodeSecureGroupByPayload<T extends CodeSecureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CodeSecureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CodeSecureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CodeSecureGroupByOutputType[P]>
            : GetScalarType<T[P], CodeSecureGroupByOutputType[P]>
        }
      >
    >


  export type CodeSecureSelect = {
    code?: boolean
    type?: boolean
    userId?: boolean
    createdAt?: boolean
    User?: boolean | UserArgs
  }


  export type CodeSecureInclude = {
    User?: boolean | UserArgs
  }

  export type CodeSecureGetPayload<S extends boolean | null | undefined | CodeSecureArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CodeSecure :
    S extends undefined ? never :
    S extends { include: any } & (CodeSecureArgs | CodeSecureFindManyArgs)
    ? CodeSecure  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CodeSecureArgs | CodeSecureFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> :  P extends keyof CodeSecure ? CodeSecure[P] : never
  } 
      : CodeSecure


  type CodeSecureCountArgs = 
    Omit<CodeSecureFindManyArgs, 'select' | 'include'> & {
      select?: CodeSecureCountAggregateInputType | true
    }

  export interface CodeSecureDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one CodeSecure that matches the filter.
     * @param {CodeSecureFindUniqueArgs} args - Arguments to find a CodeSecure
     * @example
     * // Get one CodeSecure
     * const codeSecure = await prisma.codeSecure.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CodeSecureFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CodeSecureFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CodeSecure'> extends True ? Prisma__CodeSecureClient<CodeSecureGetPayload<T>> : Prisma__CodeSecureClient<CodeSecureGetPayload<T> | null, null>

    /**
     * Find one CodeSecure that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CodeSecureFindUniqueOrThrowArgs} args - Arguments to find a CodeSecure
     * @example
     * // Get one CodeSecure
     * const codeSecure = await prisma.codeSecure.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CodeSecureFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CodeSecureFindUniqueOrThrowArgs>
    ): Prisma__CodeSecureClient<CodeSecureGetPayload<T>>

    /**
     * Find the first CodeSecure that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeSecureFindFirstArgs} args - Arguments to find a CodeSecure
     * @example
     * // Get one CodeSecure
     * const codeSecure = await prisma.codeSecure.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CodeSecureFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CodeSecureFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CodeSecure'> extends True ? Prisma__CodeSecureClient<CodeSecureGetPayload<T>> : Prisma__CodeSecureClient<CodeSecureGetPayload<T> | null, null>

    /**
     * Find the first CodeSecure that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeSecureFindFirstOrThrowArgs} args - Arguments to find a CodeSecure
     * @example
     * // Get one CodeSecure
     * const codeSecure = await prisma.codeSecure.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CodeSecureFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CodeSecureFindFirstOrThrowArgs>
    ): Prisma__CodeSecureClient<CodeSecureGetPayload<T>>

    /**
     * Find zero or more CodeSecures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeSecureFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CodeSecures
     * const codeSecures = await prisma.codeSecure.findMany()
     * 
     * // Get first 10 CodeSecures
     * const codeSecures = await prisma.codeSecure.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const codeSecureWithCodeOnly = await prisma.codeSecure.findMany({ select: { code: true } })
     * 
    **/
    findMany<T extends CodeSecureFindManyArgs>(
      args?: SelectSubset<T, CodeSecureFindManyArgs>
    ): Prisma.PrismaPromise<Array<CodeSecureGetPayload<T>>>

    /**
     * Create a CodeSecure.
     * @param {CodeSecureCreateArgs} args - Arguments to create a CodeSecure.
     * @example
     * // Create one CodeSecure
     * const CodeSecure = await prisma.codeSecure.create({
     *   data: {
     *     // ... data to create a CodeSecure
     *   }
     * })
     * 
    **/
    create<T extends CodeSecureCreateArgs>(
      args: SelectSubset<T, CodeSecureCreateArgs>
    ): Prisma__CodeSecureClient<CodeSecureGetPayload<T>>

    /**
     * Create many CodeSecures.
     *     @param {CodeSecureCreateManyArgs} args - Arguments to create many CodeSecures.
     *     @example
     *     // Create many CodeSecures
     *     const codeSecure = await prisma.codeSecure.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CodeSecureCreateManyArgs>(
      args?: SelectSubset<T, CodeSecureCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CodeSecure.
     * @param {CodeSecureDeleteArgs} args - Arguments to delete one CodeSecure.
     * @example
     * // Delete one CodeSecure
     * const CodeSecure = await prisma.codeSecure.delete({
     *   where: {
     *     // ... filter to delete one CodeSecure
     *   }
     * })
     * 
    **/
    delete<T extends CodeSecureDeleteArgs>(
      args: SelectSubset<T, CodeSecureDeleteArgs>
    ): Prisma__CodeSecureClient<CodeSecureGetPayload<T>>

    /**
     * Update one CodeSecure.
     * @param {CodeSecureUpdateArgs} args - Arguments to update one CodeSecure.
     * @example
     * // Update one CodeSecure
     * const codeSecure = await prisma.codeSecure.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CodeSecureUpdateArgs>(
      args: SelectSubset<T, CodeSecureUpdateArgs>
    ): Prisma__CodeSecureClient<CodeSecureGetPayload<T>>

    /**
     * Delete zero or more CodeSecures.
     * @param {CodeSecureDeleteManyArgs} args - Arguments to filter CodeSecures to delete.
     * @example
     * // Delete a few CodeSecures
     * const { count } = await prisma.codeSecure.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CodeSecureDeleteManyArgs>(
      args?: SelectSubset<T, CodeSecureDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CodeSecures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeSecureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CodeSecures
     * const codeSecure = await prisma.codeSecure.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CodeSecureUpdateManyArgs>(
      args: SelectSubset<T, CodeSecureUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CodeSecure.
     * @param {CodeSecureUpsertArgs} args - Arguments to update or create a CodeSecure.
     * @example
     * // Update or create a CodeSecure
     * const codeSecure = await prisma.codeSecure.upsert({
     *   create: {
     *     // ... data to create a CodeSecure
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CodeSecure we want to update
     *   }
     * })
    **/
    upsert<T extends CodeSecureUpsertArgs>(
      args: SelectSubset<T, CodeSecureUpsertArgs>
    ): Prisma__CodeSecureClient<CodeSecureGetPayload<T>>

    /**
     * Count the number of CodeSecures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeSecureCountArgs} args - Arguments to filter CodeSecures to count.
     * @example
     * // Count the number of CodeSecures
     * const count = await prisma.codeSecure.count({
     *   where: {
     *     // ... the filter for the CodeSecures we want to count
     *   }
     * })
    **/
    count<T extends CodeSecureCountArgs>(
      args?: Subset<T, CodeSecureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CodeSecureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CodeSecure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeSecureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CodeSecureAggregateArgs>(args: Subset<T, CodeSecureAggregateArgs>): Prisma.PrismaPromise<GetCodeSecureAggregateType<T>>

    /**
     * Group by CodeSecure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeSecureGroupByArgs} args - Group by arguments.
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
      T extends CodeSecureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CodeSecureGroupByArgs['orderBy'] }
        : { orderBy?: CodeSecureGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CodeSecureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCodeSecureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for CodeSecure.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CodeSecureClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    User<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

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
   * CodeSecure base type for findUnique actions
   */
  export type CodeSecureFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the CodeSecure
     */
    select?: CodeSecureSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CodeSecureInclude | null
    /**
     * Filter, which CodeSecure to fetch.
     */
    where: CodeSecureWhereUniqueInput
  }

  /**
   * CodeSecure findUnique
   */
  export interface CodeSecureFindUniqueArgs extends CodeSecureFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CodeSecure findUniqueOrThrow
   */
  export type CodeSecureFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CodeSecure
     */
    select?: CodeSecureSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CodeSecureInclude | null
    /**
     * Filter, which CodeSecure to fetch.
     */
    where: CodeSecureWhereUniqueInput
  }


  /**
   * CodeSecure base type for findFirst actions
   */
  export type CodeSecureFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the CodeSecure
     */
    select?: CodeSecureSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CodeSecureInclude | null
    /**
     * Filter, which CodeSecure to fetch.
     */
    where?: CodeSecureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeSecures to fetch.
     */
    orderBy?: Enumerable<CodeSecureOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodeSecures.
     */
    cursor?: CodeSecureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeSecures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeSecures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodeSecures.
     */
    distinct?: Enumerable<CodeSecureScalarFieldEnum>
  }

  /**
   * CodeSecure findFirst
   */
  export interface CodeSecureFindFirstArgs extends CodeSecureFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CodeSecure findFirstOrThrow
   */
  export type CodeSecureFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CodeSecure
     */
    select?: CodeSecureSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CodeSecureInclude | null
    /**
     * Filter, which CodeSecure to fetch.
     */
    where?: CodeSecureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeSecures to fetch.
     */
    orderBy?: Enumerable<CodeSecureOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodeSecures.
     */
    cursor?: CodeSecureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeSecures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeSecures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodeSecures.
     */
    distinct?: Enumerable<CodeSecureScalarFieldEnum>
  }


  /**
   * CodeSecure findMany
   */
  export type CodeSecureFindManyArgs = {
    /**
     * Select specific fields to fetch from the CodeSecure
     */
    select?: CodeSecureSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CodeSecureInclude | null
    /**
     * Filter, which CodeSecures to fetch.
     */
    where?: CodeSecureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeSecures to fetch.
     */
    orderBy?: Enumerable<CodeSecureOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CodeSecures.
     */
    cursor?: CodeSecureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeSecures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeSecures.
     */
    skip?: number
    distinct?: Enumerable<CodeSecureScalarFieldEnum>
  }


  /**
   * CodeSecure create
   */
  export type CodeSecureCreateArgs = {
    /**
     * Select specific fields to fetch from the CodeSecure
     */
    select?: CodeSecureSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CodeSecureInclude | null
    /**
     * The data needed to create a CodeSecure.
     */
    data: XOR<CodeSecureCreateInput, CodeSecureUncheckedCreateInput>
  }


  /**
   * CodeSecure createMany
   */
  export type CodeSecureCreateManyArgs = {
    /**
     * The data used to create many CodeSecures.
     */
    data: Enumerable<CodeSecureCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * CodeSecure update
   */
  export type CodeSecureUpdateArgs = {
    /**
     * Select specific fields to fetch from the CodeSecure
     */
    select?: CodeSecureSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CodeSecureInclude | null
    /**
     * The data needed to update a CodeSecure.
     */
    data: XOR<CodeSecureUpdateInput, CodeSecureUncheckedUpdateInput>
    /**
     * Choose, which CodeSecure to update.
     */
    where: CodeSecureWhereUniqueInput
  }


  /**
   * CodeSecure updateMany
   */
  export type CodeSecureUpdateManyArgs = {
    /**
     * The data used to update CodeSecures.
     */
    data: XOR<CodeSecureUpdateManyMutationInput, CodeSecureUncheckedUpdateManyInput>
    /**
     * Filter which CodeSecures to update
     */
    where?: CodeSecureWhereInput
  }


  /**
   * CodeSecure upsert
   */
  export type CodeSecureUpsertArgs = {
    /**
     * Select specific fields to fetch from the CodeSecure
     */
    select?: CodeSecureSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CodeSecureInclude | null
    /**
     * The filter to search for the CodeSecure to update in case it exists.
     */
    where: CodeSecureWhereUniqueInput
    /**
     * In case the CodeSecure found by the `where` argument doesn't exist, create a new CodeSecure with this data.
     */
    create: XOR<CodeSecureCreateInput, CodeSecureUncheckedCreateInput>
    /**
     * In case the CodeSecure was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CodeSecureUpdateInput, CodeSecureUncheckedUpdateInput>
  }


  /**
   * CodeSecure delete
   */
  export type CodeSecureDeleteArgs = {
    /**
     * Select specific fields to fetch from the CodeSecure
     */
    select?: CodeSecureSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CodeSecureInclude | null
    /**
     * Filter which CodeSecure to delete.
     */
    where: CodeSecureWhereUniqueInput
  }


  /**
   * CodeSecure deleteMany
   */
  export type CodeSecureDeleteManyArgs = {
    /**
     * Filter which CodeSecures to delete
     */
    where?: CodeSecureWhereInput
  }


  /**
   * CodeSecure without action
   */
  export type CodeSecureArgs = {
    /**
     * Select specific fields to fetch from the CodeSecure
     */
    select?: CodeSecureSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CodeSecureInclude | null
  }



  /**
   * Model Apuesta
   */


  export type AggregateApuesta = {
    _count: ApuestaCountAggregateOutputType | null
    _avg: ApuestaAvgAggregateOutputType | null
    _sum: ApuestaSumAggregateOutputType | null
    _min: ApuestaMinAggregateOutputType | null
    _max: ApuestaMaxAggregateOutputType | null
  }

  export type ApuestaAvgAggregateOutputType = {
    id: number | null
    apostado: Decimal | null
    ganado: Decimal | null
    estadoId: number | null
  }

  export type ApuestaSumAggregateOutputType = {
    id: number | null
    apostado: Decimal | null
    ganado: Decimal | null
    estadoId: number | null
  }

  export type ApuestaMinAggregateOutputType = {
    id: number | null
    fecha: Date | null
    apostado: Decimal | null
    ganado: Decimal | null
    estadoId: number | null
    createdAt: Date | null
  }

  export type ApuestaMaxAggregateOutputType = {
    id: number | null
    fecha: Date | null
    apostado: Decimal | null
    ganado: Decimal | null
    estadoId: number | null
    createdAt: Date | null
  }

  export type ApuestaCountAggregateOutputType = {
    id: number
    fecha: number
    apostado: number
    ganado: number
    estadoId: number
    createdAt: number
    _all: number
  }


  export type ApuestaAvgAggregateInputType = {
    id?: true
    apostado?: true
    ganado?: true
    estadoId?: true
  }

  export type ApuestaSumAggregateInputType = {
    id?: true
    apostado?: true
    ganado?: true
    estadoId?: true
  }

  export type ApuestaMinAggregateInputType = {
    id?: true
    fecha?: true
    apostado?: true
    ganado?: true
    estadoId?: true
    createdAt?: true
  }

  export type ApuestaMaxAggregateInputType = {
    id?: true
    fecha?: true
    apostado?: true
    ganado?: true
    estadoId?: true
    createdAt?: true
  }

  export type ApuestaCountAggregateInputType = {
    id?: true
    fecha?: true
    apostado?: true
    ganado?: true
    estadoId?: true
    createdAt?: true
    _all?: true
  }

  export type ApuestaAggregateArgs = {
    /**
     * Filter which Apuesta to aggregate.
     */
    where?: ApuestaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apuestas to fetch.
     */
    orderBy?: Enumerable<ApuestaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApuestaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apuestas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apuestas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Apuestas
    **/
    _count?: true | ApuestaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApuestaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApuestaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApuestaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApuestaMaxAggregateInputType
  }

  export type GetApuestaAggregateType<T extends ApuestaAggregateArgs> = {
        [P in keyof T & keyof AggregateApuesta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApuesta[P]>
      : GetScalarType<T[P], AggregateApuesta[P]>
  }




  export type ApuestaGroupByArgs = {
    where?: ApuestaWhereInput
    orderBy?: Enumerable<ApuestaOrderByWithAggregationInput>
    by: ApuestaScalarFieldEnum[]
    having?: ApuestaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApuestaCountAggregateInputType | true
    _avg?: ApuestaAvgAggregateInputType
    _sum?: ApuestaSumAggregateInputType
    _min?: ApuestaMinAggregateInputType
    _max?: ApuestaMaxAggregateInputType
  }


  export type ApuestaGroupByOutputType = {
    id: number
    fecha: Date
    apostado: Decimal
    ganado: Decimal
    estadoId: number
    createdAt: Date
    _count: ApuestaCountAggregateOutputType | null
    _avg: ApuestaAvgAggregateOutputType | null
    _sum: ApuestaSumAggregateOutputType | null
    _min: ApuestaMinAggregateOutputType | null
    _max: ApuestaMaxAggregateOutputType | null
  }

  type GetApuestaGroupByPayload<T extends ApuestaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ApuestaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApuestaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApuestaGroupByOutputType[P]>
            : GetScalarType<T[P], ApuestaGroupByOutputType[P]>
        }
      >
    >


  export type ApuestaSelect = {
    id?: boolean
    fecha?: boolean
    apostado?: boolean
    ganado?: boolean
    estadoId?: boolean
    createdAt?: boolean
    ApuestaXEstado?: boolean | ApuestaXEstadoArgs
  }


  export type ApuestaInclude = {
    ApuestaXEstado?: boolean | ApuestaXEstadoArgs
  }

  export type ApuestaGetPayload<S extends boolean | null | undefined | ApuestaArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Apuesta :
    S extends undefined ? never :
    S extends { include: any } & (ApuestaArgs | ApuestaFindManyArgs)
    ? Apuesta  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'ApuestaXEstado' ? ApuestaXEstadoGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ApuestaArgs | ApuestaFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'ApuestaXEstado' ? ApuestaXEstadoGetPayload<S['select'][P]> :  P extends keyof Apuesta ? Apuesta[P] : never
  } 
      : Apuesta


  type ApuestaCountArgs = 
    Omit<ApuestaFindManyArgs, 'select' | 'include'> & {
      select?: ApuestaCountAggregateInputType | true
    }

  export interface ApuestaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Apuesta that matches the filter.
     * @param {ApuestaFindUniqueArgs} args - Arguments to find a Apuesta
     * @example
     * // Get one Apuesta
     * const apuesta = await prisma.apuesta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ApuestaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ApuestaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Apuesta'> extends True ? Prisma__ApuestaClient<ApuestaGetPayload<T>> : Prisma__ApuestaClient<ApuestaGetPayload<T> | null, null>

    /**
     * Find one Apuesta that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ApuestaFindUniqueOrThrowArgs} args - Arguments to find a Apuesta
     * @example
     * // Get one Apuesta
     * const apuesta = await prisma.apuesta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ApuestaFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ApuestaFindUniqueOrThrowArgs>
    ): Prisma__ApuestaClient<ApuestaGetPayload<T>>

    /**
     * Find the first Apuesta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApuestaFindFirstArgs} args - Arguments to find a Apuesta
     * @example
     * // Get one Apuesta
     * const apuesta = await prisma.apuesta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ApuestaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ApuestaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Apuesta'> extends True ? Prisma__ApuestaClient<ApuestaGetPayload<T>> : Prisma__ApuestaClient<ApuestaGetPayload<T> | null, null>

    /**
     * Find the first Apuesta that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApuestaFindFirstOrThrowArgs} args - Arguments to find a Apuesta
     * @example
     * // Get one Apuesta
     * const apuesta = await prisma.apuesta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ApuestaFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ApuestaFindFirstOrThrowArgs>
    ): Prisma__ApuestaClient<ApuestaGetPayload<T>>

    /**
     * Find zero or more Apuestas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApuestaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Apuestas
     * const apuestas = await prisma.apuesta.findMany()
     * 
     * // Get first 10 Apuestas
     * const apuestas = await prisma.apuesta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apuestaWithIdOnly = await prisma.apuesta.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ApuestaFindManyArgs>(
      args?: SelectSubset<T, ApuestaFindManyArgs>
    ): Prisma.PrismaPromise<Array<ApuestaGetPayload<T>>>

    /**
     * Create a Apuesta.
     * @param {ApuestaCreateArgs} args - Arguments to create a Apuesta.
     * @example
     * // Create one Apuesta
     * const Apuesta = await prisma.apuesta.create({
     *   data: {
     *     // ... data to create a Apuesta
     *   }
     * })
     * 
    **/
    create<T extends ApuestaCreateArgs>(
      args: SelectSubset<T, ApuestaCreateArgs>
    ): Prisma__ApuestaClient<ApuestaGetPayload<T>>

    /**
     * Create many Apuestas.
     *     @param {ApuestaCreateManyArgs} args - Arguments to create many Apuestas.
     *     @example
     *     // Create many Apuestas
     *     const apuesta = await prisma.apuesta.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ApuestaCreateManyArgs>(
      args?: SelectSubset<T, ApuestaCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Apuesta.
     * @param {ApuestaDeleteArgs} args - Arguments to delete one Apuesta.
     * @example
     * // Delete one Apuesta
     * const Apuesta = await prisma.apuesta.delete({
     *   where: {
     *     // ... filter to delete one Apuesta
     *   }
     * })
     * 
    **/
    delete<T extends ApuestaDeleteArgs>(
      args: SelectSubset<T, ApuestaDeleteArgs>
    ): Prisma__ApuestaClient<ApuestaGetPayload<T>>

    /**
     * Update one Apuesta.
     * @param {ApuestaUpdateArgs} args - Arguments to update one Apuesta.
     * @example
     * // Update one Apuesta
     * const apuesta = await prisma.apuesta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ApuestaUpdateArgs>(
      args: SelectSubset<T, ApuestaUpdateArgs>
    ): Prisma__ApuestaClient<ApuestaGetPayload<T>>

    /**
     * Delete zero or more Apuestas.
     * @param {ApuestaDeleteManyArgs} args - Arguments to filter Apuestas to delete.
     * @example
     * // Delete a few Apuestas
     * const { count } = await prisma.apuesta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ApuestaDeleteManyArgs>(
      args?: SelectSubset<T, ApuestaDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apuestas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApuestaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Apuestas
     * const apuesta = await prisma.apuesta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ApuestaUpdateManyArgs>(
      args: SelectSubset<T, ApuestaUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Apuesta.
     * @param {ApuestaUpsertArgs} args - Arguments to update or create a Apuesta.
     * @example
     * // Update or create a Apuesta
     * const apuesta = await prisma.apuesta.upsert({
     *   create: {
     *     // ... data to create a Apuesta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Apuesta we want to update
     *   }
     * })
    **/
    upsert<T extends ApuestaUpsertArgs>(
      args: SelectSubset<T, ApuestaUpsertArgs>
    ): Prisma__ApuestaClient<ApuestaGetPayload<T>>

    /**
     * Count the number of Apuestas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApuestaCountArgs} args - Arguments to filter Apuestas to count.
     * @example
     * // Count the number of Apuestas
     * const count = await prisma.apuesta.count({
     *   where: {
     *     // ... the filter for the Apuestas we want to count
     *   }
     * })
    **/
    count<T extends ApuestaCountArgs>(
      args?: Subset<T, ApuestaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApuestaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Apuesta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApuestaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApuestaAggregateArgs>(args: Subset<T, ApuestaAggregateArgs>): Prisma.PrismaPromise<GetApuestaAggregateType<T>>

    /**
     * Group by Apuesta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApuestaGroupByArgs} args - Group by arguments.
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
      T extends ApuestaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApuestaGroupByArgs['orderBy'] }
        : { orderBy?: ApuestaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApuestaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApuestaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Apuesta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ApuestaClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    ApuestaXEstado<T extends ApuestaXEstadoArgs= {}>(args?: Subset<T, ApuestaXEstadoArgs>): Prisma__ApuestaXEstadoClient<ApuestaXEstadoGetPayload<T> | Null>;

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
   * Apuesta base type for findUnique actions
   */
  export type ApuestaFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Apuesta
     */
    select?: ApuestaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApuestaInclude | null
    /**
     * Filter, which Apuesta to fetch.
     */
    where: ApuestaWhereUniqueInput
  }

  /**
   * Apuesta findUnique
   */
  export interface ApuestaFindUniqueArgs extends ApuestaFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Apuesta findUniqueOrThrow
   */
  export type ApuestaFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Apuesta
     */
    select?: ApuestaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApuestaInclude | null
    /**
     * Filter, which Apuesta to fetch.
     */
    where: ApuestaWhereUniqueInput
  }


  /**
   * Apuesta base type for findFirst actions
   */
  export type ApuestaFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Apuesta
     */
    select?: ApuestaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApuestaInclude | null
    /**
     * Filter, which Apuesta to fetch.
     */
    where?: ApuestaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apuestas to fetch.
     */
    orderBy?: Enumerable<ApuestaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apuestas.
     */
    cursor?: ApuestaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apuestas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apuestas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apuestas.
     */
    distinct?: Enumerable<ApuestaScalarFieldEnum>
  }

  /**
   * Apuesta findFirst
   */
  export interface ApuestaFindFirstArgs extends ApuestaFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Apuesta findFirstOrThrow
   */
  export type ApuestaFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Apuesta
     */
    select?: ApuestaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApuestaInclude | null
    /**
     * Filter, which Apuesta to fetch.
     */
    where?: ApuestaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apuestas to fetch.
     */
    orderBy?: Enumerable<ApuestaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apuestas.
     */
    cursor?: ApuestaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apuestas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apuestas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apuestas.
     */
    distinct?: Enumerable<ApuestaScalarFieldEnum>
  }


  /**
   * Apuesta findMany
   */
  export type ApuestaFindManyArgs = {
    /**
     * Select specific fields to fetch from the Apuesta
     */
    select?: ApuestaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApuestaInclude | null
    /**
     * Filter, which Apuestas to fetch.
     */
    where?: ApuestaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apuestas to fetch.
     */
    orderBy?: Enumerable<ApuestaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Apuestas.
     */
    cursor?: ApuestaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apuestas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apuestas.
     */
    skip?: number
    distinct?: Enumerable<ApuestaScalarFieldEnum>
  }


  /**
   * Apuesta create
   */
  export type ApuestaCreateArgs = {
    /**
     * Select specific fields to fetch from the Apuesta
     */
    select?: ApuestaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApuestaInclude | null
    /**
     * The data needed to create a Apuesta.
     */
    data: XOR<ApuestaCreateInput, ApuestaUncheckedCreateInput>
  }


  /**
   * Apuesta createMany
   */
  export type ApuestaCreateManyArgs = {
    /**
     * The data used to create many Apuestas.
     */
    data: Enumerable<ApuestaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Apuesta update
   */
  export type ApuestaUpdateArgs = {
    /**
     * Select specific fields to fetch from the Apuesta
     */
    select?: ApuestaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApuestaInclude | null
    /**
     * The data needed to update a Apuesta.
     */
    data: XOR<ApuestaUpdateInput, ApuestaUncheckedUpdateInput>
    /**
     * Choose, which Apuesta to update.
     */
    where: ApuestaWhereUniqueInput
  }


  /**
   * Apuesta updateMany
   */
  export type ApuestaUpdateManyArgs = {
    /**
     * The data used to update Apuestas.
     */
    data: XOR<ApuestaUpdateManyMutationInput, ApuestaUncheckedUpdateManyInput>
    /**
     * Filter which Apuestas to update
     */
    where?: ApuestaWhereInput
  }


  /**
   * Apuesta upsert
   */
  export type ApuestaUpsertArgs = {
    /**
     * Select specific fields to fetch from the Apuesta
     */
    select?: ApuestaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApuestaInclude | null
    /**
     * The filter to search for the Apuesta to update in case it exists.
     */
    where: ApuestaWhereUniqueInput
    /**
     * In case the Apuesta found by the `where` argument doesn't exist, create a new Apuesta with this data.
     */
    create: XOR<ApuestaCreateInput, ApuestaUncheckedCreateInput>
    /**
     * In case the Apuesta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApuestaUpdateInput, ApuestaUncheckedUpdateInput>
  }


  /**
   * Apuesta delete
   */
  export type ApuestaDeleteArgs = {
    /**
     * Select specific fields to fetch from the Apuesta
     */
    select?: ApuestaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApuestaInclude | null
    /**
     * Filter which Apuesta to delete.
     */
    where: ApuestaWhereUniqueInput
  }


  /**
   * Apuesta deleteMany
   */
  export type ApuestaDeleteManyArgs = {
    /**
     * Filter which Apuestas to delete
     */
    where?: ApuestaWhereInput
  }


  /**
   * Apuesta without action
   */
  export type ApuestaArgs = {
    /**
     * Select specific fields to fetch from the Apuesta
     */
    select?: ApuestaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApuestaInclude | null
  }



  /**
   * Model ApuestaXEstado
   */


  export type AggregateApuestaXEstado = {
    _count: ApuestaXEstadoCountAggregateOutputType | null
    _avg: ApuestaXEstadoAvgAggregateOutputType | null
    _sum: ApuestaXEstadoSumAggregateOutputType | null
    _min: ApuestaXEstadoMinAggregateOutputType | null
    _max: ApuestaXEstadoMaxAggregateOutputType | null
  }

  export type ApuestaXEstadoAvgAggregateOutputType = {
    id: number | null
  }

  export type ApuestaXEstadoSumAggregateOutputType = {
    id: number | null
  }

  export type ApuestaXEstadoMinAggregateOutputType = {
    id: number | null
    descripcion: string | null
  }

  export type ApuestaXEstadoMaxAggregateOutputType = {
    id: number | null
    descripcion: string | null
  }

  export type ApuestaXEstadoCountAggregateOutputType = {
    id: number
    descripcion: number
    _all: number
  }


  export type ApuestaXEstadoAvgAggregateInputType = {
    id?: true
  }

  export type ApuestaXEstadoSumAggregateInputType = {
    id?: true
  }

  export type ApuestaXEstadoMinAggregateInputType = {
    id?: true
    descripcion?: true
  }

  export type ApuestaXEstadoMaxAggregateInputType = {
    id?: true
    descripcion?: true
  }

  export type ApuestaXEstadoCountAggregateInputType = {
    id?: true
    descripcion?: true
    _all?: true
  }

  export type ApuestaXEstadoAggregateArgs = {
    /**
     * Filter which ApuestaXEstado to aggregate.
     */
    where?: ApuestaXEstadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApuestaXEstados to fetch.
     */
    orderBy?: Enumerable<ApuestaXEstadoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApuestaXEstadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApuestaXEstados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApuestaXEstados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApuestaXEstados
    **/
    _count?: true | ApuestaXEstadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApuestaXEstadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApuestaXEstadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApuestaXEstadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApuestaXEstadoMaxAggregateInputType
  }

  export type GetApuestaXEstadoAggregateType<T extends ApuestaXEstadoAggregateArgs> = {
        [P in keyof T & keyof AggregateApuestaXEstado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApuestaXEstado[P]>
      : GetScalarType<T[P], AggregateApuestaXEstado[P]>
  }




  export type ApuestaXEstadoGroupByArgs = {
    where?: ApuestaXEstadoWhereInput
    orderBy?: Enumerable<ApuestaXEstadoOrderByWithAggregationInput>
    by: ApuestaXEstadoScalarFieldEnum[]
    having?: ApuestaXEstadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApuestaXEstadoCountAggregateInputType | true
    _avg?: ApuestaXEstadoAvgAggregateInputType
    _sum?: ApuestaXEstadoSumAggregateInputType
    _min?: ApuestaXEstadoMinAggregateInputType
    _max?: ApuestaXEstadoMaxAggregateInputType
  }


  export type ApuestaXEstadoGroupByOutputType = {
    id: number
    descripcion: string
    _count: ApuestaXEstadoCountAggregateOutputType | null
    _avg: ApuestaXEstadoAvgAggregateOutputType | null
    _sum: ApuestaXEstadoSumAggregateOutputType | null
    _min: ApuestaXEstadoMinAggregateOutputType | null
    _max: ApuestaXEstadoMaxAggregateOutputType | null
  }

  type GetApuestaXEstadoGroupByPayload<T extends ApuestaXEstadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ApuestaXEstadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApuestaXEstadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApuestaXEstadoGroupByOutputType[P]>
            : GetScalarType<T[P], ApuestaXEstadoGroupByOutputType[P]>
        }
      >
    >


  export type ApuestaXEstadoSelect = {
    id?: boolean
    descripcion?: boolean
    Apuesta?: boolean | ApuestaXEstado$ApuestaArgs
    _count?: boolean | ApuestaXEstadoCountOutputTypeArgs
  }


  export type ApuestaXEstadoInclude = {
    Apuesta?: boolean | ApuestaXEstado$ApuestaArgs
    _count?: boolean | ApuestaXEstadoCountOutputTypeArgs
  }

  export type ApuestaXEstadoGetPayload<S extends boolean | null | undefined | ApuestaXEstadoArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ApuestaXEstado :
    S extends undefined ? never :
    S extends { include: any } & (ApuestaXEstadoArgs | ApuestaXEstadoFindManyArgs)
    ? ApuestaXEstado  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Apuesta' ? Array < ApuestaGetPayload<S['include'][P]>>  :
        P extends '_count' ? ApuestaXEstadoCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ApuestaXEstadoArgs | ApuestaXEstadoFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Apuesta' ? Array < ApuestaGetPayload<S['select'][P]>>  :
        P extends '_count' ? ApuestaXEstadoCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof ApuestaXEstado ? ApuestaXEstado[P] : never
  } 
      : ApuestaXEstado


  type ApuestaXEstadoCountArgs = 
    Omit<ApuestaXEstadoFindManyArgs, 'select' | 'include'> & {
      select?: ApuestaXEstadoCountAggregateInputType | true
    }

  export interface ApuestaXEstadoDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one ApuestaXEstado that matches the filter.
     * @param {ApuestaXEstadoFindUniqueArgs} args - Arguments to find a ApuestaXEstado
     * @example
     * // Get one ApuestaXEstado
     * const apuestaXEstado = await prisma.apuestaXEstado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ApuestaXEstadoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ApuestaXEstadoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ApuestaXEstado'> extends True ? Prisma__ApuestaXEstadoClient<ApuestaXEstadoGetPayload<T>> : Prisma__ApuestaXEstadoClient<ApuestaXEstadoGetPayload<T> | null, null>

    /**
     * Find one ApuestaXEstado that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ApuestaXEstadoFindUniqueOrThrowArgs} args - Arguments to find a ApuestaXEstado
     * @example
     * // Get one ApuestaXEstado
     * const apuestaXEstado = await prisma.apuestaXEstado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ApuestaXEstadoFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ApuestaXEstadoFindUniqueOrThrowArgs>
    ): Prisma__ApuestaXEstadoClient<ApuestaXEstadoGetPayload<T>>

    /**
     * Find the first ApuestaXEstado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApuestaXEstadoFindFirstArgs} args - Arguments to find a ApuestaXEstado
     * @example
     * // Get one ApuestaXEstado
     * const apuestaXEstado = await prisma.apuestaXEstado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ApuestaXEstadoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ApuestaXEstadoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ApuestaXEstado'> extends True ? Prisma__ApuestaXEstadoClient<ApuestaXEstadoGetPayload<T>> : Prisma__ApuestaXEstadoClient<ApuestaXEstadoGetPayload<T> | null, null>

    /**
     * Find the first ApuestaXEstado that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApuestaXEstadoFindFirstOrThrowArgs} args - Arguments to find a ApuestaXEstado
     * @example
     * // Get one ApuestaXEstado
     * const apuestaXEstado = await prisma.apuestaXEstado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ApuestaXEstadoFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ApuestaXEstadoFindFirstOrThrowArgs>
    ): Prisma__ApuestaXEstadoClient<ApuestaXEstadoGetPayload<T>>

    /**
     * Find zero or more ApuestaXEstados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApuestaXEstadoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApuestaXEstados
     * const apuestaXEstados = await prisma.apuestaXEstado.findMany()
     * 
     * // Get first 10 ApuestaXEstados
     * const apuestaXEstados = await prisma.apuestaXEstado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apuestaXEstadoWithIdOnly = await prisma.apuestaXEstado.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ApuestaXEstadoFindManyArgs>(
      args?: SelectSubset<T, ApuestaXEstadoFindManyArgs>
    ): Prisma.PrismaPromise<Array<ApuestaXEstadoGetPayload<T>>>

    /**
     * Create a ApuestaXEstado.
     * @param {ApuestaXEstadoCreateArgs} args - Arguments to create a ApuestaXEstado.
     * @example
     * // Create one ApuestaXEstado
     * const ApuestaXEstado = await prisma.apuestaXEstado.create({
     *   data: {
     *     // ... data to create a ApuestaXEstado
     *   }
     * })
     * 
    **/
    create<T extends ApuestaXEstadoCreateArgs>(
      args: SelectSubset<T, ApuestaXEstadoCreateArgs>
    ): Prisma__ApuestaXEstadoClient<ApuestaXEstadoGetPayload<T>>

    /**
     * Create many ApuestaXEstados.
     *     @param {ApuestaXEstadoCreateManyArgs} args - Arguments to create many ApuestaXEstados.
     *     @example
     *     // Create many ApuestaXEstados
     *     const apuestaXEstado = await prisma.apuestaXEstado.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ApuestaXEstadoCreateManyArgs>(
      args?: SelectSubset<T, ApuestaXEstadoCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ApuestaXEstado.
     * @param {ApuestaXEstadoDeleteArgs} args - Arguments to delete one ApuestaXEstado.
     * @example
     * // Delete one ApuestaXEstado
     * const ApuestaXEstado = await prisma.apuestaXEstado.delete({
     *   where: {
     *     // ... filter to delete one ApuestaXEstado
     *   }
     * })
     * 
    **/
    delete<T extends ApuestaXEstadoDeleteArgs>(
      args: SelectSubset<T, ApuestaXEstadoDeleteArgs>
    ): Prisma__ApuestaXEstadoClient<ApuestaXEstadoGetPayload<T>>

    /**
     * Update one ApuestaXEstado.
     * @param {ApuestaXEstadoUpdateArgs} args - Arguments to update one ApuestaXEstado.
     * @example
     * // Update one ApuestaXEstado
     * const apuestaXEstado = await prisma.apuestaXEstado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ApuestaXEstadoUpdateArgs>(
      args: SelectSubset<T, ApuestaXEstadoUpdateArgs>
    ): Prisma__ApuestaXEstadoClient<ApuestaXEstadoGetPayload<T>>

    /**
     * Delete zero or more ApuestaXEstados.
     * @param {ApuestaXEstadoDeleteManyArgs} args - Arguments to filter ApuestaXEstados to delete.
     * @example
     * // Delete a few ApuestaXEstados
     * const { count } = await prisma.apuestaXEstado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ApuestaXEstadoDeleteManyArgs>(
      args?: SelectSubset<T, ApuestaXEstadoDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApuestaXEstados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApuestaXEstadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApuestaXEstados
     * const apuestaXEstado = await prisma.apuestaXEstado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ApuestaXEstadoUpdateManyArgs>(
      args: SelectSubset<T, ApuestaXEstadoUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ApuestaXEstado.
     * @param {ApuestaXEstadoUpsertArgs} args - Arguments to update or create a ApuestaXEstado.
     * @example
     * // Update or create a ApuestaXEstado
     * const apuestaXEstado = await prisma.apuestaXEstado.upsert({
     *   create: {
     *     // ... data to create a ApuestaXEstado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApuestaXEstado we want to update
     *   }
     * })
    **/
    upsert<T extends ApuestaXEstadoUpsertArgs>(
      args: SelectSubset<T, ApuestaXEstadoUpsertArgs>
    ): Prisma__ApuestaXEstadoClient<ApuestaXEstadoGetPayload<T>>

    /**
     * Count the number of ApuestaXEstados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApuestaXEstadoCountArgs} args - Arguments to filter ApuestaXEstados to count.
     * @example
     * // Count the number of ApuestaXEstados
     * const count = await prisma.apuestaXEstado.count({
     *   where: {
     *     // ... the filter for the ApuestaXEstados we want to count
     *   }
     * })
    **/
    count<T extends ApuestaXEstadoCountArgs>(
      args?: Subset<T, ApuestaXEstadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApuestaXEstadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApuestaXEstado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApuestaXEstadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApuestaXEstadoAggregateArgs>(args: Subset<T, ApuestaXEstadoAggregateArgs>): Prisma.PrismaPromise<GetApuestaXEstadoAggregateType<T>>

    /**
     * Group by ApuestaXEstado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApuestaXEstadoGroupByArgs} args - Group by arguments.
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
      T extends ApuestaXEstadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApuestaXEstadoGroupByArgs['orderBy'] }
        : { orderBy?: ApuestaXEstadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApuestaXEstadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApuestaXEstadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ApuestaXEstado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ApuestaXEstadoClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    Apuesta<T extends ApuestaXEstado$ApuestaArgs= {}>(args?: Subset<T, ApuestaXEstado$ApuestaArgs>): Prisma.PrismaPromise<Array<ApuestaGetPayload<T>>| Null>;

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
   * ApuestaXEstado base type for findUnique actions
   */
  export type ApuestaXEstadoFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ApuestaXEstado
     */
    select?: ApuestaXEstadoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApuestaXEstadoInclude | null
    /**
     * Filter, which ApuestaXEstado to fetch.
     */
    where: ApuestaXEstadoWhereUniqueInput
  }

  /**
   * ApuestaXEstado findUnique
   */
  export interface ApuestaXEstadoFindUniqueArgs extends ApuestaXEstadoFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ApuestaXEstado findUniqueOrThrow
   */
  export type ApuestaXEstadoFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ApuestaXEstado
     */
    select?: ApuestaXEstadoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApuestaXEstadoInclude | null
    /**
     * Filter, which ApuestaXEstado to fetch.
     */
    where: ApuestaXEstadoWhereUniqueInput
  }


  /**
   * ApuestaXEstado base type for findFirst actions
   */
  export type ApuestaXEstadoFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ApuestaXEstado
     */
    select?: ApuestaXEstadoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApuestaXEstadoInclude | null
    /**
     * Filter, which ApuestaXEstado to fetch.
     */
    where?: ApuestaXEstadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApuestaXEstados to fetch.
     */
    orderBy?: Enumerable<ApuestaXEstadoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApuestaXEstados.
     */
    cursor?: ApuestaXEstadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApuestaXEstados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApuestaXEstados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApuestaXEstados.
     */
    distinct?: Enumerable<ApuestaXEstadoScalarFieldEnum>
  }

  /**
   * ApuestaXEstado findFirst
   */
  export interface ApuestaXEstadoFindFirstArgs extends ApuestaXEstadoFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ApuestaXEstado findFirstOrThrow
   */
  export type ApuestaXEstadoFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ApuestaXEstado
     */
    select?: ApuestaXEstadoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApuestaXEstadoInclude | null
    /**
     * Filter, which ApuestaXEstado to fetch.
     */
    where?: ApuestaXEstadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApuestaXEstados to fetch.
     */
    orderBy?: Enumerable<ApuestaXEstadoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApuestaXEstados.
     */
    cursor?: ApuestaXEstadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApuestaXEstados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApuestaXEstados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApuestaXEstados.
     */
    distinct?: Enumerable<ApuestaXEstadoScalarFieldEnum>
  }


  /**
   * ApuestaXEstado findMany
   */
  export type ApuestaXEstadoFindManyArgs = {
    /**
     * Select specific fields to fetch from the ApuestaXEstado
     */
    select?: ApuestaXEstadoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApuestaXEstadoInclude | null
    /**
     * Filter, which ApuestaXEstados to fetch.
     */
    where?: ApuestaXEstadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApuestaXEstados to fetch.
     */
    orderBy?: Enumerable<ApuestaXEstadoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApuestaXEstados.
     */
    cursor?: ApuestaXEstadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApuestaXEstados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApuestaXEstados.
     */
    skip?: number
    distinct?: Enumerable<ApuestaXEstadoScalarFieldEnum>
  }


  /**
   * ApuestaXEstado create
   */
  export type ApuestaXEstadoCreateArgs = {
    /**
     * Select specific fields to fetch from the ApuestaXEstado
     */
    select?: ApuestaXEstadoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApuestaXEstadoInclude | null
    /**
     * The data needed to create a ApuestaXEstado.
     */
    data: XOR<ApuestaXEstadoCreateInput, ApuestaXEstadoUncheckedCreateInput>
  }


  /**
   * ApuestaXEstado createMany
   */
  export type ApuestaXEstadoCreateManyArgs = {
    /**
     * The data used to create many ApuestaXEstados.
     */
    data: Enumerable<ApuestaXEstadoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ApuestaXEstado update
   */
  export type ApuestaXEstadoUpdateArgs = {
    /**
     * Select specific fields to fetch from the ApuestaXEstado
     */
    select?: ApuestaXEstadoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApuestaXEstadoInclude | null
    /**
     * The data needed to update a ApuestaXEstado.
     */
    data: XOR<ApuestaXEstadoUpdateInput, ApuestaXEstadoUncheckedUpdateInput>
    /**
     * Choose, which ApuestaXEstado to update.
     */
    where: ApuestaXEstadoWhereUniqueInput
  }


  /**
   * ApuestaXEstado updateMany
   */
  export type ApuestaXEstadoUpdateManyArgs = {
    /**
     * The data used to update ApuestaXEstados.
     */
    data: XOR<ApuestaXEstadoUpdateManyMutationInput, ApuestaXEstadoUncheckedUpdateManyInput>
    /**
     * Filter which ApuestaXEstados to update
     */
    where?: ApuestaXEstadoWhereInput
  }


  /**
   * ApuestaXEstado upsert
   */
  export type ApuestaXEstadoUpsertArgs = {
    /**
     * Select specific fields to fetch from the ApuestaXEstado
     */
    select?: ApuestaXEstadoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApuestaXEstadoInclude | null
    /**
     * The filter to search for the ApuestaXEstado to update in case it exists.
     */
    where: ApuestaXEstadoWhereUniqueInput
    /**
     * In case the ApuestaXEstado found by the `where` argument doesn't exist, create a new ApuestaXEstado with this data.
     */
    create: XOR<ApuestaXEstadoCreateInput, ApuestaXEstadoUncheckedCreateInput>
    /**
     * In case the ApuestaXEstado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApuestaXEstadoUpdateInput, ApuestaXEstadoUncheckedUpdateInput>
  }


  /**
   * ApuestaXEstado delete
   */
  export type ApuestaXEstadoDeleteArgs = {
    /**
     * Select specific fields to fetch from the ApuestaXEstado
     */
    select?: ApuestaXEstadoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApuestaXEstadoInclude | null
    /**
     * Filter which ApuestaXEstado to delete.
     */
    where: ApuestaXEstadoWhereUniqueInput
  }


  /**
   * ApuestaXEstado deleteMany
   */
  export type ApuestaXEstadoDeleteManyArgs = {
    /**
     * Filter which ApuestaXEstados to delete
     */
    where?: ApuestaXEstadoWhereInput
  }


  /**
   * ApuestaXEstado.Apuesta
   */
  export type ApuestaXEstado$ApuestaArgs = {
    /**
     * Select specific fields to fetch from the Apuesta
     */
    select?: ApuestaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApuestaInclude | null
    where?: ApuestaWhereInput
    orderBy?: Enumerable<ApuestaOrderByWithRelationInput>
    cursor?: ApuestaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ApuestaScalarFieldEnum>
  }


  /**
   * ApuestaXEstado without action
   */
  export type ApuestaXEstadoArgs = {
    /**
     * Select specific fields to fetch from the ApuestaXEstado
     */
    select?: ApuestaXEstadoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApuestaXEstadoInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ApuestaScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    apostado: 'apostado',
    ganado: 'ganado',
    estadoId: 'estadoId',
    createdAt: 'createdAt'
  };

  export type ApuestaScalarFieldEnum = (typeof ApuestaScalarFieldEnum)[keyof typeof ApuestaScalarFieldEnum]


  export const ApuestaXEstadoScalarFieldEnum: {
    id: 'id',
    descripcion: 'descripcion'
  };

  export type ApuestaXEstadoScalarFieldEnum = (typeof ApuestaXEstadoScalarFieldEnum)[keyof typeof ApuestaXEstadoScalarFieldEnum]


  export const CodeSecureScalarFieldEnum: {
    code: 'code',
    type: 'type',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type CodeSecureScalarFieldEnum = (typeof CodeSecureScalarFieldEnum)[keyof typeof CodeSecureScalarFieldEnum]


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


  export const UserXBizumScalarFieldEnum: {
    id: 'id',
    importe: 'importe',
    userId: 'userId',
    movimientoId: 'movimientoId',
    pendiente: 'pendiente',
    createdAt: 'createdAt'
  };

  export type UserXBizumScalarFieldEnum = (typeof UserXBizumScalarFieldEnum)[keyof typeof UserXBizumScalarFieldEnum]


  export const UserXEstadoScalarFieldEnum: {
    id: 'id',
    descripcion: 'descripcion'
  };

  export type UserXEstadoScalarFieldEnum = (typeof UserXEstadoScalarFieldEnum)[keyof typeof UserXEstadoScalarFieldEnum]


  export const UserXMovimientoScalarFieldEnum: {
    id: 'id',
    importe: 'importe',
    userId: 'userId',
    tipoId: 'tipoId',
    createdAt: 'createdAt'
  };

  export type UserXMovimientoScalarFieldEnum = (typeof UserXMovimientoScalarFieldEnum)[keyof typeof UserXMovimientoScalarFieldEnum]


  export const UserXMovimientoXTipoScalarFieldEnum: {
    id: 'id',
    descripcion: 'descripcion'
  };

  export type UserXMovimientoXTipoScalarFieldEnum = (typeof UserXMovimientoXTipoScalarFieldEnum)[keyof typeof UserXMovimientoXTipoScalarFieldEnum]


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
    CodeSecure?: CodeSecureListRelationFilter
    UserXBizum?: UserXBizumListRelationFilter
    UserXMovimiento?: UserXMovimientoListRelationFilter
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
    CodeSecure?: CodeSecureOrderByRelationAggregateInput
    UserXBizum?: UserXBizumOrderByRelationAggregateInput
    UserXMovimiento?: UserXMovimientoOrderByRelationAggregateInput
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

  export type UserXBizumWhereInput = {
    AND?: Enumerable<UserXBizumWhereInput>
    OR?: Enumerable<UserXBizumWhereInput>
    NOT?: Enumerable<UserXBizumWhereInput>
    id?: IntFilter | number
    importe?: DecimalFilter | Decimal | DecimalJsLike | number | string
    userId?: IntFilter | number
    movimientoId?: IntFilter | number
    pendiente?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    User?: XOR<UserRelationFilter, UserWhereInput>
    UserXMovimiento?: XOR<UserXMovimientoRelationFilter, UserXMovimientoWhereInput>
  }

  export type UserXBizumOrderByWithRelationInput = {
    id?: SortOrder
    importe?: SortOrder
    userId?: SortOrder
    movimientoId?: SortOrder
    pendiente?: SortOrder
    createdAt?: SortOrder
    User?: UserOrderByWithRelationInput
    UserXMovimiento?: UserXMovimientoOrderByWithRelationInput
  }

  export type UserXBizumWhereUniqueInput = {
    id?: number
  }

  export type UserXBizumOrderByWithAggregationInput = {
    id?: SortOrder
    importe?: SortOrder
    userId?: SortOrder
    movimientoId?: SortOrder
    pendiente?: SortOrder
    createdAt?: SortOrder
    _count?: UserXBizumCountOrderByAggregateInput
    _avg?: UserXBizumAvgOrderByAggregateInput
    _max?: UserXBizumMaxOrderByAggregateInput
    _min?: UserXBizumMinOrderByAggregateInput
    _sum?: UserXBizumSumOrderByAggregateInput
  }

  export type UserXBizumScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserXBizumScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserXBizumScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserXBizumScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    importe?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    userId?: IntWithAggregatesFilter | number
    movimientoId?: IntWithAggregatesFilter | number
    pendiente?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserXMovimientoWhereInput = {
    AND?: Enumerable<UserXMovimientoWhereInput>
    OR?: Enumerable<UserXMovimientoWhereInput>
    NOT?: Enumerable<UserXMovimientoWhereInput>
    id?: IntFilter | number
    importe?: DecimalFilter | Decimal | DecimalJsLike | number | string
    userId?: IntFilter | number
    tipoId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    User?: XOR<UserRelationFilter, UserWhereInput>
    UserXMovimientoXTipo?: XOR<UserXMovimientoXTipoRelationFilter, UserXMovimientoXTipoWhereInput>
    UserXBizum?: UserXBizumListRelationFilter
  }

  export type UserXMovimientoOrderByWithRelationInput = {
    id?: SortOrder
    importe?: SortOrder
    userId?: SortOrder
    tipoId?: SortOrder
    createdAt?: SortOrder
    User?: UserOrderByWithRelationInput
    UserXMovimientoXTipo?: UserXMovimientoXTipoOrderByWithRelationInput
    UserXBizum?: UserXBizumOrderByRelationAggregateInput
  }

  export type UserXMovimientoWhereUniqueInput = {
    id?: number
  }

  export type UserXMovimientoOrderByWithAggregationInput = {
    id?: SortOrder
    importe?: SortOrder
    userId?: SortOrder
    tipoId?: SortOrder
    createdAt?: SortOrder
    _count?: UserXMovimientoCountOrderByAggregateInput
    _avg?: UserXMovimientoAvgOrderByAggregateInput
    _max?: UserXMovimientoMaxOrderByAggregateInput
    _min?: UserXMovimientoMinOrderByAggregateInput
    _sum?: UserXMovimientoSumOrderByAggregateInput
  }

  export type UserXMovimientoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserXMovimientoScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserXMovimientoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserXMovimientoScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    importe?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    userId?: IntWithAggregatesFilter | number
    tipoId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserXMovimientoXTipoWhereInput = {
    AND?: Enumerable<UserXMovimientoXTipoWhereInput>
    OR?: Enumerable<UserXMovimientoXTipoWhereInput>
    NOT?: Enumerable<UserXMovimientoXTipoWhereInput>
    id?: IntFilter | number
    descripcion?: StringFilter | string
    UserXMovimiento?: UserXMovimientoListRelationFilter
  }

  export type UserXMovimientoXTipoOrderByWithRelationInput = {
    id?: SortOrder
    descripcion?: SortOrder
    UserXMovimiento?: UserXMovimientoOrderByRelationAggregateInput
  }

  export type UserXMovimientoXTipoWhereUniqueInput = {
    id?: number
    descripcion?: string
  }

  export type UserXMovimientoXTipoOrderByWithAggregationInput = {
    id?: SortOrder
    descripcion?: SortOrder
    _count?: UserXMovimientoXTipoCountOrderByAggregateInput
    _avg?: UserXMovimientoXTipoAvgOrderByAggregateInput
    _max?: UserXMovimientoXTipoMaxOrderByAggregateInput
    _min?: UserXMovimientoXTipoMinOrderByAggregateInput
    _sum?: UserXMovimientoXTipoSumOrderByAggregateInput
  }

  export type UserXMovimientoXTipoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserXMovimientoXTipoScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserXMovimientoXTipoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserXMovimientoXTipoScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    descripcion?: StringWithAggregatesFilter | string
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

  export type CodeSecureWhereInput = {
    AND?: Enumerable<CodeSecureWhereInput>
    OR?: Enumerable<CodeSecureWhereInput>
    NOT?: Enumerable<CodeSecureWhereInput>
    code?: UuidFilter | string
    type?: IntFilter | number
    userId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type CodeSecureOrderByWithRelationInput = {
    code?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type CodeSecureWhereUniqueInput = {
    code?: string
  }

  export type CodeSecureOrderByWithAggregationInput = {
    code?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: CodeSecureCountOrderByAggregateInput
    _avg?: CodeSecureAvgOrderByAggregateInput
    _max?: CodeSecureMaxOrderByAggregateInput
    _min?: CodeSecureMinOrderByAggregateInput
    _sum?: CodeSecureSumOrderByAggregateInput
  }

  export type CodeSecureScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CodeSecureScalarWhereWithAggregatesInput>
    OR?: Enumerable<CodeSecureScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CodeSecureScalarWhereWithAggregatesInput>
    code?: UuidWithAggregatesFilter | string
    type?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ApuestaWhereInput = {
    AND?: Enumerable<ApuestaWhereInput>
    OR?: Enumerable<ApuestaWhereInput>
    NOT?: Enumerable<ApuestaWhereInput>
    id?: IntFilter | number
    fecha?: DateTimeFilter | Date | string
    apostado?: DecimalFilter | Decimal | DecimalJsLike | number | string
    ganado?: DecimalFilter | Decimal | DecimalJsLike | number | string
    estadoId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    ApuestaXEstado?: XOR<ApuestaXEstadoRelationFilter, ApuestaXEstadoWhereInput>
  }

  export type ApuestaOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    apostado?: SortOrder
    ganado?: SortOrder
    estadoId?: SortOrder
    createdAt?: SortOrder
    ApuestaXEstado?: ApuestaXEstadoOrderByWithRelationInput
  }

  export type ApuestaWhereUniqueInput = {
    id?: number
  }

  export type ApuestaOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    apostado?: SortOrder
    ganado?: SortOrder
    estadoId?: SortOrder
    createdAt?: SortOrder
    _count?: ApuestaCountOrderByAggregateInput
    _avg?: ApuestaAvgOrderByAggregateInput
    _max?: ApuestaMaxOrderByAggregateInput
    _min?: ApuestaMinOrderByAggregateInput
    _sum?: ApuestaSumOrderByAggregateInput
  }

  export type ApuestaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ApuestaScalarWhereWithAggregatesInput>
    OR?: Enumerable<ApuestaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ApuestaScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    fecha?: DateTimeWithAggregatesFilter | Date | string
    apostado?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    ganado?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    estadoId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ApuestaXEstadoWhereInput = {
    AND?: Enumerable<ApuestaXEstadoWhereInput>
    OR?: Enumerable<ApuestaXEstadoWhereInput>
    NOT?: Enumerable<ApuestaXEstadoWhereInput>
    id?: IntFilter | number
    descripcion?: StringFilter | string
    Apuesta?: ApuestaListRelationFilter
  }

  export type ApuestaXEstadoOrderByWithRelationInput = {
    id?: SortOrder
    descripcion?: SortOrder
    Apuesta?: ApuestaOrderByRelationAggregateInput
  }

  export type ApuestaXEstadoWhereUniqueInput = {
    id?: number
    descripcion?: string
  }

  export type ApuestaXEstadoOrderByWithAggregationInput = {
    id?: SortOrder
    descripcion?: SortOrder
    _count?: ApuestaXEstadoCountOrderByAggregateInput
    _avg?: ApuestaXEstadoAvgOrderByAggregateInput
    _max?: ApuestaXEstadoMaxOrderByAggregateInput
    _min?: ApuestaXEstadoMinOrderByAggregateInput
    _sum?: ApuestaXEstadoSumOrderByAggregateInput
  }

  export type ApuestaXEstadoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ApuestaXEstadoScalarWhereWithAggregatesInput>
    OR?: Enumerable<ApuestaXEstadoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ApuestaXEstadoScalarWhereWithAggregatesInput>
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
    CodeSecure?: CodeSecureCreateNestedManyWithoutUserInput
    UserXBizum?: UserXBizumCreateNestedManyWithoutUserInput
    UserXMovimiento?: UserXMovimientoCreateNestedManyWithoutUserInput
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
    CodeSecure?: CodeSecureUncheckedCreateNestedManyWithoutUserInput
    UserXBizum?: UserXBizumUncheckedCreateNestedManyWithoutUserInput
    UserXMovimiento?: UserXMovimientoUncheckedCreateNestedManyWithoutUserInput
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
    CodeSecure?: CodeSecureUpdateManyWithoutUserNestedInput
    UserXBizum?: UserXBizumUpdateManyWithoutUserNestedInput
    UserXMovimiento?: UserXMovimientoUpdateManyWithoutUserNestedInput
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
    CodeSecure?: CodeSecureUncheckedUpdateManyWithoutUserNestedInput
    UserXBizum?: UserXBizumUncheckedUpdateManyWithoutUserNestedInput
    UserXMovimiento?: UserXMovimientoUncheckedUpdateManyWithoutUserNestedInput
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

  export type UserXBizumCreateInput = {
    importe: Decimal | DecimalJsLike | number | string
    pendiente?: boolean
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutUserXBizumInput
    UserXMovimiento: UserXMovimientoCreateNestedOneWithoutUserXBizumInput
  }

  export type UserXBizumUncheckedCreateInput = {
    id?: number
    importe: Decimal | DecimalJsLike | number | string
    userId: number
    movimientoId: number
    pendiente?: boolean
    createdAt?: Date | string
  }

  export type UserXBizumUpdateInput = {
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pendiente?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutUserXBizumNestedInput
    UserXMovimiento?: UserXMovimientoUpdateOneRequiredWithoutUserXBizumNestedInput
  }

  export type UserXBizumUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: IntFieldUpdateOperationsInput | number
    movimientoId?: IntFieldUpdateOperationsInput | number
    pendiente?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserXBizumCreateManyInput = {
    id?: number
    importe: Decimal | DecimalJsLike | number | string
    userId: number
    movimientoId: number
    pendiente?: boolean
    createdAt?: Date | string
  }

  export type UserXBizumUpdateManyMutationInput = {
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pendiente?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserXBizumUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: IntFieldUpdateOperationsInput | number
    movimientoId?: IntFieldUpdateOperationsInput | number
    pendiente?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserXMovimientoCreateInput = {
    importe: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutUserXMovimientoInput
    UserXMovimientoXTipo: UserXMovimientoXTipoCreateNestedOneWithoutUserXMovimientoInput
    UserXBizum?: UserXBizumCreateNestedManyWithoutUserXMovimientoInput
  }

  export type UserXMovimientoUncheckedCreateInput = {
    id?: number
    importe: Decimal | DecimalJsLike | number | string
    userId: number
    tipoId: number
    createdAt?: Date | string
    UserXBizum?: UserXBizumUncheckedCreateNestedManyWithoutUserXMovimientoInput
  }

  export type UserXMovimientoUpdateInput = {
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutUserXMovimientoNestedInput
    UserXMovimientoXTipo?: UserXMovimientoXTipoUpdateOneRequiredWithoutUserXMovimientoNestedInput
    UserXBizum?: UserXBizumUpdateManyWithoutUserXMovimientoNestedInput
  }

  export type UserXMovimientoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: IntFieldUpdateOperationsInput | number
    tipoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserXBizum?: UserXBizumUncheckedUpdateManyWithoutUserXMovimientoNestedInput
  }

  export type UserXMovimientoCreateManyInput = {
    id?: number
    importe: Decimal | DecimalJsLike | number | string
    userId: number
    tipoId: number
    createdAt?: Date | string
  }

  export type UserXMovimientoUpdateManyMutationInput = {
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserXMovimientoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: IntFieldUpdateOperationsInput | number
    tipoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserXMovimientoXTipoCreateInput = {
    id: number
    descripcion: string
    UserXMovimiento?: UserXMovimientoCreateNestedManyWithoutUserXMovimientoXTipoInput
  }

  export type UserXMovimientoXTipoUncheckedCreateInput = {
    id: number
    descripcion: string
    UserXMovimiento?: UserXMovimientoUncheckedCreateNestedManyWithoutUserXMovimientoXTipoInput
  }

  export type UserXMovimientoXTipoUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    UserXMovimiento?: UserXMovimientoUpdateManyWithoutUserXMovimientoXTipoNestedInput
  }

  export type UserXMovimientoXTipoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    UserXMovimiento?: UserXMovimientoUncheckedUpdateManyWithoutUserXMovimientoXTipoNestedInput
  }

  export type UserXMovimientoXTipoCreateManyInput = {
    id: number
    descripcion: string
  }

  export type UserXMovimientoXTipoUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type UserXMovimientoXTipoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
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

  export type CodeSecureCreateInput = {
    code: string
    type: number
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutCodeSecureInput
  }

  export type CodeSecureUncheckedCreateInput = {
    code: string
    type: number
    userId: number
    createdAt?: Date | string
  }

  export type CodeSecureUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutCodeSecureNestedInput
  }

  export type CodeSecureUncheckedUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeSecureCreateManyInput = {
    code: string
    type: number
    userId: number
    createdAt?: Date | string
  }

  export type CodeSecureUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeSecureUncheckedUpdateManyInput = {
    code?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApuestaCreateInput = {
    fecha: Date | string
    apostado?: Decimal | DecimalJsLike | number | string
    ganado?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    ApuestaXEstado: ApuestaXEstadoCreateNestedOneWithoutApuestaInput
  }

  export type ApuestaUncheckedCreateInput = {
    id?: number
    fecha: Date | string
    apostado?: Decimal | DecimalJsLike | number | string
    ganado?: Decimal | DecimalJsLike | number | string
    estadoId: number
    createdAt?: Date | string
  }

  export type ApuestaUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    apostado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ganado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ApuestaXEstado?: ApuestaXEstadoUpdateOneRequiredWithoutApuestaNestedInput
  }

  export type ApuestaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    apostado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ganado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estadoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApuestaCreateManyInput = {
    id?: number
    fecha: Date | string
    apostado?: Decimal | DecimalJsLike | number | string
    ganado?: Decimal | DecimalJsLike | number | string
    estadoId: number
    createdAt?: Date | string
  }

  export type ApuestaUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    apostado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ganado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApuestaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    apostado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ganado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estadoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApuestaXEstadoCreateInput = {
    id: number
    descripcion: string
    Apuesta?: ApuestaCreateNestedManyWithoutApuestaXEstadoInput
  }

  export type ApuestaXEstadoUncheckedCreateInput = {
    id: number
    descripcion: string
    Apuesta?: ApuestaUncheckedCreateNestedManyWithoutApuestaXEstadoInput
  }

  export type ApuestaXEstadoUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    Apuesta?: ApuestaUpdateManyWithoutApuestaXEstadoNestedInput
  }

  export type ApuestaXEstadoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    Apuesta?: ApuestaUncheckedUpdateManyWithoutApuestaXEstadoNestedInput
  }

  export type ApuestaXEstadoCreateManyInput = {
    id: number
    descripcion: string
  }

  export type ApuestaXEstadoUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type ApuestaXEstadoUncheckedUpdateManyInput = {
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

  export type CodeSecureListRelationFilter = {
    every?: CodeSecureWhereInput
    some?: CodeSecureWhereInput
    none?: CodeSecureWhereInput
  }

  export type UserXBizumListRelationFilter = {
    every?: UserXBizumWhereInput
    some?: UserXBizumWhereInput
    none?: UserXBizumWhereInput
  }

  export type UserXMovimientoListRelationFilter = {
    every?: UserXMovimientoWhereInput
    some?: UserXMovimientoWhereInput
    none?: UserXMovimientoWhereInput
  }

  export type CodeSecureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserXBizumOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserXMovimientoOrderByRelationAggregateInput = {
    _count?: SortOrder
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

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserXMovimientoRelationFilter = {
    is?: UserXMovimientoWhereInput
    isNot?: UserXMovimientoWhereInput
  }

  export type UserXBizumCountOrderByAggregateInput = {
    id?: SortOrder
    importe?: SortOrder
    userId?: SortOrder
    movimientoId?: SortOrder
    pendiente?: SortOrder
    createdAt?: SortOrder
  }

  export type UserXBizumAvgOrderByAggregateInput = {
    id?: SortOrder
    importe?: SortOrder
    userId?: SortOrder
    movimientoId?: SortOrder
  }

  export type UserXBizumMaxOrderByAggregateInput = {
    id?: SortOrder
    importe?: SortOrder
    userId?: SortOrder
    movimientoId?: SortOrder
    pendiente?: SortOrder
    createdAt?: SortOrder
  }

  export type UserXBizumMinOrderByAggregateInput = {
    id?: SortOrder
    importe?: SortOrder
    userId?: SortOrder
    movimientoId?: SortOrder
    pendiente?: SortOrder
    createdAt?: SortOrder
  }

  export type UserXBizumSumOrderByAggregateInput = {
    id?: SortOrder
    importe?: SortOrder
    userId?: SortOrder
    movimientoId?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type UserXMovimientoXTipoRelationFilter = {
    is?: UserXMovimientoXTipoWhereInput
    isNot?: UserXMovimientoXTipoWhereInput
  }

  export type UserXMovimientoCountOrderByAggregateInput = {
    id?: SortOrder
    importe?: SortOrder
    userId?: SortOrder
    tipoId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserXMovimientoAvgOrderByAggregateInput = {
    id?: SortOrder
    importe?: SortOrder
    userId?: SortOrder
    tipoId?: SortOrder
  }

  export type UserXMovimientoMaxOrderByAggregateInput = {
    id?: SortOrder
    importe?: SortOrder
    userId?: SortOrder
    tipoId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserXMovimientoMinOrderByAggregateInput = {
    id?: SortOrder
    importe?: SortOrder
    userId?: SortOrder
    tipoId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserXMovimientoSumOrderByAggregateInput = {
    id?: SortOrder
    importe?: SortOrder
    userId?: SortOrder
    tipoId?: SortOrder
  }

  export type UserXMovimientoXTipoCountOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
  }

  export type UserXMovimientoXTipoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserXMovimientoXTipoMaxOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
  }

  export type UserXMovimientoXTipoMinOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
  }

  export type UserXMovimientoXTipoSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type UuidFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidFilter | string
  }

  export type CodeSecureCountOrderByAggregateInput = {
    code?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type CodeSecureAvgOrderByAggregateInput = {
    type?: SortOrder
    userId?: SortOrder
  }

  export type CodeSecureMaxOrderByAggregateInput = {
    code?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type CodeSecureMinOrderByAggregateInput = {
    code?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type CodeSecureSumOrderByAggregateInput = {
    type?: SortOrder
    userId?: SortOrder
  }

  export type UuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type ApuestaXEstadoRelationFilter = {
    is?: ApuestaXEstadoWhereInput
    isNot?: ApuestaXEstadoWhereInput
  }

  export type ApuestaCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    apostado?: SortOrder
    ganado?: SortOrder
    estadoId?: SortOrder
    createdAt?: SortOrder
  }

  export type ApuestaAvgOrderByAggregateInput = {
    id?: SortOrder
    apostado?: SortOrder
    ganado?: SortOrder
    estadoId?: SortOrder
  }

  export type ApuestaMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    apostado?: SortOrder
    ganado?: SortOrder
    estadoId?: SortOrder
    createdAt?: SortOrder
  }

  export type ApuestaMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    apostado?: SortOrder
    ganado?: SortOrder
    estadoId?: SortOrder
    createdAt?: SortOrder
  }

  export type ApuestaSumOrderByAggregateInput = {
    id?: SortOrder
    apostado?: SortOrder
    ganado?: SortOrder
    estadoId?: SortOrder
  }

  export type ApuestaListRelationFilter = {
    every?: ApuestaWhereInput
    some?: ApuestaWhereInput
    none?: ApuestaWhereInput
  }

  export type ApuestaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApuestaXEstadoCountOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
  }

  export type ApuestaXEstadoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ApuestaXEstadoMaxOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
  }

  export type ApuestaXEstadoMinOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
  }

  export type ApuestaXEstadoSumOrderByAggregateInput = {
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

  export type CodeSecureCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CodeSecureCreateWithoutUserInput>, Enumerable<CodeSecureUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CodeSecureCreateOrConnectWithoutUserInput>
    createMany?: CodeSecureCreateManyUserInputEnvelope
    connect?: Enumerable<CodeSecureWhereUniqueInput>
  }

  export type UserXBizumCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserXBizumCreateWithoutUserInput>, Enumerable<UserXBizumUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserXBizumCreateOrConnectWithoutUserInput>
    createMany?: UserXBizumCreateManyUserInputEnvelope
    connect?: Enumerable<UserXBizumWhereUniqueInput>
  }

  export type UserXMovimientoCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserXMovimientoCreateWithoutUserInput>, Enumerable<UserXMovimientoUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserXMovimientoCreateOrConnectWithoutUserInput>
    createMany?: UserXMovimientoCreateManyUserInputEnvelope
    connect?: Enumerable<UserXMovimientoWhereUniqueInput>
  }

  export type CodeSecureUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CodeSecureCreateWithoutUserInput>, Enumerable<CodeSecureUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CodeSecureCreateOrConnectWithoutUserInput>
    createMany?: CodeSecureCreateManyUserInputEnvelope
    connect?: Enumerable<CodeSecureWhereUniqueInput>
  }

  export type UserXBizumUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserXBizumCreateWithoutUserInput>, Enumerable<UserXBizumUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserXBizumCreateOrConnectWithoutUserInput>
    createMany?: UserXBizumCreateManyUserInputEnvelope
    connect?: Enumerable<UserXBizumWhereUniqueInput>
  }

  export type UserXMovimientoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserXMovimientoCreateWithoutUserInput>, Enumerable<UserXMovimientoUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserXMovimientoCreateOrConnectWithoutUserInput>
    createMany?: UserXMovimientoCreateManyUserInputEnvelope
    connect?: Enumerable<UserXMovimientoWhereUniqueInput>
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

  export type CodeSecureUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<CodeSecureCreateWithoutUserInput>, Enumerable<CodeSecureUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CodeSecureCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CodeSecureUpsertWithWhereUniqueWithoutUserInput>
    createMany?: CodeSecureCreateManyUserInputEnvelope
    set?: Enumerable<CodeSecureWhereUniqueInput>
    disconnect?: Enumerable<CodeSecureWhereUniqueInput>
    delete?: Enumerable<CodeSecureWhereUniqueInput>
    connect?: Enumerable<CodeSecureWhereUniqueInput>
    update?: Enumerable<CodeSecureUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CodeSecureUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CodeSecureScalarWhereInput>
  }

  export type UserXBizumUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<UserXBizumCreateWithoutUserInput>, Enumerable<UserXBizumUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserXBizumCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserXBizumUpsertWithWhereUniqueWithoutUserInput>
    createMany?: UserXBizumCreateManyUserInputEnvelope
    set?: Enumerable<UserXBizumWhereUniqueInput>
    disconnect?: Enumerable<UserXBizumWhereUniqueInput>
    delete?: Enumerable<UserXBizumWhereUniqueInput>
    connect?: Enumerable<UserXBizumWhereUniqueInput>
    update?: Enumerable<UserXBizumUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserXBizumUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserXBizumScalarWhereInput>
  }

  export type UserXMovimientoUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<UserXMovimientoCreateWithoutUserInput>, Enumerable<UserXMovimientoUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserXMovimientoCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserXMovimientoUpsertWithWhereUniqueWithoutUserInput>
    createMany?: UserXMovimientoCreateManyUserInputEnvelope
    set?: Enumerable<UserXMovimientoWhereUniqueInput>
    disconnect?: Enumerable<UserXMovimientoWhereUniqueInput>
    delete?: Enumerable<UserXMovimientoWhereUniqueInput>
    connect?: Enumerable<UserXMovimientoWhereUniqueInput>
    update?: Enumerable<UserXMovimientoUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserXMovimientoUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserXMovimientoScalarWhereInput>
  }

  export type CodeSecureUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<CodeSecureCreateWithoutUserInput>, Enumerable<CodeSecureUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CodeSecureCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CodeSecureUpsertWithWhereUniqueWithoutUserInput>
    createMany?: CodeSecureCreateManyUserInputEnvelope
    set?: Enumerable<CodeSecureWhereUniqueInput>
    disconnect?: Enumerable<CodeSecureWhereUniqueInput>
    delete?: Enumerable<CodeSecureWhereUniqueInput>
    connect?: Enumerable<CodeSecureWhereUniqueInput>
    update?: Enumerable<CodeSecureUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CodeSecureUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CodeSecureScalarWhereInput>
  }

  export type UserXBizumUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<UserXBizumCreateWithoutUserInput>, Enumerable<UserXBizumUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserXBizumCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserXBizumUpsertWithWhereUniqueWithoutUserInput>
    createMany?: UserXBizumCreateManyUserInputEnvelope
    set?: Enumerable<UserXBizumWhereUniqueInput>
    disconnect?: Enumerable<UserXBizumWhereUniqueInput>
    delete?: Enumerable<UserXBizumWhereUniqueInput>
    connect?: Enumerable<UserXBizumWhereUniqueInput>
    update?: Enumerable<UserXBizumUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserXBizumUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserXBizumScalarWhereInput>
  }

  export type UserXMovimientoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<UserXMovimientoCreateWithoutUserInput>, Enumerable<UserXMovimientoUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserXMovimientoCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserXMovimientoUpsertWithWhereUniqueWithoutUserInput>
    createMany?: UserXMovimientoCreateManyUserInputEnvelope
    set?: Enumerable<UserXMovimientoWhereUniqueInput>
    disconnect?: Enumerable<UserXMovimientoWhereUniqueInput>
    delete?: Enumerable<UserXMovimientoWhereUniqueInput>
    connect?: Enumerable<UserXMovimientoWhereUniqueInput>
    update?: Enumerable<UserXMovimientoUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserXMovimientoUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserXMovimientoScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutUserXBizumInput = {
    create?: XOR<UserCreateWithoutUserXBizumInput, UserUncheckedCreateWithoutUserXBizumInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserXBizumInput
    connect?: UserWhereUniqueInput
  }

  export type UserXMovimientoCreateNestedOneWithoutUserXBizumInput = {
    create?: XOR<UserXMovimientoCreateWithoutUserXBizumInput, UserXMovimientoUncheckedCreateWithoutUserXBizumInput>
    connectOrCreate?: UserXMovimientoCreateOrConnectWithoutUserXBizumInput
    connect?: UserXMovimientoWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutUserXBizumNestedInput = {
    create?: XOR<UserCreateWithoutUserXBizumInput, UserUncheckedCreateWithoutUserXBizumInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserXBizumInput
    upsert?: UserUpsertWithoutUserXBizumInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutUserXBizumInput, UserUncheckedUpdateWithoutUserXBizumInput>
  }

  export type UserXMovimientoUpdateOneRequiredWithoutUserXBizumNestedInput = {
    create?: XOR<UserXMovimientoCreateWithoutUserXBizumInput, UserXMovimientoUncheckedCreateWithoutUserXBizumInput>
    connectOrCreate?: UserXMovimientoCreateOrConnectWithoutUserXBizumInput
    upsert?: UserXMovimientoUpsertWithoutUserXBizumInput
    connect?: UserXMovimientoWhereUniqueInput
    update?: XOR<UserXMovimientoUpdateWithoutUserXBizumInput, UserXMovimientoUncheckedUpdateWithoutUserXBizumInput>
  }

  export type UserCreateNestedOneWithoutUserXMovimientoInput = {
    create?: XOR<UserCreateWithoutUserXMovimientoInput, UserUncheckedCreateWithoutUserXMovimientoInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserXMovimientoInput
    connect?: UserWhereUniqueInput
  }

  export type UserXMovimientoXTipoCreateNestedOneWithoutUserXMovimientoInput = {
    create?: XOR<UserXMovimientoXTipoCreateWithoutUserXMovimientoInput, UserXMovimientoXTipoUncheckedCreateWithoutUserXMovimientoInput>
    connectOrCreate?: UserXMovimientoXTipoCreateOrConnectWithoutUserXMovimientoInput
    connect?: UserXMovimientoXTipoWhereUniqueInput
  }

  export type UserXBizumCreateNestedManyWithoutUserXMovimientoInput = {
    create?: XOR<Enumerable<UserXBizumCreateWithoutUserXMovimientoInput>, Enumerable<UserXBizumUncheckedCreateWithoutUserXMovimientoInput>>
    connectOrCreate?: Enumerable<UserXBizumCreateOrConnectWithoutUserXMovimientoInput>
    createMany?: UserXBizumCreateManyUserXMovimientoInputEnvelope
    connect?: Enumerable<UserXBizumWhereUniqueInput>
  }

  export type UserXBizumUncheckedCreateNestedManyWithoutUserXMovimientoInput = {
    create?: XOR<Enumerable<UserXBizumCreateWithoutUserXMovimientoInput>, Enumerable<UserXBizumUncheckedCreateWithoutUserXMovimientoInput>>
    connectOrCreate?: Enumerable<UserXBizumCreateOrConnectWithoutUserXMovimientoInput>
    createMany?: UserXBizumCreateManyUserXMovimientoInputEnvelope
    connect?: Enumerable<UserXBizumWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutUserXMovimientoNestedInput = {
    create?: XOR<UserCreateWithoutUserXMovimientoInput, UserUncheckedCreateWithoutUserXMovimientoInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserXMovimientoInput
    upsert?: UserUpsertWithoutUserXMovimientoInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutUserXMovimientoInput, UserUncheckedUpdateWithoutUserXMovimientoInput>
  }

  export type UserXMovimientoXTipoUpdateOneRequiredWithoutUserXMovimientoNestedInput = {
    create?: XOR<UserXMovimientoXTipoCreateWithoutUserXMovimientoInput, UserXMovimientoXTipoUncheckedCreateWithoutUserXMovimientoInput>
    connectOrCreate?: UserXMovimientoXTipoCreateOrConnectWithoutUserXMovimientoInput
    upsert?: UserXMovimientoXTipoUpsertWithoutUserXMovimientoInput
    connect?: UserXMovimientoXTipoWhereUniqueInput
    update?: XOR<UserXMovimientoXTipoUpdateWithoutUserXMovimientoInput, UserXMovimientoXTipoUncheckedUpdateWithoutUserXMovimientoInput>
  }

  export type UserXBizumUpdateManyWithoutUserXMovimientoNestedInput = {
    create?: XOR<Enumerable<UserXBizumCreateWithoutUserXMovimientoInput>, Enumerable<UserXBizumUncheckedCreateWithoutUserXMovimientoInput>>
    connectOrCreate?: Enumerable<UserXBizumCreateOrConnectWithoutUserXMovimientoInput>
    upsert?: Enumerable<UserXBizumUpsertWithWhereUniqueWithoutUserXMovimientoInput>
    createMany?: UserXBizumCreateManyUserXMovimientoInputEnvelope
    set?: Enumerable<UserXBizumWhereUniqueInput>
    disconnect?: Enumerable<UserXBizumWhereUniqueInput>
    delete?: Enumerable<UserXBizumWhereUniqueInput>
    connect?: Enumerable<UserXBizumWhereUniqueInput>
    update?: Enumerable<UserXBizumUpdateWithWhereUniqueWithoutUserXMovimientoInput>
    updateMany?: Enumerable<UserXBizumUpdateManyWithWhereWithoutUserXMovimientoInput>
    deleteMany?: Enumerable<UserXBizumScalarWhereInput>
  }

  export type UserXBizumUncheckedUpdateManyWithoutUserXMovimientoNestedInput = {
    create?: XOR<Enumerable<UserXBizumCreateWithoutUserXMovimientoInput>, Enumerable<UserXBizumUncheckedCreateWithoutUserXMovimientoInput>>
    connectOrCreate?: Enumerable<UserXBizumCreateOrConnectWithoutUserXMovimientoInput>
    upsert?: Enumerable<UserXBizumUpsertWithWhereUniqueWithoutUserXMovimientoInput>
    createMany?: UserXBizumCreateManyUserXMovimientoInputEnvelope
    set?: Enumerable<UserXBizumWhereUniqueInput>
    disconnect?: Enumerable<UserXBizumWhereUniqueInput>
    delete?: Enumerable<UserXBizumWhereUniqueInput>
    connect?: Enumerable<UserXBizumWhereUniqueInput>
    update?: Enumerable<UserXBizumUpdateWithWhereUniqueWithoutUserXMovimientoInput>
    updateMany?: Enumerable<UserXBizumUpdateManyWithWhereWithoutUserXMovimientoInput>
    deleteMany?: Enumerable<UserXBizumScalarWhereInput>
  }

  export type UserXMovimientoCreateNestedManyWithoutUserXMovimientoXTipoInput = {
    create?: XOR<Enumerable<UserXMovimientoCreateWithoutUserXMovimientoXTipoInput>, Enumerable<UserXMovimientoUncheckedCreateWithoutUserXMovimientoXTipoInput>>
    connectOrCreate?: Enumerable<UserXMovimientoCreateOrConnectWithoutUserXMovimientoXTipoInput>
    createMany?: UserXMovimientoCreateManyUserXMovimientoXTipoInputEnvelope
    connect?: Enumerable<UserXMovimientoWhereUniqueInput>
  }

  export type UserXMovimientoUncheckedCreateNestedManyWithoutUserXMovimientoXTipoInput = {
    create?: XOR<Enumerable<UserXMovimientoCreateWithoutUserXMovimientoXTipoInput>, Enumerable<UserXMovimientoUncheckedCreateWithoutUserXMovimientoXTipoInput>>
    connectOrCreate?: Enumerable<UserXMovimientoCreateOrConnectWithoutUserXMovimientoXTipoInput>
    createMany?: UserXMovimientoCreateManyUserXMovimientoXTipoInputEnvelope
    connect?: Enumerable<UserXMovimientoWhereUniqueInput>
  }

  export type UserXMovimientoUpdateManyWithoutUserXMovimientoXTipoNestedInput = {
    create?: XOR<Enumerable<UserXMovimientoCreateWithoutUserXMovimientoXTipoInput>, Enumerable<UserXMovimientoUncheckedCreateWithoutUserXMovimientoXTipoInput>>
    connectOrCreate?: Enumerable<UserXMovimientoCreateOrConnectWithoutUserXMovimientoXTipoInput>
    upsert?: Enumerable<UserXMovimientoUpsertWithWhereUniqueWithoutUserXMovimientoXTipoInput>
    createMany?: UserXMovimientoCreateManyUserXMovimientoXTipoInputEnvelope
    set?: Enumerable<UserXMovimientoWhereUniqueInput>
    disconnect?: Enumerable<UserXMovimientoWhereUniqueInput>
    delete?: Enumerable<UserXMovimientoWhereUniqueInput>
    connect?: Enumerable<UserXMovimientoWhereUniqueInput>
    update?: Enumerable<UserXMovimientoUpdateWithWhereUniqueWithoutUserXMovimientoXTipoInput>
    updateMany?: Enumerable<UserXMovimientoUpdateManyWithWhereWithoutUserXMovimientoXTipoInput>
    deleteMany?: Enumerable<UserXMovimientoScalarWhereInput>
  }

  export type UserXMovimientoUncheckedUpdateManyWithoutUserXMovimientoXTipoNestedInput = {
    create?: XOR<Enumerable<UserXMovimientoCreateWithoutUserXMovimientoXTipoInput>, Enumerable<UserXMovimientoUncheckedCreateWithoutUserXMovimientoXTipoInput>>
    connectOrCreate?: Enumerable<UserXMovimientoCreateOrConnectWithoutUserXMovimientoXTipoInput>
    upsert?: Enumerable<UserXMovimientoUpsertWithWhereUniqueWithoutUserXMovimientoXTipoInput>
    createMany?: UserXMovimientoCreateManyUserXMovimientoXTipoInputEnvelope
    set?: Enumerable<UserXMovimientoWhereUniqueInput>
    disconnect?: Enumerable<UserXMovimientoWhereUniqueInput>
    delete?: Enumerable<UserXMovimientoWhereUniqueInput>
    connect?: Enumerable<UserXMovimientoWhereUniqueInput>
    update?: Enumerable<UserXMovimientoUpdateWithWhereUniqueWithoutUserXMovimientoXTipoInput>
    updateMany?: Enumerable<UserXMovimientoUpdateManyWithWhereWithoutUserXMovimientoXTipoInput>
    deleteMany?: Enumerable<UserXMovimientoScalarWhereInput>
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

  export type UserCreateNestedOneWithoutCodeSecureInput = {
    create?: XOR<UserCreateWithoutCodeSecureInput, UserUncheckedCreateWithoutCodeSecureInput>
    connectOrCreate?: UserCreateOrConnectWithoutCodeSecureInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCodeSecureNestedInput = {
    create?: XOR<UserCreateWithoutCodeSecureInput, UserUncheckedCreateWithoutCodeSecureInput>
    connectOrCreate?: UserCreateOrConnectWithoutCodeSecureInput
    upsert?: UserUpsertWithoutCodeSecureInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutCodeSecureInput, UserUncheckedUpdateWithoutCodeSecureInput>
  }

  export type ApuestaXEstadoCreateNestedOneWithoutApuestaInput = {
    create?: XOR<ApuestaXEstadoCreateWithoutApuestaInput, ApuestaXEstadoUncheckedCreateWithoutApuestaInput>
    connectOrCreate?: ApuestaXEstadoCreateOrConnectWithoutApuestaInput
    connect?: ApuestaXEstadoWhereUniqueInput
  }

  export type ApuestaXEstadoUpdateOneRequiredWithoutApuestaNestedInput = {
    create?: XOR<ApuestaXEstadoCreateWithoutApuestaInput, ApuestaXEstadoUncheckedCreateWithoutApuestaInput>
    connectOrCreate?: ApuestaXEstadoCreateOrConnectWithoutApuestaInput
    upsert?: ApuestaXEstadoUpsertWithoutApuestaInput
    connect?: ApuestaXEstadoWhereUniqueInput
    update?: XOR<ApuestaXEstadoUpdateWithoutApuestaInput, ApuestaXEstadoUncheckedUpdateWithoutApuestaInput>
  }

  export type ApuestaCreateNestedManyWithoutApuestaXEstadoInput = {
    create?: XOR<Enumerable<ApuestaCreateWithoutApuestaXEstadoInput>, Enumerable<ApuestaUncheckedCreateWithoutApuestaXEstadoInput>>
    connectOrCreate?: Enumerable<ApuestaCreateOrConnectWithoutApuestaXEstadoInput>
    createMany?: ApuestaCreateManyApuestaXEstadoInputEnvelope
    connect?: Enumerable<ApuestaWhereUniqueInput>
  }

  export type ApuestaUncheckedCreateNestedManyWithoutApuestaXEstadoInput = {
    create?: XOR<Enumerable<ApuestaCreateWithoutApuestaXEstadoInput>, Enumerable<ApuestaUncheckedCreateWithoutApuestaXEstadoInput>>
    connectOrCreate?: Enumerable<ApuestaCreateOrConnectWithoutApuestaXEstadoInput>
    createMany?: ApuestaCreateManyApuestaXEstadoInputEnvelope
    connect?: Enumerable<ApuestaWhereUniqueInput>
  }

  export type ApuestaUpdateManyWithoutApuestaXEstadoNestedInput = {
    create?: XOR<Enumerable<ApuestaCreateWithoutApuestaXEstadoInput>, Enumerable<ApuestaUncheckedCreateWithoutApuestaXEstadoInput>>
    connectOrCreate?: Enumerable<ApuestaCreateOrConnectWithoutApuestaXEstadoInput>
    upsert?: Enumerable<ApuestaUpsertWithWhereUniqueWithoutApuestaXEstadoInput>
    createMany?: ApuestaCreateManyApuestaXEstadoInputEnvelope
    set?: Enumerable<ApuestaWhereUniqueInput>
    disconnect?: Enumerable<ApuestaWhereUniqueInput>
    delete?: Enumerable<ApuestaWhereUniqueInput>
    connect?: Enumerable<ApuestaWhereUniqueInput>
    update?: Enumerable<ApuestaUpdateWithWhereUniqueWithoutApuestaXEstadoInput>
    updateMany?: Enumerable<ApuestaUpdateManyWithWhereWithoutApuestaXEstadoInput>
    deleteMany?: Enumerable<ApuestaScalarWhereInput>
  }

  export type ApuestaUncheckedUpdateManyWithoutApuestaXEstadoNestedInput = {
    create?: XOR<Enumerable<ApuestaCreateWithoutApuestaXEstadoInput>, Enumerable<ApuestaUncheckedCreateWithoutApuestaXEstadoInput>>
    connectOrCreate?: Enumerable<ApuestaCreateOrConnectWithoutApuestaXEstadoInput>
    upsert?: Enumerable<ApuestaUpsertWithWhereUniqueWithoutApuestaXEstadoInput>
    createMany?: ApuestaCreateManyApuestaXEstadoInputEnvelope
    set?: Enumerable<ApuestaWhereUniqueInput>
    disconnect?: Enumerable<ApuestaWhereUniqueInput>
    delete?: Enumerable<ApuestaWhereUniqueInput>
    connect?: Enumerable<ApuestaWhereUniqueInput>
    update?: Enumerable<ApuestaUpdateWithWhereUniqueWithoutApuestaXEstadoInput>
    updateMany?: Enumerable<ApuestaUpdateManyWithWhereWithoutApuestaXEstadoInput>
    deleteMany?: Enumerable<ApuestaScalarWhereInput>
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

  export type NestedUuidFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidFilter | string
  }

  export type NestedUuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
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

  export type CodeSecureCreateWithoutUserInput = {
    code: string
    type: number
    createdAt?: Date | string
  }

  export type CodeSecureUncheckedCreateWithoutUserInput = {
    code: string
    type: number
    createdAt?: Date | string
  }

  export type CodeSecureCreateOrConnectWithoutUserInput = {
    where: CodeSecureWhereUniqueInput
    create: XOR<CodeSecureCreateWithoutUserInput, CodeSecureUncheckedCreateWithoutUserInput>
  }

  export type CodeSecureCreateManyUserInputEnvelope = {
    data: Enumerable<CodeSecureCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type UserXBizumCreateWithoutUserInput = {
    importe: Decimal | DecimalJsLike | number | string
    pendiente?: boolean
    createdAt?: Date | string
    UserXMovimiento: UserXMovimientoCreateNestedOneWithoutUserXBizumInput
  }

  export type UserXBizumUncheckedCreateWithoutUserInput = {
    id?: number
    importe: Decimal | DecimalJsLike | number | string
    movimientoId: number
    pendiente?: boolean
    createdAt?: Date | string
  }

  export type UserXBizumCreateOrConnectWithoutUserInput = {
    where: UserXBizumWhereUniqueInput
    create: XOR<UserXBizumCreateWithoutUserInput, UserXBizumUncheckedCreateWithoutUserInput>
  }

  export type UserXBizumCreateManyUserInputEnvelope = {
    data: Enumerable<UserXBizumCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type UserXMovimientoCreateWithoutUserInput = {
    importe: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    UserXMovimientoXTipo: UserXMovimientoXTipoCreateNestedOneWithoutUserXMovimientoInput
    UserXBizum?: UserXBizumCreateNestedManyWithoutUserXMovimientoInput
  }

  export type UserXMovimientoUncheckedCreateWithoutUserInput = {
    id?: number
    importe: Decimal | DecimalJsLike | number | string
    tipoId: number
    createdAt?: Date | string
    UserXBizum?: UserXBizumUncheckedCreateNestedManyWithoutUserXMovimientoInput
  }

  export type UserXMovimientoCreateOrConnectWithoutUserInput = {
    where: UserXMovimientoWhereUniqueInput
    create: XOR<UserXMovimientoCreateWithoutUserInput, UserXMovimientoUncheckedCreateWithoutUserInput>
  }

  export type UserXMovimientoCreateManyUserInputEnvelope = {
    data: Enumerable<UserXMovimientoCreateManyUserInput>
    skipDuplicates?: boolean
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

  export type CodeSecureUpsertWithWhereUniqueWithoutUserInput = {
    where: CodeSecureWhereUniqueInput
    update: XOR<CodeSecureUpdateWithoutUserInput, CodeSecureUncheckedUpdateWithoutUserInput>
    create: XOR<CodeSecureCreateWithoutUserInput, CodeSecureUncheckedCreateWithoutUserInput>
  }

  export type CodeSecureUpdateWithWhereUniqueWithoutUserInput = {
    where: CodeSecureWhereUniqueInput
    data: XOR<CodeSecureUpdateWithoutUserInput, CodeSecureUncheckedUpdateWithoutUserInput>
  }

  export type CodeSecureUpdateManyWithWhereWithoutUserInput = {
    where: CodeSecureScalarWhereInput
    data: XOR<CodeSecureUpdateManyMutationInput, CodeSecureUncheckedUpdateManyWithoutCodeSecureInput>
  }

  export type CodeSecureScalarWhereInput = {
    AND?: Enumerable<CodeSecureScalarWhereInput>
    OR?: Enumerable<CodeSecureScalarWhereInput>
    NOT?: Enumerable<CodeSecureScalarWhereInput>
    code?: UuidFilter | string
    type?: IntFilter | number
    userId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
  }

  export type UserXBizumUpsertWithWhereUniqueWithoutUserInput = {
    where: UserXBizumWhereUniqueInput
    update: XOR<UserXBizumUpdateWithoutUserInput, UserXBizumUncheckedUpdateWithoutUserInput>
    create: XOR<UserXBizumCreateWithoutUserInput, UserXBizumUncheckedCreateWithoutUserInput>
  }

  export type UserXBizumUpdateWithWhereUniqueWithoutUserInput = {
    where: UserXBizumWhereUniqueInput
    data: XOR<UserXBizumUpdateWithoutUserInput, UserXBizumUncheckedUpdateWithoutUserInput>
  }

  export type UserXBizumUpdateManyWithWhereWithoutUserInput = {
    where: UserXBizumScalarWhereInput
    data: XOR<UserXBizumUpdateManyMutationInput, UserXBizumUncheckedUpdateManyWithoutUserXBizumInput>
  }

  export type UserXBizumScalarWhereInput = {
    AND?: Enumerable<UserXBizumScalarWhereInput>
    OR?: Enumerable<UserXBizumScalarWhereInput>
    NOT?: Enumerable<UserXBizumScalarWhereInput>
    id?: IntFilter | number
    importe?: DecimalFilter | Decimal | DecimalJsLike | number | string
    userId?: IntFilter | number
    movimientoId?: IntFilter | number
    pendiente?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
  }

  export type UserXMovimientoUpsertWithWhereUniqueWithoutUserInput = {
    where: UserXMovimientoWhereUniqueInput
    update: XOR<UserXMovimientoUpdateWithoutUserInput, UserXMovimientoUncheckedUpdateWithoutUserInput>
    create: XOR<UserXMovimientoCreateWithoutUserInput, UserXMovimientoUncheckedCreateWithoutUserInput>
  }

  export type UserXMovimientoUpdateWithWhereUniqueWithoutUserInput = {
    where: UserXMovimientoWhereUniqueInput
    data: XOR<UserXMovimientoUpdateWithoutUserInput, UserXMovimientoUncheckedUpdateWithoutUserInput>
  }

  export type UserXMovimientoUpdateManyWithWhereWithoutUserInput = {
    where: UserXMovimientoScalarWhereInput
    data: XOR<UserXMovimientoUpdateManyMutationInput, UserXMovimientoUncheckedUpdateManyWithoutUserXMovimientoInput>
  }

  export type UserXMovimientoScalarWhereInput = {
    AND?: Enumerable<UserXMovimientoScalarWhereInput>
    OR?: Enumerable<UserXMovimientoScalarWhereInput>
    NOT?: Enumerable<UserXMovimientoScalarWhereInput>
    id?: IntFilter | number
    importe?: DecimalFilter | Decimal | DecimalJsLike | number | string
    userId?: IntFilter | number
    tipoId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
  }

  export type UserCreateWithoutUserXBizumInput = {
    id: number
    name: string
    email: string
    password: string
    saldo: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    UserXRole: UserXRoleCreateNestedOneWithoutUserInput
    UserXEstado: UserXEstadoCreateNestedOneWithoutUserInput
    CodeSecure?: CodeSecureCreateNestedManyWithoutUserInput
    UserXMovimiento?: UserXMovimientoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserXBizumInput = {
    id: number
    name: string
    email: string
    password: string
    roleId: number
    estadoId: number
    saldo: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    CodeSecure?: CodeSecureUncheckedCreateNestedManyWithoutUserInput
    UserXMovimiento?: UserXMovimientoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserXBizumInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserXBizumInput, UserUncheckedCreateWithoutUserXBizumInput>
  }

  export type UserXMovimientoCreateWithoutUserXBizumInput = {
    importe: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutUserXMovimientoInput
    UserXMovimientoXTipo: UserXMovimientoXTipoCreateNestedOneWithoutUserXMovimientoInput
  }

  export type UserXMovimientoUncheckedCreateWithoutUserXBizumInput = {
    id?: number
    importe: Decimal | DecimalJsLike | number | string
    userId: number
    tipoId: number
    createdAt?: Date | string
  }

  export type UserXMovimientoCreateOrConnectWithoutUserXBizumInput = {
    where: UserXMovimientoWhereUniqueInput
    create: XOR<UserXMovimientoCreateWithoutUserXBizumInput, UserXMovimientoUncheckedCreateWithoutUserXBizumInput>
  }

  export type UserUpsertWithoutUserXBizumInput = {
    update: XOR<UserUpdateWithoutUserXBizumInput, UserUncheckedUpdateWithoutUserXBizumInput>
    create: XOR<UserCreateWithoutUserXBizumInput, UserUncheckedCreateWithoutUserXBizumInput>
  }

  export type UserUpdateWithoutUserXBizumInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserXRole?: UserXRoleUpdateOneRequiredWithoutUserNestedInput
    UserXEstado?: UserXEstadoUpdateOneRequiredWithoutUserNestedInput
    CodeSecure?: CodeSecureUpdateManyWithoutUserNestedInput
    UserXMovimiento?: UserXMovimientoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserXBizumInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    estadoId?: IntFieldUpdateOperationsInput | number
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CodeSecure?: CodeSecureUncheckedUpdateManyWithoutUserNestedInput
    UserXMovimiento?: UserXMovimientoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserXMovimientoUpsertWithoutUserXBizumInput = {
    update: XOR<UserXMovimientoUpdateWithoutUserXBizumInput, UserXMovimientoUncheckedUpdateWithoutUserXBizumInput>
    create: XOR<UserXMovimientoCreateWithoutUserXBizumInput, UserXMovimientoUncheckedCreateWithoutUserXBizumInput>
  }

  export type UserXMovimientoUpdateWithoutUserXBizumInput = {
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutUserXMovimientoNestedInput
    UserXMovimientoXTipo?: UserXMovimientoXTipoUpdateOneRequiredWithoutUserXMovimientoNestedInput
  }

  export type UserXMovimientoUncheckedUpdateWithoutUserXBizumInput = {
    id?: IntFieldUpdateOperationsInput | number
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: IntFieldUpdateOperationsInput | number
    tipoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutUserXMovimientoInput = {
    id: number
    name: string
    email: string
    password: string
    saldo: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    UserXRole: UserXRoleCreateNestedOneWithoutUserInput
    UserXEstado: UserXEstadoCreateNestedOneWithoutUserInput
    CodeSecure?: CodeSecureCreateNestedManyWithoutUserInput
    UserXBizum?: UserXBizumCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserXMovimientoInput = {
    id: number
    name: string
    email: string
    password: string
    roleId: number
    estadoId: number
    saldo: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    CodeSecure?: CodeSecureUncheckedCreateNestedManyWithoutUserInput
    UserXBizum?: UserXBizumUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserXMovimientoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserXMovimientoInput, UserUncheckedCreateWithoutUserXMovimientoInput>
  }

  export type UserXMovimientoXTipoCreateWithoutUserXMovimientoInput = {
    id: number
    descripcion: string
  }

  export type UserXMovimientoXTipoUncheckedCreateWithoutUserXMovimientoInput = {
    id: number
    descripcion: string
  }

  export type UserXMovimientoXTipoCreateOrConnectWithoutUserXMovimientoInput = {
    where: UserXMovimientoXTipoWhereUniqueInput
    create: XOR<UserXMovimientoXTipoCreateWithoutUserXMovimientoInput, UserXMovimientoXTipoUncheckedCreateWithoutUserXMovimientoInput>
  }

  export type UserXBizumCreateWithoutUserXMovimientoInput = {
    importe: Decimal | DecimalJsLike | number | string
    pendiente?: boolean
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutUserXBizumInput
  }

  export type UserXBizumUncheckedCreateWithoutUserXMovimientoInput = {
    id?: number
    importe: Decimal | DecimalJsLike | number | string
    userId: number
    pendiente?: boolean
    createdAt?: Date | string
  }

  export type UserXBizumCreateOrConnectWithoutUserXMovimientoInput = {
    where: UserXBizumWhereUniqueInput
    create: XOR<UserXBizumCreateWithoutUserXMovimientoInput, UserXBizumUncheckedCreateWithoutUserXMovimientoInput>
  }

  export type UserXBizumCreateManyUserXMovimientoInputEnvelope = {
    data: Enumerable<UserXBizumCreateManyUserXMovimientoInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutUserXMovimientoInput = {
    update: XOR<UserUpdateWithoutUserXMovimientoInput, UserUncheckedUpdateWithoutUserXMovimientoInput>
    create: XOR<UserCreateWithoutUserXMovimientoInput, UserUncheckedCreateWithoutUserXMovimientoInput>
  }

  export type UserUpdateWithoutUserXMovimientoInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserXRole?: UserXRoleUpdateOneRequiredWithoutUserNestedInput
    UserXEstado?: UserXEstadoUpdateOneRequiredWithoutUserNestedInput
    CodeSecure?: CodeSecureUpdateManyWithoutUserNestedInput
    UserXBizum?: UserXBizumUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserXMovimientoInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    estadoId?: IntFieldUpdateOperationsInput | number
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CodeSecure?: CodeSecureUncheckedUpdateManyWithoutUserNestedInput
    UserXBizum?: UserXBizumUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserXMovimientoXTipoUpsertWithoutUserXMovimientoInput = {
    update: XOR<UserXMovimientoXTipoUpdateWithoutUserXMovimientoInput, UserXMovimientoXTipoUncheckedUpdateWithoutUserXMovimientoInput>
    create: XOR<UserXMovimientoXTipoCreateWithoutUserXMovimientoInput, UserXMovimientoXTipoUncheckedCreateWithoutUserXMovimientoInput>
  }

  export type UserXMovimientoXTipoUpdateWithoutUserXMovimientoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type UserXMovimientoXTipoUncheckedUpdateWithoutUserXMovimientoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type UserXBizumUpsertWithWhereUniqueWithoutUserXMovimientoInput = {
    where: UserXBizumWhereUniqueInput
    update: XOR<UserXBizumUpdateWithoutUserXMovimientoInput, UserXBizumUncheckedUpdateWithoutUserXMovimientoInput>
    create: XOR<UserXBizumCreateWithoutUserXMovimientoInput, UserXBizumUncheckedCreateWithoutUserXMovimientoInput>
  }

  export type UserXBizumUpdateWithWhereUniqueWithoutUserXMovimientoInput = {
    where: UserXBizumWhereUniqueInput
    data: XOR<UserXBizumUpdateWithoutUserXMovimientoInput, UserXBizumUncheckedUpdateWithoutUserXMovimientoInput>
  }

  export type UserXBizumUpdateManyWithWhereWithoutUserXMovimientoInput = {
    where: UserXBizumScalarWhereInput
    data: XOR<UserXBizumUpdateManyMutationInput, UserXBizumUncheckedUpdateManyWithoutUserXBizumInput>
  }

  export type UserXMovimientoCreateWithoutUserXMovimientoXTipoInput = {
    importe: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutUserXMovimientoInput
    UserXBizum?: UserXBizumCreateNestedManyWithoutUserXMovimientoInput
  }

  export type UserXMovimientoUncheckedCreateWithoutUserXMovimientoXTipoInput = {
    id?: number
    importe: Decimal | DecimalJsLike | number | string
    userId: number
    createdAt?: Date | string
    UserXBizum?: UserXBizumUncheckedCreateNestedManyWithoutUserXMovimientoInput
  }

  export type UserXMovimientoCreateOrConnectWithoutUserXMovimientoXTipoInput = {
    where: UserXMovimientoWhereUniqueInput
    create: XOR<UserXMovimientoCreateWithoutUserXMovimientoXTipoInput, UserXMovimientoUncheckedCreateWithoutUserXMovimientoXTipoInput>
  }

  export type UserXMovimientoCreateManyUserXMovimientoXTipoInputEnvelope = {
    data: Enumerable<UserXMovimientoCreateManyUserXMovimientoXTipoInput>
    skipDuplicates?: boolean
  }

  export type UserXMovimientoUpsertWithWhereUniqueWithoutUserXMovimientoXTipoInput = {
    where: UserXMovimientoWhereUniqueInput
    update: XOR<UserXMovimientoUpdateWithoutUserXMovimientoXTipoInput, UserXMovimientoUncheckedUpdateWithoutUserXMovimientoXTipoInput>
    create: XOR<UserXMovimientoCreateWithoutUserXMovimientoXTipoInput, UserXMovimientoUncheckedCreateWithoutUserXMovimientoXTipoInput>
  }

  export type UserXMovimientoUpdateWithWhereUniqueWithoutUserXMovimientoXTipoInput = {
    where: UserXMovimientoWhereUniqueInput
    data: XOR<UserXMovimientoUpdateWithoutUserXMovimientoXTipoInput, UserXMovimientoUncheckedUpdateWithoutUserXMovimientoXTipoInput>
  }

  export type UserXMovimientoUpdateManyWithWhereWithoutUserXMovimientoXTipoInput = {
    where: UserXMovimientoScalarWhereInput
    data: XOR<UserXMovimientoUpdateManyMutationInput, UserXMovimientoUncheckedUpdateManyWithoutUserXMovimientoInput>
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
    CodeSecure?: CodeSecureCreateNestedManyWithoutUserInput
    UserXBizum?: UserXBizumCreateNestedManyWithoutUserInput
    UserXMovimiento?: UserXMovimientoCreateNestedManyWithoutUserInput
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
    CodeSecure?: CodeSecureUncheckedCreateNestedManyWithoutUserInput
    UserXBizum?: UserXBizumUncheckedCreateNestedManyWithoutUserInput
    UserXMovimiento?: UserXMovimientoUncheckedCreateNestedManyWithoutUserInput
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
    CodeSecure?: CodeSecureCreateNestedManyWithoutUserInput
    UserXBizum?: UserXBizumCreateNestedManyWithoutUserInput
    UserXMovimiento?: UserXMovimientoCreateNestedManyWithoutUserInput
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
    CodeSecure?: CodeSecureUncheckedCreateNestedManyWithoutUserInput
    UserXBizum?: UserXBizumUncheckedCreateNestedManyWithoutUserInput
    UserXMovimiento?: UserXMovimientoUncheckedCreateNestedManyWithoutUserInput
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

  export type UserCreateWithoutCodeSecureInput = {
    id: number
    name: string
    email: string
    password: string
    saldo: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    UserXRole: UserXRoleCreateNestedOneWithoutUserInput
    UserXEstado: UserXEstadoCreateNestedOneWithoutUserInput
    UserXBizum?: UserXBizumCreateNestedManyWithoutUserInput
    UserXMovimiento?: UserXMovimientoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCodeSecureInput = {
    id: number
    name: string
    email: string
    password: string
    roleId: number
    estadoId: number
    saldo: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    UserXBizum?: UserXBizumUncheckedCreateNestedManyWithoutUserInput
    UserXMovimiento?: UserXMovimientoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCodeSecureInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCodeSecureInput, UserUncheckedCreateWithoutCodeSecureInput>
  }

  export type UserUpsertWithoutCodeSecureInput = {
    update: XOR<UserUpdateWithoutCodeSecureInput, UserUncheckedUpdateWithoutCodeSecureInput>
    create: XOR<UserCreateWithoutCodeSecureInput, UserUncheckedCreateWithoutCodeSecureInput>
  }

  export type UserUpdateWithoutCodeSecureInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserXRole?: UserXRoleUpdateOneRequiredWithoutUserNestedInput
    UserXEstado?: UserXEstadoUpdateOneRequiredWithoutUserNestedInput
    UserXBizum?: UserXBizumUpdateManyWithoutUserNestedInput
    UserXMovimiento?: UserXMovimientoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCodeSecureInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    estadoId?: IntFieldUpdateOperationsInput | number
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserXBizum?: UserXBizumUncheckedUpdateManyWithoutUserNestedInput
    UserXMovimiento?: UserXMovimientoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ApuestaXEstadoCreateWithoutApuestaInput = {
    id: number
    descripcion: string
  }

  export type ApuestaXEstadoUncheckedCreateWithoutApuestaInput = {
    id: number
    descripcion: string
  }

  export type ApuestaXEstadoCreateOrConnectWithoutApuestaInput = {
    where: ApuestaXEstadoWhereUniqueInput
    create: XOR<ApuestaXEstadoCreateWithoutApuestaInput, ApuestaXEstadoUncheckedCreateWithoutApuestaInput>
  }

  export type ApuestaXEstadoUpsertWithoutApuestaInput = {
    update: XOR<ApuestaXEstadoUpdateWithoutApuestaInput, ApuestaXEstadoUncheckedUpdateWithoutApuestaInput>
    create: XOR<ApuestaXEstadoCreateWithoutApuestaInput, ApuestaXEstadoUncheckedCreateWithoutApuestaInput>
  }

  export type ApuestaXEstadoUpdateWithoutApuestaInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type ApuestaXEstadoUncheckedUpdateWithoutApuestaInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type ApuestaCreateWithoutApuestaXEstadoInput = {
    fecha: Date | string
    apostado?: Decimal | DecimalJsLike | number | string
    ganado?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type ApuestaUncheckedCreateWithoutApuestaXEstadoInput = {
    id?: number
    fecha: Date | string
    apostado?: Decimal | DecimalJsLike | number | string
    ganado?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type ApuestaCreateOrConnectWithoutApuestaXEstadoInput = {
    where: ApuestaWhereUniqueInput
    create: XOR<ApuestaCreateWithoutApuestaXEstadoInput, ApuestaUncheckedCreateWithoutApuestaXEstadoInput>
  }

  export type ApuestaCreateManyApuestaXEstadoInputEnvelope = {
    data: Enumerable<ApuestaCreateManyApuestaXEstadoInput>
    skipDuplicates?: boolean
  }

  export type ApuestaUpsertWithWhereUniqueWithoutApuestaXEstadoInput = {
    where: ApuestaWhereUniqueInput
    update: XOR<ApuestaUpdateWithoutApuestaXEstadoInput, ApuestaUncheckedUpdateWithoutApuestaXEstadoInput>
    create: XOR<ApuestaCreateWithoutApuestaXEstadoInput, ApuestaUncheckedCreateWithoutApuestaXEstadoInput>
  }

  export type ApuestaUpdateWithWhereUniqueWithoutApuestaXEstadoInput = {
    where: ApuestaWhereUniqueInput
    data: XOR<ApuestaUpdateWithoutApuestaXEstadoInput, ApuestaUncheckedUpdateWithoutApuestaXEstadoInput>
  }

  export type ApuestaUpdateManyWithWhereWithoutApuestaXEstadoInput = {
    where: ApuestaScalarWhereInput
    data: XOR<ApuestaUpdateManyMutationInput, ApuestaUncheckedUpdateManyWithoutApuestaInput>
  }

  export type ApuestaScalarWhereInput = {
    AND?: Enumerable<ApuestaScalarWhereInput>
    OR?: Enumerable<ApuestaScalarWhereInput>
    NOT?: Enumerable<ApuestaScalarWhereInput>
    id?: IntFilter | number
    fecha?: DateTimeFilter | Date | string
    apostado?: DecimalFilter | Decimal | DecimalJsLike | number | string
    ganado?: DecimalFilter | Decimal | DecimalJsLike | number | string
    estadoId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
  }

  export type CodeSecureCreateManyUserInput = {
    code: string
    type: number
    createdAt?: Date | string
  }

  export type UserXBizumCreateManyUserInput = {
    id?: number
    importe: Decimal | DecimalJsLike | number | string
    movimientoId: number
    pendiente?: boolean
    createdAt?: Date | string
  }

  export type UserXMovimientoCreateManyUserInput = {
    id?: number
    importe: Decimal | DecimalJsLike | number | string
    tipoId: number
    createdAt?: Date | string
  }

  export type CodeSecureUpdateWithoutUserInput = {
    code?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeSecureUncheckedUpdateWithoutUserInput = {
    code?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeSecureUncheckedUpdateManyWithoutCodeSecureInput = {
    code?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserXBizumUpdateWithoutUserInput = {
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pendiente?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserXMovimiento?: UserXMovimientoUpdateOneRequiredWithoutUserXBizumNestedInput
  }

  export type UserXBizumUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    movimientoId?: IntFieldUpdateOperationsInput | number
    pendiente?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserXBizumUncheckedUpdateManyWithoutUserXBizumInput = {
    id?: IntFieldUpdateOperationsInput | number
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    movimientoId?: IntFieldUpdateOperationsInput | number
    pendiente?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserXMovimientoUpdateWithoutUserInput = {
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserXMovimientoXTipo?: UserXMovimientoXTipoUpdateOneRequiredWithoutUserXMovimientoNestedInput
    UserXBizum?: UserXBizumUpdateManyWithoutUserXMovimientoNestedInput
  }

  export type UserXMovimientoUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserXBizum?: UserXBizumUncheckedUpdateManyWithoutUserXMovimientoNestedInput
  }

  export type UserXMovimientoUncheckedUpdateManyWithoutUserXMovimientoInput = {
    id?: IntFieldUpdateOperationsInput | number
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserXBizumCreateManyUserXMovimientoInput = {
    id?: number
    importe: Decimal | DecimalJsLike | number | string
    userId: number
    pendiente?: boolean
    createdAt?: Date | string
  }

  export type UserXBizumUpdateWithoutUserXMovimientoInput = {
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pendiente?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutUserXBizumNestedInput
  }

  export type UserXBizumUncheckedUpdateWithoutUserXMovimientoInput = {
    id?: IntFieldUpdateOperationsInput | number
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: IntFieldUpdateOperationsInput | number
    pendiente?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserXMovimientoCreateManyUserXMovimientoXTipoInput = {
    id?: number
    importe: Decimal | DecimalJsLike | number | string
    userId: number
    createdAt?: Date | string
  }

  export type UserXMovimientoUpdateWithoutUserXMovimientoXTipoInput = {
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutUserXMovimientoNestedInput
    UserXBizum?: UserXBizumUpdateManyWithoutUserXMovimientoNestedInput
  }

  export type UserXMovimientoUncheckedUpdateWithoutUserXMovimientoXTipoInput = {
    id?: IntFieldUpdateOperationsInput | number
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserXBizum?: UserXBizumUncheckedUpdateManyWithoutUserXMovimientoNestedInput
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
    CodeSecure?: CodeSecureUpdateManyWithoutUserNestedInput
    UserXBizum?: UserXBizumUpdateManyWithoutUserNestedInput
    UserXMovimiento?: UserXMovimientoUpdateManyWithoutUserNestedInput
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
    CodeSecure?: CodeSecureUncheckedUpdateManyWithoutUserNestedInput
    UserXBizum?: UserXBizumUncheckedUpdateManyWithoutUserNestedInput
    UserXMovimiento?: UserXMovimientoUncheckedUpdateManyWithoutUserNestedInput
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
    CodeSecure?: CodeSecureUpdateManyWithoutUserNestedInput
    UserXBizum?: UserXBizumUpdateManyWithoutUserNestedInput
    UserXMovimiento?: UserXMovimientoUpdateManyWithoutUserNestedInput
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
    CodeSecure?: CodeSecureUncheckedUpdateManyWithoutUserNestedInput
    UserXBizum?: UserXBizumUncheckedUpdateManyWithoutUserNestedInput
    UserXMovimiento?: UserXMovimientoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ApuestaCreateManyApuestaXEstadoInput = {
    id?: number
    fecha: Date | string
    apostado?: Decimal | DecimalJsLike | number | string
    ganado?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type ApuestaUpdateWithoutApuestaXEstadoInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    apostado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ganado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApuestaUncheckedUpdateWithoutApuestaXEstadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    apostado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ganado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApuestaUncheckedUpdateManyWithoutApuestaInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    apostado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ganado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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