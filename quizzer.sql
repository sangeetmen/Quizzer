/*
 Navicat Premium Data Transfer

 Source Server         : LocalPG
 Source Server Type    : PostgreSQL
 Source Server Version : 90618
 Source Host           : localhost:5432
 Source Catalog        : quizzer
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 90618
 File Encoding         : 65001

 Date: 15/05/2020 19:15:51
*/


-- ----------------------------
-- Table structure for choices
-- ----------------------------
DROP TABLE IF EXISTS "public"."choices";
CREATE TABLE "public"."choices" (
  "id" int4 NOT NULL,
  "gameid" int4,
  "questionid" int4,
  "choice" varchar(255) COLLATE "pg_catalog"."default",
  "iscorrect" varchar(255) COLLATE "pg_catalog"."default",
  "display" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Table structure for game
-- ----------------------------
DROP TABLE IF EXISTS "public"."game";
CREATE TABLE "public"."game" (
  "id" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "gamename" varchar(255) COLLATE "pg_catalog"."default",
  "display" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Table structure for questions
-- ----------------------------
DROP TABLE IF EXISTS "public"."questions";
CREATE TABLE "public"."questions" (
  "id" int4 NOT NULL,
  "gameid" int4,
  "question" varchar(255) COLLATE "pg_catalog"."default",
  "answer" varchar(255) COLLATE "pg_catalog"."default",
  "display" varchar(255) COLLATE "pg_catalog"."default",
  "questiontype" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Table structure for teams
-- ----------------------------
DROP TABLE IF EXISTS "public"."teams";
CREATE TABLE "public"."teams" (
  "id" int4 NOT NULL,
  "gameid" int4,
  "teamname" varchar(255) COLLATE "pg_catalog"."default",
  "points" varchar(255) COLLATE "pg_catalog"."default",
  "postion" varchar(255) COLLATE "pg_catalog"."default",
  "display" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Primary Key structure for table choices
-- ----------------------------
ALTER TABLE "public"."choices" ADD CONSTRAINT "choices_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table game
-- ----------------------------
ALTER TABLE "public"."game" ADD CONSTRAINT "game_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table questions
-- ----------------------------
ALTER TABLE "public"."questions" ADD CONSTRAINT "questions_pkey" PRIMARY KEY ("id");
