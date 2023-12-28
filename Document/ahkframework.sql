-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 04, 2023 at 01:41 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ahkframework`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact_us`
--

CREATE TABLE `contact_us` (
  `id` int(4) NOT NULL,
  `contact_name` varchar(25) NOT NULL,
  `contact_email` varchar(55) NOT NULL,
  `contact_mobile` varchar(15) NOT NULL,
  `contact_information` text NOT NULL,
  `contact_time` text NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact_us`
--

INSERT INTO `contact_us` (`id`, `contact_name`, `contact_email`, `contact_mobile`, `contact_information`, `contact_time`) VALUES
(1, 'ghori bhargav', 'ghoribhargav@gmail.com', '1234567890', 'This is first contact message', '2023-10-04 17:04:13'),
(2, 'smit meghani', 'smitmeghani@gmail.com', '987654321', 'This is second contact message', '2023-10-04 17:04:31'),
(3, 'nikhil trambadiya', 'nikhiltrambadiya@gmail.com', '1234567890', 'This is third contact message', '2023-10-04 17:04:13'),
(4, 'pratik vasoya', 'pratikvasoya@gmail.com', '987654321', 'This is four contact message', '2023-10-04 17:04:31'),
(5, 'sushil movaliya', 'sushilmovaliya@gmail.com', '1234567890', 'This is fifth contact message', '2023-10-04 17:04:13'),
(6, 'rut patel', 'rutpatel@gmail.com', '987654321', 'This is sixth contact message', '2023-10-04 17:04:31'),
(7, 'sheel vaghela', 'sheelvaghela@gmail.com', '1234567890', 'This is seventh contact message', '2023-10-04 17:04:13'),
(8, 'vaibhav rupapara', 'vaibhavrupapara@gmail.com', '987654321', 'This is eighth contact message', '2023-10-04 17:04:31'),
(9, 'kevin umretiya', 'kevinumretiya@gmail.com', '1234567890', 'This is nine contact message', '2023-10-04 17:04:13'),
(10, 'kamal mangroliya', 'kamalmangroliya@gmail.com', '987654321', 'This is tenth contact message', '2023-10-04 17:04:31');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(4) NOT NULL,
  `name` varchar(25) DEFAULT NULL,
  `type` varchar(5) DEFAULT 'Admin',
  `email` varchar(55) DEFAULT NULL,
  `phone` varchar(10) NOT NULL,
  `password` text DEFAULT NULL,
  `add_time` text DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `type`, `email`, `phone`, `password`, `add_time`) VALUES
(1, 'Bhargav', 'Admin', 'bhargav@gmail.com', '8690914276', '123456', '2023-10-04 17:05:16'),
(2, 'ghori', 'Admin', 'ghori1@gmail.com', '8690914545', '123456', '2023-10-04 17:05:37');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact_us`
--
ALTER TABLE `contact_us`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`,`phone`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact_us`
--
ALTER TABLE `contact_us`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
