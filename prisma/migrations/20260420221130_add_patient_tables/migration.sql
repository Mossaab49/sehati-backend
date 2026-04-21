-- CreateTable
CREATE TABLE "patient_users" (
    "id" UUID NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password_hash" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(20),
    "status" "UserStatus" NOT NULL DEFAULT 'ACTIVE',
    "email_verified" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "patient_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "patients" (
    "id" UUID NOT NULL,
    "patient_user_id" UUID NOT NULL,
    "first_name" VARCHAR(100) NOT NULL,
    "last_name" VARCHAR(100) NOT NULL,
    "gender" VARCHAR(10),
    "birthday" DATE,
    "city" VARCHAR(100),
    "picture_url" VARCHAR(500),
    "theme" VARCHAR(10) NOT NULL DEFAULT 'system',
    "language" VARCHAR(5) NOT NULL DEFAULT 'en',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "patients_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "patient_users_email_key" ON "patient_users"("email");

-- CreateIndex
CREATE INDEX "patient_users_email_idx" ON "patient_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "patients_patient_user_id_key" ON "patients"("patient_user_id");

-- CreateIndex
CREATE INDEX "patients_last_name_first_name_idx" ON "patients"("last_name", "first_name");

-- AddForeignKey
ALTER TABLE "patients" ADD CONSTRAINT "patients_patient_user_id_fkey" FOREIGN KEY ("patient_user_id") REFERENCES "patient_users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
