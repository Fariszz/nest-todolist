/*
 Navicat Premium Data Transfer

 Source Server         : Postgre Local
 Source Server Type    : PostgreSQL
 Source Server Version : 130002
 Source Host           : localhost:5432
 Source Catalog        : nest_todo_2
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 130002
 File Encoding         : 65001

 Date: 19/02/2023 15:40:14
*/


-- ----------------------------
-- Sequence structure for tags_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tags_id_seq";
CREATE SEQUENCE "public"."tags_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for todo_tags_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."todo_tags_id_seq";
CREATE SEQUENCE "public"."todo_tags_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for todos_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."todos_id_seq";
CREATE SEQUENCE "public"."todos_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for user_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."user_id_seq";
CREATE SEQUENCE "public"."user_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Table structure for tags
-- ----------------------------
DROP TABLE IF EXISTS "public"."tags";
CREATE TABLE "public"."tags" (
  "id" int4 NOT NULL DEFAULT nextval('tags_id_seq'::regclass),
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "created_at" timestamp(6) NOT NULL DEFAULT now(),
  "updated_at" timestamp(6) NOT NULL DEFAULT now(),
  "deleted_at" timestamp(6)
)
;

-- ----------------------------
-- Table structure for todo_tags
-- ----------------------------
DROP TABLE IF EXISTS "public"."todo_tags";
CREATE TABLE "public"."todo_tags" (
  "id" int4 NOT NULL DEFAULT nextval('todo_tags_id_seq'::regclass),
  "todo_id" int4 NOT NULL,
  "tag_id" int4 NOT NULL,
  "created_at" timestamp(6) NOT NULL DEFAULT now(),
  "updated_at" timestamp(6) NOT NULL DEFAULT now(),
  "deleted_at" timestamp(6)
)
;

-- ----------------------------
-- Table structure for todos
-- ----------------------------
DROP TABLE IF EXISTS "public"."todos";
CREATE TABLE "public"."todos" (
  "id" int4 NOT NULL DEFAULT nextval('todos_id_seq'::regclass),
  "title" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "description" text COLLATE "pg_catalog"."default" NOT NULL,
  "completed" bool NOT NULL,
  "due_time" timestamp(6),
  "user_id" int4 NOT NULL,
  "created_at" timestamp(6) NOT NULL DEFAULT now(),
  "updated_at" timestamp(6) NOT NULL DEFAULT now(),
  "deleted_at" timestamp(6)
)
;

-- ----------------------------
-- Table structure for typeorm_metadata
-- ----------------------------
DROP TABLE IF EXISTS "public"."typeorm_metadata";
CREATE TABLE "public"."typeorm_metadata" (
  "type" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "database" varchar COLLATE "pg_catalog"."default",
  "schema" varchar COLLATE "pg_catalog"."default",
  "table" varchar COLLATE "pg_catalog"."default",
  "name" varchar COLLATE "pg_catalog"."default",
  "value" text COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS "public"."user";
CREATE TABLE "public"."user" (
  "id" int4 NOT NULL DEFAULT nextval('user_id_seq'::regclass),
  "email" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "password" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "name" varchar COLLATE "pg_catalog"."default",
  "lastLoginAt" timestamp(6)
)
;

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tags_id_seq"
OWNED BY "public"."tags"."id";
SELECT setval('"public"."tags_id_seq"', 3, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."todo_tags_id_seq"
OWNED BY "public"."todo_tags"."id";
SELECT setval('"public"."todo_tags_id_seq"', 4, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."todos_id_seq"
OWNED BY "public"."todos"."id";
SELECT setval('"public"."todos_id_seq"', 6, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."user_id_seq"
OWNED BY "public"."user"."id";
SELECT setval('"public"."user_id_seq"', 2, true);

-- ----------------------------
-- Primary Key structure for table tags
-- ----------------------------
ALTER TABLE "public"."tags" ADD CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table todo_tags
-- ----------------------------
ALTER TABLE "public"."todo_tags" ADD CONSTRAINT "PK_2fec26e5923ceca471b0dfbf291" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table todos
-- ----------------------------
ALTER TABLE "public"."todos" ADD CONSTRAINT "PK_ca8cafd59ca6faaf67995344225" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table user
-- ----------------------------
ALTER TABLE "public"."user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table todo_tags
-- ----------------------------
ALTER TABLE "public"."todo_tags" ADD CONSTRAINT "FK_425e9a5498a6e434e3c6335b289" FOREIGN KEY ("tag_id") REFERENCES "public"."tags" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."todo_tags" ADD CONSTRAINT "FK_995af982f546b93672fe0ae6525" FOREIGN KEY ("todo_id") REFERENCES "public"."todos" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table todos
-- ----------------------------
ALTER TABLE "public"."todos" ADD CONSTRAINT "FK_53511787e1f412d746c4bf223ff" FOREIGN KEY ("user_id") REFERENCES "public"."user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
