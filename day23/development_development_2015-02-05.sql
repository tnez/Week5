# ************************************************************
# Sequel Pro SQL dump
# Version 4096
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: localhost (MySQL 5.6.22)
# Database: development_development
# Generation Time: 2015-02-05 16:02:07 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table features
# ------------------------------------------------------------

DROP TABLE IF EXISTS `features`;

CREATE TABLE `features` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `difficulty` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `probability` float DEFAULT NULL,
  `description` text COLLATE utf8_unicode_ci,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `features` WRITE;
/*!40000 ALTER TABLE `features` DISABLE KEYS */;

INSERT INTO `features` (`id`, `name`, `difficulty`, `probability`, `description`, `created_at`, `updated_at`)
VALUES
	(1,'Lose 1 day','Easy',0.01,'You lose 1 total day of development time. ','2015-02-05 14:20:31','2015-02-05 14:20:31'),
	(2,'Lose 1 random team member','Medium',75,'You lose 1 random team member.','2015-02-05 14:21:16','2015-02-05 14:21:16'),
	(3,'Lose 1 team member of choice','Harsh',30,'You lose 1 team member, however the member must be voted off survivor-style.','2015-02-05 14:22:01','2015-02-05 14:22:01'),
	(4,'Use ERB','Easy',75,'You can not use any other templating language except for ERB.','2015-02-05 14:23:42','2015-02-05 14:23:42'),
	(5,'Use HAML','Medium',10,'HAML is the only templating language you can use.','2015-02-05 14:24:07','2015-02-05 14:24:07'),
	(6,'Use SLIM','Medium',10,'SLIM is the only templating language you can use.','2015-02-05 14:24:25','2015-02-05 14:24:25'),
	(7,'JADE','Medium',10,'JADE is the only templating language you can use.','2015-02-05 14:24:41','2015-02-05 14:24:41'),
	(8,'jQuery HTML generation','Extremely Difficult',10,'The only HTML you can use is your application.html file and/or routing files. You MUST generate everything via jQuery click events.','2015-02-05 14:25:46','2015-02-05 14:25:46'),
	(9,'Document your plan','Hard',10,'You MUST plan your application before you start coding.','2015-02-05 14:26:26','2015-02-05 14:26:26'),
	(10,'Spend a day learning with the Front Enders','Hard',10,'You must spend a lab day working with the front end students and/or asking Calvin for help instead of Nick and/or your fellow Rails students.','2015-02-05 14:27:24','2015-02-05 14:27:24'),
	(11,'Responsive with no CSS Framework','Hard',10,'Your application must be styled and responsive without the use of any CSS frameworks and/or tools.','2015-02-05 14:28:06','2015-02-05 14:28:06'),
	(12,'AJAX all the things','Hard',10,'Your application will function like a single page application. When you click links, the pages will be re-drawn AJAX style.','2015-02-05 14:28:47','2015-02-05 14:28:47'),
	(13,'Extra day of development time','Ez pz',100,'You get an extra day of development time. Don\'t forget, though, you may have additional assignments from that day.','2015-02-05 15:58:37','2015-02-05 15:58:37'),
	(14,'Take 5 minutes','Even easier',100,'Group hug time. Go cry together.','2015-02-05 15:59:20','2015-02-05 15:59:20');

/*!40000 ALTER TABLE `features` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table schema_migrations
# ------------------------------------------------------------

DROP TABLE IF EXISTS `schema_migrations`;

CREATE TABLE `schema_migrations` (
  `version` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  UNIQUE KEY `unique_schema_migrations` (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `schema_migrations` WRITE;
/*!40000 ALTER TABLE `schema_migrations` DISABLE KEYS */;

INSERT INTO `schema_migrations` (`version`)
VALUES
	('20150205141742');

/*!40000 ALTER TABLE `schema_migrations` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
