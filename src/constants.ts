import dayjs from "dayjs";
import path from "path";

export const TWITTER_SEARCH_ADVANCED_URL = {
  TOP: "https://x.com/search-advanced",
  LATEST: "https://x.com/search-advanced?f=live",
  CUSTOM:
    "https://x.com/search?q=bencana%20banjir%20%20%22banjir%20%22%20(air%20OR%20hujan%20OR%20jakarta%20OR%20rumah%20OR%20warga)%20-hoax%20-hoaks%20(%23banjir)%20lang%3Aid%20until%3A2024-05-01%20since%3A2023-05-01&src=typed_query",
}; // ! INPUT LINK TWITTER KALIAN SENDIRI PAKAI ADVANCED SEARCH

export const NOW = dayjs().format("DD-MM-YYYY HH-mm-ss");

export const FOLDER_DESTINATION = "./tweets-data";
export const FUlL_PATH_FOLDER_DESTINATION = path.resolve(FOLDER_DESTINATION);

export const FILTERED_FIELDS = [
  "created_at",
  "id_str",
  "full_text",
  "quote_count",
  "reply_count",
  "retweet_count",
  "favorite_count",
  "lang",
  "user_id_str",
  "conversation_id_str",
  "username",
  "tweet_url",
  "image_url",
  "location",
  "in_reply_to_screen_name",
];
