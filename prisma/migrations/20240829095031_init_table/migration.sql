-- CreateTable
CREATE TABLE `bad_landlord` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `age` TINYINT UNSIGNED NULL,
    `address` VARCHAR(255) NOT NULL,
    `depositObligation` DECIMAL(15, 2) NOT NULL,
    `dueDate` DATE NOT NULL,
    `delinquency` SMALLINT UNSIGNED NOT NULL,
    `fulfillmentDate` DATE NOT NULL,
    `reimbursementDebt` DECIMAL(15, 2) NOT NULL,
    `executionCount` TINYINT UNSIGNED NOT NULL,
    `referenceDate` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
