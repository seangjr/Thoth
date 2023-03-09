CREATE TABLE IF NOT EXISTS `users` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `username` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `posts` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `title` varchar(255) NOT NULL,
    `content` text NOT NULL,
    `upvotes` int(11) NOT NULL DEFAULT '0',
    `user_id` int(11) NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    KEY `user_id_idx` (`user_id`)
);

CREATE TABLE IF NOT EXISTS `post_images` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `post_id` int(11) NOT NULL,
    `image` BLOB NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    KEY `post_id_idx` (`post_id`)
);

CREATE TABLE IF NOT EXISTS `comments` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `post_id` int(11) NOT NULL,
    `user_id` int(11) NOT NULL,
    `comment` text NOT NULL,
    `upvotes` int(11) NOT NULL DEFAULT '0',
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    KEY `post_id_idx` (`post_id`),
    KEY `user_id_idx` (`user_id`)
);

-- ADD THE ROLE IN USERS TABLE
ALTER TABLE `users` ADD `role` VARCHAR(255) NOT NULL DEFAULT 'user' AFTER `email`;

-- ADD DISPLAY NAME IN USERS TABLE
ALTER TABLE `users` ADD `display_name` VARCHAR(255) NULL AFTER `username`;

-- ADD BLOB IMAGE IN USERS TABLE
ALTER TABLE `users` ADD `image` BLOB NULL AFTER `display_name`;

-- ADD BIO IN USERS TABLE
ALTER TABLE `users` ADD `bio` TEXT NULL AFTER `image`;

-- ADD TAG TO POSTS TABLE
ALTER TABLE `posts` ADD `tag` VARCHAR(255) NOT NULL AFTER `content`;

-- delete role column from posts table
ALTER TABLE `posts` DROP `role`;

-- delete all the posts
DELETE FROM `posts`;

SHOW TABLES;