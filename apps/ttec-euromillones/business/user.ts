// deno-lint-ignore-file no-explicit-any
import prisma from "../prisma/db.ts";


const update = (id: any, updateValue: any) => {
    return prisma.user.updateMany({ where: { id }, data: updateValue });
}

export default {
    update
}