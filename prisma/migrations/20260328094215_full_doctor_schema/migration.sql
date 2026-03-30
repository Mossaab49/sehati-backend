/*
  Warnings:

  - You are about to drop the column `email` on the `doctors` table. All the data in the column will be lost.
  - You are about to drop the column `email_verified` on the `doctors` table. All the data in the column will be lost.
  - You are about to drop the column `password_hash` on the `doctors` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `doctors` table. All the data in the column will be lost.
  - You are about to drop the column `phone_verified` on the `doctors` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[doctor_user_id]` on the table `doctors` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `doctor_user_id` to the `doctors` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'SUSPENDED');

-- CreateEnum
CREATE TYPE "DayOfWeek" AS ENUM ('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY');

-- DropIndex
DROP INDEX "doctors_email_key";

-- AlterTable
ALTER TABLE "doctors" DROP COLUMN "email",
DROP COLUMN "email_verified",
DROP COLUMN "password_hash",
DROP COLUMN "phone",
DROP COLUMN "phone_verified",
ADD COLUMN     "doctor_user_id" UUID NOT NULL;

-- CreateTable
CREATE TABLE "doctor_users" (
    "id" UUID NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password_hash" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(20),
    "status" "UserStatus" NOT NULL DEFAULT 'ACTIVE',
    "email_verified" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "doctor_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "specialisations" (
    "id" UUID NOT NULL,
    "doctor_id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "specialisations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "educations" (
    "id" UUID NOT NULL,
    "doctor_id" UUID NOT NULL,
    "institution" VARCHAR(150) NOT NULL,
    "degree" VARCHAR(150) NOT NULL,
    "field_of_study" VARCHAR(100),
    "start_date" DATE,
    "end_date" DATE,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "educations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schedules" (
    "id" UUID NOT NULL,
    "doctor_id" UUID NOT NULL,
    "day_of_week" "DayOfWeek" NOT NULL,
    "start_time" VARCHAR(5) NOT NULL,
    "end_time" VARCHAR(5) NOT NULL,
    "is_available" BOOLEAN NOT NULL DEFAULT true,
    "slot_duration_minutes" INTEGER NOT NULL DEFAULT 30,
    "location" VARCHAR(255),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "schedules_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "doctor_users_email_key" ON "doctor_users"("email");

-- CreateIndex
CREATE INDEX "doctor_users_email_idx" ON "doctor_users"("email");

-- CreateIndex
CREATE INDEX "specialisations_doctor_id_idx" ON "specialisations"("doctor_id");

-- CreateIndex
CREATE INDEX "educations_doctor_id_idx" ON "educations"("doctor_id");

-- CreateIndex
CREATE INDEX "schedules_doctor_id_day_of_week_idx" ON "schedules"("doctor_id", "day_of_week");

-- CreateIndex
CREATE UNIQUE INDEX "schedules_doctor_id_day_of_week_start_time_end_time_key" ON "schedules"("doctor_id", "day_of_week", "start_time", "end_time");

-- CreateIndex
CREATE UNIQUE INDEX "doctors_doctor_user_id_key" ON "doctors"("doctor_user_id");

-- CreateIndex
CREATE INDEX "doctors_last_name_first_name_idx" ON "doctors"("last_name", "first_name");

-- CreateIndex
CREATE INDEX "doctors_city_idx" ON "doctors"("city");

-- AddForeignKey
ALTER TABLE "doctors" ADD CONSTRAINT "doctors_doctor_user_id_fkey" FOREIGN KEY ("doctor_user_id") REFERENCES "doctor_users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "specialisations" ADD CONSTRAINT "specialisations_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "doctors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "educations" ADD CONSTRAINT "educations_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "doctors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "doctors"("id") ON DELETE CASCADE ON UPDATE CASCADE;
