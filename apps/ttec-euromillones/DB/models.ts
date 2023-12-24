import { Model, DataTypes } from 'https://deno.land/x/denodb/mod.ts';
import db from "./db.ts"


class User extends Model {
    static table = 'user';

    static fields = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        name: DataTypes.STRING,
        email: {
            //     type: DataTypes.STRING,
            //     unique: true
            // },
            // password: DataTypes.STRING,
            // roleid: DataTypes.INTEGER,
            // saldo: {
            //     type: DataTypes.DECIMAL,
            //     precision: 9, scale: 2
            // },
            // estadoid: DataTypes.INTEGER,
        }
    }
}

db.link([User]);

/*
model User {
  id              Int               @id
  name            String
  email           String            @unique
  password        String
  roleid          Int
  UserXRole       UserXRole         @relation(fields: [roleid], references: [id])
  estadoid        Int
  UserXEstado     UserXEstado       @relation(fields: [estadoid], references: [id])
  saldo           Decimal           @db.Decimal(9, 2)
  CodeSecure      CodeSecure[]
  UserXBizum      UserXBizum[]
  UserXMovimiento UserXMovimiento[]
  UserXSaldoXTmp  UserXSaldoXTmp[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

*/