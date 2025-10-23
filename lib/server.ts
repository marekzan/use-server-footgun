"use server";

export const isOwner = (userMail: string, ownerMail: string) => {
	return userMail === ownerMail;
};
