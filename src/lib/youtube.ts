export const getYoutubeIdFromUrl = (url: string) => {
  if (url.includes("youtu.be")) {
    return url.replace("https://youtu.be/", "").split("?")[0];
  }
  if (url.includes("watch?v=")) {
    return url.split("v=")[1].split("&")[0];
  }
  if (url.includes("embed")) {
    return url.replace("https://www.youtube.com/embed/", "").split("?")[0];
  }

  return url;
};

export const parseYoutubeDurationToSeconds = (duration: string) => {
  let seconds = 0;

  const matches = duration.match(/[0-9]+[HMS]/g);
  if (!matches) return seconds;

  for (const part of matches) {
    const unit = part.charAt(part.length - 1);
    const amount = Number.parseInt(part.slice(0, -1));

    switch (unit) {
      case "H":
        seconds += amount * 60 * 60;
        break;
      case "M":
        seconds += amount * 60;
        break;
      case "S":
        seconds += amount;
        break;
      default:
        break;
    }
  }

  return seconds;
};

/**
 * @param seconds
 * @returns HH:mm:ss
 */
export const secondToTimeString = (seconds: number, showHour?: boolean) => {
  const m = Math.floor((seconds % 3600) / 60)
    .toFixed(0)
    .padStart(2, "0");
  const s = Math.floor((seconds % 3600) % 60)
    .toFixed(0)
    .padStart(2, "0");

  if (showHour === true) {
    const h = Math.floor(seconds / 3600)
      .toFixed(0)
      .padStart(2, "0");
    return `${h}:${m}:${s}`;
  }
  return `${m}:${s}`;
};

export const getYoutubeEmbedUrl = (arg: string, by: "url" | "id") => {
  if (!arg) return arg || "";
  const id = by === "url" ? getYoutubeIdFromUrl(arg) : arg;
  return `https://www.youtube.com/embed/${id}`;
};
