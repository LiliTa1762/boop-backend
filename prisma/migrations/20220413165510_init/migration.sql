-- CreateTable
CREATE TABLE `doggie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `age` DECIMAL(65, 30) NOT NULL,
    `breed` VARCHAR(100) NOT NULL,
    `interests` VARCHAR(200) NOT NULL,
    `number_of_child` INTEGER NOT NULL,
    `owner_id` INTEGER NOT NULL,
    `city` VARCHAR(45) NOT NULL,
    `country` VARCHAR(45) NOT NULL,
    `photo` BLOB NULL,

    INDEX `fk_doggies_owner_idx`(`owner_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `doggie_has_walking` (
    `doggie_id` INTEGER NOT NULL,
    `walking_id` INTEGER NOT NULL,

    INDEX `fk_doggies_has_table1_doggies1_idx`(`doggie_id`),
    INDEX `fk_doggies_has_table1_table11_idx`(`walking_id`),
    PRIMARY KEY (`doggie_id`, `walking_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `owner` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `lastname` VARCHAR(45) NOT NULL,
    `email` VARCHAR(120) NOT NULL,
    `phone` INTEGER NOT NULL,
    `interests` VARCHAR(150) NOT NULL,
    `neighborhood` VARCHAR(45) NOT NULL,
    `city` VARCHAR(45) NOT NULL,
    `country` VARCHAR(45) NOT NULL,
    `photo` TINYBLOB NULL,

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `walker` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `lastname` VARCHAR(45) NOT NULL,
    `email` VARCHAR(120) NOT NULL,
    `phone` INTEGER NOT NULL,
    `about_me` VARCHAR(150) NOT NULL,
    `price_per_walk` VARCHAR(7) NOT NULL,
    `city` VARCHAR(45) NOT NULL,
    `country` VARCHAR(45) NOT NULL,
    `photo` BLOB NULL,

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `walking` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `owner_id` INTEGER NOT NULL,
    `walker_id` INTEGER NOT NULL,
    `price_walking` VARCHAR(7) NOT NULL,
    `duration` TIME(0) NOT NULL,
    `date_stamp` DATETIME(0) NOT NULL,

    INDEX `fk_table1_owner1_idx`(`owner_id`),
    INDEX `fk_table1_walker1_idx`(`walker_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `doggie` ADD CONSTRAINT `fk_doggies_owner` FOREIGN KEY (`owner_id`) REFERENCES `owner`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `doggie_has_walking` ADD CONSTRAINT `fk_doggies_has_table1_doggies1` FOREIGN KEY (`doggie_id`) REFERENCES `doggie`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `doggie_has_walking` ADD CONSTRAINT `fk_doggies_has_table1_table11` FOREIGN KEY (`walking_id`) REFERENCES `walking`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `walking` ADD CONSTRAINT `fk_table1_owner1` FOREIGN KEY (`owner_id`) REFERENCES `owner`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `walking` ADD CONSTRAINT `fk_table1_walker1` FOREIGN KEY (`walker_id`) REFERENCES `walker`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
