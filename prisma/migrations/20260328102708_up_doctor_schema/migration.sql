/*
  Warnings:

  - You are about to drop the column `description` on the `educations` table. All the data in the column will be lost.
  - You are about to drop the column `end_date` on the `educations` table. All the data in the column will be lost.
  - You are about to drop the column `field_of_study` on the `educations` table. All the data in the column will be lost.
  - You are about to drop the column `start_date` on the `educations` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `schedules` table. All the data in the column will be lost.
  - You are about to drop the column `slot_duration_minutes` on the `schedules` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `specialisations` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "educations" DROP COLUMN "description",
DROP COLUMN "end_date",
DROP COLUMN "field_of_study",
DROP COLUMN "start_date",
ADD COLUMN     "date" VARCHAR(150);

-- AlterTable
ALTER TABLE "schedules" DROP COLUMN "location",
DROP COLUMN "slot_duration_minutes";

-- AlterTable
ALTER TABLE "specialisations" DROP COLUMN "description";
