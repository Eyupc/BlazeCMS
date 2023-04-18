-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: retro
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cms_news`
--

DROP TABLE IF EXISTS `cms_news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cms_news` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `author_id` int unsigned NOT NULL,
  `title` varchar(255) NOT NULL DEFAULT 'Set Title',
  `description` varchar(255) NOT NULL DEFAULT 'Description',
  `full_story` text NOT NULL,
  `image` text NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `enabled` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_news`
--

LOCK TABLES `cms_news` WRITE;
/*!40000 ALTER TABLE `cms_news` DISABLE KEYS */;
INSERT INTO `cms_news` VALUES (1,34,'Welcome to BlazeCMS','Thank u, for using BlazeCMS!','<p style=\"font-size: 18px; color: #666; line-height: 1.5; margin: 20px 0; text-align: justify;\">\nWe are thrilled to announce the launch of BlazeCMS, a modern Content Management System built with Next.js and React. BlazeCMS provides a user-friendly interface for managing your hotel\'s content, allowing you to easily create and edit pages, add images and videos, and keep your guests informed about the latest news and events in your hotel.\n</p>\n<p style=\"font-size: 18px; color: #666; line-height: 1.5; margin: 20px 0; text-align: justify;\">\nWith BlazeCMS, you\'ll enjoy a sleek and modern design that makes managing your hotel\'s content a breeze. Our CMS is optimized for speed and reliability, ensuring that you can make updates to your website quickly and efficiently.\n</p>\n<p style=\"font-size: 18px; color: #666; line-height: 1.5; margin: 20px 0; text-align: justify;\">\nBuilt with modern technologies such as Next.js and React, BlazeCMS provides a scalable and flexible platform for managing your hotel\'s content. Whether you\'re a small hotel or a large enterprise, BlazeCMS is designed to meet your needs and exceed your expectations.\n</p>\n<p style=\"font-size: 18px; color: #666; line-height: 1.5; margin: 20px 0; text-align: justify;\">\nWe hope that you enjoy using BlazeCMS as much as we enjoyed building it. If you have any questions or feedback, please don\'t hesitate to contact us. Thank you for choosing BlazeCMS!\n</p>','https://images.habbo.com/web_images/habbo-web-articles/lpromo_mar21_gen.png','2023-04-03 01:07:02',1),(2,35,'Second Test','Thank u, for using BlazeCMS!','<p style=\"font-size: 18px; color: #666; line-height: 1.5; margin: 20px 0; text-align: justify;\">\nWe are thrilled to announce the launch of BlazeCMS, a modern Content Management System built with Next.js and React. BlazeCMS provides a user-friendly interface for managing your hotel\'s content, allowing you to easily create and edit pages, add images and videos, and keep your guests informed about the latest news and events in your hotel.\n</p>\n<p style=\"font-size: 18px; color: #666; line-height: 1.5; margin: 20px 0; text-align: justify;\">\nWith BlazeCMS, you\'ll enjoy a sleek and modern design that makes managing your hotel\'s content a breeze. Our CMS is optimized for speed and reliability, ensuring that you can make updates to your website quickly and efficiently.\n</p>\n<p style=\"font-size: 18px; color: #666; line-height: 1.5; margin: 20px 0; text-align: justify;\">\nBuilt with modern technologies such as Next.js and React, BlazeCMS provides a scalable and flexible platform for managing your hotel\'s content. Whether you\'re a small hotel or a large enterprise, BlazeCMS is designed to meet your needs and exceed your expectations.\n</p>\n<p style=\"font-size: 18px; color: #666; line-height: 1.5; margin: 20px 0; text-align: justify;\">\nWe hope that you enjoy using BlazeCMS as much as we enjoyed building it. If you have any questions or feedback, please don\'t hesitate to contact us. Thank you for choosing BlazeCMS!\n</p>','https://images.habbo.com/web_images/habbo-web-articles/lpromo_Wired_accessibility.png','2023-04-03 01:07:02',1),(3,34,'Welcome to BlazeCMS','Thank u, for using BlazeCMS!','<p style=\"font-size: 18px; color: #666; line-height: 1.5; margin: 20px 0; text-align: justify;\">\nWe are thrilled to announce the launch of BlazeCMS, a modern Content Management System built with Next.js and React. BlazeCMS provides a user-friendly interface for managing your hotel\'s content, allowing you to easily create and edit pages, add images and videos, and keep your guests informed about the latest news and events in your hotel.\n</p>\n<p style=\"font-size: 18px; color: #666; line-height: 1.5; margin: 20px 0; text-align: justify;\">\nWith BlazeCMS, you\'ll enjoy a sleek and modern design that makes managing your hotel\'s content a breeze. Our CMS is optimized for speed and reliability, ensuring that you can make updates to your website quickly and efficiently.\n</p>\n<p style=\"font-size: 18px; color: #666; line-height: 1.5; margin: 20px 0; text-align: justify;\">\nBuilt with modern technologies such as Next.js and React, BlazeCMS provides a scalable and flexible platform for managing your hotel\'s content. Whether you\'re a small hotel or a large enterprise, BlazeCMS is designed to meet your needs and exceed your expectations.\n</p>\n<p style=\"font-size: 18px; color: #666; line-height: 1.5; margin: 20px 0; text-align: justify;\">\nWe hope that you enjoy using BlazeCMS as much as we enjoyed building it. If you have any questions or feedback, please don\'t hesitate to contact us. Thank you for choosing BlazeCMS!\n</p>','https://images.habbo.com/web_images/habbo-web-articles/lpromo_haboweenblog.png','2023-04-05 01:35:57',1),(4,34,'Welcome to BlazeCMS','Thank u, for using BlazeCMS!','<p style=\"font-size: 18px; color: #666; line-height: 1.5; margin: 20px 0; text-align: justify;\">\nWe are thrilled to announce the launch of BlazeCMS, a modern Content Management System built with Next.js and React. BlazeCMS provides a user-friendly interface for managing your hotel\'s content, allowing you to easily create and edit pages, add images and videos, and keep your guests informed about the latest news and events in your hotel.\n</p>\n<p style=\"font-size: 18px; color: #666; line-height: 1.5; margin: 20px 0; text-align: justify;\">\nWith BlazeCMS, you\'ll enjoy a sleek and modern design that makes managing your hotel\'s content a breeze. Our CMS is optimized for speed and reliability, ensuring that you can make updates to your website quickly and efficiently.\n</p>\n<p style=\"font-size: 18px; color: #666; line-height: 1.5; margin: 20px 0; text-align: justify;\">\nBuilt with modern technologies such as Next.js and React, BlazeCMS provides a scalable and flexible platform for managing your hotel\'s content. Whether you\'re a small hotel or a large enterprise, BlazeCMS is designed to meet your needs and exceed your expectations.\n</p>\n<p style=\"font-size: 18px; color: #666; line-height: 1.5; margin: 20px 0; text-align: justify;\">\nWe hope that you enjoy using BlazeCMS as much as we enjoyed building it. If you have any questions or feedback, please don\'t hesitate to contact us. Thank you for choosing BlazeCMS!\n</p>','https://images.habbo.com/web_images/habbo-web-articles/lpromo_mar21_gen.png','2023-04-06 18:19:00',1);
/*!40000 ALTER TABLE `cms_news` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-18 21:53:33
