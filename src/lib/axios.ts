import { getSession } from "@/lib/auth";
import axios from "axios";
import FileSaver from "file-saver";

export const apiCaller = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 15000,
  withCredentials: true,
});

apiCaller.interceptors.request.use(async (config) => {
  const { session } = await getSession();
  config.headers.Authorization = `Bearer ${session?.accessToken}`;
  return config;
});

export const downloadFileToBlob = async (
  url: string,
  params: object | undefined,
  onProgress?: (progress: number) => void,
) => {
  try {
    const res = await apiCaller({
      method: "GET",
      url,
      responseType: "blob",
      params,
      timeout: 2 * 60 * 1000,
      onDownloadProgress: (progressEvent) => {
        if (progressEvent.lengthComputable) {
          if (progressEvent.total) {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            onProgress?.(percentCompleted);
          }
        }
      },
    });

    const blob = res.data as Blob;
    return Promise.resolve({ res, blob });
  } catch (e) {
    return Promise.reject(e);
  }
};

export const download = async (
  url: string,
  mode: "save" | "window",
  params?: object,
  filename?: string,
  onProgress?: (progress: number) => void,
) => {
  try {
    const { res, blob } = await downloadFileToBlob(url, params, onProgress);
    let exportFileName = "";
    try {
      exportFileName = res.headers["content-disposition"].split("filename=")[1];
    } catch (_e) {}
    if (!exportFileName) exportFileName = filename || "file";

    if (mode === "save") {
      FileSaver.saveAs(blob, exportFileName);
    } else {
      const fileURL = URL.createObjectURL(blob);
      window.open(fileURL, exportFileName, "toolbar=yes,top=0,left=100,width=1000,height=700");
    }

    return Promise.resolve({ filename: exportFileName });
  } catch (e) {
    return Promise.reject(e);
  }
};

export default apiCaller;
