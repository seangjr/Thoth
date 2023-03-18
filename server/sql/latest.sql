CREATE TABLE IF NOT EXISTS `users` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `username` varchar(255) NOT NULL,
    `display_name` VARCHAR(255) NULL,
    `image` BLOB NULL,
    `bio` TEXT NULL,
    `password` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL,
    `role` VARCHAR(255) NOT NULL DEFAULT 'user',
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `posts` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `title` varchar(255) NOT NULL,
    `content` text NOT NULL,
    `tag` VARCHAR(255) NOT NULL,
    `user_id` int(11) NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    KEY `user_id_idx` (`user_id`)
);

CREATE TABLE IF NOT EXISTS `comments` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `post_id` int(11) NOT NULL,
    `user_id` int(11) NOT NULL,
    `comment` text NOT NULL,
    `parent_id` INT(11) NULL,
    `upvotes` int(11) NOT NULL DEFAULT '0',
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    KEY `post_id_idx` (`post_id`),
    KEY `user_id_idx` (`user_id`)
);

CREATE TABLE IF NOT EXISTS `upvotes_posts` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `post_id` int(11) NOT NULL,
    `user_id` int(11) NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    KEY `post_id_idx` (`post_id`),
    KEY `user_id_idx` (`user_id`)
);

CREATE TABLE IF NOT EXISTS `upvotes_comments` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `comment_id` int(11) NOT NULL,
    `user_id` int(11) NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    KEY `comment_id_idx` (`comment_id`),
    KEY `user_id_idx` (`user_id`)
)
-- -------------------------------------------------------------------------------------------
-- IGNORE
-- ME
-- PLEASE
-- -------------------------------------------------------------------------------------------

ALTER TABLE `posts` DROP `upvotes`;
ALTER TABLE `comments` DROP `upvotes`;
ALTER TABLE users ADD COLUMN bio TEXT NULL AFTER ;

-- SELECT STATEMENT TO COUNT THE NUMBER OF UPVOTES FOR A POST
SELECT COUNT(*) FROM upvotes_posts WHERE post_id = ?;

-- SELECT STATEMENT TO COUNT THE NUMBER OF UPVOTES FOR A COMMENT
SELECT COUNT(*) FROM upvotes_comments WHERE comment_id = ?;

-- SELECT STATEMENT TO CHECK IF A USER HAS ALREADY UPVOTED A POST
SELECT * FROM upvotes_posts WHERE post_id = ? AND user_id = ?;

-- SELECT STATEMENT TO CHECK IF A USER HAS ALREADY UPVOTED A COMMENT
SELECT * FROM upvotes_comments WHERE comment_id = ? AND user_id = ?;

-- INSERT STATEMENT TO ADD A NEW UPVOTE TO A POST
INSERT INTO upvotes_posts (post_id, user_id) VALUES (?, ?);

-- INSERT STATEMENT TO ADD A NEW UPVOTE TO A COMMENT
INSERT INTO upvotes_comments (comment_id, user_id) VALUES (?, ?);

-- DELETE STATEMENT TO REMOVE AN UPVOTE FROM A POST
DELETE FROM upvotes_posts WHERE post_id = ? AND user_id = ?;

-- DELETE STATEMENT TO REMOVE AN UPVOTE FROM A COMMENT
DELETE FROM upvotes_comments WHERE comment_id = ? AND user_id = ?;
SHOW TABLES;