-- CreateTable
CREATE TABLE "Crop" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "plantingDate" TIMESTAMP(3) NOT NULL,
    "expectedHarvest" TIMESTAMP(3) NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Crop_pkey" PRIMARY KEY ("id")
);
