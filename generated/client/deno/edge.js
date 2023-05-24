const exports = {}
Object.defineProperty(exports, "__esModule", { value: true });

import {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  defineDmmfProperty
} from '.././runtime/edge-esm.js'

const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.14.1
 * Query Engine version: d9a4c5988f480fa576d43970d5a23641aa77bc9c
 */
Prisma.prismaVersion = {
  client: "4.14.1",
  engine: "d9a4c5988f480fa576d43970d5a23641aa77bc9c"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.TC_tiposGastosScalarFieldEnum = {
  id: 'id',
  descripcion: 'descripcion',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});


exports.Prisma.ModelName = {
  TC_tiposGastos: 'TC_tiposGastos'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Aure\\DESARROLLOS\\js\\deno\\deno-oak-prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [
      "deno"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "..\\..\\.env",
    "schemaEnvPath": "..\\..\\.env"
  },
  "relativePath": "..\\..\\prisma",
  "clientVersion": "4.14.1",
  "engineVersion": "d9a4c5988f480fa576d43970d5a23641aa77bc9c",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "dataProxy": true,
  "postinstall": false
}
config.dirname = '/'

const compressedDMMF = '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'
const decompressedDMMF = decompressFromBase64(compressedDMMF)
// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(decompressedDMMF)
exports.Prisma.dmmf = JSON.parse(decompressedDMMF)
config.document = dmmf


config.inlineSchema = 'Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBwcmV2aWV3RmVhdHVyZXMgPSBbImRlbm8iXQogIG91dHB1dCA9ICIuLi9nZW5lcmF0ZWQvY2xpZW50Igp9CgoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMX1BPU1QiKQp9Cgptb2RlbCBUQ190aXBvc0dhc3RvcyB7CiAgaWQgSW50IEBpZCAgQGRiLlNtYWxsSW50CiAgZGVzY3JpcGNpb24gIFN0cmluZwogIGNyZWF0ZWRBdCBEYXRlVGltZSBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkQXQgRGF0ZVRpbWUgQHVwZGF0ZWRBdAp9CgoK'
config.inlineSchemaHash = '752f3a94ea72392434f3635e7c356d90bf21e1166c090cd5bb4bf23da2c7c486'

config.inlineDatasources = {
  "db": {
    "url": {
      "fromEnvVar": "DATABASE_URL_POST",
      "value": null
    }
  }
}

config.injectableEdgeEnv = {
  parsed: {
    DATABASE_URL_POST: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL_POST'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL_POST || undefined
  }
}

config.edgeClientProtocol = "graphql";
if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)
export { exports as default, Prisma, PrismaClient }

