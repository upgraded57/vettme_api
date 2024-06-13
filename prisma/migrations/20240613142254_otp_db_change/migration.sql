-- DropForeignKey
ALTER TABLE `otp` DROP FOREIGN KEY `OTP_userId_fkey`;

-- AddForeignKey
ALTER TABLE `otp` ADD CONSTRAINT `otp_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `otp` RENAME INDEX `OTP_userId_key` TO `otp_userId_key`;
