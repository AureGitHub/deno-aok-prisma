DROP TABLE IF EXISTS public."CodeSecure";
DROP TABLE IF EXISTS public."UserXMovimiento";
DROP TABLE IF EXISTS public."UserXBizum";
DROP TABLE IF EXISTS public."UserXApuesta";
DROP TABLE IF EXISTS public."User";
DROP TABLE IF EXISTS public."Apuesta";
DROP TABLE IF EXISTS public."TC_UserRole";
DROP TABLE IF EXISTS public."TC_MovimientoTipo";
DROP TABLE IF EXISTS public."TC_UserEstado";
DROP TABLE IF EXISTS public."TC_BizumEstado";
DROP TABLE IF EXISTS public."TC_ApuestaEstado";


-- DROP TABLE public."TC_ApuestaEstado";

CREATE TABLE public."TC_ApuestaEstado" (
	id int4 NOT NULL,
	descripcion text NOT NULL,
	CONSTRAINT "TC_ApuestaEstado_pkey" PRIMARY KEY (id)
);
CREATE UNIQUE INDEX "TC_ApuestaEstado_descripcion_key" ON public."TC_ApuestaEstado" USING btree (descripcion);


-- public."TC_BizumEstado" definition

-- Drop table

-- DROP TABLE public."TC_BizumEstado";

CREATE TABLE public."TC_BizumEstado" (
	id int4 NOT NULL,
	descripcion text NOT NULL,
	CONSTRAINT "TC_BizumEstado_pkey" PRIMARY KEY (id)
);
CREATE UNIQUE INDEX "TC_BizumEstado_descripcion_key" ON public."TC_BizumEstado" USING btree (descripcion);


-- public."TC_UserEstado" definition

-- Drop table

-- DROP TABLE public."TC_UserEstado";

CREATE TABLE public."TC_UserEstado" (
	id int4 NOT NULL,
	descripcion text NOT NULL,
	CONSTRAINT "TC_UserEstado_pkey" PRIMARY KEY (id)
);
CREATE UNIQUE INDEX "TC_UserEstado_descripcion_key" ON public."TC_UserEstado" USING btree (descripcion);


-- public."TC_MovimientoTipo" definition

-- Drop table

-- DROP TABLE public."TC_MovimientoTipo";

CREATE TABLE public."TC_MovimientoTipo" (
	id int4 NOT NULL,
	descripcion text NOT NULL,
	CONSTRAINT "TC_MovimientoTipo_pkey" PRIMARY KEY (id)
);
CREATE UNIQUE INDEX "TC_MovimientoTipo_descripcion_key" ON public."TC_MovimientoTipo" USING btree (descripcion);


-- public."TC_UserRole" definition

-- Drop table

-- DROP TABLE public."TC_UserRole";

CREATE TABLE public."TC_UserRole" (
	id int4 NOT NULL,
	descripcion text NOT NULL,
	CONSTRAINT "TC_UserRole_pkey" PRIMARY KEY (id)
);
CREATE UNIQUE INDEX "TC_UserRole_descripcion_key" ON public."TC_UserRole" USING btree (descripcion);


-- public."Apuesta" definition

-- Drop table

-- DROP TABLE public."Apuesta";

CREATE TABLE public."Apuesta" (
	id serial4 NOT NULL,
	fecha timestamp(3) NOT NULL,
	apostado numeric(9, 2) NOT NULL DEFAULT 0,
	ganado numeric(9, 2) NOT NULL DEFAULT 0,
	estadoid int4 NOT NULL,
	"createdAt" timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "Apuesta_pkey" PRIMARY KEY (id),
	CONSTRAINT "Apuesta_estadoid_fkey" FOREIGN KEY (estadoid) REFERENCES public."TC_ApuestaEstado"(id) ON DELETE RESTRICT ON UPDATE CASCADE
);


-- public."User" definition

-- Drop table

-- DROP TABLE public."User";

CREATE TABLE public."User" (
	id int4 NOT NULL,
	"name" text NOT NULL,
	email text NOT NULL,
	"password" text NOT NULL,
	estadoid int4 NOT NULL,
	saldo numeric(9, 2) NOT NULL,
	"createdAt" timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"updatedAt" timestamp(3) NOT NULL,
	roleid int4 NOT NULL,
	CONSTRAINT "User_pkey" PRIMARY KEY (id),
	CONSTRAINT "User_estadoid_fkey" FOREIGN KEY (estadoid) REFERENCES public."TC_UserEstado"(id) ON DELETE RESTRICT ON UPDATE CASCADE,
	CONSTRAINT "User_roleid_fkey" FOREIGN KEY (roleid) REFERENCES public."TC_UserRole"(id) ON DELETE RESTRICT ON UPDATE CASCADE
);
CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


-- public."UserXApuesta" definition

-- Drop table

-- DROP TABLE public."UserXApuesta";

CREATE TABLE public."UserXApuesta" (
	id serial4 NOT NULL,
	userid int4 NOT NULL,
	apuestaid int4 NOT NULL,
	CONSTRAINT "UserXApuesta_pkey" PRIMARY KEY (id),
	CONSTRAINT "UserXApuesta_apuestaid_fkey" FOREIGN KEY (apuestaid) REFERENCES public."Apuesta"(id) ON DELETE RESTRICT ON UPDATE CASCADE,
	CONSTRAINT "UserXApuesta_userid_fkey" FOREIGN KEY (userid) REFERENCES public."User"(id) ON DELETE RESTRICT ON UPDATE CASCADE
);


-- public."UserXBizum" definition

-- Drop table

-- DROP TABLE public."UserXBizum";

CREATE TABLE public."UserXBizum" (
	id serial4 NOT NULL,
	importe numeric(9, 2) NOT NULL,
	userid int4 NOT NULL,
	estadoid int4 NOT NULL,
	"createdAt" timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "UserXBizum_pkey" PRIMARY KEY (id),
	CONSTRAINT "UserXBizum_estadoid_fkey" FOREIGN KEY (estadoid) REFERENCES public."TC_BizumEstado"(id) ON DELETE RESTRICT ON UPDATE CASCADE,
	CONSTRAINT "UserXBizum_userid_fkey" FOREIGN KEY (userid) REFERENCES public."User"(id) ON DELETE RESTRICT ON UPDATE CASCADE
);


-- public."UserXMovimiento" definition

-- Drop table

-- DROP TABLE public."UserXMovimiento";

CREATE TABLE public."UserXMovimiento" (
	id serial4 NOT NULL,
	importe numeric(9, 2) NOT NULL,
	userid int4 NOT NULL,
	tipoid int4 NOT NULL,
	"createdAt" timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
	apuestaid int4 NULL,
	beforesaldo numeric(9, 2) NOT NULL,
	bizumid int4 NULL,
	actualsaldo numeric(9, 2) NOT NULL,
	CONSTRAINT "UserXMovimiento_pkey" PRIMARY KEY (id),
	CONSTRAINT "UserXMovimiento_apuestaid_fkey" FOREIGN KEY (apuestaid) REFERENCES public."Apuesta"(id) ON DELETE RESTRICT ON UPDATE CASCADE,
	CONSTRAINT "UserXMovimiento_bizumid_fkey" FOREIGN KEY (bizumid) REFERENCES public."UserXBizum"(id) ON DELETE RESTRICT ON UPDATE CASCADE,
	CONSTRAINT "UserXMovimiento_tipoid_fkey" FOREIGN KEY (tipoid) REFERENCES public."TC_MovimientoTipo"(id) ON DELETE RESTRICT ON UPDATE CASCADE,
	CONSTRAINT "UserXMovimiento_userid_fkey" FOREIGN KEY (userid) REFERENCES public."User"(id) ON DELETE RESTRICT ON UPDATE CASCADE
);


-- public."CodeSecure" definition

-- Drop table

-- DROP TABLE public."CodeSecure";

CREATE TABLE public."CodeSecure" (
	code uuid NOT NULL,
	"type" int4 NOT NULL,
	userid int4 NOT NULL,
	"createdAt" timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "CodeSecure_pkey" PRIMARY KEY (code),
	CONSTRAINT "CodeSecure_userid_fkey" FOREIGN KEY (userid) REFERENCES public."User"(id) ON DELETE RESTRICT ON UPDATE CASCADE
);