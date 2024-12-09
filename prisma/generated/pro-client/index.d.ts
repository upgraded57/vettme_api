
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model VerificationForm
 * 
 */
export type VerificationForm = $Result.DefaultSelection<Prisma.$VerificationFormPayload>
/**
 * Model VerificationResponse
 * 
 */
export type VerificationResponse = $Result.DefaultSelection<Prisma.$VerificationResponsePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationForm`: Exposes CRUD operations for the **VerificationForm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationForms
    * const verificationForms = await prisma.verificationForm.findMany()
    * ```
    */
  get verificationForm(): Prisma.VerificationFormDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationResponse`: Exposes CRUD operations for the **VerificationResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationResponses
    * const verificationResponses = await prisma.verificationResponse.findMany()
    * ```
    */
  get verificationResponse(): Prisma.VerificationResponseDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.18.0
   * Query Engine version: 4c784e32044a8a016d99474bd02a3b6123742169
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Company: 'Company',
    VerificationForm: 'VerificationForm',
    VerificationResponse: 'VerificationResponse'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "company" | "verificationForm" | "verificationResponse"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      VerificationForm: {
        payload: Prisma.$VerificationFormPayload<ExtArgs>
        fields: Prisma.VerificationFormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFormFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationFormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFormFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationFormPayload>
          }
          findFirst: {
            args: Prisma.VerificationFormFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationFormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFormFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationFormPayload>
          }
          findMany: {
            args: Prisma.VerificationFormFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationFormPayload>[]
          }
          create: {
            args: Prisma.VerificationFormCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationFormPayload>
          }
          createMany: {
            args: Prisma.VerificationFormCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationFormCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationFormPayload>[]
          }
          delete: {
            args: Prisma.VerificationFormDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationFormPayload>
          }
          update: {
            args: Prisma.VerificationFormUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationFormPayload>
          }
          deleteMany: {
            args: Prisma.VerificationFormDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationFormUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationFormUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationFormPayload>
          }
          aggregate: {
            args: Prisma.VerificationFormAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationForm>
          }
          groupBy: {
            args: Prisma.VerificationFormGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationFormGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationFormCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationFormCountAggregateOutputType> | number
          }
        }
      }
      VerificationResponse: {
        payload: Prisma.$VerificationResponsePayload<ExtArgs>
        fields: Prisma.VerificationResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationResponsePayload>
          }
          findFirst: {
            args: Prisma.VerificationResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationResponsePayload>
          }
          findMany: {
            args: Prisma.VerificationResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationResponsePayload>[]
          }
          create: {
            args: Prisma.VerificationResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationResponsePayload>
          }
          createMany: {
            args: Prisma.VerificationResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationResponsePayload>[]
          }
          delete: {
            args: Prisma.VerificationResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationResponsePayload>
          }
          update: {
            args: Prisma.VerificationResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationResponsePayload>
          }
          deleteMany: {
            args: Prisma.VerificationResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationResponsePayload>
          }
          aggregate: {
            args: Prisma.VerificationResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationResponse>
          }
          groupBy: {
            args: Prisma.VerificationResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationResponseCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationResponseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    company?: CompanyOmit
    verificationForm?: VerificationFormOmit
    verificationResponse?: VerificationResponseOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
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
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    verificationBatch: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verificationBatch?: boolean | CompanyCountOutputTypeCountVerificationBatchArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountVerificationBatchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationFormWhereInput
  }


  /**
   * Count Type VerificationFormCountOutputType
   */

  export type VerificationFormCountOutputType = {
    verificationResponse: number
  }

  export type VerificationFormCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verificationResponse?: boolean | VerificationFormCountOutputTypeCountVerificationResponseArgs
  }

  // Custom InputTypes
  /**
   * VerificationFormCountOutputType without action
   */
  export type VerificationFormCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationFormCountOutputType
     */
    select?: VerificationFormCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VerificationFormCountOutputType without action
   */
  export type VerificationFormCountOutputTypeCountVerificationResponseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationResponseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    balance: number | null
  }

  export type CompanySumAggregateOutputType = {
    balance: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    email: string | null
    companyName: string | null
    companyId: string | null
    phone_number: string | null
    isActive: boolean | null
    isVerified: boolean | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    balance: number | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    email: string | null
    companyName: string | null
    companyId: string | null
    phone_number: string | null
    isActive: boolean | null
    isVerified: boolean | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    balance: number | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    email: number
    companyName: number
    companyId: number
    phone_number: number
    isActive: number
    isVerified: number
    password: number
    createdAt: number
    updatedAt: number
    balance: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    balance?: true
  }

  export type CompanySumAggregateInputType = {
    balance?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    email?: true
    companyName?: true
    companyId?: true
    phone_number?: true
    isActive?: true
    isVerified?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    balance?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    email?: true
    companyName?: true
    companyId?: true
    phone_number?: true
    isActive?: true
    isVerified?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    balance?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    email?: true
    companyName?: true
    companyId?: true
    phone_number?: true
    isActive?: true
    isVerified?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    balance?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    email: string
    companyName: string
    companyId: string
    phone_number: string | null
    isActive: boolean
    isVerified: boolean
    password: string
    createdAt: Date
    updatedAt: Date
    balance: number
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    companyName?: boolean
    companyId?: boolean
    phone_number?: boolean
    isActive?: boolean
    isVerified?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    balance?: boolean
    verificationBatch?: boolean | Company$verificationBatchArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    companyName?: boolean
    companyId?: boolean
    phone_number?: boolean
    isActive?: boolean
    isVerified?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    balance?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    email?: boolean
    companyName?: boolean
    companyId?: boolean
    phone_number?: boolean
    isActive?: boolean
    isVerified?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    balance?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "companyName" | "companyId" | "phone_number" | "isActive" | "isVerified" | "password" | "createdAt" | "updatedAt" | "balance", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verificationBatch?: boolean | Company$verificationBatchArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      verificationBatch: Prisma.$VerificationFormPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      companyName: string
      companyId: string
      phone_number: string | null
      isActive: boolean
      isVerified: boolean
      password: string
      createdAt: Date
      updatedAt: Date
      balance: number
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
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
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    verificationBatch<T extends Company$verificationBatchArgs<ExtArgs> = {}>(args?: Subset<T, Company$verificationBatchArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationFormPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Company model
   */ 
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly email: FieldRef<"Company", 'String'>
    readonly companyName: FieldRef<"Company", 'String'>
    readonly companyId: FieldRef<"Company", 'String'>
    readonly phone_number: FieldRef<"Company", 'String'>
    readonly isActive: FieldRef<"Company", 'Boolean'>
    readonly isVerified: FieldRef<"Company", 'Boolean'>
    readonly password: FieldRef<"Company", 'String'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
    readonly updatedAt: FieldRef<"Company", 'DateTime'>
    readonly balance: FieldRef<"Company", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
  }

  /**
   * Company.verificationBatch
   */
  export type Company$verificationBatchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationForm
     */
    select?: VerificationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationForm
     */
    omit?: VerificationFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationFormInclude<ExtArgs> | null
    where?: VerificationFormWhereInput
    orderBy?: VerificationFormOrderByWithRelationInput | VerificationFormOrderByWithRelationInput[]
    cursor?: VerificationFormWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VerificationFormScalarFieldEnum | VerificationFormScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model VerificationForm
   */

  export type AggregateVerificationForm = {
    _count: VerificationFormCountAggregateOutputType | null
    _avg: VerificationFormAvgAggregateOutputType | null
    _sum: VerificationFormSumAggregateOutputType | null
    _min: VerificationFormMinAggregateOutputType | null
    _max: VerificationFormMaxAggregateOutputType | null
  }

  export type VerificationFormAvgAggregateOutputType = {
    max: number | null
  }

  export type VerificationFormSumAggregateOutputType = {
    max: number | null
  }

  export type VerificationFormMinAggregateOutputType = {
    id: string | null
    title: string | null
    companyId: string | null
    expiryDate: Date | null
    max: number | null
    piFullname: boolean | null
    piDateOfBirth: boolean | null
    piGender: boolean | null
    piNationality: boolean | null
    piResidentialAddress: boolean | null
    piPhoneNumber: boolean | null
    piEmailAddress: boolean | null
    piNationalIdentificationNumber: boolean | null
    piMaritalStatus: boolean | null
    piNextofKinName: boolean | null
    piNextofKinRelationship: boolean | null
    piNextofKinPhoneNumber: boolean | null
    giFullName: boolean | null
    giRelationshiptoPersonnel: boolean | null
    giOccupation: boolean | null
    giPhoneNumber: boolean | null
    giResidentialAddress: boolean | null
    giEmailAddress: boolean | null
    giYearsKnown: boolean | null
    giNationalIdenificationNumber: boolean | null
    aiHighestQualification: boolean | null
    aiNameofInstitution: boolean | null
    aiYearofGraduation: boolean | null
    aiDegreeOrCertificationUpload: boolean | null
    aiProfessionalCertifications: boolean | null
    priCurrentJob: boolean | null
    priOrganizationName: boolean | null
    priEmploymentStartDate: boolean | null
    priEmploymentType: boolean | null
    priJobResponsibility: boolean | null
    priProfessionalSkills: boolean | null
    priLinkedInProfile: boolean | null
    priProfessionalReferenceName: boolean | null
    priProfessionalReferencePhoneNumber: boolean | null
    priCurrentSalary: boolean | null
    priExpectedSalaryRange: boolean | null
    mhaCurrentMentalHealthCondition: boolean | null
    mhaHistoryofMentalHealthConditions: boolean | null
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment: boolean | null
    mhaHaveYouHadAnyPreviousPsychiatricConsultations: boolean | null
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear: boolean | null
    mhaEmotionalWellbeing: boolean | null
  }

  export type VerificationFormMaxAggregateOutputType = {
    id: string | null
    title: string | null
    companyId: string | null
    expiryDate: Date | null
    max: number | null
    piFullname: boolean | null
    piDateOfBirth: boolean | null
    piGender: boolean | null
    piNationality: boolean | null
    piResidentialAddress: boolean | null
    piPhoneNumber: boolean | null
    piEmailAddress: boolean | null
    piNationalIdentificationNumber: boolean | null
    piMaritalStatus: boolean | null
    piNextofKinName: boolean | null
    piNextofKinRelationship: boolean | null
    piNextofKinPhoneNumber: boolean | null
    giFullName: boolean | null
    giRelationshiptoPersonnel: boolean | null
    giOccupation: boolean | null
    giPhoneNumber: boolean | null
    giResidentialAddress: boolean | null
    giEmailAddress: boolean | null
    giYearsKnown: boolean | null
    giNationalIdenificationNumber: boolean | null
    aiHighestQualification: boolean | null
    aiNameofInstitution: boolean | null
    aiYearofGraduation: boolean | null
    aiDegreeOrCertificationUpload: boolean | null
    aiProfessionalCertifications: boolean | null
    priCurrentJob: boolean | null
    priOrganizationName: boolean | null
    priEmploymentStartDate: boolean | null
    priEmploymentType: boolean | null
    priJobResponsibility: boolean | null
    priProfessionalSkills: boolean | null
    priLinkedInProfile: boolean | null
    priProfessionalReferenceName: boolean | null
    priProfessionalReferencePhoneNumber: boolean | null
    priCurrentSalary: boolean | null
    priExpectedSalaryRange: boolean | null
    mhaCurrentMentalHealthCondition: boolean | null
    mhaHistoryofMentalHealthConditions: boolean | null
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment: boolean | null
    mhaHaveYouHadAnyPreviousPsychiatricConsultations: boolean | null
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear: boolean | null
    mhaEmotionalWellbeing: boolean | null
  }

  export type VerificationFormCountAggregateOutputType = {
    id: number
    title: number
    companyId: number
    expiryDate: number
    max: number
    piFullname: number
    piDateOfBirth: number
    piGender: number
    piNationality: number
    piResidentialAddress: number
    piPhoneNumber: number
    piEmailAddress: number
    piNationalIdentificationNumber: number
    piMaritalStatus: number
    piNextofKinName: number
    piNextofKinRelationship: number
    piNextofKinPhoneNumber: number
    giFullName: number
    giRelationshiptoPersonnel: number
    giOccupation: number
    giPhoneNumber: number
    giResidentialAddress: number
    giEmailAddress: number
    giYearsKnown: number
    giNationalIdenificationNumber: number
    aiHighestQualification: number
    aiNameofInstitution: number
    aiYearofGraduation: number
    aiDegreeOrCertificationUpload: number
    aiProfessionalCertifications: number
    priCurrentJob: number
    priOrganizationName: number
    priEmploymentStartDate: number
    priEmploymentType: number
    priJobResponsibility: number
    priProfessionalSkills: number
    priLinkedInProfile: number
    priProfessionalReferenceName: number
    priProfessionalReferencePhoneNumber: number
    priCurrentSalary: number
    priExpectedSalaryRange: number
    mhaCurrentMentalHealthCondition: number
    mhaHistoryofMentalHealthConditions: number
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment: number
    mhaHaveYouHadAnyPreviousPsychiatricConsultations: number
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear: number
    mhaEmotionalWellbeing: number
    _all: number
  }


  export type VerificationFormAvgAggregateInputType = {
    max?: true
  }

  export type VerificationFormSumAggregateInputType = {
    max?: true
  }

  export type VerificationFormMinAggregateInputType = {
    id?: true
    title?: true
    companyId?: true
    expiryDate?: true
    max?: true
    piFullname?: true
    piDateOfBirth?: true
    piGender?: true
    piNationality?: true
    piResidentialAddress?: true
    piPhoneNumber?: true
    piEmailAddress?: true
    piNationalIdentificationNumber?: true
    piMaritalStatus?: true
    piNextofKinName?: true
    piNextofKinRelationship?: true
    piNextofKinPhoneNumber?: true
    giFullName?: true
    giRelationshiptoPersonnel?: true
    giOccupation?: true
    giPhoneNumber?: true
    giResidentialAddress?: true
    giEmailAddress?: true
    giYearsKnown?: true
    giNationalIdenificationNumber?: true
    aiHighestQualification?: true
    aiNameofInstitution?: true
    aiYearofGraduation?: true
    aiDegreeOrCertificationUpload?: true
    aiProfessionalCertifications?: true
    priCurrentJob?: true
    priOrganizationName?: true
    priEmploymentStartDate?: true
    priEmploymentType?: true
    priJobResponsibility?: true
    priProfessionalSkills?: true
    priLinkedInProfile?: true
    priProfessionalReferenceName?: true
    priProfessionalReferencePhoneNumber?: true
    priCurrentSalary?: true
    priExpectedSalaryRange?: true
    mhaCurrentMentalHealthCondition?: true
    mhaHistoryofMentalHealthConditions?: true
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment?: true
    mhaHaveYouHadAnyPreviousPsychiatricConsultations?: true
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear?: true
    mhaEmotionalWellbeing?: true
  }

  export type VerificationFormMaxAggregateInputType = {
    id?: true
    title?: true
    companyId?: true
    expiryDate?: true
    max?: true
    piFullname?: true
    piDateOfBirth?: true
    piGender?: true
    piNationality?: true
    piResidentialAddress?: true
    piPhoneNumber?: true
    piEmailAddress?: true
    piNationalIdentificationNumber?: true
    piMaritalStatus?: true
    piNextofKinName?: true
    piNextofKinRelationship?: true
    piNextofKinPhoneNumber?: true
    giFullName?: true
    giRelationshiptoPersonnel?: true
    giOccupation?: true
    giPhoneNumber?: true
    giResidentialAddress?: true
    giEmailAddress?: true
    giYearsKnown?: true
    giNationalIdenificationNumber?: true
    aiHighestQualification?: true
    aiNameofInstitution?: true
    aiYearofGraduation?: true
    aiDegreeOrCertificationUpload?: true
    aiProfessionalCertifications?: true
    priCurrentJob?: true
    priOrganizationName?: true
    priEmploymentStartDate?: true
    priEmploymentType?: true
    priJobResponsibility?: true
    priProfessionalSkills?: true
    priLinkedInProfile?: true
    priProfessionalReferenceName?: true
    priProfessionalReferencePhoneNumber?: true
    priCurrentSalary?: true
    priExpectedSalaryRange?: true
    mhaCurrentMentalHealthCondition?: true
    mhaHistoryofMentalHealthConditions?: true
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment?: true
    mhaHaveYouHadAnyPreviousPsychiatricConsultations?: true
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear?: true
    mhaEmotionalWellbeing?: true
  }

  export type VerificationFormCountAggregateInputType = {
    id?: true
    title?: true
    companyId?: true
    expiryDate?: true
    max?: true
    piFullname?: true
    piDateOfBirth?: true
    piGender?: true
    piNationality?: true
    piResidentialAddress?: true
    piPhoneNumber?: true
    piEmailAddress?: true
    piNationalIdentificationNumber?: true
    piMaritalStatus?: true
    piNextofKinName?: true
    piNextofKinRelationship?: true
    piNextofKinPhoneNumber?: true
    giFullName?: true
    giRelationshiptoPersonnel?: true
    giOccupation?: true
    giPhoneNumber?: true
    giResidentialAddress?: true
    giEmailAddress?: true
    giYearsKnown?: true
    giNationalIdenificationNumber?: true
    aiHighestQualification?: true
    aiNameofInstitution?: true
    aiYearofGraduation?: true
    aiDegreeOrCertificationUpload?: true
    aiProfessionalCertifications?: true
    priCurrentJob?: true
    priOrganizationName?: true
    priEmploymentStartDate?: true
    priEmploymentType?: true
    priJobResponsibility?: true
    priProfessionalSkills?: true
    priLinkedInProfile?: true
    priProfessionalReferenceName?: true
    priProfessionalReferencePhoneNumber?: true
    priCurrentSalary?: true
    priExpectedSalaryRange?: true
    mhaCurrentMentalHealthCondition?: true
    mhaHistoryofMentalHealthConditions?: true
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment?: true
    mhaHaveYouHadAnyPreviousPsychiatricConsultations?: true
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear?: true
    mhaEmotionalWellbeing?: true
    _all?: true
  }

  export type VerificationFormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationForm to aggregate.
     */
    where?: VerificationFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationForms to fetch.
     */
    orderBy?: VerificationFormOrderByWithRelationInput | VerificationFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationForms
    **/
    _count?: true | VerificationFormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VerificationFormAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VerificationFormSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationFormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationFormMaxAggregateInputType
  }

  export type GetVerificationFormAggregateType<T extends VerificationFormAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationForm[P]>
      : GetScalarType<T[P], AggregateVerificationForm[P]>
  }




  export type VerificationFormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationFormWhereInput
    orderBy?: VerificationFormOrderByWithAggregationInput | VerificationFormOrderByWithAggregationInput[]
    by: VerificationFormScalarFieldEnum[] | VerificationFormScalarFieldEnum
    having?: VerificationFormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationFormCountAggregateInputType | true
    _avg?: VerificationFormAvgAggregateInputType
    _sum?: VerificationFormSumAggregateInputType
    _min?: VerificationFormMinAggregateInputType
    _max?: VerificationFormMaxAggregateInputType
  }

  export type VerificationFormGroupByOutputType = {
    id: string
    title: string
    companyId: string
    expiryDate: Date
    max: number
    piFullname: boolean
    piDateOfBirth: boolean
    piGender: boolean
    piNationality: boolean
    piResidentialAddress: boolean
    piPhoneNumber: boolean
    piEmailAddress: boolean
    piNationalIdentificationNumber: boolean
    piMaritalStatus: boolean
    piNextofKinName: boolean
    piNextofKinRelationship: boolean
    piNextofKinPhoneNumber: boolean
    giFullName: boolean
    giRelationshiptoPersonnel: boolean
    giOccupation: boolean
    giPhoneNumber: boolean
    giResidentialAddress: boolean
    giEmailAddress: boolean
    giYearsKnown: boolean
    giNationalIdenificationNumber: boolean
    aiHighestQualification: boolean
    aiNameofInstitution: boolean
    aiYearofGraduation: boolean
    aiDegreeOrCertificationUpload: boolean
    aiProfessionalCertifications: boolean
    priCurrentJob: boolean
    priOrganizationName: boolean
    priEmploymentStartDate: boolean
    priEmploymentType: boolean
    priJobResponsibility: boolean
    priProfessionalSkills: boolean
    priLinkedInProfile: boolean
    priProfessionalReferenceName: boolean
    priProfessionalReferencePhoneNumber: boolean
    priCurrentSalary: boolean
    priExpectedSalaryRange: boolean
    mhaCurrentMentalHealthCondition: boolean
    mhaHistoryofMentalHealthConditions: boolean
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment: boolean
    mhaHaveYouHadAnyPreviousPsychiatricConsultations: boolean
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear: boolean
    mhaEmotionalWellbeing: boolean
    _count: VerificationFormCountAggregateOutputType | null
    _avg: VerificationFormAvgAggregateOutputType | null
    _sum: VerificationFormSumAggregateOutputType | null
    _min: VerificationFormMinAggregateOutputType | null
    _max: VerificationFormMaxAggregateOutputType | null
  }

  type GetVerificationFormGroupByPayload<T extends VerificationFormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationFormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationFormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationFormGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationFormGroupByOutputType[P]>
        }
      >
    >


  export type VerificationFormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    companyId?: boolean
    expiryDate?: boolean
    max?: boolean
    piFullname?: boolean
    piDateOfBirth?: boolean
    piGender?: boolean
    piNationality?: boolean
    piResidentialAddress?: boolean
    piPhoneNumber?: boolean
    piEmailAddress?: boolean
    piNationalIdentificationNumber?: boolean
    piMaritalStatus?: boolean
    piNextofKinName?: boolean
    piNextofKinRelationship?: boolean
    piNextofKinPhoneNumber?: boolean
    giFullName?: boolean
    giRelationshiptoPersonnel?: boolean
    giOccupation?: boolean
    giPhoneNumber?: boolean
    giResidentialAddress?: boolean
    giEmailAddress?: boolean
    giYearsKnown?: boolean
    giNationalIdenificationNumber?: boolean
    aiHighestQualification?: boolean
    aiNameofInstitution?: boolean
    aiYearofGraduation?: boolean
    aiDegreeOrCertificationUpload?: boolean
    aiProfessionalCertifications?: boolean
    priCurrentJob?: boolean
    priOrganizationName?: boolean
    priEmploymentStartDate?: boolean
    priEmploymentType?: boolean
    priJobResponsibility?: boolean
    priProfessionalSkills?: boolean
    priLinkedInProfile?: boolean
    priProfessionalReferenceName?: boolean
    priProfessionalReferencePhoneNumber?: boolean
    priCurrentSalary?: boolean
    priExpectedSalaryRange?: boolean
    mhaCurrentMentalHealthCondition?: boolean
    mhaHistoryofMentalHealthConditions?: boolean
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment?: boolean
    mhaHaveYouHadAnyPreviousPsychiatricConsultations?: boolean
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear?: boolean
    mhaEmotionalWellbeing?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    verificationResponse?: boolean | VerificationForm$verificationResponseArgs<ExtArgs>
    _count?: boolean | VerificationFormCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationForm"]>

  export type VerificationFormSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    companyId?: boolean
    expiryDate?: boolean
    max?: boolean
    piFullname?: boolean
    piDateOfBirth?: boolean
    piGender?: boolean
    piNationality?: boolean
    piResidentialAddress?: boolean
    piPhoneNumber?: boolean
    piEmailAddress?: boolean
    piNationalIdentificationNumber?: boolean
    piMaritalStatus?: boolean
    piNextofKinName?: boolean
    piNextofKinRelationship?: boolean
    piNextofKinPhoneNumber?: boolean
    giFullName?: boolean
    giRelationshiptoPersonnel?: boolean
    giOccupation?: boolean
    giPhoneNumber?: boolean
    giResidentialAddress?: boolean
    giEmailAddress?: boolean
    giYearsKnown?: boolean
    giNationalIdenificationNumber?: boolean
    aiHighestQualification?: boolean
    aiNameofInstitution?: boolean
    aiYearofGraduation?: boolean
    aiDegreeOrCertificationUpload?: boolean
    aiProfessionalCertifications?: boolean
    priCurrentJob?: boolean
    priOrganizationName?: boolean
    priEmploymentStartDate?: boolean
    priEmploymentType?: boolean
    priJobResponsibility?: boolean
    priProfessionalSkills?: boolean
    priLinkedInProfile?: boolean
    priProfessionalReferenceName?: boolean
    priProfessionalReferencePhoneNumber?: boolean
    priCurrentSalary?: boolean
    priExpectedSalaryRange?: boolean
    mhaCurrentMentalHealthCondition?: boolean
    mhaHistoryofMentalHealthConditions?: boolean
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment?: boolean
    mhaHaveYouHadAnyPreviousPsychiatricConsultations?: boolean
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear?: boolean
    mhaEmotionalWellbeing?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationForm"]>

  export type VerificationFormSelectScalar = {
    id?: boolean
    title?: boolean
    companyId?: boolean
    expiryDate?: boolean
    max?: boolean
    piFullname?: boolean
    piDateOfBirth?: boolean
    piGender?: boolean
    piNationality?: boolean
    piResidentialAddress?: boolean
    piPhoneNumber?: boolean
    piEmailAddress?: boolean
    piNationalIdentificationNumber?: boolean
    piMaritalStatus?: boolean
    piNextofKinName?: boolean
    piNextofKinRelationship?: boolean
    piNextofKinPhoneNumber?: boolean
    giFullName?: boolean
    giRelationshiptoPersonnel?: boolean
    giOccupation?: boolean
    giPhoneNumber?: boolean
    giResidentialAddress?: boolean
    giEmailAddress?: boolean
    giYearsKnown?: boolean
    giNationalIdenificationNumber?: boolean
    aiHighestQualification?: boolean
    aiNameofInstitution?: boolean
    aiYearofGraduation?: boolean
    aiDegreeOrCertificationUpload?: boolean
    aiProfessionalCertifications?: boolean
    priCurrentJob?: boolean
    priOrganizationName?: boolean
    priEmploymentStartDate?: boolean
    priEmploymentType?: boolean
    priJobResponsibility?: boolean
    priProfessionalSkills?: boolean
    priLinkedInProfile?: boolean
    priProfessionalReferenceName?: boolean
    priProfessionalReferencePhoneNumber?: boolean
    priCurrentSalary?: boolean
    priExpectedSalaryRange?: boolean
    mhaCurrentMentalHealthCondition?: boolean
    mhaHistoryofMentalHealthConditions?: boolean
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment?: boolean
    mhaHaveYouHadAnyPreviousPsychiatricConsultations?: boolean
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear?: boolean
    mhaEmotionalWellbeing?: boolean
  }

  export type VerificationFormOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "companyId" | "expiryDate" | "max" | "piFullname" | "piDateOfBirth" | "piGender" | "piNationality" | "piResidentialAddress" | "piPhoneNumber" | "piEmailAddress" | "piNationalIdentificationNumber" | "piMaritalStatus" | "piNextofKinName" | "piNextofKinRelationship" | "piNextofKinPhoneNumber" | "giFullName" | "giRelationshiptoPersonnel" | "giOccupation" | "giPhoneNumber" | "giResidentialAddress" | "giEmailAddress" | "giYearsKnown" | "giNationalIdenificationNumber" | "aiHighestQualification" | "aiNameofInstitution" | "aiYearofGraduation" | "aiDegreeOrCertificationUpload" | "aiProfessionalCertifications" | "priCurrentJob" | "priOrganizationName" | "priEmploymentStartDate" | "priEmploymentType" | "priJobResponsibility" | "priProfessionalSkills" | "priLinkedInProfile" | "priProfessionalReferenceName" | "priProfessionalReferencePhoneNumber" | "priCurrentSalary" | "priExpectedSalaryRange" | "mhaCurrentMentalHealthCondition" | "mhaHistoryofMentalHealthConditions" | "mhaAreYouCurrentlyUnderAnyMedicationOrTreatment" | "mhaHaveYouHadAnyPreviousPsychiatricConsultations" | "mhaHaveYouExperiencedAnyMajorTraumaInThePastYear" | "mhaEmotionalWellbeing", ExtArgs["result"]["verificationForm"]>
  export type VerificationFormInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    verificationResponse?: boolean | VerificationForm$verificationResponseArgs<ExtArgs>
    _count?: boolean | VerificationFormCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VerificationFormIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $VerificationFormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationForm"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      verificationResponse: Prisma.$VerificationResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      companyId: string
      expiryDate: Date
      max: number
      piFullname: boolean
      piDateOfBirth: boolean
      piGender: boolean
      piNationality: boolean
      piResidentialAddress: boolean
      piPhoneNumber: boolean
      piEmailAddress: boolean
      piNationalIdentificationNumber: boolean
      piMaritalStatus: boolean
      piNextofKinName: boolean
      piNextofKinRelationship: boolean
      piNextofKinPhoneNumber: boolean
      giFullName: boolean
      giRelationshiptoPersonnel: boolean
      giOccupation: boolean
      giPhoneNumber: boolean
      giResidentialAddress: boolean
      giEmailAddress: boolean
      giYearsKnown: boolean
      giNationalIdenificationNumber: boolean
      aiHighestQualification: boolean
      aiNameofInstitution: boolean
      aiYearofGraduation: boolean
      aiDegreeOrCertificationUpload: boolean
      aiProfessionalCertifications: boolean
      priCurrentJob: boolean
      priOrganizationName: boolean
      priEmploymentStartDate: boolean
      priEmploymentType: boolean
      priJobResponsibility: boolean
      priProfessionalSkills: boolean
      priLinkedInProfile: boolean
      priProfessionalReferenceName: boolean
      priProfessionalReferencePhoneNumber: boolean
      priCurrentSalary: boolean
      priExpectedSalaryRange: boolean
      mhaCurrentMentalHealthCondition: boolean
      mhaHistoryofMentalHealthConditions: boolean
      mhaAreYouCurrentlyUnderAnyMedicationOrTreatment: boolean
      mhaHaveYouHadAnyPreviousPsychiatricConsultations: boolean
      mhaHaveYouExperiencedAnyMajorTraumaInThePastYear: boolean
      mhaEmotionalWellbeing: boolean
    }, ExtArgs["result"]["verificationForm"]>
    composites: {}
  }

  type VerificationFormGetPayload<S extends boolean | null | undefined | VerificationFormDefaultArgs> = $Result.GetResult<Prisma.$VerificationFormPayload, S>

  type VerificationFormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VerificationFormFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationFormCountAggregateInputType | true
    }

  export interface VerificationFormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationForm'], meta: { name: 'VerificationForm' } }
    /**
     * Find zero or one VerificationForm that matches the filter.
     * @param {VerificationFormFindUniqueArgs} args - Arguments to find a VerificationForm
     * @example
     * // Get one VerificationForm
     * const verificationForm = await prisma.verificationForm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFormFindUniqueArgs>(args: SelectSubset<T, VerificationFormFindUniqueArgs<ExtArgs>>): Prisma__VerificationFormClient<$Result.GetResult<Prisma.$VerificationFormPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one VerificationForm that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VerificationFormFindUniqueOrThrowArgs} args - Arguments to find a VerificationForm
     * @example
     * // Get one VerificationForm
     * const verificationForm = await prisma.verificationForm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFormFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFormFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationFormClient<$Result.GetResult<Prisma.$VerificationFormPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first VerificationForm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFormFindFirstArgs} args - Arguments to find a VerificationForm
     * @example
     * // Get one VerificationForm
     * const verificationForm = await prisma.verificationForm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFormFindFirstArgs>(args?: SelectSubset<T, VerificationFormFindFirstArgs<ExtArgs>>): Prisma__VerificationFormClient<$Result.GetResult<Prisma.$VerificationFormPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first VerificationForm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFormFindFirstOrThrowArgs} args - Arguments to find a VerificationForm
     * @example
     * // Get one VerificationForm
     * const verificationForm = await prisma.verificationForm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFormFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFormFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationFormClient<$Result.GetResult<Prisma.$VerificationFormPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more VerificationForms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFormFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationForms
     * const verificationForms = await prisma.verificationForm.findMany()
     * 
     * // Get first 10 VerificationForms
     * const verificationForms = await prisma.verificationForm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationFormWithIdOnly = await prisma.verificationForm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFormFindManyArgs>(args?: SelectSubset<T, VerificationFormFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationFormPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a VerificationForm.
     * @param {VerificationFormCreateArgs} args - Arguments to create a VerificationForm.
     * @example
     * // Create one VerificationForm
     * const VerificationForm = await prisma.verificationForm.create({
     *   data: {
     *     // ... data to create a VerificationForm
     *   }
     * })
     * 
     */
    create<T extends VerificationFormCreateArgs>(args: SelectSubset<T, VerificationFormCreateArgs<ExtArgs>>): Prisma__VerificationFormClient<$Result.GetResult<Prisma.$VerificationFormPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many VerificationForms.
     * @param {VerificationFormCreateManyArgs} args - Arguments to create many VerificationForms.
     * @example
     * // Create many VerificationForms
     * const verificationForm = await prisma.verificationForm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationFormCreateManyArgs>(args?: SelectSubset<T, VerificationFormCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationForms and returns the data saved in the database.
     * @param {VerificationFormCreateManyAndReturnArgs} args - Arguments to create many VerificationForms.
     * @example
     * // Create many VerificationForms
     * const verificationForm = await prisma.verificationForm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationForms and only return the `id`
     * const verificationFormWithIdOnly = await prisma.verificationForm.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationFormCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationFormCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationFormPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a VerificationForm.
     * @param {VerificationFormDeleteArgs} args - Arguments to delete one VerificationForm.
     * @example
     * // Delete one VerificationForm
     * const VerificationForm = await prisma.verificationForm.delete({
     *   where: {
     *     // ... filter to delete one VerificationForm
     *   }
     * })
     * 
     */
    delete<T extends VerificationFormDeleteArgs>(args: SelectSubset<T, VerificationFormDeleteArgs<ExtArgs>>): Prisma__VerificationFormClient<$Result.GetResult<Prisma.$VerificationFormPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one VerificationForm.
     * @param {VerificationFormUpdateArgs} args - Arguments to update one VerificationForm.
     * @example
     * // Update one VerificationForm
     * const verificationForm = await prisma.verificationForm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationFormUpdateArgs>(args: SelectSubset<T, VerificationFormUpdateArgs<ExtArgs>>): Prisma__VerificationFormClient<$Result.GetResult<Prisma.$VerificationFormPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more VerificationForms.
     * @param {VerificationFormDeleteManyArgs} args - Arguments to filter VerificationForms to delete.
     * @example
     * // Delete a few VerificationForms
     * const { count } = await prisma.verificationForm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationFormDeleteManyArgs>(args?: SelectSubset<T, VerificationFormDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationForms
     * const verificationForm = await prisma.verificationForm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationFormUpdateManyArgs>(args: SelectSubset<T, VerificationFormUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationForm.
     * @param {VerificationFormUpsertArgs} args - Arguments to update or create a VerificationForm.
     * @example
     * // Update or create a VerificationForm
     * const verificationForm = await prisma.verificationForm.upsert({
     *   create: {
     *     // ... data to create a VerificationForm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationForm we want to update
     *   }
     * })
     */
    upsert<T extends VerificationFormUpsertArgs>(args: SelectSubset<T, VerificationFormUpsertArgs<ExtArgs>>): Prisma__VerificationFormClient<$Result.GetResult<Prisma.$VerificationFormPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of VerificationForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFormCountArgs} args - Arguments to filter VerificationForms to count.
     * @example
     * // Count the number of VerificationForms
     * const count = await prisma.verificationForm.count({
     *   where: {
     *     // ... the filter for the VerificationForms we want to count
     *   }
     * })
    **/
    count<T extends VerificationFormCountArgs>(
      args?: Subset<T, VerificationFormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationFormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationFormAggregateArgs>(args: Subset<T, VerificationFormAggregateArgs>): Prisma.PrismaPromise<GetVerificationFormAggregateType<T>>

    /**
     * Group by VerificationForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFormGroupByArgs} args - Group by arguments.
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
      T extends VerificationFormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationFormGroupByArgs['orderBy'] }
        : { orderBy?: VerificationFormGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, VerificationFormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationForm model
   */
  readonly fields: VerificationFormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationForm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationFormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    verificationResponse<T extends VerificationForm$verificationResponseArgs<ExtArgs> = {}>(args?: Subset<T, VerificationForm$verificationResponseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationResponsePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationForm model
   */ 
  interface VerificationFormFieldRefs {
    readonly id: FieldRef<"VerificationForm", 'String'>
    readonly title: FieldRef<"VerificationForm", 'String'>
    readonly companyId: FieldRef<"VerificationForm", 'String'>
    readonly expiryDate: FieldRef<"VerificationForm", 'DateTime'>
    readonly max: FieldRef<"VerificationForm", 'Int'>
    readonly piFullname: FieldRef<"VerificationForm", 'Boolean'>
    readonly piDateOfBirth: FieldRef<"VerificationForm", 'Boolean'>
    readonly piGender: FieldRef<"VerificationForm", 'Boolean'>
    readonly piNationality: FieldRef<"VerificationForm", 'Boolean'>
    readonly piResidentialAddress: FieldRef<"VerificationForm", 'Boolean'>
    readonly piPhoneNumber: FieldRef<"VerificationForm", 'Boolean'>
    readonly piEmailAddress: FieldRef<"VerificationForm", 'Boolean'>
    readonly piNationalIdentificationNumber: FieldRef<"VerificationForm", 'Boolean'>
    readonly piMaritalStatus: FieldRef<"VerificationForm", 'Boolean'>
    readonly piNextofKinName: FieldRef<"VerificationForm", 'Boolean'>
    readonly piNextofKinRelationship: FieldRef<"VerificationForm", 'Boolean'>
    readonly piNextofKinPhoneNumber: FieldRef<"VerificationForm", 'Boolean'>
    readonly giFullName: FieldRef<"VerificationForm", 'Boolean'>
    readonly giRelationshiptoPersonnel: FieldRef<"VerificationForm", 'Boolean'>
    readonly giOccupation: FieldRef<"VerificationForm", 'Boolean'>
    readonly giPhoneNumber: FieldRef<"VerificationForm", 'Boolean'>
    readonly giResidentialAddress: FieldRef<"VerificationForm", 'Boolean'>
    readonly giEmailAddress: FieldRef<"VerificationForm", 'Boolean'>
    readonly giYearsKnown: FieldRef<"VerificationForm", 'Boolean'>
    readonly giNationalIdenificationNumber: FieldRef<"VerificationForm", 'Boolean'>
    readonly aiHighestQualification: FieldRef<"VerificationForm", 'Boolean'>
    readonly aiNameofInstitution: FieldRef<"VerificationForm", 'Boolean'>
    readonly aiYearofGraduation: FieldRef<"VerificationForm", 'Boolean'>
    readonly aiDegreeOrCertificationUpload: FieldRef<"VerificationForm", 'Boolean'>
    readonly aiProfessionalCertifications: FieldRef<"VerificationForm", 'Boolean'>
    readonly priCurrentJob: FieldRef<"VerificationForm", 'Boolean'>
    readonly priOrganizationName: FieldRef<"VerificationForm", 'Boolean'>
    readonly priEmploymentStartDate: FieldRef<"VerificationForm", 'Boolean'>
    readonly priEmploymentType: FieldRef<"VerificationForm", 'Boolean'>
    readonly priJobResponsibility: FieldRef<"VerificationForm", 'Boolean'>
    readonly priProfessionalSkills: FieldRef<"VerificationForm", 'Boolean'>
    readonly priLinkedInProfile: FieldRef<"VerificationForm", 'Boolean'>
    readonly priProfessionalReferenceName: FieldRef<"VerificationForm", 'Boolean'>
    readonly priProfessionalReferencePhoneNumber: FieldRef<"VerificationForm", 'Boolean'>
    readonly priCurrentSalary: FieldRef<"VerificationForm", 'Boolean'>
    readonly priExpectedSalaryRange: FieldRef<"VerificationForm", 'Boolean'>
    readonly mhaCurrentMentalHealthCondition: FieldRef<"VerificationForm", 'Boolean'>
    readonly mhaHistoryofMentalHealthConditions: FieldRef<"VerificationForm", 'Boolean'>
    readonly mhaAreYouCurrentlyUnderAnyMedicationOrTreatment: FieldRef<"VerificationForm", 'Boolean'>
    readonly mhaHaveYouHadAnyPreviousPsychiatricConsultations: FieldRef<"VerificationForm", 'Boolean'>
    readonly mhaHaveYouExperiencedAnyMajorTraumaInThePastYear: FieldRef<"VerificationForm", 'Boolean'>
    readonly mhaEmotionalWellbeing: FieldRef<"VerificationForm", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * VerificationForm findUnique
   */
  export type VerificationFormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationForm
     */
    select?: VerificationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationForm
     */
    omit?: VerificationFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationFormInclude<ExtArgs> | null
    /**
     * Filter, which VerificationForm to fetch.
     */
    where: VerificationFormWhereUniqueInput
  }

  /**
   * VerificationForm findUniqueOrThrow
   */
  export type VerificationFormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationForm
     */
    select?: VerificationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationForm
     */
    omit?: VerificationFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationFormInclude<ExtArgs> | null
    /**
     * Filter, which VerificationForm to fetch.
     */
    where: VerificationFormWhereUniqueInput
  }

  /**
   * VerificationForm findFirst
   */
  export type VerificationFormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationForm
     */
    select?: VerificationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationForm
     */
    omit?: VerificationFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationFormInclude<ExtArgs> | null
    /**
     * Filter, which VerificationForm to fetch.
     */
    where?: VerificationFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationForms to fetch.
     */
    orderBy?: VerificationFormOrderByWithRelationInput | VerificationFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationForms.
     */
    cursor?: VerificationFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationForms.
     */
    distinct?: VerificationFormScalarFieldEnum | VerificationFormScalarFieldEnum[]
  }

  /**
   * VerificationForm findFirstOrThrow
   */
  export type VerificationFormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationForm
     */
    select?: VerificationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationForm
     */
    omit?: VerificationFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationFormInclude<ExtArgs> | null
    /**
     * Filter, which VerificationForm to fetch.
     */
    where?: VerificationFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationForms to fetch.
     */
    orderBy?: VerificationFormOrderByWithRelationInput | VerificationFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationForms.
     */
    cursor?: VerificationFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationForms.
     */
    distinct?: VerificationFormScalarFieldEnum | VerificationFormScalarFieldEnum[]
  }

  /**
   * VerificationForm findMany
   */
  export type VerificationFormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationForm
     */
    select?: VerificationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationForm
     */
    omit?: VerificationFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationFormInclude<ExtArgs> | null
    /**
     * Filter, which VerificationForms to fetch.
     */
    where?: VerificationFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationForms to fetch.
     */
    orderBy?: VerificationFormOrderByWithRelationInput | VerificationFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationForms.
     */
    cursor?: VerificationFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationForms.
     */
    skip?: number
    distinct?: VerificationFormScalarFieldEnum | VerificationFormScalarFieldEnum[]
  }

  /**
   * VerificationForm create
   */
  export type VerificationFormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationForm
     */
    select?: VerificationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationForm
     */
    omit?: VerificationFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationFormInclude<ExtArgs> | null
    /**
     * The data needed to create a VerificationForm.
     */
    data: XOR<VerificationFormCreateInput, VerificationFormUncheckedCreateInput>
  }

  /**
   * VerificationForm createMany
   */
  export type VerificationFormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationForms.
     */
    data: VerificationFormCreateManyInput | VerificationFormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationForm createManyAndReturn
   */
  export type VerificationFormCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationForm
     */
    select?: VerificationFormSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationForm
     */
    omit?: VerificationFormOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationForms.
     */
    data: VerificationFormCreateManyInput | VerificationFormCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationFormIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VerificationForm update
   */
  export type VerificationFormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationForm
     */
    select?: VerificationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationForm
     */
    omit?: VerificationFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationFormInclude<ExtArgs> | null
    /**
     * The data needed to update a VerificationForm.
     */
    data: XOR<VerificationFormUpdateInput, VerificationFormUncheckedUpdateInput>
    /**
     * Choose, which VerificationForm to update.
     */
    where: VerificationFormWhereUniqueInput
  }

  /**
   * VerificationForm updateMany
   */
  export type VerificationFormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationForms.
     */
    data: XOR<VerificationFormUpdateManyMutationInput, VerificationFormUncheckedUpdateManyInput>
    /**
     * Filter which VerificationForms to update
     */
    where?: VerificationFormWhereInput
  }

  /**
   * VerificationForm upsert
   */
  export type VerificationFormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationForm
     */
    select?: VerificationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationForm
     */
    omit?: VerificationFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationFormInclude<ExtArgs> | null
    /**
     * The filter to search for the VerificationForm to update in case it exists.
     */
    where: VerificationFormWhereUniqueInput
    /**
     * In case the VerificationForm found by the `where` argument doesn't exist, create a new VerificationForm with this data.
     */
    create: XOR<VerificationFormCreateInput, VerificationFormUncheckedCreateInput>
    /**
     * In case the VerificationForm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationFormUpdateInput, VerificationFormUncheckedUpdateInput>
  }

  /**
   * VerificationForm delete
   */
  export type VerificationFormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationForm
     */
    select?: VerificationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationForm
     */
    omit?: VerificationFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationFormInclude<ExtArgs> | null
    /**
     * Filter which VerificationForm to delete.
     */
    where: VerificationFormWhereUniqueInput
  }

  /**
   * VerificationForm deleteMany
   */
  export type VerificationFormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationForms to delete
     */
    where?: VerificationFormWhereInput
  }

  /**
   * VerificationForm.verificationResponse
   */
  export type VerificationForm$verificationResponseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationResponse
     */
    select?: VerificationResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationResponse
     */
    omit?: VerificationResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationResponseInclude<ExtArgs> | null
    where?: VerificationResponseWhereInput
    orderBy?: VerificationResponseOrderByWithRelationInput | VerificationResponseOrderByWithRelationInput[]
    cursor?: VerificationResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VerificationResponseScalarFieldEnum | VerificationResponseScalarFieldEnum[]
  }

  /**
   * VerificationForm without action
   */
  export type VerificationFormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationForm
     */
    select?: VerificationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationForm
     */
    omit?: VerificationFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationFormInclude<ExtArgs> | null
  }


  /**
   * Model VerificationResponse
   */

  export type AggregateVerificationResponse = {
    _count: VerificationResponseCountAggregateOutputType | null
    _min: VerificationResponseMinAggregateOutputType | null
    _max: VerificationResponseMaxAggregateOutputType | null
  }

  export type VerificationResponseMinAggregateOutputType = {
    id: string | null
    formId: string | null
    respondentId: string | null
    submittedAt: Date | null
  }

  export type VerificationResponseMaxAggregateOutputType = {
    id: string | null
    formId: string | null
    respondentId: string | null
    submittedAt: Date | null
  }

  export type VerificationResponseCountAggregateOutputType = {
    id: number
    formId: number
    respondentId: number
    responses: number
    submittedAt: number
    _all: number
  }


  export type VerificationResponseMinAggregateInputType = {
    id?: true
    formId?: true
    respondentId?: true
    submittedAt?: true
  }

  export type VerificationResponseMaxAggregateInputType = {
    id?: true
    formId?: true
    respondentId?: true
    submittedAt?: true
  }

  export type VerificationResponseCountAggregateInputType = {
    id?: true
    formId?: true
    respondentId?: true
    responses?: true
    submittedAt?: true
    _all?: true
  }

  export type VerificationResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationResponse to aggregate.
     */
    where?: VerificationResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationResponses to fetch.
     */
    orderBy?: VerificationResponseOrderByWithRelationInput | VerificationResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationResponses
    **/
    _count?: true | VerificationResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationResponseMaxAggregateInputType
  }

  export type GetVerificationResponseAggregateType<T extends VerificationResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationResponse[P]>
      : GetScalarType<T[P], AggregateVerificationResponse[P]>
  }




  export type VerificationResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationResponseWhereInput
    orderBy?: VerificationResponseOrderByWithAggregationInput | VerificationResponseOrderByWithAggregationInput[]
    by: VerificationResponseScalarFieldEnum[] | VerificationResponseScalarFieldEnum
    having?: VerificationResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationResponseCountAggregateInputType | true
    _min?: VerificationResponseMinAggregateInputType
    _max?: VerificationResponseMaxAggregateInputType
  }

  export type VerificationResponseGroupByOutputType = {
    id: string
    formId: string
    respondentId: string
    responses: JsonValue
    submittedAt: Date
    _count: VerificationResponseCountAggregateOutputType | null
    _min: VerificationResponseMinAggregateOutputType | null
    _max: VerificationResponseMaxAggregateOutputType | null
  }

  type GetVerificationResponseGroupByPayload<T extends VerificationResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationResponseGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationResponseGroupByOutputType[P]>
        }
      >
    >


  export type VerificationResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formId?: boolean
    respondentId?: boolean
    responses?: boolean
    submittedAt?: boolean
    form?: boolean | VerificationFormDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationResponse"]>

  export type VerificationResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formId?: boolean
    respondentId?: boolean
    responses?: boolean
    submittedAt?: boolean
    form?: boolean | VerificationFormDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationResponse"]>

  export type VerificationResponseSelectScalar = {
    id?: boolean
    formId?: boolean
    respondentId?: boolean
    responses?: boolean
    submittedAt?: boolean
  }

  export type VerificationResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "formId" | "respondentId" | "responses" | "submittedAt", ExtArgs["result"]["verificationResponse"]>
  export type VerificationResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | VerificationFormDefaultArgs<ExtArgs>
  }
  export type VerificationResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | VerificationFormDefaultArgs<ExtArgs>
  }

  export type $VerificationResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationResponse"
    objects: {
      form: Prisma.$VerificationFormPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      formId: string
      respondentId: string
      responses: Prisma.JsonValue
      submittedAt: Date
    }, ExtArgs["result"]["verificationResponse"]>
    composites: {}
  }

  type VerificationResponseGetPayload<S extends boolean | null | undefined | VerificationResponseDefaultArgs> = $Result.GetResult<Prisma.$VerificationResponsePayload, S>

  type VerificationResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VerificationResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationResponseCountAggregateInputType | true
    }

  export interface VerificationResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationResponse'], meta: { name: 'VerificationResponse' } }
    /**
     * Find zero or one VerificationResponse that matches the filter.
     * @param {VerificationResponseFindUniqueArgs} args - Arguments to find a VerificationResponse
     * @example
     * // Get one VerificationResponse
     * const verificationResponse = await prisma.verificationResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationResponseFindUniqueArgs>(args: SelectSubset<T, VerificationResponseFindUniqueArgs<ExtArgs>>): Prisma__VerificationResponseClient<$Result.GetResult<Prisma.$VerificationResponsePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one VerificationResponse that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VerificationResponseFindUniqueOrThrowArgs} args - Arguments to find a VerificationResponse
     * @example
     * // Get one VerificationResponse
     * const verificationResponse = await prisma.verificationResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationResponseClient<$Result.GetResult<Prisma.$VerificationResponsePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first VerificationResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationResponseFindFirstArgs} args - Arguments to find a VerificationResponse
     * @example
     * // Get one VerificationResponse
     * const verificationResponse = await prisma.verificationResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationResponseFindFirstArgs>(args?: SelectSubset<T, VerificationResponseFindFirstArgs<ExtArgs>>): Prisma__VerificationResponseClient<$Result.GetResult<Prisma.$VerificationResponsePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first VerificationResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationResponseFindFirstOrThrowArgs} args - Arguments to find a VerificationResponse
     * @example
     * // Get one VerificationResponse
     * const verificationResponse = await prisma.verificationResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationResponseClient<$Result.GetResult<Prisma.$VerificationResponsePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more VerificationResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationResponses
     * const verificationResponses = await prisma.verificationResponse.findMany()
     * 
     * // Get first 10 VerificationResponses
     * const verificationResponses = await prisma.verificationResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationResponseWithIdOnly = await prisma.verificationResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationResponseFindManyArgs>(args?: SelectSubset<T, VerificationResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationResponsePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a VerificationResponse.
     * @param {VerificationResponseCreateArgs} args - Arguments to create a VerificationResponse.
     * @example
     * // Create one VerificationResponse
     * const VerificationResponse = await prisma.verificationResponse.create({
     *   data: {
     *     // ... data to create a VerificationResponse
     *   }
     * })
     * 
     */
    create<T extends VerificationResponseCreateArgs>(args: SelectSubset<T, VerificationResponseCreateArgs<ExtArgs>>): Prisma__VerificationResponseClient<$Result.GetResult<Prisma.$VerificationResponsePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many VerificationResponses.
     * @param {VerificationResponseCreateManyArgs} args - Arguments to create many VerificationResponses.
     * @example
     * // Create many VerificationResponses
     * const verificationResponse = await prisma.verificationResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationResponseCreateManyArgs>(args?: SelectSubset<T, VerificationResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationResponses and returns the data saved in the database.
     * @param {VerificationResponseCreateManyAndReturnArgs} args - Arguments to create many VerificationResponses.
     * @example
     * // Create many VerificationResponses
     * const verificationResponse = await prisma.verificationResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationResponses and only return the `id`
     * const verificationResponseWithIdOnly = await prisma.verificationResponse.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationResponsePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a VerificationResponse.
     * @param {VerificationResponseDeleteArgs} args - Arguments to delete one VerificationResponse.
     * @example
     * // Delete one VerificationResponse
     * const VerificationResponse = await prisma.verificationResponse.delete({
     *   where: {
     *     // ... filter to delete one VerificationResponse
     *   }
     * })
     * 
     */
    delete<T extends VerificationResponseDeleteArgs>(args: SelectSubset<T, VerificationResponseDeleteArgs<ExtArgs>>): Prisma__VerificationResponseClient<$Result.GetResult<Prisma.$VerificationResponsePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one VerificationResponse.
     * @param {VerificationResponseUpdateArgs} args - Arguments to update one VerificationResponse.
     * @example
     * // Update one VerificationResponse
     * const verificationResponse = await prisma.verificationResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationResponseUpdateArgs>(args: SelectSubset<T, VerificationResponseUpdateArgs<ExtArgs>>): Prisma__VerificationResponseClient<$Result.GetResult<Prisma.$VerificationResponsePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more VerificationResponses.
     * @param {VerificationResponseDeleteManyArgs} args - Arguments to filter VerificationResponses to delete.
     * @example
     * // Delete a few VerificationResponses
     * const { count } = await prisma.verificationResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationResponseDeleteManyArgs>(args?: SelectSubset<T, VerificationResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationResponses
     * const verificationResponse = await prisma.verificationResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationResponseUpdateManyArgs>(args: SelectSubset<T, VerificationResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationResponse.
     * @param {VerificationResponseUpsertArgs} args - Arguments to update or create a VerificationResponse.
     * @example
     * // Update or create a VerificationResponse
     * const verificationResponse = await prisma.verificationResponse.upsert({
     *   create: {
     *     // ... data to create a VerificationResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationResponse we want to update
     *   }
     * })
     */
    upsert<T extends VerificationResponseUpsertArgs>(args: SelectSubset<T, VerificationResponseUpsertArgs<ExtArgs>>): Prisma__VerificationResponseClient<$Result.GetResult<Prisma.$VerificationResponsePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of VerificationResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationResponseCountArgs} args - Arguments to filter VerificationResponses to count.
     * @example
     * // Count the number of VerificationResponses
     * const count = await prisma.verificationResponse.count({
     *   where: {
     *     // ... the filter for the VerificationResponses we want to count
     *   }
     * })
    **/
    count<T extends VerificationResponseCountArgs>(
      args?: Subset<T, VerificationResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationResponseAggregateArgs>(args: Subset<T, VerificationResponseAggregateArgs>): Prisma.PrismaPromise<GetVerificationResponseAggregateType<T>>

    /**
     * Group by VerificationResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationResponseGroupByArgs} args - Group by arguments.
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
      T extends VerificationResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationResponseGroupByArgs['orderBy'] }
        : { orderBy?: VerificationResponseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, VerificationResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationResponse model
   */
  readonly fields: VerificationResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    form<T extends VerificationFormDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VerificationFormDefaultArgs<ExtArgs>>): Prisma__VerificationFormClient<$Result.GetResult<Prisma.$VerificationFormPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationResponse model
   */ 
  interface VerificationResponseFieldRefs {
    readonly id: FieldRef<"VerificationResponse", 'String'>
    readonly formId: FieldRef<"VerificationResponse", 'String'>
    readonly respondentId: FieldRef<"VerificationResponse", 'String'>
    readonly responses: FieldRef<"VerificationResponse", 'Json'>
    readonly submittedAt: FieldRef<"VerificationResponse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationResponse findUnique
   */
  export type VerificationResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationResponse
     */
    select?: VerificationResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationResponse
     */
    omit?: VerificationResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationResponseInclude<ExtArgs> | null
    /**
     * Filter, which VerificationResponse to fetch.
     */
    where: VerificationResponseWhereUniqueInput
  }

  /**
   * VerificationResponse findUniqueOrThrow
   */
  export type VerificationResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationResponse
     */
    select?: VerificationResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationResponse
     */
    omit?: VerificationResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationResponseInclude<ExtArgs> | null
    /**
     * Filter, which VerificationResponse to fetch.
     */
    where: VerificationResponseWhereUniqueInput
  }

  /**
   * VerificationResponse findFirst
   */
  export type VerificationResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationResponse
     */
    select?: VerificationResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationResponse
     */
    omit?: VerificationResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationResponseInclude<ExtArgs> | null
    /**
     * Filter, which VerificationResponse to fetch.
     */
    where?: VerificationResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationResponses to fetch.
     */
    orderBy?: VerificationResponseOrderByWithRelationInput | VerificationResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationResponses.
     */
    cursor?: VerificationResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationResponses.
     */
    distinct?: VerificationResponseScalarFieldEnum | VerificationResponseScalarFieldEnum[]
  }

  /**
   * VerificationResponse findFirstOrThrow
   */
  export type VerificationResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationResponse
     */
    select?: VerificationResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationResponse
     */
    omit?: VerificationResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationResponseInclude<ExtArgs> | null
    /**
     * Filter, which VerificationResponse to fetch.
     */
    where?: VerificationResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationResponses to fetch.
     */
    orderBy?: VerificationResponseOrderByWithRelationInput | VerificationResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationResponses.
     */
    cursor?: VerificationResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationResponses.
     */
    distinct?: VerificationResponseScalarFieldEnum | VerificationResponseScalarFieldEnum[]
  }

  /**
   * VerificationResponse findMany
   */
  export type VerificationResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationResponse
     */
    select?: VerificationResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationResponse
     */
    omit?: VerificationResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationResponseInclude<ExtArgs> | null
    /**
     * Filter, which VerificationResponses to fetch.
     */
    where?: VerificationResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationResponses to fetch.
     */
    orderBy?: VerificationResponseOrderByWithRelationInput | VerificationResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationResponses.
     */
    cursor?: VerificationResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationResponses.
     */
    skip?: number
    distinct?: VerificationResponseScalarFieldEnum | VerificationResponseScalarFieldEnum[]
  }

  /**
   * VerificationResponse create
   */
  export type VerificationResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationResponse
     */
    select?: VerificationResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationResponse
     */
    omit?: VerificationResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a VerificationResponse.
     */
    data: XOR<VerificationResponseCreateInput, VerificationResponseUncheckedCreateInput>
  }

  /**
   * VerificationResponse createMany
   */
  export type VerificationResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationResponses.
     */
    data: VerificationResponseCreateManyInput | VerificationResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationResponse createManyAndReturn
   */
  export type VerificationResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationResponse
     */
    select?: VerificationResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationResponse
     */
    omit?: VerificationResponseOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationResponses.
     */
    data: VerificationResponseCreateManyInput | VerificationResponseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VerificationResponse update
   */
  export type VerificationResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationResponse
     */
    select?: VerificationResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationResponse
     */
    omit?: VerificationResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a VerificationResponse.
     */
    data: XOR<VerificationResponseUpdateInput, VerificationResponseUncheckedUpdateInput>
    /**
     * Choose, which VerificationResponse to update.
     */
    where: VerificationResponseWhereUniqueInput
  }

  /**
   * VerificationResponse updateMany
   */
  export type VerificationResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationResponses.
     */
    data: XOR<VerificationResponseUpdateManyMutationInput, VerificationResponseUncheckedUpdateManyInput>
    /**
     * Filter which VerificationResponses to update
     */
    where?: VerificationResponseWhereInput
  }

  /**
   * VerificationResponse upsert
   */
  export type VerificationResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationResponse
     */
    select?: VerificationResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationResponse
     */
    omit?: VerificationResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the VerificationResponse to update in case it exists.
     */
    where: VerificationResponseWhereUniqueInput
    /**
     * In case the VerificationResponse found by the `where` argument doesn't exist, create a new VerificationResponse with this data.
     */
    create: XOR<VerificationResponseCreateInput, VerificationResponseUncheckedCreateInput>
    /**
     * In case the VerificationResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationResponseUpdateInput, VerificationResponseUncheckedUpdateInput>
  }

  /**
   * VerificationResponse delete
   */
  export type VerificationResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationResponse
     */
    select?: VerificationResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationResponse
     */
    omit?: VerificationResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationResponseInclude<ExtArgs> | null
    /**
     * Filter which VerificationResponse to delete.
     */
    where: VerificationResponseWhereUniqueInput
  }

  /**
   * VerificationResponse deleteMany
   */
  export type VerificationResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationResponses to delete
     */
    where?: VerificationResponseWhereInput
  }

  /**
   * VerificationResponse without action
   */
  export type VerificationResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationResponse
     */
    select?: VerificationResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationResponse
     */
    omit?: VerificationResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationResponseInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    email: 'email',
    companyName: 'companyName',
    companyId: 'companyId',
    phone_number: 'phone_number',
    isActive: 'isActive',
    isVerified: 'isVerified',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    balance: 'balance'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const VerificationFormScalarFieldEnum: {
    id: 'id',
    title: 'title',
    companyId: 'companyId',
    expiryDate: 'expiryDate',
    max: 'max',
    piFullname: 'piFullname',
    piDateOfBirth: 'piDateOfBirth',
    piGender: 'piGender',
    piNationality: 'piNationality',
    piResidentialAddress: 'piResidentialAddress',
    piPhoneNumber: 'piPhoneNumber',
    piEmailAddress: 'piEmailAddress',
    piNationalIdentificationNumber: 'piNationalIdentificationNumber',
    piMaritalStatus: 'piMaritalStatus',
    piNextofKinName: 'piNextofKinName',
    piNextofKinRelationship: 'piNextofKinRelationship',
    piNextofKinPhoneNumber: 'piNextofKinPhoneNumber',
    giFullName: 'giFullName',
    giRelationshiptoPersonnel: 'giRelationshiptoPersonnel',
    giOccupation: 'giOccupation',
    giPhoneNumber: 'giPhoneNumber',
    giResidentialAddress: 'giResidentialAddress',
    giEmailAddress: 'giEmailAddress',
    giYearsKnown: 'giYearsKnown',
    giNationalIdenificationNumber: 'giNationalIdenificationNumber',
    aiHighestQualification: 'aiHighestQualification',
    aiNameofInstitution: 'aiNameofInstitution',
    aiYearofGraduation: 'aiYearofGraduation',
    aiDegreeOrCertificationUpload: 'aiDegreeOrCertificationUpload',
    aiProfessionalCertifications: 'aiProfessionalCertifications',
    priCurrentJob: 'priCurrentJob',
    priOrganizationName: 'priOrganizationName',
    priEmploymentStartDate: 'priEmploymentStartDate',
    priEmploymentType: 'priEmploymentType',
    priJobResponsibility: 'priJobResponsibility',
    priProfessionalSkills: 'priProfessionalSkills',
    priLinkedInProfile: 'priLinkedInProfile',
    priProfessionalReferenceName: 'priProfessionalReferenceName',
    priProfessionalReferencePhoneNumber: 'priProfessionalReferencePhoneNumber',
    priCurrentSalary: 'priCurrentSalary',
    priExpectedSalaryRange: 'priExpectedSalaryRange',
    mhaCurrentMentalHealthCondition: 'mhaCurrentMentalHealthCondition',
    mhaHistoryofMentalHealthConditions: 'mhaHistoryofMentalHealthConditions',
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment: 'mhaAreYouCurrentlyUnderAnyMedicationOrTreatment',
    mhaHaveYouHadAnyPreviousPsychiatricConsultations: 'mhaHaveYouHadAnyPreviousPsychiatricConsultations',
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear: 'mhaHaveYouExperiencedAnyMajorTraumaInThePastYear',
    mhaEmotionalWellbeing: 'mhaEmotionalWellbeing'
  };

  export type VerificationFormScalarFieldEnum = (typeof VerificationFormScalarFieldEnum)[keyof typeof VerificationFormScalarFieldEnum]


  export const VerificationResponseScalarFieldEnum: {
    id: 'id',
    formId: 'formId',
    respondentId: 'respondentId',
    responses: 'responses',
    submittedAt: 'submittedAt'
  };

  export type VerificationResponseScalarFieldEnum = (typeof VerificationResponseScalarFieldEnum)[keyof typeof VerificationResponseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    email?: StringFilter<"Company"> | string
    companyName?: StringFilter<"Company"> | string
    companyId?: StringFilter<"Company"> | string
    phone_number?: StringNullableFilter<"Company"> | string | null
    isActive?: BoolFilter<"Company"> | boolean
    isVerified?: BoolFilter<"Company"> | boolean
    password?: StringFilter<"Company"> | string
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    balance?: IntFilter<"Company"> | number
    verificationBatch?: VerificationFormListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    companyName?: SortOrder
    companyId?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    balance?: SortOrder
    verificationBatch?: VerificationFormOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone_number?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    companyName?: StringFilter<"Company"> | string
    companyId?: StringFilter<"Company"> | string
    isActive?: BoolFilter<"Company"> | boolean
    isVerified?: BoolFilter<"Company"> | boolean
    password?: StringFilter<"Company"> | string
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    balance?: IntFilter<"Company"> | number
    verificationBatch?: VerificationFormListRelationFilter
  }, "id" | "email" | "phone_number">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    companyName?: SortOrder
    companyId?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    balance?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _avg?: CompanyAvgOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
    _sum?: CompanySumOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    email?: StringWithAggregatesFilter<"Company"> | string
    companyName?: StringWithAggregatesFilter<"Company"> | string
    companyId?: StringWithAggregatesFilter<"Company"> | string
    phone_number?: StringNullableWithAggregatesFilter<"Company"> | string | null
    isActive?: BoolWithAggregatesFilter<"Company"> | boolean
    isVerified?: BoolWithAggregatesFilter<"Company"> | boolean
    password?: StringWithAggregatesFilter<"Company"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    balance?: IntWithAggregatesFilter<"Company"> | number
  }

  export type VerificationFormWhereInput = {
    AND?: VerificationFormWhereInput | VerificationFormWhereInput[]
    OR?: VerificationFormWhereInput[]
    NOT?: VerificationFormWhereInput | VerificationFormWhereInput[]
    id?: StringFilter<"VerificationForm"> | string
    title?: StringFilter<"VerificationForm"> | string
    companyId?: StringFilter<"VerificationForm"> | string
    expiryDate?: DateTimeFilter<"VerificationForm"> | Date | string
    max?: IntFilter<"VerificationForm"> | number
    piFullname?: BoolFilter<"VerificationForm"> | boolean
    piDateOfBirth?: BoolFilter<"VerificationForm"> | boolean
    piGender?: BoolFilter<"VerificationForm"> | boolean
    piNationality?: BoolFilter<"VerificationForm"> | boolean
    piResidentialAddress?: BoolFilter<"VerificationForm"> | boolean
    piPhoneNumber?: BoolFilter<"VerificationForm"> | boolean
    piEmailAddress?: BoolFilter<"VerificationForm"> | boolean
    piNationalIdentificationNumber?: BoolFilter<"VerificationForm"> | boolean
    piMaritalStatus?: BoolFilter<"VerificationForm"> | boolean
    piNextofKinName?: BoolFilter<"VerificationForm"> | boolean
    piNextofKinRelationship?: BoolFilter<"VerificationForm"> | boolean
    piNextofKinPhoneNumber?: BoolFilter<"VerificationForm"> | boolean
    giFullName?: BoolFilter<"VerificationForm"> | boolean
    giRelationshiptoPersonnel?: BoolFilter<"VerificationForm"> | boolean
    giOccupation?: BoolFilter<"VerificationForm"> | boolean
    giPhoneNumber?: BoolFilter<"VerificationForm"> | boolean
    giResidentialAddress?: BoolFilter<"VerificationForm"> | boolean
    giEmailAddress?: BoolFilter<"VerificationForm"> | boolean
    giYearsKnown?: BoolFilter<"VerificationForm"> | boolean
    giNationalIdenificationNumber?: BoolFilter<"VerificationForm"> | boolean
    aiHighestQualification?: BoolFilter<"VerificationForm"> | boolean
    aiNameofInstitution?: BoolFilter<"VerificationForm"> | boolean
    aiYearofGraduation?: BoolFilter<"VerificationForm"> | boolean
    aiDegreeOrCertificationUpload?: BoolFilter<"VerificationForm"> | boolean
    aiProfessionalCertifications?: BoolFilter<"VerificationForm"> | boolean
    priCurrentJob?: BoolFilter<"VerificationForm"> | boolean
    priOrganizationName?: BoolFilter<"VerificationForm"> | boolean
    priEmploymentStartDate?: BoolFilter<"VerificationForm"> | boolean
    priEmploymentType?: BoolFilter<"VerificationForm"> | boolean
    priJobResponsibility?: BoolFilter<"VerificationForm"> | boolean
    priProfessionalSkills?: BoolFilter<"VerificationForm"> | boolean
    priLinkedInProfile?: BoolFilter<"VerificationForm"> | boolean
    priProfessionalReferenceName?: BoolFilter<"VerificationForm"> | boolean
    priProfessionalReferencePhoneNumber?: BoolFilter<"VerificationForm"> | boolean
    priCurrentSalary?: BoolFilter<"VerificationForm"> | boolean
    priExpectedSalaryRange?: BoolFilter<"VerificationForm"> | boolean
    mhaCurrentMentalHealthCondition?: BoolFilter<"VerificationForm"> | boolean
    mhaHistoryofMentalHealthConditions?: BoolFilter<"VerificationForm"> | boolean
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment?: BoolFilter<"VerificationForm"> | boolean
    mhaHaveYouHadAnyPreviousPsychiatricConsultations?: BoolFilter<"VerificationForm"> | boolean
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear?: BoolFilter<"VerificationForm"> | boolean
    mhaEmotionalWellbeing?: BoolFilter<"VerificationForm"> | boolean
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
    verificationResponse?: VerificationResponseListRelationFilter
  }

  export type VerificationFormOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    companyId?: SortOrder
    expiryDate?: SortOrder
    max?: SortOrder
    piFullname?: SortOrder
    piDateOfBirth?: SortOrder
    piGender?: SortOrder
    piNationality?: SortOrder
    piResidentialAddress?: SortOrder
    piPhoneNumber?: SortOrder
    piEmailAddress?: SortOrder
    piNationalIdentificationNumber?: SortOrder
    piMaritalStatus?: SortOrder
    piNextofKinName?: SortOrder
    piNextofKinRelationship?: SortOrder
    piNextofKinPhoneNumber?: SortOrder
    giFullName?: SortOrder
    giRelationshiptoPersonnel?: SortOrder
    giOccupation?: SortOrder
    giPhoneNumber?: SortOrder
    giResidentialAddress?: SortOrder
    giEmailAddress?: SortOrder
    giYearsKnown?: SortOrder
    giNationalIdenificationNumber?: SortOrder
    aiHighestQualification?: SortOrder
    aiNameofInstitution?: SortOrder
    aiYearofGraduation?: SortOrder
    aiDegreeOrCertificationUpload?: SortOrder
    aiProfessionalCertifications?: SortOrder
    priCurrentJob?: SortOrder
    priOrganizationName?: SortOrder
    priEmploymentStartDate?: SortOrder
    priEmploymentType?: SortOrder
    priJobResponsibility?: SortOrder
    priProfessionalSkills?: SortOrder
    priLinkedInProfile?: SortOrder
    priProfessionalReferenceName?: SortOrder
    priProfessionalReferencePhoneNumber?: SortOrder
    priCurrentSalary?: SortOrder
    priExpectedSalaryRange?: SortOrder
    mhaCurrentMentalHealthCondition?: SortOrder
    mhaHistoryofMentalHealthConditions?: SortOrder
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment?: SortOrder
    mhaHaveYouHadAnyPreviousPsychiatricConsultations?: SortOrder
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear?: SortOrder
    mhaEmotionalWellbeing?: SortOrder
    company?: CompanyOrderByWithRelationInput
    verificationResponse?: VerificationResponseOrderByRelationAggregateInput
  }

  export type VerificationFormWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationFormWhereInput | VerificationFormWhereInput[]
    OR?: VerificationFormWhereInput[]
    NOT?: VerificationFormWhereInput | VerificationFormWhereInput[]
    title?: StringFilter<"VerificationForm"> | string
    companyId?: StringFilter<"VerificationForm"> | string
    expiryDate?: DateTimeFilter<"VerificationForm"> | Date | string
    max?: IntFilter<"VerificationForm"> | number
    piFullname?: BoolFilter<"VerificationForm"> | boolean
    piDateOfBirth?: BoolFilter<"VerificationForm"> | boolean
    piGender?: BoolFilter<"VerificationForm"> | boolean
    piNationality?: BoolFilter<"VerificationForm"> | boolean
    piResidentialAddress?: BoolFilter<"VerificationForm"> | boolean
    piPhoneNumber?: BoolFilter<"VerificationForm"> | boolean
    piEmailAddress?: BoolFilter<"VerificationForm"> | boolean
    piNationalIdentificationNumber?: BoolFilter<"VerificationForm"> | boolean
    piMaritalStatus?: BoolFilter<"VerificationForm"> | boolean
    piNextofKinName?: BoolFilter<"VerificationForm"> | boolean
    piNextofKinRelationship?: BoolFilter<"VerificationForm"> | boolean
    piNextofKinPhoneNumber?: BoolFilter<"VerificationForm"> | boolean
    giFullName?: BoolFilter<"VerificationForm"> | boolean
    giRelationshiptoPersonnel?: BoolFilter<"VerificationForm"> | boolean
    giOccupation?: BoolFilter<"VerificationForm"> | boolean
    giPhoneNumber?: BoolFilter<"VerificationForm"> | boolean
    giResidentialAddress?: BoolFilter<"VerificationForm"> | boolean
    giEmailAddress?: BoolFilter<"VerificationForm"> | boolean
    giYearsKnown?: BoolFilter<"VerificationForm"> | boolean
    giNationalIdenificationNumber?: BoolFilter<"VerificationForm"> | boolean
    aiHighestQualification?: BoolFilter<"VerificationForm"> | boolean
    aiNameofInstitution?: BoolFilter<"VerificationForm"> | boolean
    aiYearofGraduation?: BoolFilter<"VerificationForm"> | boolean
    aiDegreeOrCertificationUpload?: BoolFilter<"VerificationForm"> | boolean
    aiProfessionalCertifications?: BoolFilter<"VerificationForm"> | boolean
    priCurrentJob?: BoolFilter<"VerificationForm"> | boolean
    priOrganizationName?: BoolFilter<"VerificationForm"> | boolean
    priEmploymentStartDate?: BoolFilter<"VerificationForm"> | boolean
    priEmploymentType?: BoolFilter<"VerificationForm"> | boolean
    priJobResponsibility?: BoolFilter<"VerificationForm"> | boolean
    priProfessionalSkills?: BoolFilter<"VerificationForm"> | boolean
    priLinkedInProfile?: BoolFilter<"VerificationForm"> | boolean
    priProfessionalReferenceName?: BoolFilter<"VerificationForm"> | boolean
    priProfessionalReferencePhoneNumber?: BoolFilter<"VerificationForm"> | boolean
    priCurrentSalary?: BoolFilter<"VerificationForm"> | boolean
    priExpectedSalaryRange?: BoolFilter<"VerificationForm"> | boolean
    mhaCurrentMentalHealthCondition?: BoolFilter<"VerificationForm"> | boolean
    mhaHistoryofMentalHealthConditions?: BoolFilter<"VerificationForm"> | boolean
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment?: BoolFilter<"VerificationForm"> | boolean
    mhaHaveYouHadAnyPreviousPsychiatricConsultations?: BoolFilter<"VerificationForm"> | boolean
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear?: BoolFilter<"VerificationForm"> | boolean
    mhaEmotionalWellbeing?: BoolFilter<"VerificationForm"> | boolean
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
    verificationResponse?: VerificationResponseListRelationFilter
  }, "id">

  export type VerificationFormOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    companyId?: SortOrder
    expiryDate?: SortOrder
    max?: SortOrder
    piFullname?: SortOrder
    piDateOfBirth?: SortOrder
    piGender?: SortOrder
    piNationality?: SortOrder
    piResidentialAddress?: SortOrder
    piPhoneNumber?: SortOrder
    piEmailAddress?: SortOrder
    piNationalIdentificationNumber?: SortOrder
    piMaritalStatus?: SortOrder
    piNextofKinName?: SortOrder
    piNextofKinRelationship?: SortOrder
    piNextofKinPhoneNumber?: SortOrder
    giFullName?: SortOrder
    giRelationshiptoPersonnel?: SortOrder
    giOccupation?: SortOrder
    giPhoneNumber?: SortOrder
    giResidentialAddress?: SortOrder
    giEmailAddress?: SortOrder
    giYearsKnown?: SortOrder
    giNationalIdenificationNumber?: SortOrder
    aiHighestQualification?: SortOrder
    aiNameofInstitution?: SortOrder
    aiYearofGraduation?: SortOrder
    aiDegreeOrCertificationUpload?: SortOrder
    aiProfessionalCertifications?: SortOrder
    priCurrentJob?: SortOrder
    priOrganizationName?: SortOrder
    priEmploymentStartDate?: SortOrder
    priEmploymentType?: SortOrder
    priJobResponsibility?: SortOrder
    priProfessionalSkills?: SortOrder
    priLinkedInProfile?: SortOrder
    priProfessionalReferenceName?: SortOrder
    priProfessionalReferencePhoneNumber?: SortOrder
    priCurrentSalary?: SortOrder
    priExpectedSalaryRange?: SortOrder
    mhaCurrentMentalHealthCondition?: SortOrder
    mhaHistoryofMentalHealthConditions?: SortOrder
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment?: SortOrder
    mhaHaveYouHadAnyPreviousPsychiatricConsultations?: SortOrder
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear?: SortOrder
    mhaEmotionalWellbeing?: SortOrder
    _count?: VerificationFormCountOrderByAggregateInput
    _avg?: VerificationFormAvgOrderByAggregateInput
    _max?: VerificationFormMaxOrderByAggregateInput
    _min?: VerificationFormMinOrderByAggregateInput
    _sum?: VerificationFormSumOrderByAggregateInput
  }

  export type VerificationFormScalarWhereWithAggregatesInput = {
    AND?: VerificationFormScalarWhereWithAggregatesInput | VerificationFormScalarWhereWithAggregatesInput[]
    OR?: VerificationFormScalarWhereWithAggregatesInput[]
    NOT?: VerificationFormScalarWhereWithAggregatesInput | VerificationFormScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VerificationForm"> | string
    title?: StringWithAggregatesFilter<"VerificationForm"> | string
    companyId?: StringWithAggregatesFilter<"VerificationForm"> | string
    expiryDate?: DateTimeWithAggregatesFilter<"VerificationForm"> | Date | string
    max?: IntWithAggregatesFilter<"VerificationForm"> | number
    piFullname?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    piDateOfBirth?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    piGender?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    piNationality?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    piResidentialAddress?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    piPhoneNumber?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    piEmailAddress?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    piNationalIdentificationNumber?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    piMaritalStatus?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    piNextofKinName?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    piNextofKinRelationship?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    piNextofKinPhoneNumber?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    giFullName?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    giRelationshiptoPersonnel?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    giOccupation?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    giPhoneNumber?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    giResidentialAddress?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    giEmailAddress?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    giYearsKnown?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    giNationalIdenificationNumber?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    aiHighestQualification?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    aiNameofInstitution?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    aiYearofGraduation?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    aiDegreeOrCertificationUpload?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    aiProfessionalCertifications?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    priCurrentJob?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    priOrganizationName?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    priEmploymentStartDate?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    priEmploymentType?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    priJobResponsibility?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    priProfessionalSkills?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    priLinkedInProfile?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    priProfessionalReferenceName?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    priProfessionalReferencePhoneNumber?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    priCurrentSalary?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    priExpectedSalaryRange?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    mhaCurrentMentalHealthCondition?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    mhaHistoryofMentalHealthConditions?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    mhaHaveYouHadAnyPreviousPsychiatricConsultations?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
    mhaEmotionalWellbeing?: BoolWithAggregatesFilter<"VerificationForm"> | boolean
  }

  export type VerificationResponseWhereInput = {
    AND?: VerificationResponseWhereInput | VerificationResponseWhereInput[]
    OR?: VerificationResponseWhereInput[]
    NOT?: VerificationResponseWhereInput | VerificationResponseWhereInput[]
    id?: StringFilter<"VerificationResponse"> | string
    formId?: StringFilter<"VerificationResponse"> | string
    respondentId?: StringFilter<"VerificationResponse"> | string
    responses?: JsonFilter<"VerificationResponse">
    submittedAt?: DateTimeFilter<"VerificationResponse"> | Date | string
    form?: XOR<VerificationFormRelationFilter, VerificationFormWhereInput>
  }

  export type VerificationResponseOrderByWithRelationInput = {
    id?: SortOrder
    formId?: SortOrder
    respondentId?: SortOrder
    responses?: SortOrder
    submittedAt?: SortOrder
    form?: VerificationFormOrderByWithRelationInput
  }

  export type VerificationResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationResponseWhereInput | VerificationResponseWhereInput[]
    OR?: VerificationResponseWhereInput[]
    NOT?: VerificationResponseWhereInput | VerificationResponseWhereInput[]
    formId?: StringFilter<"VerificationResponse"> | string
    respondentId?: StringFilter<"VerificationResponse"> | string
    responses?: JsonFilter<"VerificationResponse">
    submittedAt?: DateTimeFilter<"VerificationResponse"> | Date | string
    form?: XOR<VerificationFormRelationFilter, VerificationFormWhereInput>
  }, "id">

  export type VerificationResponseOrderByWithAggregationInput = {
    id?: SortOrder
    formId?: SortOrder
    respondentId?: SortOrder
    responses?: SortOrder
    submittedAt?: SortOrder
    _count?: VerificationResponseCountOrderByAggregateInput
    _max?: VerificationResponseMaxOrderByAggregateInput
    _min?: VerificationResponseMinOrderByAggregateInput
  }

  export type VerificationResponseScalarWhereWithAggregatesInput = {
    AND?: VerificationResponseScalarWhereWithAggregatesInput | VerificationResponseScalarWhereWithAggregatesInput[]
    OR?: VerificationResponseScalarWhereWithAggregatesInput[]
    NOT?: VerificationResponseScalarWhereWithAggregatesInput | VerificationResponseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VerificationResponse"> | string
    formId?: StringWithAggregatesFilter<"VerificationResponse"> | string
    respondentId?: StringWithAggregatesFilter<"VerificationResponse"> | string
    responses?: JsonWithAggregatesFilter<"VerificationResponse">
    submittedAt?: DateTimeWithAggregatesFilter<"VerificationResponse"> | Date | string
  }

  export type CompanyCreateInput = {
    id?: string
    email: string
    companyName: string
    companyId: string
    phone_number?: string | null
    isActive?: boolean
    isVerified?: boolean
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    balance?: number
    verificationBatch?: VerificationFormCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    email: string
    companyName: string
    companyId: string
    phone_number?: string | null
    isActive?: boolean
    isVerified?: boolean
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    balance?: number
    verificationBatch?: VerificationFormUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    verificationBatch?: VerificationFormUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    verificationBatch?: VerificationFormUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: string
    email: string
    companyName: string
    companyId: string
    phone_number?: string | null
    isActive?: boolean
    isVerified?: boolean
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    balance?: number
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
  }

  export type VerificationFormCreateInput = {
    id?: string
    title: string
    expiryDate?: Date | string
    max?: number
    piFullname?: boolean
    piDateOfBirth?: boolean
    piGender?: boolean
    piNationality?: boolean
    piResidentialAddress?: boolean
    piPhoneNumber?: boolean
    piEmailAddress?: boolean
    piNationalIdentificationNumber?: boolean
    piMaritalStatus?: boolean
    piNextofKinName?: boolean
    piNextofKinRelationship?: boolean
    piNextofKinPhoneNumber?: boolean
    giFullName?: boolean
    giRelationshiptoPersonnel?: boolean
    giOccupation?: boolean
    giPhoneNumber?: boolean
    giResidentialAddress?: boolean
    giEmailAddress?: boolean
    giYearsKnown?: boolean
    giNationalIdenificationNumber?: boolean
    aiHighestQualification?: boolean
    aiNameofInstitution?: boolean
    aiYearofGraduation?: boolean
    aiDegreeOrCertificationUpload?: boolean
    aiProfessionalCertifications?: boolean
    priCurrentJob?: boolean
    priOrganizationName?: boolean
    priEmploymentStartDate?: boolean
    priEmploymentType?: boolean
    priJobResponsibility?: boolean
    priProfessionalSkills?: boolean
    priLinkedInProfile?: boolean
    priProfessionalReferenceName?: boolean
    priProfessionalReferencePhoneNumber?: boolean
    priCurrentSalary?: boolean
    priExpectedSalaryRange?: boolean
    mhaCurrentMentalHealthCondition?: boolean
    mhaHistoryofMentalHealthConditions?: boolean
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment?: boolean
    mhaHaveYouHadAnyPreviousPsychiatricConsultations?: boolean
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear?: boolean
    mhaEmotionalWellbeing?: boolean
    company: CompanyCreateNestedOneWithoutVerificationBatchInput
    verificationResponse?: VerificationResponseCreateNestedManyWithoutFormInput
  }

  export type VerificationFormUncheckedCreateInput = {
    id?: string
    title: string
    companyId: string
    expiryDate?: Date | string
    max?: number
    piFullname?: boolean
    piDateOfBirth?: boolean
    piGender?: boolean
    piNationality?: boolean
    piResidentialAddress?: boolean
    piPhoneNumber?: boolean
    piEmailAddress?: boolean
    piNationalIdentificationNumber?: boolean
    piMaritalStatus?: boolean
    piNextofKinName?: boolean
    piNextofKinRelationship?: boolean
    piNextofKinPhoneNumber?: boolean
    giFullName?: boolean
    giRelationshiptoPersonnel?: boolean
    giOccupation?: boolean
    giPhoneNumber?: boolean
    giResidentialAddress?: boolean
    giEmailAddress?: boolean
    giYearsKnown?: boolean
    giNationalIdenificationNumber?: boolean
    aiHighestQualification?: boolean
    aiNameofInstitution?: boolean
    aiYearofGraduation?: boolean
    aiDegreeOrCertificationUpload?: boolean
    aiProfessionalCertifications?: boolean
    priCurrentJob?: boolean
    priOrganizationName?: boolean
    priEmploymentStartDate?: boolean
    priEmploymentType?: boolean
    priJobResponsibility?: boolean
    priProfessionalSkills?: boolean
    priLinkedInProfile?: boolean
    priProfessionalReferenceName?: boolean
    priProfessionalReferencePhoneNumber?: boolean
    priCurrentSalary?: boolean
    priExpectedSalaryRange?: boolean
    mhaCurrentMentalHealthCondition?: boolean
    mhaHistoryofMentalHealthConditions?: boolean
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment?: boolean
    mhaHaveYouHadAnyPreviousPsychiatricConsultations?: boolean
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear?: boolean
    mhaEmotionalWellbeing?: boolean
    verificationResponse?: VerificationResponseUncheckedCreateNestedManyWithoutFormInput
  }

  export type VerificationFormUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    max?: IntFieldUpdateOperationsInput | number
    piFullname?: BoolFieldUpdateOperationsInput | boolean
    piDateOfBirth?: BoolFieldUpdateOperationsInput | boolean
    piGender?: BoolFieldUpdateOperationsInput | boolean
    piNationality?: BoolFieldUpdateOperationsInput | boolean
    piResidentialAddress?: BoolFieldUpdateOperationsInput | boolean
    piPhoneNumber?: BoolFieldUpdateOperationsInput | boolean
    piEmailAddress?: BoolFieldUpdateOperationsInput | boolean
    piNationalIdentificationNumber?: BoolFieldUpdateOperationsInput | boolean
    piMaritalStatus?: BoolFieldUpdateOperationsInput | boolean
    piNextofKinName?: BoolFieldUpdateOperationsInput | boolean
    piNextofKinRelationship?: BoolFieldUpdateOperationsInput | boolean
    piNextofKinPhoneNumber?: BoolFieldUpdateOperationsInput | boolean
    giFullName?: BoolFieldUpdateOperationsInput | boolean
    giRelationshiptoPersonnel?: BoolFieldUpdateOperationsInput | boolean
    giOccupation?: BoolFieldUpdateOperationsInput | boolean
    giPhoneNumber?: BoolFieldUpdateOperationsInput | boolean
    giResidentialAddress?: BoolFieldUpdateOperationsInput | boolean
    giEmailAddress?: BoolFieldUpdateOperationsInput | boolean
    giYearsKnown?: BoolFieldUpdateOperationsInput | boolean
    giNationalIdenificationNumber?: BoolFieldUpdateOperationsInput | boolean
    aiHighestQualification?: BoolFieldUpdateOperationsInput | boolean
    aiNameofInstitution?: BoolFieldUpdateOperationsInput | boolean
    aiYearofGraduation?: BoolFieldUpdateOperationsInput | boolean
    aiDegreeOrCertificationUpload?: BoolFieldUpdateOperationsInput | boolean
    aiProfessionalCertifications?: BoolFieldUpdateOperationsInput | boolean
    priCurrentJob?: BoolFieldUpdateOperationsInput | boolean
    priOrganizationName?: BoolFieldUpdateOperationsInput | boolean
    priEmploymentStartDate?: BoolFieldUpdateOperationsInput | boolean
    priEmploymentType?: BoolFieldUpdateOperationsInput | boolean
    priJobResponsibility?: BoolFieldUpdateOperationsInput | boolean
    priProfessionalSkills?: BoolFieldUpdateOperationsInput | boolean
    priLinkedInProfile?: BoolFieldUpdateOperationsInput | boolean
    priProfessionalReferenceName?: BoolFieldUpdateOperationsInput | boolean
    priProfessionalReferencePhoneNumber?: BoolFieldUpdateOperationsInput | boolean
    priCurrentSalary?: BoolFieldUpdateOperationsInput | boolean
    priExpectedSalaryRange?: BoolFieldUpdateOperationsInput | boolean
    mhaCurrentMentalHealthCondition?: BoolFieldUpdateOperationsInput | boolean
    mhaHistoryofMentalHealthConditions?: BoolFieldUpdateOperationsInput | boolean
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment?: BoolFieldUpdateOperationsInput | boolean
    mhaHaveYouHadAnyPreviousPsychiatricConsultations?: BoolFieldUpdateOperationsInput | boolean
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear?: BoolFieldUpdateOperationsInput | boolean
    mhaEmotionalWellbeing?: BoolFieldUpdateOperationsInput | boolean
    company?: CompanyUpdateOneRequiredWithoutVerificationBatchNestedInput
    verificationResponse?: VerificationResponseUpdateManyWithoutFormNestedInput
  }

  export type VerificationFormUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    max?: IntFieldUpdateOperationsInput | number
    piFullname?: BoolFieldUpdateOperationsInput | boolean
    piDateOfBirth?: BoolFieldUpdateOperationsInput | boolean
    piGender?: BoolFieldUpdateOperationsInput | boolean
    piNationality?: BoolFieldUpdateOperationsInput | boolean
    piResidentialAddress?: BoolFieldUpdateOperationsInput | boolean
    piPhoneNumber?: BoolFieldUpdateOperationsInput | boolean
    piEmailAddress?: BoolFieldUpdateOperationsInput | boolean
    piNationalIdentificationNumber?: BoolFieldUpdateOperationsInput | boolean
    piMaritalStatus?: BoolFieldUpdateOperationsInput | boolean
    piNextofKinName?: BoolFieldUpdateOperationsInput | boolean
    piNextofKinRelationship?: BoolFieldUpdateOperationsInput | boolean
    piNextofKinPhoneNumber?: BoolFieldUpdateOperationsInput | boolean
    giFullName?: BoolFieldUpdateOperationsInput | boolean
    giRelationshiptoPersonnel?: BoolFieldUpdateOperationsInput | boolean
    giOccupation?: BoolFieldUpdateOperationsInput | boolean
    giPhoneNumber?: BoolFieldUpdateOperationsInput | boolean
    giResidentialAddress?: BoolFieldUpdateOperationsInput | boolean
    giEmailAddress?: BoolFieldUpdateOperationsInput | boolean
    giYearsKnown?: BoolFieldUpdateOperationsInput | boolean
    giNationalIdenificationNumber?: BoolFieldUpdateOperationsInput | boolean
    aiHighestQualification?: BoolFieldUpdateOperationsInput | boolean
    aiNameofInstitution?: BoolFieldUpdateOperationsInput | boolean
    aiYearofGraduation?: BoolFieldUpdateOperationsInput | boolean
    aiDegreeOrCertificationUpload?: BoolFieldUpdateOperationsInput | boolean
    aiProfessionalCertifications?: BoolFieldUpdateOperationsInput | boolean
    priCurrentJob?: BoolFieldUpdateOperationsInput | boolean
    priOrganizationName?: BoolFieldUpdateOperationsInput | boolean
    priEmploymentStartDate?: BoolFieldUpdateOperationsInput | boolean
    priEmploymentType?: BoolFieldUpdateOperationsInput | boolean
    priJobResponsibility?: BoolFieldUpdateOperationsInput | boolean
    priProfessionalSkills?: BoolFieldUpdateOperationsInput | boolean
    priLinkedInProfile?: BoolFieldUpdateOperationsInput | boolean
    priProfessionalReferenceName?: BoolFieldUpdateOperationsInput | boolean
    priProfessionalReferencePhoneNumber?: BoolFieldUpdateOperationsInput | boolean
    priCurrentSalary?: BoolFieldUpdateOperationsInput | boolean
    priExpectedSalaryRange?: BoolFieldUpdateOperationsInput | boolean
    mhaCurrentMentalHealthCondition?: BoolFieldUpdateOperationsInput | boolean
    mhaHistoryofMentalHealthConditions?: BoolFieldUpdateOperationsInput | boolean
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment?: BoolFieldUpdateOperationsInput | boolean
    mhaHaveYouHadAnyPreviousPsychiatricConsultations?: BoolFieldUpdateOperationsInput | boolean
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear?: BoolFieldUpdateOperationsInput | boolean
    mhaEmotionalWellbeing?: BoolFieldUpdateOperationsInput | boolean
    verificationResponse?: VerificationResponseUncheckedUpdateManyWithoutFormNestedInput
  }

  export type VerificationFormCreateManyInput = {
    id?: string
    title: string
    companyId: string
    expiryDate?: Date | string
    max?: number
    piFullname?: boolean
    piDateOfBirth?: boolean
    piGender?: boolean
    piNationality?: boolean
    piResidentialAddress?: boolean
    piPhoneNumber?: boolean
    piEmailAddress?: boolean
    piNationalIdentificationNumber?: boolean
    piMaritalStatus?: boolean
    piNextofKinName?: boolean
    piNextofKinRelationship?: boolean
    piNextofKinPhoneNumber?: boolean
    giFullName?: boolean
    giRelationshiptoPersonnel?: boolean
    giOccupation?: boolean
    giPhoneNumber?: boolean
    giResidentialAddress?: boolean
    giEmailAddress?: boolean
    giYearsKnown?: boolean
    giNationalIdenificationNumber?: boolean
    aiHighestQualification?: boolean
    aiNameofInstitution?: boolean
    aiYearofGraduation?: boolean
    aiDegreeOrCertificationUpload?: boolean
    aiProfessionalCertifications?: boolean
    priCurrentJob?: boolean
    priOrganizationName?: boolean
    priEmploymentStartDate?: boolean
    priEmploymentType?: boolean
    priJobResponsibility?: boolean
    priProfessionalSkills?: boolean
    priLinkedInProfile?: boolean
    priProfessionalReferenceName?: boolean
    priProfessionalReferencePhoneNumber?: boolean
    priCurrentSalary?: boolean
    priExpectedSalaryRange?: boolean
    mhaCurrentMentalHealthCondition?: boolean
    mhaHistoryofMentalHealthConditions?: boolean
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment?: boolean
    mhaHaveYouHadAnyPreviousPsychiatricConsultations?: boolean
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear?: boolean
    mhaEmotionalWellbeing?: boolean
  }

  export type VerificationFormUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    max?: IntFieldUpdateOperationsInput | number
    piFullname?: BoolFieldUpdateOperationsInput | boolean
    piDateOfBirth?: BoolFieldUpdateOperationsInput | boolean
    piGender?: BoolFieldUpdateOperationsInput | boolean
    piNationality?: BoolFieldUpdateOperationsInput | boolean
    piResidentialAddress?: BoolFieldUpdateOperationsInput | boolean
    piPhoneNumber?: BoolFieldUpdateOperationsInput | boolean
    piEmailAddress?: BoolFieldUpdateOperationsInput | boolean
    piNationalIdentificationNumber?: BoolFieldUpdateOperationsInput | boolean
    piMaritalStatus?: BoolFieldUpdateOperationsInput | boolean
    piNextofKinName?: BoolFieldUpdateOperationsInput | boolean
    piNextofKinRelationship?: BoolFieldUpdateOperationsInput | boolean
    piNextofKinPhoneNumber?: BoolFieldUpdateOperationsInput | boolean
    giFullName?: BoolFieldUpdateOperationsInput | boolean
    giRelationshiptoPersonnel?: BoolFieldUpdateOperationsInput | boolean
    giOccupation?: BoolFieldUpdateOperationsInput | boolean
    giPhoneNumber?: BoolFieldUpdateOperationsInput | boolean
    giResidentialAddress?: BoolFieldUpdateOperationsInput | boolean
    giEmailAddress?: BoolFieldUpdateOperationsInput | boolean
    giYearsKnown?: BoolFieldUpdateOperationsInput | boolean
    giNationalIdenificationNumber?: BoolFieldUpdateOperationsInput | boolean
    aiHighestQualification?: BoolFieldUpdateOperationsInput | boolean
    aiNameofInstitution?: BoolFieldUpdateOperationsInput | boolean
    aiYearofGraduation?: BoolFieldUpdateOperationsInput | boolean
    aiDegreeOrCertificationUpload?: BoolFieldUpdateOperationsInput | boolean
    aiProfessionalCertifications?: BoolFieldUpdateOperationsInput | boolean
    priCurrentJob?: BoolFieldUpdateOperationsInput | boolean
    priOrganizationName?: BoolFieldUpdateOperationsInput | boolean
    priEmploymentStartDate?: BoolFieldUpdateOperationsInput | boolean
    priEmploymentType?: BoolFieldUpdateOperationsInput | boolean
    priJobResponsibility?: BoolFieldUpdateOperationsInput | boolean
    priProfessionalSkills?: BoolFieldUpdateOperationsInput | boolean
    priLinkedInProfile?: BoolFieldUpdateOperationsInput | boolean
    priProfessionalReferenceName?: BoolFieldUpdateOperationsInput | boolean
    priProfessionalReferencePhoneNumber?: BoolFieldUpdateOperationsInput | boolean
    priCurrentSalary?: BoolFieldUpdateOperationsInput | boolean
    priExpectedSalaryRange?: BoolFieldUpdateOperationsInput | boolean
    mhaCurrentMentalHealthCondition?: BoolFieldUpdateOperationsInput | boolean
    mhaHistoryofMentalHealthConditions?: BoolFieldUpdateOperationsInput | boolean
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment?: BoolFieldUpdateOperationsInput | boolean
    mhaHaveYouHadAnyPreviousPsychiatricConsultations?: BoolFieldUpdateOperationsInput | boolean
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear?: BoolFieldUpdateOperationsInput | boolean
    mhaEmotionalWellbeing?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VerificationFormUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    max?: IntFieldUpdateOperationsInput | number
    piFullname?: BoolFieldUpdateOperationsInput | boolean
    piDateOfBirth?: BoolFieldUpdateOperationsInput | boolean
    piGender?: BoolFieldUpdateOperationsInput | boolean
    piNationality?: BoolFieldUpdateOperationsInput | boolean
    piResidentialAddress?: BoolFieldUpdateOperationsInput | boolean
    piPhoneNumber?: BoolFieldUpdateOperationsInput | boolean
    piEmailAddress?: BoolFieldUpdateOperationsInput | boolean
    piNationalIdentificationNumber?: BoolFieldUpdateOperationsInput | boolean
    piMaritalStatus?: BoolFieldUpdateOperationsInput | boolean
    piNextofKinName?: BoolFieldUpdateOperationsInput | boolean
    piNextofKinRelationship?: BoolFieldUpdateOperationsInput | boolean
    piNextofKinPhoneNumber?: BoolFieldUpdateOperationsInput | boolean
    giFullName?: BoolFieldUpdateOperationsInput | boolean
    giRelationshiptoPersonnel?: BoolFieldUpdateOperationsInput | boolean
    giOccupation?: BoolFieldUpdateOperationsInput | boolean
    giPhoneNumber?: BoolFieldUpdateOperationsInput | boolean
    giResidentialAddress?: BoolFieldUpdateOperationsInput | boolean
    giEmailAddress?: BoolFieldUpdateOperationsInput | boolean
    giYearsKnown?: BoolFieldUpdateOperationsInput | boolean
    giNationalIdenificationNumber?: BoolFieldUpdateOperationsInput | boolean
    aiHighestQualification?: BoolFieldUpdateOperationsInput | boolean
    aiNameofInstitution?: BoolFieldUpdateOperationsInput | boolean
    aiYearofGraduation?: BoolFieldUpdateOperationsInput | boolean
    aiDegreeOrCertificationUpload?: BoolFieldUpdateOperationsInput | boolean
    aiProfessionalCertifications?: BoolFieldUpdateOperationsInput | boolean
    priCurrentJob?: BoolFieldUpdateOperationsInput | boolean
    priOrganizationName?: BoolFieldUpdateOperationsInput | boolean
    priEmploymentStartDate?: BoolFieldUpdateOperationsInput | boolean
    priEmploymentType?: BoolFieldUpdateOperationsInput | boolean
    priJobResponsibility?: BoolFieldUpdateOperationsInput | boolean
    priProfessionalSkills?: BoolFieldUpdateOperationsInput | boolean
    priLinkedInProfile?: BoolFieldUpdateOperationsInput | boolean
    priProfessionalReferenceName?: BoolFieldUpdateOperationsInput | boolean
    priProfessionalReferencePhoneNumber?: BoolFieldUpdateOperationsInput | boolean
    priCurrentSalary?: BoolFieldUpdateOperationsInput | boolean
    priExpectedSalaryRange?: BoolFieldUpdateOperationsInput | boolean
    mhaCurrentMentalHealthCondition?: BoolFieldUpdateOperationsInput | boolean
    mhaHistoryofMentalHealthConditions?: BoolFieldUpdateOperationsInput | boolean
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment?: BoolFieldUpdateOperationsInput | boolean
    mhaHaveYouHadAnyPreviousPsychiatricConsultations?: BoolFieldUpdateOperationsInput | boolean
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear?: BoolFieldUpdateOperationsInput | boolean
    mhaEmotionalWellbeing?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VerificationResponseCreateInput = {
    id?: string
    respondentId: string
    responses: JsonNullValueInput | InputJsonValue
    submittedAt?: Date | string
    form: VerificationFormCreateNestedOneWithoutVerificationResponseInput
  }

  export type VerificationResponseUncheckedCreateInput = {
    id?: string
    formId: string
    respondentId: string
    responses: JsonNullValueInput | InputJsonValue
    submittedAt?: Date | string
  }

  export type VerificationResponseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    respondentId?: StringFieldUpdateOperationsInput | string
    responses?: JsonNullValueInput | InputJsonValue
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    form?: VerificationFormUpdateOneRequiredWithoutVerificationResponseNestedInput
  }

  export type VerificationResponseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    respondentId?: StringFieldUpdateOperationsInput | string
    responses?: JsonNullValueInput | InputJsonValue
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationResponseCreateManyInput = {
    id?: string
    formId: string
    respondentId: string
    responses: JsonNullValueInput | InputJsonValue
    submittedAt?: Date | string
  }

  export type VerificationResponseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    respondentId?: StringFieldUpdateOperationsInput | string
    responses?: JsonNullValueInput | InputJsonValue
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationResponseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    respondentId?: StringFieldUpdateOperationsInput | string
    responses?: JsonNullValueInput | InputJsonValue
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type VerificationFormListRelationFilter = {
    every?: VerificationFormWhereInput
    some?: VerificationFormWhereInput
    none?: VerificationFormWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VerificationFormOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    companyName?: SortOrder
    companyId?: SortOrder
    phone_number?: SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    balance?: SortOrder
  }

  export type CompanyAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    companyName?: SortOrder
    companyId?: SortOrder
    phone_number?: SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    balance?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    companyName?: SortOrder
    companyId?: SortOrder
    phone_number?: SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    balance?: SortOrder
  }

  export type CompanySumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type CompanyRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type VerificationResponseListRelationFilter = {
    every?: VerificationResponseWhereInput
    some?: VerificationResponseWhereInput
    none?: VerificationResponseWhereInput
  }

  export type VerificationResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VerificationFormCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    companyId?: SortOrder
    expiryDate?: SortOrder
    max?: SortOrder
    piFullname?: SortOrder
    piDateOfBirth?: SortOrder
    piGender?: SortOrder
    piNationality?: SortOrder
    piResidentialAddress?: SortOrder
    piPhoneNumber?: SortOrder
    piEmailAddress?: SortOrder
    piNationalIdentificationNumber?: SortOrder
    piMaritalStatus?: SortOrder
    piNextofKinName?: SortOrder
    piNextofKinRelationship?: SortOrder
    piNextofKinPhoneNumber?: SortOrder
    giFullName?: SortOrder
    giRelationshiptoPersonnel?: SortOrder
    giOccupation?: SortOrder
    giPhoneNumber?: SortOrder
    giResidentialAddress?: SortOrder
    giEmailAddress?: SortOrder
    giYearsKnown?: SortOrder
    giNationalIdenificationNumber?: SortOrder
    aiHighestQualification?: SortOrder
    aiNameofInstitution?: SortOrder
    aiYearofGraduation?: SortOrder
    aiDegreeOrCertificationUpload?: SortOrder
    aiProfessionalCertifications?: SortOrder
    priCurrentJob?: SortOrder
    priOrganizationName?: SortOrder
    priEmploymentStartDate?: SortOrder
    priEmploymentType?: SortOrder
    priJobResponsibility?: SortOrder
    priProfessionalSkills?: SortOrder
    priLinkedInProfile?: SortOrder
    priProfessionalReferenceName?: SortOrder
    priProfessionalReferencePhoneNumber?: SortOrder
    priCurrentSalary?: SortOrder
    priExpectedSalaryRange?: SortOrder
    mhaCurrentMentalHealthCondition?: SortOrder
    mhaHistoryofMentalHealthConditions?: SortOrder
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment?: SortOrder
    mhaHaveYouHadAnyPreviousPsychiatricConsultations?: SortOrder
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear?: SortOrder
    mhaEmotionalWellbeing?: SortOrder
  }

  export type VerificationFormAvgOrderByAggregateInput = {
    max?: SortOrder
  }

  export type VerificationFormMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    companyId?: SortOrder
    expiryDate?: SortOrder
    max?: SortOrder
    piFullname?: SortOrder
    piDateOfBirth?: SortOrder
    piGender?: SortOrder
    piNationality?: SortOrder
    piResidentialAddress?: SortOrder
    piPhoneNumber?: SortOrder
    piEmailAddress?: SortOrder
    piNationalIdentificationNumber?: SortOrder
    piMaritalStatus?: SortOrder
    piNextofKinName?: SortOrder
    piNextofKinRelationship?: SortOrder
    piNextofKinPhoneNumber?: SortOrder
    giFullName?: SortOrder
    giRelationshiptoPersonnel?: SortOrder
    giOccupation?: SortOrder
    giPhoneNumber?: SortOrder
    giResidentialAddress?: SortOrder
    giEmailAddress?: SortOrder
    giYearsKnown?: SortOrder
    giNationalIdenificationNumber?: SortOrder
    aiHighestQualification?: SortOrder
    aiNameofInstitution?: SortOrder
    aiYearofGraduation?: SortOrder
    aiDegreeOrCertificationUpload?: SortOrder
    aiProfessionalCertifications?: SortOrder
    priCurrentJob?: SortOrder
    priOrganizationName?: SortOrder
    priEmploymentStartDate?: SortOrder
    priEmploymentType?: SortOrder
    priJobResponsibility?: SortOrder
    priProfessionalSkills?: SortOrder
    priLinkedInProfile?: SortOrder
    priProfessionalReferenceName?: SortOrder
    priProfessionalReferencePhoneNumber?: SortOrder
    priCurrentSalary?: SortOrder
    priExpectedSalaryRange?: SortOrder
    mhaCurrentMentalHealthCondition?: SortOrder
    mhaHistoryofMentalHealthConditions?: SortOrder
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment?: SortOrder
    mhaHaveYouHadAnyPreviousPsychiatricConsultations?: SortOrder
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear?: SortOrder
    mhaEmotionalWellbeing?: SortOrder
  }

  export type VerificationFormMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    companyId?: SortOrder
    expiryDate?: SortOrder
    max?: SortOrder
    piFullname?: SortOrder
    piDateOfBirth?: SortOrder
    piGender?: SortOrder
    piNationality?: SortOrder
    piResidentialAddress?: SortOrder
    piPhoneNumber?: SortOrder
    piEmailAddress?: SortOrder
    piNationalIdentificationNumber?: SortOrder
    piMaritalStatus?: SortOrder
    piNextofKinName?: SortOrder
    piNextofKinRelationship?: SortOrder
    piNextofKinPhoneNumber?: SortOrder
    giFullName?: SortOrder
    giRelationshiptoPersonnel?: SortOrder
    giOccupation?: SortOrder
    giPhoneNumber?: SortOrder
    giResidentialAddress?: SortOrder
    giEmailAddress?: SortOrder
    giYearsKnown?: SortOrder
    giNationalIdenificationNumber?: SortOrder
    aiHighestQualification?: SortOrder
    aiNameofInstitution?: SortOrder
    aiYearofGraduation?: SortOrder
    aiDegreeOrCertificationUpload?: SortOrder
    aiProfessionalCertifications?: SortOrder
    priCurrentJob?: SortOrder
    priOrganizationName?: SortOrder
    priEmploymentStartDate?: SortOrder
    priEmploymentType?: SortOrder
    priJobResponsibility?: SortOrder
    priProfessionalSkills?: SortOrder
    priLinkedInProfile?: SortOrder
    priProfessionalReferenceName?: SortOrder
    priProfessionalReferencePhoneNumber?: SortOrder
    priCurrentSalary?: SortOrder
    priExpectedSalaryRange?: SortOrder
    mhaCurrentMentalHealthCondition?: SortOrder
    mhaHistoryofMentalHealthConditions?: SortOrder
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment?: SortOrder
    mhaHaveYouHadAnyPreviousPsychiatricConsultations?: SortOrder
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear?: SortOrder
    mhaEmotionalWellbeing?: SortOrder
  }

  export type VerificationFormSumOrderByAggregateInput = {
    max?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type VerificationFormRelationFilter = {
    is?: VerificationFormWhereInput
    isNot?: VerificationFormWhereInput
  }

  export type VerificationResponseCountOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    respondentId?: SortOrder
    responses?: SortOrder
    submittedAt?: SortOrder
  }

  export type VerificationResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    respondentId?: SortOrder
    submittedAt?: SortOrder
  }

  export type VerificationResponseMinOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    respondentId?: SortOrder
    submittedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type VerificationFormCreateNestedManyWithoutCompanyInput = {
    create?: XOR<VerificationFormCreateWithoutCompanyInput, VerificationFormUncheckedCreateWithoutCompanyInput> | VerificationFormCreateWithoutCompanyInput[] | VerificationFormUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: VerificationFormCreateOrConnectWithoutCompanyInput | VerificationFormCreateOrConnectWithoutCompanyInput[]
    createMany?: VerificationFormCreateManyCompanyInputEnvelope
    connect?: VerificationFormWhereUniqueInput | VerificationFormWhereUniqueInput[]
  }

  export type VerificationFormUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<VerificationFormCreateWithoutCompanyInput, VerificationFormUncheckedCreateWithoutCompanyInput> | VerificationFormCreateWithoutCompanyInput[] | VerificationFormUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: VerificationFormCreateOrConnectWithoutCompanyInput | VerificationFormCreateOrConnectWithoutCompanyInput[]
    createMany?: VerificationFormCreateManyCompanyInputEnvelope
    connect?: VerificationFormWhereUniqueInput | VerificationFormWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type VerificationFormUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<VerificationFormCreateWithoutCompanyInput, VerificationFormUncheckedCreateWithoutCompanyInput> | VerificationFormCreateWithoutCompanyInput[] | VerificationFormUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: VerificationFormCreateOrConnectWithoutCompanyInput | VerificationFormCreateOrConnectWithoutCompanyInput[]
    upsert?: VerificationFormUpsertWithWhereUniqueWithoutCompanyInput | VerificationFormUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: VerificationFormCreateManyCompanyInputEnvelope
    set?: VerificationFormWhereUniqueInput | VerificationFormWhereUniqueInput[]
    disconnect?: VerificationFormWhereUniqueInput | VerificationFormWhereUniqueInput[]
    delete?: VerificationFormWhereUniqueInput | VerificationFormWhereUniqueInput[]
    connect?: VerificationFormWhereUniqueInput | VerificationFormWhereUniqueInput[]
    update?: VerificationFormUpdateWithWhereUniqueWithoutCompanyInput | VerificationFormUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: VerificationFormUpdateManyWithWhereWithoutCompanyInput | VerificationFormUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: VerificationFormScalarWhereInput | VerificationFormScalarWhereInput[]
  }

  export type VerificationFormUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<VerificationFormCreateWithoutCompanyInput, VerificationFormUncheckedCreateWithoutCompanyInput> | VerificationFormCreateWithoutCompanyInput[] | VerificationFormUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: VerificationFormCreateOrConnectWithoutCompanyInput | VerificationFormCreateOrConnectWithoutCompanyInput[]
    upsert?: VerificationFormUpsertWithWhereUniqueWithoutCompanyInput | VerificationFormUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: VerificationFormCreateManyCompanyInputEnvelope
    set?: VerificationFormWhereUniqueInput | VerificationFormWhereUniqueInput[]
    disconnect?: VerificationFormWhereUniqueInput | VerificationFormWhereUniqueInput[]
    delete?: VerificationFormWhereUniqueInput | VerificationFormWhereUniqueInput[]
    connect?: VerificationFormWhereUniqueInput | VerificationFormWhereUniqueInput[]
    update?: VerificationFormUpdateWithWhereUniqueWithoutCompanyInput | VerificationFormUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: VerificationFormUpdateManyWithWhereWithoutCompanyInput | VerificationFormUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: VerificationFormScalarWhereInput | VerificationFormScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutVerificationBatchInput = {
    create?: XOR<CompanyCreateWithoutVerificationBatchInput, CompanyUncheckedCreateWithoutVerificationBatchInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutVerificationBatchInput
    connect?: CompanyWhereUniqueInput
  }

  export type VerificationResponseCreateNestedManyWithoutFormInput = {
    create?: XOR<VerificationResponseCreateWithoutFormInput, VerificationResponseUncheckedCreateWithoutFormInput> | VerificationResponseCreateWithoutFormInput[] | VerificationResponseUncheckedCreateWithoutFormInput[]
    connectOrCreate?: VerificationResponseCreateOrConnectWithoutFormInput | VerificationResponseCreateOrConnectWithoutFormInput[]
    createMany?: VerificationResponseCreateManyFormInputEnvelope
    connect?: VerificationResponseWhereUniqueInput | VerificationResponseWhereUniqueInput[]
  }

  export type VerificationResponseUncheckedCreateNestedManyWithoutFormInput = {
    create?: XOR<VerificationResponseCreateWithoutFormInput, VerificationResponseUncheckedCreateWithoutFormInput> | VerificationResponseCreateWithoutFormInput[] | VerificationResponseUncheckedCreateWithoutFormInput[]
    connectOrCreate?: VerificationResponseCreateOrConnectWithoutFormInput | VerificationResponseCreateOrConnectWithoutFormInput[]
    createMany?: VerificationResponseCreateManyFormInputEnvelope
    connect?: VerificationResponseWhereUniqueInput | VerificationResponseWhereUniqueInput[]
  }

  export type CompanyUpdateOneRequiredWithoutVerificationBatchNestedInput = {
    create?: XOR<CompanyCreateWithoutVerificationBatchInput, CompanyUncheckedCreateWithoutVerificationBatchInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutVerificationBatchInput
    upsert?: CompanyUpsertWithoutVerificationBatchInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutVerificationBatchInput, CompanyUpdateWithoutVerificationBatchInput>, CompanyUncheckedUpdateWithoutVerificationBatchInput>
  }

  export type VerificationResponseUpdateManyWithoutFormNestedInput = {
    create?: XOR<VerificationResponseCreateWithoutFormInput, VerificationResponseUncheckedCreateWithoutFormInput> | VerificationResponseCreateWithoutFormInput[] | VerificationResponseUncheckedCreateWithoutFormInput[]
    connectOrCreate?: VerificationResponseCreateOrConnectWithoutFormInput | VerificationResponseCreateOrConnectWithoutFormInput[]
    upsert?: VerificationResponseUpsertWithWhereUniqueWithoutFormInput | VerificationResponseUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: VerificationResponseCreateManyFormInputEnvelope
    set?: VerificationResponseWhereUniqueInput | VerificationResponseWhereUniqueInput[]
    disconnect?: VerificationResponseWhereUniqueInput | VerificationResponseWhereUniqueInput[]
    delete?: VerificationResponseWhereUniqueInput | VerificationResponseWhereUniqueInput[]
    connect?: VerificationResponseWhereUniqueInput | VerificationResponseWhereUniqueInput[]
    update?: VerificationResponseUpdateWithWhereUniqueWithoutFormInput | VerificationResponseUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: VerificationResponseUpdateManyWithWhereWithoutFormInput | VerificationResponseUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: VerificationResponseScalarWhereInput | VerificationResponseScalarWhereInput[]
  }

  export type VerificationResponseUncheckedUpdateManyWithoutFormNestedInput = {
    create?: XOR<VerificationResponseCreateWithoutFormInput, VerificationResponseUncheckedCreateWithoutFormInput> | VerificationResponseCreateWithoutFormInput[] | VerificationResponseUncheckedCreateWithoutFormInput[]
    connectOrCreate?: VerificationResponseCreateOrConnectWithoutFormInput | VerificationResponseCreateOrConnectWithoutFormInput[]
    upsert?: VerificationResponseUpsertWithWhereUniqueWithoutFormInput | VerificationResponseUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: VerificationResponseCreateManyFormInputEnvelope
    set?: VerificationResponseWhereUniqueInput | VerificationResponseWhereUniqueInput[]
    disconnect?: VerificationResponseWhereUniqueInput | VerificationResponseWhereUniqueInput[]
    delete?: VerificationResponseWhereUniqueInput | VerificationResponseWhereUniqueInput[]
    connect?: VerificationResponseWhereUniqueInput | VerificationResponseWhereUniqueInput[]
    update?: VerificationResponseUpdateWithWhereUniqueWithoutFormInput | VerificationResponseUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: VerificationResponseUpdateManyWithWhereWithoutFormInput | VerificationResponseUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: VerificationResponseScalarWhereInput | VerificationResponseScalarWhereInput[]
  }

  export type VerificationFormCreateNestedOneWithoutVerificationResponseInput = {
    create?: XOR<VerificationFormCreateWithoutVerificationResponseInput, VerificationFormUncheckedCreateWithoutVerificationResponseInput>
    connectOrCreate?: VerificationFormCreateOrConnectWithoutVerificationResponseInput
    connect?: VerificationFormWhereUniqueInput
  }

  export type VerificationFormUpdateOneRequiredWithoutVerificationResponseNestedInput = {
    create?: XOR<VerificationFormCreateWithoutVerificationResponseInput, VerificationFormUncheckedCreateWithoutVerificationResponseInput>
    connectOrCreate?: VerificationFormCreateOrConnectWithoutVerificationResponseInput
    upsert?: VerificationFormUpsertWithoutVerificationResponseInput
    connect?: VerificationFormWhereUniqueInput
    update?: XOR<XOR<VerificationFormUpdateToOneWithWhereWithoutVerificationResponseInput, VerificationFormUpdateWithoutVerificationResponseInput>, VerificationFormUncheckedUpdateWithoutVerificationResponseInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type VerificationFormCreateWithoutCompanyInput = {
    id?: string
    title: string
    expiryDate?: Date | string
    max?: number
    piFullname?: boolean
    piDateOfBirth?: boolean
    piGender?: boolean
    piNationality?: boolean
    piResidentialAddress?: boolean
    piPhoneNumber?: boolean
    piEmailAddress?: boolean
    piNationalIdentificationNumber?: boolean
    piMaritalStatus?: boolean
    piNextofKinName?: boolean
    piNextofKinRelationship?: boolean
    piNextofKinPhoneNumber?: boolean
    giFullName?: boolean
    giRelationshiptoPersonnel?: boolean
    giOccupation?: boolean
    giPhoneNumber?: boolean
    giResidentialAddress?: boolean
    giEmailAddress?: boolean
    giYearsKnown?: boolean
    giNationalIdenificationNumber?: boolean
    aiHighestQualification?: boolean
    aiNameofInstitution?: boolean
    aiYearofGraduation?: boolean
    aiDegreeOrCertificationUpload?: boolean
    aiProfessionalCertifications?: boolean
    priCurrentJob?: boolean
    priOrganizationName?: boolean
    priEmploymentStartDate?: boolean
    priEmploymentType?: boolean
    priJobResponsibility?: boolean
    priProfessionalSkills?: boolean
    priLinkedInProfile?: boolean
    priProfessionalReferenceName?: boolean
    priProfessionalReferencePhoneNumber?: boolean
    priCurrentSalary?: boolean
    priExpectedSalaryRange?: boolean
    mhaCurrentMentalHealthCondition?: boolean
    mhaHistoryofMentalHealthConditions?: boolean
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment?: boolean
    mhaHaveYouHadAnyPreviousPsychiatricConsultations?: boolean
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear?: boolean
    mhaEmotionalWellbeing?: boolean
    verificationResponse?: VerificationResponseCreateNestedManyWithoutFormInput
  }

  export type VerificationFormUncheckedCreateWithoutCompanyInput = {
    id?: string
    title: string
    expiryDate?: Date | string
    max?: number
    piFullname?: boolean
    piDateOfBirth?: boolean
    piGender?: boolean
    piNationality?: boolean
    piResidentialAddress?: boolean
    piPhoneNumber?: boolean
    piEmailAddress?: boolean
    piNationalIdentificationNumber?: boolean
    piMaritalStatus?: boolean
    piNextofKinName?: boolean
    piNextofKinRelationship?: boolean
    piNextofKinPhoneNumber?: boolean
    giFullName?: boolean
    giRelationshiptoPersonnel?: boolean
    giOccupation?: boolean
    giPhoneNumber?: boolean
    giResidentialAddress?: boolean
    giEmailAddress?: boolean
    giYearsKnown?: boolean
    giNationalIdenificationNumber?: boolean
    aiHighestQualification?: boolean
    aiNameofInstitution?: boolean
    aiYearofGraduation?: boolean
    aiDegreeOrCertificationUpload?: boolean
    aiProfessionalCertifications?: boolean
    priCurrentJob?: boolean
    priOrganizationName?: boolean
    priEmploymentStartDate?: boolean
    priEmploymentType?: boolean
    priJobResponsibility?: boolean
    priProfessionalSkills?: boolean
    priLinkedInProfile?: boolean
    priProfessionalReferenceName?: boolean
    priProfessionalReferencePhoneNumber?: boolean
    priCurrentSalary?: boolean
    priExpectedSalaryRange?: boolean
    mhaCurrentMentalHealthCondition?: boolean
    mhaHistoryofMentalHealthConditions?: boolean
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment?: boolean
    mhaHaveYouHadAnyPreviousPsychiatricConsultations?: boolean
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear?: boolean
    mhaEmotionalWellbeing?: boolean
    verificationResponse?: VerificationResponseUncheckedCreateNestedManyWithoutFormInput
  }

  export type VerificationFormCreateOrConnectWithoutCompanyInput = {
    where: VerificationFormWhereUniqueInput
    create: XOR<VerificationFormCreateWithoutCompanyInput, VerificationFormUncheckedCreateWithoutCompanyInput>
  }

  export type VerificationFormCreateManyCompanyInputEnvelope = {
    data: VerificationFormCreateManyCompanyInput | VerificationFormCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type VerificationFormUpsertWithWhereUniqueWithoutCompanyInput = {
    where: VerificationFormWhereUniqueInput
    update: XOR<VerificationFormUpdateWithoutCompanyInput, VerificationFormUncheckedUpdateWithoutCompanyInput>
    create: XOR<VerificationFormCreateWithoutCompanyInput, VerificationFormUncheckedCreateWithoutCompanyInput>
  }

  export type VerificationFormUpdateWithWhereUniqueWithoutCompanyInput = {
    where: VerificationFormWhereUniqueInput
    data: XOR<VerificationFormUpdateWithoutCompanyInput, VerificationFormUncheckedUpdateWithoutCompanyInput>
  }

  export type VerificationFormUpdateManyWithWhereWithoutCompanyInput = {
    where: VerificationFormScalarWhereInput
    data: XOR<VerificationFormUpdateManyMutationInput, VerificationFormUncheckedUpdateManyWithoutCompanyInput>
  }

  export type VerificationFormScalarWhereInput = {
    AND?: VerificationFormScalarWhereInput | VerificationFormScalarWhereInput[]
    OR?: VerificationFormScalarWhereInput[]
    NOT?: VerificationFormScalarWhereInput | VerificationFormScalarWhereInput[]
    id?: StringFilter<"VerificationForm"> | string
    title?: StringFilter<"VerificationForm"> | string
    companyId?: StringFilter<"VerificationForm"> | string
    expiryDate?: DateTimeFilter<"VerificationForm"> | Date | string
    max?: IntFilter<"VerificationForm"> | number
    piFullname?: BoolFilter<"VerificationForm"> | boolean
    piDateOfBirth?: BoolFilter<"VerificationForm"> | boolean
    piGender?: BoolFilter<"VerificationForm"> | boolean
    piNationality?: BoolFilter<"VerificationForm"> | boolean
    piResidentialAddress?: BoolFilter<"VerificationForm"> | boolean
    piPhoneNumber?: BoolFilter<"VerificationForm"> | boolean
    piEmailAddress?: BoolFilter<"VerificationForm"> | boolean
    piNationalIdentificationNumber?: BoolFilter<"VerificationForm"> | boolean
    piMaritalStatus?: BoolFilter<"VerificationForm"> | boolean
    piNextofKinName?: BoolFilter<"VerificationForm"> | boolean
    piNextofKinRelationship?: BoolFilter<"VerificationForm"> | boolean
    piNextofKinPhoneNumber?: BoolFilter<"VerificationForm"> | boolean
    giFullName?: BoolFilter<"VerificationForm"> | boolean
    giRelationshiptoPersonnel?: BoolFilter<"VerificationForm"> | boolean
    giOccupation?: BoolFilter<"VerificationForm"> | boolean
    giPhoneNumber?: BoolFilter<"VerificationForm"> | boolean
    giResidentialAddress?: BoolFilter<"VerificationForm"> | boolean
    giEmailAddress?: BoolFilter<"VerificationForm"> | boolean
    giYearsKnown?: BoolFilter<"VerificationForm"> | boolean
    giNationalIdenificationNumber?: BoolFilter<"VerificationForm"> | boolean
    aiHighestQualification?: BoolFilter<"VerificationForm"> | boolean
    aiNameofInstitution?: BoolFilter<"VerificationForm"> | boolean
    aiYearofGraduation?: BoolFilter<"VerificationForm"> | boolean
    aiDegreeOrCertificationUpload?: BoolFilter<"VerificationForm"> | boolean
    aiProfessionalCertifications?: BoolFilter<"VerificationForm"> | boolean
    priCurrentJob?: BoolFilter<"VerificationForm"> | boolean
    priOrganizationName?: BoolFilter<"VerificationForm"> | boolean
    priEmploymentStartDate?: BoolFilter<"VerificationForm"> | boolean
    priEmploymentType?: BoolFilter<"VerificationForm"> | boolean
    priJobResponsibility?: BoolFilter<"VerificationForm"> | boolean
    priProfessionalSkills?: BoolFilter<"VerificationForm"> | boolean
    priLinkedInProfile?: BoolFilter<"VerificationForm"> | boolean
    priProfessionalReferenceName?: BoolFilter<"VerificationForm"> | boolean
    priProfessionalReferencePhoneNumber?: BoolFilter<"VerificationForm"> | boolean
    priCurrentSalary?: BoolFilter<"VerificationForm"> | boolean
    priExpectedSalaryRange?: BoolFilter<"VerificationForm"> | boolean
    mhaCurrentMentalHealthCondition?: BoolFilter<"VerificationForm"> | boolean
    mhaHistoryofMentalHealthConditions?: BoolFilter<"VerificationForm"> | boolean
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment?: BoolFilter<"VerificationForm"> | boolean
    mhaHaveYouHadAnyPreviousPsychiatricConsultations?: BoolFilter<"VerificationForm"> | boolean
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear?: BoolFilter<"VerificationForm"> | boolean
    mhaEmotionalWellbeing?: BoolFilter<"VerificationForm"> | boolean
  }

  export type CompanyCreateWithoutVerificationBatchInput = {
    id?: string
    email: string
    companyName: string
    companyId: string
    phone_number?: string | null
    isActive?: boolean
    isVerified?: boolean
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    balance?: number
  }

  export type CompanyUncheckedCreateWithoutVerificationBatchInput = {
    id?: string
    email: string
    companyName: string
    companyId: string
    phone_number?: string | null
    isActive?: boolean
    isVerified?: boolean
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    balance?: number
  }

  export type CompanyCreateOrConnectWithoutVerificationBatchInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutVerificationBatchInput, CompanyUncheckedCreateWithoutVerificationBatchInput>
  }

  export type VerificationResponseCreateWithoutFormInput = {
    id?: string
    respondentId: string
    responses: JsonNullValueInput | InputJsonValue
    submittedAt?: Date | string
  }

  export type VerificationResponseUncheckedCreateWithoutFormInput = {
    id?: string
    respondentId: string
    responses: JsonNullValueInput | InputJsonValue
    submittedAt?: Date | string
  }

  export type VerificationResponseCreateOrConnectWithoutFormInput = {
    where: VerificationResponseWhereUniqueInput
    create: XOR<VerificationResponseCreateWithoutFormInput, VerificationResponseUncheckedCreateWithoutFormInput>
  }

  export type VerificationResponseCreateManyFormInputEnvelope = {
    data: VerificationResponseCreateManyFormInput | VerificationResponseCreateManyFormInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutVerificationBatchInput = {
    update: XOR<CompanyUpdateWithoutVerificationBatchInput, CompanyUncheckedUpdateWithoutVerificationBatchInput>
    create: XOR<CompanyCreateWithoutVerificationBatchInput, CompanyUncheckedCreateWithoutVerificationBatchInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutVerificationBatchInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutVerificationBatchInput, CompanyUncheckedUpdateWithoutVerificationBatchInput>
  }

  export type CompanyUpdateWithoutVerificationBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
  }

  export type CompanyUncheckedUpdateWithoutVerificationBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
  }

  export type VerificationResponseUpsertWithWhereUniqueWithoutFormInput = {
    where: VerificationResponseWhereUniqueInput
    update: XOR<VerificationResponseUpdateWithoutFormInput, VerificationResponseUncheckedUpdateWithoutFormInput>
    create: XOR<VerificationResponseCreateWithoutFormInput, VerificationResponseUncheckedCreateWithoutFormInput>
  }

  export type VerificationResponseUpdateWithWhereUniqueWithoutFormInput = {
    where: VerificationResponseWhereUniqueInput
    data: XOR<VerificationResponseUpdateWithoutFormInput, VerificationResponseUncheckedUpdateWithoutFormInput>
  }

  export type VerificationResponseUpdateManyWithWhereWithoutFormInput = {
    where: VerificationResponseScalarWhereInput
    data: XOR<VerificationResponseUpdateManyMutationInput, VerificationResponseUncheckedUpdateManyWithoutFormInput>
  }

  export type VerificationResponseScalarWhereInput = {
    AND?: VerificationResponseScalarWhereInput | VerificationResponseScalarWhereInput[]
    OR?: VerificationResponseScalarWhereInput[]
    NOT?: VerificationResponseScalarWhereInput | VerificationResponseScalarWhereInput[]
    id?: StringFilter<"VerificationResponse"> | string
    formId?: StringFilter<"VerificationResponse"> | string
    respondentId?: StringFilter<"VerificationResponse"> | string
    responses?: JsonFilter<"VerificationResponse">
    submittedAt?: DateTimeFilter<"VerificationResponse"> | Date | string
  }

  export type VerificationFormCreateWithoutVerificationResponseInput = {
    id?: string
    title: string
    expiryDate?: Date | string
    max?: number
    piFullname?: boolean
    piDateOfBirth?: boolean
    piGender?: boolean
    piNationality?: boolean
    piResidentialAddress?: boolean
    piPhoneNumber?: boolean
    piEmailAddress?: boolean
    piNationalIdentificationNumber?: boolean
    piMaritalStatus?: boolean
    piNextofKinName?: boolean
    piNextofKinRelationship?: boolean
    piNextofKinPhoneNumber?: boolean
    giFullName?: boolean
    giRelationshiptoPersonnel?: boolean
    giOccupation?: boolean
    giPhoneNumber?: boolean
    giResidentialAddress?: boolean
    giEmailAddress?: boolean
    giYearsKnown?: boolean
    giNationalIdenificationNumber?: boolean
    aiHighestQualification?: boolean
    aiNameofInstitution?: boolean
    aiYearofGraduation?: boolean
    aiDegreeOrCertificationUpload?: boolean
    aiProfessionalCertifications?: boolean
    priCurrentJob?: boolean
    priOrganizationName?: boolean
    priEmploymentStartDate?: boolean
    priEmploymentType?: boolean
    priJobResponsibility?: boolean
    priProfessionalSkills?: boolean
    priLinkedInProfile?: boolean
    priProfessionalReferenceName?: boolean
    priProfessionalReferencePhoneNumber?: boolean
    priCurrentSalary?: boolean
    priExpectedSalaryRange?: boolean
    mhaCurrentMentalHealthCondition?: boolean
    mhaHistoryofMentalHealthConditions?: boolean
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment?: boolean
    mhaHaveYouHadAnyPreviousPsychiatricConsultations?: boolean
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear?: boolean
    mhaEmotionalWellbeing?: boolean
    company: CompanyCreateNestedOneWithoutVerificationBatchInput
  }

  export type VerificationFormUncheckedCreateWithoutVerificationResponseInput = {
    id?: string
    title: string
    companyId: string
    expiryDate?: Date | string
    max?: number
    piFullname?: boolean
    piDateOfBirth?: boolean
    piGender?: boolean
    piNationality?: boolean
    piResidentialAddress?: boolean
    piPhoneNumber?: boolean
    piEmailAddress?: boolean
    piNationalIdentificationNumber?: boolean
    piMaritalStatus?: boolean
    piNextofKinName?: boolean
    piNextofKinRelationship?: boolean
    piNextofKinPhoneNumber?: boolean
    giFullName?: boolean
    giRelationshiptoPersonnel?: boolean
    giOccupation?: boolean
    giPhoneNumber?: boolean
    giResidentialAddress?: boolean
    giEmailAddress?: boolean
    giYearsKnown?: boolean
    giNationalIdenificationNumber?: boolean
    aiHighestQualification?: boolean
    aiNameofInstitution?: boolean
    aiYearofGraduation?: boolean
    aiDegreeOrCertificationUpload?: boolean
    aiProfessionalCertifications?: boolean
    priCurrentJob?: boolean
    priOrganizationName?: boolean
    priEmploymentStartDate?: boolean
    priEmploymentType?: boolean
    priJobResponsibility?: boolean
    priProfessionalSkills?: boolean
    priLinkedInProfile?: boolean
    priProfessionalReferenceName?: boolean
    priProfessionalReferencePhoneNumber?: boolean
    priCurrentSalary?: boolean
    priExpectedSalaryRange?: boolean
    mhaCurrentMentalHealthCondition?: boolean
    mhaHistoryofMentalHealthConditions?: boolean
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment?: boolean
    mhaHaveYouHadAnyPreviousPsychiatricConsultations?: boolean
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear?: boolean
    mhaEmotionalWellbeing?: boolean
  }

  export type VerificationFormCreateOrConnectWithoutVerificationResponseInput = {
    where: VerificationFormWhereUniqueInput
    create: XOR<VerificationFormCreateWithoutVerificationResponseInput, VerificationFormUncheckedCreateWithoutVerificationResponseInput>
  }

  export type VerificationFormUpsertWithoutVerificationResponseInput = {
    update: XOR<VerificationFormUpdateWithoutVerificationResponseInput, VerificationFormUncheckedUpdateWithoutVerificationResponseInput>
    create: XOR<VerificationFormCreateWithoutVerificationResponseInput, VerificationFormUncheckedCreateWithoutVerificationResponseInput>
    where?: VerificationFormWhereInput
  }

  export type VerificationFormUpdateToOneWithWhereWithoutVerificationResponseInput = {
    where?: VerificationFormWhereInput
    data: XOR<VerificationFormUpdateWithoutVerificationResponseInput, VerificationFormUncheckedUpdateWithoutVerificationResponseInput>
  }

  export type VerificationFormUpdateWithoutVerificationResponseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    max?: IntFieldUpdateOperationsInput | number
    piFullname?: BoolFieldUpdateOperationsInput | boolean
    piDateOfBirth?: BoolFieldUpdateOperationsInput | boolean
    piGender?: BoolFieldUpdateOperationsInput | boolean
    piNationality?: BoolFieldUpdateOperationsInput | boolean
    piResidentialAddress?: BoolFieldUpdateOperationsInput | boolean
    piPhoneNumber?: BoolFieldUpdateOperationsInput | boolean
    piEmailAddress?: BoolFieldUpdateOperationsInput | boolean
    piNationalIdentificationNumber?: BoolFieldUpdateOperationsInput | boolean
    piMaritalStatus?: BoolFieldUpdateOperationsInput | boolean
    piNextofKinName?: BoolFieldUpdateOperationsInput | boolean
    piNextofKinRelationship?: BoolFieldUpdateOperationsInput | boolean
    piNextofKinPhoneNumber?: BoolFieldUpdateOperationsInput | boolean
    giFullName?: BoolFieldUpdateOperationsInput | boolean
    giRelationshiptoPersonnel?: BoolFieldUpdateOperationsInput | boolean
    giOccupation?: BoolFieldUpdateOperationsInput | boolean
    giPhoneNumber?: BoolFieldUpdateOperationsInput | boolean
    giResidentialAddress?: BoolFieldUpdateOperationsInput | boolean
    giEmailAddress?: BoolFieldUpdateOperationsInput | boolean
    giYearsKnown?: BoolFieldUpdateOperationsInput | boolean
    giNationalIdenificationNumber?: BoolFieldUpdateOperationsInput | boolean
    aiHighestQualification?: BoolFieldUpdateOperationsInput | boolean
    aiNameofInstitution?: BoolFieldUpdateOperationsInput | boolean
    aiYearofGraduation?: BoolFieldUpdateOperationsInput | boolean
    aiDegreeOrCertificationUpload?: BoolFieldUpdateOperationsInput | boolean
    aiProfessionalCertifications?: BoolFieldUpdateOperationsInput | boolean
    priCurrentJob?: BoolFieldUpdateOperationsInput | boolean
    priOrganizationName?: BoolFieldUpdateOperationsInput | boolean
    priEmploymentStartDate?: BoolFieldUpdateOperationsInput | boolean
    priEmploymentType?: BoolFieldUpdateOperationsInput | boolean
    priJobResponsibility?: BoolFieldUpdateOperationsInput | boolean
    priProfessionalSkills?: BoolFieldUpdateOperationsInput | boolean
    priLinkedInProfile?: BoolFieldUpdateOperationsInput | boolean
    priProfessionalReferenceName?: BoolFieldUpdateOperationsInput | boolean
    priProfessionalReferencePhoneNumber?: BoolFieldUpdateOperationsInput | boolean
    priCurrentSalary?: BoolFieldUpdateOperationsInput | boolean
    priExpectedSalaryRange?: BoolFieldUpdateOperationsInput | boolean
    mhaCurrentMentalHealthCondition?: BoolFieldUpdateOperationsInput | boolean
    mhaHistoryofMentalHealthConditions?: BoolFieldUpdateOperationsInput | boolean
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment?: BoolFieldUpdateOperationsInput | boolean
    mhaHaveYouHadAnyPreviousPsychiatricConsultations?: BoolFieldUpdateOperationsInput | boolean
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear?: BoolFieldUpdateOperationsInput | boolean
    mhaEmotionalWellbeing?: BoolFieldUpdateOperationsInput | boolean
    company?: CompanyUpdateOneRequiredWithoutVerificationBatchNestedInput
  }

  export type VerificationFormUncheckedUpdateWithoutVerificationResponseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    max?: IntFieldUpdateOperationsInput | number
    piFullname?: BoolFieldUpdateOperationsInput | boolean
    piDateOfBirth?: BoolFieldUpdateOperationsInput | boolean
    piGender?: BoolFieldUpdateOperationsInput | boolean
    piNationality?: BoolFieldUpdateOperationsInput | boolean
    piResidentialAddress?: BoolFieldUpdateOperationsInput | boolean
    piPhoneNumber?: BoolFieldUpdateOperationsInput | boolean
    piEmailAddress?: BoolFieldUpdateOperationsInput | boolean
    piNationalIdentificationNumber?: BoolFieldUpdateOperationsInput | boolean
    piMaritalStatus?: BoolFieldUpdateOperationsInput | boolean
    piNextofKinName?: BoolFieldUpdateOperationsInput | boolean
    piNextofKinRelationship?: BoolFieldUpdateOperationsInput | boolean
    piNextofKinPhoneNumber?: BoolFieldUpdateOperationsInput | boolean
    giFullName?: BoolFieldUpdateOperationsInput | boolean
    giRelationshiptoPersonnel?: BoolFieldUpdateOperationsInput | boolean
    giOccupation?: BoolFieldUpdateOperationsInput | boolean
    giPhoneNumber?: BoolFieldUpdateOperationsInput | boolean
    giResidentialAddress?: BoolFieldUpdateOperationsInput | boolean
    giEmailAddress?: BoolFieldUpdateOperationsInput | boolean
    giYearsKnown?: BoolFieldUpdateOperationsInput | boolean
    giNationalIdenificationNumber?: BoolFieldUpdateOperationsInput | boolean
    aiHighestQualification?: BoolFieldUpdateOperationsInput | boolean
    aiNameofInstitution?: BoolFieldUpdateOperationsInput | boolean
    aiYearofGraduation?: BoolFieldUpdateOperationsInput | boolean
    aiDegreeOrCertificationUpload?: BoolFieldUpdateOperationsInput | boolean
    aiProfessionalCertifications?: BoolFieldUpdateOperationsInput | boolean
    priCurrentJob?: BoolFieldUpdateOperationsInput | boolean
    priOrganizationName?: BoolFieldUpdateOperationsInput | boolean
    priEmploymentStartDate?: BoolFieldUpdateOperationsInput | boolean
    priEmploymentType?: BoolFieldUpdateOperationsInput | boolean
    priJobResponsibility?: BoolFieldUpdateOperationsInput | boolean
    priProfessionalSkills?: BoolFieldUpdateOperationsInput | boolean
    priLinkedInProfile?: BoolFieldUpdateOperationsInput | boolean
    priProfessionalReferenceName?: BoolFieldUpdateOperationsInput | boolean
    priProfessionalReferencePhoneNumber?: BoolFieldUpdateOperationsInput | boolean
    priCurrentSalary?: BoolFieldUpdateOperationsInput | boolean
    priExpectedSalaryRange?: BoolFieldUpdateOperationsInput | boolean
    mhaCurrentMentalHealthCondition?: BoolFieldUpdateOperationsInput | boolean
    mhaHistoryofMentalHealthConditions?: BoolFieldUpdateOperationsInput | boolean
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment?: BoolFieldUpdateOperationsInput | boolean
    mhaHaveYouHadAnyPreviousPsychiatricConsultations?: BoolFieldUpdateOperationsInput | boolean
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear?: BoolFieldUpdateOperationsInput | boolean
    mhaEmotionalWellbeing?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VerificationFormCreateManyCompanyInput = {
    id?: string
    title: string
    expiryDate?: Date | string
    max?: number
    piFullname?: boolean
    piDateOfBirth?: boolean
    piGender?: boolean
    piNationality?: boolean
    piResidentialAddress?: boolean
    piPhoneNumber?: boolean
    piEmailAddress?: boolean
    piNationalIdentificationNumber?: boolean
    piMaritalStatus?: boolean
    piNextofKinName?: boolean
    piNextofKinRelationship?: boolean
    piNextofKinPhoneNumber?: boolean
    giFullName?: boolean
    giRelationshiptoPersonnel?: boolean
    giOccupation?: boolean
    giPhoneNumber?: boolean
    giResidentialAddress?: boolean
    giEmailAddress?: boolean
    giYearsKnown?: boolean
    giNationalIdenificationNumber?: boolean
    aiHighestQualification?: boolean
    aiNameofInstitution?: boolean
    aiYearofGraduation?: boolean
    aiDegreeOrCertificationUpload?: boolean
    aiProfessionalCertifications?: boolean
    priCurrentJob?: boolean
    priOrganizationName?: boolean
    priEmploymentStartDate?: boolean
    priEmploymentType?: boolean
    priJobResponsibility?: boolean
    priProfessionalSkills?: boolean
    priLinkedInProfile?: boolean
    priProfessionalReferenceName?: boolean
    priProfessionalReferencePhoneNumber?: boolean
    priCurrentSalary?: boolean
    priExpectedSalaryRange?: boolean
    mhaCurrentMentalHealthCondition?: boolean
    mhaHistoryofMentalHealthConditions?: boolean
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment?: boolean
    mhaHaveYouHadAnyPreviousPsychiatricConsultations?: boolean
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear?: boolean
    mhaEmotionalWellbeing?: boolean
  }

  export type VerificationFormUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    max?: IntFieldUpdateOperationsInput | number
    piFullname?: BoolFieldUpdateOperationsInput | boolean
    piDateOfBirth?: BoolFieldUpdateOperationsInput | boolean
    piGender?: BoolFieldUpdateOperationsInput | boolean
    piNationality?: BoolFieldUpdateOperationsInput | boolean
    piResidentialAddress?: BoolFieldUpdateOperationsInput | boolean
    piPhoneNumber?: BoolFieldUpdateOperationsInput | boolean
    piEmailAddress?: BoolFieldUpdateOperationsInput | boolean
    piNationalIdentificationNumber?: BoolFieldUpdateOperationsInput | boolean
    piMaritalStatus?: BoolFieldUpdateOperationsInput | boolean
    piNextofKinName?: BoolFieldUpdateOperationsInput | boolean
    piNextofKinRelationship?: BoolFieldUpdateOperationsInput | boolean
    piNextofKinPhoneNumber?: BoolFieldUpdateOperationsInput | boolean
    giFullName?: BoolFieldUpdateOperationsInput | boolean
    giRelationshiptoPersonnel?: BoolFieldUpdateOperationsInput | boolean
    giOccupation?: BoolFieldUpdateOperationsInput | boolean
    giPhoneNumber?: BoolFieldUpdateOperationsInput | boolean
    giResidentialAddress?: BoolFieldUpdateOperationsInput | boolean
    giEmailAddress?: BoolFieldUpdateOperationsInput | boolean
    giYearsKnown?: BoolFieldUpdateOperationsInput | boolean
    giNationalIdenificationNumber?: BoolFieldUpdateOperationsInput | boolean
    aiHighestQualification?: BoolFieldUpdateOperationsInput | boolean
    aiNameofInstitution?: BoolFieldUpdateOperationsInput | boolean
    aiYearofGraduation?: BoolFieldUpdateOperationsInput | boolean
    aiDegreeOrCertificationUpload?: BoolFieldUpdateOperationsInput | boolean
    aiProfessionalCertifications?: BoolFieldUpdateOperationsInput | boolean
    priCurrentJob?: BoolFieldUpdateOperationsInput | boolean
    priOrganizationName?: BoolFieldUpdateOperationsInput | boolean
    priEmploymentStartDate?: BoolFieldUpdateOperationsInput | boolean
    priEmploymentType?: BoolFieldUpdateOperationsInput | boolean
    priJobResponsibility?: BoolFieldUpdateOperationsInput | boolean
    priProfessionalSkills?: BoolFieldUpdateOperationsInput | boolean
    priLinkedInProfile?: BoolFieldUpdateOperationsInput | boolean
    priProfessionalReferenceName?: BoolFieldUpdateOperationsInput | boolean
    priProfessionalReferencePhoneNumber?: BoolFieldUpdateOperationsInput | boolean
    priCurrentSalary?: BoolFieldUpdateOperationsInput | boolean
    priExpectedSalaryRange?: BoolFieldUpdateOperationsInput | boolean
    mhaCurrentMentalHealthCondition?: BoolFieldUpdateOperationsInput | boolean
    mhaHistoryofMentalHealthConditions?: BoolFieldUpdateOperationsInput | boolean
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment?: BoolFieldUpdateOperationsInput | boolean
    mhaHaveYouHadAnyPreviousPsychiatricConsultations?: BoolFieldUpdateOperationsInput | boolean
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear?: BoolFieldUpdateOperationsInput | boolean
    mhaEmotionalWellbeing?: BoolFieldUpdateOperationsInput | boolean
    verificationResponse?: VerificationResponseUpdateManyWithoutFormNestedInput
  }

  export type VerificationFormUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    max?: IntFieldUpdateOperationsInput | number
    piFullname?: BoolFieldUpdateOperationsInput | boolean
    piDateOfBirth?: BoolFieldUpdateOperationsInput | boolean
    piGender?: BoolFieldUpdateOperationsInput | boolean
    piNationality?: BoolFieldUpdateOperationsInput | boolean
    piResidentialAddress?: BoolFieldUpdateOperationsInput | boolean
    piPhoneNumber?: BoolFieldUpdateOperationsInput | boolean
    piEmailAddress?: BoolFieldUpdateOperationsInput | boolean
    piNationalIdentificationNumber?: BoolFieldUpdateOperationsInput | boolean
    piMaritalStatus?: BoolFieldUpdateOperationsInput | boolean
    piNextofKinName?: BoolFieldUpdateOperationsInput | boolean
    piNextofKinRelationship?: BoolFieldUpdateOperationsInput | boolean
    piNextofKinPhoneNumber?: BoolFieldUpdateOperationsInput | boolean
    giFullName?: BoolFieldUpdateOperationsInput | boolean
    giRelationshiptoPersonnel?: BoolFieldUpdateOperationsInput | boolean
    giOccupation?: BoolFieldUpdateOperationsInput | boolean
    giPhoneNumber?: BoolFieldUpdateOperationsInput | boolean
    giResidentialAddress?: BoolFieldUpdateOperationsInput | boolean
    giEmailAddress?: BoolFieldUpdateOperationsInput | boolean
    giYearsKnown?: BoolFieldUpdateOperationsInput | boolean
    giNationalIdenificationNumber?: BoolFieldUpdateOperationsInput | boolean
    aiHighestQualification?: BoolFieldUpdateOperationsInput | boolean
    aiNameofInstitution?: BoolFieldUpdateOperationsInput | boolean
    aiYearofGraduation?: BoolFieldUpdateOperationsInput | boolean
    aiDegreeOrCertificationUpload?: BoolFieldUpdateOperationsInput | boolean
    aiProfessionalCertifications?: BoolFieldUpdateOperationsInput | boolean
    priCurrentJob?: BoolFieldUpdateOperationsInput | boolean
    priOrganizationName?: BoolFieldUpdateOperationsInput | boolean
    priEmploymentStartDate?: BoolFieldUpdateOperationsInput | boolean
    priEmploymentType?: BoolFieldUpdateOperationsInput | boolean
    priJobResponsibility?: BoolFieldUpdateOperationsInput | boolean
    priProfessionalSkills?: BoolFieldUpdateOperationsInput | boolean
    priLinkedInProfile?: BoolFieldUpdateOperationsInput | boolean
    priProfessionalReferenceName?: BoolFieldUpdateOperationsInput | boolean
    priProfessionalReferencePhoneNumber?: BoolFieldUpdateOperationsInput | boolean
    priCurrentSalary?: BoolFieldUpdateOperationsInput | boolean
    priExpectedSalaryRange?: BoolFieldUpdateOperationsInput | boolean
    mhaCurrentMentalHealthCondition?: BoolFieldUpdateOperationsInput | boolean
    mhaHistoryofMentalHealthConditions?: BoolFieldUpdateOperationsInput | boolean
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment?: BoolFieldUpdateOperationsInput | boolean
    mhaHaveYouHadAnyPreviousPsychiatricConsultations?: BoolFieldUpdateOperationsInput | boolean
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear?: BoolFieldUpdateOperationsInput | boolean
    mhaEmotionalWellbeing?: BoolFieldUpdateOperationsInput | boolean
    verificationResponse?: VerificationResponseUncheckedUpdateManyWithoutFormNestedInput
  }

  export type VerificationFormUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    max?: IntFieldUpdateOperationsInput | number
    piFullname?: BoolFieldUpdateOperationsInput | boolean
    piDateOfBirth?: BoolFieldUpdateOperationsInput | boolean
    piGender?: BoolFieldUpdateOperationsInput | boolean
    piNationality?: BoolFieldUpdateOperationsInput | boolean
    piResidentialAddress?: BoolFieldUpdateOperationsInput | boolean
    piPhoneNumber?: BoolFieldUpdateOperationsInput | boolean
    piEmailAddress?: BoolFieldUpdateOperationsInput | boolean
    piNationalIdentificationNumber?: BoolFieldUpdateOperationsInput | boolean
    piMaritalStatus?: BoolFieldUpdateOperationsInput | boolean
    piNextofKinName?: BoolFieldUpdateOperationsInput | boolean
    piNextofKinRelationship?: BoolFieldUpdateOperationsInput | boolean
    piNextofKinPhoneNumber?: BoolFieldUpdateOperationsInput | boolean
    giFullName?: BoolFieldUpdateOperationsInput | boolean
    giRelationshiptoPersonnel?: BoolFieldUpdateOperationsInput | boolean
    giOccupation?: BoolFieldUpdateOperationsInput | boolean
    giPhoneNumber?: BoolFieldUpdateOperationsInput | boolean
    giResidentialAddress?: BoolFieldUpdateOperationsInput | boolean
    giEmailAddress?: BoolFieldUpdateOperationsInput | boolean
    giYearsKnown?: BoolFieldUpdateOperationsInput | boolean
    giNationalIdenificationNumber?: BoolFieldUpdateOperationsInput | boolean
    aiHighestQualification?: BoolFieldUpdateOperationsInput | boolean
    aiNameofInstitution?: BoolFieldUpdateOperationsInput | boolean
    aiYearofGraduation?: BoolFieldUpdateOperationsInput | boolean
    aiDegreeOrCertificationUpload?: BoolFieldUpdateOperationsInput | boolean
    aiProfessionalCertifications?: BoolFieldUpdateOperationsInput | boolean
    priCurrentJob?: BoolFieldUpdateOperationsInput | boolean
    priOrganizationName?: BoolFieldUpdateOperationsInput | boolean
    priEmploymentStartDate?: BoolFieldUpdateOperationsInput | boolean
    priEmploymentType?: BoolFieldUpdateOperationsInput | boolean
    priJobResponsibility?: BoolFieldUpdateOperationsInput | boolean
    priProfessionalSkills?: BoolFieldUpdateOperationsInput | boolean
    priLinkedInProfile?: BoolFieldUpdateOperationsInput | boolean
    priProfessionalReferenceName?: BoolFieldUpdateOperationsInput | boolean
    priProfessionalReferencePhoneNumber?: BoolFieldUpdateOperationsInput | boolean
    priCurrentSalary?: BoolFieldUpdateOperationsInput | boolean
    priExpectedSalaryRange?: BoolFieldUpdateOperationsInput | boolean
    mhaCurrentMentalHealthCondition?: BoolFieldUpdateOperationsInput | boolean
    mhaHistoryofMentalHealthConditions?: BoolFieldUpdateOperationsInput | boolean
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment?: BoolFieldUpdateOperationsInput | boolean
    mhaHaveYouHadAnyPreviousPsychiatricConsultations?: BoolFieldUpdateOperationsInput | boolean
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear?: BoolFieldUpdateOperationsInput | boolean
    mhaEmotionalWellbeing?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VerificationResponseCreateManyFormInput = {
    id?: string
    respondentId: string
    responses: JsonNullValueInput | InputJsonValue
    submittedAt?: Date | string
  }

  export type VerificationResponseUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    respondentId?: StringFieldUpdateOperationsInput | string
    responses?: JsonNullValueInput | InputJsonValue
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationResponseUncheckedUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    respondentId?: StringFieldUpdateOperationsInput | string
    responses?: JsonNullValueInput | InputJsonValue
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationResponseUncheckedUpdateManyWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    respondentId?: StringFieldUpdateOperationsInput | string
    responses?: JsonNullValueInput | InputJsonValue
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
     */
    export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VerificationFormCountOutputTypeDefaultArgs instead
     */
    export type VerificationFormCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VerificationFormCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompanyDefaultArgs instead
     */
    export type CompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VerificationFormDefaultArgs instead
     */
    export type VerificationFormArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VerificationFormDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VerificationResponseDefaultArgs instead
     */
    export type VerificationResponseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VerificationResponseDefaultArgs<ExtArgs>

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