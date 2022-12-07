-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 06, 2022 at 07:36 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nft_charity`
--

-- --------------------------------------------------------

--
-- Table structure for table `auctions`
--

CREATE TABLE `auctions` (
  `nft_id` varchar(255) NOT NULL,
  `campaign_id` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `auctions`
--

INSERT INTO `auctions` (`nft_id`, `campaign_id`, `status`, `created_at`, `updated_at`) VALUES
('1', '3', 'Available', '2022-11-17 07:17:31', '2022-11-17 07:17:31');

-- --------------------------------------------------------

--
-- Table structure for table `campaigns`
--

CREATE TABLE `campaigns` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `desc` mediumtext NOT NULL,
  `img1_url` varchar(255) NOT NULL,
  `img2_url` varchar(255) NOT NULL,
  `zone` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `campaigns`
--

INSERT INTO `campaigns` (`id`, `title`, `desc`, `img1_url`, `img2_url`, `zone`, `created_at`, `updated_at`) VALUES
(2, 'titleư23334', 'title', 'http://res.cloudinary.com/dhshtvtrl/image/upload/v1667545567/nft_charity/pxsudwnygsqmva7qkcyq.jpg', 'http://res.cloudinary.com/dhshtvtrl/image/upload/v1667545569/nft_charity/ikmtsxugw7eprcbwtrca.png', 'title', '2022-11-02 22:52:04', '2022-11-04 00:06:09'),
(3, 'Donate to save children', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ', 'http://res.cloudinary.com/dhshtvtrl/image/upload/v1667922339/nft_charity/wywjiodogclf5zctal64.jpg', 'http://res.cloudinary.com/dhshtvtrl/image/upload/v1667922340/nft_charity/sw81vdtakcblahefc6za.jpg', 'ádawdasd', '2022-11-03 23:37:52', '2022-11-08 08:45:42'),
(4, 'Give A Meal To Childrens', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.', 'http://res.cloudinary.com/dhshtvtrl/image/upload/v1667544307/nft_charity/mqplqpuoviupalpt7s4b.jpg', 'http://res.cloudinary.com/dhshtvtrl/image/upload/v1667544308/nft_charity/k2txds7tn9cdppeuchiz.jpg', 'sdawda', '2022-11-03 23:45:09', '2022-11-03 23:45:09'),
(5, 'Build Homes To The Poor', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.', 'http://res.cloudinary.com/dhshtvtrl/image/upload/v1667544722/nft_charity/urobvnb3tvjlqzbafazm.jpg', 'http://res.cloudinary.com/dhshtvtrl/image/upload/v1667544723/nft_charity/m0fssenwp55px4w3mzs0.jpg', 'ádawd', '2022-11-03 23:52:04', '2022-11-03 23:52:04'),
(6, 'd', 'dắd', 'http://res.cloudinary.com/dhshtvtrl/image/upload/v1667544981/nft_charity/g1otnnfxfqlcol3svuv3.jpg', 'http://res.cloudinary.com/dhshtvtrl/image/upload/v1667544982/nft_charity/wx9vsghfaa8wut75qnec.jpg', 'd', '2022-11-03 23:56:23', '2022-11-03 23:56:23'),
(7, 'dă', 'dưa', 'http://res.cloudinary.com/dhshtvtrl/image/upload/v1667545106/nft_charity/riegxx160qxomzq7fwuz.jpg', 'http://res.cloudinary.com/dhshtvtrl/image/upload/v1667545107/nft_charity/by5bxmuzdtsrwuky0etg.jpg', 'ád', '2022-11-03 23:58:27', '2022-11-03 23:58:27'),
(8, 'cc', 'cc', 'http://res.cloudinary.com/dhshtvtrl/image/upload/v1667806766/nft_charity/nxuawhd7zvmjrrhcyicl.jpg', 'http://res.cloudinary.com/dhshtvtrl/image/upload/v1667806767/nft_charity/cw9v4jlmms5uk375mycd.jpg', 'cc', '2022-11-07 00:39:28', '2022-11-07 00:39:28'),
(9, 'cc', 'cc', 'http://res.cloudinary.com/dhshtvtrl/image/upload/v1668152087/nft_charity/xacs3vjznwr84as1vyrk.jpg', 'http://res.cloudinary.com/dhshtvtrl/image/upload/v1668152088/nft_charity/wktawonm6qgjqs8t3utl.jpg', 'cc', '2022-11-11 00:34:49', '2022-11-11 00:34:49');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(2, '2022_10_09_142009_create_auctions_table', 1),
(3, '2022_10_09_142024_create_transactions_table', 1),
(4, '2022_10_09_142041_create_campaigns_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `trans_id` varchar(255) NOT NULL,
  `account_address` varchar(255) NOT NULL,
  `amount` double(8,2) NOT NULL,
  `is_nft_trans` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`trans_id`, `account_address`, `amount`, `is_nft_trans`, `created_at`, `updated_at`) VALUES
('trans_id', '0xkawdkaw213123123', 0.00, 0, '2022-10-09 08:44:56', '2022-10-09 08:44:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auctions`
--
ALTER TABLE `auctions`
  ADD PRIMARY KEY (`nft_id`);

--
-- Indexes for table `campaigns`
--
ALTER TABLE `campaigns`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`trans_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `campaigns`
--
ALTER TABLE `campaigns`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
