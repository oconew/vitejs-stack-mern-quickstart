function VideoHero() {
  return (
    <>
      <section className="video flex">
        <video
          autoPlay
          playsInline
          muted
          loop
          id="video"
          style={{
            width: "100% !important",
            height: "100% !important",
            maxHeight: "56.25vw !important",
          }}
        >
          <source src="/resources/tomato_video.mp4" type="video/mp4" />
        </video>
      </section>
    </>
  );
}

export default VideoHero;
