-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema music_rest
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema music_rest
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `music_rest` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `music_rest` ;

-- -----------------------------------------------------
-- Table `music_rest`.`songs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `music_rest`.`songs` (
  `idsongs` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `album` VARCHAR(45) NOT NULL,
  `releasedYear` VARCHAR(45) NOT NULL,
  `author` VARCHAR(45) NOT NULL,
  `durationTime` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idsongs`))
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
