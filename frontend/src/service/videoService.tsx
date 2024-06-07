import { VideoService } from "@/service";

export async function fetchVideoData() {
    try {
        const { data } = await VideoService();
        const content = data.youtubes.data;
        return content
      }
      catch (e: any) {
        console.log("error:\n", e.message);
      }
}
