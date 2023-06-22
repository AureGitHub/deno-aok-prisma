
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.14.1
 * Query Engine version: 0362da9eebca54d94c8ef5edd3b2e90af99ba452
 */
Prisma.prismaVersion = {
  client: "4.14.1",
  engine: "0362da9eebca54d94c8ef5edd3b2e90af99ba452"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
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

exports.Prisma.AgendaScalarFieldEnum = {
  id: 'id',
  fecha: 'fecha',
  tipoagendaId: 'tipoagendaId',
  observacion: 'observacion'
};

exports.Prisma.CasaScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  baja: 'baja',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.EmpleadaScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  baja: 'baja',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.GastoScalarFieldEnum = {
  id: 'id',
  fecha: 'fecha',
  tipogastoId: 'tipogastoId',
  importe: 'importe',
  observacion: 'observacion',
  servicioId: 'servicioId'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.ServicioScalarFieldEnum = {
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
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.TipoagendaScalarFieldEnum = {
  id: 'id',
  descripcion: 'descripcion',
  color: 'color'
};

exports.Prisma.TipogastoScalarFieldEnum = {
  id: 'id',
  descripcion: 'descripcion',
  color: 'color'
};

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.TurnoScalarFieldEnum = {
  id: 'id',
  fecha: 'fecha',
  quien: 'quien'
};


exports.Prisma.ModelName = {
  casa: 'casa',
  empleada: 'empleada',
  servicio: 'servicio',
  turno: 'turno',
  agenda: 'agenda',
  tipoagenda: 'tipoagenda',
  gasto: 'gasto',
  tipogasto: 'tipogasto'
};

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
