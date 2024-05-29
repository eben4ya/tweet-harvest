import { crawl } from "./crawl";
import { ACCESS_TOKEN } from "./env";

crawl({
  ACCESS_TOKEN: "isi access token kalian sendiri", //! TOKEN TWITTER
  SEARCH_KEYWORDS: `banjir`,
  // TWEET_THREAD_URL:
    // "https://x.com/search?q=bencana%20banjir%20%20%22banjir%20%22%20(air%20OR%20hujan%20OR%20jakarta%20OR%20rumah%20OR%20warga)%20-hoax%20-hoaks%20(%23banjir)%20lang%3Aid%20until%3A2024-05-01%20since%3A2023-05-01&src=typed_query",
  TARGET_TWEET_COUNT: 2500,
  OUTPUT_FILENAME: "banjirX3.csv",
  DELAY_EACH_TWEET_SECONDS: 0,
  DELAY_EVERY_100_TWEETS_SECONDS: 0,
  SEARCH_TAB: "CUSTOM",
  CSV_INSERT_MODE: "REPLACE",
});
