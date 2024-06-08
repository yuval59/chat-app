CREATE TABLE `channels` (
	`id` varchar(36) NOT NULL,
	`name` varchar(256),
	CONSTRAINT `channels_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `message` (
	`id` varchar(36) NOT NULL,
	`username` varchar(256) NOT NULL,
	`message` text NOT NULL,
	`createdAt` timestamp DEFAULT CURRENT_TIMESTAMP,
	`channelId` varchar(36) NOT NULL,
	CONSTRAINT `message_id` PRIMARY KEY(`id`)
);
