-- CreateTable
CREATE TABLE "doctors" (
    "id" UUID NOT NULL,
    "first_name" VARCHAR(100) NOT NULL,
    "last_name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password_hash" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(20),
    "gender" VARCHAR(10),
    "birthday" DATE,
    "city" VARCHAR(100),
    "full_address" VARCHAR(255),
    "latitude" DECIMAL(10,7),
    "longitude" DECIMAL(10,7),
    "bio" TEXT,
    "years_exp" VARCHAR(20),
    "speciality" VARCHAR(100),
    "licence_nbr" VARCHAR(100),
    "price" DECIMAL(8,2),
    "diploma_url" VARCHAR(500),
    "licence_url" VARCHAR(500),
    "rating" DECIMAL(3,2) NOT NULL DEFAULT 0,
    "reviews_count" INTEGER NOT NULL DEFAULT 0,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "email_verified" BOOLEAN NOT NULL DEFAULT false,
    "phone_verified" BOOLEAN NOT NULL DEFAULT false,
    "theme" VARCHAR(10) NOT NULL DEFAULT 'system',
    "language" VARCHAR(5) NOT NULL DEFAULT 'en',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "doctors_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "doctors_email_key" ON "doctors"("email");

-- CreateIndex
CREATE UNIQUE INDEX "doctors_licence_nbr_key" ON "doctors"("licence_nbr");
