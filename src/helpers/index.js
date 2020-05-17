export const extractDomain = (url) =>
  url.replace("http://", "").replace("https://", "").split(/[/?#]/)[0];

// modified from https://stackoverflow.com/a/52810852
export const timeAgo = (date) => {
  const NOW = new Date();
  const times = [
    ["second", 1],
    ["minute", 60],
    ["hour", 3600],
    ["day", 86400],
    ["week", 604800],
    ["month", 2592000],
    ["year", 31536000],
    ["century", 3155673600],
  ];

  let diff = Math.round((NOW - date) / 1000);

  for (let t = 0; t < times.length; t++) {
    if (diff < times[t][1]) {
      if (t === 0) {
        return "Just now";
      } else {
        diff = Math.round(diff / times[t - 1][1]);
        return diff + " " + times[t - 1][0] + (diff === 1 ? " ago" : "s ago");
      }
    }
  }
};
