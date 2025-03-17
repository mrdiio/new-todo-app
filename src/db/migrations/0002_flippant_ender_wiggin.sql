CREATE TABLE "permissions" (
	"id" text PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"guard" varchar,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now(),
	"deleted_at" timestamp,
	CONSTRAINT "permissions_name_unique" UNIQUE("name")
);
