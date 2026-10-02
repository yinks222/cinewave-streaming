
   "use client";

import { useEffect, useRef } from "react";

export default function Player({ playbackId, title }) {
  const videoRef = useRef(null);

  useEffect(() => {
    let hls;

    async function setupPlayer() {
      if (!videoRef.current || !playbackId) return;

      const video = videoRef.current;

      const src = `https://stream.mux.com/${playbackId}.m3u8`;

      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = src;
        return;
      }

      const Hls = (await import("hls.js")).default;

      if (Hls.isSupported()) {
        hls = new Hls();

        hls.loadSource(src);
        hls.attachMedia(video);

        hls.on(Hls.Events.ERROR, (_, data) => {
          console.error("Mux playback error:", data);
        });
      }
    }

    setupPlayer();

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [playbackId]);

  if (!playbackId) {
    return (
      <div className="videoUnavailable">
        <p>Episode video is not available yet.</p>
      </div>
    );
  }

  return (
    <div className="cinewavePlayer">
      <video
        ref={videoRef}
        controls
        playsInline
        preload="metadata"
        className="videoElement"
        aria-label={title || "Vireon video player"}
      />

      <div className="playerTitle">
        {title || "Rebirth"}
      </div>
    </div>
  );
}    