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
INSERT INTO `cms_news` VALUES (1,1,'Welcome to BlazeCMS','Thank u, for using BlazeCMS!','<p style=\"font-size: 18px; color: #666; line-height: 1.5; margin: 20px 0; text-align: justify;\">\nWe are thrilled to announce the launch of BlazeCMS, a modern Content Management System built with Next.js and React. BlazeCMS provides a user-friendly interface for managing your hotel\'s content, allowing you to easily create and edit pages, add images and videos, and keep your guests informed about the latest news and events in your hotel.\n</p>\n<p style=\"font-size: 18px; color: #666; line-height: 1.5; margin: 20px 0; text-align: justify;\">\nWith BlazeCMS, you\'ll enjoy a sleek and modern design that makes managing your hotel\'s content a breeze. Our CMS is optimized for speed and reliability, ensuring that you can make updates to your website quickly and efficiently.\n</p>\n<p style=\"font-size: 18px; color: #666; line-height: 1.5; margin: 20px 0; text-align: justify;\">\nBuilt with modern technologies such as Next.js and React, BlazeCMS provides a scalable and flexible platform for managing your hotel\'s content. Whether you\'re a small hotel or a large enterprise, BlazeCMS is designed to meet your needs and exceed your expectations.\n</p>\n<p style=\"font-size: 18px; color: #666; line-height: 1.5; margin: 20px 0; text-align: justify;\">\nWe hope that you enjoy using BlazeCMS as much as we enjoyed building it. If you have any questions or feedback, please don\'t hesitate to contact us. Thank you for choosing BlazeCMS!\n</p>','https://images.habbo.com/web_images/habbo-web-articles/lpromo_mar21_gen.png','2023-04-03 01:07:02',1);
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

--
-- Table structure for table `permissions`
--

DROP TABLE IF EXISTS `permissions`;

CREATE TABLE IF NOT EXISTS `permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rank_name` varchar(25) NOT NULL,
  `badge` varchar(12) NOT NULL DEFAULT '',
  `level` int(11) NOT NULL DEFAULT 1,
  `room_effect` int(11) NOT NULL DEFAULT 0,
  `log_commands` enum('0','1') NOT NULL DEFAULT '0',
  `prefix` varchar(10000) NOT NULL,
  `prefix_color` varchar(7) NOT NULL,
  `cmd_about` enum('0','1') NOT NULL DEFAULT '1',
  `cmd_alert` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_allow_trading` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_badge` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_ban` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_blockalert` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_bots` enum('0','1','2') NOT NULL DEFAULT '1',
  `cmd_bundle` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_calendar` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_changename` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_chatcolor` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_commands` enum('0','1') NOT NULL DEFAULT '1',
  `cmd_connect_camera` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_control` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_coords` enum('0','1','2') NOT NULL DEFAULT '2',
  `cmd_credits` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_subscription` enum('0','1') DEFAULT '0',
  `cmd_danceall` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_diagonal` enum('0','1','2') NOT NULL DEFAULT '1',
  `cmd_disconnect` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_duckets` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_ejectall` enum('0','1','2') NOT NULL DEFAULT '2',
  `cmd_empty` enum('0','1') NOT NULL DEFAULT '1',
  `cmd_empty_bots` enum('0','1') NOT NULL DEFAULT '1',
  `cmd_empty_pets` enum('0','1') NOT NULL DEFAULT '1',
  `cmd_enable` enum('0','1','2') NOT NULL DEFAULT '1',
  `cmd_event` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_faceless` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_fastwalk` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_filterword` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_freeze` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_freeze_bots` enum('0','1','2') NOT NULL DEFAULT '1',
  `cmd_gift` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_give_rank` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_ha` enum('0','1') NOT NULL DEFAULT '0',
  `acc_can_stalk` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_hal` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_invisible` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_ip_ban` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_machine_ban` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_hand_item` enum('0','1','2') NOT NULL DEFAULT '1',
  `cmd_happyhour` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_hidewired` enum('0','1','2') NOT NULL DEFAULT '2',
  `cmd_kickall` enum('0','1','2') NOT NULL DEFAULT '2',
  `cmd_softkick` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_massbadge` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_roombadge` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_masscredits` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_massduckets` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_massgift` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_masspoints` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_moonwalk` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_mimic` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_multi` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_mute` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_pet_info` enum('0','1','2') NOT NULL DEFAULT '2',
  `cmd_pickall` enum('0','1') NOT NULL DEFAULT '1',
  `cmd_plugins` enum('0','1') NOT NULL DEFAULT '1',
  `cmd_points` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_promote_offer` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_pull` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_push` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_redeem` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_reload_room` enum('0','1','2') NOT NULL DEFAULT '2',
  `cmd_roomalert` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_roomcredits` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_roomeffect` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_roomgift` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_roomitem` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_roommute` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_roompixels` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_roompoints` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_say` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_say_all` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_setmax` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_set_poll` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_setpublic` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_setspeed` enum('0','1','2') NOT NULL DEFAULT '1',
  `cmd_shout` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_shout_all` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_shutdown` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_sitdown` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_staffalert` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_staffonline` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_summon` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_summonrank` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_super_ban` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_stalk` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_superpull` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_take_badge` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_talk` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_teleport` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_trash` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_transform` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_unban` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_unload` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_unmute` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_achievements` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_bots` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_catalogue` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_config` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_guildparts` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_hotel_view` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_items` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_navigator` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_permissions` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_pet_data` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_plugins` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_polls` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_texts` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_wordfilter` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_userinfo` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_word_quiz` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_warp` enum('0','1') NOT NULL DEFAULT '0',
  `acc_anychatcolor` enum('0','1') NOT NULL DEFAULT '0',
  `acc_anyroomowner` enum('0','1') NOT NULL DEFAULT '0',
  `acc_empty_others` enum('0','1') NOT NULL DEFAULT '0',
  `acc_enable_others` enum('0','1') NOT NULL DEFAULT '0',
  `acc_see_whispers` enum('0','1') NOT NULL DEFAULT '0',
  `acc_see_tentchat` enum('0','1') NOT NULL DEFAULT '0',
  `acc_superwired` enum('0','1') NOT NULL DEFAULT '0',
  `acc_supporttool` enum('0','1') NOT NULL DEFAULT '0',
  `acc_unkickable` enum('0','1') NOT NULL DEFAULT '0',
  `acc_guildgate` enum('0','1') NOT NULL DEFAULT '0',
  `acc_moverotate` enum('0','1') NOT NULL DEFAULT '0',
  `acc_placefurni` enum('0','1') NOT NULL DEFAULT '0',
  `acc_unlimited_bots` enum('0','1','2') NOT NULL DEFAULT '0' COMMENT 'Overrides the bot restriction to the inventory and room.',
  `acc_unlimited_pets` enum('0','1','2') NOT NULL DEFAULT '0' COMMENT 'Overrides the pet restriction to the inventory and room.',
  `acc_hide_ip` enum('0','1') NOT NULL DEFAULT '0',
  `acc_hide_mail` enum('0','1') NOT NULL DEFAULT '0',
  `acc_not_mimiced` enum('0','1') NOT NULL DEFAULT '0',
  `acc_chat_no_flood` enum('0','1') NOT NULL DEFAULT '0',
  `acc_staff_chat` enum('0','1') NOT NULL DEFAULT '0',
  `acc_staff_pick` enum('0','1') NOT NULL DEFAULT '0',
  `acc_enteranyroom` enum('0','1') NOT NULL DEFAULT '0',
  `acc_fullrooms` enum('0','1') NOT NULL DEFAULT '0',
  `acc_infinite_credits` enum('0','1') NOT NULL DEFAULT '0',
  `acc_infinite_pixels` enum('0','1') NOT NULL DEFAULT '0',
  `acc_infinite_points` enum('0','1') NOT NULL DEFAULT '0',
  `acc_ambassador` enum('0','1') NOT NULL DEFAULT '0',
  `acc_debug` enum('0','1') NOT NULL DEFAULT '0',
  `acc_chat_no_limit` enum('0','1') NOT NULL DEFAULT '0' COMMENT 'People with this permission node are always heard and can see all chat in the room regarding of maximum hearing distance in the room settings (In game)',
  `acc_chat_no_filter` enum('0','1') NOT NULL DEFAULT '0',
  `acc_nomute` enum('0','1') NOT NULL DEFAULT '0',
  `acc_guild_admin` enum('0','1') NOT NULL DEFAULT '0',
  `acc_catalog_ids` enum('0','1') NOT NULL DEFAULT '0',
  `acc_modtool_ticket_q` enum('0','1') NOT NULL DEFAULT '0',
  `acc_modtool_user_logs` enum('0','1') NOT NULL DEFAULT '0',
  `acc_modtool_user_alert` enum('0','1') NOT NULL DEFAULT '0',
  `acc_modtool_user_kick` enum('0','1') NOT NULL DEFAULT '0',
  `acc_modtool_user_ban` enum('0','1') NOT NULL DEFAULT '0',
  `acc_modtool_room_info` enum('0','1') NOT NULL DEFAULT '0',
  `acc_modtool_room_logs` enum('0','1') NOT NULL DEFAULT '0',
  `acc_trade_anywhere` enum('0','1') NOT NULL DEFAULT '0',
  `acc_update_notifications` enum('0','1') NOT NULL DEFAULT '0',
  `acc_helper_use_guide_tool` enum('0','1') NOT NULL DEFAULT '0',
  `acc_helper_give_guide_tours` enum('0','1') NOT NULL DEFAULT '0',
  `acc_helper_judge_chat_reviews` enum('0','1') NOT NULL DEFAULT '0',
  `acc_floorplan_editor` enum('0','1') NOT NULL DEFAULT '0',
  `acc_camera` enum('0','1') NOT NULL DEFAULT '0',
  `acc_ads_background` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_wordquiz` enum('0','1','2') NOT NULL DEFAULT '0',
  `acc_room_staff_tags` enum('0','1') NOT NULL DEFAULT '0',
  `acc_infinite_friends` enum('0','1') NOT NULL DEFAULT '0',
  `acc_mimic_unredeemed` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_youtube_playlists` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_add_youtube_playlist` enum('0','1') NOT NULL DEFAULT '0',
  `auto_credits_amount` int(11) DEFAULT 0,
  `auto_pixels_amount` int(11) DEFAULT 0,
  `auto_gotw_amount` int(11) DEFAULT 0,
  `auto_points_amount` int(11) DEFAULT 0,
  `acc_mention` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_setstate` enum('0','1','2') NOT NULL DEFAULT '1',
  `cmd_buildheight` enum('0','1','2') NOT NULL DEFAULT '1',
  `cmd_setrotation` enum('0','1','2') NOT NULL DEFAULT '1',
  `cmd_sellroom` enum('0','1','2') NOT NULL DEFAULT '1',
  `cmd_buyroom` enum('0','1','2') NOT NULL DEFAULT '1',
  `cmd_pay` enum('0','1','2') NOT NULL DEFAULT '1',
  `cmd_kill` enum('0','1','2') NOT NULL DEFAULT '1',
  `cmd_hoverboard` enum('0','1','2') NOT NULL DEFAULT '1',
  `cmd_kiss` enum('0','1','2') NOT NULL DEFAULT '1',
  `cmd_hug` enum('0','1','2') NOT NULL DEFAULT '1',
  `cmd_welcome` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_disable_effects` enum('0','1','2') NOT NULL DEFAULT '2',
  `cmd_brb` enum('0','1','2') NOT NULL DEFAULT '1',
  `cmd_nuke` enum('0','1','2') NOT NULL DEFAULT '1',
  `cmd_slime` enum('0','1','2') NOT NULL DEFAULT '1',
  `cmd_explain` enum('0','1','2') NOT NULL DEFAULT '1',
  `cmd_closedice` enum('0','1','2') NOT NULL DEFAULT '1',
  `acc_closedice_room` enum('0','1','2') NOT NULL DEFAULT '2',
  `cmd_set` enum('0','1','2') NOT NULL DEFAULT '1',
  `cmd_furnidata` enum('0','1') NOT NULL DEFAULT '0',
  `kiss_cmd` enum('0','1','2') NOT NULL DEFAULT '0',
  `acc_calendar_force` enum('0','1') DEFAULT '0',
  `cmd_update_calendar` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_emoji` enum('0','1') NOT NULL DEFAULT '0',
  `acc_mention_friends` enum('0','1') NOT NULL DEFAULT '0',
  `acc_mention_everyone` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_copyroom` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_takeroom` enum('0','1') NOT NULL DEFAULT '0',
  `acc_mod_alert` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_enable_mod_alert` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_disable_mod_alert` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_tptome` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_addwhisper` enum('0','1') NOT NULL DEFAULT '1',
  `cmd_delwhisper` enum('0','1') NOT NULL DEFAULT '1',
  `cmd_groupwhisper` enum('0','1') NOT NULL DEFAULT '1',
  `cmd_afk` enum('0','1','2') NOT NULL DEFAULT '1',
  `cmd_superpush` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_disablecommand` enum('0','1','2') NOT NULL DEFAULT '2',
  `cmd_override` enum('1','0') NOT NULL,
  `cmd_newevent` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_youtube` enum('2','1','0') NOT NULL DEFAULT '2',
  `cmd_removecredits` enum('') NOT NULL,
  `cmd_staffblaze` enum('1','0') NOT NULL,
  `cmd_update_ls_rewards` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_ls_name_colors` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_ls_prefixes` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_ls_toggle_level` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_ls_name_color` enum('0','1') NOT NULL DEFAULT '1',
  `cmd_ls_prefix` enum('0','1') NOT NULL DEFAULT '1',
  `cmd_yavasmod` enum('1','0') NOT NULL DEFAULT '0',
  `cmd_commandsc` enum('0','1') NOT NULL DEFAULT '1',
  `cmd_update_categories` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_game` enum('0','1','2') NOT NULL DEFAULT '1',
  `blaze_extra` enum('1','0') NOT NULL DEFAULT '0',
  `only_staff` enum('1','0') NOT NULL DEFAULT '0',
  `cmd_flaguser` enum('1','0') NOT NULL DEFAULT '0',
  `blazeperm_owner` enum('1','0') NOT NULL DEFAULT '0',
  `cmd_reklam_ban` enum('1','0') NOT NULL DEFAULT '0',
  `cmd_softban` enum('1','0') NOT NULL DEFAULT '0',
  `cmd_pointslevel` enum('1','0') NOT NULL DEFAULT '0',
  `acc_notify_wordfilter` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_bilgi` enum('1','0') NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table habbo.permissions: ~7 rows (approximately)
DELETE FROM `permissions`;
/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;
INSERT INTO `permissions` (`id`, `rank_name`, `badge`, `level`, `room_effect`, `log_commands`, `prefix`, `prefix_color`, `cmd_about`, `cmd_alert`, `cmd_allow_trading`, `cmd_badge`, `cmd_ban`, `cmd_blockalert`, `cmd_bots`, `cmd_bundle`, `cmd_calendar`, `cmd_changename`, `cmd_chatcolor`, `cmd_commands`, `cmd_connect_camera`, `cmd_control`, `cmd_coords`, `cmd_credits`, `cmd_subscription`, `cmd_danceall`, `cmd_diagonal`, `cmd_disconnect`, `cmd_duckets`, `cmd_ejectall`, `cmd_empty`, `cmd_empty_bots`, `cmd_empty_pets`, `cmd_enable`, `cmd_event`, `cmd_faceless`, `cmd_fastwalk`, `cmd_filterword`, `cmd_freeze`, `cmd_freeze_bots`, `cmd_gift`, `cmd_give_rank`, `cmd_ha`, `acc_can_stalk`, `cmd_hal`, `cmd_invisible`, `cmd_ip_ban`, `cmd_machine_ban`, `cmd_hand_item`, `cmd_happyhour`, `cmd_hidewired`, `cmd_kickall`, `cmd_softkick`, `cmd_massbadge`, `cmd_roombadge`, `cmd_masscredits`, `cmd_massduckets`, `cmd_massgift`, `cmd_masspoints`, `cmd_moonwalk`, `cmd_mimic`, `cmd_multi`, `cmd_mute`, `cmd_pet_info`, `cmd_pickall`, `cmd_plugins`, `cmd_points`, `cmd_promote_offer`, `cmd_pull`, `cmd_push`, `cmd_redeem`, `cmd_reload_room`, `cmd_roomalert`, `cmd_roomcredits`, `cmd_roomeffect`, `cmd_roomgift`, `cmd_roomitem`, `cmd_roommute`, `cmd_roompixels`, `cmd_roompoints`, `cmd_say`, `cmd_say_all`, `cmd_setmax`, `cmd_set_poll`, `cmd_setpublic`, `cmd_setspeed`, `cmd_shout`, `cmd_shout_all`, `cmd_shutdown`, `cmd_sitdown`, `cmd_staffalert`, `cmd_staffonline`, `cmd_summon`, `cmd_summonrank`, `cmd_super_ban`, `cmd_stalk`, `cmd_superpull`, `cmd_take_badge`, `cmd_talk`, `cmd_teleport`, `cmd_trash`, `cmd_transform`, `cmd_unban`, `cmd_unload`, `cmd_unmute`, `cmd_update_achievements`, `cmd_update_bots`, `cmd_update_catalogue`, `cmd_update_config`, `cmd_update_guildparts`, `cmd_update_hotel_view`, `cmd_update_items`, `cmd_update_navigator`, `cmd_update_permissions`, `cmd_update_pet_data`, `cmd_update_plugins`, `cmd_update_polls`, `cmd_update_texts`, `cmd_update_wordfilter`, `cmd_userinfo`, `cmd_word_quiz`, `cmd_warp`, `acc_anychatcolor`, `acc_anyroomowner`, `acc_empty_others`, `acc_enable_others`, `acc_see_whispers`, `acc_see_tentchat`, `acc_superwired`, `acc_supporttool`, `acc_unkickable`, `acc_guildgate`, `acc_moverotate`, `acc_placefurni`, `acc_unlimited_bots`, `acc_unlimited_pets`, `acc_hide_ip`, `acc_hide_mail`, `acc_not_mimiced`, `acc_chat_no_flood`, `acc_staff_chat`, `acc_staff_pick`, `acc_enteranyroom`, `acc_fullrooms`, `acc_infinite_credits`, `acc_infinite_pixels`, `acc_infinite_points`, `acc_ambassador`, `acc_debug`, `acc_chat_no_limit`, `acc_chat_no_filter`, `acc_nomute`, `acc_guild_admin`, `acc_catalog_ids`, `acc_modtool_ticket_q`, `acc_modtool_user_logs`, `acc_modtool_user_alert`, `acc_modtool_user_kick`, `acc_modtool_user_ban`, `acc_modtool_room_info`, `acc_modtool_room_logs`, `acc_trade_anywhere`, `acc_update_notifications`, `acc_helper_use_guide_tool`, `acc_helper_give_guide_tours`, `acc_helper_judge_chat_reviews`, `acc_floorplan_editor`, `acc_camera`, `acc_ads_background`, `cmd_wordquiz`, `acc_room_staff_tags`, `acc_infinite_friends`, `acc_mimic_unredeemed`, `cmd_update_youtube_playlists`, `cmd_add_youtube_playlist`, `auto_credits_amount`, `auto_pixels_amount`, `auto_gotw_amount`, `auto_points_amount`, `acc_mention`, `cmd_setstate`, `cmd_buildheight`, `cmd_setrotation`, `cmd_sellroom`, `cmd_buyroom`, `cmd_pay`, `cmd_kill`, `cmd_hoverboard`, `cmd_kiss`, `cmd_hug`, `cmd_welcome`, `cmd_disable_effects`, `cmd_brb`, `cmd_nuke`, `cmd_slime`, `cmd_explain`, `cmd_closedice`, `acc_closedice_room`, `cmd_set`, `cmd_furnidata`, `kiss_cmd`, `acc_calendar_force`, `cmd_update_calendar`, `cmd_update_emoji`, `acc_mention_friends`, `acc_mention_everyone`, `cmd_copyroom`, `cmd_takeroom`, `acc_mod_alert`, `cmd_enable_mod_alert`, `cmd_disable_mod_alert`, `cmd_tptome`, `cmd_addwhisper`, `cmd_delwhisper`, `cmd_groupwhisper`, `cmd_afk`, `cmd_superpush`, `cmd_disablecommand`, `cmd_override`, `cmd_newevent`, `cmd_youtube`, `cmd_removecredits`, `cmd_staffblaze`, `cmd_update_ls_rewards`, `cmd_update_ls_name_colors`, `cmd_update_ls_prefixes`, `cmd_ls_toggle_level`, `cmd_ls_name_color`, `cmd_ls_prefix`, `cmd_yavasmod`, `cmd_commandsc`, `cmd_update_categories`, `cmd_game`, `blaze_extra`, `only_staff`, `cmd_flaguser`, `blazeperm_owner`, `cmd_reklam_ban`, `cmd_softban`, `cmd_pointslevel`, `acc_notify_wordfilter`, `cmd_bilgi`) VALUES
	(1, 'User', '', 1, 0, '0', '', '', '0', '0', '1', '0', '0', '1', '1', '0', '0', '1', '0', '1', '0', '0', '1', '0', '0', '0', '1', '0', '0', '1', '1', '1', '1', '1', '0', '1', '0', '0', '0', '2', '0', '0', '0', '1', '0', '0', '0', '0', '1', '0', '2', '2', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '1', '0', '0', '0', '1', '1', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '2', '1', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '2', '0', '0', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0', '0', 1, 1, 0, 0, '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '0', '0', '1', '1', '1', '0', '2', '2', '1', '0', '1', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '0', '2', '0', '0', '2', '', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1'),
	(2, 'VIP', '', 1, 0, '0', '', '', '0', '0', '1', '0', '0', '1', '1', '0', '0', '1', '0', '1', '0', '0', '1', '0', '0', '0', '1', '0', '0', '1', '1', '1', '1', '1', '0', '1', '0', '0', '0', '2', '0', '0', '0', '1', '0', '0', '0', '0', '1', '0', '2', '2', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '1', '0', '0', '0', '1', '1', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '2', '1', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '2', '0', '0', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0', '0', 1, 1, 0, 0, '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '0', '0', '1', '1', '1', '0', '2', '2', '1', '0', '1', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '0', '2', '0', '0', '1', '', '1', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1'),
	(3, 'Support', '', 1, 0, '0', '', '', '0', '0', '1', '0', '0', '1', '1', '0', '0', '1', '0', '1', '0', '0', '1', '0', '0', '0', '1', '0', '0', '1', '1', '1', '1', '1', '0', '1', '0', '0', '0', '2', '0', '0', '0', '1', '0', '0', '0', '0', '1', '0', '2', '2', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '1', '0', '0', '0', '1', '1', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '2', '1', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '2', '0', '0', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0', '0', 1, 1, 0, 0, '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '0', '0', '1', '1', '1', '0', '2', '2', '1', '0', '1', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '0', '2', '0', '0', '1', '', '1', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1'),
	(4, 'BAW', '', 1, 0, '0', '', '', '0', '0', '1', '0', '0', '1', '1', '0', '0', '1', '0', '1', '0', '0', '1', '0', '0', '0', '1', '0', '0', '1', '1', '1', '1', '1', '0', '1', '0', '0', '0', '2', '0', '0', '0', '1', '0', '0', '0', '0', '1', '0', '2', '2', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '1', '0', '0', '0', '1', '1', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '2', '1', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '2', '0', '0', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0', '0', 1, 1, 0, 0, '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '0', '0', '1', '1', '1', '0', '2', '2', '1', '0', '1', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '0', '2', '0', '0', '1', '', '1', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1'),
	(5, 'Radio', '', 1, 0, '0', '', '', '0', '0', '1', '0', '0', '1', '1', '0', '0', '1', '0', '1', '0', '0', '1', '0', '0', '0', '1', '0', '0', '1', '1', '1', '1', '1', '0', '1', '0', '0', '0', '2', '0', '0', '0', '1', '0', '0', '0', '0', '1', '0', '2', '2', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '1', '0', '0', '0', '1', '1', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '2', '1', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '2', '0', '0', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0', '0', 1, 1, 0, 0, '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '0', '0', '1', '1', '1', '0', '2', '2', '1', '0', '1', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '0', '2', '0', '0', '1', '', '1', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1'),
	(6, 'Designer', '', 1, 0, '0', '', '', '0', '0', '1', '0', '0', '1', '1', '0', '0', '1', '0', '1', '0', '0', '1', '0', '0', '0', '1', '0', '0', '1', '1', '1', '1', '1', '0', '1', '0', '0', '0', '2', '0', '0', '0', '1', '0', '0', '0', '0', '1', '0', '2', '2', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '1', '0', '0', '0', '1', '1', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '2', '1', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '2', '0', '0', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0', '0', 1, 1, 0, 0, '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '0', '0', '1', '1', '1', '0', '2', '2', '1', '0', '1', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '0', '2', '0', '0', '1', '', '1', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1'),
	(7, 'VIP', '', 2, 0, '0', '', '', '0', '0', '1', '0', '0', '1', '1', '0', '0', '1', '0', '1', '0', '0', '1', '0', '0', '0', '1', '0', '0', '1', '1', '1', '1', '1', '0', '1', '0', '0', '0', '2', '0', '0', '0', '1', '0', '0', '0', '0', '1', '0', '2', '2', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '1', '0', '0', '0', '1', '1', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '2', '1', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '2', '0', '0', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0', '0', 1, 1, 0, 0, '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '0', '0', '1', '1', '1', '0', '2', '2', '1', '0', '1', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '0', '2', '0', '0', '1', '', '1', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1'),
	(8, 'Game Master', '', 1, 0, '0', '', '', '0', '0', '1', '0', '0', '1', '1', '0', '0', '1', '0', '1', '0', '0', '1', '0', '0', '0', '1', '0', '0', '1', '1', '1', '1', '1', '0', '1', '0', '0', '0', '2', '0', '0', '0', '1', '0', '0', '0', '0', '1', '0', '2', '2', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '1', '0', '0', '0', '1', '1', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '2', '1', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '2', '0', '0', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0', '0', 1, 1, 0, 0, '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '0', '0', '1', '1', '1', '0', '2', '2', '1', '0', '1', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '0', '2', '0', '0', '1', '', '1', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1'),
	(9, 'Arquitect', '', 1, 0, '0', '', '', '0', '0', '1', '0', '0', '1', '1', '0', '0', '1', '0', '1', '0', '0', '1', '0', '0', '0', '1', '0', '0', '1', '1', '1', '1', '1', '0', '1', '0', '0', '0', '2', '0', '0', '0', '1', '0', '0', '0', '0', '1', '0', '2', '2', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '1', '0', '0', '0', '1', '1', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '2', '1', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '2', '0', '0', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0', '0', 1, 1, 0, 0, '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '0', '0', '1', '1', '1', '0', '2', '2', '1', '0', '1', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '0', '2', '0', '0', '1', '', '1', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1'),
	(10, 'eXpert', 'XXX', 3, 0, '0', '', '', '0', '0', '1', '0', '0', '1', '1', '0', '0', '1', '0', '1', '0', '0', '1', '0', '0', '0', '1', '0', '0', '1', '1', '1', '1', '1', '0', '1', '0', '0', '0', '2', '0', '0', '0', '1', '0', '0', '0', '0', '1', '0', '2', '2', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '1', '0', '1', '0', '0', '0', '1', '1', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '2', '0', '0', '0', '0', '0', '1', '0', '0', '0', '1', '0', '0', '0', '2', '0', '0', '0', '2', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '1', '0', '0', '0', '0', '0', '1', '1', '0', '1', '1', '0', '1', '1', '0', '0', '0', '1', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', 1, 1, 0, 0, '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '0', '0', '1', '1', '1', '0', '2', '2', '1', '0', '1', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '0', '2', '0', '0', '1', '', '1', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1'),
	(11, 'Moderator', 'ADM', 4, 0, '0', 'https://3.bp.blogspot.com/-MNdgOXkkYqo/WWf0sjAsrZI/AAAAAAAA7jA/JAjmoY9MswwMC35JQnwMmvrfHBwrrVgBwCKgBGAs/s1600/f1331f6b6607b5dddbd648c351316298.gif', '', '0', '1', '1', '0', '0', '1', '1', '0', '0', '1', '0', '1', '0', '0', '1', '0', '0', '0', '1', '0', '0', '1', '1', '1', '1', '1', '0', '1', '0', '0', '0', '2', '0', '0', '0', '1', '0', '0', '0', '0', '1', '0', '2', '1', '1', '0', '0', '0', '0', '0', '0', '1', '1', '0', '1', '0', '1', '0', '0', '0', '1', '1', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '2', '0', '0', '0', '0', '0', '1', '0', '0', '0', '1', '0', '0', '0', '2', '0', '0', '0', '2', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1', '1', '0', '0', '0', '0', '0', '1', '1', '0', '1', '1', '0', '1', '1', '0', '0', '0', '1', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', 1, 1, 0, 0, '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '0', '0', '1', '1', '1', '0', '2', '2', '1', '0', '1', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '0', '1', '0', '0', '1', '', '1', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '1'),
	(12, 'S-Moderator', 'ADM', 5, 0, '0', 'https://3.bp.blogspot.com/-xGCzwGU7msA/XZVaFg8W_KI/AAAAAAABWaU/kLYdNgufOCkpraBsjw7Rw6phyZMfezr2QCKgBGAsYHg/s1600/moon_stars.png', '', '0', '1', '1', '0', '1', '1', '1', '0', '0', '1', '0', '1', '0', '0', '1', '0', '0', '0', '1', '0', '0', '1', '1', '1', '1', '1', '1', '1', '0', '0', '1', '1', '0', '0', '0', '1', '0', '1', '1', '0', '1', '0', '1', '1', '1', '0', '0', '0', '0', '0', '0', '1', '1', '0', '1', '0', '1', '0', '0', '0', '1', '1', '0', '1', '1', '0', '1', '0', '1', '1', '0', '0', '0', '0', '1', '1', '0', '1', '0', '0', '0', '0', '0', '1', '1', '0', '1', '1', '1', '0', '0', '1', '0', '0', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '1', '0', '1', '1', '0', '0', '1', '1', '0', '1', '1', '0', '1', '1', '0', '0', '0', '1', '0', '0', '1', '1', '0', '0', '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', 1, 1, 0, 0, '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '0', '0', '1', '1', '1', '0', '2', '2', '1', '0', '1', '0', '0', '0', '1', '0', '0', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '', '1', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '0', '1'),
	(13, 'Manager', 'ADM', 6, 0, '0', 'https://4.bp.blogspot.com/-kNQ9Y7U9aq0/WV-zzHKsrLI/AAAAAAAA6uo/_C21AzCd9uQ9utBtdT5pUMsQlBiu9SAKwCKgBGAs/s1600/ed483ed9b79b282bd901da62daee7669.gif', '', '0', '1', '1', '1', '1', '1', '1', '0', '0', '1', '0', '1', '0', '0', '1', '1', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '0', '0', '1', '1', '1', '1', '1', '0', '1', '0', '1', '1', '1', '1', '1', '0', '0', '0', '1', '1', '1', '0', '1', '0', '1', '0', '1', '0', '1', '1', '0', '1', '1', '1', '1', '0', '1', '1', '1', '1', '0', '0', '1', '1', '0', '1', '0', '0', '0', '1', '0', '1', '1', '1', '1', '1', '1', '1', '0', '1', '0', '0', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '1', '1', '1', '1', '0', '0', '0', '0', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '1', '1', '0', '0', '0', '1', '0', '0', '1', '1', '0', '0', '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', 1, 1, 0, 0, '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '0', '0', '1', '1', '1', '0', '1', '1', '1', '0', '1', '0', '0', '0', '1', '0', '0', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '', '1', '0', '0', '0', '0', '1', '0', '1', '0', '0', '0', '0', '0', '1', '0', '1', '1', '1', '0', '1'),
	(14, 'Owner', 'ADM', 7, 0, '0', 'https://3.bp.blogspot.com/-9JfSp5AqGTg/WV-zzKf9SgI/AAAAAAAA6uo/yXnrso9JjJIpoBgzTPF3cm9y2zunXbamQCKgBGAs/s1600/8b56a576738794615859d33307d23271.gif', '', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', 1, 1, 1, 0, '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '0', '0', '1', '1', '1', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '', '1', '0', '0', '0', '0', '0', '0', '1', '0', '1', '0', '0', '0', '1', '0', '1', '1', '1', '1', '1');
/*!40000 ALTER TABLE `permissions` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
